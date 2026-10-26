import { StarIcon } from "@/components/icons";
import Image from "next/image";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
  rating?: number;
  alt?: string;
};

export function TestimonialCard({
  quote,
  name,
  role,
  avatarSrc,
  rating = 5,
  alt = "avatar",
}: TestimonialCardProps) {
  return (
    <div className="bg-neutral-900 rounded-lg p-8 mb-3 break-inside-avoid space-y-8">
      <div className="space-y-8">
        <div className="flex items-center gap-1">
          {[...Array(rating)].map((_, index) => (
            <StarIcon key={index} size={20} />
          ))}
        </div>
        <p>{quote}</p>
      </div>
      <div className="flex items-center gap-4">
        <Image
          src={avatarSrc}
          alt={alt}
          width={56}
          height={56}
          className="rounded-full"
        />
        <div>
          <h3 className="text-white font-medium">{name}</h3>
          <p className="text-neutral-200">{role}</p>
        </div>
      </div>
    </div>
  );
}
