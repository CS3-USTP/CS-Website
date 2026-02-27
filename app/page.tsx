import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardWindowDots,
} from "@/components/ui/card"
import { GlobeIcon, ArrowRightIcon, ArrowDownIcon } from "lucide-react"

export default function Page() {
  return (
    <main className="bg-background min-h-screen space-y-20 px-6 py-12">
      <PageHeader />
      <NavbarShowcase />
      <HeroShowcase />
      <AboutProgramShowcase />
      <ProgramObjectivesShowcase />
      <AchievementsShowcase />
      <PropVariantsShowcase />
    </main>
  )
}

function ShowcaseSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mx-auto max-w-5xl space-y-4">
      <h2 className="text-muted-foreground text-xs font-medium uppercase tracking-widest">
        {title}
      </h2>
      {children}
    </section>
  )
}

function PageHeader() {
  return (
    <header className="mx-auto max-w-5xl space-y-2">
      <h1 className="text-3xl font-bold tracking-tight">
        Card Component Showcase
      </h1>
      <p className="text-muted-foreground text-sm">
        All variants of the reusable{" "}
        <code className="bg-muted rounded px-1 py-0.5 font-mono text-xs">
          Card
        </code>{" "}
        primitive used across the CS website.
      </p>
    </header>
  )
}

function NavbarShowcase() {
  const navItems = [
    { label: "Home", active: true },
    { label: "Our Instructors" },
    { label: "Academics" },
    { label: "Research and Projects" },
    { label: "Events and Hackathons" },
  ]

  return (
    <ShowcaseSection title="Navbar — compact pill cards">
      <div className="flex flex-wrap items-center gap-3">
        <Card
          mode="decorative"
          size="sm"
          padding="compact"
          radius="sm"
          border="thin"
          plate
          windowDots="none"
          className="size-11 shrink-0 items-center justify-center p-0"
        >
          <GlobeIcon className="text-foreground size-5" />
        </Card>

        <div className="flex flex-1 flex-wrap gap-2">
          {navItems.map((item) => (
            <Card
              key={item.label}
              mode="decorative"
              size="sm"
              padding="compact"
              radius="sm"
              border="thin"
              plate={item.active}
              interactive="hover"
              windowDots="none"
              asChild
              className={
                item.active
                  ? "bg-panel-plate text-foreground px-5 py-2.5 font-semibold"
                  : "bg-panel-surface text-foreground px-5 py-2.5 font-medium"
              }
            >
              <a href="#">{item.label}</a>
            </Card>
          ))}
        </div>

        <Card
          mode="decorative"
          size="sm"
          padding="compact"
          radius="sm"
          border="thin"
          plate
          interactive="hover"
          windowDots="none"
          asChild
          className="bg-panel-plate px-5 py-2.5 font-semibold"
        >
          <a href="#">CS3 Organization</a>
        </Card>
      </div>
    </ShowcaseSection>
  )
}

function HeroShowcase() {
  return (
    <ShowcaseSection title="Hero section — large panel with dots + plate">
      <Card
        mode="decorative"
        radius="lg"
        border="thin"
        plate
        windowDots="visible"
        windowDotsPosition="right"
        dotsPalette="default"
        interactive="static"
        className="pt-14"
      >
        <CardHeader>
          <CardTitle className="text-4xl leading-tight font-black uppercase tracking-tight">
            Be at the Bleeding
            <br />
            Edge of Computing
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="bg-panel-dot-2/60 border-panel-border flex h-48 items-center justify-center overflow-hidden rounded-xl border">
            <div className="border-panel-dot-3 size-32 rounded-full border-[3px] opacity-60" />
          </div>
        </CardContent>

        <CardFooter className="gap-4">
          <Card
            mode="decorative"
            size="sm"
            padding="compact"
            radius="sm"
            border="thin"
            plate
            windowDots="none"
            className="bg-panel-plate size-14 shrink-0 items-center justify-center p-0"
          >
            <ArrowRightIcon className="size-5" />
          </Card>

          <Card
            mode="decorative"
            size="sm"
            padding="compact"
            radius="sm"
            border="thin"
            plate
            windowDots="none"
            className="bg-panel-surface flex-1 px-5 py-4"
          >
            <p className="text-muted-foreground text-sm leading-relaxed">
              The University of Science and Technology of Southern Philippines —
              Cagayan de Oro Campus offers one of the most sought-after
              undergraduate degrees in the world.
            </p>
          </Card>

          <Card
            mode="decorative"
            size="sm"
            padding="compact"
            radius="sm"
            border="thin"
            plate
            windowDots="none"
            className="bg-panel-plate size-14 shrink-0 items-center justify-center p-0"
          >
            <GlobeIcon className="size-5" />
          </Card>
        </CardFooter>
      </Card>
    </ShowcaseSection>
  )
}

function AboutProgramShowcase() {
  return (
    <ShowcaseSection title="About the Program — section title bar + inner content card">
      <div className="space-y-4">
        <div className="flex gap-4">
          <Card
            mode="decorative"
            size="sm"
            padding="compact"
            radius="sm"
            border="thin"
            plate
            windowDots="visible"
            windowDotsPosition="left"
            dotsPalette="default"
            className="flex-1 items-center pt-10"
          >
            <CardTitle className="px-6 pb-4 text-2xl font-black uppercase tracking-tight">
              About the Program
            </CardTitle>
          </Card>

          <Card
            mode="decorative"
            size="sm"
            padding="compact"
            radius="sm"
            border="thin"
            plate
            windowDots="none"
            className="flex-row items-center gap-4 px-6 py-4"
          >
            {[0, 1, 2].map((i) => (
              <ArrowDownIcon key={i} className="text-foreground size-5" />
            ))}
          </Card>
        </div>

        <Card
          mode="decorative"
          radius="lg"
          border="thin"
          plate
          windowDots="none"
          className="grid sm:grid-cols-2"
        >
          <div className="border-panel-border border-r p-6">
            <Card
              mode="decorative"
              size="sm"
              padding="compact"
              radius="sm"
              border="thin"
              windowDots="visible"
              windowDotsPosition="left"
              dotsPalette="mono"
              className="h-full min-h-48 pt-10"
            >
              <CardContent className="font-mono text-xs leading-loose opacity-60">
                {["0 1 0 1", "0 0 1 0", "1 1 0 1", "0 1 0 1"].map((row, idx) => (
                  <div key={`${row}-${idx}`}>{row}</div>
                ))}
              </CardContent>
            </Card>
          </div>

          <CardContent className="space-y-4 p-6">
            <CardTitle className="text-2xl font-black uppercase">
              1 / Introduction
            </CardTitle>
            <div className="border-panel-border border-t pt-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                The Bachelor of Science in Computer Science program is designed
                to provide an extensive foundation of the theoretical and
                applied aspects of computing — including algorithms, software
                design, and emerging technologies.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {["Previous", "Next"].map((label) => (
              <Card
                key={label}
                mode="decorative"
                size="sm"
                padding="compact"
                radius="sm"
                border="thin"
                plate
                interactive="hover"
                windowDots="none"
                asChild
                className="bg-panel-plate px-5 py-2.5 font-semibold"
              >
                <button type="button">{label}</button>
              </Card>
            ))}
          </div>
          <Card
            mode="decorative"
            size="sm"
            padding="compact"
            radius="sm"
            border="thin"
            windowDots="none"
            className="px-5 py-2.5"
          >
            <span className="text-sm font-medium">Pages 1 of 3</span>
          </Card>
        </div>
      </div>
    </ShowcaseSection>
  )
}

function ProgramObjectivesShowcase() {
  const objectives = [
    {
      text: "Apply knowledge of computing concepts, theories, and principles from specialized fields and allied disciplines in the abstraction, conceptualization of computing solutions.",
    },
    {
      text: "Identify, analyze, evaluate, synthesize, formulate, and articulate research literature, and solve complex computing problems using fundamental principles of mathematics, computing sciences, and relevant domain principles.",
    },
    {
      text: "Evaluate requirements of simple to complex computing problems and apply the mathematical foundations, algorithmic principles, computing theories in modeling, designing, and developing solutions and systems.",
    },
  ]

  return (
    <ShowcaseSection title="Program Objectives — title bar + grid of objective cards">
      <div className="space-y-4">
        <Card
          mode="decorative"
          size="sm"
          padding="compact"
          radius="sm"
          border="thin"
          plate
          windowDots="visible"
          windowDotsPosition="left"
          dotsPalette="default"
          className="items-center pt-10"
        >
          <CardTitle className="px-6 pb-4 text-2xl font-black uppercase tracking-tight">
            Program Objectives
          </CardTitle>
        </Card>

        <div className="grid gap-4 sm:grid-cols-3">
          {objectives.map((obj, i) => (
            <Card
              key={i}
              mode="decorative"
              radius="lg"
              border="thin"
              plate
              interactive="hover"
              windowDots="none"
            >
              <div className="border-panel-border h-24 border-b" />
              <CardContent className="pt-4 pb-6">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {obj.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <Card
            mode="decorative"
            size="sm"
            padding="compact"
            radius="sm"
            border="thin"
            plate
            interactive="hover"
            windowDots="none"
            asChild
            className="bg-panel-plate px-5 py-2.5 font-semibold"
          >
            <button type="button">Jump to Last</button>
          </Card>

          <Card
            mode="decorative"
            size="sm"
            padding="compact"
            radius="sm"
            border="thin"
            windowDots="none"
            className="flex-row items-center gap-4 px-5 py-2.5"
          >
            <span className="text-sm font-medium">Progress</span>
            <div className="bg-panel-border h-2 w-32 overflow-hidden rounded-full">
              <div className="bg-panel-plate h-full w-1/3 rounded-full" />
            </div>
          </Card>
        </div>
      </div>
    </ShowcaseSection>
  )
}

const ACHIEVEMENTS = [
  {
    title: "ACM-ICPC Regional Finalists",
    desc: "Top teams competing in the International Collegiate Programming Contest — the world's most prestigious university programming championship.",
  },
  {
    title: "IEEE Xtreme Global Coding Competitors",
    desc: "24-hour algorithmic marathon contenders at IEEE Xtreme organized by the Institute of Electrical and Electronics Engineers.",
  },
  {
    title: "Google Summer of Code Contributors",
    desc: "Selected student developers building open-source software through Google's Summer of Code program.",
  },
  {
    title: "Microsoft Imagine Cup Contenders",
    desc: "Startup-style tech solutions pitched on the global stage of the Microsoft Imagine Cup by Microsoft.",
  },
  {
    title: "Published under ACM & IEEE",
    desc: "Research papers and posters presented in conferences of the Association for Computing Machinery and IEEE.",
  },
  {
    title: "Interns at Global Tech Giants",
    desc: "Internships and early careers with Google, Microsoft, Amazon, IBM, and Accenture.",
  },
]

function AchievementsShowcase() {
  return (
    <ShowcaseSection title="Our Achievements — masonry tile cards with image + text">
      <div className="space-y-4">
        <Card
          mode="decorative"
          size="sm"
          padding="compact"
          radius="sm"
          border="thin"
          plate
          windowDots="visible"
          windowDotsPosition="right"
          dotsPalette="default"
          className="items-start pt-10"
        >
          <CardTitle className="px-6 pb-4 text-2xl font-black uppercase tracking-tight">
            Our Achievements
          </CardTitle>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2">
          {ACHIEVEMENTS.map((item) => (
            <Card
              key={item.title}
              mode="decorative"
              radius="lg"
              border="thin"
              plate
              interactive="hover"
              windowDots="none"
              className="flex-row items-start gap-4 p-4"
            >
              <div className="bg-panel-dot-3/50 border-panel-border size-24 shrink-0 rounded-xl border" />
              <div className="min-w-0 space-y-1">
                <h4 className="text-sm font-black uppercase leading-snug">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </ShowcaseSection>
  )
}

function PropVariantsShowcase() {
  return (
    <ShowcaseSection title="Prop Variants Reference">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-2">
          <p className="text-muted-foreground text-xs font-medium">
            radius: sm / md / lg / xl
          </p>
          <div className="flex flex-col gap-2">
            {(["sm", "md", "lg", "xl"] as const).map((r) => (
              <Card
                key={r}
                mode="decorative"
                radius={r}
                border="thin"
                windowDots="none"
                className="px-4 py-3"
              >
                <span className="font-mono text-xs">radius=&quot;{r}&quot;</span>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-muted-foreground text-xs font-medium">
            border: none / thin / thick
          </p>
          <div className="flex flex-col gap-2">
            {(["none", "thin", "thick"] as const).map((b) => (
              <Card
                key={b}
                mode="decorative"
                radius="md"
                border={b}
                windowDots="none"
                className="px-4 py-3"
              >
                <span className="font-mono text-xs">border=&quot;{b}&quot;</span>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-muted-foreground text-xs font-medium">
            plate: false / true
          </p>
          <div className="flex flex-col gap-2">
            <Card
              mode="decorative"
              radius="md"
              border="thin"
              windowDots="none"
              className="px-4 py-3"
            >
              <span className="font-mono text-xs">plate=false</span>
            </Card>
            <Card
              mode="decorative"
              radius="md"
              border="thin"
              plate
              windowDots="none"
              className="px-4 py-3"
            >
              <span className="font-mono text-xs">plate=true</span>
            </Card>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-muted-foreground text-xs font-medium">
            dotsPalette: default / muted / mono
          </p>
          <div className="flex flex-col gap-3">
            {(["default", "muted", "mono"] as const).map((p) => (
              <Card
                key={p}
                mode="decorative"
                radius="md"
                border="thin"
                windowDots="visible"
                windowDotsPosition="left"
                dotsPalette={p}
                className="pt-10 pb-4"
              >
                <CardContent>
                  <span className="font-mono text-xs">
                    dotsPalette=&quot;{p}&quot;
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-muted-foreground text-xs font-medium">
            windowDotsPosition: left / right
          </p>
          <div className="flex flex-col gap-3">
            {(["left", "right"] as const).map((pos) => (
              <Card
                key={pos}
                mode="decorative"
                radius="md"
                border="thin"
                windowDots="visible"
                windowDotsPosition={pos}
                className="pt-10 pb-4"
              >
                <CardContent>
                  <span className="font-mono text-xs">position=&quot;{pos}&quot;</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-muted-foreground text-xs font-medium">
            Standalone CardWindowDots
          </p>
          <div className="flex flex-col gap-4">
            {(["default", "muted", "mono"] as const).map((p) => (
              <div key={p} className="space-y-1">
                <span className="text-muted-foreground font-mono text-xs">
                  {p}
                </span>
                <CardWindowDots palette={p} position="left" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ShowcaseSection>
  )
}
