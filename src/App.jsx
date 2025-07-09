

import { useState, useEffect, useRef } from "react";

const MOCK_RESPONSE = {
  answer:
    "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects...",
  citations: [
    {
      text:
        "As the age of the deceased at the time of accident was held to be about 54–55 years by the learned Tribunal...",
      source: "Dani_Devi_v_Pritam_Singh.pdf",
      link:
        "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
    },
  ],
};

export default function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const chatRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const userMessage = query;

    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          question: userMessage,
          answer: MOCK_RESPONSE.answer,
          citation: MOCK_RESPONSE.citations[0],
        },
      ]);
      setQuery(""); // Clear textarea
      setLoading(false);
    }, 800);
  };

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl items-start">
        {/* LEFT SIDE */}
       <div className="space-y-6 text-center md:text-left relative flex flex-col justify-center h-full">

          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 opacity-30 blur-[120px] rounded-full z-0"></div>
          <h1 className="text-8xl font-bold bg-gradient-to-r from-white to-[#70BEFA] bg-clip-text text-transparent">
            Lexi
          </h1>
          <p className="text-lg md:text-xl text-gray-300 z-10 relative">
            Accelerating Legal Workflows with Agentic AI
          </p>
        </div>

        {/* RIGHT SIDE - Chat UI */}
        <div className="bg-[#111111] rounded-xl p-6 shadow-lg space-y-6 z-10 flex flex-col h-[600px]">
          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto space-y-4 pr-2">
            {chatHistory.map((chat, idx) => (
              <div key={idx} className="space-y-2">
                {/* User message */}
                <div className="bg-blue-100 text-black rounded-lg p-4 self-end w-fit max-w-[80%] ml-auto">
                  <p>{chat.question}</p>
                </div>
                {/* AI response */}
                <div className="bg-gray-800 rounded-lg p-4 self-start w-fit max-w-[80%]">
                  <p>{chat.answer}</p>
                  <div className="mt-4 border-l-4 border-blue-400 pl-3 italic text-sm">
                    “{chat.citation.text}”
                    <p className="mt-2 not-italic">
                      Source:{" "}
                      <a
                        href={chat.citation.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline"
                      >
                        {chat.citation.source}
                      </a>{" "}
                      (Para 7)
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div ref={chatRef}></div>
          </div>

          {/* Textarea input */}
          <form
            onSubmit={handleSubmit}
            className="flex gap-4 pt-2 border-t border-zinc-700"
          >
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask to Lexi a legal question..."
              className="flex-1 bg-[#161616] p-3 rounded-md border border-zinc-700 text-white resize-none outline-none"
              rows={2}
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-white to-[#70BEFA] text-black px-5 py-2 rounded-md font-bold hover:opacity-90"
              disabled={loading}
            >
              {loading ? "..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
