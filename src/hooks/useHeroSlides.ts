import { useMemo } from "react";
import { bundledHeroSlides } from "@/data/heroSlides";
import { usePackages } from "@/hooks/usePackages";
import type { HeroSlide } from "@/types/hero";

// Hero slides come from the trips: any live trip with "Show in hero" on and a hero photo.
// With none (or before live data loads), the bundled slides keep the home page looking as before.
export function useHeroSlides(): HeroSlide[] {
  const packages = usePackages();
  return useMemo(() => {
    const slides = packages
      .filter((p) => p.showInHero && p.heroImage)
      .map((p) => ({
        id: p.id,
        image: p.heroImage as string,
        title: p.heroTitle || p.name,
        subtitle: p.heroSubtitle || p.description,
        highlight: p.heroHighlight || "",
        cta: p.heroCta || "Explore",
        linkId: p.id,
      }));
    return slides.length ? slides : bundledHeroSlides;
  }, [packages]);
}
