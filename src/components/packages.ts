import ahobilamImage from "@/assets/ahobilam_top.jpg";
import puriImage from "@/assets/puri_top.jpg";
import dubaiImage from "@/assets/dubai_top.jpg";
import varanasiAyodhyaImage from "@/assets/ayodhya_top.jpg";
import kashmirImage from "@/assets/kashmir_top.jpg";
import kamakyaImage from "@/assets/kamakya_top1.jpg";


interface ImageModule {
  default: string;
}

const ahobilamImages = Object.values(
  import.meta.glob('@/assets/packages/ahobilam/*.{jpg,jpeg,png,webp,svg}', { eager: true })
).map((module: ImageModule) => module.default);
const kashmirImages = Object.values(
  import.meta.glob('@/assets/packages/kashmir/*.{jpg,jpeg,png,webp,svg}', { eager: true })
).map((module: ImageModule) => module.default);
const puriImages = Object.values(
  import.meta.glob('@/assets/packages/puri/*.{jpg,jpeg,png,webp,svg}', { eager: true })
).map((module: ImageModule) => module.default);
const danurMasaImages = Object.values(
  import.meta.glob('@/assets/packages/danurMasa/*.{jpg,jpeg,png,webp,svg}', { eager: true })
).map((module: ImageModule) => module.default);
const varanasiAyodhyaImages = Object.values(
  import.meta.glob('@/assets/packages/varanasiAyodhyaImages/*.{jpg,jpeg,png,webp,svg}', { eager: true })
).map((module: ImageModule) => module.default);
const dubaiImages = Object.values(
  import.meta.glob('@/assets/packages/dubai/*.{jpg,jpeg,png,webp,svg}', { eager: true })
).map((module: ImageModule) => module.default);
const kamakyaImages = Object.values(
  import.meta.glob('@/assets/packages/kamakya/*.{jpg,jpeg,png,webp,svg}', { eager: true })
).map((module: ImageModule) => module.default);



export const packagesData = [
  {
    id: "dubai",
    name: "Dubai & Abu Dhabi: The Grand Extravaganza",
    destinations: "Dubai • Abu Dhabi • Sharjah",
    duration: "6 Days / 5 Nights",
    description:
      "Experience the perfect blend of luxury, adventure, and culture with our exclusive Dubai Travel Package! This journey covers iconic attractions of Dubai, Sharjah and Abu Dhabi — from the thrilling desert safari and Ferrari World to breathtaking views at the Burj Khalifa and Dubai Frame. Also included are the vibrant Miracle Garden, Global Village, and the awe-inspiring Museum of the Future.",
    price: "₹1,09,900/-",
    Oldprice: "₹1,49,900/-",
    rating: 4.9,
    type: "International",
    coverImage: dubaiImage,
    images: dubaiImages,
    pdf: "/itinerary/dubai.pdf",
    inclusions: [
      "Return Flights (Bangalore – Dubai – Bangalore)",
      "UAE Visa & Insurance",
      "4-Star Hotel Accommodation with Breakfast",
      "All Tours and Transfers in AC Coach",
      "Desert Safari with BBQ Dinner",
      "Dhow Cruise with Dinner",
      "Dubai City Tour",
      "Burj Khalifa 124th Floor Entry",
      "Dubai Frame Entry",
      "Museum of the Future Entry",
      "Abu Dhabi City Tour with Ferrari World Entry",
      "Miracle Garden and Global Village Access",
      "Private Airport Transfers (DXB)"
    ],
    exclusions: [
      "Personal expenses such as tips, shopping, or laundry",
      "Meals not mentioned in inclusions",
      "Optional activities or upgrades",
      "Travel/medical insurance (beyond package coverage)",
      "Any increase in taxes or fuel surcharges post booking"
    ],
    terms: [
      "Passport must be valid for 6 months",
      "Visa approval is traveler’s responsibility",
      "Advance payment is non-refundable",
      "Company not liable for delays due to traffic or flight changes",
      "Itinerary may be shuffled depending on flight timings"
    ]

  },
  {
    id: "kashi-ayodhya-pilgrimage",
    name: "Kashi – Ayodhya – Prayag Pilgrimage",
    destinations: "Prayag • Ayodhya • Kashi",
    duration: "4 Days / 3 Nights",
    description:
      "Embark on a spiritually enriching 4-day journey to Prayagraj and Ayodhya, designed for comfort, devotion, and a deeply immersive pilgrimage experience. This yatra blends sacred rituals, temple visits, serene sightseeing, and balanced rest—ideal for families, seniors, and first-time pilgrims.",
    price: "₹18,999/-",
    Oldprice: "₹32,999/-",
    rating: 4.8,
    type: "Domestic",
    pdf: "/itinerary/prayagraj_ayodhya_kashi.pdf",
    tag: "Flight Package",
    coverImage: varanasiAyodhyaImage,
    images: varanasiAyodhyaImages,
    inclusions: ["Round-trip air tickets from Bangalore",
      "3-star hotel accommodation on twin-sharing basis",
      "AC local transport for all sightseeing and transfers",
      "Pure vegetarian meals – Breakfast, Lunch & Dinner",
      "1 litre drinking water bottle per person per day",
      "Guided spiritual tour with dedicated assistance"
    ],
    exclusions: [
      "Donations at temples",
      "Personal expenses(shopping, tips, etc.)",
      "Boat rides at Prayagraj & Varanasi",
      "Special entry tickets (Ayodhya & Kashi)",
      "Local rickshaw charges"
    ],
    terms: [
      "Child below 6 years is complimentary.",
      "Child aged 6–12 years charged at 40% of adult cost (extra bed provided).",
      "Children aged 12+ considered adults.",
      "Room sharing as per package occupancy (twin/triple).",
      "Advance payment required to confirm booking.",
      "Personal expenses (tips, pooja items, rituals, entry tickets, extra boat rides, etc.)",
    ],
  },
  {
    id: "kashmir",
    name: "Kashmir Tour - Christmas",
    destinations:
      "Bangalore • Srinagar • Sonamarg • Pahalgam • Gulmarg",
    duration: "5 Days / 4 Nights",
    description:
      "Experience a magical Christmas in Kashmir with Mantra Mile. Surrounded by snow-capped mountains, serene valleys, and the timeless charm of Srinagar’s lakes and gardens, Kashmir transforms into a winter paradise during the festive season. Our Christmas tour offers a peaceful retreat with scenic landscapes, warm hospitality, traditional Kashmiri culture, and unforgettable moments in the heart of the Himalayas. Celebrate the holidays in a place where nature, beauty, and tranquility come together in perfect harmony.",
    price: "₹59,000",
    rating: 4.8,
    type: "Domestic",
    pdf: "/itinerary/kashmir.pdf",
    coverImage: kashmirImage,
    images: kashmirImages,
    inclusions: [
      "Accommodation in selected hotels or houseboats (double or triple sharing)",
      "Daily breakfast & dinner",
      "Airport pick-up and drop-off in Srinagar",
      "Local transportation for all sightseeing",
      "Guided tours to major attractions (Dal Lake, Gulmarg, Pahalgam, Sonamarg – weather permitting)",
      "Shikara ride on Dal Lake",
      "Bonfire or Christmas evening gathering (if weather allows)",
      "24/7 support from the Mantra Mile team"
    ],
    exclusions: [
      "Airfare to and from Srinagar",
      "Lunches, snacks, and personal expenses",
      "Gondola tickets in Gulmarg",
      "Optional activities (skiing, sledging, snowboarding, photography sessions, etc.)",
      "Entrance fees to monuments, parks, or attractions",
      "Travel insurance",
      "Anything not specifically mentioned in the “Included” section"
    ],
    terms: [
      "A non-refundable deposit is required to secure your booking.",
      "Full payment must be completed before the start of the tour.",
      "Itinerary is subject to change based on weather or local conditions.",
      "In case of heavy snowfall or road closures, alternative sightseeing will be arranged.",
      "Mantra Mile is not responsible for delays, cancellations, or changes caused by airlines, weather, or government restrictions.",
      "Guests must carry valid ID proof at all times.",
      "Travel insurance is highly recommended.",
      "Refunds are not provided for unused services or no-shows."
    ],
  },
  {
    id: "ahobilam-narasimha-pilgrimage",
    name: "Ahobilam Narasimha Pilgrimage",
    destinations: "Bangalore • Ahobilam (Upper & Lower) • Various Narasimha Temples",
    duration: "2 Days / 1 Night",
    description:
      "Ahobilam Yatra is a sacred pilgrimage to the mystical hills of the Nallamala Forest, home to the nine divine forms of Lord Narasimha. Surrounded by pristine nature, waterfalls, and ancient temples, this journey offers a powerful blend of spirituality and adventure. Mantra Mile organizes guided tours to Ahobilam, providing a seamless and enriching experience as you explore the Nava-Narasimha shrines, discover their legends, and immerse yourself in the unique spiritual atmosphere of this holy land.",
    price: "₹6,499/-",
    Oldprice: "₹7,499/-",
    rating: 4.7,
    type: "Domestic",
    tag: "Group Package",
    coverImage: ahobilamImage,
    images: ahobilamImages,
    pdf: "/itinerary/ahobilam.pdf",
    inclusions: [
      "Round-trip coach transport from Bangalore",
      "Accommodation at lodges in Ahobilam (as per the itinerary)",
      "Packed breakfasts/lunches/dinners as specified in the itinerary",
      "Guided darshans and temple briefings",
      "Support from local coordinators and puja/arrangement assistance"
    ],
    exclusions: [
      "Personal expenses (tips, phone calls, laundry)",
      "Travel insurance",
      "Any meals or services not explicitly listed in inclusions",
      "Expenses arising from weather-related or road delays",
    ],
    terms: [
      "Pilgrims must carry valid government ID (Aadhaar/PAN/Passport) for verification",
      "Advance payment required to confirm booking; deposits may be non-refundable",
      "Itinerary may change depending on temple timings, weather, or local conditions",
      "Participants should be medically fit for moderate walking/hill paths",
      "Company not liable for delays or disruptions due to natural causes or local restrictions"
    ],
  },
  {
    id: "puri-jagannath",
    name: "Puri Jagannath & Mayapur – Divine East India Pilgrimage",
    destinations:
      "Puri • Jagannath Temple • Konark Sun Temple • Chilika Lake • Bhubaneswar • Kolkata • Gangasagar • Mayapur",
    duration: "7 Days / 6 Nights",
    description:
      "Discover Odisha and Bengal’s spiritual and cultural gems with visits to Lingaraj, Konark Sun Temple, Jagannath Temple, Chilika Lake, Gangasagar and Mayapur. A soulful journey through India’s heritage, scripture, and devotional traditions — featuring temple darshans, heritage villages, and key Vaishnava & Shaiva sites.",
    price: "₹49,000* & 13,500* INR (Train Package)",
    rating: 4.6,
    type: "Domestic",
    coverImage: puriImage,
    images: puriImages,
    pdf: "/itinerary/jagannathpuri.pdf",
    inclusions: [
      "Flights (Bangalore – Bhubaneswar; Kolkata – Bangalore) as per itinerary",
      "Deluxe hotel stays (as specified)",
      "All transfers in AC private vehicle",
      "3-tier AC train segment (Puri → Kolkata) where applicable",
      "Guided sightseeing with English-speaking guide",
      "Meals as per itinerary (specified)",
      "Entry fees & applicable taxes"
    ],
    exclusions: [
      "Personal expenses (tips, donations, rickshaws, phone calls)",
      "Optional activities (extra boat rides, optional experiences)",
      "Medical / travel insurance",
      "Anything not mentioned in inclusions"
    ],
    terms: [
      "Full package amount: ₹49,000/-",
      "Payment schedule: Rs. 25,000 at registration + remaining before departure (15 days prior)",
      "Advance payment required to confirm booking; deposits may be non-refundable",
      "Company not liable for delays due to weather, local restrictions or temple rituals",
      "Itinerary may change depending on temple timings, train/flight schedules or road conditions",
      "Valid ID required for hotel check-in"
    ],
  },
  {
    id: "kamakhya-shillong-kaziranga",
    name: "Kamakhya – Shillong – Kaziranga Sacred Nature Yatra",
    destinations:
      "Guwahati • Kamakhya • Shillong • Mawlynnong • Dawki • Cherrapunji • Kaziranga National Park",
    duration: "8 Days / 7 Nights",
    description:
      "A soulful and immersive journey through powerful Shakti temples, misty Himalayan hills, living root bridges, crystal-clear rivers, and wild forests of Northeast India. This yatra blends deep spiritual experiences at Kamakhya with conscious slow travel through Meghalaya’s natural wonders and the rich wildlife of Kaziranga — designed not just to see places, but to truly feel their spirit.",
    price: "₹35,000/-",
    Oldprice: "₹40,000/-",
    rating: 4.9,
    type: "Domestic",
    tag: "Flag Journey",
    pdf: "/itinerary/kamakhya.pdf",
    coverImage: kamakyaImage,
    images: kamakyaImages,
    inclusions: [
      "Non-AC Bus / Coaster Bus for entire journey",
      "7 nights accommodation in clean, comfortable 3★ or similar hotels",
      "All meals included – Breakfast, Lunch & Dinner (Pure Vegetarian)",
      "All transfers and sightseeing as per itinerary",
      "Dedicated Mantra Miles Tour Manager / Yatra Leader",
      "Spiritual & cultural guidance throughout the journey",
      "Conscious, slow-travel approach",
      "Taxes, tolls, parking, and driver allowance",
    ],
    exclusions: [
      "Jeep Safari / Elephant Safari charges at Kaziranga (direct payment)",
      "Personal expenses (shopping, snacks, tips, etc.)",
      "Travel insurance",
      "GST / applicable taxes",
      "Any sightseeing not mentioned in the itinerary",
    ],
    terms: [
      "Original photo ID mandatory with 2 photocopies",
      "Foreign nationals may incur additional charges",
      "Seats allotted on a first-come, first-served basis",
      "Advance payment of 60% required at registration; balance 40% two weeks before departure",
      "Once registered, advance amount is non-refundable",
      "Itinerary subject to change due to weather or unforeseen circumstances",
      "Decision of the Yatra Director will be final and binding",
    ],
  },
];
export default packagesData;