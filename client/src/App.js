import { useState } from "react";
import axios from "axios";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [html, setHtml] = useState("");
  const [loading, setLoading] = useState(false);

// WE'LL ADD SOME CODE HERE
  const generate = async () => {
    if(!prompt.trim()) return;
    setLoading(true);
    try {
      const { data } = await axios.post("/generate", {prompt});
      setHtml(data.html || "");
    } catch(e) {
      alert("Generation failed. Check API key / logs.")
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-700">Agentic Stack Demo</h1>
        <p className="mt-2 text-gray-700"> Describe a webpage. AI will build it live for you. </p>

        <div className="mt-6">
          <input
            className="w-full p-3 rounded border shadow-sm focus:outline-none"
            placeholder=" e.g. Landing page for a coffee brand with features "
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && generate()}
          />
          <button
            onClick={generate}
            disabled={loading}
            className={`mt-3 px-5 py-2 rounded text-white ${loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"}`}
          >
            {loading ? "Generating..." : "Generate Page"}
          </button>
        </div>

        <div className="mt-8 bg-white border rounded shadow overflow-hidden">
          <iframe
            title="preview"
            srcDoc={html}
            style={{ width: "100%", height: "520px", border: "none" }}
          />
        </div>
      </div>
    </div>
  );
}