import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import casalBuggy from "@/assets/buggy-em-porto-de-galinhas-em-maracaipe-coqueiros.jpg.asset.json";
import familiaCoqueiros from "@/assets/buggy-em-porto-de-galinhas-em-maracaipe-coqueiros-maracaipe-em-familia.jpg.asset.json";
import grupoPraia from "@/assets/passeio-de-buggy-em-porto-de-galinhas-em-grupo.jpg.asset.json";
import grupoCoqueiros from "@/assets/passeio-de-buggy-em-porto-de-galinhas-em-grupo-coqueiros-de-maracaipe.jpg.asset.json";
import grupoPonta from "@/assets/passeio-de-buggy-em-porto-de-galinhas-em-grupo-coqueiros-de-maracaipe-ponta.jpg.asset.json";
import grupoMuroAlto from "@/assets/passeio-de-buggy-em-porto-de-galinhas-em-grupo-muro-alto.jpg.asset.json";

const photos = [
  { src: casalBuggy.url, alt: "Casal posando em buggy amarelo sob os coqueiros de Maracaípe", label: "Coqueiros de Maracaípe", w: 600, h: 390 },
  { src: grupoPraia.url, alt: "Grupo comemorando ao lado dos buggies na beira da praia", label: "Passeio em grupo", w: 600, h: 390 },
  { src: familiaCoqueiros.url, alt: "Família em cima dos buggies na estrada de coqueiros de Maracaípe", label: "Maracaípe em família", w: 600, h: 390 },
  { src: grupoCoqueiros.url, alt: "Amigos posando entre dois buggies na estrada dos coqueiros", label: "Estrada dos coqueiros", w: 600, h: 390 },
  { src: grupoMuroAlto.url, alt: "Grupo animado em buggy vermelho em Muro Alto", label: "Muro Alto", w: 600, h: 390 },
  { src: grupoPonta.url, alt: "Quatro buggies enfileirados com turistas no Pontal de Maracaípe", label: "Pontal de Maracaípe", w: 600, h: 390 },
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
