import React from 'react';
import { BlogPostType } from './MainBlog';

interface BlogPostProps {
  blogPost: BlogPostType;
  onBack: () => void;
}

/**
 * A simple function to parse basic Markdown to JSX.
 * It handles headings, lists, and paragraphs.
 */
const renderMarkdown = (markdown: string) => {
  const lines = markdown.split('\n');
  return lines.map((line, index) => {
    if (line.startsWith('### ')) {
      return <h3 key={index} className="text-xl md:text-2xl font-bold text-[#333333] mt-6 mb-2">{line.substring(4)}</h3>;
    }
    if (line.startsWith('- ')) {
      return <li key={index} className="text-gray-700">{line.substring(2)}</li>;
    }
    // Handle list item within an unordered list block
    if (line.trim() === '') {
      return null;
    }
    return <p key={index} className="text-gray-700 leading-relaxed my-4">{line}</p>;
  });
};

// Centralized content data for each blog post
const blogContent = {
  1: {
    title: "How to Prepare for a Spiritual Journey: Packing Tips & Health Advice",
    date: "2025-08-28",
    category: "Guides",
    content: `A spiritual journey is unlike any other trip — it’s about devotion, simplicity, and endurance. To make sure your yatra is smooth, here are some must-know packing and health tips.

### 🩺 Packing Checklist
Comfortable clothes (light cotton for summers, woollens for Himalayan yatras)

Walking shoes / slippers with good grip
Raincoat or poncho (monsoon trips)
Reusable water bottle
Basic medicines (headache, fever, stomach upset)
First-aid kit
Power bank & torch
ID proof & multiple photocopies
### 🎒 Health Advice
Start light exercises (walking, yoga, pranayama) at least 15 days before yatras like Kedarnath or Vaishno Devi.

Stay hydrated and avoid overeating during travel.
Carry dry fruits & energy bars for instant energy.
Consult your doctor if you have BP, heart, or respiratory issues before high-altitude yatras.
### 🧘 Mindset Matters
A pilgrimage is about patience and faith. Keep a positive mindset even if conditions are tough.
Disconnect from gadgets and immerse yourself in chanting the Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Rama Hare Rama Rama Rama Hare Hare Mahamantra, meditation, and seva.

### . 

✨ A well-prepared body allows the soul to focus on the spiritual experience. 🌿`
  },
  2: {
    title: "Weekend Getaways from Bangalore Under ₹10,000",
    date: "2025-08-15",
    category: "Insights",
    content: `Looking for a quick escape from the hustle of city life? Bangalore is surrounded by stunning
destinations that are perfect for a weekend getaway — and all under ₹10,000!

### Coorg (Kodagu)
Known as the Scotland of India, Coorg offers lush coffee estates, Abbey Falls, and Dubare Elephant Camp. Perfect for couples and families.

### Chikmagalur
Ideal for trekking and nature lovers. Mullayanagiri, the highest peak in Karnataka, is a must- visit.

### Hampi
A UNESCO World Heritage site, Hampi is filled with ruins of temples, palaces, and markets from the Vijayanagara Empire.

### Mysore
Rich in culture and heritage, Mysore Palace, Chamundi Hills, and Brindavan Gardens are top attractions.

### Wayanad (Kerala)
Just a few hours from Bangalore, Wayanad is famous for Edakkal Caves, waterfalls, and wildlife sanctuaries.

### Ooty (Tamil Nadu)
Take a toy train ride, visit tea estates, and enjoy the pleasant climate of this hill station.

### Kabini
A paradise for wildlife enthusiasts, Kabini offers safaris and boat rides to spot elephants, tigers, and exotic birds.

### Budget Tip:
Travel by sleeper class train/bus, stay at budget homestays, and enjoy local food to keep the cost within ₹10,000.

✨ Make your weekend stress-free with Mantra Miles!
We curate pocket-friendly packages for Bangaloreans — including Coorg, Chikmagalur, Wayanad, and Ooty.`
  },
  3: {
    title: "Top 7 Pilgrimage Destinations in India Every Devotee Must Visit",
    date: "2025-07-25",
    category: "Tips",
    content: `### Varanasi (Kashi), Uttar Pradesh
Known as the Spiritual Capital of India, Varanasi sits on the banks of the Ganga. Witness the mesmerizing Ganga Aarti at Dashashwamedh Ghat and visit the Kashi Vishwanath Temple dedicated to Lord Shiva.

### Tirupati Balaji, Andhra Pradesh
One of the richest and most visited temples in the world. The Sri Venkateswara Temple attracts millions of devotees each year who come to seek Lord Balaji’s blessings.

### Vaishno Devi, Jammu & Kashmir
Nestled in the Trikuta Mountains, Vaishno Devi is a symbol of Shakti. Pilgrims trek to the holy cave where the Goddess is believed to grant wishes.

### Kedarnath & Badrinath, Uttarakhand
Two of the Char Dham shrines. Kedarnath (dedicated to Lord Shiva) and Badrinath (dedicated to Lord Vishnu) are must-visits for every spiritual seeker.

### Pandharpur, Maharashtra
The sacred abode of Lord Vitthala on the banks of Chandrabhaga River, where millions of devotees gather for divine darshan and spiritual bliss.

### Rameshwaram, Tamil Nadu
One of the 12 Jyotirlingas, Rameshwaram is also connected with the Ramayana, where Lord Rama built a bridge to Lanka.

### Puri Jagannath, Odisha
Famous for the Jagannath Temple and the annual Rath Yatra, Puri is one of the Char Dhams of India.

✨ These destinations aren’t just about travel — they’re about faith, energy, and divine connection.
🌟 Plan your next pilgrimage with Mantra Miles! We design customized spiritual tours including Chardham Yatra, Vaishno Devi, Tirupati, and more with all arrangements taken care of.`
  }
};

/**
 * Renders a single, dynamic blog post page.
 * It uses the 'blogPost' prop to display content and includes a "Back to Home" button.
 *
 * @param {Object} props - The component props.
 * @param {BlogPostType} props.blogPost - The selected blog post object containing title, image, etc.
 * @param {function} props.onBack - The function to call to go back to the home page.
 */
const BlogPost: React.FC<BlogPostProps> = ({ blogPost, onBack }) => {
  const postData = blogContent[blogPost.id];
  if (!postData) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
        <p className="text-lg text-gray-600">Please select a valid blog post from the homepage.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header and Back Button */}
      <div className="bg-white shadow-sm p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button
            onClick={onBack}
            className="text-[#4C7C75] hover:text-[#275A4E] transition-colors duration-200 ease-in-out font-medium rounded-full py-2 px-4 border border-transparent hover:border-[#4C7C75]"
          >
            &larr; Back to Home
          </button>
          <h1 className="text-2xl md:text-3xl font-bold text-[#333333]">
            
          </h1>
        </div>
      </div>

      {/* Main Blog Post Content */}
      <main className="container mx-auto px-4 md:px-8 py-12 max-w-7xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Hero Image Section */}
          <div className="relative">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="p-6 md:p-12">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 mb-2">{postData.title}</h1>
            <p className="text-sm text-gray-500 mb-8">{postData.date} &middot; <span className="text-[#4C7C75] font-medium">{postData.category}</span></p>
            {renderMarkdown(postData.content)}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 text-center text-gray-600">
        &copy; 2025 Mantramiles. All rights reserved.
      </footer>
    </div>
  );
};

export default BlogPost;
