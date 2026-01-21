import React, { useEffect, useState } from "react";
import { initialJobs } from "../data/jobs";

const STORAGE_KEY = "admin_jobs";

const AdminDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState({
    id: null,
    title: "",
    location: "",
    type: "",
    experience: "",
    description: "",
  });

  /* LOAD */
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    setJobs(stored ? JSON.parse(stored) : initialJobs);
  }, []);

  const saveJobs = (data) => {
    setJobs(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  /* ADD / UPDATE */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.id) {
      saveJobs(jobs.map((j) => (j.id === form.id ? form : j)));
    } else {
      saveJobs([...jobs, { ...form, id: Date.now() }]);
    }

    setForm({
      id: null,
      title: "",
      location: "",
      type: "",
      experience: "",
      description: "",
    });
  };

  const deleteJob = (id) => {
    if (window.confirm("Delete this job?")) {
      saveJobs(jobs.filter((j) => j.id !== id));
    }
  };

  const editJob = (job) => setForm(job);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Careers Admin Dashboard
          </h1>
          <p className="text-gray-600 mt-2">
            Manage job postings visible on the Careers page
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 mb-14"
        >
          <h2 className="text-2xl font-semibold mb-6">
            {form.id ? "Edit Job Opening" : "Add New Job"}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              placeholder="Job Title"
              className="border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />

            <input
              placeholder="Location"
              className="border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              required
            />

            {/* JOB TYPE */}
            <select
              className="border rounded-lg p-3 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            >
              <option value="">Select Job Type</option>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Internship</option>
              <option>Contract</option>
            </select>

            {/* EXPERIENCE */}
            <select
              className="border rounded-lg p-3 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
              value={form.experience}
              onChange={(e) =>
                setForm({ ...form, experience: e.target.value })
              }
            >
              <option value="">Experience Required</option>
              <option>Fresher</option>
              <option>1-2 Years</option>
              <option>3-5 Years</option>
              <option>5+ Years</option>
            </select>
          </div>

          <textarea
            placeholder="Detailed Job Description"
            className="mt-6 w-full border rounded-lg p-4 focus:ring-2 focus:ring-indigo-500 outline-none"
            rows={5}
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            required
          />

          <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 transition text-white px-8 py-3 rounded-full font-semibold shadow-lg">
            {form.id ? "Update Job" : "Publish Job"}
          </button>
        </form>

        {/* JOB LIST */}
        <div className="grid md:grid-cols-2 gap-8">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold text-gray-800">
                {job.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {job.location} • {job.type}
              </p>

              <p className="text-sm text-gray-500">
                Experience: {job.experience || "Not specified"}
              </p>

              <div className="flex gap-3 mt-5">
                <button
                  onClick={() => editJob(job)}
                  className="flex-1 bg-yellow-400 hover:bg-yellow-500 transition text-sm font-semibold py-2 rounded-lg"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteJob(job.id)}
                  className="flex-1 bg-red-500 hover:bg-red-600 transition text-sm font-semibold text-white py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AdminDashboard;
