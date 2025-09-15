// src/components/PartnersAndCertificates.tsx
import karnatakaLogo from "@/assets/karnataka.png";
import gujaratLogo from "@/assets/gujarat_tourism.png";

import certificate1PDF from "@/assets/cert1.pdf";
import certificate2PDF from "@/assets/cert2.pdf";

export default function PartnersAndCertificates() {
  const partners = [
    {
      id: "partner1",
      name: "Karnataka Tourism",
      logo: karnatakaLogo,
      url: "https://www.karnatakatourism.org",
    },
    {
      id: "partner2",
      name: "Gujarat Tourism",
      logo: gujaratLogo,
      url: "https://www.gujarattourism.com",
    },
  ];

  const certificates = [
    {
      id: "cert1",
      name: "Udyam Registration Certificate Victory Flag",
      file: certificate1PDF,
    },
    {
      id: "cert2",
      name: "Registration Certificate Of Establishment",
      file: certificate2PDF,
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
  <h2 className="text-3xl font-bold mb-4">Our Recognition</h2>
  <p className="text-gray-600 mb-10">Trusted by leading Tourism Boards & certified by Government bodies</p>

  {/* Logos & Certificates in a single grid */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-center max-w-5xl mx-auto">
    {partners.map((p) => (
      <a
        key={p.id}
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center transition-transform hover:scale-105"
      >
        <img src={p.logo} alt={p.name} className="h-16 object-contain mb-2" />
        <p className="text-sm font-medium">{p.name}</p>
      </a>
    ))}

    {certificates.map((c) => (
      <a
        key={c.id}
        href={c.file}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center transition-transform hover:scale-105"
      >
        <div className="h-16 w-16 flex items-center justify-center border rounded-full shadow-sm bg-gray-50">
          📜
        </div>
        <p className="text-sm font-medium mt-2">{c.name}</p>
      </a>
    ))}
  </div>
</section>
  );
}
