import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, CreditCard, Wallet, Building2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMetaPixel } from "@/hooks/useMetaPixel";
import { UserFormData, ConversionContext } from "@/types/metaPixel";

export default function PaymentGateway() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { 
    trackInitiateCheckout, 
    trackAddPaymentInfo, 
    trackPurchase,
    isEnabled 
  } = useMetaPixel();
  
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [customerData, setCustomerData] = useState<UserFormData>({});
  const [hasTrackedCheckout, setHasTrackedCheckout] = useState(false);

  const packagePrice = "₹45,999"; // This would come from package data
  const packageInfo = {
    id: id || 'golden-triangle-deluxe',
    name: 'Golden Triangle Deluxe',
    category: 'cultural_tour',
    price: 91598,
    currency: 'INR',
    duration: '6 Days / 5 Nights'
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    
    try {
      // Track Purchase event
      if (isEnabled) {
        const conversionContext: ConversionContext = {
          packageId: packageInfo.id,
          packageName: packageInfo.name,
          packageCategory: packageInfo.category,
          packagePrice: packageInfo.price,
          currency: packageInfo.currency
        };
        
        await trackPurchase(
          {
            currency: packageInfo.currency,
            value: packageInfo.price
          },
          customerData,
          conversionContext
        );
      }
      
      // Simulate payment processing
      setTimeout(() => {
        setIsProcessing(false);
        toast({
          title: "Payment Successful!",
          description: "Your booking has been confirmed. You will receive a confirmation email shortly.",
        });
        navigate('/');
      }, 3000);
    } catch (error) {
      console.error('Payment processing error:', error);
      setIsProcessing(false);
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleBackToHome = () => {
    navigate('/');
  };
  
  // Track InitiateCheckout when component mounts
  useEffect(() => {
    if (isEnabled && !hasTrackedCheckout) {
      const conversionContext: ConversionContext = {
        packageId: packageInfo.id,
        packageName: packageInfo.name,
        packageCategory: packageInfo.category,
        packagePrice: packageInfo.price,
        currency: packageInfo.currency
      };
      
      trackInitiateCheckout(
        {
          currency: packageInfo.currency,
          value: packageInfo.price,
          num_items: 1
        },
        customerData,
        conversionContext
      );
      
      setHasTrackedCheckout(true);
    }
  }, [isEnabled, hasTrackedCheckout, trackInitiateCheckout, packageInfo, customerData]);
  
  // Track AddPaymentInfo when payment method changes
  const handlePaymentMethodChange = async (method: string) => {
    setPaymentMethod(method);
    
    if (isEnabled) {
      const conversionContext: ConversionContext = {
        packageId: packageInfo.id,
        packageName: packageInfo.name,
        packageCategory: packageInfo.category,
        packagePrice: packageInfo.price,
        currency: packageInfo.currency
      };
      
      await trackAddPaymentInfo(
        {
          currency: packageInfo.currency,
          value: packageInfo.price
        },
        customerData,
        conversionContext
      );
    }
  };
  
  // Update customer data when form fields change
  const updateCustomerData = (field: keyof UserFormData, value: string) => {
    setCustomerData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={() => {}} currentView="packages" onBackToHome={handleBackToHome} />
      
      <div className="container mx-auto px-6 py-20">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Package Details
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Secure Payment Gateway
                </CardTitle>
                <CardDescription>
                  Your payment information is encrypted and secure
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Customer Information */}
            <Card>
              <CardHeader>
                <CardTitle>Customer Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Enter your first name" 
                      onChange={(e) => updateCustomerData('firstName', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Enter your last name" 
                      onChange={(e) => updateCustomerData('lastName', e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email" 
                    onChange={(e) => updateCustomerData('email', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    placeholder="Enter your phone number" 
                    onChange={(e) => updateCustomerData('phone', e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <RadioGroup value={paymentMethod} onValueChange={handlePaymentMethodChange}>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
                      <CreditCard className="h-4 w-4" />
                      Credit/Debit Card
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="upi" id="upi" />
                    <Label htmlFor="upi" className="flex items-center gap-2 cursor-pointer">
                      <Wallet className="h-4 w-4" />
                      UPI Payment
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="netbanking" id="netbanking" />
                    <Label htmlFor="netbanking" className="flex items-center gap-2 cursor-pointer">
                      <Building2 className="h-4 w-4" />
                      Net Banking
                    </Label>
                  </div>
                </RadioGroup>

                {paymentMethod === "card" && (
                  <div className="space-y-4 pt-4 border-t">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input id="cardName" placeholder="Enter name as on card" />
                    </div>
                  </div>
                )}

                {paymentMethod === "upi" && (
                  <div className="space-y-4 pt-4 border-t">
                    <div className="space-y-2">
                      <Label htmlFor="upiId">UPI ID</Label>
                      <Input id="upiId" placeholder="yourname@upi" />
                    </div>
                  </div>
                )}

                {paymentMethod === "netbanking" && (
                  <div className="space-y-4 pt-4 border-t">
                    <div className="space-y-2">
                      <Label htmlFor="bank">Select Bank</Label>
                      <select className="w-full p-2 border rounded-md">
                        <option>State Bank of India</option>
                        <option>HDFC Bank</option>
                        <option>ICICI Bank</option>
                        <option>Axis Bank</option>
                        <option>Punjab National Bank</option>
                      </select>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Package: Golden Triangle Deluxe</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration: 6 Days / 5 Nights</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Travelers: 2 Adults</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Package Price</span>
                    <span>₹45,999</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Additional Traveler</span>
                    <span>₹45,999</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service Tax (5%)</span>
                    <span>₹4,600</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Early Bird Discount</span>
                    <span>-₹5,000</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total Amount</span>
                  <span>₹91,598</span>
                </div>

                <div className="space-y-3 pt-4">
                  <Button 
                    onClick={handlePayment} 
                    className="w-full" 
                    size="lg"
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing..." : "Pay Now"}
                  </Button>
                  
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4" />
                      <span>Secured by 256-bit SSL</span>
                    </div>
                    <div className="flex justify-center gap-2">
                      <Badge variant="outline">Visa</Badge>
                      <Badge variant="outline">Mastercard</Badge>
                      <Badge variant="outline">UPI</Badge>
                      <Badge variant="outline">NetBanking</Badge>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground space-y-1">
                  <p>• Free cancellation up to 48 hours</p>
                  <p>• 24/7 customer support</p>
                  <p>• Instant confirmation</p>
                  <p>• Money-back guarantee</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}