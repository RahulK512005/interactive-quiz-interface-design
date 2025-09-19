import { Card } from "./ui/card";

interface QuestionCardProps {
  question: string;
}

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <div className="w-full h-[60vh] flex items-center justify-center px-4">
      <Card className="w-full max-w-[600px] h-[300px] bg-white border border-[#B3E5FC] shadow-[0_4px_12px_rgba(0,0,0,0.1)] rounded-[12px] flex items-center justify-center p-8 animate-fade-in">
        <div className="text-center">
          <h2 className="text-[24px] font-bold text-[#333333] leading-relaxed">
            {question}
          </h2>
        </div>
      </Card>
    </div>
  );
}