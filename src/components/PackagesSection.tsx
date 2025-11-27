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
    name: "Switzerland",
    packages: [
      {
        "title": "Classic Swiss Alpine & Lake Adventure",
        "duration": "7 Days / 6 Nights",
        "overview": "This classic itinerary is perfect for first-time visitors to Switzerland. It focuses on the most iconic and accessible regions, combining the vibrant city life of Zurich and the charming lakeside town of Lucerne with the breathtaking mountain scenery of the Jungfrau region from Interlaken.",
        "inclusions": [
          "6 nights accommodation in 3-4 star hotels",
          "Daily breakfast",
          "Train travel between cities",
          "Excursion to Jungfraujoch & Mount Titlis",
          "Public transportation passes (e.g., Swiss Travel Pass)"
        ],
        "exclusions": [
          "International and domestic flights",
          "Schengen visa fees",
          "Meals not mentioned in the itinerary",
          "Optional activities, personal expenses, and tips",
          "Entrance fees to attractions unless specified"
        ],
        "price": "₹1,20,000*",
        "rating": null,
        "itinerary": [
          {
            "day": "Day 1",
            "details": "Arrive at Zurich Airport (ZRH). Take a train to your hotel. After checking in, explore the city at your leisure. Walk along Bahnhofstrasse, stroll through the Old Town (Altstadt), and enjoy the beautiful Lake Zurich. Overnight stay in Zurich."
          },
          {
            "day": "Day 2",
            "details": "After breakfast, embark on a half-day tour of Zurich, including a visit to the medieval town of Stein am Rhein and Europe's largest waterfall, the Rhine Falls. Return to Zurich in the evening. Overnight stay in Zurich."
          },
          {
            "day": "Day 3",
            "details": "After breakfast, take a scenic train journey to Lucerne. Check in to your hotel and then proceed for an excursion to Mount Titlis. Experience the world's first revolving cable car and the thrilling Cliff Walk. Return to Lucerne in the evening. Overnight stay in Lucerne."
          },
          {
            "day": "Day 4",
            "details": "Explore Lucerne at your leisure. Walk across the famous Chapel Bridge, visit the Lion Monument, or take a scenic cruise on Lake Lucerne. You can also opt for an excursion to Mount Pilatus for more panoramic views. Overnight stay in Lucerne."
          },
          {
            "day": "Day 5",
            "details": "After breakfast, take a scenic train to Interlaken. After checking in, head out for a full-day excursion to Jungfraujoch, the 'Top of Europe.' Ride the cogwheel train through the Eiger mountain to Europe's highest railway station. Explore the Ice Palace and enjoy the panoramic views. Overnight stay in Interlaken."
          },
          {
            "day": "Day 6",
            "details": "Spend the day exploring the beautiful Interlaken region. Visit the charming villages of Grindelwald or Lauterbrunnen, hike to one of the 72 waterfalls, or go paragliding for an exhilarating experience. You can also take a cruise on Lake Thun or Lake Brienz. Overnight stay in Interlaken."
          },
          {
            "day": "Day 7",
            "details": "After breakfast, take a train to Zurich Airport for your departure, carrying with you memories of your Swiss adventure."
          }
        ]
      },
      {
        "title": "Swiss Panorama & Glacier Express",
        "duration": "9 Days / 8 Nights",
        "overview": "This extended itinerary takes you on a grand tour of Switzerland, from the central mountains to the picturesque lakes and the iconic Matterhorn. It includes a journey on one of Switzerland's most famous panoramic trains, the Glacier Express.",
        "inclusions": [
          "8 nights accommodation in 3-4 star hotels",
          "Daily breakfast",
          "Train travel between cities",
          "Glacier Express journey (partially)",
          "Excursions as per the itinerary",
          "Swiss Travel Pass"
        ],
        "exclusions": [
          "International and domestic flights",
          "Schengen visa fees",
          "Meals not mentioned in the itinerary",
          "Optional activities, personal expenses, and tips",
          "Entrance fees to attractions unless specified"
        ],
        "price": "₹1,85,000*",
        "rating": null,
        "itinerary": [
          {
            "day": "Day 1",
            "details": "Arrive at Zurich or Geneva Airport and take a train to Lucerne. Check in and spend the afternoon exploring the city, including the iconic Chapel Bridge and the Old Town. Overnight stay in Lucerne."
          },
          {
            "day": "Day 2",
            "details": "Enjoy a full day in Lucerne with an excursion to Mount Pilatus, taking the famous 'Golden Round Trip' which includes a boat cruise, the world's steepest cogwheel railway, and a cable car ride. Overnight stay in Lucerne."
          },
          {
            "day": "Day 3",
            "details": "After breakfast, take the scenic train ride to Interlaken, a town nestled between two turquoise lakes. Take a funicular to Harder Kulm for a panoramic view of the town and the Eiger, Mönch, and Jungfrau mountains. Overnight stay in Interlaken."
          },
          {
            "day": "Day 4",
            "details": "A full day to explore the Jungfrau region. Visit the scenic village of Lauterbrunnen, with its 72 waterfalls, and take a cable car to Mürren or Schilthorn for breathtaking views. Overnight stay in Interlaken."
          },
          {
            "day": "Day 5",
            "details": "Take the train to Zermatt, a car-free alpine village at the foot of the mighty Matterhorn. Check in to your hotel and spend the rest of the day relaxing and enjoying the tranquil atmosphere. Overnight stay in Zermatt."
          },
          {
            "day": "Day 6",
            "details": "Take a cable car to the Matterhorn Glacier Paradise, the highest cable car station in Europe, for unparalleled views of the surrounding glaciers and peaks. You can also take a train to Gornergrat for a different perspective of the Matterhorn. Overnight stay in Zermatt."
          },
          {
            "day": "Day 7",
            "details": "This morning, board the world-famous Glacier Express for a spectacular journey through the Swiss Alps. The scenic route takes you from Zermatt to St. Moritz, but you will disembark earlier at Visp to change trains for your final destination, Geneva. Overnight stay in Geneva."
          },
          {
            "day": "Day 8",
            "details": "Enjoy a city tour of Geneva, visiting landmarks like the Jet d'Eau, the Flower Clock, and the United Nations headquarters. Take a stroll along Lake Geneva or visit the charming Old Town. Overnight stay in Geneva."
          },
          {
            "day": "Day 9",
            "details": "After breakfast, transfer to Geneva Airport (GVA) for your departure."
          }
        ]
      }
    ]
  },
  vietnam: {
    name: "Vietnam",
    packages: [
      {
        "title": "Discover Vietnam: North to South Land Package",
        "duration": "8 Days / 7 Nights (Land Only)",
        "overview": "Embark on an incredible journey through Vietnam, from the historic capital of Hanoi to the bustling southern metropolis of Ho Chi Minh City. This package covers iconic landmarks, including a cruise in the magnificent Halong Bay, a traditional boat ride in Hoi An's Coconut Forest, and an immersive tour of the Cu Chi Tunnels and Mekong Delta.",
        "inclusions": [
          "Hanoi Afternoon City Tour (Opera House, St. Joseph Cathedral, Temple of Literature, Ho Chi Minh Mausoleum, Tran Quoc Pagoda) - Shared Basis",
          "Deluxe Halong Bay cruise (6 hours) with lunch and kayaking - Shared Basis",
          "Coconut Forest, Hoi An boat ride, and flower lantern tour - Shared Basis",
          "Cu Chi Tunnels and Mekong Delta combo tour - Shared Basis",
          "Private transfers from Hanoi Airport to Hanoi Hotel and vice versa",
          "Private transfers from Ho Chi Minh Airport to Ho Chi Minh Hotel and vice versa",
          "Private transfers from Da Nang Airport to Da Nang Hotel and vice versa"
        ],
        "exclusions": [
          "International and domestic flights",
          "Hotel accommodation",
          "Visa services",
          "Meals unless specified (only lunch is included on the Halong Bay cruise)",
          "Entrance fees to monuments/attractions not part of the specified tours",
          "Personal expenses such as tips, shopping, and laundry"
        ],
        "price": "₹18,000*",
        "rating": null,
        "itinerary": [
          {
            "day": "Day 1",
            "details": "Arrival at Hanoi Airport and a private transfer to your hotel. The day is free for you to explore the city at your leisure."
          },
          {
            "day": "Day 2",
            "details": "Join an afternoon city tour on a shared basis, visiting key landmarks such as the Opera House, St. Joseph Cathedral, and the Ho Chi Minh Mausoleum complex."
          },
          {
            "day": "Day 3",
            "details": "Go for a full-day excursion to Halong Bay. Enjoy a scenic cruise with a delicious lunch and a kayaking session. Return to Hanoi in the evening."
          },
          {
            "day": "Day 4",
            "details": "Private transfer to Hanoi Airport for your flight to Da Nang. Upon arrival, a private vehicle will transfer you to your hotel in Hoi An. Enjoy the evening at your leisure."
          },
          {
            "day": "Day 5",
            "details": "Experience a unique tour of the Coconut Forest, including a boat ride and a flower lantern tour in the evening, all on a shared basis."
          },
          {
            "day": "Day 6",
            "details": "Private transfer to Da Nang Airport for your flight to Ho Chi Minh City. Upon arrival, a private vehicle will transfer you to your hotel. The evening is at your leisure."
          },
          {
            "day": "Day 7",
            "details": "Embark on a combo tour on a shared basis. Explore the historic Cu Chi Tunnels and then take a relaxing boat ride through the lush Mekong Delta."
          },
          {
            "day": "Day 8",
            "details": "After breakfast, a private vehicle will transfer you to Ho Chi Minh Airport for your onward journey."
          }
        ]
      },
      {
        "title": "The Grand Tour of Vietnam",
        "duration": "10 Days / 9 Nights (Land Only)",
        "overview": "Experience the best of Vietnam from north to south with this comprehensive tour. Explore the serene 'Halong Bay on land' in Ninh Binh, cruise the majestic Halong Bay, and discover the charm of Hoi An's ancient town. The journey concludes with a deep dive into the history and culture of Ho Chi Minh City, including the legendary Cu Chi Tunnels and the vibrant Mekong Delta.",
        "inclusions": [
          "Ninh Binh Day Trip from Hanoi with buffet lunch and limousine bus transfers - Shared Basis",
          "Hanoi Afternoon City Tour - Shared Basis",
          "Ba Na Hills - Golden Bridge tour - Shared Basis",
          "Coconut Forest, Hoi An boat ride, and flower lantern tour - Shared Basis",
          "Morning City Tour of Ho Chi Minh City - Shared Basis",
          "Cu Chi Tunnels with Mekong Delta combo tour - Shared Basis",
          "Private transfers from Hanoi Airport to Hanoi Hotel and vice versa",
          "Private transfers from Ho Chi Minh Airport to Ho Chi Minh Hotel and vice versa",
          "Private transfers from Da Nang Airport to Da Nang Hotel and vice versa",
          "Shuttle transfers from Hanoi to Halong and Halong to Hanoi"
        ],
        "exclusions": [
          "International and domestic flights",
          "Hotel accommodation",
          "Visa services",
          "Meals unless specified (only buffet lunch is included on the Ninh Binh tour)",
          "Entrance fees to monuments/attractions not part of the specified tours",
          "Personal expenses such as tips, shopping, and laundry"
        ],
        "price": "₹28,000*",
        "rating": null,
        "itinerary": [
          {
            "day": "Day 1",
            "details": "Arrival at Hanoi Airport and a private transfer to your hotel. The day is free for you to explore the city at your leisure."
          },
          {
            "day": "Day 2",
            "details": "Join an afternoon city tour on a shared basis, visiting key landmarks such as the Opera House, St. Joseph Cathedral, Ho Chi Minh Mausoleum, and the Temple of Literature."
          },
          {
            "day": "Day 3",
            "details": "Embark on a full-day trip to Ninh Binh, often called 'Halong Bay on land.' The tour includes visits to Hoa Lu, Trang An, and Hang Mua, with a buffet lunch and comfortable limousine bus transfers."
          },
          {
            "day": "Day 4",
            "details": "Take a shuttle transfer from Hanoi to Halong for a day trip. Enjoy a scenic cruise on the bay before taking a shuttle back to Hanoi in the evening."
          },
          {
            "day": "Day 5",
            "details": "Private transfer to Hanoi Airport for your flight to Da Nang. Upon arrival, a private vehicle will transfer you to your hotel in Hoi An. The evening is at your leisure."
          },
          {
            "day": "Day 6",
            "details": "Take a shared tour to the Ba Na Hills and marvel at the breathtaking Golden Bridge and the beautiful French Village."
          },
          {
            "day": "Day 7",
            "details": "Experience a unique tour of the Coconut Forest, including a boat ride. In the evening, enjoy a traditional flower lantern tour in the ancient town of Hoi An."
          },
          {
            "day": "Day 8",
            "details": "Private transfer to Da Nang Airport for your flight to Ho Chi Minh City. Upon arrival, a private vehicle will transfer you to your hotel. Later, enjoy a morning city tour of Ho Chi Minh City."
          },
          {
            "day": "Day 9",
            "details": "Embark on a combo tour on a shared basis. Explore the historic Cu Chi Tunnels and then take a relaxing boat ride through the lush Mekong Delta."
          },
          {
            "day": "Day 10",
            "details": "After breakfast, a private vehicle will transfer you to Ho Chi Minh Airport for your onward journey."
          }
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
    ]
  },
  thailand: {
    name: "Thailand",
    packages: [
      {
        "title": "Bangkok & Pattaya: City & Island Escape",
        "duration": "5 Days / 4 Nights (Land Only)",
        "overview": "Embark on a dynamic journey combining the vibrant city of Bangkok with the lively coastal town of Pattaya. This package offers a perfect mix of cultural exploration, thrilling shows, and island relaxation, complete with private transfers for a seamless travel experience.",
        "inclusions": [
          "Private transfer from Suvarnabhumi Airport (BKK) to Pattaya hotel",
          "Alcazar Show (Normal Seat) - Private Basis",
          "Coral Island Tour by Speed Boat with Lunch - Shared Basis",
          "Private transfer from Pattaya hotel to Bangkok hotel",
          "Bangkok City Tour with Gems Gallery (Golden Buddha and Marble Temple) - Shared Basis",
          "Private transfer from Bangkok hotel to Suvarnabhumi Airport (BKK)"
        ],
        "exclusions": [
          "International and domestic flights",
          "Hotel accommodation",
          "Visa services",
          "Meals unless specified (only lunch is included on the Coral Island tour)",
          "Entrance fees to monuments/attractions not part of the specified tours",
          "Personal expenses such as tips, shopping, and laundry"
        ],
        "price": "₹8,568*",
        "rating": null,
        "itinerary": [
          {
            "day": "Day 1",
            "details": "Arrival at Suvarnabhumi Bangkok Airport (BKK). A private vehicle will transfer you to your hotel in Pattaya. Check in and spend the evening at your leisure."
          },
          {
            "day": "Day 2",
            "details": "Enjoy a Coral Island tour by speed boat. The tour includes a delicious lunch on the island. In the evening, get ready for a mesmerizing Alcazar Show with private transfers."
          },
          {
            "day": "Day 3",
            "details": "After breakfast, a private vehicle will transfer you from your Pattaya hotel to your Bangkok hotel. The rest of the day is free for you to explore Bangkok."
          },
          {
            "day": "Day 4",
            "details": "Go for a shared Bangkok City Tour. Visit the famous Golden Buddha and the Marble Temple, with a stop at a Gems Gallery."
          },
          {
            "day": "Day 5",
            "details": "After breakfast, a private vehicle will transfer you to Suvarnabhumi Bangkok Airport (BKK) for your onward journey."
          }
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
  australia: {
    name: "Australia",
    packages: [
      {
        "title": "Sydney & Melbourne: Iconic Australian Journey",
        "duration": "6 Days / 5 Nights (Land Only)",
        "overview": "Discover the best of Australia's two most iconic cities on this 6-day land package. Explore Sydney's natural wonders and urban landmarks, including the Blue Mountains and the famous Opera House. Your journey continues in Melbourne, where you'll see the city's highlights and witness the adorable Penguin Parade at Phillip Island.",
        "inclusions": [
          "Private airport transfers in Sydney and Melbourne",
          "Sydney Opera House Walking Tour",
          "Sydney attraction pass for any 3 of the following: SEA LIFE Aquarium, Sydney Tower, Wild Life Zoo, or Madame Tussauds - Shared Basis",
          "Blue Mountain tour with Scenic World and Sydney Zoo - Shared Basis",
          "Melbourne City Tour - Shared Basis",
          "Phillip Island Tour with Penguin Parade - Shared Basis"
        ],
        "exclusions": [
          "International flights to/from Australia",
          "Domestic flight from Sydney to Melbourne",
          "Hotel accommodation",
          "Visa services",
          "Meals unless specified",
          "Entrance fees to attractions not included in the passes",
          "Personal expenses"
        ],
        "price": "₹45,999*",
        "rating": null,
        "itinerary": [
          {
            "day": "Day 1",
            "details": "Arrive at Sydney Airport (SYD). A private vehicle will transfer you to your hotel. The rest of the day is at your leisure to explore the city."
          },
          {
            "day": "Day 2",
            "details": "Embark on a full-day tour to the Blue Mountains. Visit Scenic World to experience the Scenic Skyway, Railway, and Cableway, and then visit Sydney Zoo."
          },
          {
            "day": "Day 3",
            "details": "Take a walking tour of the iconic Sydney Opera House. Afterwards, use your attraction pass to visit any three of the included attractions (SEA LIFE Aquarium, Sydney Tower, Wild Life Zoo, or Madame Tussauds)."
          },
          {
            "day": "Day 4",
            "details": "After breakfast, a private vehicle will transfer you to Sydney Airport for your domestic flight to Melbourne. Upon arrival in Melbourne, you will be transferred to your hotel."
          },
          {
            "day": "Day 5",
            "details": "Begin the day with a Melbourne City Tour to see the city's key landmarks. In the afternoon, head out for a tour to Phillip Island to witness the charming Penguin Parade at dusk."
          },
          {
            "day": "Day 6",
            "details": "After breakfast, a private vehicle will transfer you to Melbourne Airport (MEL) for your onward journey."
          }
        ]
      }
    ]
  },
  singapore: {
    name: "Singapore",
    packages: [
      {
        "title": "Singapore: City, Wildlife & Island Adventure",
        "duration": "6 Days / 5 Nights (Land Only)",
        "overview": "Embark on an exciting journey through Singapore, a vibrant city-state known for its urban marvels and lush green spaces. This comprehensive package includes a city tour, thrilling experiences at Universal Studios, an enchanting night safari, and a fun-filled day at Sentosa Island, all with hassle-free shared and private transfers.",
        "inclusions": [
          "Half-day Singapore City Tour - Shared Basis",
          "Universal Studios Singapore - Shared Basis",
          "Sentosa Admission with one-way Cable Car, Skyhelix, and Wings of Time - Shared Basis",
          "Singapore Zoo and Night Safari Combo - Shared Basis",
          "Private airport transfers from Singapore Changi Airport (SIN) to hotel and vice versa"
        ],
        "exclusions": [
          "International flights to/from Singapore",
          "Hotel accommodation",
          "Visa services",
          "Meals unless specified",
          "Personal expenses such as shopping, laundry, and tips"
        ],
        "price": "₹19,978*",
        "rating": null,
        "itinerary": [
          {
            "day": "Day 1",
            "details": "Arrive at Singapore Changi Airport (SIN). A private vehicle will transfer you to your hotel. Check in and spend the rest of the day at your leisure."
          },
          {
            "day": "Day 2",
            "details": "Begin the day with a half-day Singapore City Tour on a shared basis. See the key landmarks and learn about the city's rich history and culture. The rest of the day is free for you to explore on your own."
          },
          {
            "day": "Day 3",
            "details": "Enjoy a full day of excitement at Universal Studios Singapore. Experience thrilling rides and shows based on blockbuster movies and television series."
          },
          {
            "day": "Day 4",
            "details": "Head to the Mandai Wildlife Reserve for a day dedicated to wildlife. Start with the Singapore Zoo and later, experience the world's first nocturnal zoo on a Night Safari tram ride."
          },
          {
            "day": "Day 5",
            "details": "Explore the famous Sentosa Island. The package includes admission to the island, a one-way cable car ride, a thrilling spin on the Skyhelix, and the spectacular Wings of Time show."
          },
          {
            "day": "Day 6",
            "details": "After breakfast, a private vehicle will transfer you to Singapore Changi Airport (SIN) for your departure."
          }
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
