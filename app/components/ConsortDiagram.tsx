'use client';

import { ConsortData } from '@/lib/types';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

export function ConsortDiagram({ data }: { data: ConsortData }) {
  const flow = [
    { stage: 'Assessed', value: data.assessed },
    { stage: 'Randomized', value: data.randomized },
    { stage: 'Completed', value: data.completed },
    { stage: 'Analyzed', value: data.analyzed },
  ];

  return (
    <div className="w-full h-72 bg-slate-900/60 rounded-xl border border-slate-800 p-4">
      <h3 className="text-sm font-semibold text-slate-200 mb-2">
        CONSORT Flow (synthetic)
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={flow}>
          <XAxis dataKey="stage" stroke="#cbd5f5" />
          <YAxis stroke="#cbd5f5" />
          <Tooltip
            cursor={{ fill: 'rgba(148, 163, 184, 0.15)' }}
            contentStyle={{ backgroundColor: '#020617', borderRadius: 8 }}
          />
          <Bar dataKey="value" fill="#38bdf8" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}