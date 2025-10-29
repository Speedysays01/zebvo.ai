import ChatInterface from "./components/ChatInterface";
import HeroSection from "./components/HeroSection";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <HeroSection/>
      <ChatInterface />
    </main>
  );
}
