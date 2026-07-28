"use client";

const clients = [
  {
    name: "Casa Carmona",
    logo: "/logos/casa-carmona.svg",
    url: "https://lacasacarmona.com",
  },
];

export default function HomeLogoStrip() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#0B0F16] py-0">
      <p className="pt-6 pb-5 text-center text-xs font-semibold uppercase tracking-[0.35em] text-white/90">
        Recent Projects
      </p>
      <style jsx>{`
        .marquee {
          overflow: hidden;
          width: 100%;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: scroll 35s linear infinite;
        }

        .marquee:hover .marquee-track {
          animation-play-state: paused;
        }

        .client-item {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 120px;
          flex-shrink: 0;
        }

        .client-item img {
          width: auto;
          opacity: 0.65;
          filter: grayscale(100%);
          transition: all 0.35s ease;
        }

        .client-item:hover img {
          opacity: 1;
          filter: grayscale(0%);
          transform: scale(1.08);
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
      {/* Left gradient overlay */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0B0F16] to-transparent z-10" />
      {/* Right gradient overlay */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0B0F16] to-transparent z-10" />
      <div className="marquee">
        <div className="marquee-track">
          {[...clients, ...clients, ...clients, ...clients, ...clients, ...clients].map((client, index) => (
            <a
              key={index}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="client-item"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-38 w-auto"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}