import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import muroAlto from "@/assets/gal-muro-alto.jpg";
import cupe from "@/assets/gal-cupe.jpg";
import porto from "@/assets/gal-porto.jpg";
import maracaipe from "@/assets/gal-maracaipe.jpg";
import pontal from "@/assets/gal-pontal.jpg";
import turistas from "@/assets/gal-turistas.jpg";
import buggyAreia from "@/assets/tour-2h.jpg";

const photos = [
  { src: muroAlto, alt: "Piscina natural de Muro Alto vista de cima", label: "Muro Alto", w: 1024, h: 1024 },
  { src: cupe, alt: "Praia do Cupe com coqueiros e mar azul", label: "Praia do Cupe", w: 1024, h: 768 },
  { src: porto, alt: "Piscinas naturais de Porto de Galinhas com jangadas", label: "Porto de Galinhas", w: 1024, h: 1280 },
  { src: maracaipe, alt: "Praia de Maracaípe com ondas e coqueiros", label: "Maracaípe", w: 1024, h: 768 },
  { src: pontal, alt: "Pontal de Maracaípe ao pôr do sol com manguezais", label: "Pontal de Maracaípe", w: 1024, h: 1280 },
  { src: buggyAreia, alt: "Buggy estacionado na areia branca diante do mar", label: "Buggy na areia", w: 1024, h: 768 },
  { src: turistas, alt: "Turistas sorrindo durante o passeio de buggy na beira do mar", label: "Turistas no passeio", w: 1024, h: 768 },
];

export function Galeria() {
  const [open, setOpen] = useState<number | null>(null);
  const active = open === null ? null : photos[open];

  return (
    <section id="galeria" className="bg-sand py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-turquoise">Galeria</p>
          <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">
            As paisagens que você vai encontrar no caminho
          </h2>
        </Reveal>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {photos.map((photo, i) => (
            <Reveal key={photo.label} delay={(i % 3) * 90} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="group relative block w-full overflow-hidden rounded-3xl shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label={`Ampliar foto: ${photo.label}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.w}
                  height={photo.h}
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/25"
                />
                <span className="absolute bottom-4 left-4 rounded-full bg-background/90 px-4 py-1.5 text-xs font-semibold">
                  {photo.label}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          {active && (
            <>
              <DialogTitle className="sr-only">{active.label}</DialogTitle>
              <img
                src={active.src}
                alt={active.alt}
                width={active.w}
                height={active.h}
                className="max-h-[85svh] w-full rounded-2xl object-contain"
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
