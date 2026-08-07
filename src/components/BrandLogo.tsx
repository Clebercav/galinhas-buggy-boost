import { cn } from "@/lib/utils";
import logoAsset from "@/assets/logo-marca-dagua.png.asset.json";

interface BrandLogoProps {
  className?: string;
  inverse?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "h-8",
  md: "h-10",
  lg: "h-12",
};

export function BrandLogo({ className, inverse = false, size = "md" }: BrandLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <img
        src={logoAsset.url}
        alt="TAXSIM Passeios e Transfer"
        className={cn("w-auto object-contain", sizes[size])}
        width={48}
        height={48}
      />
      <span
        className={cn(
          "font-display text-lg font-extrabold tracking-tight",
          inverse ? "text-navy-foreground" : "text-foreground",
        )}
      >
        Buggy<span className="text-gold">PortoDeGalinhas</span>
      </span>
    </span>
  );
}
