import React, { useState, useEffect } from "react";

const AdminDashboard = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("");

  // Fetch quotes from the API
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/quotes");
        if (!response.ok) throw new Error("Failed to fetch quotes");
        const data = await response.json();
        setQuotes(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchQuotes();
  }, []);

  // Update quote status
  const updateStatus = async (id, newStatus) => {
    try {
      const response = await fetch(`http://localhost:5000/api/quotes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) throw new Error("Failed to update status");

      const updatedQuote = await response.json();
      setQuotes((prevQuotes) =>
        prevQuotes.map((quote) =>
          quote._id === id ? { ...quote, status: updatedQuote.status } : quote
        )
      );
    } catch (err) {
      alert("Error updating status: " + err.message);
    }
  };

  // Filter quotes by email or status
  const filteredQuotes = quotes.filter(
    (quote) =>
      quote.email.includes(filter) ||
      quote.status.toLowerCase().includes(filter.toLowerCase())
  );

  if (loading) return <p>Loading quotes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h2 className="text-4xl font-bold mb-6 text-center">Admin Dashboard</h2>
      <div className="container mx-auto p-4 bg-white dark:bg-gray-800 shadow rounded">
        <input
          type="text"
          placeholder="Search by email or status"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mb-4 w-full p-2 border rounded"
        />
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Project Name</th>
              <th className="p-2 border">Budget</th>
              <th className="p-2 border">Functionality</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredQuotes.map((quote) => (
              <tr key={quote._id} className="text-center">
                <td className="p-2 border">{quote.email}</td>
                <td className="p-2 border">{quote.projectName}</td>
                <td className="p-2 border">{quote.budget}</td>
                <td className="p-2 border">{quote.functionality}</td>
                <td className="p-2 border">{quote.status}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => updateStatus(quote._id, "Approved")}
                    className="btn-primary py-1 px-2 bg-green-500 text-white rounded mr-2"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => updateStatus(quote._id, "Completed")}
                    className="btn-primary py-1 px-2 bg-blue-500 text-white rounded"
                  >
                    Complete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminDashboard;
