// import { useState } from "react";

// const MOCK_RESPONSE = {
//   answer:
//     "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
//   citations: [
//     {
//       text:
//         "As the age of the deceased at the time of accident was held to be about 54–55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.",
//       source: "Dani_Devi_v_Pritam_Singh.pdf",
//       link:
//         "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
//     },
//   ],
// };

// export default function App() {
//   const [query, setQuery] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [response, setResponse] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => {
//       setResponse(MOCK_RESPONSE);
//       setLoading(false);
//     }, 1000);
//   };

//   return (
//     <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
//       <div className="card w-full max-w-2xl bg-base-100 shadow-xl">
//         <div className="card-body space-y-4">
//           <h1 className="text-3xl font-bold text-center text-primary">Lexi Legal Assistant</h1>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <textarea
//               className="textarea textarea-bordered w-full"
//               rows="4"
//               placeholder="Enter your legal question..."
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               required
//             ></textarea>

//             <button
//               type="submit"
//               className={`btn btn-primary w-full ${loading && "btn-disabled loading"}`}
//             >
//               {loading ? "Generating..." : "Submit"}
//             </button>
//           </form>

//           {response && (
//             <div className="bg-base-100 p-4 rounded-lg border border-primary">
//               <h2 className="text-xl font-semibold mb-2">Answer:</h2>
//               <p className="text-gray-700 leading-relaxed">{response.answer}</p>

//               <div className="mt-4 border-l-4 border-blue-500 pl-3 text-sm text-gray-700 italic">
//                 “{response.citations[0].text}”
//                 <p className="mt-2 not-italic">
//                   Source:{" "}
//                   <a
//                     href={response.citations[0].link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 underline"
//                   >
//                     {response.citations[0].source}
//                   </a>{" "}
//                   (Para 7)
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



// export default function ContactSection() {
//   return (
//     <section className="min-h-screen bg-black text-white px-6 py-16 flex flex-col md:flex-row items-center justify-center gap-12">
//       {/* LEFT SIDE */}
//       <div className="flex-1 text-center md:text-left relative z-10">
//         {/* Background Glow */}
//         <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-300 blur-[120px] opacity-40 rounded-full z-0"></div>

//         {/* Lexi Gradient Title */}
//         {/* <h1 className="text-6xl font-extrabold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent z-10 relative">
//           Lexi
//         </h1> */}
//         <h1 className="text-7xl font-extrabold bg-gradient-to-r from-white to-[#70BEFA] bg-clip-text text-transparent">
//           Lexi
//         </h1>


//         {/* Subtitle */}
//         <p className="mt-4 text-xl z-10 relative">
//           Accelerating Legal Workflows with Agentic AI
//         </p>
//       </div>

//       {/* RIGHT SIDE */}
//       <div className="flex-1 w-full max-w-lg z-10 relative">
//         <form className="flex flex-col gap-4">


//           {/* Message */}
//           <div>
//             <label className="block mb-1 text-sm font-semibold">Lexi Legal Assistant</label>
//             <textarea
//               placeholder="Hi team Lexi! I'm reaching out for..."
//               rows="4"
//               className="w-full p-3 rounded-md bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="mt-2 px-6 py-3 bg-zinc-900 text-white border border-zinc-700 rounded-md hover:border-blue-500 hover:text-blue-400 transition-all"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }



import { useState } from "react";

const MOCK_RESPONSE = {
  answer:
    "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
  citations: [
    {
      text:
        "As the age of the deceased at the time of accident was held to be about 54–55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.",
      source: "Dani_Devi_v_Pritam_Singh.pdf",
      link:
        "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
    },
  ],
};

export default function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setResponse(MOCK_RESPONSE);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl items-start">
        {/* LEFT SIDE */}
        <div className="space-y-6 text-center md:text-left relative">
          {/* Background Glow */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 opacity-30 blur-[120px] rounded-full z-0"></div>

          {/* Content */}
          <h1 className="text-8xl font-bold bg-gradient-to-r from-white to-[#70BEFA] bg-clip-text text-transparent">
            Lexi
          </h1>
          <p className="text-lg md:text-xl text-gray-300 z-10 relative">
            Accelerating Legal Workflows with Agentic AI
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-gray-900 rounded-xl p-6 shadow-lg space-y-6 z-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* <textarea
              className="w-full p-4 rounded-md bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="5"
              placeholder="Enter your legal question..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
            ></textarea> */}
            <div className="flex flex-col space-y-2 w-full">
              <label className=" text-2xl font-bold bg-gradient-to-r from-white to-[#70BEFA] bg-clip-text text-transparent">Lexi Legal Assistant</label>
              <textarea
                name="message"
                placeholder="Hi i am Lexi! Ask your legal questions..."
                required
                className="w-full min-h-[120px] bg-[#161616] text-white placeholder-gray-400 rounded-md border border-zinc-700 px-4 py-3 outline-none focus:border-blue-500 hover:border-blue-500 transition-all"
              ></textarea>
            </div>


            {/* <button
              type="submit"
              className={`className=w-full mt-2 px-6 py-3 bg-zinc-900 text-white border border-zinc-700 rounded-md hover:border-blue-500 hover:text-blue-400 transition-all${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Generating..." : "Submit"}
            </button> */}
            <button
              type="submit"
              className={`w-full mt-2 px-6 py-3 bg-[#161616] border border-zinc-700 rounded-md transition-all hover:border-blue-500 ${loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              disabled={loading}
            >
              <span className="bg-gradient-to-r from-white to-[#70BEFA] bg-clip-text text-transparent">
                {loading ? "Generating..." : "Submit"}
              </span>
            </button>

          </form>

          {response && (
            <div className="bg-gray-800 p-4 rounded-lg border border-blue-500 text-gray-200">
              <h2 className="text-xl font-semibold mb-2">Answer:</h2>
              <p className="leading-relaxed">{response.answer}</p>

              <div className="mt-4 border-l-4 border-blue-400 pl-3 italic text-sm">
                “{response.citations[0].text}”
                <p className="mt-2 not-italic">
                  Source:{" "}
                  <a
                    href={response.citations[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    {response.citations[0].source}
                  </a>{" "}
                  (Para 7)
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
