import { Button } from "./ui/button";

interface AnswerOption {
  id: string;
  text: string;
  type: 'primary' | 'secondary' | 'gradient';
  path: string;
}

interface AnswerButtonsProps {
  options: AnswerOption[];
  onAnswerSelect: (path: string) => void;
}

export function AnswerButtons({ options, onAnswerSelect }: AnswerButtonsProps) {
  const getButtonClasses = (type: string) => {
    switch (type) {
      case 'primary':
        return "bg-[#007BFF] text-white hover:bg-[#0056b3] hover:scale-105 hover:shadow-[0_0_0_2px_#007BFF] transition-all duration-300 active:scale-110";
      case 'secondary':
        return "bg-transparent border-2 border-[#007BFF] text-[#333333] hover:bg-[#007BFF] hover:text-white hover:scale-105 hover:shadow-[0_0_0_2px_#007BFF] transition-all duration-300 active:scale-110";
      case 'gradient':
        return "bg-gradient-to-r from-[#007BFF] to-[#0056b3] text-white hover:scale-105 hover:shadow-[0_0_0_2px_#007BFF] transition-all duration-300 active:scale-110";
      default:
        return "";
    }
  };

  return (
    <div className="w-full h-[25vh] flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-4xl justify-center">
        {options.map((option) => (
          <Button
            key={option.id}
            className={`w-full md:w-[180px] h-[60px] rounded-[8px] text-[16px] font-medium ${getButtonClasses(option.type)}`}
            onClick={() => onAnswerSelect(option.path)}
          >
            {option.text}
          </Button>
        ))}
      </div>
    </div>
  );
}