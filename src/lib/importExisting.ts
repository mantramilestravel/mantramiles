import { bundledHeroSlides } from "@/data/heroSlides";
import { fallbackPackages } from "@/hooks/usePackages";
import { listAllPackages, savePackage, uploadMedia, type AdminPackage } from "@/lib/adminApi";
import type { PackageType } from "@/types/package";

// Re-hosts a bundled file (a hashed Vite asset or a /itinerary PDF) in Supabase Storage.
async function rehost(folder: string, url: string | undefined): Promise<string> {
  if (!url) return "";
  const response = await fetch(encodeURI(decodeURI(url)));
  if (!response.ok) throw new Error(`Could not read ${url}`);
  const blob = await response.blob();
  const name = decodeURI(url.split("?")[0].split("/").pop() || "file");
  return uploadMedia(folder, new File([blob], name, { type: blob.type }));
}

const heroFor = (id: string) => bundledHeroSlides.find((s) => s.linkId === id);

// Trips on the website that are not in the admin yet, plus imported trips still missing their hero slide.
export async function pendingImports() {
  const existing = await listAllPackages();
  const byId = new Map(existing.map((t) => [t.id, t]));
  return {
    missing: fallbackPackages.filter((p) => !byId.has(p.id)),
    needHero: existing.filter((t) => heroFor(t.id) && !t.heroImage && !t.showInHero),
  };
}

// Copies the trips that are hard-coded in the site into Supabase, including their hero banner.
// Safe to re-run: existing trips are only touched to add a missing hero slide.
export async function importExistingTrips(onProgress: (message: string) => void) {
  const { missing, needHero } = await pendingImports();
  const all = await listAllPackages();
  let sortOrder = Math.max(-1, ...all.map((t) => t.sortOrder)) + 1;

  const heroFields = async (id: string, coverSrc: string | undefined, coverUrl: string) => {
    const slide = heroFor(id);
    if (!slide) return {};
    return {
      showInHero: true,
      // Most hero photos are the trip's cover photo, so reuse the upload instead of copying it twice.
      heroImage: slide.image === coverSrc ? coverUrl : await rehost(id, slide.image),
      heroTitle: slide.title,
      heroSubtitle: slide.subtitle,
      heroHighlight: slide.highlight,
      heroCta: slide.cta,
    };
  };

  for (const pkg of missing) {
    onProgress(`Importing ${pkg.name}...`);
    const coverImage = await rehost(pkg.id, pkg.coverImage);
    const imported: PackageType = {
      ...pkg,
      coverImage,
      images: await Promise.all((pkg.images ?? []).map((u) => rehost(pkg.id, u))),
      pdf: await rehost(pkg.id, pkg.pdf),
      variants: pkg.variants
        ? await Promise.all(pkg.variants.map(async (v) => ({ ...v, pdf: await rehost(pkg.id, v.pdf) })))
        : undefined,
      ...(await heroFields(pkg.id, pkg.coverImage, coverImage)),
    };
    await savePackage({ ...imported, published: true, sortOrder: sortOrder++ });
  }

  for (const trip of needHero) {
    onProgress(`Adding hero slide for ${trip.name}...`);
    const bundled = fallbackPackages.find((p) => p.id === trip.id);
    const patch = await heroFields(trip.id, bundled?.coverImage, trip.coverImage ?? "");
    await savePackage({ ...trip, ...patch } as AdminPackage);
  }
  return missing.length + needHero.length;
}
