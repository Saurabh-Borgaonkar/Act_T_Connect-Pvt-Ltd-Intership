const DashboardCard = ({ title, value }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-slate-500 text-sm font-medium">
        {title}
      </h3>

      <h1 className="text-3xl font-bold text-slate-800 mt-2">
        {value}
      </h1>
    </div>
  );
};

export default DashboardCard;