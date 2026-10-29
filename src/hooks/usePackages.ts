import { useQuery } from "@tanstack/react-query";
import { packagesData } from "@/components/packages";
import { supabase } from "@/lib/supabase";
import type { PackageType } from "@/types/package";

export const fallbackPackages = packagesData as unknown as PackageType[];

// Maps a snake_case database row to the PackageType the pages already use.
export const rowToPackage = (row: Record<string, any>): PackageType => ({
  id: row.id,
  name: row.name,
  destinations: row.destinations,
  duration: row.duration,
  description: row.description,
  price: row.price,
  Oldprice: row.old_price,
  rating: Number(row.rating),
  type: row.type,
  tag: row.tag ?? undefined,
  coverImage: row.cover_image ?? undefined,
  images: row.images ?? [],
  pdf: row.pdf ?? undefined,
  highlights: row.highlights ?? [],
  inclusions: row.inclusions ?? [],
  exclusions: row.exclusions ?? [],
  terms: row.terms ?? [],
  variants: row.variants?.length ? row.variants : undefined,
  itinerary: row.itinerary ?? [],
  showInHero: row.show_in_hero ?? false,
  heroImage: row.hero_image ?? undefined,
  heroTitle: row.hero_title ?? "",
  heroSubtitle: row.hero_subtitle ?? "",
  heroHighlight: row.hero_highlight ?? "",
  heroCta: row.hero_cta ?? "Explore",
});

async function fetchPackages(): Promise<PackageType[]> {
  if (!supabase) return fallbackPackages;
  const { data, error } = await supabase
    .from("packages")
    .select("*")
    .eq("published", true)
    .order("sort_order", { ascending: true });
  // An error or empty table (e.g. paused project) must never blank the site.
  if (error || !data?.length) return fallbackPackages;
  return data.map(rowToPackage);
}

// Renders the bundled data immediately, then swaps in the live data once loaded.
export function usePackagesQuery() {
  const { data, isLoading } = useQuery({
    queryKey: ["packages"],
    queryFn: fetchPackages,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
  return { packages: data ?? fallbackPackages, isLoading };
}

export const usePackages = () => usePackagesQuery().packages;
