import ayodhya from "@/assets/ayodhya_top.jpg";
import dubai from "@/assets/dubai_top.jpg";
import ahobilam from "@/assets/ahobilam_top.jpg";
import puri from "@/assets/puri_top.jpg";
import kamakya from "@/assets/kamakya_top1.jpg";
import Khailash from "@/assets/kailash-mansarovar-4-1.jpg";
import type { HeroSlide } from "@/types/hero";

// Bundled slides: shown until live slides load, and whenever the database has none.
export const bundledHeroSlides: HeroSlide[] = [
  {
    id: "kailash-mansarovar",
    image: Khailash,
    title: "Kailash Mansarovar Yatra",
    subtitle: "Journey to the Divine — Sacred Pilgrimage of Spiritual Liberation",
    highlight: "13-16 Days • Revered by Hindus, Buddhists, Jains & Bon followers",
    cta: "Explore Yatra",
    linkId: "kailash-mansarovar",
  },
  {
    id: "dubai",
    image: dubai,
    title: "Dubai, UAE",
    subtitle: "Explore Dubai: The Jewel of the Middle East",
    highlight: "Experience the future of tourism with Dubai",
    cta: "Reserve My Seat",
    linkId: "dubai",
  },
  {
    id: "kashi-ayodhya-pilgrimage",
    image: ayodhya,
    title: "Varanasi & Ayodhya Ram Lala Pilgrimage",
    subtitle: "Experience India`s most sacred spiritual circuit — 3 Days / 2 Nights",
    highlight: "Departure from Bangalore",
    cta: "Join the Pilgrimage",
    linkId: "kashi-ayodhya-pilgrimage",
  },
  {
    id: "ahobilam-narasimha-pilgrimage",
    image: ahobilam,
    title: "Ahobilam, Andhra Pradesh",
    subtitle: "Journey to the sacred Nava-Narasimha temples",
    highlight: "Special 2026 Pilgrimage Departures",
    cta: "Enquire Now",
    linkId: "ahobilam-narasimha-pilgrimage",
  },
  {
    id: "puri-jagannath",
    image: puri,
    title: "Jagannath Puri & Mayapur, India",
    subtitle: "Experience the sacred journey from the holy city of Lord Jagannath to the spiritual heart of Mayapur",
    highlight: "Includes visits to Kolkata, Puri, Bhubaneswar, Konark & Sri Mayapur Dham",
    cta: "Book My Seat",
    linkId: "puri-jagannath",
  },
  {
    id: "kamakhya-shillong-kaziranga",
    image: kamakya,
    title: "Kamakhya – Shillong – Kaziranga Sacred Nature Yatra",
    subtitle: "A soulful journey through Shakti temples, misty hills, living root bridges, pristine rivers, and wild forests",
    highlight: "Kamakhya Shakti Peetha • Living Root Bridges • Dawki River • Cherrapunji • Kaziranga National Park",
    cta: "Reserve My Seat",
    linkId: "kamakhya-shillong-kaziranga",
  },
];
