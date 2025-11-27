import ahobilamImage from "@/assets/ahobilam_top.jpg";
import nepalImage from "@/assets/nepal_top.webp";
import srilankaImage from "@/assets/srilanka_top.png";
import puriImage from "@/assets/puri_top.jpg";
import angkorImage from "@/assets/cambodia_top.jpg";
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



export const packagesData = [
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
    itinerary: [
      {
        day: "Day 1",
        detail:
          "06:30 pm Board the bus. 07:00 pm Leave Bangalore and proceed towards Ahobilam. 08:30 pm Dinner (packed). 09:00 pm Rest."
      },
      {
        day: "Day 2",
        detail:
          "05:00 am Reach Ahobilam and check-in to respective lodges. 06:30 am Get ready and assemble at Ahobilam Mutt. 07:30 am Breakfast at Vedapatha Shala. 08:00 am Board the bus and proceed towards Upper Ahobilam. 08:15 am Reach Kaaranja Narasimha Temple – Darshan & Briefing. 08:45 am Board bus and proceed towards Ahobila Narasimha. 09:00 am Reach Ahobila Narasimha – Darshan & Briefing. 10:00 am Proceed towards Varaha (Karoda) Narasimha (by walk). 10:30 am Reach Varaha Narasimha – Darshan & Briefing. 11:00 am Proceed towards Jwala Narasimha (by walk). 12:00 pm Reach Jwala Narasimha and Raktha Kund – Darshan. 12:30 pm Lunch (packed). 01:00 pm Proceed towards Malola Narasimha (by walk). 02:00 pm Reach Malola Narasimha – Darshan & Briefing (Both Malola & Jwala). 03:00 pm Proceed towards Prahlada School (by walk). 03:30 pm Reach Prahlada School. 04:00 pm Proceed towards bus (by walk). 05:00 pm Board the bus and proceed towards Lower Ahobilam. 05:30 pm Reach Lower Ahobilam and proceed towards Lakshmi Narasimha (Prahlada Varada) Temple – Darshan, Briefing and Kirtan/Bhajans. 07:00 pm Proceed towards Ahobilam Mutt/Shopping. 07:30 pm Dinner at Vedapatha Shala. 08:30 pm Proceed towards respective lodges. 08:45 pm Rest."
      },
      {
        day: "Day 3",
        detail:
          "05:00 am Wake up. 06:00 am Board the bus and proceed towards Yogananda Narasimha Temple. 06:15 am Reach Yogananda Narasimha – Darshan & Briefing. 06:45 am Proceed towards Kshatravata Narasimha Temple. 07:00 am Reach Kshatravata Narasimha Temple. (Sankalpam followed by Narasimha Homa on confirmation). 08:00 am Darshan and briefing of Kshatravata Narasimha. 08:30 am Breakfast at Kshatravata Narasimha Temple. 09:00 am Board the jeep and proceed towards Pavana Narasimha Temple. 10:00 am Reach Pavana Narasimha – Darshan & Briefing. 11:00 am Board the jeep and proceed towards Bhargava Narasimha Temple. 12:00 pm Reach Bhargava Narasimha – Darshan & Briefing. 12:45 pm Board jeep and proceed towards Vedapatha Shala. 01:00 pm Reach Ahobilam Mutt and proceed to lunch. 02:00 pm Board the bus and proceed towards Bangalore. 07:30 pm Dinner en route. 10:30 pm Reach Bangalore."
      }
    ]
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
    itinerary: [
      { day: "Day 1", detail: "Arrival at Kathmandu. Meet and greet at the airport and transfer to hotel. In the evening, visit Pashupatinath Temple for evening aarti. Overnight stay in Kathmandu." },
      { day: "Day 2", detail: "Morning sightseeing in Kathmandu including Swayambhunath Stupa and Budhanilkantha Temple. Later, drive/fly to Pokhara (210 km / 6 hrs). Evening at leisure by Phewa Lake. Overnight stay in Pokhara." },
      { day: "Day 3", detail: "Early morning drive to Jomsom and onward journey to Muktinath Temple (by jeep/trek). Perform darshan and rituals at the sacred temple. Return to Jomsom for overnight stay." },
      { day: "Day 4", detail: "Fly/drive back from Jomsom to Pokhara. Visit local sites in Pokhara such as Bindhyabasini Temple, Davis Falls, and Gupteshwar Cave. Evening boating on Phewa Lake. Overnight stay in Pokhara." },
      { day: "Day 5", detail: "Drive from Pokhara to Damauli and onward to Gandaki river confluence to collect Shalagrama stones. Continue journey to Janakpur/Mithila, the birthplace of Goddess Sita. Overnight stay in Mithila region." },
      { day: "Day 6", detail: "Morning darshan at Janaki Temple in Mithila. Explore nearby sacred spots associated with Ramayana. Later, drive back towards Bhaktapur. Overnight stay in Bhaktapur." },
      { day: "Day 7", detail: "Full day sightseeing in Bhaktapur and Patan. Visit Bhaktapur Durbar Square, Nyatapola Temple, and Patan Krishna Mandir. Evening return to Kathmandu. Overnight stay in Kathmandu." },
      { day: "Day 8", detail: "Morning visit to Dakshinkali Temple or free time for shopping in Kathmandu. Later, transfer to Tribhuvan International Airport for onward journey." },
    ]
    ,
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
  itinerary: [
    {
      day: "Day 1",
      detail:
        "Arrival at Bandaranaike International Airport and welcome by representative. En route visit Pinnawala Elephant Orphanage. Proceed to Kandy. In the evening, attend a traditional Kandyan cultural dance performance. Dinner and overnight stay in Kandy. (Visit: Temple of the Tooth Relic – Sri Dalada Maligawa)"
    },
    {
      day: "Day 2",
      detail:
        "After breakfast, excursion to Seetha Kotuwa (Sita’s Fort) — believed to be one of the earliest places Sita was kept before Ashoka Vatika. Return to Kandy for dinner and overnight stay."
    },
    {
      day: "Day 3",
      detail:
        "After breakfast, drive to Nuwara Eliya via Ramboda. En route visit Sri Bhakta Hanuman Temple at Ramboda and the scenic Ramboda Waterfalls. Visit tea plantations and a tea factory en route. Dinner and overnight stay in Nuwara Eliya."
    },
    {
      day: "Day 4",
      detail:
        "After breakfast, visit Sita Amman Temple and Hakgala Botanical Gardens — believed to be part of Ashoka Vatika where Sita was held captive. Continue to Ella to explore Ramayana-related sites. Dinner and overnight stay in Nuwara Eliya."
    },
    {
      day: "Day 5",
      detail:
        "After breakfast, visit Divurumpola Temple — the site of Sita’s Agni Pariksha. Proceed to Ella to see Ravana Ella Cave and the majestic Ella Falls where Ravana is said to have hidden Sita. Dinner and overnight stay in Nuwara Eliya."
    },
    {
      day: "Day 6",
      detail:
        "After breakfast, drive to Colombo. Visit city attractions including temples, churches, and colonial landmarks. In the evening, visit Panchamuga Anjaneyar Temple in Kalubowila — the only five-faced Hanuman Temple in Sri Lanka. Dinner and overnight stay in Colombo."
    },
    {
      day: "Day 7",
      detail:
        "After breakfast, proceed to Chilaw. Visit Munishwaram Temple (dedicated to Lord Shiva) where Lord Rama prayed after defeating Ravana. Continue to Negombo for dinner and overnight stay."
    },
    {
      day: "Day 8",
      detail:
        "After breakfast, visit Manavari Temple — where Lord Rama installed and worshipped the first Ramalinga Shivalingam to absolve himself of Brahmahatya Dosham. This is the only other lingam apart from Rameshwaram named after Lord Rama. Dinner and overnight stay in Negombo."
    },
    {
      day: "Day 9",
      detail:
        "After breakfast, visit Kelaniya Vibheeshana Temple and enjoy a short Colombo sightseeing tour. Transfer to Bandaranaike International Airport for return flight to India with divine memories."
    }
  ]
}
,

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
    itinerary: [
      {
        day: "Day 1",
        detail:
          "Bangalore → Bhubaneswar → Konark → Puri. Morning flight from Bangalore to Bhubaneswar. Visit Lingaraj Temple and Ananta Vasudev (Anantavasudev) Temple; lunch at Lingaraj Temple complex. Afternoon drive to Konark Sun Temple (UNESCO site) for sightseeing. Evening proceed to Puri, check-in, dinner and rest."
      },
      {
        day: "Day 2",
        detail:
          "Puri & local temples. Early morning darshan at Jagannath Temple. Return to hotel for lunch. Evening sightseeing within local radius: Tota Gopinath Temple, Swargadwara, Indradyumna Sarovar, Gundicha Mandir and other Chaitanya-related sites. Overnight in Puri."
      },
      {
        day: "Day 3",
        detail:
          "Puri → Alarnath & Sakshi Gopal → Raghurajpur. Early morning visit Alarnath Temple and Sakshi Gopal. Lunch on-route. Afternoon visit Raghurajpur Crafts Village (Pattachitra & artisans). Return and relax at hotel in Puri."
      },
      {
        day: "Day 4",
        detail:
          "Puri → Jajpur & Remuna → Kolkata. Early morning drive to Jajpur to visit Sakti Peetha. Continue to Remuna to visit Kshirachora Gopinath Temple and have lunch in Remuna. Evening reach Kolkata, check-in and rest."
      },
      {
        day: "Day 5",
        detail:
          "Kolkata → Gangasagar → Mayapur. Early depart for Gangasagar Island (~3 hours) — visit Kapil Muni area and sacred confluence where Ganges meets the sea. Late afternoon drive to Mayapur (~4–5 hours). Check-in and rest."
      },
      {
        day: "Day 6",
        detail:
          "Mayapur heritage day. Early Mangal Aarti at Sri Mayapur Chandrodaya Mandir. Visit key sites including the Vedic Planetarium, birthplace of Chaitanya Mahaprabhu, Sri Srivasa Angan, Advaita Bhavan, Gadadhara Angan and other heritage manuscript sites. Evening free for shopping and personal exploration."
      },
      {
        day: "Day 7",
        detail:
          "Kolkata early morning Kalighat visit (depart ~4 AM). Visit Ramakrishna Math & Belur Math. Lunch, then transfer to Kolkata Airport for flight to Bangalore. Tour concludes."
      }
    ]
  }
  ,
  {
    id: "angkor-thailand",
    name: "Angkor Wat & Thailand Discovery – Spiritual Meets Tropical - Jan 2026",
    destinations: "Siem Reap • Angkor Wat • Phnom Penh • Bangkok • Pattaya",
    duration: "8 Days / 7 Nights",
    description:
      "Explore the wonders of Southeast Asia from the grandeur of Angkor Wat in Cambodia to the vibrant streets of Bangkok and beaches of Pattaya. Witness cultural landmarks, royal palaces, and tropical escapes. A perfect fusion of history, adventure, and leisure.",
    price: "₹1,10,000*",
    rating: 4.9,
    type: "International",
    coverImage: angkorImage,
    images: angkorImages,
    inclusions: [
      "Accommodation in 4-star hotels",
      "Daily breakfast at hotels",
      "All airport transfers and sightseeing in private coach",
      "English-speaking local guides",
      "Entrance fees to Angkor Wat, Royal Palace, and listed attractions"
    ],
    exclusions: [
      "International airfare",
      "Cambodia & Thailand visa fees",
      "Lunches and dinners",
      "Personal expenses, tips, and porterage",
      "Optional shows/activities (Alcazar, water sports)"
    ],
    terms: [
      "Passport must be valid for 6 months",
      "Visa approval is traveler’s responsibility",
      "Advance payment is non-refundable",
      "Company not liable for delays due to traffic or flight changes",
      "Itinerary may be shuffled depending on flight timings"
    ],
    itinerary: [
      { day: "Day 1", detail: "Arrival at Siem Reap International Airport. Transfer to hotel and check-in. Evening visit to the Angkor Night Market. Overnight stay in Siem Reap." },
      { day: "Day 2", detail: "Full-day exploration of Angkor Wat, Angkor Thom, Bayon Temple, and Ta Prohm (the famous 'Tomb Raider' temple). Enjoy sunset views from Phnom Bakheng. Overnight stay in Siem Reap." },
      { day: "Day 3", detail: "Morning visit to Banteay Srei Temple and Tonle Sap Lake for a boat ride through floating villages. Afternoon transfer to Phnom Penh (approx. 6 hrs). Overnight stay in Phnom Penh." },
      { day: "Day 4", detail: "Explore Phnom Penh: Royal Palace, Silver Pagoda, Wat Phnom, and Independence Monument. Evening transfer to airport for flight to Bangkok. Overnight stay in Bangkok." },
      { day: "Day 5", detail: "Morning city tour of Bangkok including Grand Palace, Wat Pho (Reclining Buddha), and Wat Arun (Temple of Dawn). Afternoon free for shopping at MBK/Siam Paragon. Overnight stay in Bangkok." },
      { day: "Day 6", detail: "Drive to Pattaya (2 hrs). En route visit Sri Racha Tiger Zoo. In Pattaya, enjoy Alcazar Cabaret Show in the evening. Overnight stay in Pattaya." },
      { day: "Day 7", detail: "Full-day Coral Island excursion with water sports opportunities (parasailing, snorkeling, jet ski). Return to Pattaya for leisure and overnight stay." },
      { day: "Day 8", detail: "Morning free in Pattaya. Later transfer to Bangkok International Airport for departure." },
    ]

  },
  {
    id: "varanasi-ayodhya-pilgrimage",
    name: "Varanasi & Ayodhya Divine Pilgrimage",
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