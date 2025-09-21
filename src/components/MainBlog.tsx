import React from 'react';
import blog1 from '@/assets/blog1.png';
import blog2 from '@/assets/blog2.png';
import blog3 from '@/assets/blog3.png';

export interface BlogPostType {
  id: number;
  title: string;
  description: string;
  image: string;
}

// Example data for blog posts.
const blogPosts: BlogPostType[] = [
  {
    id: 1,
    title: "How to Prepare for a Spiritual Journey: Packing Tips & Health Advice",
    description: "A spiritual journey is about more than just a destination; it's a transformative experience for your mind, body, and soul. Our guide provides essential advice on what to pack, from comfortable clothing and footwear to a small first-aid kit, ensuring you're well-equipped for any unexpected challenges. We also share health tips to help you stay strong and focused, allowing you to fully embrace the devotion and simplicity of your spiritual travels.",
    image: blog1
  },
  {
    id: 2,
    title: "Weekend Getaways from Bangalore Under ₹10,000",
    description: "Looking for a quick escape from the city without breaking the bank? We've curated a list of stunning weekend getaways from Bangalore that prove you don't need a huge budget to have an incredible adventure. From serene hill stations to tranquil beaches, these destinations offer the perfect relaxation, all while keeping your travel expenses under ₹10,000. Discover how to find affordable accommodation and explore hidden gems that make every rupee count.",
    image: blog2
  },
  {
    id: 3,
    title: "Top 7 Pilgrimage Destinations in India Every Devotee Must Visit",
    description: "India is home to some of the world's most sacred and historic pilgrimage sites, each offering a unique journey for the soul. This article explores seven of the most revered destinations, from the high-altitude temples of the Himalayas to the ancient ghats along the Ganges. We'll delve into the significance of each place, helping you to connect with the traditions, understand the history, and experience the profound spiritual energy that defines these sacred locations.",
    image: blog3
  }
];

interface MainBlogProps {
  onBlogClick: (post: BlogPostType) => void;
}

// Reusable component for a single blog post card
interface BlogPostCardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ title, description, image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <button className="bg-[#4C7C75] text-white px-4 py-2 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200 hover:bg-[#275A4E]">
          <span>Read More</span>
          <span className="ml-2 transform -translate-x-1 transition-transform duration-200 group-hover:translate-x-0">→</span>
        </button>
      </div>
    </div>
  );
};

// Main component for the blog section on your homepage
const MainBlog: React.FC<MainBlogProps> = ({ onBlogClick }) => {
  return (
    <section id="blog" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
          Travel Stories & Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard
              key={post.id}
              title={post.title}
              description={post.description}
              image={post.image}
              onClick={() => onBlogClick(post)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainBlog;
