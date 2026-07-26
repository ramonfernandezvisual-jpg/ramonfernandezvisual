import type { Area, Project } from "@/data/projects";
import { ProjectTile } from "./ProjectTile";
import { SectionHeader } from "./SectionHeader";

type Props = { area: Area; onOpen: (p: Project) => void };

function Wrapper({ area, children }: { area: Area; children: React.ReactNode }) {
  return (
    <div className="border-t px-5 py-20 md:px-10 md:py-32" style={{ borderColor: "#161616" }}>
      <div className="mx-auto max-w-[1600px]">
        <SectionHeader number={area.id} title={area.title} subtitle={area.subtitle} />
        {children}
      </div>
    </div>
  );
}

// Área 01 — 1 hero + 3 secundarios asimétricos
export function AreaOne({ area, onOpen }: Props) {
  const [hero, a, b, c] = area.projects;
  return (
    <Wrapper area={area}>
      <ProjectTile project={hero} onOpen={onOpen} index={0} />
      <div className="mt-8 grid grid-cols-12 gap-6 md:mt-12">
        <div className="col-span-12 md:col-span-7">
          <ProjectTile project={a} onOpen={onOpen} index={1} />
        </div>
        <div className="col-span-12 md:col-span-5 md:mt-16">
          <ProjectTile project={b} onOpen={onOpen} index={2} />
        </div>
        <div className="col-span-12 md:col-span-8 md:col-start-3">
          <ProjectTile project={c} onOpen={onOpen} index={3} />
        </div>
      </div>
    </Wrapper>
  );
}

// Área 02 — 3 verticales dinámicos
export function AreaTwo({ area, onOpen }: Props) {
  const [a, b, c] = area.projects;
  return (
    <Wrapper area={area}>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <ProjectTile project={a} onOpen={onOpen} index={0} />
        </div>
        <div className="col-span-12 md:col-span-4 md:mt-24">
          <ProjectTile project={b} onOpen={onOpen} index={1} />
        </div>
        <div className="col-span-12 md:col-span-4 md:mt-10">
          <ProjectTile project={c} onOpen={onOpen} index={2} />
        </div>
      </div>
    </Wrapper>
  );
}

// Área 03 — cinematográfico: horizontal grande + vertical complementario
export function AreaThree({ area, onOpen }: Props) {
  const horizontal = area.projects.find((p) => p.orientation === "horizontal")!;
  const vertical = area.projects.find((p) => p.orientation === "vertical")!;
  return (
    <Wrapper area={area}>
      <ProjectTile project={horizontal} onOpen={onOpen} index={0} />
      <div className="mt-12 grid grid-cols-12 gap-6 md:mt-20">
        <div className="col-span-12 md:col-span-4 md:col-start-8">
          <ProjectTile project={vertical} onOpen={onOpen} index={1} />
        </div>
      </div>
    </Wrapper>
  );
}

// Área 04 — 3 verticales social premium
export function AreaFour({ area, onOpen }: Props) {
  return (
    <Wrapper area={area}>
      <div className="grid grid-cols-12 gap-6">
        {area.projects.map((p, i) => (
          <div
            key={p.id}
            className={`col-span-12 md:col-span-4 ${i === 1 ? "md:mt-16" : ""} ${i === 2 ? "md:mt-6" : ""}`}
          >
            <ProjectTile project={p} onOpen={onOpen} index={i} />
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

// Área 05 — 1 horizontal full-width
export function AreaFive({ area, onOpen }: Props) {
  const [p] = area.projects;
  return (
    <Wrapper area={area}>
      <ProjectTile project={p} onOpen={onOpen} index={0} />
    </Wrapper>
  );
}
