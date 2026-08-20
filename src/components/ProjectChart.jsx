import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { ACCENTS, FILTER_MULTIPLIERS } from '../data/projects';

function CustomTooltip({ active, payload, accent }) {
  if (!active || !payload?.length) return null;

  return (
    <div
      className="bg-white px-3 py-2 font-mono text-[10px]"
      style={{ border: `1px solid ${accent.border}`, borderRadius: '8px' }}
    >
      <span style={{ color: accent.text }}>{payload[0].value}</span>
    </div>
  );
}

export default function ProjectChart({ project, filterIndex }) {
  const accent = ACCENTS[project.color];
  const multiplier = FILTER_MULTIPLIERS[filterIndex] ?? 1;

  const chartData = project.chart.data.map((item) => ({
    ...item,
    value: Math.round(item.value * multiplier * 10) / 10,
  }));

  const tickStyle = { fontSize: 9, fill: '#94a3b8', fontFamily: 'JetBrains Mono' };

  if (project.chart.type === 'bar') {
    return (
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={tickStyle}
            interval={0}
            angle={-25}
            textAnchor="end"
            height={50}
          />
          <YAxis axisLine={false} tickLine={false} tick={tickStyle} />
          <Tooltip content={<CustomTooltip accent={accent} />} cursor={false} />
          <Bar dataKey="value" fill={accent.text} radius={[4, 4, 0, 0]} maxBarSize={36} />
        </BarChart>
      </ResponsiveContainer>
    );
  }

  if (project.chart.type === 'line') {
    return (
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={chartData} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={tickStyle} />
          <YAxis axisLine={false} tickLine={false} tick={tickStyle} />
          <Tooltip content={<CustomTooltip accent={accent} />} cursor={false} />
          <Line
            type="monotone"
            dataKey="value"
            stroke={accent.text}
            strokeWidth={2}
            dot={{ fill: accent.text, r: 3 }}
            activeDot={{ r: 5, fill: accent.text }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  if (project.chart.type === 'donut') {
    const scaledData = chartData.map((item) => ({
      ...item,
      value: Math.round(item.value * multiplier),
    }));

    return (
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={scaledData}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={85}
            dataKey="value"
            paddingAngle={2}
          >
            {scaledData.map((entry) => (
              <Cell key={entry.name} fill={entry.fill} stroke="none" />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip accent={accent} />} />
        </PieChart>
      </ResponsiveContainer>
    );
  }

  return null;
}
