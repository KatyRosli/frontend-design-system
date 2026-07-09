import { AvatarFallback, AvatarImage, Avatar as DefaultAvatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";
import {ComponentProps} from "react";

const avatarVariants = cva("block rounded-full overflow-hidden", {
  variants: {
    size: {
      sm: "size-7",
      md: "size-8",
      lg: "size-9",
      xl: "size-10"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

type AvatarVariantProps = VariantProps<typeof avatarVariants>;
export type Size = AvatarVariantProps["size"];

type Props = {
  isOnline?: boolean;
  onClick?: () => void;
} & AvatarVariantProps & 
  Pick<ComponentProps<typeof AvatarImage>, "alt" | "src">;

export default function Avatar({size, isOnline, src, alt, onClick}: Props) {
  return (
    <div className="relative inline-block size-fit">
      <DefaultAvatar className={cn(avatarVariants({ size }))} onClick={onClick}>
        <AvatarImage 
          className="aspect-square size-full object-cover" 
          src={src}
          alt={alt} 
        />
        <AvatarFallback>
          <Image
            className="aspect-square size-full object-cover"
            src="https://avatars.githubusercontent.com/u/96566968?s=400&u=10a4cfb65e5de63911ba0362bda8096f1bbfeb63&v=4"
            alt="avatar placeholder image"
            width={40}
            height={40}
            />
        </AvatarFallback>
      </DefaultAvatar>

      {isOnline && ( 
        <span 
          className={cn(
            "inline-block bg-green-400 rounded-full",
            "absolute bottom-0 right-0", 
            "border border-white",
            size === "sm" || size === "md" ? "size-2" : "size-3"
          )}
        />
      )}
    </div>
  );
}