import { useId } from "react";
import videoAsset from "@/assets/buggy-video-hero.mp4.asset.json";

export function PhoneMockup({ className }: { className?: string }) {
  const id = useId();

  return (
    <div
      className={className}
      aria-label="Vídeo do passeio de buggy em Porto de Galinhas"
    >
      <div className="relative mx-auto w-[260px] sm:w-[300px] lg:w-[340px]">
        {/* Side buttons */}
        <div className="absolute -left-[3px] top-[18%] h-8 w-[3px] rounded-l-sm bg-navy-foreground/40" />
        <div className="absolute -left-[3px] top-[28%] h-14 w-[3px] rounded-l-sm bg-navy-foreground/40" />
        <div className="absolute -right-[3px] top-[24%] h-16 w-[3px] rounded-r-sm bg-navy-foreground/40" />

        {/* Phone frame */}
        <div className="relative overflow-hidden rounded-[2.5rem] border-[6px] border-navy-foreground/20 bg-navy p-1 shadow-2xl shadow-navy/40 backdrop-blur-sm">
          {/* Notch */}
          <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-navy-foreground/20" />

          {/* Screen */}
          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2rem] bg-navy">
            <video
              id={id}
              src={videoAsset.url}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 size-full object-cover"
              poster=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
