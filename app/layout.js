import "./globals.css";
import Sidebar from "./components/Sidebar";
import MouseFollower from "./components/MouseFollower";

export const metadata = {
  title: "Zebvo AI",
  description: "Simulated AI platform frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <div className="flex min-h-screen">
          {/* Sidebar on the left */}
          <Sidebar />

          {/* Main content area */}
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
