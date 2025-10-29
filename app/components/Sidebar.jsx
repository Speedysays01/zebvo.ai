"use client";

import { createContext, useState, useContext } from "react";

// ----------------------------------
// Sidebar Context Setup
// ----------------------------------
const SidebarContext = createContext();
export const useSidebar = () => useContext(SidebarContext);

// ----------------------------------
// Sidebar Component
// ----------------------------------
export default function SidebarProvider({ children }) {
  const [open, setOpen] = useState(true);

  const navItems = [
    { key: "chat", label: "Chat (text)", icon: ChatIcon },
    { key: "image", label: "Image Gen", icon: PhotoIcon },
    { key: "video", label: "Video Gen", icon: VideoIcon },
    { key: "audio", label: "Audio Gen", icon: MicIcon },
    { key: "code", label: "Code Gen", icon: CodeIcon },
  ];

  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      <aside
        className={`h-screen sticky top-0 transition-all duration-300 ease-in-out
          ${open ? "w-64" : "w-16"}
          bg-black text-gray-200 border-r border-gray-800 
          z-20 relative`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-3 py-4">
            <div className="flex items-center gap-3">
              <div
                className={`flex items-center justify-center rounded-md font-bold text-white
                  ${open ? "w-10 h-10 bg-indigo-600" : "w-10 h-10 bg-indigo-600"}`}
              >
                Z
              </div>
              {open && (
                <div>
                  <div className="text-sm font-semibold">Zebvo AI</div>
                  <div className="text-xs text-indigo-200">prototype</div>
                </div>
              )}
            </div>

            <button
              aria-label={open ? "Collapse sidebar" : "Open sidebar"}
              onClick={() => setOpen((s) => !s)}
              className="p-1 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <ChevronIcon
                className={`h-5 w-5 transform transition-transform ${
                  open ? "" : "rotate-180"
                }`}
              />
            </button>
          </div>

          {/* Nav */}
          <nav className="mt-4 flex-1 overflow-auto px-1">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.key} className="px-1">
                    <a
                      href={`#${item.key}`}
                      className={`flex items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-900 transition-colors
                      ${open ? "justify-start" : "justify-center"}`}
                    >
                      <Icon />
                      {open && <span className="text-sm">{item.label}</span>}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="my-4 border-t border-gray-800" />

            {/* Placeholder content */}
            <div className="px-3">
              {open ? (
                <p className="text-xs text-gray-400">
                  “Unite AI tools in one space.”
                </p>
              ) : (
                <div className="text-center text-xs text-indigo-300 mt-6">
                  Zebvo
                </div>
              )}
            </div>
          </nav>

          {/* Footer */}
          <div className="px-3 py-4 border-t border-gray-800 bg-black">
            <div
              className={`flex items-center gap-3 ${
                open ? "" : "justify-center"
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-sm text-indigo-300">
                SM
              </div>
              {open && (
                <div className="flex-1">
                  <div className="text-sm">Surabhi</div>
                  <div className="text-xs text-gray-400">Logged in (demo)</div>
                </div>
              )}
              {open && (
                <button className="px-2 py-1 rounded-md text-sm bg-gray-900 hover:bg-gray-800">
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* The rest of the page (children) */}
      {children}
    </SidebarContext.Provider>
  );
}

// ----------------------------------
// ICONS (inline SVGs)
// ----------------------------------

function ChevronIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={props.className}
      width="20"
      height="20"
    >
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 9l6 6 6-6"
      />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      className="h-5 w-5 text-indigo-300"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhotoIcon() {
  return (
    <svg
      className="h-5 w-5 text-indigo-300"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="14"
        rx="2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 13l2-2 3 3 4-5 3 3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg
      className="h-5 w-5 text-indigo-300"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <rect
        x="2"
        y="6"
        width="15"
        height="12"
        rx="2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 7l-6 5 6 5V7z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg
      className="h-5 w-5 text-indigo-300"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M12 1v11"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 11a7 7 0 0 1-14 0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18v4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      className="h-5 w-5 text-indigo-300"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M16 18l6-6-6-6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 6L2 12l6 6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
