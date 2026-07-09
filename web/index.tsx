// @togo-framework/widget-stats — a DRIVER rendering a small KPI row.
import { registerWidget } from "@togo-framework/widget";

const STATS = [
  { n: "12+", l: "years shipping" },
  { n: "40+", l: "projects" },
  { n: "9", l: "open-source repos" },
  { n: "2", l: "languages · en/ar" },
];

function Stats() {
  return (
    <div className="stats-grid">
      {STATS.map((s) => (
        <div className="stat-tile" key={s.l}>
          <div className="stat-n">{s.n}</div>
          <div className="stat-l">{s.l}</div>
        </div>
      ))}
    </div>
  );
}

registerWidget({ key: "stats", title: "Impact", defaultZone: "body", Comp: Stats });
