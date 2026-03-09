import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { DestinationTabs } from "@/components/DestinationTabs";
import { PackagesSection } from "@/components/PackagesSection";
import { TopPackagesSection } from "@/components/TopPackagesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { StatsSection } from "@/components/StatsSection";
import { EnquirySection } from "@/components/EnquirySection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import MainBlog, { BlogPostType } from "@/components/MainBlog";
import BlogPost from "@/components/BlogPost";
import PartnersAndCertificates from "@/components/PartnersAndCertificates";
import { useNavigate, useLocation } from "react-router-dom";


const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentView, setCurrentView] = useState<'home' | 'packages'>('home');
  const [selectedDestination, setSelectedDestination] = useState<string>('');
  const [selectedBlog, setSelectedBlog] = useState<BlogPostType | null>(null);

  // Handle hash-based scrolling (e.g., /#destinations)
  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    }
  }, [location.hash]);

  const handleDestinationClick = (destination: string, id?: string) => {
    // console.log(destination, id);
    if (id) {
      if (id === 'kailash-mansarovar') {
        navigate(`/kailash-mansarovar`);
      } else {
        navigate(`/package/${id}`);
      }
      return;
    }
    setSelectedDestination(destination);
    setCurrentView('packages');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedDestination('');
    setSelectedBlog(null);
  };

  const handleNavigate = (section: string) => {
    if (section === 'domestic' || section === 'international') {
      const element = document.getElementById('destinations');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (section === 'packages') {
      const element = document.getElementById('top-packages');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (section === 'about') {
      const element = document.getElementById('about');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleBlogClick = (post: BlogPostType) => {
    setSelectedBlog(post);
  };

  if (selectedBlog) {
    return (
      <BlogPost blogPost={selectedBlog} onBack={handleBackToHome} />
    );
  }

  if (currentView === 'packages') {
    return (
      <div className="min-h-screen bg-background">
        <Header
          onNavigate={handleNavigate}
          currentView={currentView}
          onBackToHome={handleBackToHome}
        />
        <PackagesSection
          destination={selectedDestination}
          onBack={handleBackToHome}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header
        onNavigate={handleNavigate}
        currentView={currentView}
        onBackToHome={handleBackToHome}
      />
      <HeroCarousel onDestinationClick={handleDestinationClick} />
      <div id="top-packages">
        <TopPackagesSection />
      </div>
      <PartnersAndCertificates />
      <div>
        <MainBlog onBlogClick={handleBlogClick} />
      </div>
      <div id="destinations">
        <DestinationTabs onDestinationClick={handleDestinationClick} />
      </div>
      <StatsSection />
      <TestimonialsSection />
      <div id="about">
        <AboutSection />
      </div>
      <EnquirySection />
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
