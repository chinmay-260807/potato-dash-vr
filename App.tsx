import React, { useState } from 'react';
import { OBSTACLES, CONTROLS, ROADMAP } from './constants';
import PhysicsSim from './components/PhysicsSim';
import PhysicsDesign from './components/PhysicsDesign';
import UIDesign from './components/UIDesign';
import { GameMode } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'concept' | 'tech' | 'physics' | 'uiux' | 'roadmap'>('concept');

  return (
    <div className="min-h-screen pb-20 bg-[#f7f3f0]">
      {/* Header Section - Increased padding-bottom significantly to clear the menu */}
      <header className="potato-gradient pt-20 pb-48 px-6 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="font-heading text-4xl md:text-7xl mb-4 drop-shadow-xl tracking-wider animate-subtle-float">
            POTATO DASH VR
          </h1>
          <p className="text-lg md:text-2xl font-semibold opacity-95 max-w-2xl mx-auto leading-relaxed">
            The world's most wobbly VR racing experience. <br className="hidden md:block" /> 
            Roll, bounce, and flop your way to glory.
          </p>
        </div>
        
        {/* Decorative elements - Fixed positions to avoid cluttering content area */}
        <div className="absolute top-10 left-[10%] text-6xl opacity-20 rotate-12 select-none animate-pulse">🥔</div>
        <div className="absolute top-20 right-[15%] text-6xl opacity-20 -rotate-12 select-none">🥔</div>
        <div className="absolute bottom-20 left-[5%] text-4xl opacity-10 select-none">🍟</div>
        <div className="absolute bottom-10 right-[10%] text-5xl opacity-15 rotate-45 select-none">🥔</div>
      </header>

      {/* Navigation - Sticky container with higher z-index and clear separation */}
      <div className="sticky top-4 z-40 px-4 -mt-20">
        <nav className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-2 flex gap-2 w-full border border-amber-100 overflow-x-auto no-scrollbar">
            {(['concept', 'tech', 'physics', 'uiux', 'roadmap'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 min-w-[110px] py-3 px-4 rounded-xl font-bold transition-all whitespace-nowrap ${
                  activeTab === tab 
                    ? 'bg-amber-600 text-white shadow-lg scale-105' 
                    : 'text-amber-900 hover:bg-amber-50 hover:text-amber-700'
                }`}
              >
                {tab === 'physics' ? 'Physics' : tab === 'uiux' ? 'VR UI/UX' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </nav>
      </div>

      <main className="max-w-6xl mx-auto px-6 mt-20 relative z-10">
        {activeTab === 'concept' && (
          <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Concept Overview */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-heading text-5xl text-amber-900 leading-tight">Physics-First <br/>Comedy Racing</h2>
                <p className="text-gray-700 text-xl leading-relaxed">
                  Potato Dash VR isn't just a race; it's a battle against your own mass. 
                  We've engineered a custom "Starch-Engine" that simulates the awkward momentum of a tuber in motion.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="bg-white p-6 rounded-2xl border-l-8 border-amber-500 shadow-sm hover:shadow-md transition-shadow">
                    <span className="block font-bold text-amber-900 text-lg">Ragdoll Logic</span>
                    <span className="text-sm text-gray-600">Procedural stumbling that feels fair but looks hilarious.</span>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border-l-8 border-amber-500 shadow-sm hover:shadow-md transition-shadow">
                    <span className="block font-bold text-amber-900 text-lg">Spatial Haptics</span>
                    <span className="text-sm text-gray-600">Feel every "thud" and "splat" through dual-sense controllers.</span>
                  </div>
                </div>
              </div>
              <PhysicsSim />
            </section>

            {/* Obstacles */}
            <section>
              <div className="text-center mb-12">
                <h2 className="font-heading text-4xl text-amber-900 mb-2">The Gauntlet</h2>
                <p className="text-gray-500">Every kitchen is a minefield of delicious danger.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {OBSTACLES.map((obs) => (
                  <div key={obs.id} className="bg-white p-8 rounded-3xl shadow-sm border border-amber-50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="text-5xl mb-6 bg-amber-50 w-16 h-16 flex items-center justify-center rounded-2xl">{obs.icon}</div>
                    <h3 className="font-heading text-2xl text-amber-900 mb-3">{obs.name}</h3>
                    <p className="text-gray-600 mb-6 leading-snug">{obs.description}</p>
                    <div className="bg-red-50 text-red-600 text-[10px] font-black uppercase tracking-[0.2em] p-2 px-3 rounded-lg inline-block border border-red-100">
                      {obs.impact}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'tech' && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="font-heading text-5xl text-amber-900 mb-12 text-center">Engineering Spud-Logic</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-slate-100 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center text-4xl mb-8 shadow-inner">🛠️</div>
                <h3 className="font-heading text-2xl text-slate-800 mb-4">Unity XR Engine</h3>
                <p className="text-slate-600">Built on <strong>Unity 2022.3 LTS</strong>. Optimized for URP (Universal Render Pipeline) to maintain 90FPS on mobile VR chipsets.</p>
              </div>
              <div className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-slate-100 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-green-50 text-green-600 rounded-3xl flex items-center justify-center text-4xl mb-8 shadow-inner">🌐</div>
                <h3 className="font-heading text-2xl text-slate-800 mb-4">Photon Fusion</h3>
                <p className="text-slate-600">State-sync networking that handles up to 8 high-velocity potatoes with predictive collision reconciliation.</p>
              </div>
              <div className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-slate-100 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-purple-50 text-purple-600 rounded-3xl flex items-center justify-center text-4xl mb-8 shadow-inner">⚡</div>
                <h3 className="font-heading text-2xl text-slate-800 mb-4">OVR Performance</h3>
                <p className="text-slate-600">Aggressive occlusion culling and LOD systems for complex kitchen environments with high object counts.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'physics' && <PhysicsDesign />}
        
        {activeTab === 'uiux' && <UIDesign />}

        {activeTab === 'roadmap' && (
          <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="font-heading text-5xl text-amber-900 mb-4 text-center">Development Journey</h2>
            <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">From a single rolling mash to a global multiplayer phenomenon. Tracking our growth through the seasons.</p>
            <div className="space-y-6">
              {ROADMAP.map((item, i) => (
                <div key={i} className="group bg-white p-8 rounded-3xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between border border-transparent hover:border-amber-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex gap-6 items-center">
                    <div className={`w-4 h-4 rounded-full ${item.status === 'Completed' ? 'bg-green-500' : item.status === 'In Progress' ? 'bg-blue-500 animate-pulse' : 'bg-gray-300'}`}></div>
                    <div>
                      <span className="text-amber-600 font-black text-xs uppercase tracking-widest">{item.quarter}</span>
                      <h3 className="font-heading text-2xl text-amber-900 mt-1">{item.feature}</h3>
                    </div>
                  </div>
                  <div className={`mt-4 sm:mt-0 self-start sm:self-center px-6 py-2 rounded-full text-sm font-black uppercase tracking-wider ${
                    item.status === 'Completed' ? 'bg-green-100 text-green-700' :
                    item.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-500'
                  }`}>
                    {item.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="bg-white mt-32 border-t border-amber-100 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-4xl">🥔</span>
              <span className="font-heading text-2xl text-amber-900">POTATO DASH VR</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Leading the revolution in tuber-based immersive entertainment. Roll hard, stay starchy.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-lg text-amber-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600 font-semibold">
              <li className="hover:text-amber-600 cursor-pointer">Development Blog</li>
              <li className="hover:text-amber-600 cursor-pointer">Press Kit</li>
              <li className="hover:text-amber-600 cursor-pointer">Community Discord</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg text-amber-900 mb-4">Platform Info</h4>
            <ul className="space-y-2 text-sm text-gray-600 font-semibold">
              <li>Meta Quest 2 / 3 / Pro</li>
              <li>Valve Index / HTC Vive</li>
              <li>SteamVR Compatible</li>
            </ul>
          </div>
          <div>
             <h4 className="font-heading text-lg text-amber-900 mb-4">Join the Spud-List</h4>
             <div className="flex gap-2">
                <input type="text" placeholder="Email" className="bg-amber-50 border border-amber-100 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-amber-500" />
                <button className="bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-bold">Go</button>
             </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-amber-50 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
           <p>© 2024 Spud Studios • Internal Confidential Design Blueprint</p>
           <div className="flex gap-6 font-bold uppercase tracking-widest">
              <span className="hover:text-amber-600 cursor-pointer">Privacy</span>
              <span className="hover:text-amber-600 cursor-pointer">Terms</span>
              <span className="hover:text-amber-600 cursor-pointer">Legal</span>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;