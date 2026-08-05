import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import videoMp4 from "@/assets/buggy-video-hero.mp4.asset.json";
import videoWebm from "@/assets/buggy-video-hero.webm.asset.json";
import posterImg from "@/assets/buggy-video-poster.jpg.asset.json";

export function PhoneMockup({ className }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    const tryPlay = () => {
      if (video.paused) {
        video.play().catch(() => {
          // Autoplay bloqueado pelo navegador; o poster permanece visível.
        });
      }
    };

    // Tenta tocar assim que possível.
    tryPlay();

    // Retenta quando o vídeo estiver pronto.
    const onCanPlay = () => tryPlay();
    video.addEventListener("canplay", onCanPlay);

    // Toca quando o celular entrar na viewport.
    let observer: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) tryPlay();
          });
        },
        { threshold: 0.25 }
      );
      observer.observe(container);
    }

    // Fallback de interação: toca ao passar o mouse ou tocar no celular.
    const onEnter = () => tryPlay();
    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("touchstart", onEnter, { passive: true });

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("canplay", onCanPlay);
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("touchstart", onEnter);
      observer?.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
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
          <div className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-navy-foreground/20" />

          {/* Screen */}
          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2rem] bg-navy">
            {/* Static poster fallback — stays visible until the video actually plays */}
            <img
              src={posterImg.url}
              alt=""
              aria-hidden="true"
              className={cn(
                "absolute inset-0 z-0 size-full object-cover transition-opacity duration-500",
                isPlaying ? "opacity-0" : "opacity-100"
              )}
            />
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 z-10 size-full object-cover"
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
