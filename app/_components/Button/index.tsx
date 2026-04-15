import { buttonVariants } from "@/app/_consts/buttonVariants"
import { cn } from "@/app/lib/utils"

const Button = ({
    as = "button",
    href,
    variant,
    size,
    className,
    children,
    ...props
}: ButtonProps) => {
    const Comp = as

    return (
        <Comp
            href={as === "a" ? href : undefined}
            className={cn(buttonVariants({ variant, size }), className)}
            {...props}
        >
            {children}
        </Comp>
    )
}

export default Button