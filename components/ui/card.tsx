import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const cardVariants = cva(
  "group/card relative flex flex-col gap-6 overflow-hidden py-6 text-sm",
  {
    variants: {
      mode: {
        default:
          "ring-foreground/10 bg-card text-card-foreground ring-1 has-[>img:first-child]:pt-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
        decorative: "bg-panel-surface text-foreground border border-panel-border",
      },
      size: {
        default: "gap-6 py-6",
        sm: "gap-4 py-4",
      },
      radius: {
        sm: "rounded-xl",
        md: "rounded-2xl",
        lg: "rounded-3xl",
        xl: "rounded-4xl",
      },
      border: {
        default: "",
        none: "border-0 ring-0",
        thin: "border border-panel-border ring-0",
        thick: "border-2 border-panel-border ring-0",
      },
      interactive: {
        static: "",
        hover: "transition-transform duration-200 hover:-translate-y-0.5",
        focus: "focus-within:ring-ring/50 focus-within:ring-2",
      },
    },
    defaultVariants: {
      mode: "default",
      size: "default",
      radius: "md",
      border: "default",
      interactive: "static",
    },
  }
)

const windowDotContainerVariants = cva("inline-flex items-center gap-2", {
  variants: {
    position: {
      left: "justify-self-start",
      right: "justify-self-end",
    },
  },
  defaultVariants: {
    position: "right",
  },
})

type DotPalette = "default" | "muted" | "mono"

function dotPaletteClasses(palette: DotPalette): [string, string, string] {
  if (palette === "muted") {
    return ["bg-muted-foreground/70", "bg-muted", "bg-panel-dot-3"]
  }

  if (palette === "mono") {
    return ["bg-foreground", "bg-foreground/60", "bg-foreground/30"]
  }

  return ["bg-panel-dot-1", "bg-panel-dot-2", "bg-panel-dot-3"]
}

function CardWindowDots({
  className,
  position = "right",
  palette = "default",
  ...props
}: React.ComponentProps<"div"> & {
  position?: "left" | "right"
  palette?: DotPalette
}) {
  const [dot1, dot2, dot3] = dotPaletteClasses(palette)

  return (
    <div
      data-slot="card-window-dots"
      className={cn(windowDotContainerVariants({ position }), className)}
      {...props}
    >
      <span className={cn("size-5 rounded-full border border-panel-border", dot1)} />
      <span className={cn("size-5 rounded-full border border-panel-border", dot2)} />
      <span className={cn("size-5 rounded-full border border-panel-border", dot3)} />
    </div>
  )
}

function Card({
  className,
  size = "default",
  mode = "default",
  radius = "md",
  border = "default",
  interactive = "static",
  padding = "default",
  headerDivider = false,
  windowDots = "none",
  windowDotsPosition = "right",
  dotsPalette = "default",
  plate = false,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof cardVariants> & {
    padding?: "compact" | "default" | "roomy"
    headerDivider?: boolean
    windowDots?: "none" | "visible"
    windowDotsPosition?: "left" | "right"
    dotsPalette?: DotPalette
    plate?: boolean
    asChild?: boolean
  }) {
  const sharedProps = {
    "data-slot": "card" as const,
    "data-size": size,
    "data-mode": mode,
    "data-padding": padding,
    "data-header-divider": headerDivider,
    className: cn(
      cardVariants({ mode, size, radius, border, interactive, className }),
      plate && "overflow-visible shadow-[8px_8px_0_0_var(--color-panel-plate)]"
    ),
    ...props,
  }

  // asChild path: Slot.Root calls React.Children.only internally, so it must
  // receive exactly one child node — no conditional siblings allowed.
  if (asChild) {
    return (
      <Slot.Root {...sharedProps}>
        {children}
      </Slot.Root>
    )
  }

  return (
    <div {...sharedProps}>
      {windowDots === "visible" && (
        <div className="pointer-events-none absolute top-4 left-4 right-4 z-20 grid">
          <CardWindowDots position={windowDotsPosition} palette={dotsPalette} />
        </div>
      )}
      {children}
    </div>
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-2 rounded-t-xl px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] group-data-[size=sm]/card:px-4 group-data-[padding=compact]/card:px-4 group-data-[padding=roomy]/card:px-8 group-data-[header-divider=true]/card:border-b group-data-[header-divider=true]/card:border-panel-border group-data-[header-divider=true]/card:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("text-base font-medium", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        "px-6 group-data-[size=sm]/card:px-4 group-data-[padding=compact]/card:px-4 group-data-[padding=roomy]/card:px-8",
        className
      )}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center rounded-b-xl px-6 [.border-t]:pt-6 group-data-[size=sm]/card:px-4 group-data-[size=sm]/card:[.border-t]:pt-4 group-data-[padding=compact]/card:px-4 group-data-[padding=roomy]/card:px-8",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  CardWindowDots,
}
