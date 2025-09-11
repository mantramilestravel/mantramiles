import chardhamImage from "@/assets/chardham_top.jpg";
import nepalImage from "@/assets/nepal_top.webp";
import srilankaImage from "@/assets/srilanka_top.png";
import puriImage from "@/assets/puri_top.jpg";
import angkorImage from "@/assets/cambodia_top.jpg";
import ladakhImage from "@/assets/ladakh_top.jpg";

const chardhamImages = Object.values(
  import.meta.glob('@/assets/packages/chardham/chardham*.{jpg,jpeg,png,webp,svg}', { eager: true })
).map((module: any) => module.default);
const nepalImages = Object.values(
  import.meta.glob('@/assets/packages/nepal/*.{jpg,jpeg,png,webp,svg}', { eager: true })
).map((module: any) => module.default);
const srilankaImages = Object.values(
  import.meta.glob('@/assets/packages/srilanka/*.{jpg,jpeg,png,webp,svg}', { eager: true })
).map((module: any) => module.default);
const puriImages = Object.values(
  import.meta.glob('@/assets/packages/puri/*.{jpg,jpeg,png,webp,svg}', { eager: true })
).map((module: any) => module.default);
const angkorImages = Object.values(
  import.meta.glob('@/assets/packages/angkorwat/*.{jpg,jpeg,png,webp,svg}', { eager: true })
).map((module: any) => module.default);
const ladakhImages = Object.values(
  import.meta.glob('@/assets/packages/ladakh/*.{jpg,jpeg,png,webp,svg}', { eager: true })
).map((module: any) => module.default);



export const packagesData = [
  {
    id: "chardham-yatra",
    name: "Chardham Yatra – Ultimate Himalayan Pilgrimage September 11th, 2025",
    destinations: "Yamunotri • Gangotri • Kedarnath • Badrinath • Lakhamandal",
    duration: "11 Days / 10 Nights",
    description:
      "Embark on the holy Chardham Yatra covering the four sacred shrines of Yamunotri, Gangotri, Kedarnath, and Badrinath. Witness divine darshans, scenic treks, and spiritual bliss amidst the Himalayas. A perfect blend of devotion, culture, and natural beauty.",
    price: "₹64,000*",
    rating: 4.9,
    type: "Domestic",
    tag: "Group Package",
    coverImage: chardhamImage,
    images: chardhamImages,
    inclusions: [
      "Accommodation in standard hotels/guesthouses on twin/triple sharing",
      "Daily vegetarian breakfast & dinner",
      "All transfers and sightseeing by private coach/tempo traveller",
      "Helicopter/pony arrangements (optional, extra cost at Kedarnath)",
      "Assistance with darshan arrangements at temples"
    ],
    exclusions: [
      "Airfare/train fare to Haridwar/Rishikesh",
      "Personal expenses (laundry, phone, tips)",
      "Lunches and snacks en route",
      "Travel/medical insurance",
      "Any expenses due to weather, landslides, or natural calamities"
    ],
    terms: [
      "Pilgrims must carry valid ID proof",
      "Travel involves high-altitude regions; medical fitness required",
      "Advance payment is non-refundable",
      "Company not liable for weather disruptions, landslides, or delays",
      "Itinerary may change depending on temple timings and road conditions"
    ],
    itinerary: [
      { day: "Day 1", detail: "Arrival at Haridwar/Rishikesh, check-in at hotel. In the evening attend the sacred Ganga Aarti at Har Ki Pauri. Overnight stay in Haridwar." },
      { day: "Day 2", detail: "Drive from Haridwar to Barkot (220 km, 8 hrs) via scenic Mussoorie. En route visit Kempty Falls. Overnight stay at Barkot." },
      { day: "Day 3", detail: "Early morning drive to Janki Chatti, then trek (6 km) to Yamunotri. Take a holy dip in the Yamuna River and visit Yamunotri Temple. Return trek and drive back to Barkot. Overnight stay." },
      { day: "Day 4", detail: "Drive from Barkot to Uttarkashi (100 km, 4 hrs). En route visit the famous Vishwanath Temple and local markets. Overnight stay at Uttarkashi." },
      { day: "Day 5", detail: "Excursion to Gangotri (100 km each way). Take a dip in the holy Bhagirathi River at Gangotri Ghat and offer prayers at Gangotri Temple. Return to Uttarkashi for overnight stay." },
      { day: "Day 6", detail: "Drive from Uttarkashi to Guptkashi (220 km, 8–9 hrs). Enjoy views of Mandakini River en route. Evening at leisure. Overnight stay in Guptkashi." },
      { day: "Day 7", detail: "Early morning drive to Sonprayag, then trek (18 km) or take helicopter service to Kedarnath. Visit Kedarnath Temple for darshan and evening aarti. Overnight stay at Kedarnath (subject to availability)." },
      { day: "Day 8", detail: "After morning pooja, return trek to Sonprayag and drive back to Guptkashi. Rest and overnight stay." },
      { day: "Day 9", detail: "Drive to Badrinath (190 km, 7–8 hrs) via Joshimath. En route visit Narsingh Temple and Shankaracharya Math. In the evening, attend Badrinath Temple darshan. Overnight stay." },
      { day: "Day 10", detail: "Visit Mana village (the last village before Tibet), Vyas Gufa, Ganesh Gufa, and Bhim Pul. After darshan at Badrinath Temple again, drive back to Rudraprayag. Overnight stay." },
      { day: "Day 11", detail: "Drive from Rudraprayag to Haridwar/Rishikesh (160 km, 6 hrs). En route visit Devprayag (confluence of Bhagirathi and Alaknanda forming the Ganga). Drop at railway station/airport for onward journey." },
    ]
    ,
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
    name: "Sri Lanka Ramayana Yatra – Sacred Island Journey in November 2025",
    destinations:
      "Colombo • Kandy • Lankadishwara • Ashoka Vatika • Ramboda • Ussangoda • Kelaniya • Nagadweepa • Trincomalee",
    duration: "9 Days / 8 Nights",
    description:
      "Follow the legendary Ramayana trail across Sri Lanka covering Kandy, Ashoka Vatika, Ussangoda, and Trincomalee. Discover sacred temples, mythological sites, and cultural treasures while exploring the island’s natural beauty. A divine journey blending history, devotion, and serenity.",
    price: "₹85,000*",
    rating: 4.7,
    type: "International",
    coverImage: srilankaImage,
    images: srilankaImages,
    inclusions: [
      "Accommodation in 4-star hotels with daily breakfast",
      "Airport transfers and intercity travel in private coach",
      "All sightseeing and temple visits as per itinerary",
      "English-speaking guide throughout the tour",
      "Entrance fees to listed monuments"
    ],
    exclusions: [
      "International airfare",
      "Sri Lanka visa fees",
      "Lunches and dinners (unless specified)",
      "Personal expenses, tips, and porterage",
      "Optional activities (safaris, shows, water sports)"
    ],
    terms: [
      "Passport must be valid for 6 months",
      "Visa approval is traveler’s responsibility",
      "Advance payment is non-refundable",
      "Company not liable for delays due to traffic, weather, or strikes",
      "Modest attire required at temples"
    ],
    itinerary: [
      { day: "Day 1", detail: "Arrival at Colombo International Airport. Meet and greet by tour representative. Transfer to hotel for check-in. In the evening, short orientation drive through Colombo city. Overnight stay in Colombo." },
      { day: "Day 2", detail: "After breakfast, drive to Kandy (115 km / 4 hrs). En route visit Pinnawala Elephant Orphanage. In Kandy, visit the sacred Temple of the Tooth Relic (Sri Dalada Maligawa). Evening cultural dance show. Overnight stay in Kandy." },
      { day: "Day 3", detail: "Excursion to Lankadishwara Temple, believed to be associated with the Ramayana. Explore local markets and handicraft stores in Kandy. Overnight stay in Kandy." },
      { day: "Day 4", detail: "Drive to Nuwara Eliya via Ramboda. En route visit Hanuman Temple at Ramboda and beautiful Ramboda Falls. Arrive in Nuwara Eliya, visit Seetha Amman Temple and Ashoka Vatika (Hakgala Botanical Garden). Overnight stay in Nuwara Eliya." },
      { day: "Day 5", detail: "Morning sightseeing in Nuwara Eliya town. Later, drive along the southern coast to reach Ussangoda, a site believed to be scorched by Hanuman’s fire tail. Continue journey to Galle for overnight stay." },
      { day: "Day 6", detail: "After breakfast, visit Kelaniya Temple near Colombo, believed to be sanctified by Lord Buddha and linked to Vibheeshana of Ramayana. Evening free for leisure in Colombo. Overnight stay in Colombo." },
      { day: "Day 7", detail: "Drive to Nagadweepa (Nainativu) off the coast of Jaffna, associated with stories of the Ramayana. Visit Nagapooshani Amman Temple and Nagadweepa Vihara. Overnight stay in Jaffna." },
      { day: "Day 8", detail: "Morning drive to Trincomalee (approx. 6 hrs). Visit Koneswaram Temple, a famous pilgrimage site perched on a cliff overlooking the Indian Ocean. Evening at leisure in Trincomalee. Overnight stay in Trincomalee." },
      { day: "Day 9", detail: "After breakfast, transfer back to Colombo (approx. 6 hrs). Drop at Colombo International Airport for onward journey." },
    ],
  },

  {
    id: "puri-jagannath",
    name: "Puri Jagannath & Mayapur – Divine East India Pilgrimage December 2025",
    destinations:
      "Puri • Jagannath Temple • Konark Sun Temple • Chilika Lake • Bhuvaneshwar",
    duration: "7 Days / 6 Nights",
    description:
      "Discover Odisha’s spiritual and cultural gems with visits to Jagannath Temple, Konark Sun Temple, and Chilika Lake. Explore ancient temples, serene beaches, and vibrant traditions. A soulful journey through India’s heritage and devotion.",
    price: "₹45,000*",
    rating: 4.6,
    type: "Domestic",
    coverImage: puriImage,
    images: puriImages,
    inclusions: [
      "Accommodation in 3/4-star hotels",
      "Daily breakfast & dinner",
      "All transfers in AC private vehicle",
      "Sightseeing with English-speaking guide",
      "Assistance with temple darshan arrangements"
    ],
    exclusions: [
      "Airfare/train fare to Bhubaneswar",
      "Entry fees to monuments (non-Indian nationals)",
      "Lunches and personal expenses",
      "Camera/video charges",
      "Travel insurance"
    ],
    terms: [
      "Travelers must follow temple rules (non-Hindus not allowed inside Jagannath Temple)",
      "Advance payment is non-refundable",
      "Company not liable for delays caused by weather or local restrictions",
      "Itinerary may change due to temple rituals",
      "ID proof required for hotel check-in"
    ]
    ,
    itinerary: [
      { day: "Day 1", detail: "Arrival at Bhubaneswar Airport/Railway Station. Transfer to Puri and check-in at hotel. Evening visit to the sacred Jagannath Temple for darshan. Overnight stay in Puri." },
      { day: "Day 2", detail: "Early morning attend Mangala Aarti at Jagannath Temple. Later, explore Puri town including Gundicha Temple and local markets. Evening free for leisure on Puri Beach. Overnight stay in Puri." },
      { day: "Day 3", detail: "Excursion to Konark (35 km). Visit the world-famous Konark Sun Temple (UNESCO World Heritage Site). On the way back, visit Chandrabhaga Beach. Return to Puri for overnight stay." },
      { day: "Day 4", detail: "Full-day trip to Chilika Lake (Satapada – 50 km). Enjoy a boat ride on Asia’s largest brackish water lagoon and spot dolphins at the mouth of the lake. Return to Puri by evening. Overnight stay in Puri." },
      { day: "Day 5", detail: "Drive from Puri to Bhubaneswar (60 km). En route visit Dhauli Shanti Stupa and Pipili Applique Village. In Bhubaneswar, visit Lingaraj Temple, Mukteshwar Temple, and Rajarani Temple. Overnight stay in Bhubaneswar." },
      { day: "Day 6", detail: "Morning excursion to Nandankanan Zoological Park, famous for its white tigers and safari rides. Afternoon visit to Odisha State Museum and Ekamra Haat for handicrafts shopping. Overnight stay in Bhubaneswar." },
      { day: "Day 7", detail: "After breakfast, transfer to Bhubaneswar Airport/Railway Station for onward journey with divine memories of Odisha’s spiritual and heritage trail." },
    ]
  },
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
    id: "ladakh-pilgrimage",
    name: "The Ladakh Adventure & Pilgrimage Tour - Jan 2026",
    destinations:
      "Leh • Hemis and Thiksey • Lamayuru • Alchi village • Nubra Valley • Pangong Lake • Khardung La Pass",
    duration: "11 Days / 10 Nights",
    description:
      "Embark on a breathtaking Ladakh expedition covering Leh, Nubra Valley, Pangong Lake, and Khardung La Pass. Marvel at monasteries, high-altitude lakes, and Himalayan landscapes. A blend of adventure, culture, and spiritual calm in the Land of High Passes.",
    price: "₹75,000*",
    rating: 4.8,
    type: "Domestic",
    coverImage: ladakhImage,
    images: ladakhImages,
    inclusions: [
      "Accommodation in deluxe hotels/guesthouses & camps",
      "Daily breakfast & dinner",
      "All sightseeing & transfers by private SUV/tempo traveler",
      "Inner line permits for Nubra Valley and Pangong Lake",
      "Assistance with acclimatization and medical support"
    ],
    exclusions: [
      "Airfare to Leh",
      "Lunches, snacks, and beverages",
      "Travel/medical insurance",
      "Camel ride/rafting/optional activities",
      "Expenses due to flight cancellations, weather, or landslides"
    ],
    terms: [
      "Travelers must be medically fit for high altitude",
      "Itinerary may change due to road/weather conditions",
      "Advance payment is non-refundable",
      "Company not responsible for flight delays to Leh (common due to weather)",
      "ID proof required for permits"
    ],
    itinerary: [
      { day: "Day 1", detail: "Arrival at Leh Airport (Kushok Bakula Rimpochee). Transfer to hotel for complete rest and acclimatization. Evening stroll in Leh Market. Overnight stay in Leh." },
      { day: "Day 2", detail: "Visit Hemis Monastery, Thiksey Monastery, and Shey Palace. Evening free for leisure. Overnight stay in Leh." },
      { day: "Day 3", detail: "Drive to Lamayuru (120 km), en route visit Magnetic Hill and Gurudwara Pathar Sahib. Explore Lamayuru Monastery. Overnight stay in Lamayuru/Alchi." },
      { day: "Day 4", detail: "Morning visit to Alchi Monastery and Likir Monastery. Drive back to Leh by evening. Overnight stay in Leh." },
      { day: "Day 5", detail: "Drive to Nubra Valley via Khardung La Pass (18380 ft). Visit Diskit Monastery and Hunder Sand Dunes for camel safari. Overnight stay in Nubra Valley." },
      { day: "Day 6", detail: "Explore villages in Nubra Valley including Sumur and Panamik (hot springs). Return drive to Leh via Khardung La. Overnight stay in Leh." },
      { day: "Day 7", detail: "Drive to Pangong Lake (approx. 6 hrs) via Chang La Pass. Enjoy the mesmerizing turquoise lake, evening at leisure by the lakeside. Overnight stay in Pangong." },
      { day: "Day 8", detail: "Morning sunrise view at Pangong Lake. Drive back to Leh with en route visits to monasteries and scenic stops. Overnight stay in Leh." },
      { day: "Day 9", detail: "Excursion to Stok Palace and Museum. Visit Shanti Stupa and Leh Palace. Evening free for shopping and cafes. Overnight stay in Leh." },
      { day: "Day 10", detail: "Free day for leisure or optional rafting on the Zanskar River. Evening farewell cultural program. Overnight stay in Leh." },
      { day: "Day 11", detail: "After breakfast, transfer to Leh Airport for onward journey." },
    ]
  }
];
export default packagesData;