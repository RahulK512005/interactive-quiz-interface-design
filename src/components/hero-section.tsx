import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroSectionProps {
  onContinueQuiz: () => void;
}

export function HeroSection({ onContinueQuiz }: HeroSectionProps) {
  return (
    <section className="relative w-full h-[50vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMHdvcmtzcGFjZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4MzA1NzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Data visualization workspace"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF] via-[rgba(0,123,255,0.8)] to-[#1A202C] opacity-70"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 animate-hero-fade-in">
        <div className="flex flex-col md:flex-row items-center gap-1 mb-6">
          <div className="flex items-center gap-1">
            <h1 className="text-[32px] md:text-[64px] font-bold text-white leading-none">
              v0 App
            </h1>
            <span className="text-[16px] md:text-[24px] text-[#FF9800] leading-none">❤️</span>
          </div>
          <h1 className="text-[32px] md:text-[64px] font-bold text-white leading-none md:ml-2">
            - Data Career Path Quiz
          </h1>
        </div>
        
        <p className="text-[18px] md:text-[28px] text-white mb-8 max-w-4xl leading-relaxed px-4">
          Discover which data career suits you best: Data Analyst, Data Scientist, or AI Engineer
        </p>
        
        <Button
          onClick={onContinueQuiz}
          className="w-[200px] h-[60px] bg-[#007BFF] text-white text-[20px] font-bold rounded-lg hover:scale-105 hover:border-2 hover:border-[#FF9800] transition-all duration-300 animate-pulse-hover"
        >
          Continue Quiz
        </Button>
      </div>
    </section>
  );
}