import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const JOB_TYPES = [
  "All",
  "Full Time",
  "Part Time",
  "Internship",
  "Contract",
];

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");

  const navigate = useNavigate();

  /* ---------------- LOAD JOBS ---------------- */
  useEffect(() => {
    const stored = localStorage.getItem("admin_jobs");
    setJobs(stored ? JSON.parse(stored) : []);
  }, []);

  /* ---------------- FILTER JOBS ---------------- */
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.location?.toLowerCase().includes(search.toLowerCase());

      const matchesType =
        typeFilter === "All" ||
        job.type?.toLowerCase() === typeFilter.toLowerCase();

      return matchesSearch && matchesType;
    });
  }, [jobs, search, typeFilter]);

  return (
    <section className="relative py-28 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
            Career Opportunities
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Find the right role that matches your skills and career goals.
          </p>
        </motion.div>

        {/* SEARCH + FILTER BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow p-6 mb-12 flex flex-col md:flex-row gap-4"
        >
          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search job title or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* JOB TYPE FILTER */}
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {JOB_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </motion.div>

        {/* JOB LIST */}
        {filteredJobs.length === 0 ? (
          <div className="text-center bg-white rounded-2xl p-10 shadow">
            <p className="text-gray-600 text-lg">
              No jobs found for selected criteria.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {filteredJobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white rounded-2xl p-7 shadow hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold text-gray-800">
                  {job.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {job.location} • {job.type}
                </p>

                {job.experience && (
                  <p className="text-sm text-gray-500 mt-1">
                    Experience: {job.experience}
                  </p>
                )}

                <p className="mt-4 text-gray-600 leading-relaxed line-clamp-4">
                  {job.description}
                </p>

                <button
                  onClick={() => navigate("/contact")}
                  className="mt-6 inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all"
                >
                  Apply Now <span className="text-lg">→</span>
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Careers;
