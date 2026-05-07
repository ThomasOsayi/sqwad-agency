import styles from "./HeroDashboard.module.css";

const stats: {
  label: string;
  value: string;
  tone?: "cyan" | "pink";
  delta: string;
}[] = [
  { label: "Revenue", value: "$48.2k", tone: "cyan", delta: "+12.4%" },
  { label: "Active deals", value: "24", delta: "+3 this week" },
  { label: "Creators", value: "1,842", tone: "pink", delta: "+89" },
  { label: "Avg. payout", value: "$312", delta: "On track" },
];

const creators = [
  { name: "Maya Chen", rev: "$4.2k" },
  { name: "Jordan Lee", rev: "$3.8k" },
  { name: "Alex Rivera", rev: "$3.1k" },
];

export default function HeroDashboard() {
  return (
    <div className={styles["dashboard-wrap"]}>
      <div className={styles["dashboard-mock"]}>
        <div className={`${styles["float-badge"]} ${styles["float-badge-1"]}`}>
          <span className={styles["float-badge-icon"]} aria-hidden />
          New payout sent
        </div>
        <div className={`${styles["float-badge"]} ${styles["float-badge-2"]}`}>
          <span className={styles["float-badge-icon"]} aria-hidden />
          Campaign live
        </div>

        <header className={styles["mock-header"]}>
          <div className={styles["mock-header-left"]}>
            <span className={styles["mock-dot"]} aria-hidden />
            <span>SQWAD pulse</span>
          </div>
          <span>Last 30 days</span>
        </header>

        <div className={styles["stats-grid"]}>
          {stats.map((s) => {
            const valueClass = [
              styles["stat-value"],
              s.tone === "cyan" && styles["stat-value--cyan"],
              s.tone === "pink" && styles["stat-value--pink"],
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <div key={s.label} className={styles["stat-card"]}>
                <div className={styles["stat-label"]}>{s.label}</div>
                <div className={valueClass}>{s.value}</div>
                <div className={styles["stat-delta"]}>{s.delta}</div>
              </div>
            );
          })}
        </div>

        <div>
          {creators.map((c) => (
            <div key={c.name} className={styles["creator-row"]}>
              <div className={styles["creator-name"]}>
                <span
                  className={styles["creator-avatar"]}
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-cyan), var(--color-pink))",
                  }}
                  aria-hidden
                />
                {c.name}
              </div>
              <span className={styles["creator-rev"]}>{c.rev}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
