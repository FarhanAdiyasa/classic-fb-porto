import React from 'react';
import { X, ExternalLink, Github, Folder, Terminal, Cpu } from 'lucide-react';
import { PROJECTS_DATA } from '../constants';

interface ProjectShowcaseProps {
    onClose: () => void;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onClose }) => {
    return (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-pop-in p-4 font-mono">
            <div className="w-full max-w-5xl h-[80vh] bg-[#1e1e2e] border-2 border-slate-600 rounded-lg shadow-2xl flex flex-col overflow-hidden relative">

                {/* Retro Window Header */}
                <div className="bg-slate-800 p-2 border-b-2 border-slate-600 flex justify-between items-center select-none">
                    <div className="flex items-center space-x-2 px-2">
                        <div className="w-3 h-3 rounded-full bg-red-500 border border-red-700"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 border border-yellow-700"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500 border border-green-700"></div>
                        <span className="ml-4 text-slate-300 font-bold tracking-wider text-sm">PROJECT_EXPLORER.EXE</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-white transition-colors px-2"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Main Content Area - Split View */}
                <div className="flex-1 flex overflow-hidden bg-[#0f0f16]">

                    {/* Sidebar / File Tree */}
                    <div className="w-64 bg-[#1a1a24] border-r border-slate-700 p-4 hidden md:flex flex-col">
                        <div className="text-xs text-slate-500 mb-4 uppercase tracking-widest">Directory</div>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-yellow-500 font-bold bg-slate-800/50 p-2 rounded cursor-pointer">
                                <Folder size={16} />
                                <span>/projects</span>
                            </div>
                            <div className="flex items-center space-x-2 text-slate-500 p-2 pl-6">
                                <Terminal size={14} />
                                <span>/scripts</span>
                            </div>
                            <div className="flex items-center space-x-2 text-slate-500 p-2 pl-6">
                                <Cpu size={14} />
                                <span>/assets</span>
                            </div>
                        </div>

                        <div className="mt-auto text-[10px] text-slate-600">
                            <p>Total Files: {PROJECTS_DATA.length}</p>
                            <p>Free Space: 420MB</p>
                        </div>
                    </div>

                    {/* Project Grid */}
                    <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {PROJECTS_DATA.map((project) => (
                                <div
                                    key={project.id}
                                    className="group relative bg-[#1e1e2e] border border-slate-700 hover:border-green-500/50 transition-all duration-300 flex flex-col rounded-sm overflow-hidden"
                                >
                                    {/* Retro Card Header */}
                                    <div className="bg-slate-800/50 p-2 border-b border-slate-700 flex justify-between items-center group-hover:bg-slate-800 transition-colors">
                                        <span className="text-green-400 font-bold text-lg tracking-wide">
                                            {project.title}
                                        </span>
                                        <span className="text-[10px] text-slate-500 font-mono border border-slate-600 px-1 rounded">
                                            ID: {project.id.toUpperCase()}
                                        </span>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-4 flex-1 flex flex-col">
                                        <p className="text-slate-300 text-lg leading-relaxed mb-4 font-medium">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack Tags */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tech.map(t => (
                                                <span key={t} className="px-2 py-1 bg-slate-900 text-yellow-200/80 text-sm border border-slate-700 rounded-sm font-mono">
                                                    {'>'} {t}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="mt-auto flex items-center gap-3 pt-4 border-t border-slate-800 border-dashed">
                                            {project.links?.github && (
                                                <a
                                                    href={project.links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-bold transition-colors border border-slate-600 rounded-sm"
                                                >
                                                    <Github size={16} />
                                                    <span>SOURCE</span>
                                                </a>
                                            )}
                                            {project.links?.demo && (
                                                <a
                                                    href={project.links.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-green-900/20 hover:bg-green-900/30 text-green-400 text-sm font-bold transition-colors border border-green-500/30 rounded-sm"
                                                >
                                                    <ExternalLink size={16} />
                                                    <span>LAUNCH</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Decorative Corner */}
                                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Status Bar */}
                <div className="bg-slate-800 p-1 px-3 border-t border-slate-600 flex justify-between items-center text-[10px] text-slate-400 font-mono">
                    <span>STATUS: ONLINE</span>
                    <span>MODE: READ_ONLY</span>
                    <span>V1.0.4</span>
                </div>
            </div>
        </div>
    );
};

export default ProjectShowcase;
