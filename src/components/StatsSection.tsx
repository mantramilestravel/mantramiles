import { useState, useEffect, useRef } from "react";
import { Users, Calendar, MapPin, Award } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: 10,
    suffix: "+",
    label: "Years of Experience",
    description: "Serving travelers since 2009"
  },
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Happy Customers",
    description: "Satisfied travelers worldwide"
  },
  {
    icon: MapPin,
    value: 100,
    suffix: "+",
    label: "Destinations Covered",
    description: "Across India and abroad"
  },
  {
    icon: Award,
    value: 98,
    suffix: "%",
    label: "Customer Satisfaction",
    description: "Based on reviews and feedback"
  }
];

const CountingNumber = ({ 
  targetValue, 
  suffix = "", 
  duration = 3000 
}: { 
  targetValue: number; 
  suffix?: string; 
  duration?: number; 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = 0;
    
    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOut);
      
      setCount(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };
    
    requestAnimationFrame(updateCount);
  }, [isVisible, targetValue, duration]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-primary">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

export const StatsSection = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Journey in Numbers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Years of dedication, thousands of smiles, and countless memories created
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-lg bg-card hover:shadow-lg transition-all duration-300 hover-scale"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                
                <CountingNumber 
                  targetValue={stat.value} 
                  suffix={stat.suffix}
                />
                
                <h3 className="text-lg font-semibold text-foreground mt-2 mb-1">
                  {stat.label}
                </h3>
                
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};