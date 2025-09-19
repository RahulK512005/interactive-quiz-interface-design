export function LandingFooter() {
  return (
    <footer className="w-full h-[10vh] bg-white border-t border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center gap-1">
        <span className="text-[14px] text-[#4A5568]">Built with</span>
        <span className="text-[14px] text-[#FF9800]">❤️</span>
      </div>
      
      <button className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
        <span className="text-[12px]">×</span>
      </button>
    </footer>
  );
}