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
    fetch("http://localhost/careers-api/get-job.php")
    .then(res => res.json())
    .then(data => setJobs(data))
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
    <section className="relative py-28 bg-gradient-to-br from-slate-50 via-gray-50 to-indigo-50 overflow-hidden">

      {/* BACKGROUND BLOBS */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-300/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-5 py-1.5 text-sm font-semibold rounded-full bg-indigo-100 text-indigo-700">
            Careers at LiteCode
          </span>

          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
            Join Our Team
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore exciting opportunities and build your career with a fast-growing tech team.
          </p>
        </motion.div>

        {/* SEARCH + FILTER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-md p-6 mb-14 flex flex-col md:flex-row gap-4"
        >
          <input
            type="text"
            placeholder="Search by job title or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
          <div className="bg-white rounded-2xl p-12 shadow text-center">
            <p className="text-gray-600 text-lg">
              No job openings match your search.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {filteredJobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl p-7 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* JOB TYPE BADGE */}
                <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-700">
                  {job.type}
                </span>

                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition">
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
                  onClick={() =>
                    navigate(
                      "/contact?job=" + encodeURIComponent(job.title)
                    )
                  }
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-indigo-600 group-hover:gap-3 transition-all"
                >
                  Apply Now
                  <span className="text-lg transition-transform group-hover:translate-x-1">
                    →
                  </span>
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
