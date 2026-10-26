import { HistoryIcon } from "lucide-react";
import Image from "next/image";

type ComingSoonCardProps = {
  title: string;
  genre: string;
  duration: string;
  releaseDate: string;
  coverSrc: string;
  alt?: string;
};

export function ComingSoonCard({
  title,
  genre,
  duration,
  releaseDate,
  coverSrc,
  alt = "cover",
}: ComingSoonCardProps) {
  return (
    <div className="rounded border border-neutral-800">
      <div className="relative overflow-hidden w-full max-h-79 p-1">
        <Image
          src={coverSrc}
          alt={alt}
          width={217}
          height={310}
          className="rounded object-cover"
        />
      </div>
      <div className="px-3 py-2.5 space-y-2">
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-1">
            <h3 className="font-bold text-white text-base">{title}</h3>
            <p className="text-neutral-400 text-xs">{genre}</p>
          </div>
          <div className="flex items-center gap-1.5">
            <HistoryIcon size={14} className="text-neutral-400" />
            <p className="font-bold text-white text-xs">{duration}</p>
          </div>
        </div>
        <p className="text-xs text-primary/70">{releaseDate}</p>
      </div>
    </div>
  );
}
