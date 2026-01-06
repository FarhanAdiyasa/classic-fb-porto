
import React, { useState } from 'react';
import { PROJECTS_DATA, EXPERIENCES, EDUCATION, AWARDS, TECH_COLORS } from './constants';
import { Download, Github, Mail, Linkedin, ExternalLink, Star } from 'lucide-react';

const App: React.FC = () => {
   const [activeTab, setActiveTab] = useState<'home' | 'profile' | 'projects'>('home');

   return (
      <div className="min-h-screen bg-white font-[Tahoma,Verdana,Segoe,sans-serif] text-[11px] text-[#333]">

         {/* --- BLUE HEADER BAR --- */}
         <div className="bg-[#3b5998] min-h-[30px] flex flex-col md:flex-row items-center justify-between px-2 w-full mx-auto border-b border-[#3b5998] sticky top-0 z-50 shadow-sm py-2 md:py-0">
            <div className="flex items-center space-x-2 pl-[2%] md:pl-[5%] w-full md:w-auto justify-center md:justify-start mb-2 md:mb-0">
               <div
                  onClick={() => setActiveTab('home')}
                  className="text-white font-bold px-1 text-[18px] md:text-[22px] tracking-tight leading-none cursor-pointer hover:opacity-90 transition-opacity whitespace-nowrap"
                  style={{ fontFamily: 'Tahoma, Verdana, sans-serif' }}
               >
                  farhan adiyasa profile!
               </div>
            </div>
            <div className="flex space-x-3 md:space-x-5 text-white font-bold pr-[2%] md:pr-[5%] text-[11px] md:text-[12px] w-full md:w-auto justify-center md:justify-end">
               <span onClick={() => setActiveTab('home')} className={`cursor-pointer hover:text-[#d8dfea] ${activeTab === 'home' ? 'text-white' : 'text-[#98a9ca]'}`}>home</span>
               <span onClick={() => setActiveTab('profile')} className={`cursor-pointer hover:text-[#d8dfea] ${activeTab === 'profile' ? 'text-white' : 'text-[#98a9ca]'}`}>profile</span>
               <span onClick={() => setActiveTab('projects')} className={`cursor-pointer hover:text-[#d8dfea] ${activeTab === 'projects' ? 'text-white' : 'text-[#98a9ca]'}`}>projects</span>
            </div>
         </div>

         {/* --- MAIN CONTAINER --- */}
         <div className="w-[95%] md:w-[90%] mx-auto flex flex-col md:flex-row gap-3 text-left mt-4">

            {/* --- LEFT SIDEBAR (Consistent) --- */}
            <div className="w-full md:w-[180px] shrink-0 flex flex-col gap-3">

               {/* Profile Pic */}
               <div>
                  <div className="mb-2 text-center hidden md:block">
                     <span
                        onClick={() => setActiveTab('projects')}
                        className="text-[#3b5998] font-bold text-[11px] hover:underline cursor-pointer"
                     >
                        View Portfolio Gallery
                     </span>
                  </div>
                  <div className="flex md:block gap-3 items-center md:items-start">
                     <div className="border border-[#ccc] p-1 bg-white inline-block w-[80px] md:w-full shrink-0">
                        <img src="https://github.com/FarhanAdiyasa.png" className="w-full h-auto block grayscale hover:grayscale-0 transition-all duration-500" />
                     </div>

                     {/* Actions */}
                     <div className="mt-0 md:mt-2 text-left space-y-1 pl-1 md:border-b border-[#d8dfea] pb-2 flex-1 md:flex-none">
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-[#3b5998] cursor-pointer hover:underline flex items-center">
                           <Download size={10} className="mr-1" /> Download CV
                        </a>
                        <a href="https://github.com/FarhanAdiyasa" target="_blank" rel="noopener noreferrer" className="text-[#3b5998] cursor-pointer hover:underline flex items-center">
                           <Github size={10} className="mr-1" /> View Github
                        </a>
                        <a href="mailto:adiyasaa56@gmail.com" className="text-[#3b5998] cursor-pointer hover:underline flex items-center">
                           <Mail size={10} className="mr-1" /> Send Email
                        </a>
                     </div>
                  </div>
               </div>

               {/* Tech Info & Stack */}
               <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                  {/* Tech Info */}
                  <div>
                     <div className="text-[#3b5998] font-bold mb-1">Information</div>
                     <div className="text-[10px] space-y-1 text-gray-600">
                        <div><span className="text-gray-400">Location:</span><br />Jakarta, Indonesia</div>
                        <div><span className="text-gray-400">Position:</span><br />Fullstack Dev</div>
                     </div>
                  </div>

                  {/* Tech Stack Grid */}
                  <div>
                     <div className="text-[#3b5998] font-bold mb-1">Tech Stack</div>
                     <div className="grid grid-cols-3 md:grid-cols-2 gap-1">
                        {['React', 'Laravel', 'Java', 'NextJS', 'Spring', 'Tailwind'].map((tech) => (
                           <div key={tech} className="bg-[#f7f7f7] border border-[#ccc] text-center py-1 text-[9px] font-bold text-[#555]">
                              {tech}
                           </div>
                        ))}
                     </div>
                     <div className="text-right mt-1 text-[9px] text-[#3b5998] hover:underline cursor-pointer">View All</div>
                  </div>
               </div>

            </div>

            {/* --- RIGHT CONTENT AREA (Dynamic) --- */}
            <div className="flex-1 min-w-0">

               {/* Header Area */}
               <div className="mb-3 border-b border-[#ccc] pb-2 text-center md:text-left">
                  <h1 className="text-[22px] font-bold text-[#333] mb-0 leading-none">Farhan Adiyasa</h1>
                  <div className="text-gray-500 text-[11px] mt-1">
                     Fullstack Developer • AI Enthusiast • Clean Architecture Advocate
                  </div>
               </div>

               {/* === TAB CONTENT: HOME (BASIC INFO) === */}
               {activeTab === 'home' && (
                  <div className="space-y-4">
                     {/* Basic Info */}
                     <div className="bg-[#f7f7f7] border border-[#ccc] p-2">
                        <div className="font-bold text-[#333] border-b border-[#ddd] pb-1 mb-2">Basic Information</div>
                        <div className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-y-2 md:gap-y-1">
                           <div className="text-gray-500 md:text-right pr-4 font-bold">About Me:</div>
                           <div className="mb-2 md:mb-0">Passionate and adaptable software developer with expertise in full-stack development. I deliver efficiency gains and create hackathon-winning AI solutions.</div>
                           <div className="text-gray-500 md:text-right pr-4 font-bold">Email:</div>
                           <div className="text-[#3b5998] mb-1 md:mb-0">adiyasaa56@gmail.com</div>
                           <div className="text-gray-500 md:text-right pr-4 font-bold">Website:</div>
                           <a href="https://farhan-adiyasa.site" target="_blank" rel="noopener noreferrer" className="text-[#3b5998] hover:underline cursor-pointer">farhan-adiyasa.site</a>
                        </div>
                     </div>

                     <div className="bg-white p-2 border border-[#fff]">
                        <div className="text-[#3b5998] font-bold mb-1">Intro</div>
                        <p className="leading-relaxed">
                           Passionate and adaptable software developer with expertise in full-stack development (Laravel, Spring Boot) and AI-driven solutions.
                           Delivered 60% project tracking efficiency gains, and hackathon-winning speech-to-text tools. Thrives in cross-functional teams,
                           blending technical precision with user-centric design.
                        </p>
                     </div>
                  </div>
               )}

               {/* === TAB CONTENT: PROFILE (Experience, Education, Awards) === */}
               {activeTab === 'profile' && (
                  <div className="space-y-4">
                     {/* Work Experience */}
                     <div className="bg-white">
                        <div className="bg-[#6d84b4] px-2 py-1 font-bold text-white mb-2 border border-[#3b5998]">Work Experience</div>
                        {EXPERIENCES.map((job, idx) => (
                           <div key={idx} className="mb-3 border-b border-[#eee] pb-3 last:border-0">
                              <div className="font-bold text-[#3b5998] text-[13px]">{job.company}</div>
                              <div className="text-[11px] font-bold text-[#333]">{job.role}</div>
                              <div className="text-gray-500 text-[10px] mb-1">{job.period}</div>
                              <div className="text-[#333] leading-relaxed text-justify md:text-left">{job.desc}</div>
                           </div>
                        ))}
                     </div>

                     {/* Education */}
                     <div className="bg-white">
                        <div className="bg-[#6d84b4] px-2 py-1 font-bold text-white mb-2 border border-[#3b5998]">Education</div>
                        {EDUCATION.map((edu, idx) => (
                           <div key={idx} className="mb-2">
                              <div className="font-bold text-[#3b5998]">{edu.school}</div>
                              <div className="text-[11px] text-[#333]">{edu.degree} • {edu.year}</div>
                              <div className="text-[11px] text-[#333] leading-snug italic">{edu.details}</div>
                           </div>
                        ))}
                     </div>

                     {/* Awards */}
                     <div className="bg-white">
                        <div className="bg-[#6d84b4] px-2 py-1 font-bold text-white mb-2 border border-[#3b5998]">Awards & Achievements</div>
                        {AWARDS.map((award, idx) => (
                           <div key={idx} className="mb-2">
                              <div className="font-bold text-[#3b5998]">{award.title}</div>
                              <div className="text-[11px] text-[#333]">{award.issuer} • {award.year}</div>
                              <div className="text-[11px] text-[#333] leading-snug">{award.details}</div>
                           </div>
                        ))}
                     </div>
                  </div>
               )}


               {/* === TAB CONTENT: PROJECTS === */}
               {activeTab === 'projects' && (
                  <div className="space-y-4 pb-12">
                     {/* Header */}
                     <div className="bg-[#3b5998] px-3 py-1.5 flex justify-between items-center border border-[#3b5998] rounded-sm">
                        <span className="font-bold text-white text-[12px] uppercase tracking-wider">Project Inventory [{PROJECTS_DATA.length}]</span>
                        <div className="flex gap-2">
                           <span className="bg-[#f0f2f5] text-[#3b5998] text-[9px] px-1.5 py-0.5 border border-[#3b5998] font-bold">
                              Live: {PROJECTS_DATA.filter(p => p.status === 'live').length}
                           </span>
                           <span className="bg-[#f0f2f5] text-gray-500 text-[9px] px-1.5 py-0.5 border border-gray-400 font-bold">
                              Side: {PROJECTS_DATA.filter(p => p.status !== 'live').length}
                           </span>
                        </div>
                     </div>

                     {/* Featured Project - Spec Sheet Style */}
                     {PROJECTS_DATA.filter(p => p.featured).map((project) => (
                        <div key={project.id} className="border border-[#3b5998] bg-white p-0 rounded-sm overflow-hidden group">
                           {/* Header Tab */}
                           <div className="bg-[#f0f2f5] border-b border-[#3b5998] text-[#3b5998] text-[10px] font-bold px-3 py-1 flex items-center justify-between">
                              <span className="flex items-center gap-2"><Star size={12} className="text-[#3b5998]" /> FEATURED PROJECT DETAILS</span>
                              <span className={`font-bold ${project.status === 'live' ? 'text-green-600' :
                                 project.status === 'upcoming' ? 'text-blue-600' : 'text-gray-500'
                                 }`}>Status: {project.status.charAt(0).toUpperCase() + project.status.slice(1)}</span>
                           </div>

                           <div className="p-4 md:flex md:gap-6 bg-white">
                              {/* Left: Technical Preview */}
                              <div className="md:w-[220px] shrink-0 mb-4 md:mb-0">
                                 <div className="h-[140px] bg-gray-50 border border-[#ccc] flex items-center justify-center relative overflow-hidden">
                                    <img
                                       src={project.image}
                                       alt={project.title}
                                       className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                                    />
                                    <div className="absolute inset-0 border-[8px] border-white/50"></div>
                                    <div className="absolute top-2 left-2 bg-white/90 border border-gray-300 px-1 text-[8px] uppercase">Preview Scale: 1:1</div>
                                 </div>
                                 <div className="mt-3 space-y-1">
                                    <div className="text-[9px] text-gray-400 uppercase">Development Progress</div>
                                    <div className="h-1 bg-gray-100 w-full rounded-none overflow-hidden">
                                       <div className="h-full bg-[#3b5998] w-[85%]"></div>
                                    </div>
                                 </div>
                              </div>

                              {/* Right: Technical Data */}
                              <div className="flex-1 min-w-0 font-sans">
                                 <div className="border-b border-gray-100 pb-2 mb-3">
                                    <h3 className="font-bold text-[#3b5998] text-[18px] uppercase tracking-tight">{project.title}</h3>
                                    <div className="text-[10px] text-gray-500 mt-0.5">{project.subtitle}</div>
                                 </div>

                                 <p className="text-[12px] text-[#333] leading-[1.6] mb-4 text-justify font-sans">
                                    {project.description}
                                 </p>

                                 {/* Technical Stack (Specs) */}
                                 <div className="mb-4">
                                    <div className="text-[9px] text-gray-400 uppercase mb-1">Technologies Used:</div>
                                    <div className="flex flex-wrap gap-2">
                                       {project.tech.map((t) => (
                                          <span key={t} className={`text-[10px] px-2 py-0.5 border ${TECH_COLORS[t] || 'bg-gray-50 text-gray-600 border-gray-200'}`}>
                                             {t}
                                          </span>
                                       ))}
                                    </div>
                                 </div>

                                 {/* Functional Actions */}
                                 <div className="flex gap-3 border-t border-gray-100 pt-4">
                                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer"
                                       className="bg-[#3b5998] text-white px-4 py-1.5 text-[11px] font-bold border border-[#2d4373] hover:bg-[#29447e] transition-colors flex items-center gap-2">
                                       View Live Demo
                                    </a>
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                                       className="bg-white border border-[#3b5998] text-[#3b5998] px-4 py-1.5 text-[11px] font-bold hover:bg-[#f0f2f5] transition-colors flex items-center gap-2">
                                       Source Code
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}

                     {/* Project Grid */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        {PROJECTS_DATA.filter(p => !p.featured).map((project) => (
                           <div key={project.id} className="border border-[#ced4da] bg-white p-0 rounded-none hover:border-[#3b5998] transition-all duration-200 group">
                              {/* Viewport bar */}
                              <div className="bg-[#f7f7f7] border-b border-[#ced4da] px-2 py-1 flex justify-between items-center group-hover:bg-[#edeff4] group-hover:border-[#3b5998] transition-colors">
                                 <span className="text-[10px] font-bold text-gray-700 uppercase group-hover:text-[#3b5998]">{project.title}</span>
                                 <span className={`text-[8px] px-1.5 border font-bold ${project.status === 'live' ? 'border-green-300 text-green-700 bg-green-50' :
                                    project.status === 'upcoming' ? 'border-blue-300 text-blue-700 bg-blue-50' :
                                       project.status === 'paused' ? 'border-orange-300 text-orange-700 bg-orange-50' :
                                          'border-gray-300 text-gray-500 bg-gray-50'
                                    }`}>
                                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                                 </span>
                              </div>

                              {/* Visualization */}
                              <div className="h-[100px] bg-gray-50 border-b border-[#ced4da] relative overflow-hidden">
                                 <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-50 contrast-125 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                                 />
                                 <div className="absolute inset-0 bg-white/10 group-hover:opacity-0 transition-opacity"></div>
                              </div>

                              {/* Metadata */}
                              <div className="p-3">
                                 <div className="text-[9px] text-gray-500 italic mb-2">{project.subtitle}</div>

                                 <div className="flex flex-wrap gap-1 mb-3">
                                    {project.tech.map((t) => (
                                       <span key={t} className={`text-[9px] px-1.5 py-0 border ${TECH_COLORS[t] || 'bg-gray-50 text-gray-600 border-gray-200'}`}>
                                          {t}
                                       </span>
                                    ))}
                                 </div>

                                 <p className="text-[11px] text-[#444] leading-snug mb-3 line-clamp-2 h-[34px]">{project.description}</p>

                                 <div className="flex items-center justify-end gap-3 pt-2 border-t border-gray-100">
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-[10px] text-[#3b5998] font-bold hover:underline">Source</a>
                                    {project.status === 'live' && (
                                       <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-[10px] text-green-700 font-bold hover:underline">Demo</a>
                                    )}
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>

                     {/* Explore More Button */}
                     <div className="flex justify-center pt-6">
                        <a
                           href="https://github.com/FarhanAdiyasa"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="bg-[#3b5998] text-white px-6 py-2 text-[12px] font-bold border border-[#2d4373] hover:bg-[#29447e] transition-colors flex items-center gap-2"
                        >
                           <Github size={14} />
                           Explore More Projects
                           <ExternalLink size={12} />
                        </a>
                     </div>
                  </div>
               )}




            </div>
         </div>
      </div>
   );
};

export default App;

