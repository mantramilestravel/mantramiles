import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, Globe, Award, Quote, LeafIcon, Compass, Landmark, Recycle, Linkedin, Twitter, Instagram } from "lucide-react";
import ceoImage from "@/assets/ceo.png";

export const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-emerald-50 via-white to-emerald-50 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            About <span className="text-emerald-600">MantraMiles</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At <span className="font-semibold text-emerald-600">Mantra Miles</span>, every journey is more than
            a trip — it’s a soulful experience. We combine devotion with comfort,
            tradition with thoughtful planning, and exploration with genuine care.
          </p>
        </div>

        {/* Story */}
        <div className="max-w-4xl mx-auto mb-20 space-y-6 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Born from a realization that spiritual travel in India needed more care and authenticity, Mantra Miles was created to make sacred journeys elder-friendly, safe, and meaningful. Our mission is to provide inclusive travel for all generations, from yatras for seniors to family retreats and youth adventures.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            {
              icon: <Globe className="h-6 w-6 text-emerald-600" />,
              title: "Compassionate Care",
              text: "We place people at the heart of every journey. From elder-friendly planning to attentive on-ground support, we ensure that every traveler feels safe, respected, and cared for like family.🌿",
            },
            {
              icon: <Users className="h-6 w-6 text-emerald-600" />,
              title: "Authentic Experiences",
              text: "Our tours are designed to connect you with the essence of India—its sacred sites, timeless traditions, and living culture—so that each journey is meaningful and not just another trip.✨",
            },
            {
              icon: <Award className="h-6 w-6 text-emerald-600" />,
              title: "Trust & Transparency",
              text: "No hidden costs, no false promises. We believe in fair pricing, honest communication, and delivering exactly what we commit, building trust that lasts beyond the journey.🤝",
            },
            {
              icon: <Star className="h-6 w-6 text-emerald-600" />,
              title: "Community & Connection",
              text: "Travel with us is never solitary. Whether in group chants, shared meals, or collective discoveries, we nurture bonds that transform strangers into companions and journeys into shared memories.🌍",
            },
            {
              icon: <LeafIcon className="h-6 w-6 text-emerald-600" />,
              title: "Mindful Travel",
              text: "We balance devotion with rest, exploration with reflection. Our itineraries are thoughtfully crafted to encourage presence, gratitude, and inner peace throughout the journey.🧘",
            },
            {
              icon: <Compass className="h-6 w-6 text-emerald-600" />,
              title: "Excellence in Service",
              text: "From planning routes to managing the smallest details, we strive for perfection in execution. Every touchpoint reflects professionalism, reliability, and a commitment to creating unforgettable experiences.🚀",
            },
            {
              icon: <Landmark className="h-6 w-6 text-emerald-600" />,
              title: "Cultural Preservation",
              text: "We honor and protect the sacred traditions, heritage sites, and cultural practices of Bharat, ensuring that every journey is rooted in respect and leaves a positive impact.🌎",
            },
            {
              icon: <Recycle className="h-6 w-6 text-emerald-600" />,
              title: "Sustainable Journeys",
              text: "Our commitment extends beyond people to the planet. We promote eco-friendly practices, conscious travel, and responsible tourism that safeguards nature for future generations.🌱",
            }
          ].map((value, idx) => (
            <Card
              key={idx}
              className="text-center border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CEO Section */}
        <div className="bg-gradient-to-r from-emerald-700 via-emerald-800 to-emerald-700 text-white shadow-xl rounded-3xl overflow-hidden flex flex-col md:flex-row items-stretch">
          {/* Text */}
          <div className="flex-1 p-10 md:p-14 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-6 flex items-center gap-2">
              <Quote className="h-6 w-6 text-emerald-300" /> CEO’s Message
            </h3>
            <p className="text-lg text-emerald-50 mb-6 leading-relaxed italic">
              “Every journey begins with a story, and Mantra Miles is my story.”
            </p>
            <p className="text-base text-emerald-100 leading-relaxed mb-6">
              For over a decade, travel was my passion and—guiding others and exploring the world myself. 
              Yet the idea for Mantra Miles came from home. While working at Dell, my father wished to go on the Chardham Yatra. 
              Finding an elder-friendly, affordable, and caring travel company was nearly impossible. Soon after, 
              I sent my mother on a Jagannath Puri Yatra with an agency I trusted. 
              Poor planning and lack of care left her with a fractured hand amidst the chaos. 
              These experiences opened my eyes—most travel companies focused on selling packages, not ensuring safety, trust, or meaningful memories. Families like mine deserved better. 
              That’s when I decided to merge my 10+ years of travel expertise with a personal mission: to create a company that treats every traveler like family. 
              Mantra Miles was born to ensure journeys are not just trips, but safe, caring, and memorable experiences
            </p>
            <p className="text-base text-emerald-100 leading-relaxed">
              Today, Mantra Miles designs {" "}
              <span className="font-semibold text-emerald-300">
                elder-friendly tours, spiritual yatras, family adventures, and cultural
              </span> — retreats that are inclusive, safe, and soulful. What sets us apart is our fairness, transparency, and a community-first approach.
            </p>
            <br />
            
            <p className="text-base text-emerald-100 leading-relaxed">
              Our vision is to become India’s most trusted spiritual and cultural travel companion. We aim to expand into{" "}
              <span className="font-semibold text-emerald-300">
                Jyotirlinga circuits, Buddhist trails, southern temple tours, and
                festival journeys
              </span>  while building long-term partnerships with spiritual and
              wellness centers. 🌍
            </p>
            <div className="mt-8">
              <h4 className="font-bold text-lg text-emerald-300">Pramukh Rao</h4>
              <p className="text-sm text-emerald-200">Founder & CEO, MantraMiles</p>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 relative min-h-[400px] md:min-h-[500px]">
            <img
              src={ceoImage}
              alt="CEO"
              className="w-full h-full object-cover md:rounded-l-none"
            />
          </div>
        </div>

        {/* Meet the Team Section */}
        <div className="text-center my-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Meet Our <span className="text-emerald-600">Team</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The passionate individuals behind our soulful journeys.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            {
              image: ceoImage,
              name: "Pramukh Rao",
              designation: "Founder & CEO",
              description: "The visionary leader who started it all.",
              socials: [
                { icon: <Linkedin className="h-5 w-5" />, url: "#" },
                { icon: <Twitter className="h-5 w-5" />, url: "#" },
                { icon: <Instagram className="h-5 w-5" />, url: "#" },
              ],
            },
            {
              image: "/path/to/team-member-2.png",
              name: "Jane Doe",
              designation: "Head of Operations",
              description: "Ensuring every trip is seamless and memorable.",
              socials: [
                { icon: <Linkedin className="h-5 w-5" />, url: "#" },
                { icon: <Twitter className="h-5 w-5" />, url: "#" },
              ],
            },
            {
              image: "/path/to/team-member-3.png",
              name: "John Smith",
              designation: "Lead Tour Designer",
              description: "Crafting authentic and transformative experiences.",
              socials: [
                { icon: <Linkedin className="h-5 w-5" />, url: "#" },
                { icon: <Instagram className="h-5 w-5" />, url: "#" },
              ],
            },
            {
              image: "/path/to/team-member-4.png",
              name: "Emily Jones",
              designation: "Community Manager",
              description: "Nurturing our community of fellow travelers.",
              socials: [
                { icon: <Twitter className="h-5 w-5" />, url: "#" },
              ],
            },
          ].map((member, idx) => (
            <Card
              key={idx}
              className="text-center border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <CardContent className="p-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-emerald-600 font-medium mb-2">{member.designation}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
                <div className="flex justify-center gap-4 mt-4">
                  {member.socials.map((social, index) => (
                    <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-600">
                      {social.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
