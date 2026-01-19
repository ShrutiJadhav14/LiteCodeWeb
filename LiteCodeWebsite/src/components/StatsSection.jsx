// src/components/StatsSection.jsx
const stats = [
  { value: "55+", label: "Completed Projects" },
  { value: "25+", label: "Happy Clients" },
  { value: "10+", label: "Expert Employees" },
  { value: "5+", label: "Awards Won" },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-4xl font-bold">{stat.value}</p>
            <p className="mt-2 text-sm opacity-90">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
