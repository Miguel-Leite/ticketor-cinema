import { StarIcon } from "@/components/icons";
import { HistoryIcon } from "lucide-react";
import Image from "next/image";

type MovieCardProps = {
  title: string;
  genre: string;
  rating: number;
  duration: string;
  ageRating: string;
  coverSrc: string;
  alt?: string;
};

export function MovieCard({
  title,
  genre,
  rating,
  duration,
  ageRating,
  coverSrc,
  alt = "movie",
}: MovieCardProps) {
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
            <StarIcon className="text-yellow-400" />
            <p className="font-bold text-white text-xs">{rating}</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <HistoryIcon size={14} className="text-neutral-400" />
            <p className="text-white text-xs">{duration}</p>
          </div>
          <div className="bg-neutral-400 rounded w-9 h-4 flex items-center justify-center text-center">
            <p className="text-black text-xs">{ageRating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
