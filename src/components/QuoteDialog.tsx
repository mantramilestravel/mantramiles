import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Send } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useMetaPixel } from "@/hooks/useMetaPixel";
import { UserFormData } from "@/types/metaPixel";

interface QuoteDialogProps {
  destination: string;
  children: React.ReactNode;
}

export const QuoteDialog = ({ destination, children }: QuoteDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<Date | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    travelers: '',
    budget: '',
    requirements: ''
  });
  const { toast } = useToast();
  const { trackPackageInterest, isEnabled } = useMetaPixel();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Track AddToCart event for quote request
    if (isEnabled) {
      const userData: UserFormData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone
      };
      
      const packageInfo = {
        id: destination.toLowerCase().replace(/\s+/g, '-'),
        name: destination,
        category: 'travel_package',
        price: getBudgetValue(formData.budget),
        currency: 'INR'
      };
      
      await trackPackageInterest(packageInfo, userData);
    }

    toast({
      title: "Quote Request Submitted!",
      description: `We'll send you a customized quote for ${destination} within 24 hours.`,
    });

    setIsOpen(false);
  };
  
  const getBudgetValue = (budgetRange: string): number => {
    switch (budgetRange) {
      case 'below-25k': return 20000;
      case '25k-50k': return 37500;
      case '50k-100k': return 75000;
      case '100k-200k': return 150000;
      case 'above-200k': return 250000;
      default: return 50000;
    }
  };
  
  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Get Quote for {destination}</DialogTitle>
          <DialogDescription>
            Fill in your details and we’ll send you a customized quote within 24 hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input 
                id="firstName" 
                placeholder="Enter first name" 
                value={formData.firstName}
                onChange={(e) => updateFormData('firstName', e.target.value)}
                required 
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input 
                id="lastName" 
                placeholder="Enter last name" 
                value={formData.lastName}
                onChange={(e) => updateFormData('lastName', e.target.value)}
                required 
              />
            </div>
          </div>

          {/* Contact */}
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Enter your email" 
              value={formData.email}
              onChange={(e) => updateFormData('email', e.target.value)}
              required 
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input 
              id="phone" 
              placeholder="Enter your phone number" 
              value={formData.phone}
              onChange={(e) => updateFormData('phone', e.target.value)}
              required 
            />
          </div>

          {/* Travelers + Budget */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Number of Travelers</Label>
              <Select onValueChange={(value) => updateFormData('travelers', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select travelers" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4].map((num) => (
                    <SelectItem key={num} value={String(num)}>
                      {num} {num === 1 ? "Person" : "People"}
                    </SelectItem>
                  ))}
                  <SelectItem value="5+">5+ People</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Budget Range</Label>
              <Select onValueChange={(value) => updateFormData('budget', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="below-25k">Below ₹25,000</SelectItem>
                  <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                  <SelectItem value="50k-100k">₹50,000 - ₹1,00,000</SelectItem>
                  <SelectItem value="100k-200k">₹1,00,000 - ₹2,00,000</SelectItem>
                  <SelectItem value="above-200k">Above ₹2,00,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Travel Date */}
          <div>
            <Label>Preferred Travel Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date ?? undefined} onSelect={setDate} />
              </PopoverContent>
            </Popover>
          </div>

          {/* Requirements */}
          <div>
            <Label htmlFor="requirements">Special Requirements</Label>
            <Textarea
              id="requirements"
              placeholder="Tell us about any specific requirements or preferences..."
              value={formData.requirements}
              onChange={(e) => updateFormData('requirements', e.target.value)}
              rows={3}
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              <Send className="h-4 w-4 mr-2" />
              Get Quote
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
