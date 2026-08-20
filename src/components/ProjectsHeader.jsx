import SectionHeader from './SectionHeader';
import StatusCard from './StatusCard';

export default function ProjectsHeader() {
  return (
    <div className="mb-4 grid shrink-0 items-start gap-3 lg:grid-cols-[1fr_260px] lg:gap-5">
      <SectionHeader
        label="Data Portfolio"
        title="My Data Works"
        description="Power BI dashboards built for high-stakes decision making — every metric below is drawn from the report itself."
        className="!mb-0 lg:hidden"
      />

      <div className="hidden lg:block">
        <SectionHeader
          label="Data Portfolio"
          title="My Data Works"
          className="!mb-0"
        />
      </div>

      <div className="flex flex-col gap-3">
        <p
          className="hidden text-[length:var(--text-sm)] font-light lg:block"
          style={{ color: 'var(--text-sub)', lineHeight: 1.7 }}
        >
          Power BI dashboards built for high-stakes decision making — every metric
          below is drawn from the report itself.
        </p>

        <StatusCard className="hover-card w-full lg:ml-auto lg:max-w-[280px]" />
      </div>
    </div>
  );
}
