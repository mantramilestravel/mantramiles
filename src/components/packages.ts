import ahobilamImage from "@/assets/ahobilam_top.jpg";
import puriImage from "@/assets/puri_top.jpg";
import dubaiImage from "@/assets/dubai_top.jpg";
import varanasiAyodhyaImage from "@/assets/ayodhya_top.jpg";
import chardhamImage from "@/assets/chardhaming2.jpg.webp";
import kamakyaImage from "@/assets/kamakya_top1.jpg";
import Khailash from "@/assets/kailash-mansarovar-4-1.jpg";

// Using Kashmir image as placeholder for Kailash (similar mountainous terrain)
const kailashImage = chardhamImage;


interface ImageModule {
  default: string;
}

const ahobilamImages = Object.values(
  import.meta.glob('@/assets/packages/ahobilam/*.{jpg,jpeg,png,webp,svg}', { eager: true })
).map((module: ImageModule) => module.default);
const chardhamImages = Object.values(
  import.meta.glob('@/assets/packages/chardham/*.{jpg,jpeg,png,webp,svg}', { eager: true })
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
    id: "kailash-mansarovar",
    name: "Kailash Mansarovar Yatra",
    destinations: "Kathmandu • Mount Kailash • Mansarovar Lake",
    duration: "13-16 Days",
    description:
      "Embark on a transformative sacred pilgrimage to Mount Kailash and Lake Mansarovar, revered by Hindus, Buddhists, Jains, and Bon followers. Experience spiritual liberation through the sacred circumambulation (Parikrama) across high-altitude terrain with expert guides and comprehensive support.",
    price: "₹2,25,000/-",
    Oldprice: "₹3,20,000/-",
    rating: 4.9,
    type: "Domestic",
    tag: "Pilgrimage",
    coverImage: Khailash,
    images: [], // Will be populated with Kailash images if available
    pdf: "/itinerary/kailash-mansarovar.pdf",
    inclusions: [
      "Accommodation in hotels, guesthouses, and shared rooms",
      "Transportation by AC and non-AC vehicles",
      "All vegetarian meals throughout the journey",
      "Sightseeing tours in Kathmandu",
      "Tibetan travel permits and visa fees",
      "Experienced guides, Sherpas, and medical support",
      "Oxygen cylinders for emergency use",
      "Spiritual ceremonies and puja arrangements"
    ],
    exclusions: [
      "Personal expenses (shopping, tips, donations)",
      "Horse or porter services for Parikrama",
      "Travel insurance and emergency evacuation costs",
      "Extra accommodation due to weather or visa delays"
    ],
    terms: [
      "Passport must be valid for 6 months",
      "Physical fitness required (moderate to strenuous trekking)",
      "Acclimatization highly recommended",
      "Advance payment is non-refundable",
      "Itinerary may change due to weather or altitude conditions"
    ]
  },
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
  id: "chardham",
  name: "Bangalore – Char Dham Yatra",
  destinations:
    "Bangalore • Dehradun • Yamunotri • Gangotri • Kedarnath • Badrinath • Haridwar • Rishikesh",
  duration: "11 Days / 10 Nights",
  description:
    "Embark on the sacred Char Dham Yatra covering Yamunotri, Gangotri, Kedarnath, and Badrinath — a deeply spiritual journey through the majestic Himalayas. This yatra blends devotion, ancient traditions, scenic mountain routes, and disciplined group travel. Designed for seekers looking for a complete and well-organized pilgrimage experience, the journey offers divine temple darshan, breathtaking landscapes, and guidance rooted in Stala Puranas and Sanatana Dharma.",
  price: "₹64,000/-",
  rating: 4.9,
  type: "Domestic",
  pdf: "/itinerary/chardham.pdf",

  coverImage: chardhamImage,
  images: chardhamImages,

  inclusions: [
    "Round-trip flight tickets (Bangalore to Dehradun)",
    "Accommodation in comfortable hotels on twin-sharing basis",
    "Daily meals – Breakfast, Lunch & Dinner",
    "Transportation by AC Tempo Traveller for group size (AC not operational in hilly regions)",
    "All sightseeing and transfers as per itinerary",
    "Experienced tour guide with Stala Purana explanations",
    "All interstate taxes, fuel charges, tolls, parking, and driver allowances",
    "Professional tour management by Mantra Miles Tour (Victory Flag Journey)"
  ],

  exclusions: [
    "Helicopter services, pony rides, palki or porter charges",
    "Special darshan or entry tickets at temple donations",
    "Any personal expenses",
    "Any type of travel or medical insurance",
    "Applicable GST (5%)",
    "Anything not specifically mentioned in inclusions"
  ],

  terms: [
    "Special package cost: ₹64,000 per person (limited period offer)",
    "Yatra validity: May (4th week) & June (4th week) batches – 2026",
    "Rates are subject to availability and may change without prior notice",
    "Booking confirmation subject to seat and flight availability",
    "Helicopter services are not included and are subject to weather conditions",
    "Itinerary may be altered due to weather, road conditions, or government regulations",
    "Participants must be physically fit for trekking (especially Kedarnath trek)",
    "GST 5% applicable on the package cost"
  ]
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
    price: "₹13,500* INR Onwards",
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
    variants: [
      {
        id: 1,
        tag: "Flight Package",
        name: "Flight Package - Puri Jagannath & Kolkata Mayapur",
        subtitle: "4-day enlightening escapade with Mayapur",
        price: "₹49,000/-",
        pdf: "/itinerary/jagannathpuri.pdf",
        inclusions: [
          "Round-trip flights from Bangalore",
          "3-star hotel accommodation",
          "AC local transport for sightseeing",
          "All meals & applicable taxes",
          "Guided tours with English-speaking guide",
          "Entry & sightseeing fees",
          "Dirty fare & applicable taxes"
        ],
        exclusions: [
          "Personal expenses (tips, donations, rickshaws)",
          "Local rides / rickshaw charges",
          "Camera fees, tips and travel directions",
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
        ]
      },
      {
        id: 2,
        tag: "Flight Package",
        name: "Flight Package - Puri Jagannath Yatra",
        subtitle: "3-day enlightening escapade for others",
        price: "₹23,999/- + GST",
        pdf: "/itinerary/puri_flight_3days.pdf",
        inclusions: [
          "Round trip economy flight from Bangalore",
          "AC accommodation on twin sharing basis",
          "All meals included – Breakfast, Lunch & Dinner",
          "Guided sacred tours with exclusive access",
          "Temple visits & religious ceremonies",
          "Camera fees, tips and traveling guides",
          "Dirty fare & applicable taxes"
        ],
        exclusions: [
          "Local rides / rickshaw charges (Rs 3 tickets per trip)",
          "Camera fees, tips and travel directions",
          "Medical / travel insurance",
          "Anything not specifically mentioned in inclusions"
        ],
        terms: [
          "Offers valid till February 28, 2028",
          "Package cost: ₹23,999/- per adult + applicable GST",
          "Payment can be made in installments",
          "Advance payment required to confirm booking",
          "Company not liable for delays due to weather, local restrictions or temple rituals",
          "Valid government ID required for flight check-in"
        ]
      },
      {
        id: 3,
        tag: "Train Package",
        name: "Train Package",
        subtitle: "3-day enlightening escapade for others",
        price: "₹13,500/- + GST",
        pdf: "/itinerary/jagganathpuri_train.pdf",
        inclusions: [
          "3-tier AC round trip from Bangalore Railway Station",
          "AC accommodation on twin sharing basis",
          "All meals included – Breakfast, Lunch & Dinner",
          "Guided sacred tours with exclusive access",
          "Temple visits & religious ceremonies",
          "Quality local coordinators for the entire journey",
          "Dirty fare & applicable taxes"
        ],
        exclusions: [
          "Telreph / local rides",
          "Tips and extra expenditure",
          "Any personal expenses of individual travelers",
          "Anything not specifically mentioned in inclusions"
        ],
        terms: [
          "Package cost: ₹13,500/- per adult + applicable GST",
          "Payment can be made in installments",
          "Remaining balance to be paid before departure (75 days prior)",
          "Company not liable for delays due to weather, local restrictions or temple rituals",
          "Valid government ID mandatory for all travelers",
          "VATS G required for hotel check-in"
        ]
      }
    ]
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