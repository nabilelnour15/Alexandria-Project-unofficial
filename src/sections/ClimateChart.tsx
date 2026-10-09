import {
  Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Bar, ComposedChart, Legend,
} from 'recharts';
import { climateData } from '../data/visitData';
import { palette } from '../lib/palette';

/** Climate chart for the Visit page. Lazy-loaded so recharts stays out of the main bundle. */
export default function ClimateChart() {
  return (
    <div
      role="img"
      aria-label="Chart of monthly highs, lows and rainfall in Alexandria; the same data is in the table above"
      className="flex-grow min-h-[302px]"
    >
      <ResponsiveContainer width="100%" height="100%" minHeight={302}>
        <ComposedChart
          accessibilityLayer={false}
          data={climateData.months.map((m, i) => ({
            name: m,
            temp: climateData.highs[i],
            low: climateData.lows[i],
            precip: climateData.precipitation[i],
          }))}
          margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke={palette.limestone}
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: palette.inkSoft, fontSize: 12 }}
          />
          <YAxis
            yAxisId="left"
            orientation="left"
            axisLine={false}
            tickLine={false}
            tick={{ fill: palette.inkSoft, fontSize: 12 }}
            unit="°"
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fill: palette.inkSoft, fontSize: 12 }}
            unit="mm"
          />
          <Tooltip
            contentStyle={{
              borderRadius: "6px",
              border: `1px solid ${palette.limestone}`,
              boxShadow: "none",
              color: palette.ink,
            }}
            itemStyle={{ fontWeight: "bold" }}
          />
          <Legend verticalAlign="top" height={36} />
          <Bar
            yAxisId="right"
            dataKey="precip"
            name="Rain (mm)"
            fill={palette.sea}
            fillOpacity={0.6}
            radius={[4, 4, 0, 0]}
          />
          <Area
            yAxisId="left"
            type="monotone"
            dataKey="temp"
            name="High (°C)"
            stroke={palette.terracotta}
            fillOpacity={0.1}
            fill={palette.terracotta}
            strokeWidth={3}
          />
          <Area
            yAxisId="left"
            type="monotone"
            dataKey="low"
            name="Low (°C)"
            stroke={palette.sea}
            fillOpacity={0}
            strokeWidth={2}
            strokeDasharray="5 5"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
