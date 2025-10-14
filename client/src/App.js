import { useState } from "react";
import axios from "axios";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [html, setHtml] = useState("");
  const [loading, setLoading] = useState(false);

// WE'LL ADD SOME CODE HERE

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-700">Agentic Stack Demo</h1>
        <p className="mt-2 text-gray-700"> --------------------- </p>

        <div className="mt-6">
          <input
            className="w-full p-3 rounded border shadow-sm focus:outline-none"
            placeholder="---------------------"
            value={prompt}
            ---------------------
            ---------------------
          />
          <button
            onClick={generate}
            disabled={loading}
            className={`mt-3 px-5 py-2 rounded text-white ${loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"}`}
          >
            {loading ? "---------------------..." : "---------------------"}
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