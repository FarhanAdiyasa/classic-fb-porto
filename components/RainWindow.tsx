import React from 'react';

const RainWindow: React.FC = () => {
  return (
    <div className="relative w-64 h-80 bg-slate-900 border-4 border-amber-900/50 rounded-lg overflow-hidden shadow-2xl">
      {/* Night Sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 to-slate-900"></div>
      
      {/* Moon */}
      <div className="absolute top-4 right-4 w-12 h-12 bg-amber-100 rounded-full blur-[2px] opacity-80 shadow-[0_0_20px_rgba(251,191,36,0.4)]"></div>

      {/* Rain Layers */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div 
            key={`rain-1-${i}`}
            className="absolute bg-blue-200 w-[1px] h-12 animate-rain"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 100}%`,
              animationDuration: `${0.5 + Math.random() * 0.5}s`,
              animationDelay: `${Math.random()}s`
            }}
          />
        ))}
      </div>

      {/* Window Frame */}
      <div className="absolute inset-0 border-t-[8px] border-b-[8px] border-amber-900/60 pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 right-0 h-2 bg-amber-900/60 pointer-events-none"></div>
      <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-amber-900/60 pointer-events-none"></div>

      {/* Reflection */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default RainWindow;