
import React from 'react';

interface DeveloperCharacterProps {
   isTyping: boolean;
   onLaptopClick: () => void;
}

const DeveloperCharacter: React.FC<DeveloperCharacterProps> = ({ isTyping, onLaptopClick }) => {
   return (
      <div className="relative w-[500px] h-[400px]">
         {/* Container sized to fit desk and chair */}

         {/* --- FLOOR SHADOWS (Grounding) --- */}
         <div className="absolute bottom-[2px] left-20 w-4 h-2 bg-black/40 rounded-full blur-[2px]"></div>
         <div className="absolute bottom-[2px] right-20 w-4 h-2 bg-black/40 rounded-full blur-[2px]"></div>
         <div className="absolute bottom-[2px] left-16 w-5 h-2 bg-black/50 rounded-full blur-[2px]"></div>
         <div className="absolute bottom-[2px] right-16 w-5 h-2 bg-black/50 rounded-full blur-[2px]"></div>
         <div className="absolute bottom-[2px] left-[200px] w-24 h-6 bg-black/30 rounded-full blur-[4px]"></div>

         {/* --- BACKGROUND ELEMENTS --- */}

         {/* Chair (Behind Desk) */}
         <div className="absolute bottom-[140px] left-[180px] w-32 h-48 opacity-90">
            {/* Backrest */}
            <div className="absolute top-0 left-0 w-32 h-36 bg-slate-800 rounded-t-2xl rounded-b-lg border-4 border-slate-700 shadow-xl">
               <div className="absolute top-6 left-4 right-4 h-2 bg-black/20 rounded-full"></div>
               <div className="absolute top-12 left-4 right-4 h-2 bg-black/20 rounded-full"></div>
            </div>
            {/* Neck Rest */}
            <div className="absolute -top-6 left-8 right-8 h-8 bg-slate-800 rounded-lg border border-slate-700 shadow-md"></div>
            {/* Armrest Left (hint) */}
            <div className="absolute top-24 -left-4 w-4 h-16 bg-slate-900 rounded-l-md"></div>
            {/* Armrest Right (hint) */}
            <div className="absolute top-24 -right-4 w-4 h-16 bg-slate-900 rounded-r-md"></div>
            {/* Seat (Edge visible) */}
            <div className="absolute bottom-8 left-0 w-32 h-10 bg-slate-900 rounded-b-xl shadow-inner"></div>
            {/* Stand (hint) */}
            <div className="absolute bottom-0 left-14 w-4 h-12 bg-slate-600"></div>
            <div className="absolute bottom-0 left-10 w-12 h-2 bg-slate-700 rounded-full"></div>
         </div>

         {/* --- DESK STRUCTURE --- */}

         {/* Desk Legs (Back) */}
         <div className="absolute bottom-0 left-20 w-4 h-32 bg-amber-900/80"></div>
         <div className="absolute bottom-0 right-20 w-4 h-32 bg-amber-900/80"></div>

         {/* Desk Top Surface */}
         <div className="absolute bottom-[120px] left-0 w-full h-8 bg-amber-800 rounded-sm shadow-2xl z-10 flex items-center border-t border-amber-700/50">
            {/* Wood grain texture hint */}
            <div className="w-full h-full opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_12px)]"></div>
         </div>

         {/* Desk Legs (Front - darker for depth) */}
         <div className="absolute bottom-0 left-16 w-5 h-32 bg-amber-950 shadow-lg z-20"></div>
         <div className="absolute bottom-0 right-16 w-5 h-32 bg-amber-950 shadow-lg z-20"></div>

         {/* --- ON DESK ITEMS --- */}

         {/* Desk Mat */}
         <div className="absolute bottom-[128px] left-[100px] right-[100px] h-2 bg-slate-800 rounded-sm z-10 transform skew-x-12 opacity-80 shadow-sm"></div>

         {/* Desk Lamp */}
         <div className="absolute bottom-[130px] left-10 z-20 pointer-events-none">
            {/* Base */}
            <div className="w-16 h-4 bg-slate-700 rounded-t-lg shadow-md"></div>
            {/* Stand */}
            <div className="absolute bottom-2 left-6 w-2 h-24 bg-slate-600 origin-bottom transform -rotate-12"></div>
            <div className="absolute bottom-[80px] left-[10px] w-2 h-20 bg-slate-600 origin-bottom transform rotate-45"></div>
            {/* Head */}
            <div className="absolute bottom-[140px] left-[60px] w-20 h-16 bg-slate-700 rounded-t-full transform rotate-[110deg] origin-center shadow-lg flex justify-center items-end overflow-hidden">
               {/* Bulb */}
               <div className="w-8 h-4 bg-yellow-100 rounded-t-full mb-1 animate-pulse shadow-[0_0_20px_rgba(253,224,71,0.8)]"></div>
            </div>
            {/* Light Cone (Gradient) */}
            <div className="absolute top-[-30px] left-[100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(253,224,71,0.1)_0%,transparent_60%)] pointer-events-none mix-blend-screen z-50"></div>
         </div>

         {/* Stack of Books/Notebook */}
         <div className="absolute bottom-[128px] right-24 z-20 transform rotate-3">
            <div className="w-24 h-4 bg-blue-900 rounded-sm mb-[1px] border-l-2 border-white/10"></div>
            <div className="w-26 h-3 bg-white rounded-sm mb-[1px] shadow-sm ml-[-5px]"></div>
            <div className="w-24 h-4 bg-green-900 rounded-sm border-l-2 border-white/10"></div>
         </div>


         {/* Coffee Cup & Steam */}
         <div className="absolute bottom-[130px] left-[120px] z-30 transform scale-90">
            <div className="w-10 h-12 bg-gray-200 rounded-b-lg rounded-tr-none relative shadow-md flex items-center justify-center border-t border-white/50">
               <div className="w-8 h-10 bg-slate-100 rounded-b-md opacity-50"></div>
               <div className="absolute top-2 -right-4 w-5 h-7 border-4 border-gray-200 rounded-r-lg shadow-sm"></div>
               <div className="absolute top-1 left-1 right-1 h-2 bg-amber-900/90 rounded-full"></div>
            </div>
            {/* Steam particles */}
            <div className="absolute -top-4 left-2 w-2 h-2 bg-white/40 rounded-full blur-[2px] animate-steam" style={{ animationDelay: '0s' }}></div>
            <div className="absolute -top-6 left-4 w-2 h-3 bg-white/30 rounded-full blur-[2px] animate-steam" style={{ animationDelay: '0.8s' }}></div>
         </div>

         {/* Headphones - Fixed Position to sit ON desk */}
         {/* Desk top is at ~152px from bottom. Container bottom-[152px] puts it right on top. */}
         <div className="absolute bottom-[152px] left-[180px] z-30 transform -rotate-12 scale-75 opacity-90 w-24 h-20 pointer-events-none">
            {/* Headband */}
            <div className="w-24 h-16 border-t-[6px] border-gray-800 rounded-t-full absolute top-0 left-0"></div>
            {/* Left Cup */}
            <div className="absolute top-10 -left-2 w-12 h-12 bg-gray-300 rounded-full shadow-md border-b-4 border-gray-400 flex items-center justify-center">
               <div className="w-8 h-8 bg-gray-800 rounded-full opacity-90"></div>
            </div>
            {/* Right Cup */}
            <div className="absolute top-10 right-[-2px] w-12 h-12 bg-gray-300 rounded-full shadow-md border-b-4 border-gray-400 flex items-center justify-center">
               <div className="w-8 h-8 bg-gray-800 rounded-full opacity-90"></div>
            </div>
         </div>

         {/* Laptop (Interactive Trigger) */}
         <div
            onClick={onLaptopClick}
            className="absolute bottom-[135px] left-[260px] w-48 h-32 z-40 cursor-pointer group transition-transform hover:scale-105"
         >
            {/* Screen */}
            <div className="absolute bottom-2 left-4 w-40 h-28 bg-gray-800 rounded-t-lg transform skew-x-3 origin-bottom-left shadow-2xl border-4 border-gray-700 overflow-hidden">
               {/* Screen Glow Content */}
               <div className="w-full h-full bg-slate-900 p-2 flex flex-col relative items-center justify-center text-center">
                  {/* Reflection */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/5 to-transparent z-10 pointer-events-none"></div>

                  <div className="z-20 flex flex-col items-center space-y-1">
                     <div className="text-[8px] text-blue-400 font-bold tracking-wider uppercase leading-tight">
                        Farhan Adiyasa
                     </div>
                     <div className="h-[1px] w-12 bg-slate-700 my-0.5"></div>
                     <div className="text-[6px] text-slate-400 font-mono tracking-widest uppercase">
                        Project Showcase
                     </div>

                     {/* Animated cursor/indicator */}
                     <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                  </div>
               </div>

               {/* Hover tooltip */}
               <div className="absolute inset-0 bg-black/60 items-center justify-center flex opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <span className="text-[10px] text-white font-mono bg-black/80 px-2 py-1 rounded border border-green-500/30">View Projects</span>
               </div>
            </div>

            {/* Keyboard Base */}
            <div className="absolute bottom-0 left-0 w-48 h-3 bg-gray-400 rounded-b-sm transform skew-x-6 border-b-2 border-gray-500 shadow-md"></div>
         </div>

      </div>
   );
};

export default DeveloperCharacter;
