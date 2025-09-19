import { Card } from "./ui/card";
import { BarChart3, Brain, Cpu } from "lucide-react";

interface RoleCard {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const roleData: RoleCard[] = [
  {
    id: "data-analyst",
    title: "Data Analyst",
    subtitle: "Analyze data and generate actionable insights with advanced tools.",
    icon: <BarChart3 className="w-6 h-6 text-[#007BFF]" />
  },
  {
    id: "data-scientist", 
    title: "Data Scientist",
    subtitle: "Build predictive models and solve complex data challenges.",
    icon: <Brain className="w-6 h-6 text-[#007BFF]" />
  },
  {
    id: "ai-engineer",
    title: "AI Engineer", 
    subtitle: "Design and deploy intelligent AI systems for real-world applications.",
    icon: <Cpu className="w-6 h-6 text-[#007BFF]" />
  }
];

export function RoleCards() {
  return (
    <section className="w-full h-[40vh] bg-gradient-to-b from-[#E3F2FD] to-white flex items-center justify-center px-4">
      <div className="flex flex-col space-y-4 w-full max-w-md">
        {roleData.map((role, index) => (
          <Card
            key={role.id}
            className="w-[300px] h-[200px] bg-[#FFFFFF80] shadow-[0_4px_12px_rgba(0,0,0,0.2)] rounded-[12px] p-5 hover:scale-103 hover:shadow-[0_0_0_2px_#007BFF] transition-all duration-300 cursor-pointer animate-slide-up mx-auto"
            style={{
              animationDelay: `${index * 0.2}s`
            }}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                {role.icon}
                <h3 className="text-[22px] font-bold text-[#1A202C]">
                  {role.title}
                </h3>
              </div>
              
              <p className="text-[16px] text-[#4A5568] leading-relaxed flex-1">
                {role.subtitle}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}