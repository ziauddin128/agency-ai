import Image from "next/image";

interface CompaniesLogo {
  label: string;
  logo: string;
}

export default function TrustedBy() {
  const companiesLogo: CompaniesLogo[] = [
    {
      label: "Microsoft",
      logo: "microsoft_logo.png",
    },
    {
      label: "Zoom",
      logo: "zoom_logo.png",
    },
    {
      label: "Rakuten",
      logo: "rakuten_logo.png",
    },
    {
      label: "Coinbase",
      logo: "coinbase_logo.png",
    },
    {
      label: "Airnb",
      logo: "airbnb_logo.svg",
    },
    {
      label: "Google",
      logo: "google_logo.svg",
    },
  ];

  return (
    <div className="custom-container flex flex-col items-center gap-10 text-gray-700 dark:text-white/80">
      <h3 className="font-semibold">Trusted by Leading Companies</h3>

      <div className="flex flex-wrap items-center justify-center gap-10 m-4">
        {companiesLogo.map((item, idx) => (
          <Image
            key={idx}
            src={`/images/${item.logo}`}
            height={24}
            width={24}
            unoptimized
            loading="eager"
            className="max-h-5 sm:max-h-6 w-auto dark:drop-shadow-xl"
            alt="Company"
          />
        ))}
      </div>
    </div>
  );
}
