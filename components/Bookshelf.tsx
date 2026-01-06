import React from 'react';
import { BookData } from '../types';
import { BOOKS } from '../constants';

interface BookshelfProps {
  onBookClick: (book: BookData) => void;
}

const Bookshelf: React.FC<BookshelfProps> = ({ onBookClick }) => {
  return (
    <div className="relative w-[500px] h-[400px] flex flex-col justify-end">
      {/* Shelf Structure */}
      <div className="absolute inset-0 bg-amber-950 rounded-lg shadow-xl border border-amber-900/50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-30 mix-blend-overlay"></div>
      </div>

      {/* Top Shelf: Profile & Experience (Indices 0, 1) */}
      <div className="relative h-[130px] border-b-[12px] border-amber-900 flex items-end px-6 space-x-1">
        {BOOKS.slice(0, 2).map((book) => (
          <Book key={book.id} data={book} onClick={() => onBookClick(book)} />
        ))}
        {/* Decorative non-interactive books */}
        <div className="w-6 h-24 bg-red-900 rounded-sm transform -rotate-3 ml-2 shadow-sm"></div>
        <div className="w-8 h-28 bg-blue-900 rounded-sm transform rotate-2 shadow-sm"></div>
        <div className="absolute right-10 bottom-0 w-12 h-20 bg-green-900/50 rounded-sm"></div>
      </div>

      {/* Middle Shelf: Edu & Projects (Indices 2, 3) */}
      <div className="relative h-[130px] border-b-[12px] border-amber-900 flex items-end px-6 space-x-1 justify-center">
        <div className="w-5 h-26 bg-slate-700 rounded-sm"></div>
        {BOOKS.slice(2, 4).map((book) => (
          <Book key={book.id} data={book} onClick={() => onBookClick(book)} />
        ))}
        <div className="w-16 h-20 bg-yellow-900/40 rounded-sm transform rotate-6 origin-bottom-left"></div>
      </div>

      {/* Bottom Shelf: Contact (Index 4) & Decor */}
      <div className="relative h-[110px] flex items-end px-8 space-x-4">
        {/* Improved Plant */}
        <div className="relative mb-1 mr-2">
          {/* Pot */}
          <div className="w-10 h-10 bg-stone-700 rounded-b-lg shadow-lg relative z-10 border-t-4 border-stone-800"></div>
          {/* Leaves */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 pointer-events-none">
            {/* Leaf 1 */}
            <div className="absolute bottom-0 left-1/2 w-6 h-12 bg-emerald-700 rounded-full rounded-bl-none origin-bottom-left -rotate-[30deg] border-r border-black/10"></div>
            {/* Leaf 2 */}
            <div className="absolute bottom-0 right-1/2 w-5 h-10 bg-emerald-600 rounded-full rounded-br-none origin-bottom-right rotate-[30deg] border-l border-black/10"></div>
            {/* Leaf 3 (Center) */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-14 bg-emerald-500 rounded-full border-x border-black/10"></div>
          </div>
        </div>
        {BOOKS[4] && (
          <div className="mb-0">
            <Book data={BOOKS[4]} onClick={() => onBookClick(BOOKS[4])} />
          </div>
        )}

        <div className="w-8 h-20 bg-stone-800 rounded-sm transform rotate-12 origin-bottom-left opacity-60"></div>
      </div>
    </div>
  );
};

const Book: React.FC<{ data: BookData; onClick: () => void }> = ({ data, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        ${data.color} 
        w-10 h-28 
        rounded-sm 
        border-l border-white/10 
        cursor-pointer 
        transition-all duration-300 
        hover:-translate-y-4 hover:shadow-lg hover:brightness-110
        relative group
        flex items-center justify-center
      `}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className={`text-[11px] font-bold ${data.textColor || 'text-white/80'} rotate-90 whitespace-nowrap tracking-widest uppercase font-sans drop-shadow-md`}>
          {data.title}
        </span>
      </div>
    </div>
  );
};

export default Bookshelf;