import React, { useEffect, useState } from "react";

const Bounce = () => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [output, setOutput] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!input.trim()) {
      setOutput([]);
      return;
    }

    setIsLoading(true);

    const timer = setTimeout(() => {
      const getData = async () => {
        try {
          const res = await fetch(
            `https://dummyjson.com/recipes/search?q=${input}`
          );
          const data = await res.json();
          setOutput(data.recipes || []);
          setError("");
        } catch (err) {
          console.log("Error is:", err);
          setError("Something went wrong");
        } finally {
          setIsLoading(false);
        }
      };

      getData();
    }, 500); // ✅ better debounce

    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Search recipes..."
        onChange={(e) => setInput(e.target.value)}
      />

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && output.length === 0 && <p>No data found</p>}

      <ul>
        {output.map((r) => (
          <li key={r.id}>{r.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Bounce;