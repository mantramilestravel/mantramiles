import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Check, X, Star, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { QuoteDialog } from "@/components/QuoteDialog";
import PDFViewer from "./PDFViewer";

const packageData = {
  // Domestic Destinations
  goa: {
    name: "Goa",
    packages: [
      {
        "title": "Goa Beach & Heritage Tour",
        "duration": "4 Days / 3 Nights",
        "overview": "Experience the best of Goa with this 4-day itinerary, combining the lively beaches and vibrant nightlife of North Goa with the historical sites and serene coastal charm of South Goa.",
        "inclusions": [
          "Private AC vehicle for transfers to and from Panaji Bus Terminal",
          "North Goa sightseeing on Seat In Coach (SIC) basis",
          "South Goa sightseeing on Seat In Coach (SIC) basis",
          "Tolls and parking fees",
          "Services of a well-experienced driver",
          "All applicable taxes"
        ],
        "exclusions": [
          "Any other services not mentioned in the inclusions",
          "Personal expenses such as tips, laundry, beverages, etc.",
          "Airfares and train ticket charges",
          "Entrance fees to any monuments, activities, or attractions unless specified"
        ],
        "price": "₹3500*",
        "rating": null,
        "itinerary": [
          {
            "day": "Day 1",
            "details": "Arrival in Goa. Private transfer from Panaji Bus Terminal (KTC) to your pre-booked hotel in North Goa. The rest of the day is at your leisure to explore."
          },
          {
            "day": "Day 2",
            "details": "After breakfast, embark on a full-day North Goa sightseeing tour on a Seat In Coach (SIC) basis. Visit popular beaches like Calangute, Candolim, Baga, Anjuna, Vagator, and Siquirim. The tour concludes with a visit to Aguada Fort before dropping you back at your hotel."
          },
          {
            "day": "Day 3",
            "details": "After breakfast, proceed for a South Goa sightseeing tour on a Seat In Coach (SIC) basis. Explore the Mangueshi Temple, Old Goa Churches, Miramar Beach, and the Dona Paula viewpoint. The tour ends at Church Square in Panaji."
          },
          {
            "day": "Day 4",
            "details": "After breakfast, check out from your hotel. Private transfer from your North Goa hotel to Panaji Bus Terminal (KTC) for your onward journey."
          }
        ]
      },
      {
        "title": "North Goa Escape with Dabolim Transfers",
        "duration": "5 Days / 4 Nights",
        "overview": "Discover the best of North Goa with a relaxed 5-day itinerary. Enjoy private transfers from and to Dabolim Airport, a dedicated sightseeing day to explore iconic beaches and Fort Aguada, and two full days at your leisure to soak up the Goan sun and culture at your own pace.",
        "inclusions": [
          "Private AC vehicle for all transfers and sightseeing",
          "Airport pickup and drop-off at Dabolim Airport (GOI)",
          "Full-day North Goa sightseeing tour",
          "Tolls and parking fees",
          "Services of a well-experienced driver",
          "All applicable taxes"
        ],
        "exclusions": [
          "Any services not mentioned in the inclusions section",
          "Personal expenses such as tips, laundry, and beverages",
          "Airfares and train tickets",
          "Any entrance fees or charges for optional activities"
        ],
        "price": "₹5620*",
        "rating": null,
        "itinerary": [
          {
            "day": "Day 1",
            "details": "Arrival in Goa. Private transfer from Dabolim Airport (GOI) to your pre-booked hotel in North Goa. The rest of the day is at leisure."
          },
          {
            "day": "Day 2",
            "details": "Enjoy a full day at your leisure. Explore North Goa at your own pace, relax on the beaches, or indulge in optional activities like water sports or a spice plantation visit."
          },
          {
            "day": "Day 3",
            "details": "After breakfast, proceed for a full-day North Goa sightseeing tour. Visit popular beaches like Calangute, Candolim, Baga, Anjuna, Vagator, and Siquirim, followed by a visit to the historic Fort Aguada."
          },
          {
            "day": "Day 4",
            "details": "Another day at your leisure. You can choose to relax at your hotel, explore local markets, or try out some more of the optional activities available."
          },
          {
            "day": "Day 5",
            "details": "Check out from your hotel. Private transfer from your hotel in North Goa to Dabolim Airport (GOI) for your departure."
          }
        ]
      }
    ]
  },
  kerala: {
    name: "Kerala",
    packages: [
      {
        "title": "Kerala Coastal Charm: Trivandrum, Kanyakumari, Kovalam & Varkala",
        "duration": "5 Days / 4 Nights",
        "overview": "Embark on a captivating journey through the southern coast of Kerala and Tamil Nadu. This tour takes you from the spiritual tip of Kanyakumari to the tranquil beaches of Kovalam and the serene cliffs of Varkala, offering a perfect blend of natural beauty, cultural heritage, and coastal relaxation.",
        "inclusions": [
          "All transfers and sightseeing by private AC vehicle as per the itinerary",
          "Refreshment kit with mineral water and snacks",
          "Vehicle at your disposal for sightseeing",
          "Services of an experienced driver",
          "Driver allowance, toll, parking fees, and interstate permits",
          "All applicable taxes"
        ],
        "exclusions": [
          "Any services or food not mentioned in the inclusions",
          "Personal expenses such as tips, laundry, and beverages",
          "Airfares and train ticket charges",
          "Any entrance fees or charges for activities"
        ],
        "price": "₹21500*",
        "rating": null,
        "itinerary": [
          {
            "day": "Day 1",
            "details": "Arrival at Trivandrum Airport/Railway Station. Meet our representative and transfer to Kanyakumari. Witness the unique confluence of the Arabian Sea, Bay of Bengal, and Indian Ocean. Visit the Vivekananda Rock Memorial, Gandhi Memorial, and the Suchidram Temple. Overnight stay at a hotel in Kanyakumari."
          },
          {
            "day": "Day 2",
            "details": "Drive from Kanyakumari to Kovalam. Check-in to your hotel and visit the beautiful Kovalam beach, including the famous Lighthouse Beach and Hawah Beach. Enjoy the peace and tranquility of this coastal paradise. Overnight stay at a hotel in Kovalam."
          },
          {
            "day": "Day 3",
            "details": "Explore the local attractions of Trivandrum. Visit the historic Sree Padmanabhaswamy Temple, Trivandrum Zoo, Sree Chitra Art Gallery, and Napier Museum. In the evening, relax on the beach and enjoy the sunset. Overnight stay at your hotel in Kovalam."
          },
          {
            "day": "Day 4",
            "details": "Drive from Kovalam to Varkala, known as the 'Virgin Beach of Kerala'. Visit the Sivagiri Mutt, a spiritual retreat, and the ancient 1000-year-old Janardhana Swami Temple. Overnight stay at a hotel in Varkala."
          },
          {
            "day": "Day 5",
            "details": "Check out from your hotel and get a transfer to Trivandrum Airport for your departure, filled with memories of your Kerala adventure."
          }
        ]
      },
      {
        "title": "Grand Kerala Tour: Cochin, Munnar, Thekkady, Alleppey & Kovalam",
        "duration": "8 Days / 7 Nights",
        "overview": "Embark on an extensive journey through the best of Kerala. This 8-day itinerary takes you from the historic city of Cochin to the serene tea gardens of Munnar, the lush spice plantations of Thekkady, the tranquil backwaters of Alleppey, and the beautiful beaches of Kovalam, with a day trip to the tip of India, Kanyakumari. A perfect mix of culture, nature, and relaxation.",
        "inclusions": [
          "All transfers and sightseeing by private AC vehicle as per the itinerary",
          "Refreshment kit with mineral water and snacks",
          "Vehicle at your disposal for sightseeing",
          "Services of a well-experienced driver",
          "Driver allowance, toll, parking fees, and interstate permits",
          "All applicable taxes"
        ],
        "exclusions": [
          "Any other services or food not mentioned in the inclusions section",
          "Personal expenses such as tips, laundry, and beverages",
          "Airfares and train ticket charges",
          "Any entrance fees or charges for activities unless specified"
        ],
        "price": "₹28,000*",
        "rating": null,
        "itinerary": [
          {
            "day": "Day 1",
            "details": "Arrival at Cochin Airport/Railway Station. Meet our representative and transfer to your hotel. Explore the 'Queen of the Arabian Sea' with visits to the Dutch Palace, Jewish Synagogue, St. Francis Church, Santa Cruz Basilica, and the Chinese Fishing Nets."
          },
          {
            "day": "Day 2",
            "details": "After breakfast, check out and drive to Munnar. En route, stop at the beautiful Valara and Cheeyappara waterfalls and the Blossom Garden. In the evening, take in the beauty of the vast tea gardens. Overnight stay in Munnar."
          },
          {
            "day": "Day 3",
            "details": "Full-day sightseeing in Munnar. Visit the Eravikulam National Park to see the Nilgiri Tahr (subject to availability and season), the Tea Museum and factory, Mattupetty Dam, and Kundala Lake."
          },
          {
            "day": "Day 4",
            "details": "Check out after breakfast and drive to Thekkady. Embark on a spice tour to see plantations of cardamom, pepper, tea, and more. Overnight stay in Thekkady."
          },
          {
            "day": "Day 5",
            "details": "After breakfast, drive to Alleppey, the 'Venice of India'. Explore the serene waterways, paddy fields, and coir villages. Check-in to your hotel or houseboat for an overnight stay."
          },
          {
            "day": "Day 6",
            "details": "After breakfast, drive to Kovalam. Check in to your hotel and visit the stunning Lighthouse Beach and Hawah Beach. Relax and enjoy the tranquil atmosphere. Overnight stay in Kovalam."
          },
          {
            "day": "Day 7",
            "details": "Embark on a full-day excursion to Kanyakumari, the southern tip of India. Visit the Vivekananda Rock Memorial, Gandhi Memorial, and Suchidram Temple. Return to your Kovalam hotel for an overnight stay."
          },
          {
            "day": "Day 8",
            "details": "Check out from the hotel and transfer to Trivandrum Airport for your departure, with wonderful memories of your Kerala tour."
          }
        ]
      }
    ]
  },
  rajasthan: {
    name: "Rajasthan",
    packages: [
      {
        "title": "Royal Rajasthan Tour: Jaipur, Jodhpur & Udaipur",
        "duration": "7 Days / 6 Nights",
        "overview": "Embark on a grand tour of Rajasthan's most iconic cities. This 7-day itinerary takes you through the Pink City of Jaipur, the Blue City of Jodhpur, and the City of Lakes, Udaipur. Explore magnificent forts, stunning palaces, and vibrant local markets while immersing yourself in the rich history and culture of the region.",
        "inclusions": [
          "All transfers and sightseeing by private AC vehicle as per the itinerary",
          "Toll tax, parking charges, driver allowance, and fuel charges",
          "Chauffeur services with his food and lodging",
          "Assistance at the Airport or Railway Station",
          "All sightseeing and tours mentioned in the itinerary"
        ],
        "exclusions": [
          "Flight or train charges",
          "Entrance fees to monuments",
          "All personal expenses",
          "Anything not mentioned in the inclusions"
        ],
        "price": "₹27,000*",
        "rating": null,
        "itinerary": [
          {
            "day": "Day 1",
            "details": "Arrival at Jaipur Airport or Railway Station. Check into your hotel and then proceed for sightseeing of Jaigarh Fort, Nahargarh Fort, Jaipur Wax Museum, Jal Mahal, and City Palace. Overnight stay in Jaipur."
          },
          {
            "day": "Day 2",
            "details": "After breakfast, continue your Jaipur sightseeing. Visit Hawa Mahal, Amber Fort, Albert Hall Museum, Jantar Mantar, Birla Temple, and Ganesh Temple. In the evening, explore the local street markets and enjoy a tasty meal at Masala Chowk. Overnight stay in Jaipur."
          },
          {
            "day": "Day 3",
            "details": "After breakfast, check out from the hotel and drive to Jodhpur, the 'Blue City.' Check into your hotel and then visit the magnificent Mehrangarh Fort and its museum, which includes Moti-Mahal and Phool Mahal. Overnight stay in Jodhpur."
          },
          {
            "day": "Day 4",
            "details": "After breakfast, continue your Jodhpur sightseeing. Visit Jaswant Thada and Mandore Garden. You can also visit the Umaid Public Gardens. Overnight stay in Jodhpur."
          },
          {
            "day": "Day 5",
            "details": "After a tasty breakfast, check out from your hotel and drive to Udaipur. Upon arrival, check in and then proceed for sightseeing of Sajjangarh Fort, Jagmandir, Gulabbagh Zoo, and Fateh Sagar Lake. Overnight stay in Udaipur."
          },
          {
            "day": "Day 6",
            "details": "After breakfast, explore more of Udaipur. Visit Saheliyon Ki Bari, City Palace, Crystal Gallery, and Jagdish Temple. In the evening, enjoy a boat ride on Lake Pichola or Dudh Talai and watch the sunset. Overnight stay in Udaipur."
          },
          {
            "day": "Day 7",
            "details": "After breakfast, it's time to check out from your hotel. Your journey comes to an end as you are transferred to the Airport or Railway Station for your departure."
          }
        ]
      },
      {
        "title": "Royal Rajasthan Tour: Jaipur, Jodhpur & Udaipur",
        "duration": "7 Days / 6 Nights",
        "overview": "Embark on a grand tour of Rajasthan's most iconic cities. This 7-day itinerary takes you through the Pink City of Jaipur, the Blue City of Jodhpur, and the City of Lakes, Udaipur. Explore magnificent forts, stunning palaces, and vibrant local markets while immersing yourself in the rich history and culture of the region.",
        "inclusions": [
          "All transfers and sightseeing by private AC vehicle as per the itinerary",
          "Toll tax, parking charges, driver allowance, and fuel charges",
          "Chauffeur services with his food and lodging",
          "Assistance at the Airport or Railway Station",
          "All sightseeing and tours mentioned in the itinerary"
        ],
        "exclusions": [
          "Flight or train charges",
          "Entrance fees to monuments",
          "All personal expenses",
          "Anything not mentioned in the inclusions"
        ],
        "price": "₹39,000*",
        "rating": null,
        "itinerary": [
          {
            "day": "Day 1",
            "details": "Arrival at Jaipur Airport or Railway Station. Check into your hotel and then proceed for sightseeing of Jaigarh Fort, Nahargarh Fort, Jaipur Wax Museum, Jal Mahal, and City Palace. Overnight stay in Jaipur."
          },
          {
            "day": "Day 2",
            "details": "After breakfast, continue your Jaipur sightseeing. Visit Hawa Mahal, Amber Fort, Albert Hall Museum, Jantar Mantar, Birla Temple, and Ganesh Temple. In the evening, explore the local street markets and enjoy a tasty meal at Masala Chowk. Overnight stay in Jaipur."
          },
          {
            "day": "Day 3",
            "details": "After breakfast, check out from the hotel and drive to Jodhpur, the 'Blue City.' Check into your hotel and then visit the magnificent Mehrangarh Fort and its museum, which includes Moti-Mahal and Phool Mahal. Overnight stay in Jodhpur."
          },
          {
            "day": "Day 4",
            "details": "After breakfast, continue your Jodhpur sightseeing. Visit Jaswant Thada and Mandore Garden. You can also visit the Umaid Public Gardens. Overnight stay in Jodhpur."
          },
          {
            "day": "Day 5",
            "details": "After a tasty breakfast, check out from your hotel and drive to Udaipur. Upon arrival, check in and then proceed for sightseeing of Sajjangarh Fort, Jagmandir, Gulabbagh Zoo, and Fateh Sagar Lake. Overnight stay in Udaipur."
          },
          {
            "day": "Day 6",
            "details": "After breakfast, explore more of Udaipur. Visit Saheliyon Ki Bari, City Palace, Crystal Gallery, and Jagdish Temple. In the evening, enjoy a boat ride on Lake Pichola or Dudh Talai and watch the sunset. Overnight stay in Udaipur."
          },
          {
            "day": "Day 7",
            "details": "After breakfast, it's time to check out from your hotel. Your journey comes to an end as you are transferred to the Airport or Railway Station for your departure."
          }
        ]
      }

    ]
  },
  himachal: {
    name: "Himachal Pradesh",
    packages: [
      {
        "title": "Himachal Adventure: Shimla, Manali & Kasol",
        "duration": "7 Days / 6 Nights",
        "overview": "Experience the enchanting beauty of Himachal Pradesh on this 7-day tour. Starting from Chandigarh, you will journey to Shimla, the 'Queen of Hills,' for sightseeing and relaxation. Then, head to the scenic valley of Manali for local exploration and adventure sports in Solang Valley. Conclude your trip with a visit to the spiritual and tranquil town of Kasol before returning to Chandigarh.",
        "inclusions": [
          "All transfers and sightseeing arrangements by AC vehicle as per the itinerary (AC will be off during hill drives)",
          "Vehicle at your disposal until 5 PM as per the itinerary",
          "Services of an experienced driver",
          "Driver allowance, toll, parking fee, and night halt charges",
          "Inter-state permit and government-applicable service tax",
          "Cost is based on city-centric hotels"
        ],
        "exclusions": [
          "Any other services or food not mentioned in the inclusions",
          "Personal expenses such as tips, laundry, and beverages",
          "Airfares and train ticket charges",
          "Any entrance fees, activities charges, or NGT permit vehicle fees"
        ],
        "price": "₹19,000*",
        "rating": null,
        "itinerary": [
          {
            "day": "Day 1",
            "details": "Arrival at Chandigarh Airport/Railway Station. Begin your journey to Shimla. Enjoy the scenic drive through lush green mountains. Upon arrival, check in and relax. Overnight stay in Shimla."
          },
          {
            "day": "Day 2",
            "details": "After breakfast, proceed for a full-day excursion to Kufri, known for its panoramic views and Himalayan National Park. Later, visit Shimla's local attractions including the Viceregal Lodge, Jakhu Temple, Scandal Point, and Mall Road. Overnight stay in Shimla."
          },
          {
            "day": "Day 3",
            "details": "After breakfast, check out and drive to Manali. En route, visit the Pandoh Dam, a Kullu Shawl factory, and a rafting point. Arrive in Manali and check into your hotel. Overnight stay in Manali."
          },
          {
            "day": "Day 4",
            "details": "Enjoy a day of local sightseeing in Manali. Visit the Hadimba Devi Temple, a newly constructed Buddhist Monastery, and the picturesque village of Vashisht, with its natural sulfur hot springs. Overnight stay in Manali."
          },
          {
            "day": "Day 5",
            "details": "After breakfast, head to Solang Valley for a day of adventure. You can indulge in various activities like paragliding, zorbing, and horse-riding at your own expense. Overnight stay in Manali."
          },
          {
            "day": "Day 6",
            "details": "After breakfast, check out from the hotel and drive to Kasol, with a stop at Naggar Castle. Upon arrival, check into your accommodation. Visit Manikaran Sahib Gurudwara and its hot springs, and the Shiva Temple. Spend the evening by the Parvati River. Overnight stay in Kasol."
          },
          {
            "day": "Day 7",
            "details": "Check out from your hotel in Kasol and get a transfer to Chandigarh for your departure, with beautiful memories of your trip to Himachal Pradesh."
          }
        ]
      },
      {
        "title": "Grand Himachal Tour: Dalhousie, Dharamshala, Manali & Shimla",
        "duration": "10 Days / 9 Nights",
        "overview": "Embark on an extensive tour of Himachal Pradesh's most beautiful hill stations. This 10-day itinerary covers the picturesque landscapes of Dalhousie and Khajjiar, the spiritual and tranquil vibe of Dharamshala, the adventure hub of Manali, and the colonial charm of Shimla, offering a complete Himachali experience.",
        "inclusions": [
          "All transfers and sightseeing by private AC vehicle as per the itinerary (AC will be off during hill drives)",
          "Vehicle at your disposal as per the itinerary",
          "Services of a well-experienced driver",
          "Driver allowance, toll, parking fees, and night halt charges",
          "Inter-state permit and government-applicable service tax"
        ],
        "exclusions": [
          "Any other services or food not mentioned in the inclusions",
          "Personal expenses such as tips, laundry, and beverages",
          "Airfares and train ticket charges",
          "Any entrance fees or charges for activities or permits"
        ],
        "price": "₹38,500*",
        "rating": null,
        "itinerary": [
          {
            "day": "Day 1",
            "details": "Arrival at Delhi Airport. Begin your journey to Dalhousie. Check into your hotel upon arrival and relax. Overnight stay in Dalhousie."
          },
          {
            "day": "Day 2",
            "details": "After breakfast, proceed for local sightseeing in Dalhousie, including Subhash Chowk and Mall Road. Later, visit Khajjiar, also known as 'Mini Switzerland of India,' with its picturesque lake and lush meadows. Return to Dalhousie for an overnight stay."
          },
          {
            "day": "Day 3",
            "details": "After breakfast, check out from the hotel and drive to Dharamshala. Check into your hotel and then visit local sights like Dal Lake, Church, Bhagsunag Temple, and a Tibetan Monastery. Overnight stay in Dharamshala."
          },
          {
            "day": "Day 4",
            "details": "After breakfast, continue your exploration of Dharamshala. Visit the Bhagsu waterfall and explore the local culture of McLeodganj. Overnight stay in Dharamshala."
          },
          {
            "day": "Day 5",
            "details": "After breakfast, check out and drive to Manali. Check into your hotel and, after some rest, proceed for local sightseeing, including Hadimba Devi Temple, Manu Temple, and Vashisht Temple. Overnight stay in Manali."
          },
          {
            "day": "Day 6",
            "details": "After breakfast, head to Solang Valley for a day of adventure. You can enjoy various activities like paragliding, zorbing, and horse riding (at your own expense). Return to the hotel for dinner and an overnight stay in Manali."
          },
          {
            "day": "Day 7",
            "details": "After breakfast, continue your local sightseeing in Manali. Visit the Clubhouse and a local monastery. In the evening, you are free to explore Mall Road. Overnight stay in Manali."
          },
          {
            "day": "Day 8",
            "details": "After breakfast, check out and drive to Shimla. En route, visit Sunder Nagar Lake and Pandoh Dam. Upon reaching Shimla, check in and enjoy an evening of free time for shopping on Mall Road. Overnight stay in Shimla."
          },
          {
            "day": "Day 9",
            "details": "After breakfast, proceed for a full-day sightseeing tour of Shimla and its surroundings. Visit Kufri, Green Valley, Mini Zoo, Chini Bungalow, Jakhu Temple, and the Indian Institute of Advanced Studies. Overnight stay in Shimla."
          },
          {
            "day": "Day 10",
            "details": "After breakfast, check out from the hotel and get a transfer to Delhi International Airport for your departure, filled with unforgettable memories."
          }
        ]
      }
    ]
  },
  northeast: {
    name: "North East India",
    packages: [
      {
        "title": "Gangtok & Darjeeling: The Jewels of the North East",
        "duration": "6 Days / 5 Nights",
        "overview": "Discover the breathtaking beauty of North East India with this 6-day tour. This itinerary takes you through the serene capital of Sikkim, Gangtok, with its stunning lakes and monasteries, and then to the 'Queen of the Hills,' Darjeeling, for a memorable sunrise over the Himalayas and a visit to its iconic landmarks. A perfect blend of natural beauty and cultural exploration.",
        "inclusions": [
          "All transfers and sightseeing by private AC vehicle as per the itinerary (AC will be off during hill drives)",
          "Vehicle at your disposal as per the itinerary",
          "Services of a well-experienced driver",
          "Driver allowance, toll, parking fee, and night halt charges",
          "All applicable taxes"
        ],
        "exclusions": [
          "Any other services or food not mentioned in the inclusions",
          "Personal expenses such as tips, laundry, and beverages",
          "Airfares and train ticket charges",
          "Entrance fees to monuments, museums, and other attractions",
          "Optional tours, like Nathula Pass or Toy Train Joy Ride",
          "Permit fees for restricted areas"
        ],
        "price": "₹28,000*",
        "rating": null,
        "itinerary": [
          {
            "day": "Day 1",
            "details": "Arrival at NJP Railway Station or Bagdogra Airport. Meet our representative and transfer to Gangtok (5,410 ft). Check into your hotel and enjoy a free evening. Overnight stay in Gangtok."
          },
          {
            "day": "Day 2",
            "details": "After breakfast, embark on an excursion to the beautiful Tsomgo Lake (Changu Lake) and Baba Mandir. The rest of the day is free. Overnight stay in Gangtok. (Note: Optional tour to Nathula Pass is available at an additional cost, subject to permit availability)."
          },
          {
            "day": "Day 3",
            "details": "Enjoy a full-day Gangtok city tour. Visit Bhakthang Falls/Banjhakri Falls, Tashi View Point, Ganesh Tok, Cottage Industry and Handicraft Centre, Dro-dul Chorten, and the Institute of Tibetology. Overnight stay in Gangtok."
          },
          {
            "day": "Day 4",
            "details": "After breakfast, check out and drive to Darjeeling, the 'Queen of the Hills' (7,100 ft). Check into your hotel upon arrival. The evening is free for leisure. Overnight stay in Darjeeling. (Note: Optional Toy Train Joy Ride can be arranged)."
          },
          {
            "day": "Day 5",
            "details": "Early morning drive to Tiger Hill to witness a magnificent sunrise over Mt. Kanchenjunga. After breakfast, proceed for Darjeeling local sightseeing. Visit Ghoom Monastery, Batasia Loop, Himalayan Mountaineering Institute, Zoological Park, and the Japanese Temple. Overnight stay in Darjeeling."
          },
          {
            "day": "Day 6",
            "details": "After breakfast, check out from the hotel. You will be transferred to NJP Railway Station or Bagdogra Airport for your onward journey."
          }
        ]
      },
      {
        "title": "Enchanting North East: Meghalaya & Arunachal Pradesh",
        "duration": "9 Days / 8 Nights",
        "overview": "Embark on an epic 9-day journey through the serene landscapes of Meghalaya and the majestic Himalayan ranges of Arunachal Pradesh. This comprehensive tour takes you from the rolling hills of Shillong and the wettest place on Earth, Cherrapunjee, to the spiritual havens of Dirang and Tawang, offering an unparalleled blend of natural wonders and cultural immersion.",
        "inclusions": [
          "Private vehicle for the entire tour as per the itinerary",
          "Driver allowances",
          "Fuel charges",
          "Parking and toll fees",
          "24/7 travel assistance over call"
        ],
        "exclusions": [
          "Hotel accommodation",
          "Meals or beverages",
          "Entry fees and activity charges",
          "Guide charges",
          "Inner Line Permit (ILP) or special permits",
          "Vehicle usage beyond the specified itinerary",
          "Personal expenses like tips, shopping, and laundry",
          "Liability for delays due to weather, strikes, or roadblocks",
          "GST or applicable taxes if not mentioned"
        ],
        "price": "₹47,000*",
        "rating": null,
        "itinerary": [
          {
            "day": "Day 1",
            "details": "Arrival at Guwahati Airport/Railway Station. Transfer to Shillong, the 'Scotland of the East.' En route, visit the scenic Umium Lake. Check into your hotel and enjoy a free evening. Overnight stay in Shillong."
          },
          {
            "day": "Day 2",
            "details": "After breakfast, proceed for a day trip to Cherrapunjee, the wettest place on Earth. Enjoy views of Mawdok-Dympep Valley, Nohkalikai Falls, and Seven Sisters Falls. Explore Mawsmai Cave before returning to Shillong. En route, stop at Elephanta Falls. Overnight stay in Shillong."
          },
          {
            "day": "Day 3",
            "details": "After breakfast, visit the Don Bosco Museum and Ward's Lake in Shillong. Later, drive to Tezpur/Bhalukpong. Check into your hotel upon arrival. The evening is at your leisure. Overnight stay in Tezpur/Bhalukpong."
          },
          {
            "day": "Day 4",
            "details": "After an early breakfast, drive to Dirang. Visit the Tipi Orchidarium and Nag Temple en route. Upon arrival, check into your hotel and visit Apple orchards, a Kiwi farm (seasonal), Dirang Monastery, and Kalachakra Monastery. Overnight stay in Dirang."
          },
          {
            "day": "Day 5",
            "details": "After an early breakfast, proceed to Tawang. Cross the Sela Pass and visit Sela Lake and the Jaswantgarh War Memorial. Also, see the Nuranang Falls. Check into your hotel upon arrival. Overnight stay in Tawang."
          },
          {
            "day": "Day 6",
            "details": "Full-day sightseeing in Tawang. Visit the historic Tawang Monastery, the largest in the Himalayan region. Later, visit Urgeling Gompa, the birthplace of the 6th Dalai Lama, and the War Memorial. Explore a local craft center. Overnight stay in Tawang."
          },
          {
            "day": "Day 7",
            "details": "After breakfast, transfer to Bomdila. Check into your hotel and visit the Gontse Rabgyaling and Thub-Chog Gatsel Ling monasteries. Enjoy panoramic views of the Himalayas and explore the local market in the evening. Overnight stay in Bomdila."
          },
          {
            "day": "Day 8",
            "details": "After breakfast, begin the long drive to Guwahati. Check into your hotel upon arrival. The evening is free for individual activities. Overnight stay in Guwahati."
          },
          {
            "day": "Day 9",
            "details": "After breakfast, check out from the hotel and transfer to Guwahati Airport or Railway Station for your departure."
          }
        ]
      }
    ]
  },
  kashmir: {
    name: "Kashmir",
    packages: [
      {
        "title": "Kashmir: The Paradise on Earth",
        "duration": "5 Days / 4 Nights",
        "overview": "Discover the breathtaking beauty of Kashmir with this 5-day tour. This itinerary takes you through the serene valley of Pahalgam, the lush Mughal Gardens of Srinagar, the snowy landscapes of Sonmarg, and the picturesque meadows of Gulmarg, offering a perfect blend of natural beauty and cultural heritage.",
        "inclusions": [
          "Assistance upon arrival by driver",
          "All transfers and sightseeing arrangements by AC Vehicle as per itinerary",
          "Services of a well-experienced driver",
          "Driver allowance, toll, parking fee, night halt charges, and inter-state permits",
          "All applicable taxes"
        ],
        "exclusions": [
          "Srinagar Shikara Ride at Dal/Nigeen Lake",
          "Union Vehicle/Pony Ride for sightseeing in Pahalgam (Aru, Chandanwari, Betaab Valley, Baisaran)",
          "Pony Ride, Gondola Ride, or Sledge in Gulmarg",
          "Union Taxi in Sonmarg for Zero Point/Zojila/Fish Point",
          "Any other services or food not mentioned",
          "Personal expenses like tips, laundry, and beverages",
          "Airfares and train ticket charges",
          "Any entrance fees or activities charges",
          "Guide service",
          "Costs incidental to any change in the itinerary due to unforeseen circumstances"
        ],
        "price": "₹10,500*",
        "rating": null,
        "itinerary": [
          {
            "day": "Day 1",
            "details": "Arrival at Srinagar Airport. Transfer to Pahalgam, the 'Vale of Kashmir'. En route, visit Saffron fields and the ruins of Avantipur. Check into your hotel. You can opt for paid sightseeing in Pahalgam including Baisaran Valley and Aru, Chandanwari, and Betaab Valley (by Union vehicle). Overnight stay in Pahalgam."
          },
          {
            "day": "Day 2",
            "details": "After breakfast, proceed to Srinagar. Enjoy a full-day sightseeing tour covering the famous Mughal Gardens (Nishat, Shalimar, Chashmashahi, Parimahal) and Shankaracharya Temple. Later, enjoy an optional Shikara ride on Dal Lake. Overnight stay in Srinagar."
          },
          {
            "day": "Day 3",
            "details": "Full-day excursion to Sonmarg, one of the most beautiful drives in Kashmir. You can opt for a pony ride to Thajiwas Glacier or a Union Taxi to Zero Point (at your own expense). Return to Srinagar for an overnight stay."
          },
          {
            "day": "Day 4",
            "details": "Full-day excursion to Gulmarg, also known as the 'Meadow of Flowers'. Enjoy a Gondola Cable Car Ride (optional, at your own expense) to see the stunning views. Return to Srinagar for an overnight stay."
          },
          {
            "day": "Day 5",
            "details": "After breakfast, check out from the hotel and get a transfer to Srinagar Airport for your departure, filled with wonderful memories of your trip."
          }
        ]
      },
      {
        "title": "Extended Kashmir Retreat: Sonmarg, Gulmarg, Pahalgam & Srinagar",
        "duration": "8 Days / 7 Nights",
        "overview": "Embark on a comprehensive 8-day tour of Kashmir, covering all its major scenic destinations. This itinerary is designed for an in-depth exploration, from the tranquil beauty of a Srinagar houseboat to the snow-covered landscapes of Sonmarg, the enchanting meadows of Gulmarg, and the picturesque valleys of Pahalgam. Enjoy ample time to relax and immerse yourself in the natural splendor of the region.",
        "inclusions": [
          "Assistance upon arrival by driver",
          "All transfers and sightseeing arrangements by AC Vehicle as per itinerary",
          "Services of a well-experienced driver",
          "Driver allowance, toll, parking fee, and night halt charges",
          "Inter-state permit and government-applicable service of vehicle",
          "All applicable taxes"
        ],
        "exclusions": [
          "Srinagar Shikara Ride at Dal/Nigeen Lake",
          "Union Vehicle/Pony Ride for sightseeing in Pahalgam (Chandanwari, Aru Valley, Betaab Valley)",
          "Pony Ride, Gondola Ride, or Sledge in Gulmarg",
          "Union Taxi in Sonmarg for Zero Point/Zojila/Fish Point",
          "Any other services or food not mentioned in the inclusions",
          "Personal expenses like tips, laundry, and beverages",
          "Airfares and train ticket charges",
          "Any entrance fees or activities charges unless specified",
          "Guide service",
          "Costs incidental to any change in the itinerary due to unforeseen circumstances"
        ],
        "price": "₹17,000*",
        "rating": null,
        "itinerary": [
          {
            "day": "Day 1",
            "details": "Arrival at Srinagar International Airport. Transfer to your houseboat in Srinagar. Check in and relax. Later, you can take an optional Shikara ride on Dal Lake. Overnight stay in Srinagar houseboat."
          },
          {
            "day": "Day 2",
            "details": "After breakfast, check out from the houseboat and proceed to Sonmarg. Upon arrival, check into your hotel. You can opt for a pony ride to Thajiwas Glacier or hire a Union Taxi to visit Zero Point and Zojila Pass (at your own expense). Overnight stay in a Sonmarg hotel."
          },
          {
            "day": "Day 3",
            "details": "After breakfast, check out and transfer to Gulmarg. En route, pass by beautiful apple and cherry orchards. In Gulmarg, you can take a ride on the world's highest cable car, the 'Gondola', or play golf (at your own expense). Overnight stay in Gulmarg."
          },
          {
            "day": "Day 4",
            "details": "A day at leisure to explore Gulmarg on your own. You can enjoy various activities like horse riding, sledding, or simply take in the stunning scenic beauty. Overnight stay in Gulmarg."
          },
          {
            "day": "Day 5",
            "details": "After breakfast, check out from the hotel and drive to Pahalgam. En route, visit Saffron fields and the ancient Avantipur ruins. Upon arrival, check into your hotel and start sightseeing in Pahalgam. You can explore Baisaran Valley and other nearby spots by pony (at your own expense). Overnight stay in Pahalgam."
          },
          {
            "day": "Day 6",
            "details": "Today, you can take a Union Vehicle (at your own expense) to explore the beautiful Aru, Chandanwari, and Betaab Valleys. Enjoy the serene landscapes and natural beauty of these famous spots. Overnight stay in Pahalgam."
          },
          {
            "day": "Day 7",
            "details": "After breakfast, check out and drive back to Srinagar. Check in to your hotel and proceed for a half-day city tour, visiting the Mughal Gardens (Nishat, Shalimar, Chashmashahi, Parimahal) and Shankaracharya Temple. Overnight stay in Srinagar."
          },
          {
            "day": "Day 8",
            "details": "After breakfast, check out from the hotel and get a transfer to Srinagar Airport for your departure."
          }
        ]
      }
    ]
  },
  gujrat: {
    name: "Gujrat",
    packages: [
      {
        "title": "Divine Gujarat Pilgrimage: Dwarka, Somnath & Diu",
        "duration": "6 Days / 5 Nights",
        "overview": "Embark on a spiritual and coastal journey through Gujarat. This 6-day itinerary combines sacred temple visits to Dwarkadhish and Somnath, with the serene beaches of Diu. Explore the rich cultural heritage and historical significance of these holy cities while enjoying a tranquil escape by the sea.",
        "inclusions": [
          "All transfers and sightseeing by private AC vehicle as per the itinerary",
          "Driver allowance, toll tax, and parking charges",
          "Fuel charges",
          "Assistance at the Airport or Railway Station"
        ],
        "exclusions": [
          "Airfares or train charges",
          "Accommodation in hotels",
          "Meals and beverages",
          "Entrance fees to monuments and temples",
          "Boat charges for Bet Dwarka",
          "Personal expenses"
        ],
        "price": "₹25,000*",
        "rating": null,
        "itinerary": [
          {
            "day": "Day 1",
            "details": "Arrival at Ahmedabad Airport. Meet our representative and drive to Dwarka. Check into your hotel and, in the evening, attend the aarti and have darshan at Dwarkadhish Temple. Overnight stay in Dwarka."
          },
          {
            "day": "Day 2",
            "details": "In the early morning, visit Dwarkadhish Temple for morning aarti. After breakfast, transfer to the jetty to take a boat to Bet Dwarka and visit the Krishna temple. Return to Dwarka, visiting Nageshwar Mahadev Temple en route. Overnight stay in Dwarka."
          },
          {
            "day": "Day 3",
            "details": "After breakfast, check out and drive to Somnath. En route, visit Kirti Mandir and Sudama Temple in Porbandar. Upon arrival in Somnath, check into your hotel and visit Somnath Temple and Bhalka Tirth Temple. Overnight stay in Somnath."
          },
          {
            "day": "Day 4",
            "details": "After breakfast, drive to Diu. Check into your hotel and spend the rest of the day at leisure on the beautiful beaches. Overnight stay in Diu."
          },
          {
            "day": "Day 5",
            "details": "After breakfast, check out from the hotel and drive back to Ahmedabad. Check into your hotel. In the evening, you can go shopping at Law Garden or visit Kankaria Lake (closed on Monday). Overnight stay in Ahmedabad."
          },
          {
            "day": "Day 6",
            "details": "After breakfast, check out from the hotel. You will be transferred to Ahmedabad Airport or Railway Station for your departure."
          }
        ]
      },
      {
        "title": "Grand Gujarat Tour: From Temples to Wildlife",
        "duration": "9 Days / 8 Nights",
        "overview": "Embark on a comprehensive tour of Gujarat, covering its diverse landscapes and rich heritage. This 9-day itinerary takes you from the cultural heart of Bhuj and the spiritual cities of Dwarka and Somnath to the wildlife sanctuary of Gir. Conclude your journey in the modern hub of Ahmedabad and the monumental site of the Statue of Unity in Kevadia.",
        "inclusions": [
          "Toll tax",
          "Parking charges",
          "Driver allowance",
          "Fuel charges",
          "All sightseeing and tours mentioned in the itinerary",
          "Chauffeur services including food and lodging",
          "Assistance at the International and Domestic Airports/Railway Station"
        ],
        "exclusions": [
          "Flight or train charges",
          "Entrance fees to monuments",
          "Personal expenses",
          "Anything not mentioned in the inclusions"
        ],
        "price": "₹45,000*",
        "rating": null,
        "itinerary": [
          {
            "day": "Day 1",
            "details": "Arrival at Ahmedabad Airport and transfer to Bhuj. Check into your hotel and relax. Overnight stay in Bhuj."
          },
          {
            "day": "Day 2",
            "details": "Full day of sightseeing in Bhuj. Explore the local culture, historic palaces, and if time permits, the famous White Rann of Kutch (seasonal). Overnight stay in Bhuj."
          },
          {
            "day": "Day 3",
            "details": "After breakfast, check out from the hotel and drive to Dwarka. Upon arrival, check into your hotel and, in the evening, visit the Dwarkadhish Temple for evening aarti. Overnight stay in Dwarka."
          },
          {
            "day": "Day 4",
            "details": "After morning aarti at Dwarkadhish Temple, take a boat to Bet Dwarka. Also, visit the Nageshwar Jyotirlinga Temple. Overnight stay in Dwarka."
          },
          {
            "day": "Day 5",
            "details": "After breakfast, check out and drive to Somnath. En route, visit Kirti Mandir and Sudama Temple in Porbandar. Upon arrival in Somnath, visit the Somnath Temple and Bhalka Tirth. Overnight stay in Somnath."
          },
          {
            "day": "Day 6",
            "details": "After breakfast, check out from the hotel and drive to Gir (Sasan Gir). Check into your hotel and prepare for the next day's safari. Overnight stay in Gir."
          },
          {
            "day": "Day 7",
            "details": "Enjoy a morning safari at Gir National Park (at your own expense) to spot the Asiatic lions. Afterward, drive to Ahmedabad. Check into your hotel and relax. Overnight stay in Ahmedabad."
          },
          {
            "day": "Day 8",
            "details": "After breakfast, check out and drive to Kevadia. Visit the Statue of Unity, the Sardar Sarovar Dam, and other attractions in the area. Overnight stay in Kevadia."
          },
          {
            "day": "Day 9",
            "details": "After breakfast, check out from the hotel and get a transfer to Ahmedabad Airport for your departure, with wonderful memories of your Gujarat tour."
          }
        ]
      }
    ]
  },
  andaman: {
    name: "Andaman & Nicobar Islands",
    packages: [
      {
        "title": "Andaman Islands Paradise: Port Blair, Havelock & Neil",
        "duration": "6 Days / 5 Nights",
        "overview": "Immerse yourself in the tropical paradise of the Andaman Islands with this 6-day tour. Explore the historical landmarks of Port Blair, including the infamous Cellular Jail, before heading to the pristine beaches and vibrant marine life of Havelock and Neil Islands. This trip promises a perfect blend of history, relaxation, and adventure.",
        "inclusions": [
          "Sightseeing as per the itinerary",
          "Light and Sound Show tickets at Cellular Jail",
          "Cellular Jail entry tickets",
          "Elephant Beach entry fee with a complimentary snorkeling session",
          "Return airport and jetty transfers in an AC vehicle on a point-to-point basis",
          "Cruise transfers between Port Blair, Havelock Island, and Neil Island by private ferry (base category, subject to availability)",
          "Vehicle will be provided on a point-to-point basis"
        ],
        "exclusions": [
          "Extra vehicle costs if the hotel is far from the city center",
          "Extra supplement cost if base class cruise tickets are sold out",
          "Medical and travel insurance",
          "Vehicle services are not on a disposal basis",
          "Additional costs due to flight cancellations or other unforeseen factors",
          "Any other services not mentioned in the inclusions"
        ],
        "price": "₹22,000*",
        "rating": null,
        "itinerary": [
          {
            "day": "Day 1",
            "details": "Arrival at Veer Savarkar International Airport in Port Blair. Transfer to your hotel and check in. In the afternoon, visit Corbyn’s Cove beach and the Cellular Jail. Witness the Light and Sound Show in the evening. Overnight stay in Port Blair."
          },
          {
            "day": "Day 2",
            "details": "After breakfast, transfer to the jetty to board a private ferry to Havelock Island. Upon arrival, check into your hotel and visit the famous Radha Nagar Beach for swimming and relaxation. Overnight stay in Havelock Island."
          },
          {
            "day": "Day 3",
            "details": "After an early breakfast, take a ferry to Elephant Beach. Enjoy the pristine white sands, clear waters, and a complimentary snorkeling session. Elephant Beach is an ideal spot for water sports and exploring marine life. Overnight stay in Havelock Island."
          },
          {
            "day": "Day 4",
            "details": "After breakfast, check out from the hotel and take a ferry to Neil Island. Check in to your hotel and then proceed for local sightseeing, including Bharatpur Beach, Natural Bridge, and Laxmanpur Beach. Overnight stay in Neil Island."
          },
          {
            "day": "Day 5",
            "details": "After breakfast, check out and take a ferry back to Port Blair. Upon arrival, proceed for a day trip to Chidiya Tapu, known for its biodiversity, migratory birds, and magnificent sunset views. Overnight stay in Port Blair."
          },
          {
            "day": "Day 6",
            "details": "After breakfast, check out from your hotel and get a transfer to Veer Savarkar International Airport for your departure."
          }
        ]
      },
      {
        "title": "Andaman Islands Grand Tour: Havelock, Neil & Port Blair",
        "duration": "8 Days / 7 Nights",
        "overview": "Embark on an extended journey through the Andaman Islands. This 8-day itinerary is designed to maximize your time on the idyllic islands, allowing for a deeper exploration of Havelock and Neil's pristine beaches and serene atmosphere, with a visit to Port Blair's historical sites at the end of your trip. It's an ideal choice for a truly relaxing and immersive island experience.",
        "inclusions": [
          "Sightseeing as per the itinerary",
          "Light and Sound Show tickets at Cellular Jail",
          "Cellular Jail entry tickets",
          "Elephant Beach entry fee with a complimentary snorkeling session",
          "Return airport and jetty transfers in an AC vehicle on a point-to-point basis",
          "Vehicle will be provided on a point-to-point basis",
          "Cruise transfers between Port Blair, Havelock Island, and Neil Island by private ferry (base category, subject to availability)"
        ],
        "exclusions": [
          "Extra vehicle costs if the hotel is far from the city center",
          "Extra supplement cost if base class cruise tickets are sold out",
          "Medical and travel insurance",
          "Vehicle services are not on a disposal basis",
          "Additional costs due to flight cancellations or other unforeseen factors",
          "Any other services not mentioned in the inclusions"
        ],
        "price": "₹25,000*",
        "rating": null,
        "itinerary": [
          {
            "day": "Day 1",
            "details": "Arrive at Port Blair Airport and take a private ferry to Havelock Island (arrive before 9:00 AM). Check in to your hotel and visit the stunning Radha Nagar Beach. Overnight stay in Havelock."
          },
          {
            "day": "Day 2",
            "details": "Take a day trip to Elephant Beach by speed boat. Enjoy the pristine beach and a complimentary snorkeling session. The rest of the day is at your leisure. Overnight stay in Havelock."
          },
          {
            "day": "Day 3",
            "details": "After breakfast, proceed to Kalapathar Beach. Enjoy the peaceful surroundings and beautiful scenery. Return to your hotel and enjoy the rest of the day at leisure. Overnight stay in Havelock."
          },
          {
            "day": "Day 4",
            "details": "After breakfast, check out from the hotel and take a ferry to Neil Island. Check in and proceed for local sightseeing, including Laxmanpur Beach, Natural Bridge, and Bharatpur Beach. Overnight stay in Neil Island."
          },
          {
            "day": "Day 5",
            "details": "A day free at leisure to explore Neil Island at your own pace. You can relax on the beaches, explore local markets, or simply soak in the island's natural beauty. Overnight stay in Neil Island."
          },
          {
            "day": "Day 6",
            "details": "After breakfast, visit Bharatpur Beach. Later, take a ferry back to Port Blair. Upon arrival, transfer to your hotel. Overnight stay in Port Blair."
          },
          {
            "day": "Day 7",
            "details": "Afternoon visit to Corbyn's Cove beach for swimming and sun-basking. Later, visit the historic Cellular Jail and witness the enthralling Light and Sound Show. Overnight stay in Port Blair."
          },
          {
            "day": "Day 8",
            "details": "After breakfast, check out from the hotel and get a transfer to Veer Savarkar International Airport for your departure."
          }
        ]
      }
    ]
  },

  // International Destinations
  srilanka: {
    name: "Srilanka",
    packages: [
      {
        "title": "Sri Lanka: Cultural & Coastal Highlights",
        "duration": "6 Days / 5 Nights",
        "overview": "Embark on a captivating journey through the heart of Sri Lanka. This 6-day itinerary combines the rich cultural heritage of Kandy, the scenic tea plantations of Nuwara Eliya, the golden beaches of Bentota, and the bustling city life of Colombo, offering a diverse and memorable experience.",
        "inclusions": [
          "All transfers and sightseeing by private vehicle (SIC)",
          "Entrance to Pinnawela Elephant Orphanage",
          "Visit to Temple of the Tooth Relic and Gem Museum",
          "Traditional Cultural Dance Show in Kandy",
          "Madhu River boat ride in Bentota",
          "Visit to Turtle Hatchery",
          "Lunch at outside restaurants on specified days"
        ],
        "exclusions": [
          "International flights",
          "Visa fees",
          "Meals not mentioned in the itinerary (e.g., all dinners)",
          "Entrance fees to attractions unless specified",
          "Personal expenses such as tips, laundry, and beverages",
          "Water sports activities in Bentota"
        ],
        "price": "₹39,000*",
        "rating": null,
        "itinerary": [
          {
            "day": "Day 1",
            "details": "Arrival at Colombo Airport. Meet our representative and transfer to Kandy. En route, visit the Pinnawela Elephant Orphanage. In Kandy, take a city tour visiting the Temple of the Tooth Relic and a Gem Museum. In the evening, witness a cultural dance show. Overnight stay in Kandy."
          },
          {
            "day": "Day 2",
            "details": "After breakfast, transfer from Kandy to Nuwara Eliya. Enjoy a scenic journey through the lush green hills and tea plantations of Sri Lanka's high country. Overnight stay in Nuwara Eliya."
          },
          {
            "day": "Day 3",
            "details": "Enjoy breakfast and transfer to Bentota. En route, visit Ramboda waterfall and the Ramboda Hanuman Temple. The rest of the day is at your leisure to relax on the golden beaches. Overnight stay in Bentota."
          },
          {
            "day": "Day 4",
            "details": "After breakfast, proceed for a city tour of Bentota. Enjoy a relaxing boat ride along the Madhu River and visit a Turtle Hatchery. Overnight stay in Bentota."
          },
          {
            "day": "Day 5",
            "details": "After breakfast, transfer to Colombo. Enjoy a city tour visiting iconic landmarks such as Galle Face Green, Viharamahadevi Park, and the National Museum. You may also indulge in some shopping. Overnight stay in Colombo."
          },
          {
            "day": "Day 6",
            "details": "After breakfast, check out from your hotel and get a transfer to Bandaranaike International Airport for your departure."
          }
        ]
      },
      {
        "title": "Sri Lanka's Heritage & Coastal Escape",
        "duration": "8 Days / 7 Nights",
        "overview": "Discover the incredible diversity of Sri Lanka on this 8-day tour. Begin in the cultural heartland, exploring the ancient wonders of Dambulla and Sigiriya. Journey through the historic city of Kandy, relax on the pristine beaches of Bentota, and conclude your adventure with a vibrant city tour of Colombo. A perfect itinerary for history, nature, and relaxation lovers.",
        "inclusions": [
          "All transfers and sightseeing by private vehicle (SIC)",
          "Entrance to Pinnawela Elephant Orphanage (Note: Entrance fee is an exclusion)",
          "City tours as per the itinerary"
        ],
        "exclusions": [
          "International flights and visa fees",
          "Meals not specified in the itinerary",
          "Pinnawala Elephant Orphanage entrance fee (USD 12 per person)",
          "Dambulla Cave Temple entrance fee (USD 10 per person)",
          "Sigiriya Rock Fortress entrance fee (USD 22 per person)",
          "Peradeniya Botanical Garden entrance fee (USD 12 per person)",
          "Temple of the Tooth Relic entrance fee (USD 10 per person)",
          "Turtle Hatchery entrance fee (USD 10 per person)",
          "Madhu River boat ride cost (USD 16 per person)",
          "Water sports (USD 25 per person)",
          "Lotus Tower (USD 22 per person)",
          "Gangaramaya Temple (USD 5 per person)",
          "Optional tours like Minneriya National Park wildlife tours",
          "Personal expenses such as tips, shopping, and beverages"
        ],
        "price": "₹46,480*",
        "rating": null,
        "itinerary": [
          {
            "day": "Day 1",
            "details": "Arrival at Colombo Airport. Meet our representative and transfer to Dambulla. En route, visit the Pinnawela Elephant Orphanage and the Dambulla Cave Temples. Overnight stay in Dambulla."
          },
          {
            "day": "Day 2",
            "details": "After breakfast, your city tour will begin with a visit to the UNESCO World Heritage site, the Sigiriya Rock Fortress. Later, you have the option to take a wildlife tour to Minneriya National Park (extra cost). Overnight stay in Dambulla."
          },
          {
            "day": "Day 3",
            "details": "After breakfast, check out and transfer to Kandy. On your city tour, you will visit the sacred Temple of the Tooth Relic. Overnight stay in Kandy."
          },
          {
            "day": "Day 4",
            "details": "After breakfast, visit the Peradeniya Botanical Gardens. Later, visit a Gem Museum and, in the evening, enjoy a Traditional Cultural Dance Show. Overnight stay in Kandy."
          },
          {
            "day": "Day 5",
            "details": "After breakfast, check out and transfer to Bentota. Spend the day at your leisure, relaxing on the beautiful golden beaches or indulging in water sports. Overnight stay in Bentota."
          },
          {
            "day": "Day 6",
            "details": "After breakfast, proceed for a city tour of Bentota. Enjoy a boat ride along the Madhu River and visit a Turtle Hatchery. Overnight stay in Bentota."
          },
          {
            "day": "Day 7",
            "details": "After breakfast, check out and transfer to Colombo. Explore the commercial capital on a city tour, visiting famous places like Galle Face Green, the National Museum, and various shopping areas. Overnight stay in Colombo."
          },
          {
            "day": "Day 8",
            "details": "After breakfast, check out from your hotel and get a transfer to Colombo Airport for your departure."
          }
        ]
      }
    ]
  },
  switzerland: {
    name: "Europe",
    packages: [
      {
        title: "Ultimate Europe Grand Tour",
        duration: "18 Nights / 19 Days",
        overview:
          "A thoughtfully curated European journey covering iconic cities, cultural landmarks, scenic landscapes, and spiritual touchpoints across the UK, Western Europe, Switzerland, and Italy. Designed for travellers seeking comfort, clarity, and meaning, this tour blends guided exploration, premium travel, and seamless logistics for a truly immersive European experience.",
        inclusions: [
          "To & fro international flights (Into London & out of Rome)",
          "18 nights accommodation in premium 4-star hotels (Twin/Double sharing)",
          "Daily Breakfast, Lunch & Dinner",
          "Deluxe air-conditioned coach for all transfers and sightseeing",
          "Guided sightseeing as per itinerary",
          "Experienced bilingual (English & Hindi) Tour Manager",
          "Medical insurance for travellers up to 60 years",
          "One bottle of mineral water per person per day",
          "All hotel taxes and service charges"
        ],
        exclusions: [
          "Tips (EUR 3 per person per day)",
          "Visa fees and personal expenses",
          "Laundry, phone calls, beverages",
          "Any cost arising due to force majeure or personal emergencies",
          "Anything not mentioned under inclusions"
        ],
        price: "₹X,XX,XXX*",
        rating: null,
        itinerary: [
          {
            day: "Day 1",
            details:
              "Arrive in London. Meet your Mantra Miles Tour Manager and proceed for a panoramic city tour covering St. Paul’s Cathedral, Big Ben, Parliament House, Westminster Abbey, and Buckingham Palace. Overnight stay in London."
          },
          {
            day: "Day 2",
            details:
              "Guided city tour of London with a local expert. Visit Hyde Park, Trafalgar Square, Piccadilly Circus, Tower Bridge, enjoy a ride on the London Eye, and visit Madame Tussauds Wax Museum. Overnight in London."
          },
          {
            day: "Day 3",
            details:
              "Visit Lord’s Cricket Stadium, proceed to Oxford for an orientation tour of the historic university town. Continue to Manchester for a panoramic city tour. Overnight in Manchester."
          },
          {
            day: "Day 4",
            details:
              "Scenic drive to the Lake District. Enjoy a cruise on Lake Windermere. Proceed to Glasgow for a city orientation tour. Overnight in Glasgow."
          },
          {
            day: "Day 5",
            details:
              "Explore the Scottish Highlands including Loch Ness, Glen Coe, Fort Augustus, and the scenic village of Luss on the banks of Loch Lomond. Return to Glasgow for overnight stay."
          },
          {
            day: "Day 6",
            details:
              "Drive to Edinburgh. Visit Edinburgh Castle and explore the Royal Mile. Later proceed to Birmingham. Overnight stay in Birmingham."
          },
          {
            day: "Day 7",
            details:
              "City tour of Birmingham including Symphony Hall and Victoria Square. Visit Shri Venkateswara (Balaji) Temple. Board overnight cruise to the Netherlands."
          },
          {
            day: "Day 8",
            details:
              "Arrive in the Netherlands. Enjoy a canal cruise in Amsterdam. Visit a cheese and wooden shoe factory. Photo stops at Madame Tussauds, Atomium, and Manneken Pis. Overnight in the Netherlands."
          },
          {
            day: "Day 9",
            details:
              "Orientation tour of Brussels. Proceed to Paris and enjoy a romantic Seine River Cruise. Overnight in Paris."
          },
          {
            day: "Day 10",
            details:
              "Guided city tour of Paris covering Arc de Triomphe, Champs-Élysées, Concorde Square, and Opera House. Visit the Palace of Versailles. Overnight in Paris."
          },
          {
            day: "Day 11",
            details:
              "Ascend the Eiffel Tower (or Montparnasse Tower). Drive to Strasbourg for an orientation tour including Notre Dame Cathedral and Old Town. Overnight in Strasbourg."
          },
          {
            day: "Day 12",
            details:
              "Visit the Black Forest and enjoy a cuckoo clock demonstration. View Rhine Falls at Schaffhausen. Proceed to Switzerland for overnight stay."
          },
          {
            day: "Day 13",
            details:
              "Cable car ride to Mt. Titlis. Visit the Glacier Cave and Cliff Walk. Orientation tour of Lucerne. Overnight in Switzerland."
          },
          {
            day: "Day 14",
            details:
              "Travel on the scenic Golden Pass Train to Gstaad. Visit Montreux. Overnight in Switzerland."
          },
          {
            day: "Day 15",
            details:
              "Visit Vaduz, capital of Liechtenstein. Experience Swarovski Crystal World. Orientation tour of Innsbruck. Overnight in Austria."
          },
          {
            day: "Day 16",
            details:
              "Proceed to Venice. Enjoy a private boat ride to St. Mark’s Square. Visit Basilica di San Marco, Doge’s Palace, and Murano Glass Factory. Overnight in Ferrara region."
          },
          {
            day: "Day 17",
            details:
              "Visit the Leaning Tower of Pisa. Guided tour of Florence covering the Duomo, Piazza della Signoria, and Ponte Vecchio. Overnight in Tuscany."
          },
          {
            day: "Day 18",
            details:
              "Guided city tour of Rome. Visit the Colosseum, Trevi Fountain, Vatican Museums, Sistine Chapel, and St. Peter’s Basilica. Overnight in Rome."
          },
          {
            day: "Day 19",
            details:
              "After breakfast, transfer to the airport for return flight home with unforgettable memories curated by Mantra Miles Tour."
          }
        ]
      },
      {
        title: "Unbeatable Europe 2026",
        duration: "7 Nights / 8 Days",
        countriesCovered: [
          "France",
          "Belgium",
          "Netherlands",
          "Germany",
          "Switzerland"
        ],
        overview:
          "A perfectly curated European holiday offering a rich blend of culture, stunning landscapes, iconic monuments, and unforgettable experiences—wrapped in comfort, scenic journeys, Indian meals, and premium accommodations. From the romance of Paris to the charm of Amsterdam, the Black Forest villages, Rhine Falls, and snow-covered Mt. Titlis, this journey promises memories that last a lifetime.",
        inclusions: [
          "Return economy class airfare ex-Bangalore",
          "Applicable airline taxes",
          "Schengen Tourist Visa assistance & processing",
          "Travel insurance for passengers below 60 years",
          "7 nights accommodation in premium hotels",
          "Daily buffet breakfast",
          "06 Indian lunches (Veg / Non-Veg / Jain)",
          "07 Indian dinners (Veg / Non-Veg / Jain)",
          "All sightseeing and transfers by air-conditioned coach",
          "Golden Pass scenic train journey",
          "Professional Mantra Miles Tour Manager throughout the tour"
        ],
        exclusions: [
          "5% TCS",
          "Tips for drivers and guides",
          "Personal expenses (laundry, beverages, shopping, etc.)",
          "Meals not mentioned in inclusions",
          "Early check-in / late check-out charges",
          "City taxes payable directly at hotels",
          "Optional tours and upgrades",
          "Expenses due to force majeure circumstances",
          "Anything not mentioned under inclusions"
        ],
        price: "₹X,XX,XXX*",
        rating: null,
        itinerary: [
          {
            day: "Day 1",
            details:
              "Arrive in Paris. Meet the Mantra Miles Tour Manager and transfer to the hotel. Enjoy a romantic Seine River cruise passing landmarks such as Notre Dame Cathedral, Eiffel Tower, Louvre Museum, and Musée d’Orsay. Overnight in Paris. (Dinner)"
          },
          {
            day: "Day 2",
            details:
              "Guided city tour of Paris covering Place Vendôme, Opera Garnier, Musée d’Orsay, Place de la Concorde, Champs-Élysées, Arc de Triomphe, Alexander Bridge, and Les Invalides. Visit the Eiffel Tower (2nd level) and Fragonard Perfumery. Overnight in Paris. (Breakfast, Lunch, Dinner)"
          },
          {
            day: "Day 3",
            details:
              "Proceed to Brussels. Visit Grand Place, Manneken Pis, drive past St. Michael’s Church, and photo stop at Atomium. Continue to the Netherlands. Visit Keukenhof Gardens (till 15 May) or Madurodam (from 16 May). Overnight in Netherlands. (Breakfast, Lunch, Dinner)"
          },
          {
            day: "Day 4",
            details:
              "Explore Amsterdam with a glass-topped canal cruise. Later drive to Cologne and visit the iconic Cologne Cathedral, a UNESCO World Heritage Site. Overnight in Germany. (Breakfast, Lunch, Dinner)"
          },
          {
            day: "Day 5",
            details:
              "Drive through the scenic Black Forest region. Visit a cuckoo clock workshop. Continue to Switzerland to witness the majestic Rhine Falls at Schaffhausen. Overnight in Central Switzerland. (Breakfast, Lunch, Dinner)"
          },
          {
            day: "Day 6",
            details:
              "Ascend Mt. Titlis via cable cars including the Rotair. Enjoy snow landscapes, ice caves, and the Cliff Walk. Visit Lucerne, see the Lion Monument and Kapell Bridge, enjoy shopping time, and take a scenic Lake Lucerne cruise. Overnight in Central Switzerland. (Breakfast, Lunch, Dinner)"
          },
          {
            day: "Day 7",
            details:
              "Enjoy a scenic Golden Pass train journey from Zweisimmen to Gstaad. Explore Gstaad village and enjoy photo stops including DDLJ Bridge. Proceed to Bern for an orientation tour. Overnight in Central Switzerland. (Breakfast, Lunch, Dinner)"
          },
          {
            day: "Day 8",
            details:
              "After breakfast, transfer to the airport for return flight with beautiful memories of Europe. (Breakfast)"
          }
        ],
        paymentTerms: [
          "INR 1,00,000 per person non-refundable deposit at booking",
          "Balance payment due 28 days before departure",
          "ROE applicable at final payment"
        ],
        cancellationPolicy: [
          "45–30 days before departure: Deposit non-refundable",
          "29 days or less before departure: 100% tour cost non-refundable"
        ],
        importantNotes: [
          "Minimum 20 adult passengers required to operate the tour",
          "Standard hotel check-in 15:00 hrs and check-out 11:00 hrs",
          "No seat allocation in coach or flights (first-come basis)",
          "Luggage allowance as per airline policy",
          "Itinerary subject to change due to operational or weather conditions",
          "No refund for unutilized services"
        ]
      },
      {
        title: "Unbelievable Europe - 2026",
        subtitle: "A Signature Mantra Miles Journey",
        duration: "12 Days / 11 Nights",
        countriesCovered: [
          "France",
          "Belgium",
          "Netherlands",
          "Germany",
          "Switzerland",
          "Liechtenstein",
          "Austria",
          "Italy"
        ],
        overview:
          "A spectacular journey across 8 breathtaking European countries, blending culture, history, scenic landscapes, iconic landmarks, premium experiences, and curated comfort. Thoughtfully designed by Mantra Miles Tour, this itinerary balances immersive sightseeing, scenic train journeys, Indian meals, and seamless travel—creating a deeply enriching European experience.",
        inclusions: [
          "Return economy-class airfare ex-Bangalore",
          "Applicable airline taxes at time of booking",
          "Schengen Tourist Visa assistance",
          "Travel insurance for travellers below 60 years",
          "11 nights accommodation in premium hotels (twin sharing)",
          "Daily continental breakfast",
          "10 Indian lunches (Veg / Non-Veg / Jain)",
          "11 Indian dinners (Veg / Non-Veg / Jain)",
          "All sightseeing, guided tours, cruises, monuments, and attractions as per itinerary",
          "Golden Pass scenic train journey",
          "Private boat transfer in Venice",
          "All transfers by air-conditioned coach",
          "Professional Mantra Miles Tour Manager throughout the tour"
        ],
        exclusions: [
          "5% TCS (Tax Collected at Source)",
          "Personal expenses and tips",
          "Meals not mentioned under inclusions",
          "City taxes payable directly at hotels",
          "Optional tours and upgrades",
          "Expenses arising from force majeure circumstances",
          "Anything not mentioned under inclusions"
        ],
        price: "₹X,XX,XXX*",
        rating: null,
        itinerary: [
          {
            day: "Day 1",
            details:
              "Arrive in Paris and meet the Mantra Miles Tour Professional. Assistance with hotel check-in. In the evening, enjoy a romantic Seine River Cruise passing Notre Dame, Eiffel Tower, Louvre Museum, and Orsay Museum. Overnight in Paris. (Dinner)"
          },
          {
            day: "Day 2",
            details:
              "Guided city tour of Paris covering Place Vendôme, Opéra Garnier, Musée d’Orsay, Place de la Concorde, Champs-Élysées, Arc de Triomphe, Alexander Bridge, and Les Invalides. Visit the Eiffel Tower (2nd level) and Fragonard Perfumery. Overnight in Paris. (Breakfast, Lunch, Dinner)"
          },
          {
            day: "Day 3",
            details:
              "Travel to Brussels. Visit Grand Place, Manneken Pis, and enjoy a photo stop at the Atomium. Continue to the Netherlands for a visit to Keukenhof Gardens (seasonal) or Madurodam. Overnight in Netherlands. (Breakfast, Lunch, Dinner)"
          },
          {
            day: "Day 4",
            details:
              "Explore Amsterdam with a scenic canal cruise. Later proceed to Cologne and view the iconic Cologne Cathedral, a UNESCO World Heritage Site. Overnight in Germany. (Breakfast, Lunch, Dinner)"
          },
          {
            day: "Day 5",
            details:
              "Journey through the Black Forest and witness a traditional cuckoo-clock demonstration. Continue to Switzerland to see the magnificent Rhine Falls at Schaffhausen. Overnight in Central Switzerland. (Breakfast, Lunch, Dinner)"
          },
          {
            day: "Day 6",
            details:
              "Ascend Mt. Titlis via cable cars including the Rotair to 3,020 metres. Enjoy snow activities, Ice Grotto, and the Cliff Walk. Later tour Lucerne, visit the Lion Monument, Kapellbrücke, and enjoy a Lake Lucerne Cruise. Overnight in Central Switzerland. (Breakfast, Lunch, Dinner)"
          },
          {
            day: "Day 7",
            details:
              "Enjoy a scenic Golden Pass Train journey from Zweisimmen to Gstaad. Explore the alpine village and proceed to Bern for an orientation tour of the Swiss capital. Overnight in Central Switzerland. (Breakfast, Lunch, Dinner)"
          },
          {
            day: "Day 8",
            details:
              "Visit Vaduz, the capital of Liechtenstein. Continue to Wattens to explore the Swarovski Crystal World. Orientation tour of Innsbruck including the Golden Roof and Maria-Theresien-Strasse. Overnight in Austria / Switzerland region. (Breakfast, Lunch, Dinner)"
          },
          {
            day: "Day 9",
            details:
              "Arrive in Venice and travel by private boat to St. Mark’s Square. View St. Mark’s Basilica, Doge’s Palace, and Bridge of Sighs. Visit a Murano Glass Factory and enjoy a romantic Gondola Ride. Overnight in Padova / Bologna region. (Breakfast, Lunch, Dinner)"
          },
          {
            day: "Day 10",
            details:
              "Guided walking tour of Florence covering the Duomo, Piazza della Signoria, Palazzo Vecchio, and Ponte Vecchio. Continue to Pisa to view the Leaning Tower at the Square of Miracles. Overnight in Tuscany. (Breakfast, Lunch, Dinner)"
          },
          {
            day: "Day 11",
            details:
              "Guided city tour of Rome. Visit Vatican City including Vatican Museums, Sistine Chapel, and St. Peter’s Basilica. View the Colosseum, Trevi Fountain, Roman Forum, and Victor Emmanuel Monument. Overnight in Rome. (Breakfast, Lunch, Dinner)"
          },
          {
            day: "Day 12",
            details:
              "After breakfast, transfer to Rome Airport for return flight home, concluding the Unbelievable Europe journey with lasting memories. (Breakfast)"
          }
        ],
        paymentTerms: [
          "₹1,00,000 per person non-refundable deposit at booking",
          "Balance payment due 28 days prior to departure",
          "ROE calculated at final payment"
        ],
        cancellationPolicy: [
          "45–30 days prior to departure: Deposit non-refundable",
          "29 days or less prior to departure: 100% tour cost non-refundable"
        ],
        importantNotes: [
          "Minimum 20 adult participants required to operate the tour",
          "Tour cost is per person on twin-sharing basis",
          "Hotels, itinerary sequence, and sightseeing may change due to operational or weather conditions",
          "Passport, visa, immigration, and airline rules apply",
          "No refund for unutilized services"
        ]
      },
      {
      title: "Wonders of Europe",
      subtitle: "Best Seller | Ideal for First-Time Europe Travelers",
      duration: "13 Days / 12 Nights",
      destinations: [
        "Paris (3 Nights)",
        "Amsterdam (1 Night)",
        "Frankfurt (1 Night)",
        "Zurich (3 Nights)",
        "Innsbruck (1 Night)",
        "Padova (1 Night)",
        "Arezzo / Tuscany (2 Nights)"
      ],
      overview:
        "Discover Europe the smart and comfortable way with Mantra Miles Tour’s bestselling 13-day European group tour. Designed especially for first-time travelers, this medium-paced itinerary blends iconic landmarks, scenic landscapes, Indian meals, well-located 4-star hotels, and expert tour management—ensuring a seamless, enriching, and memorable European holiday.",
      inclusions: [
        "Return economy class airfare ex-Bangalore with applicable taxes",
        "Schengen Tourist Visa assistance",
        "Travel insurance for passengers below 60 years",
        "12 nights accommodation in well-located 4★ hotels",
        "12 continental breakfasts",
        "11 Indian lunches",
        "12 Indian dinners (Veg / Non-Veg / Jain – subject to availability)",
        "All sightseeing and transfers by deluxe air-conditioned coach",
        "Paris city tour with Eiffel Tower (2nd level) & Seine River Cruise",
        "Full-day Disneyland Paris (1 Park)",
        "Brussels city visit with Grand Place, Manneken Pis & Atomium photo stop",
        "Amsterdam canal cruise",
        "Keukenhof Gardens (seasonal) or Zaanse Schans",
        "Cologne Cathedral visit",
        "Black Forest drive with cuckoo clock experience",
        "Rhine Falls at Schaffhausen",
        "Mt. Titlis excursion with Rotair cable car",
        "Lucerne city orientation tour",
        "Optional Jungfraujoch – Top of Europe excursion",
        "Vaduz toy train ride (Liechtenstein)",
        "Swarovski Crystal Museum visit",
        "Innsbruck orientation tour",
        "Venice private boat transfer & Gondola ride",
        "Pisa Leaning Tower photo stop",
        "Florence guided city tour & Piazzale Michelangelo viewpoint",
        "Rome & Vatican City guided tour including St. Peter’s Basilica",
        "Professional Mantra Miles Tour Manager throughout the journey"
      ],
      exclusions: [
        "5% TCS",
        "Tips for drivers and guides",
        "Personal expenses (laundry, minibar, shopping, etc.)",
        "Meals not mentioned in the itinerary",
        "Hotel city taxes (payable directly)",
        "Optional tours and activities",
        "Early check-in / late check-out charges",
        "Expenses due to flight delays, weather, natural calamities, strikes, or force majeure",
        "Anything not mentioned under inclusions"
      ],
      hotels: [
        { city: "Paris", nights: 3, name: "Mercure Paris Roissy Charles de Gaulle or similar" },
        { city: "Amsterdam", nights: 1, name: "Park Plaza Amsterdam Airport or similar" },
        { city: "Frankfurt", nights: 1, name: "Elaya Hotel Frankfurt Oberursel or similar" },
        { city: "Zurich", nights: 3, name: "Radisson Hotel & Suites Zurich or similar" },
        { city: "Innsbruck", nights: 1, name: "Hotel Alpenkönig Tirol or similar" },
        { city: "Padova", nights: 1, name: "UNAWAY Hotel Occhiobello or similar" },
        { city: "Arezzo", nights: 2, name: "Hotel Forum or similar" }
      ],
      price: "₹X,XX,XXX*",
      pdf: "/itinerary/europewonders.pdf",
      rating: null,
      itinerary: [
        {
          day: "Day 1",
          details:
            "Arrive in Paris. Meet your Tour Manager and transfer to the hotel. Rest of the day at leisure. Overnight in Paris. (Dinner)"
        },
        {
          day: "Day 2",
          details:
            "Guided Paris city tour covering Place Vendôme, Opera Garnier, Musée d’Orsay, Place de la Concorde, Champs-Élysées, Arc de Triomphe, Alexander Bridge, and Les Invalides. Visit Eiffel Tower (2nd level) and enjoy a romantic Seine River Cruise. Overnight in Paris. (Breakfast, Lunch, Dinner)"
        },
        {
          day: "Day 3",
          details:
            "Full-day at Disneyland Paris. Choose between Disneyland Park or Walt Disney Studios Park. Overnight in Paris. (Breakfast, Packed Lunch, Dinner)"
        },
        {
          day: "Day 4",
          details:
            "Drive to Brussels. Visit Grand Place, Manneken Pis, and Atomium photo stop. Continue to Amsterdam. Evening at leisure. Overnight in Amsterdam. (Breakfast, Lunch, Dinner)"
        },
        {
          day: "Day 5",
          details:
            "Amsterdam canal cruise. Visit Keukenhof Gardens (till 12 May) or Zaanse Schans (from 13 May). Proceed to Cologne Cathedral and continue to Frankfurt. Overnight in Germany. (Breakfast, Lunch, Packed Dinner)"
        },
        {
          day: "Day 6",
          details:
            "Drive through the Black Forest with cuckoo clock demonstration. Visit Rhine Falls. Continue to Zurich. Overnight in Zurich. (Breakfast, Lunch, Dinner)"
        },
        {
          day: "Day 7",
          details:
            "Optional excursion to Jungfraujoch – Top of Europe (at extra cost). Overnight in Zurich / Central Switzerland. (Breakfast, Lunch, Dinner)"
        },
        {
          day: "Day 8",
          details:
            "Excursion to Mt. Titlis via Rotair cable car. Lucerne city orientation including Lion Monument and Chapel Bridge with free time for shopping. Overnight in Zurich. (Breakfast, Lunch, Dinner)"
        },
        {
          day: "Day 9",
          details:
            "Visit Vaduz (Liechtenstein) with toy train ride. Continue to Swarovski Crystal Museum. Orientation tour of Innsbruck including Golden Roof and Maria-Theresien-Strasse. Overnight in Innsbruck. (Breakfast, Lunch, Dinner)"
        },
        {
          day: "Day 10",
          details:
            "Proceed to Venice. Private boat transfer to St. Mark’s Square. Enjoy Gondola ride. Continue to Padova for overnight stay. (Breakfast, Lunch, Dinner)"
        },
        {
          day: "Day 11",
          details:
            "Visit Pisa Leaning Tower (photo stop). Guided Florence city tour and Piazzale Michelangelo viewpoint. Overnight in Arezzo / Tuscany. (Breakfast, Lunch, Dinner)"
        },
        {
          day: "Day 12",
          details:
            "Guided Rome & Vatican City tour including St. Peter’s Basilica. View Colosseum (external), Piazza Venezia & Trevi Fountain. Return to Arezzo. (Breakfast, Lunch, Dinner)"
        },
        {
          day: "Day 13",
          details:
            "After breakfast, transfer to airport for return journey. Tour ends with unforgettable memories. (Breakfast)"
        }
      ],
      paymentTerms: [
        "INR 1,00,000 per person non-refundable booking deposit",
        "Balance payment to be completed 28 days prior to departure",
        "Final tour cost subject to ROE at time of full payment"
      ],
      cancellationPolicy: [
        "45–30 days before departure: Deposit non-refundable",
        "29 days or less before departure: 100% tour cost non-refundable"
      ],
      importantNotes: [
        "Tour operates subject to minimum 20 adult passengers",
        "Itinerary order may change due to operational reasons",
        "Hotel check-in 15:00 hrs and check-out 11:00 hrs",
        "Luggage allowance as per airline policy",
        "No refund for unutilized services",
        "Optional tours must be pre-booked",
        "All terms subject to Mantra Miles Tour’s standard policies"
      ]
    }
    ]
  },
  asia: {
    name: "Vietnam",
    packages: [
      {
        title: "Unbeatable Vietnam Premium",
        subtitle: "A Curated Mantra Miles Journey",
        duration: "7 Nights / 8 Days",
        destinations: [
          "Hanoi (2N)",
          "Halong Bay (1N)",
          "Da Nang (2N)",
          "Ho Chi Minh City (2N)"
        ],
        overview:
          "An immersive premium journey through Vietnam covering vibrant cities, breathtaking natural landscapes, and layers of rich history. From the cultural soul of Hanoi and the limestone wonders of Halong Bay to the iconic Golden Bridge at Ba Na Hills and the historic Cu Chi Tunnels, this itinerary blends comfort, culture, and curated exploration—ensuring a refined and worry-free travel experience.",
        inclusions: [
          "7 nights accommodation in premium 4/5-star hotels",
          "Daily continental breakfasts, lunches, and Indian dinners as per itinerary",
          "Domestic flights: Hanoi–Da Nang & Da Nang–Ho Chi Minh City (20 kg baggage)",
          "Single-entry Vietnam E-Visa",
          "All sightseeing with professional English-speaking guides",
          "Tours and transfers on a shared basis",
          "Half-day Hanoi City Tour",
          "Full-day Ninh Binh (Tam Coc & Hoa Lu) tour",
          "Overnight Halong Bay cruise with onboard meals",
          "Full-day Ba Na Hills & Golden Bridge excursion",
          "Half-day Hoi An Ancient Town tour",
          "Full-day Ho Chi Minh City & Cu Chi Tunnels tour",
          "Free time for shopping"
        ],
        exclusions: [
          "Guide tips (USD 3 per person per day)",
          "Any increase in airfare, visa fees, taxes, or fuel surcharge",
          "Seat selection, airline upgrades, or hotel room upgrades",
          "Pre or post-tour accommodation",
          "Personal expenses (laundry, beverages, shopping, porterage)",
          "Costs due to illness, emergencies, or force majeure situations",
          "Optional activities not mentioned in the itinerary"
        ],
        meals: {
          breakfasts: "8 continental breakfasts",
          lunches: "6 lunches (Indian & local cuisine)",
          dinners: "6 Indian dinners + 1 local dinner on Halong Bay cruise",
          notes: "Veg & Jain options available; vegetarian meals on cruise on request"
        },
        hotels: [
          { city: "Hanoi", nights: 2, name: "Pullman Hanoi" },
          { city: "Halong Bay", nights: 1, name: "Premium Cruise" },
          { city: "Da Nang", nights: 2, name: "Grand Mercure Danang" },
          { city: "Ho Chi Minh City", nights: 2, name: "Sofitel Saigon Plaza" }
        ],
        price: "₹X,XX,XXX*",
        rating: null,
        pdf: "/itinerary/vietnam.pdf",
        itinerary: [
          {
            day: "Day 1",
            details:
              "Arrive at Noi Bai International Airport, Hanoi. Meet Mantra Miles local representative and transfer to hotel. Visit Hoan Kiem Lake, Ngoc Son Temple via Red Bridge, One Pillar Pagoda, view Ho Chi Minh Mausoleum (outside), and Dong Xuan Market. Dinner at an Indian restaurant. (Indian Lunch & Dinner)"
          },
          {
            day: "Day 2",
            details:
              "Drive to Ninh Binh. Enjoy a sampan boat ride at Tam Coc through limestone caves and rice fields. Visit Hoa Lu temples dedicated to Kings Dinh and Le. Return to Hanoi. (Breakfast, Local Lunch, Indian Dinner)"
          },
          {
            day: "Day 3",
            details:
              "Transfer to Halong Bay and board a traditional cruise. Sail through emerald waters, explore caves, and enjoy onboard activities. Overnight on cruise. (Breakfast, Lunch & Dinner on Cruise)"
          },
          {
            day: "Day 4",
            details:
              "After breakfast, disembark and transfer to Hanoi airport. Fly to Da Nang and check into hotel. Evening at leisure. (Brunch, Indian Dinner)"
          },
          {
            day: "Day 5",
            details:
              "Full-day excursion to Ba Na Hills via cable car. Visit Linh Ung Pagoda, the iconic Golden Bridge, and Fantasy Park. Optional visit to Debay Wine Cellar (direct payment). (Breakfast, Lunch, Dinner)"
          },
          {
            day: "Day 6",
            details:
              "Visit Coconut Forest with basket boat ride. Explore Hoi An Ancient Town including Phuc Kien Assembly Hall, Tan Ky Ancient House, Japanese Covered Bridge, and handicraft streets. Fly to Ho Chi Minh City. (Breakfast, Lunch, Indian Dinner)"
          },
          {
            day: "Day 7",
            details:
              "Ho Chi Minh City tour covering Notre Dame Cathedral (outside), Central Post Office, Thien Hau Pagoda, and Chinatown. Post lunch visit Cu Chi Tunnels. Return to city. (Breakfast, Local Lunch, Indian Dinner)"
          },
          {
            day: "Day 8",
            details:
              "Free time for shopping at Ben Thanh Market or nearby malls. Transfer to airport for departure. (Breakfast)"
          }
        ],
        paymentTerms: [
          "INR 80,000 per person non-refundable deposit at booking",
          "Balance payment due 28 days prior to departure",
          "Rate of exchange applicable at final payment"
        ],
        cancellationPolicy: [
          "45–30 days before departure: Deposit non-refundable",
          "29 days or less before departure: 100% tour cost non-refundable"
        ],
        importantNotes: [
          "Minimum 18 adults required to operate the tour",
          "Standard hotel check-in 15:00 hrs and check-out 11:00 hrs",
          "Baggage allowance as per airline policy",
          "Meals are fixed menus; special requests subject to availability",
          "Tours conducted on shared basis unless specified",
          "Itinerary may change due to operational or force majeure conditions",
          "No refund for unutilized services"
        ]
      }
    ]
  },
  dubai: {
    name: "Dubai",
    packages: [
      {
        "title": "Dubai & Abu Dhabi: The Grand Extravaganza",
        "duration": "6 Days / 5 Nights",
        "travelDate": "January 7th, 2026",
        "overview": "Experience the perfect blend of luxury, adventure, and culture with our exclusive Dubai Travel Package! This journey covers iconic attractions of Dubai and Abu Dhabi — from the thrilling desert safari and Ferrari World to breathtaking views at the Burj Khalifa and Dubai Frame. Also included are the vibrant Miracle Garden, Global Village, and the awe-inspiring Museum of the Future.",
        "inclusions": [
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
        "exclusions": [
          "Personal expenses such as tips, shopping, or laundry",
          "Meals not mentioned in inclusions",
          "Optional activities or upgrades",
          "Travel/medical insurance (beyond package coverage)",
          "Any increase in taxes or fuel surcharges post booking"
        ],
        "price": "₹96,000/- (Offer Price, all-inclusive)",
        "oldPrice": "₹1,15,000/-",
        "rating": 4.9,
        "pdf": "/itinerary/dubai.pdf",
        "itinerary": [
          {
            "day": "Day 1",
            "details": "Arrival at Dubai International Airport. Meet and greet by our representative. Private transfer to hotel and check-in. Evening free for leisure and exploring nearby attractions."
          },
          {
            "day": "Day 2",
            "details": "Enjoy a half-day Dubai City Tour visiting key attractions including the Dubai Frame and the Museum of the Future. In the evening, enjoy a serene Dhow Cruise along Dubai Creek with dinner and live entertainment."
          },
          {
            "day": "Day 3",
            "details": "Full-day excursion to Abu Dhabi including city tour and entry to Ferrari World. Return to Dubai in the evening and relax at your hotel."
          },
          {
            "day": "Day 4",
            "details": "Morning at leisure. In the afternoon, head out for an exciting Desert Safari with dune bashing, traditional entertainment, and BBQ dinner under the stars."
          },
          {
            "day": "Day 5",
            "details": "Visit Miracle Garden and Global Village for a colorful cultural experience. Later, visit Burj Khalifa 124th floor for panoramic views of the city skyline."
          },
          {
            "day": "Day 6",
            "details": "After breakfast, check-out from the hotel and enjoy some free time for shopping. Private transfer to Dubai Airport for your return flight."
          }
        ]
      },
      {
        title: "Dubai – Smart Saver Tour Package",
        subtitle: "Modern Glamour • Desert Adventures • Cultural Landmarks",
        duration: "05 Nights / 06 Days",
        destinations: [
          "Dubai",
          "Abu Dhabi"
        ],
        overview:
          "A perfectly balanced Dubai holiday combining modern attractions, cultural landmarks, desert adventures, and leisure time. From the iconic Burj Khalifa and Marina Dhow Cruise to a premium desert safari and the grandeur of Sheikh Zayed Grand Mosque and BAPS Hindu Mandir, this Smart Saver package offers exceptional value, comfort, and memorable experiences with Mantra Miles Tour.",
        pdf: "/itinerary/dubai1.pdf",
        inclusions: [
          "Return economy class airfare ex-Bangalore",
          "Applicable taxes as per current regulations",
          "Single-entry UAE Tourist Visa",
          "Travel insurance for passengers below 60 years",
          "Airport transfers (arrival & departure)",
          "5 nights accommodation in 4★ hotels",
          "Daily breakfast at hotel",
          "Half-day Dubai city tour",
          "Burj Khalifa – 124th Floor (non-peak hours)",
          "Dubai Mall & Fountain Show",
          "Marina Dhow Cruise with dinner",
          "Premium Desert Safari with BBQ dinner",
          "Full-day Abu Dhabi city tour",
          "BAPS Hindu Mandir & Sheikh Zayed Grand Mosque visits",
          "Ferrari World photo stop",
          "3 Indian dinners at hotel / restaurant",
          "Tour Director (TD) charges"
        ],
        exclusions: [
          "OTB (Ok to Board) charges",
          "Any services not mentioned in inclusions",
          "RBI-mandated foreign exchange (USD 10,000 under BTQ)",
          "Personal expenses (laundry, porterage, telephone calls, beverages, tips)",
          "Optional tours and activities",
          "Any deviation from the group itinerary"
        ],
        hotels: [
          "Versailles by Vieras",
          "Leela Hotel",
          "Grand Central",
          "Landmark Hotel",
          "Or similar 4★ category hotels"
        ],
        price: "₹X,XXX*",
        rating: null,
        itinerary: [
          {
            day: "Day 1",
            details:
              "Arrival in Dubai. Meet Mantra Miles Tour representative and transfer to hotel for check-in. In the evening, visit Dubai Mall and witness the world-famous Dubai Fountain Show. Later enjoy a Marina Dhow Cruise with buffet dinner while admiring Dubai Marina skyline. Overnight in Dubai. (Dinner)"
          },
          {
            day: "Day 2",
            details:
              "Half-day Dubai City Tour covering Jumeirah Mosque, Jumeirah Beach, Burj Al Arab photo stop, Atlantis, Sheikh Zayed Road, and Old Dubai with Gold & Spice Souks. Later visit Burj Khalifa – 124th Floor (non-peak hours). Return for Indian dinner. Overnight in Dubai. (Breakfast & Dinner)"
          },
          {
            day: "Day 3",
            details:
              "Leisure morning. In the afternoon, enjoy a Premium Desert Safari with dune bashing, camel ride, henna art, cultural performances, and BBQ dinner at a Bedouin-style camp. Overnight in Dubai. (Breakfast & Dinner)"
          },
          {
            day: "Day 4",
            details:
              "Full-day Abu Dhabi City Tour. Visit Sheikh Zayed Grand Mosque, BAPS Hindu Mandir, Corniche Drive, and enjoy a photo stop at Ferrari World. Return to Dubai for dinner. Overnight in Dubai. (Breakfast & Dinner)"
          },
          {
            day: "Day 5",
            details:
              "Free day at leisure. Optional tours and activities available at additional cost. Overnight in Dubai. (Breakfast & Dinner)"
          },
          {
            day: "Day 6",
            details:
              "After breakfast, check out from the hotel and transfer to the airport for departure with unforgettable memories of Dubai. (Breakfast)"
          }
        ],
        documentsRequired: [
          "Original Indian passport (valid minimum 7 months beyond travel date)",
          "PAN card copy",
          "One recent passport-size photograph with white background"
        ],
        paymentTerms: [
          "INR 50,000 per person non-refundable deposit at booking",
          "Balance amount payable 25 days prior to departure",
          "Final ROE applicable at time of full payment"
        ],
        cancellationPolicy: [
          "45–26 days before departure: Deposit amount non-refundable",
          "20 days or less before departure: 100% tour cost non-refundable"
        ],
        importantNotes: [
          "Minimum 20 adult passengers required to operate the group tour",
          "Airline seat allocation subject to airline policy",
          "Standard baggage allowance: 20 kg check-in & 7 kg cabin",
          "Hotel check-in 15:00 hrs and check-out 11:00 hrs",
          "No refunds for unutilized services",
          "Itinerary subject to change due to operational, weather, or road conditions",
          "Prices subject to change due to airfare, ROE, fuel surcharge, visa fees, or government taxes"
        ]
      }


    ]
  },
  thailand: {
    name: "Thailand",
    packages: [
      {
        title: "Singapore • Malaysia • Thailand",
        subtitle: "Three Countries • One Seamless Mantra Miles Journey",
        duration: "11 Days / 10 Nights",
        destinations: [
          "Singapore (3 Nights)",
          "Kuala Lumpur, Malaysia (3 Nights)",
          "Pattaya, Thailand (2 Nights)",
          "Bangkok, Thailand (2 Nights)"
        ],
        overview:
          "An exciting multi-country Asian journey covering the futuristic cityscape of Singapore, the cultural and modern highlights of Malaysia, and the vibrant beaches, temples, cruises, and wildlife experiences of Thailand. Thoughtfully curated by Mantra Miles Tour, this itinerary blends iconic attractions, Indian meals, guided sightseeing, and seamless transfers for a truly memorable international holiday.",
        inclusions: [
          "Economy class airfare ex-Bangalore with applicable taxes",
          "Singapore, Malaysia & Thailand visa charges with on-arrival assistance",
          "03 nights accommodation in Singapore with breakfast",
          "03 nights accommodation in Kuala Lumpur with breakfast",
          "02 nights accommodation in Pattaya with breakfast",
          "02 nights accommodation in Bangkok with breakfast",
          "Daily breakfast and Indian veg / non-veg lunches & dinners",
          "Guided city tour of Singapore",
          "Gardens by the Bay (Flower Dome)",
          "Marina Bay Sands SkyPark Observation Deck",
          "Sentosa Island tour including Cable Car, Madame Tussauds 5-in-1 Combo & Wings of Time",
          "Universal Studios Singapore (full day)",
          "Kuala Lumpur city tour",
          "KL Tower (Menara KL) Observation Deck",
          "Putrajaya city visit",
          "Batu Caves",
          "Genting Highlands excursion with Cable Car (weather permitting)",
          "Alcazar Show, Pattaya",
          "Coral Island excursion by speedboat",
          "Nong Nooch Village with tram ride",
          "Bangkok city & temple tour",
          "Chao Phraya River Dinner Cruise",
          "Safari World & Marine Park",
          "All sightseeing and entry fees as mentioned",
          "All transfers and sightseeing by air-conditioned luxury coach"
        ],
        exclusions: [
          "Any services not mentioned in the itinerary",
          "Personal expenses (porterage, laundry, mineral water, telephone calls, optional tours)",
          "Food and beverages not specified under inclusions",
          "Cost of deviation from the group tour",
          "Covid-19 PCR test charges (if applicable)"
        ],
        hotels: [
          { city: "Singapore", nights: 3, name: "V Hotel Lavender or similar" },
          { city: "Kuala Lumpur", nights: 3, name: "Hotel Verdant Hill 4★ or similar" },
          { city: "Pattaya", nights: 2, name: "Grand Bella Hotel / The Bayview Pattaya or similar" },
          { city: "Bangkok", nights: 2, name: "Vince Hotel Pratunam / Bangkok Palace Hotel or similar" }
        ],
        price: "₹X,XX,XXX*",
        pdf: "/itinerary/thailand.pdf",
        rating: null,
        itinerary: [
          {
            day: "Day 1",
            details:
              "Arrive in Singapore and proceed for a guided city tour covering Little India, Merlion Park, Singapore River view, Chinatown, Sri Mariamman Temple, and the Esplanade. Lunch at an Indian restaurant. In the evening, visit Gardens by the Bay (Flower Dome) and Marina Bay Sands SkyPark Observation Deck. Dinner and overnight in Singapore."
          },
          {
            day: "Day 2",
            details:
              "After breakfast, proceed to Sentosa Island. Enjoy Cable Car ride, Madame Tussauds Singapore, Wings of Time night show, and Sentosa Merlion. Dinner at an Indian restaurant. Overnight in Singapore."
          },
          {
            day: "Day 3",
            details:
              "After breakfast, enjoy a full day at Universal Studios Singapore with a lunch coupon. Dinner at an Indian restaurant. Overnight in Singapore."
          },
          {
            day: "Day 4",
            details:
              "Early breakfast or packed breakfast. Travel by coach to Kuala Lumpur. En-route visit Putrajaya, Malaysia’s Garden City. Check in to hotel by evening. Dinner and overnight in Kuala Lumpur."
          },
          {
            day: "Day 5",
            details:
              "Kuala Lumpur city tour including Menara KL Tower Observation Deck, National Mosque, King’s Palace, Sultan Abdul Samad Building, Merdeka Square, National Monument, Railway Station, and Cocoa House. Free time for shopping. Dinner and overnight in Kuala Lumpur."
          },
          {
            day: "Day 6",
            details:
              "Visit Batu Caves en-route to Genting Highlands. Enjoy cable car ride (subject to weather). Lunch included. Return to Kuala Lumpur by evening. Dinner and overnight stay."
          },
          {
            day: "Day 7",
            details:
              "Fly from Kuala Lumpur to Bangkok. Transfer to Pattaya. Evening visit to the famous Alcazar Show. Dinner and overnight in Pattaya."
          },
          {
            day: "Day 8",
            details:
              "Coral Island excursion by speedboat. Lunch at Indian restaurant. Visit Nong Nooch Village with cultural shows and tram ride. Dinner and overnight in Pattaya."
          },
          {
            day: "Day 9",
            details:
              "Transfer to Bangkok. City and temple tour covering Golden Buddha and Marble Buddha temples. Evening Chao Phraya River Dinner Cruise. Overnight in Bangkok."
          },
          {
            day: "Day 10",
            details:
              "Full-day visit to Safari World & Marine Park with animal shows. Lunch at Safari World restaurant. Dinner at Indian restaurant. Overnight in Bangkok."
          },
          {
            day: "Day 11",
            details:
              "After breakfast, transfer to Bangkok Airport for return flight to Bangalore."
          }
        ],
        paymentTerms: [
          "INR 70,000 per person non-refundable booking deposit",
          "Second installment payable within 15 days of booking",
          "Full balance payable 25 days prior to departure",
          "ROE calculated at final payment",
          "GST 5% applicable",
          "TCS 5% or 20% applicable as per government regulations"
        ],
        cancellationPolicy: [
          "45–26 days before departure: Deposit amount non-refundable",
          "20 days or less before departure: 100% tour cost non-refundable"
        ],
        importantNotes: [
          "Minor itinerary changes may occur due to weather or road conditions",
          "Seat selection subject to airline policies and requested at airport",
          "Internal flights are low-cost carriers; no meals onboard",
          "Baggage allowance: 20 kg check-in & 7 kg cabin",
          "No refund for unutilized services"
        ]
      },
      {
        "title": "Thailand: Phuket & Krabi Island Paradise",
        "duration": "8 Days / 7 Nights (Land Only)",
        "overview": "Embark on an unforgettable island-hopping adventure in Thailand. This package takes you from the beautiful limestone karsts and emerald waters of Krabi to the lively beaches and vibrant culture of Phuket. Explore the famous Phi Phi Islands, discover the hidden gems of Krabi’s four islands and rainforest, and enjoy a city tour of Phuket.",
        "inclusions": [
          "Phi Phi Island Tour by Shared Big Boat with Lunch - Shared Basis",
          "Krabi 4 Island Tour with Lunch by Shared Speed Boat - Shared Basis",
          "Krabi Rainforest Discovery Tour with Lunch (Jungle tour, Emerald pool, Hot Spring, Tiger cave) - Shared Basis",
          "Combo: Phuket City Tour with Tiger Park Phuket (Medium or Small) - Private Basis",
          "Private airport transfer from Phuket Airport to Krabi hotel",
          "Private inter-hotel transfer from Krabi to Phuket",
          "Private transfer from Phuket hotel to Phuket Airport"
        ],
        "exclusions": [
          "International and domestic flights",
          "Hotel accommodation",
          "Visa services",
          "Meals not specified in the itinerary",
          "National Park Fees (compulsory and payable locally): approx. 400 THB per person for Phi Phi Islands tour, 400 THB per person for Krabi 4-Island tour, and fees for the Krabi Rainforest tour",
          "Personal expenses, such as tips, shopping, and beverages"
        ],
        "price": "₹24,498*",
        "rating": null,
        "itinerary": [
          {
            "day": "Day 1",
            "details": "Arrival at Phuket International Airport (HKT). A private vehicle will transfer you to your hotel in Krabi. Check in and spend the rest of the day at your leisure."
          },
          {
            "day": "Day 2",
            "details": "Take a shared speedboat tour of the stunning Krabi 4 Islands. Visit iconic spots like Poda Island, Chicken Island, and Phra Nang Cave Beach. Lunch is included on the tour."
          },
          {
            "day": "Day 3",
            "details": "Go for a shared Krabi Rainforest Discovery Tour. Explore a natural hot spring, swim in the Emerald Pool, and visit the serene Tiger Cave Temple. Lunch is included on the tour."
          },
          {
            "day": "Day 4",
            "details": "After breakfast, a private vehicle will transfer you from your hotel in Krabi to your hotel in Phuket. Check in and relax for the rest of the day."
          },
          {
            "day": "Day 5",
            "details": "Embark on a shared boat tour to the famous Phi Phi Islands. Enjoy a big boat ride, snorkeling, and a delicious lunch on the island."
          },
          {
            "day": "Day 6",
            "details": "Discover the sights of Phuket on a combo tour. Enjoy a private Phuket City Tour followed by a visit to the Tiger Park (Medium or Small package)."
          },
          {
            "day": "Day 7",
            "details": "A day at leisure to explore Phuket on your own. You can relax on the beach, go shopping, or enjoy the vibrant nightlife."
          },
          {
            "day": "Day 8",
            "details": "After breakfast, a private vehicle will transfer you to Phuket Airport (HKT) for your onward journey."
          }
        ]
      }
    ]
  },
  kazakistan: {
    name: "Uzbekistan · Kyrgyzstan · Kazakhstan",
    packages: [
      {
      title: "Essence of Central Asia – 2025",
      subtitle: "Uzbekistan • Kyrgyzstan • Kazakhstan",
      duration: "8 Days / 7 Nights",
      destinations: [
        "Tashkent & Chimgan, Uzbekistan",
        "Bishkek & Ala Archa, Kyrgyzstan",
        "Almaty & Medeo, Kazakhstan"
      ],
      overview:
        "A culturally rich and scenic journey across the heart of Central Asia, covering the historic cities, alpine landscapes, vibrant bazaars, and modern capitals of Uzbekistan, Kyrgyzstan, and Kazakhstan. Thoughtfully curated by Mantra Miles Tour, this itinerary blends heritage, nature, and authentic local experiences with comfortable stays and seamless travel.",
      highlights: [
        "Khast-Imam Complex & Barak Khan Madrasah",
        "Chorsu Bazaar & artistic Tashkent Metro stations",
        "Chimgan Mountains & Charvak Lake with chairlift ride",
        "Ala Archa National Park alpine hike",
        "Ala-Too Square & Osh Bazaar in Bishkek",
        "Scenic Bishkek–Almaty road journey",
        "Medeo Ice Rink & Shymbulak Ski Resort cable car",
        "Panfilov Park, Zenkov Cathedral & Arbat Street walk"
      ],
      inclusions: [
        "7 nights accommodation in premium 4★ hotels",
        "Daily breakfast at hotels",
        "03 Indian dinners",
        "All transfers and sightseeing as per itinerary",
        "Chairlift ride at Chimgan Mountains",
        "Cable car ride at Shymbulak Ski Resort",
        "English-speaking local guides and city escorts",
        "Entrance fees to Khast-Imam Complex",
        "Air-conditioned transportation",
        "Applicable GST (5%)"
      ],
      exclusions: [
        "Any entrance fees not mentioned under inclusions",
        "Photo and video charges",
        "Personal expenses, tips, and gratuities",
        "Optional activities",
        "TCS 5%",
        "Flights between Tashkent and Bishkek unless specified"
      ],
      price: "₹X,XX,XXX*",
      pdf: "/itinerary/kazakistan.pdf",
      rating: null,
      itinerary: [
        {
          day: "Day 1",
          details:
            "Arrival at Tashkent International Airport. Meet Mantra Miles Tour representative and transfer to hotel. Check-in and relax. Evening at leisure to explore nearby cafes or enjoy local Uzbek tea. Overnight in Tashkent."
        },
        {
          day: "Day 2",
          details:
            "Full-day guided city tour of Tashkent covering Khast-Imam Complex, Barak Khan Madrasah, Chorsu Bazaar, artistic Tashkent Metro stations, Independence Square, Amir Timur Square, and photo stops at Hotel Uzbekistan and Romanov Palace (exterior). Dinner at Indian restaurant. Overnight in Tashkent."
        },
        {
          day: "Day 3",
          details:
            "Full-day excursion to Chimgan Mountains in the Western Tian Shan range. Enjoy a chairlift ride to scenic viewpoints and visit Charvak Lake with free time for relaxation or optional activities. Return to Tashkent. Overnight stay."
        },
        {
          day: "Day 4",
          details:
            "Check-out and transfer to Tashkent International Airport. Fly to Bishkek (flight not included unless specified). Arrival at Manas International Airport and transfer to hotel. Check-in and rest. Overnight in Bishkek."
        },
        {
          day: "Day 5",
          details:
            "Excursion to Ala Archa National Park with a guided hike through Ak-Sai Gorge, enjoying alpine meadows, glaciers, rivers, and wildlife. Return to Bishkek for city tour covering Ala-Too Square, Manas Statue, Osh Bazaar, Opera & Ballet Theatre, Oak Park, and State Historical Museum (subject to availability). Dinner at Indian restaurant. Overnight in Bishkek."
        },
        {
          day: "Day 6",
          details:
            "Check-out and scenic road transfer from Bishkek to Almaty (approx. 4–5 hours). Border crossing with self-handled luggage. Arrival in Almaty, hotel check-in, and evening at leisure. Overnight in Almaty."
        },
        {
          day: "Day 7",
          details:
            "Excursion to Medeo Ice Rink and Shymbulak Ski Resort via cable car. Return to Almaty for city sightseeing including Panfilov Park, Zenkov Cathedral, and Arbat Street walking tour. Dinner at Indian restaurant. Overnight in Almaty."
        },
        {
          day: "Day 8",
          details:
            "After breakfast, check-out and transfer to Almaty International Airport. Tour concludes with memorable Central Asia experiences curated by Mantra Miles Tour."
        }
      ],
      paymentTerms: [
        "30% non-refundable advance at the time of booking",
        "Balance 70% payable at least 20 days prior to departure"
      ],
      cancellationPolicy: [
        "45–21 days before departure: 50% cancellation charges",
        "20–10 days before departure: 75% cancellation charges",
        "Less than 10 days or no-show: 100% cancellation charges"
      ],
      importantNotes: [
        "Guaranteed group departure by Mantra Miles Tour",
        "Optional activities at personal discretion and cost",
        "Comfortable walking shoes and layered clothing recommended",
        "Modest attire required at religious sites",
        "Self-handling of luggage at border crossings",
        "Valid passport and applicable visas are mandatory"
      ]
    }
    ]
  },
  singapore: {
    name: "Singapore",
    packages: [
      {
        title: "Unbelievable Singapore & Malaysia",
        subtitle: "A Curated Mantra Miles Journey",
        duration: "6 Nights / 7 Days",
        destinations: [
          "Singapore (3 Nights)",
          "Kuala Lumpur, Malaysia (3 Nights)"
        ],
        overview:
          "An immersive Singapore–Malaysia journey blending iconic city highlights, world-class attractions, and rich cultural experiences. Thoughtfully curated for comfort, discovery, and memorable moments, this tour takes you from Singapore’s futuristic skyline and entertainment hubs to Malaysia’s cultural landmarks and scenic highlands.",
        inclusions: [
          "6 nights accommodation in comfortable hotels",
          "Daily breakfast at hotels",
          "Guided city tours and sightseeing as per itinerary",
          "Gardens by the Bay (Flower Dome) visit",
          "Marina Bay Sands SkyPark visit",
          "Sentosa Island excursion",
          "Universal Studios Singapore – full day access",
          "Singapore to Kuala Lumpur transfer by coach",
          "Putrajaya city visit",
          "Kuala Lumpur city tour",
          "KL Tower Observation Deck visit",
          "Genting Highlands excursion with cable car ride (weather permitting)",
          "Batu Caves visit",
          "All transfers and sightseeing on shared basis",
          "Professional tour coordination"
        ],
        exclusions: [
          "International airfare",
          "Visa charges",
          "Travel insurance",
          "Meals not mentioned under inclusions",
          "Personal expenses (shopping, tips, beverages, etc.)",
          "Optional activities not mentioned in itinerary",
          "Any cost arising due to force majeure situations"
        ],
        price: "₹X,XX,XXX*",
        pdf: "/itinerary/singapore.pdf",
        rating: null,
        itinerary: [
          {
            day: "Day 1",
            details:
              "Arrive in Singapore and begin a guided city tour covering Little India, Merlion Park, Singapore River, Chinatown, Sri Mariamman Temple, and the Esplanade. In the evening, visit Gardens by the Bay (Flower Dome) and Marina Bay Sands SkyPark for panoramic views. Overnight in Singapore."
          },
          {
            day: "Day 2",
            details:
              "Relaxed morning followed by an afternoon and evening at Sentosa Island, home to Singapore’s most popular attractions and entertainment zones. Overnight in Singapore."
          },
          {
            day: "Day 3",
            details:
              "Full-day visit to Universal Studios Singapore. Enjoy thrilling rides, live shows, and world-class entertainment suitable for all ages. Overnight in Singapore."
          },
          {
            day: "Day 4",
            details:
              "Travel by scenic coach from Singapore to Kuala Lumpur. En-route visit to Putrajaya, Malaysia’s modern administrative capital known for its architecture and landscaped boulevards. Overnight in Kuala Lumpur."
          },
          {
            day: "Day 5",
            details:
              "Kuala Lumpur city tour including KL Tower Observation Deck, National Mosque, King’s Palace, Merdeka Square, Sultan Abdul Samad Building, National Monument, Railway Station, and Cocoa House. Enjoy shopping time. Overnight in Kuala Lumpur."
          },
          {
            day: "Day 6",
            details:
              "Visit Batu Caves followed by a day excursion to Genting Highlands, including a scenic cable car ride (subject to weather conditions). Overnight in Kuala Lumpur."
          },
          {
            day: "Day 7",
            details:
              "Transfer to Kuala Lumpur International Airport for return flight to Bangalore, concluding your Mantra Miles Tour experience."
          }
        ],
        importantNotes: [
          "Itinerary order may change due to operational requirements",
          "Cable car rides subject to weather conditions",
          "Sightseeing conducted on shared basis",
          "No refund for unutilized services"
        ]
      }

    ]
  },
  bali: {
    name: "Bali",
    packages: [
      {
        "title": "Bali Adventure & Thrills",
        "duration": "5 Days / 4 Nights (Land Only)",
        "overview": "Experience the best of Bali's adventure and natural beauty with this action-packed land package. This private tour itinerary is designed for thrill-seekers, featuring exhilarating watersports, a stunning sunset cruise, and adrenaline-pumping activities like white-water rafting and ATV riding. You'll also get to see some of Bali's most famous natural landscapes, including the Tegalalang Rice Terraces and Tegenungan Falls.",
        "inclusions": [
          "Private airport transfers to and from Kuta/Legian",
          "Private Bounty Dinner Cruise with transfers",
          "Private Watersports tour (Banana Boat, Jet Ski, Parasailing) and Uluwatu Temple",
          "Private tour for Desa Swing, Tegalalang Rice Terraces, and Mount Batur view with lunch at Amora Cafe",
          "Private tour for Ayung River Rafting, Jambe Asri ATV, and Tegenungan Falls"
        ],
        "exclusions": [
          "International flights to and from Bali",
          "Hotel accommodation",
          "Visa services",
          "Meals unless specified",
          "Personal expenses such as tips, shopping, and laundry"
        ],
        "price": "₹18,299*",
        "pdf": "/itinerary/bali.pdf",
        "rating": null,
        "itinerary": [
          {
            "day": "Day 1",
            "details": "Arrive at Ngurah Rai International Airport (DPS). A private vehicle will transfer you to your hotel in the Kuta/Legian area. In the evening, a private transfer will take you for the Bounty Dinner Cruise."
          },
          {
            "day": "Day 2",
            "details": "Enjoy a private tour for a day of exhilarating watersports, including banana boat, jet ski, and parasailing. Afterwards, head to Uluwatu Temple to enjoy a stunning sunset."
          },
          {
            "day": "Day 3",
            "details": "Get ready for an action-packed day! A private vehicle will take you for Ayung River Rafting, followed by a tandem ATV ride. The tour also includes a visit to the beautiful Tegenungan Falls."
          },
          {
            "day": "Day 4",
            "details": "Your private tour will take you to the famous Desa Swing for an exhilarating ride. You'll also visit the Tegalalang Rice Terraces and enjoy lunch with a view of Mount Batur."
          },
          {
            "day": "Day 5",
            "details": "Enjoy some free time for last-minute shopping or exploration before your private transfer takes you to the airport for your departure."
          }
        ]
      }
    ]
  },

};

interface PackagesSectionProps {
  destination: string;
  onBack: () => void;
}

export const PackagesSection = ({ destination, onBack }: PackagesSectionProps) => {
  // const [openItinerary, setOpenItinerary] = useState<number | null>(null);
  const [openQuote, setOpenQuote] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState<{ title: string; destination: string; price: string } | null>(null);

  const destinationData = packageData[destination as keyof typeof packageData];

  const handleOpenQuote = (pkg: { title: string; price: string }) => {
    setSelectedPkg({ title: pkg.title, destination: destinationData.name, price: pkg.price });
    setOpenQuote(true);
  };

  const [pdfViewer, setPdfViewer] = useState<{ isOpen: boolean; pdfUrl: string; title: string }>({
    isOpen: false,
    pdfUrl: '',
    title: ''
  });

  // PDF viewer functions
  const openPdfViewer = async (pdfUrl: string, title: string) => {
    setPdfViewer({ isOpen: true, pdfUrl, title });
  };

  const closePdfViewer = () => {
    setPdfViewer({ isOpen: false, pdfUrl: '', title: '' });
  };

  if (!destinationData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Destination not found</h2>
          <Button onClick={onBack}>Back to Destinations</Button>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Button variant="outline" onClick={onBack} className="mb-6">
            ← Back to Destinations
          </Button>

          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {destinationData.name} Packages
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Discover our carefully curated travel packages for {destinationData.name}
          </p>
        </div>

        <div className="grid gap-8">
          {destinationData.packages.map((pkg, index) => (
            <Card key={index} className="overflow-hidden shadow-card hover:shadow-hero transition-all duration-300 border-0">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl text-foreground mb-2">{pkg.title}</CardTitle>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {pkg.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        {pkg.rating}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Starting from</div>
                    <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                    <div className="text-sm text-muted-foreground">per person</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left side */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Overview</h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{pkg.overview}</p>

                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        className="flex-1 text-green-500"
                        onClick={() => openPdfViewer(pkg.pdf, pkg.title)}
                      >
                        See Full Itinerary
                      </Button>
                      <QuoteDialog
                        destination={destinationData.name}
                      >
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={() => handleOpenQuote(pkg)}
                        >
                          Get Quote
                        </Button>
                      </QuoteDialog>

                    </div>
                  </div>

                  {/* Right side */}
                  <div className="space-y-4">
                    {/* Inclusions */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Inclusions
                      </h4>
                      <ul className="space-y-1">
                        {pkg.inclusions.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <Check className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Exclusions */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <X className="h-4 w-4 text-red-500" />
                        Exclusions
                      </h4>
                      <ul className="space-y-1">
                        {pkg.exclusions.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <X className="h-3 w-3 text-red-500 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Itinerary expand */}
                {/* {openItinerary === index && (
                  <div className="mt-6 border-t pt-6">
                    <h4 className="font-semibold text-foreground mb-4">Detailed Itinerary</h4>
                    <ul className="space-y-4">
                      {pkg.itinerary?.map((day, dIndex) => (
                        <li key={dIndex} className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">{day.day}: </span>
                          {day.details}
                        </li>
                      ))}
                    </ul>
                  </div>
                )} */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* PDF Viewer */}
      {pdfViewer.isOpen && (
        <PDFViewer
          isOpen={pdfViewer.isOpen}
          pdfUrl={pdfViewer.pdfUrl}
          title={pdfViewer.title}
          onClose={closePdfViewer}
        />
      )}

      {/* Quote Dialog */}
    </section>
  );
};
