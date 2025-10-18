'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"

const data = [
  { day: "Sen", value: 30 },
  { day: "Sel", value: 45 },
  { day: "Rab", value: 28 },
  { day: "Kam", value: 55 },
  { day: "Jum", value: 50 },
  { day: "Sab", value: 35 },
  { day: "Min", value: 40 },
]

export default function JumlahLeadsChart() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-biru font-semibold text-lg mb-4">Jumlah Leads</h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="black" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
