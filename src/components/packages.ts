import ahobilamImage from "@/assets/ahobilam_top.jpg";
import nepalImage from "@/assets/nepal_top.webp";
import srilankaImage from "@/assets/srilanka_top.png";
import puriImage from "@/assets/puri_top.jpg";
// import angkorImage from "@/assets/cambodia_top.jpg";
import dubaiImage from "@/assets/dubai_top.jpg";
import varanasiAyodhyaImage from "@/assets/ayodhya_top.jpg";

interface ImageModule {
  default: string;
}

const ahobilamImages = Object.values(
  import.meta.glob('@/assets/packages/ahobilam/*.{jpg,jpeg,png,webp,svg}', { eager: true })
).map((module: ImageModule) => module.default);
const nepalImages = Object.values(
  import.meta.glob('@/assets/packages/nepal/*.{jpg,jpeg,png,webp,svg}', { eager: true })
).map((module: ImageModule) => module.default);
const srilankaImages = Object.values(
  import.meta.glob('@/assets/packages/srilanka/*.{jpg,jpeg,png,webp,svg}', { eager: true })
).map((module: ImageModule) => module.default);
const puriImages = Object.values(
  import.meta.glob('@/assets/packages/puri/*.{jpg,jpeg,png,webp,svg}', { eager: true })
).map((module: ImageModule) => module.default);
const angkorImages = Object.values(
  import.meta.glob('@/assets/packages/angkorwat/*.{jpg,jpeg,png,webp,svg}', { eager: true })
).map((module: ImageModule) => module.default);
const varanasiAyodhyaImages = Object.values(
  import.meta.glob('@/assets/packages/varanasiAyodhyaImages/*.{jpg,jpeg,png,webp,svg}', { eager: true })
).map((module: ImageModule) => module.default);
const dubaiImages = Object.values(
  import.meta.glob('@/assets/packages/dubai/*.{jpg,jpeg,png,webp,svg}', { eager: true })
).map((module: ImageModule) => module.default);



export const packagesData = [
  {
    id: "dubai",
    name: "Dubai & Abu Dhabi: The Grand Extravaganza",
    destinations: "Dubai • Abu Dhabi",
    duration: "6 Days / 5 Nights",
    description:
      "Experience the perfect blend of luxury, adventure, and culture with our exclusive Dubai Travel Package! This journey covers iconic attractions of Dubai and Abu Dhabi — from the thrilling desert safari and Ferrari World to breathtaking views at the Burj Khalifa and Dubai Frame. Also included are the vibrant Miracle Garden, Global Village, and the awe-inspiring Museum of the Future.",
    price: "₹96,000/-",
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
    id: "ahobilam-narasimha-pilgrimage",
    name: "Ahobilam Narasimha Pilgrimage",
    destinations: "Bangalore • Ahobilam (Upper & Lower) • Various Narasimha Temples",
    duration: "3 Days / 2 Nights",
    description:
      "A devotional pilgrimage to the sacred Ahobilam Narasimha temples — Upper and Lower Ahobilam — covering key shrines including Kaaranja, Ahobila, Varaha (Karoda), Jwala, Malola, Prahlada School, Yogananda, Kshatravata, Pavana and Bhargava Narasimha. Program based on the group itinerary run on 22 Dec 2017; includes guided darshans, briefings and bhajans.",
    price: "On Request",
    rating: 4.7,
    type: "Domestic",
    tag: "Group Package",
    coverImage: ahobilamImage,
    images: ahobilamImages,
    inclusions: [
      "Round-trip coach transport from Bangalore",
      "Accommodation at lodges in Ahobilam (as per the itinerary)",
      "Packed breakfasts/lunches/dinners as specified in the itinerary",
      "Local transfers (bus/jeep) for Upper Ahobilam sightseeing",
      "Guided darshans and temple briefings",
      "Support from local coordinators and puja/arrangement assistance"
    ],
    exclusions: [
      "Personal expenses (tips, phone calls, laundry)",
      "Travel insurance",
      "Any meals or services not explicitly listed in inclusions",
      "Expenses arising from weather-related or road delays",
      "Airfare/train fare to Bangalore (if applicable)"
    ],
    terms: [
      "Pilgrims must carry valid government ID (Aadhaar/PAN/Passport) for verification",
      "Advance payment required to confirm booking; deposits may be non-refundable",
      "Itinerary may change depending on temple timings, weather, or local conditions",
      "Participants should be medically fit for moderate walking/hill paths",
      "Company not liable for delays or disruptions due to natural causes or local restrictions"
    ],
    pdf: "/itinerary/ahobilam.pdf",
  },
  {
    id: "nepal-muktinath",
    name: "Nepal Muktinath Tour – Gateway to Serenity in October 2025",
    destinations:
      "Muktinath • Kathmandu • Shalagrama • Pokhara • Damauli • Bhaktapur • Mithila • Gandaki",
    duration: "8 Days / 7 Nights",
    description:
      "Experience the sacred trail of Nepal visiting Muktinath, Kathmandu, Pokhara, and the Gandaki River. Seek blessings at revered temples, explore ancient heritage, and witness serene Himalayan landscapes. A spiritual and cultural journey into the heart of Nepal.",
    price: "₹55,000*",
    rating: 4.8,
    type: "Domestic",
    coverImage: nepalImage,
    images: nepalImages,
    inclusions: [
      "Accommodation in 3/4-star hotels and lodges",
      "Daily breakfast & dinner",
      "All transfers by private coach",
      "Domestic flights where applicable (Pokhara–Jomsom)",
      "Assistance for temple darshan and permits"
    ],
    exclusions: [
      "International airfare to/from Kathmandu",
      "Lunches and personal beverages",
      "Visa fees (if applicable)",
      "Travel/medical insurance",
      "Helicopter costs for Muktinath (optional)"
    ],
    terms: [
      "Passport must be valid for at least 6 months",
      "Advance payment is non-refundable",
      "Company not liable for flight delays (common in mountain regions)",
      "Itinerary subject to road/weather conditions",
      "Travelers advised to carry light woollens year-round"
    ],
    pdf: "/itinerary/srirangam-namakkal.pdf",
  },
  {
    id: "srilanka-ramayana",
    name: "Sri Lanka Ramayana Yatra – Sacred Island Journey November 2025",
    destinations:
      "Colombo • Kandy • Seetha Kotuwa • Nuwara Eliya • Ella • Chilaw • Negombo • Kelaniya",
    duration: "9 Days / 8 Nights",
    description:
      "Follow the legendary Ramayana trail across Sri Lanka — from Kandy and Seetha Kotuwa to Nuwara Eliya, Ella, Chilaw, and Kelaniya. Explore sacred temples, Ramayana sites, lush tea estates, and colonial hill towns while enjoying vegetarian meals, expert guidance, and serene island hospitality.",
    price: "₹85,000 + GST",
    rating: 4.8,
    type: "International",
    tag: "Deluxe Package",
    pdf: "/itinerary/bali.pdf",
    coverImage: srilankaImage,
    images: srilankaImages,
    inclusions: [
      "Economy class return airfare (Bangalore/Chennai – Colombo – Bangalore/Chennai)",
      "Sri Lanka visa assistance and processing",
      "All airport transfers and local transport by AC coach",
      "Accommodation in standard/deluxe hotels on twin sharing basis",
      "Daily vegetarian meals (Breakfast, Lunch & Dinner)",
      "Entry fees to listed monuments and temples",
      "English-speaking guide for the entire tour",
      "Professional & service charges, driver allowance, toll and parking"
    ],
    exclusions: [
      "Personal expenses (laundry, tips, telephone calls, pooja materials)",
      "Optional activities or additional sightseeing not mentioned in the itinerary",
      "Travel/medical insurance",
      "GST (5%)",
      "Any cost arising due to natural calamities, strikes, or flight delays"
    ],
    terms: [
      "Passport must be valid for at least 6 months from travel date",
      "Registration closes by the announced last date or until seats are full",
      "Advance payment of 60% required at registration; balance 40% one week before departure",
      "Package amount ₹85,000 (Deluxe) + GST, ex-Bangalore",
      "Non-refundable advance once registered",
      "Itinerary subject to change based on local conditions or Yatra Director’s discretion"
    ],
  },
  {
    id: "puri-jagannath",
    name: "Puri Jagannath & Mayapur – Divine East India Pilgrimage December 2025",
    destinations:
      "Puri • Jagannath Temple • Konark Sun Temple • Chilika Lake • Bhubaneswar • Kolkata • Gangasagar • Mayapur",
    duration: "7 Days / 6 Nights",
    description:
      "Discover Odisha and Bengal’s spiritual and cultural gems with visits to Lingaraj, Konark Sun Temple, Jagannath Temple, Chilika Lake, Gangasagar and Mayapur. A soulful journey through India’s heritage, scripture, and devotional traditions — featuring temple darshans, heritage villages, and key Vaishnava & Shaiva sites.",
    price: "₹13,500*/-",
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
      "Registration deadline: 2nd Nov 2025",
      "Full package amount: ₹49,000/-",
      "Payment schedule: Rs. 25,000 at registration + remaining before departure (15 days prior)",
      "Advance payment required to confirm booking; deposits may be non-refundable",
      "Company not liable for delays due to weather, local restrictions or temple rituals",
      "Itinerary may change depending on temple timings, train/flight schedules or road conditions",
      "Valid ID required for hotel check-in"
    ],
  },
  {
    id: "kashi-ayodhya-pilgrimage",
    name: "Kashi – Ayodhya – Prayag Pilgrimage",
    destinations: "Varanasi • Sarnath • Ayodhya",
    duration: "3 Days / 2 Nights",
    description:
      "Experience the spiritual heart of India with this 3-day pilgrimage covering the sacred city of Varanasi and the holy birthplace of Lord Rama in Ayodhya. Witness the mesmerizing Ganga Aarti, visit ancient temples, and feel the divine energy of two of India’s most revered destinations.",
    price: "₹24,999/-",
    rating: 4.8,
    type: "Domestic",
    tag: "Flight Package",
    coverImage: varanasiAyodhyaImage,
    images: varanasiAyodhyaImages,
    inclusions: [
      "Both-way flight ticket (Bangalore – Varanasi – Bangalore)",
      "Twin sharing stay in A/C Deluxe rooms",
      "All meals – Breakfast, Lunch, and Dinner (pure vegetarian)",
      "A/C luxury vehicle for entire tour including all taxes, toll, and driver charges",
      "Pick-up and drop from airport",
      "Tour guide support throughout the trip",
      "V.I.P. Darshan tickets for temples",
      "Evening Ganga Aarti experience by boat"
    ],
    exclusions: [
      "Personal expenses (tips, pooja items, rituals, entry tickets, extra boat rides, etc.)",
      "Travel/medical insurance",
      "GST (5%)",
      "Anything not mentioned in the inclusions"
    ],
    terms: [
      "Child below 6 years is complimentary.",
      "Child aged 6–12 years charged at 40% of adult cost (extra bed provided).",
      "Children aged 12+ considered adults.",
      "Room sharing as per package occupancy (twin/triple).",
      "Advance payment required to confirm booking.",
      "Itinerary subject to change due to flight schedule, weather, or temple timings."
    ],
    pdf: "/itinerary/prayagraj_ayodhya_kashi.pdf",
    itinerary: [
      {
        day: "Day 1",
        detail:
          "Arrival at Varanasi Airport. Pick-up and transfer to hotel for check-in. In the evening, witness the mesmerizing Ganga Aarti at Dashashwamedh Ghat — a truly spiritual experience. Optionally, enjoy the ceremony from a boat (additional cost). Overnight stay at hotel in Varanasi."
      },
      {
        day: "Day 2",
        detail:
          "Early morning visit to Kashi Vishwanath Temple, Annapurna Temple, Bharat Mata Temple, Sankat Mochan (Hanuman Temple), and Manas Mandir. Return to hotel for breakfast and rest. Later, enjoy a boat ride on the Ganges visiting famous ghats. Visit Sarnath and BHU campus. Evening free for shopping (optional). Dinner and overnight stay at hotel in Varanasi."
      },
      {
        day: "Day 3",
        detail:
          "After breakfast, proceed to Ayodhya (250 km / 5 hrs). Visit sacred sites including Hanuman Garhi, Kanak Bhawan, and explore the banks of River Saryu. Experience the divine aura at Lord Rama’s birthplace. Lunch and return journey to Varanasi Airport for flight to Bangalore. Tour ends with divine blessings."
      }
    ]
  }
];
export default packagesData;