// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Edit2, Copy, Eye, Download } from "lucide-react";

// export default function HeroSection({ isSidebarOpen }) {
//   const sidebarWidth = isSidebarOpen ? 260 : 64;
//   const [userInput, setUserInput] = useState("");
//   const [blocks, setBlocks] = useState([]); // Array of { type, id }
//   const [selectedIndex, setSelectedIndex] = useState({}); // { blockId: selectedImageIndex }

//   const handleSend = async () => {
//     if (!userInput.trim()) return;
//     const input = userInput.toLowerCase();

//     let newBlock = null;
//     if (input.includes("image")) newBlock = { id: Date.now(), type: "image" };
//     else if (input.includes("logo")) newBlock = { id: Date.now(), type: "logo" };

//     if (newBlock) setBlocks((prev) => [...prev, newBlock]);
//     setUserInput("");
//   };

//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.15, duration: 0.5 },
//     }),
//   };

//   const imageUrls = [
//     "https://images.unsplash.com/photo-1602872029427-9b3ef2b1c7a8?auto=format&fit=crop&w=400&q=80",
//     "https://images.unsplash.com/photo-1552410260-0fd9b39b4e8e?auto=format&fit=crop&w=400&q=80",
//     "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=400&q=80",
//   ];

//   const logoUrls = [
//     "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=400&q=80",
//     "https://images.unsplash.com/photo-1612832021076-8b8cfb7a99d3?auto=format&fit=crop&w=400&q=80",
//     "https://images.unsplash.com/photo-1612831208084-5d1baf59f42e?auto=format&fit=crop&w=400&q=80",
//   ];

//   const renderBlock = (block) => {
//     const urls = block.type === "image" ? imageUrls : logoUrls;
//     const selected = selectedIndex[block.id];

//     return (
//       <div
//         key={block.id}
//         className="min-h-screen bg-[#0b0b14] flex flex-col items-center justify-center text-white p-6 space-y-6"
//       >
//         {/* Header */}
//         <div className="w-full flex flex-col items-end space-y-2">
//           <span className="text-sm bg-[#2a2444] text-white/80 px-3 py-1 rounded-full">
//             {block.type === "image"
//               ? "Create a lion image."
//               : "Create a brand logo."}
//           </span>
//           <div className="flex items-center gap-3 text-white/70">
//             <Edit2 size={16} className="cursor-pointer hover:text-white transition" />
//             <Copy size={16} className="cursor-pointer hover:text-white transition" />
//           </div>
//         </div>

//         {/* Images/Logos */}
//         <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
//           {urls.map((src, i) => (
//             <motion.div
//               key={i}
//               className="relative group flex flex-col items-center gap-3"
//               custom={i}
//               initial="hidden"
//               animate="visible"
//               variants={fadeUp}
//             >
//               <div className="relative">
//                 <img
//                   src={src}
//                   alt={`${block.type}-${i}`}
//                   className={`${
//                     block.type === "logo" ? "w-64 h-64" : "w-64 h-80"
//                   } object-cover rounded-xl ${
//                     selected === i ? "ring-2 ring-[#6c5aff]" : ""
//                   }`}
//                 />
//                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 rounded-xl transition">
//                   <button className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm hover:bg-white/30 transition flex items-center gap-1">
//                     <Eye size={14} /> View
//                   </button>
//                   <a
//                     href={src}
//                     download
//                     className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm hover:bg-white/30 transition flex items-center gap-1"
//                   >
//                     <Download size={14} /> Download
//                   </a>
//                 </div>
//               </div>

//               <button
//                 onClick={() =>
//                   setSelectedIndex((prev) => ({ ...prev, [block.id]: i }))
//                 }
//                 className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition"
//               >
//                 <span
//                   className={`w-4 h-4 rounded-full border border-white transition ${
//                     selected === i ? "bg-white" : "bg-transparent"
//                   }`}
//                 ></span>
//                 I prefer this
//               </button>
//             </motion.div>
//           ))}
//         </div>

//         {/* Footer */}
//         <div className="bg-[#1b1730] text-white/70 px-6 py-3 rounded-xl text-center max-w-xl text-sm">
//           {block.type === "image"
//             ? "Here are some samples of the requested image generation."
//             : "Here are some sample logo designs generated for your query."}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div
//       className="relative min-h-screen flex flex-col bg-black text-white overflow-x-hidden transition-all duration-300"
//       style={{ marginLeft: sidebarWidth }}
//     >
//       {/* Default center text (only if no blocks yet) */}
//       {blocks.length === 0 && (
//         <div
//           className="fixed top-1/2 left-1/2 -translate-y-1/2 text-center px-4 z-10"
//           style={{ transform: "translateX(calc(-50% + 50px)) translateY(-50%)" }}
//         >
//           <h1 className="text-2xl md:text-3xl font-medium max-w-3xl mx-auto">
//             Build What You Imagine! Powered by{" "}
//             <a
//               href="#"
//               className="text-indigo-400 hover:text-indigo-300 transition"
//             >
//               Zebvo AI
//             </a>
//           </h1>
//         </div>
//       )}

//       {/* Render all generated blocks in order */}
//       <div className="flex flex-col items-center justify-start w-full">
//         {blocks.map((block) => renderBlock(block))}
//       </div>

//       {/* Chatbox */}
//       <div
//         className="fixed bottom-6 left-1/2 z-50 px-4 transition-all duration-300"
//         style={{
//           transform: "translateX(-50%)",
//           width: `calc(100% - ${sidebarWidth}px)`,
//           maxWidth: "100%",
//           pointerEvents: "none",
//         }}
//       >
//         <div
//           className="mx-auto flex items-center bg-[#0b0018]/80 border border-[#6b5bff40] rounded-2xl px-5 py-3 w-full max-w-3xl backdrop-blur-md shadow-[0_0_20px_#5a4bff33]"
//           style={{ pointerEvents: "auto" }}
//         >
//           <button className="flex items-center gap-1 text-sm text-[#b5aaff] bg-[#1a1038]/70 border border-[#6a58ff40] rounded-full px-3 py-1 hover:bg-[#241a4d] transition">
//             📎 Attach
//           </button>

//           <input
//             type="text"
//             value={userInput}
//             onChange={(e) => setUserInput(e.target.value)}
//             placeholder="Wanna build something?"
//             className="flex-1 bg-transparent text-gray-300 placeholder-gray-500 px-3 focus:outline-none text-sm"
//           />

//           <button
//             onClick={handleSend}
//             className="flex items-center justify-center bg-gradient-to-r from-[#6c5aff] to-[#9c7fff] hover:from-[#7a68ff] hover:to-[#b296ff] text-white w-10 h-10 rounded-full transition shadow-[0_0_10px_#6c5aff33]"
//           >
//             →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }











"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Edit2, Copy, Eye, Download } from "lucide-react";

export default function HeroSection({ isSidebarOpen }) {
  const sidebarWidth = isSidebarOpen ? 260 : 64;
  const [userInput, setUserInput] = useState("");
  const [blocks, setBlocks] = useState([]); // Array of { type, id }
  const [selectedIndex, setSelectedIndex] = useState({}); // { blockId: selectedImageIndex }

  const handleSend = async () => {
    if (!userInput.trim()) return;
    const input = userInput.toLowerCase();

    let newBlock = null;
    if (input.includes("image")) newBlock = { id: Date.now(), type: "image" };
    else if (input.includes("logo")) newBlock = { id: Date.now(), type: "logo" };
    else if (input.includes("text"))
      newBlock = {
        id: Date.now(),
        type: "text",
        question: "Why is Zebvo.AI the best?",
        answer:
          "Zebvo.AI stands out as a next-generation creative intelligence platform built to bridge human imagination and artificial precision. It empowers designers, developers, and innovators by delivering seamless workflows—from concept visualization to interactive prototyping—all powered by deeply adaptive machine learning models. Unlike traditional AI tools that restrict creativity, Zebvo.AI learns and evolves with your unique style, helping you co-create rather than just generate. Its real-time collaboration, dynamic rendering, and multimodal capabilities make it the all-in-one hub for creators seeking to accelerate projects without compromising originality. Zebvo.AI isn’t just a tool—it’s your creative partner, transforming abstract ideas into pixel-perfect realities.",
      };

    if (newBlock) setBlocks((prev) => [...prev, newBlock]);
    setUserInput("");
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  const imageUrls = [
    "https://images.pexels.com/photos/14576827/pexels-photo-14576827.jpeg",
    "https://images.pexels.com/photos/1622508/pexels-photo-1622508.jpeg",
    "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=400&q=80",
  ];

  const logoUrls = [
    "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=400&q=80",
    "https://images.pexels.com/photos/170809/pexels-photo-170809.jpeg",
    "https://images.pexels.com/photos/11459428/pexels-photo-11459428.jpeg",
  ];

  const renderBlock = (block) => {
    // TEXT BLOCK
    if (block.type === "text") {
      return (
        <div
          key={block.id}
          className="min-h-screen bg-[#0b0b14] flex flex-col items-center justify-center text-white p-6 space-y-6"
        >
          {/* Top right caption + icons */}
          <div className="w-full flex flex-col items-end space-y-2">
            <span className="text-sm bg-[#2a2444] text-white/80 px-3 py-1 rounded-full">
              {block.question}
            </span>
            <div className="flex items-center gap-3 text-white/70">
              <button className="flex items-center gap-1 hover:text-white transition">
                <Edit2 size={16} /> Edit
              </button>
              <button
                onClick={() => navigator.clipboard.writeText(block.question)}
                className="flex items-center gap-1 hover:text-white transition"
              >
                <Copy size={16} /> Copy
              </button>
            </div>
          </div>

          {/* Text Answer box */}
          <div className="relative bg-[#1b1730] text-white/80 px-6 py-5 rounded-xl max-w-3xl text-sm sm:text-base leading-relaxed text-justify">
            {block.answer}

            {/* Copy icon for answer */}
            <button
              onClick={() => navigator.clipboard.writeText(block.answer)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
            >
              <Copy size={16} />
            </button>
          </div>

          {/* Footer text */}
          <div className="bg-[#1b1730] text-white/70 px-6 py-3 rounded-xl text-center max-w-xl text-sm">
            Here’s your detailed explanation generated by Zebvo.AI.
          </div>
        </div>
      );
    }

    // IMAGE / LOGO BLOCKS
    const urls = block.type === "image" ? imageUrls : logoUrls;
    const selected = selectedIndex[block.id];

    return (
      <div
        key={block.id}
        className="min-h-screen bg-[#0b0b14] flex flex-col items-center justify-center text-white p-6 space-y-6"
      >
        {/* Header */}
        <div className="w-full flex flex-col items-end space-y-2">
          <span className="text-sm bg-[#2a2444] text-white/80 px-3 py-1 rounded-full">
            {block.type === "image"
              ? "Create a lion image."
              : "Create a brand logo."}
          </span>
          <div className="flex items-center gap-3 text-white/70">
            <Edit2 size={16} className="cursor-pointer hover:text-white transition" />
            <Copy size={16} className="cursor-pointer hover:text-white transition" />
          </div>
        </div>

        {/* Images/Logos */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
          {urls.map((src, i) => (
            <motion.div
              key={i}
              className="relative group flex flex-col items-center gap-3"
              custom={i}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div className="relative">
                <img
                  src={src}
                  alt={`${block.type}-${i}`}
                  className={`${
                    block.type === "logo" ? "w-64 h-64" : "w-64 h-80"
                  } object-cover rounded-xl ${
                    selected === i ? "ring-2 ring-[#6c5aff]" : ""
                  }`}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 rounded-xl transition">
                  <button className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm hover:bg-white/30 transition flex items-center gap-1">
                    <Eye size={14} /> View
                  </button>
                  <a
                    href={src}
                    download
                    className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm hover:bg-white/30 transition flex items-center gap-1"
                  >
                    <Download size={14} /> Download
                  </a>
                </div>
              </div>

              <button
                onClick={() =>
                  setSelectedIndex((prev) => ({ ...prev, [block.id]: i }))
                }
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition"
              >
                <span
                  className={`w-4 h-4 rounded-full border border-white transition ${
                    selected === i ? "bg-white" : "bg-transparent"
                  }`}
                ></span>
                I prefer this
              </button>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-[#1b1730] text-white/70 px-6 py-3 rounded-xl text-center max-w-xl text-sm mb-20">
          {block.type === "image"
            ? "Here are some samples of the requested image generation."
            : "Here are some sample logo designs generated for your query."}
        </div>
      </div>
    );
  };

  return (
    <div
      className="relative min-h-screen flex flex-col bg-black text-white overflow-x-hidden transition-all duration-300"
      style={{ marginLeft: sidebarWidth }}
    >
      {/* Default center text (only if no blocks yet) */}
      {blocks.length === 0 && (
        <div
          className="fixed top-1/2 left-1/2 -translate-y-1/2 text-center px-4 z-10"
          style={{ transform: "translateX(calc(-50% + 50px)) translateY(-50%)" }}
        >
          <h1 className="text-2xl md:text-3xl font-medium max-w-3xl mx-auto">
            Build What You Imagine! Powered by{" "}
            <a
              href="#"
              className="text-indigo-400 hover:text-indigo-300 transition"
            >
              Zebvo AI
            </a>
          </h1>
        </div>
      )}

      {/* Render all generated blocks in order */}
      <div className="flex flex-col items-center justify-start w-full">
        {blocks.map((block) => renderBlock(block))}
      </div>

      {/* Chatbox */}
      <div
        className="fixed bottom-6 left-1/2 z-50 px-4 transition-all duration-300 ml-20"
        style={{
          transform: "translateX(-50%)",
          width: `calc(100% - ${sidebarWidth}px)`,
          maxWidth: "100%",
          pointerEvents: "none",
        }}
      >
        <div
          className="mx-auto flex items-center bg-[#0b0018]/80 border border-[#6b5bff40] rounded-2xl px-5 py-3 w-full max-w-3xl backdrop-blur-md shadow-[0_0_20px_#5a4bff33]"
          style={{ pointerEvents: "auto" }}
        >
          <button className="flex items-center gap-1 text-sm text-[#b5aaff] bg-[#1a1038]/70 border border-[#6a58ff40] rounded-full px-3 py-1 hover:bg-[#241a4d] transition">
            📎 Attach
          </button>

          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Wanna build something?"
            className="flex-1 bg-transparent text-gray-300 placeholder-gray-500 px-3 focus:outline-none text-sm"
          />

          <button
            onClick={handleSend}
            className="flex items-center justify-center bg-gradient-to-r from-[#6c5aff] to-[#9c7fff] hover:from-[#7a68ff] hover:to-[#b296ff] text-white w-10 h-10 rounded-full transition shadow-[0_0_10px_#6c5aff33]"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
