import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, Globe, Award, Quote } from "lucide-react";
import ceoImage from "@/assets/ceo.png"; // Make sure this path is correct

export const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            About MantraMiles
          </h2>
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Mantra Miles was born from a simple but powerful realization: spiritual travel in India
              needed more care, compassion, and authenticity. When we saw how difficult it was for families—
              especially senior citizens—to find elder-friendly, safe, and meaningful tours, we decided to
              create something different. At Mantra Miles, every journey is more than just reaching a
              destination. We design experiences that combine devotion with comfort, tradition with
              thoughtful planning, and exploration with genuine care. From elder-friendly yatras and family
              tours to youth adventures and corporate retreats, our mission is to make travel inclusive,
              soulful, and memorable for every generation.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With fairness, transparency, and empathy at our core, Mantra Miles is more than a travel
              company, it is a community of seekers. We believe that every mile traveled with us is a step
              closer to India’s timeless heritage, sacred spaces, and the inner peace we all seek. 🌿✨
            </p>
          </div>
        </div>


        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <Card className="text-center border-0 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1 bg-card">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Compassionate Care</h3>
              <p className="text-sm text-muted-foreground">
                We place people at the heart of every journey. From elder-friendly planning to attentive on-ground support, we ensure that every traveler feels safe, respected, and cared for like family.🌿
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1 bg-card">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Authentic Experiences</h3>
              <p className="text-sm text-muted-foreground">
                Our tours are designed to connect you with the essence of India—its sacred sites, timeless traditions, and living culture—so that each journey is meaningful and not just another trip.✨
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1 bg-card">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Trust & Transparency</h3>
              <p className="text-sm text-muted-foreground">
                No hidden costs, no false promises. We believe in fair pricing, honest communication, and delivering exactly what we commit, building trust that lasts beyond the journey.🤝
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1 bg-card">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Community & Connection</h3>
              <p className="text-sm text-muted-foreground">
                Travel with us is never solitary. Whether in group chants, shared meals, or collective discoveries, we nurture bonds that transform strangers into companions and journeys into shared memories.🌍
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <Card className="text-center border-0 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1 bg-card">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Mindful Travel</h3>
              <p className="text-sm text-muted-foreground">
                We balance devotion with rest, exploration with reflection. Our itineraries are thoughtfully crafted to encourage presence, gratitude, and inner peace throughout the journey.🧘
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1 bg-card">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Excellence in Service</h3>
              <p className="text-sm text-muted-foreground">
                From planning routes to managing the smallest details, we strive for perfection in execution. Every touchpoint reflects professionalism, reliability, and a commitment to creating unforgettable experiences.🚀
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1 bg-card">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Cultural Preservation</h3>
              <p className="text-sm text-muted-foreground">
                We honor and protect the sacred traditions, heritage sites, and cultural practices of Bharat, ensuring that every journey is rooted in respect and leaves a positive impact.🌎
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1 bg-card">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Sustainable Journeys</h3>
              <p className="text-sm text-muted-foreground">
                Our commitment extends beyond people to the planet. We promote eco-friendly practices, conscious travel, and responsible tourism that safeguards nature for future generations.🌱
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CEO Section */}
{/* CEO Section */}
<div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 shadow-hero rounded-3xl overflow-hidden flex flex-col md:flex-row items-stretch">
  {/* Left Side - Text */}
  <div className="flex-1 p-10 md:p-14 flex flex-col justify-center">
    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-6 flex items-center gap-2">
      <Quote className="h-6 w-6 text-cyan-400" /> CEO’s Message
    </h3>
    <p className="text-lg text-slate-200 mb-6 leading-relaxed italic">
      “Every journey begins with a story, and MantraMiles is my story.”<br/>
      The idea for Mantra Miles was born not during my travels across the world, but at home. When my father wished to go on the Chardham Yatra, I struggled to find a company that was elder-friendly and genuinely caring. Soon after, my mother returned from Jagannath Puri with an injury because the agency was unprepared. Those experiences made me realize that for many, travel companies sell packages—but for families like mine, it’s about safety, trust, and memories.
      That was the turning point. I combined my 10+ years of travel experience with a personal mission: to create journeys that care for people like family.
    </p>
    <p className="text-slate-300 leading-relaxed">
      🌍 <span className="font-semibold text-cyan-400">How It’s Going</span><br />
      Today, Mantra Miles designs elder-friendly tours, spiritual yatras, family adventures, and cultural retreats that are inclusive, safe, and soulful. What sets us apart is our fairness, transparency, and a community-first approach.<br /><br />
      🔮 <span className="font-semibold text-cyan-400">The Road Ahead</span><br />
      Our vision is to become India’s most trusted spiritual and cultural travel companion. We aim to expand into new circuits—Jyotirlingas, Buddhist trails, southern temple tours, and festival journeys—while building long-term partnerships with spiritual and wellness centers.
    </p>

    {/* CEO Name */}
    <div className="mt-8">
      <h4 className="font-bold text-lg text-cyan-400">Pramukh Rao</h4>
      <p className="text-sm text-slate-400">Founder & CEO, Mantramiles</p>
    </div>
  </div>

  {/* Right Side - Image */}
  <div className="flex-1 relative min-h-[400px] md:min-h-[500px]">
    <img
      src={ceoImage}
      alt="CEO"
      className="w-full h-full object-cover"
    />
  </div>
</div>


      </div>
    </section>
  );
};
