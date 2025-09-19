import { Progress } from "./ui/progress";

interface QuizHeaderProps {
  currentQuestion: number;
  totalQuestions: number;
  progressValue: number;
}

export function QuizHeader({ currentQuestion, totalQuestions, progressValue }: QuizHeaderProps) {
  return (
    <header className="w-full h-[15vh] flex flex-col items-center justify-center space-y-4 px-4">
      <div className="flex items-center gap-1">
        <h1 className="text-[32px] font-bold text-[#007BFF] text-center">
          v0 App
        </h1>
        <span className="text-[16px] text-[#28A745] leading-none">❤️</span>
        <h1 className="text-[32px] font-bold text-[#007BFF] text-center ml-1">
          - Data Career Path Quiz
        </h1>
      </div>
      
      <div className="flex flex-col items-center space-y-2">
        <div className="w-[200px] h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#007BFF] rounded-full transition-all duration-1000 ease-in-out"
            style={{ width: `${progressValue}%` }}
          />
        </div>
        <p className="text-[16px] text-[#333333]">
          Question {currentQuestion} of {totalQuestions} {progressValue}% Complete
        </p>
      </div>
    </header>
  );
}