"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Edit2, Copy, Eye, Download } from "lucide-react";

export default function HeroSection({ isSidebarOpen }) {
  const sidebarWidth = isSidebarOpen ? 260 : 64;
  const [userInput, setUserInput] = useState("");
  const [blocks, setBlocks] = useState([]);
  const [selected, setSelected] = useState({});

  const handleSend = () => {
    if (!userInput.trim()) return;
    const input = userInput.toLowerCase();

    // Image generation block
    if (input.includes("image")) {
      const newBlock = {
        type: "image",
        images: [
          "https://images.unsplash.com/photo-1602872029427-9b3ef2b1c7a8?auto=format&fit=crop&w=400&q=80",
          "https://images.unsplash.com/photo-1552410260-0fd9b39b4e8e?auto=format&fit=crop&w=400&q=80",
          "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=400&q=80",
        ],
        title: "Create a lion image.",
      };
      setBlocks((prev) => [...prev, newBlock]);
    }

    // Logo generation block
    else if (input.includes("logo")) {
      const newBlock = {
        type: "logo",
        images: [
          "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=400&q=80",
          "https://images.unsplash.com/photo-1602524818603-b8c05e9a9cc4?auto=format&fit=crop&w=400&q=80",
          "https://images.unsplash.com/photo-1612831200793-1a9c6b8b3a9f?auto=format&fit=crop&w=400&q=80",
        ],
        title: "Generate brand logo concepts.",
      };
      setBlocks((prev) => [...prev, newBlock]);
    }

    // Text generation block
    else if (input.includes("text")) {
      const newBlock = {
        type: "text",
        question: "Why is Zebvo.AI the best?",
        answer: `Zebvo.AI stands out as a next generation creative intelligence platform built to bridge human imagination and artificial precision. It empowers designers, developers, and innovators by delivering seamless workflows.From concept visualization to interactive prototyping! all powered by deeply adaptive machine learning models. Unlike traditional AI tools that limit users to templates or rigid outputs, Zebvo.AI learns and evolves with your style, helping you co-create rather than just generate. Its real time collaboration, dynamic rendering, and multimodal capabilities make it an all in one hub for creators looking to accelerate projects without compromising originality. Zebvo.AI isn’t just a tool! it’s your creative partner, transforming abstract ideas into pixel-perfect realities.`,
      };
      setBlocks((prev) => [...prev, newBlock]);
    }

    setUserInput("");
  };

  return (
    <div
      className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden transition-all duration-300"
      style={{ marginLeft: sidebarWidth }}
    >
      {/* ===== Centered Intro Text ===== */}
      {blocks.length === 0 && (
        <div className="fixed top-1/2 left-[calc(50%+50px)] -translate-x-1/2 -translate-y-1/2 text-center px-4 z-10">
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

      {/* ===== Generated Blocks ===== */}
      <div className="flex flex-col items-center justify-start space-y-16 py-20">
        {blocks.map((block, index) => (
          <motion.div
            key={index}
            className="min-h-[80vh] bg-[#0b0b14] flex flex-col items-center justify-center text-white p-6 space-y-6 rounded-2xl w-full"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* IMAGE / LOGO BLOCKS */}
            {(block.type === "image" || block.type === "logo") && (
              <>
                {/* Caption + Icons */}
                <div className="w-full flex flex-col items-end space-y-2">
                  <span className="text-sm bg-[#2a2444] text-white/80 px-3 py-1 rounded-full">
                    {block.title}
                  </span>
                  <div className="flex gap-3 text-gray-400 text-sm">
                    <Edit2 size={16} className="cursor-pointer hover:text-white" />
                    <Copy size={16} className="cursor-pointer hover:text-white" />
                  </div>
                </div>

                {/* Images */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                  {block.images.map((src, i) => (
                    <motion.div
                      key={i}
                      className="relative group"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.2 }}
                    >
                      <img
                        src={src}
                        alt={`Generated ${i}`}
                        className="w-64 h-64 object-cover rounded-xl shadow-lg"
                      />
                      {/* Hover buttons */}
                      <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/50 opacity-0 group-hover:opacity-100 transition">
                        <button className="px-3 py-1 text-xs bg-white/10 border border-white/20 rounded-lg hover:bg-white/20">
                          <Eye size={14} />
                        </button>
                        <button
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = src;
                            link.download = `zebvo-${i}.jpg`;
                            link.click();
                          }}
                          className="px-3 py-1 text-xs bg-white/10 border border-white/20 rounded-lg hover:bg-white/20"
                        >
                          <Download size={14} />
                        </button>
                      </div>

                      {/* I prefer this */}
                      <div
                        onClick={() =>
                          setSelected((prev) => ({
                            ...prev,
                            [index]: prev[index] === i ? null : i,
                          }))
                        }
                        className="flex items-center justify-center mt-3 cursor-pointer gap-2 text-sm text-gray-400 hover:text-white transition"
                      >
                        <div
                          className={`w-4 h-4 border rounded-full flex items-center justify-center ${
                            selected[index] === i
                              ? "bg-white border-white"
                              : "border-gray-500"
                          }`}
                        ></div>
                        <span>I prefer this</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="bg-[#1b1730] text-white/70 px-6 py-3 rounded-xl text-center max-w-xl text-sm">
                  Here are some samples of the requested {block.type} generation.
                </div>
              </>
            )}




{/* TEXT BLOCK */}
{block.type === "text" && (
  <motion.div
    className="min-h-screen bg-[#0b0b14] flex flex-col items-center justify-center text-white p-6 space-y-6"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    {/* Top right caption */}
    <div className="w-full flex flex-col items-end space-y-2">
      <span className="text-sm bg-[#2a2444] text-white/80 px-3 py-1 rounded-full">
        {block.question}
      </span>

      {/* Icons below question */}
      <div className="flex gap-3 text-gray-400 text-sm">
        <button className="flex items-center gap-1 hover:text-white transition">
          <Edit2 size={16} /> Edit
        </button>
        <button
          className="flex items-center gap-1 hover:text-white transition"
          onClick={() => navigator.clipboard.writeText(block.question)}
        >
          <Copy size={16} /> Copy
        </button>
      </div>
    </div>

    {/* Answer text box */}
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
  </motion.div>
)}


          </motion.div>
        ))}
      </div>

      {/* ===== Chatbox (fixed bottom) ===== */}
      <div
        className="fixed bottom-6 left-1/2 z-50 px-4 transition-all duration-300"
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
