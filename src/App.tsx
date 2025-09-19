import { HeroSection } from "./components/hero-section";
import { RoleCards } from "./components/role-cards";
import { LandingFooter } from "./components/landing-footer";

export default function App() {
  const handleContinueQuiz = () => {
    const baseUrl = "https://v0-job-role-analysis-vert.vercel.app/";
    const urlWithParams = `${baseUrl}?path=experienced`;
    window.open(urlWithParams, '_blank');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <HeroSection onContinueQuiz={handleContinueQuiz} />
      <RoleCards />
      <LandingFooter />
    </div>
  );
}