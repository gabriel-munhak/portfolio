import { cva } from "class-variance-authority"

export const buttonVariants = cva(
    "inline-block font-black transition",
    {
        variants: {
            variant: {
                primary: "bg-[var(--secondaryColor)] text-[var(--secondaryTextColor)]",
                secondary: "bg-[var(--btnBgPrimaryColor)]",
                tertiary: "bg-[var(--terdiaryColor)] text-[var(--secondaryColor)]",
                quaternary: "text-[var(--secondaryColor)]"
            },
            size: {
                hero: "px-[2.375rem] py-[0.875rem] lg:px-[3.5rem] lg:py-[1.25rem] text-[0.875rem] lg:text-[1.375rem] rounded-[1.25rem] lg:rounded-[2.5rem]",

                md: "px-[14px] py-[6px] md:px-[14px] lg:px-[22px] lg:py-[8px] text-[0.875rem] lg:text-[16px] rounded-[10px] lg:rounded-[12px]",

                sm: "px-[9.9px] py-[8px] text-[0.875rem] rounded-[0.625rem] lg:px-[1rem] lg:py-[0.5rem] lg:text-[1rem] lg:rounded-[0.75rem]",
                tag: "px-[1rem] py-[0.25rem] lg:px-[1.3125rem] lg:py-[0.375rem] text-[0.875rem] lg:text-[1rem] rounded-[0.75rem]",
            },
            active: {
                true: "active:bg-[var(--secondaryColor)] active:text-[var(--secondaryTextColor)]",
            }
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        }
    }
)