import { useState } from "react";
import { Copy, Check } from "lucide-react";
import PaymentQR from "@/assets/payment_qr.png";
import { useToast } from "@/hooks/use-toast";

export const PaymentSection = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { toast } = useToast();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
    setTimeout(() => setCopiedField(null), 2000);
  };

  const paymentDetails = [
    { label: "Account", value: "VICTORY FLAG JOURNEY" },
    { label: "Bank", value: "KOTAK" },
    { label: "A/C", value: "6450938351" },
    { label: "IFSC", value: "KKBK0008141" },
    { label: "Branch", value: "NAGARBHAVI" },
    { label: "CRN", value: "964653280" },
  ];

  return (
    <section className="bg-teal-700 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Payment Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Payment Details</h2>
              <div className="h-1 w-12 bg-emerald-400 rounded"></div>
            </div>

            {/* Proprietor Info */}
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-sm text-emerald-100">Proprietor: <span className="font-semibold text-white">Pramukh Rao</span></p>
            </div>

            {/* Online Payment Section */}
            <div>
              <h3 className="font-semibold mb-4 text-emerald-100">Online Payment:</h3>

              <div className="space-y-3">
                {paymentDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex items-center justify-between gap-3 pb-3 border-b border-white/10 last:border-0"
                  >
                    <div>
                      <p className="text-xs text-emerald-100 font-medium">{detail.label}</p>
                      <p className="text-sm font-semibold text-white">{detail.value}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(detail.value, detail.label)}
                      className="flex-shrink-0 p-2 hover:bg-white/10 rounded-lg transition-colors"
                      aria-label={`Copy ${detail.label}`}
                    >
                      {copiedField === detail.label ? (
                        <Check className="h-4 w-4 text-emerald-300" />
                      ) : (
                        <Copy className="h-4 w-4 text-white/70 hover:text-white" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - QR Code */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-emerald-100">
              <img
                src={PaymentQR}
                alt="Payment QR Code"
                className="h-80 w-80 md:h-96 md:w-96 object-contain"
              />
            </div>
            <div className="text-center space-y-2">
              <p className="text-lg font-semibold text-white">Scan to Pay</p>
              <p className="text-center text-emerald-100 text-sm">
                Use any UPI app or bank to scan the QR code
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

