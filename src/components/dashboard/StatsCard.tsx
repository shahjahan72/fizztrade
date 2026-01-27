interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: string;
}

export function StatsCard({ title, value, icon, trend }: StatsCardProps) {
  return (
    <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-blue-50 text-primary rounded-lg">{icon}</div>
        {trend && <span className="text-xs font-medium text-green-600">{trend}</span>}
      </div>
      <h3 className="text-sm text-gray-500 font-medium">{title}</h3>
      <p className="text-2xl font-bold text-dark mt-1">{value}</p>
    </div>
  );
}