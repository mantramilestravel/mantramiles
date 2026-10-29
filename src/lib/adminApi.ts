import { supabase } from "@/lib/supabase";
import { rowToPackage } from "@/hooks/usePackages";
import type { PackageType } from "@/types/package";

export type AdminPackage = PackageType & { published: boolean; sortOrder: number };

const client = () => {
  if (!supabase) throw new Error("Supabase is not configured (missing VITE_SUPABASE_* env vars).");
  return supabase;
};

const fromRow = (row: Record<string, any>): AdminPackage => ({
  ...rowToPackage(row),
  published: row.published,
  sortOrder: row.sort_order,
});

const toRow = (p: AdminPackage) => ({
  id: p.id,
  name: p.name,
  destinations: p.destinations,
  duration: p.duration,
  description: p.description,
  price: p.price,
  old_price: p.Oldprice ?? "",
  rating: p.rating,
  type: p.type,
  tag: p.tag || null,
  cover_image: p.coverImage || null,
  images: p.images,
  pdf: p.pdf || null,
  highlights: p.highlights ?? [],
  inclusions: p.inclusions ?? [],
  exclusions: p.exclusions ?? [],
  terms: p.terms ?? [],
  variants: p.variants ?? [],
  itinerary: p.itinerary ?? [],
  show_in_hero: p.showInHero ?? false,
  hero_image: p.heroImage || null,
  hero_title: p.heroTitle ?? "",
  hero_subtitle: p.heroSubtitle ?? "",
  hero_highlight: p.heroHighlight ?? "",
  hero_cta: p.heroCta || "Explore",
  sort_order: p.sortOrder,
  published: p.published,
});

export const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

export async function listAllPackages(): Promise<AdminPackage[]> {
  const { data, error } = await client().from("packages").select("*").order("sort_order");
  if (error) throw error;
  return data.map(fromRow);
}

export async function getPackage(id: string): Promise<AdminPackage | null> {
  const { data, error } = await client().from("packages").select("*").eq("id", id).maybeSingle();
  if (error) throw error;
  return data ? fromRow(data) : null;
}

export async function savePackage(p: AdminPackage) {
  const { error } = await client().from("packages").upsert(toRow(p));
  if (error) throw error;
}

export async function deletePackage(id: string) {
  const { error } = await client().from("packages").delete().eq("id", id);
  if (error) throw error;
}

export async function setPublished(id: string, published: boolean) {
  const { error } = await client().from("packages").update({ published }).eq("id", id);
  if (error) throw error;
}

export async function swapOrder(a: AdminPackage, b: AdminPackage) {
  const db = client();
  const first = await db.from("packages").update({ sort_order: b.sortOrder }).eq("id", a.id);
  if (first.error) throw first.error;
  const second = await db.from("packages").update({ sort_order: a.sortOrder }).eq("id", b.id);
  if (second.error) throw second.error;
}

// Uploads to the public trip-media bucket and returns the public URL.
export async function uploadMedia(folder: string, file: File): Promise<string> {
  const db = client();
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]+/g, "-");
  const path = `${folder || "misc"}/${Date.now()}-${safeName}`;
  const { error } = await db.storage.from("trip-media").upload(path, file, { upsert: false });
  if (error) throw error;
  return db.storage.from("trip-media").getPublicUrl(path).data.publicUrl;
}
