import { useEffect, useId, useRef } from "react";
import videoMp4 from "@/assets/buggy-video-hero.mp4.asset.json";
import videoWebm from "@/assets/buggy-video-hero.webm.asset.json";
import posterImg from "@/assets/buggy-video-poster.jpg.asset.json";

export function PhoneMockup({ className }: { className?: string }) {
  const id = useId();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      if (video.paused) {
        video.play().catch(() => {
          // Autoplay bloqueado pelo navegador; o poster permanece visível.
        });
      }
    };

    video.addEventListener("loadeddata", playVideo);
    video.addEventListener("canplay", playVideo);

    // Tentativa inicial caso o vídeo já esteja pronto.
    playVideo();

    return () => {
      video.removeEventListener("loadeddata", playVideo);
      video.removeEventListener("canplay", playVideo);
    };
  }, []);

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
              ref={videoRef}
              id={id}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={posterImg.url}
              className="absolute inset-0 size-full object-cover"
            >
              <source src={videoWebm.url} type="video/webm" />
              <source src={videoMp4.url} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
