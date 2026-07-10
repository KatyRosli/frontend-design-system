import {
  AvatarFallback,
  AvatarImage,
  Avatar as DefaultAvatar,
} from "@/components/ui/avatar";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";
import {
  ComponentRef,
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import {
  avatarFallbackImage,
  avatarSizes,
  avatarStatusStyles,
  type AvatarSize,
  type AvatarStatus,
} from "./avatar.constants";


const avatarVariants = cva(
  "block overflow-hidden rounded-full",
  {
    variants: {
      size: {
        sm: avatarSizes.sm.avatar,
        md: avatarSizes.md.avatar,
        lg: avatarSizes.lg.avatar,
        xl: avatarSizes.xl.avatar,
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);


type AvatarVariantProps = VariantProps<typeof avatarVariants>;


export type AvatarProps =
  ComponentPropsWithoutRef<typeof DefaultAvatar> &
  AvatarVariantProps & {
    status?: AvatarStatus;
    fallback?: ReactNode;
    src?: string;
    alt?: string;
  };


const Avatar = forwardRef<
  ComponentRef<typeof DefaultAvatar>,
  AvatarProps
>(
  (
    {
      size = "md",
      status,
      src,
      alt = "Avatar",
      fallback,
      className,
      ...props
    },
    ref
  ) => {

    const currentSize =
      (size ?? "md") as AvatarSize;


    return (
      <div className="relative inline-block size-fit">

        <DefaultAvatar
          ref={ref}
          className={cn(
            avatarVariants({
              size,
            }),
            className
          )}
          {...props}
        >

          <AvatarImage
            src={src}
            alt={alt}
            className="size-full object-cover aspect-square"
          />


          <AvatarFallback>
            {fallback ?? (
              <Image
                src={avatarFallbackImage}
                alt="Avatar placeholder"
                width={40}
                height={40}
                className="size-full object-cover aspect-square"
              />
            )}
          </AvatarFallback>

        </DefaultAvatar>


        {status && (
          <span
            aria-label={
              avatarStatusStyles[status].label
            }
            className={cn(
              "absolute bottom-0 right-0",
              "rounded-full",
              "border-2 border-background",
              avatarStatusStyles[status].className,
              avatarSizes[currentSize].indicator
            )}
          />
        )}

      </div>
    );
  }
);


Avatar.displayName = "Avatar";


export default Avatar;