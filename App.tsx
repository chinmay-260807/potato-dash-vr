
import React, { useState } from 'react';
import { OBSTACLES, CONTROLS, ROADMAP } from './constants';
import PhysicsSim from './components/PhysicsSim';
import PhysicsDesign from './components/PhysicsDesign';
import UIDesign from './components/UIDesign';
import { GameMode } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'concept' | 'tech' | 'physics' | 'uiux' | 'roadmap'>('concept');

  return (
    <div className="min-h-screen pb-20">
      {/* Header Section */}
      <header className="potato-gradient pt-16 pb-32 px-6 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="font-heading text-4xl md:text-6xl mb-6 drop-shadow-lg tracking-wider animate-subtle-float">
            POTATO DASH VR
          </h1>
          <p className="text-lg md:text-xl font-semibold opacity-90 max-w-2xl mx-auto">
            The world's most wobbly VR racing experience. Roll, bounce, and flop your way to glory.
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-6xl opacity-20 rotate-12 select-none">🥔</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-20 -rotate-12 select-none">🥔</div>
        <div className="absolute top-20 right-20 text-4xl opacity-10 select-none">🍟</div>
      </header>

      {/* Navigation - Elevated with z-20 */}
      <nav className="max-w-6xl mx-auto -mt-10 px-4 flex justify-center relative z-20">
        <div className="bg-white rounded-2xl shadow-2xl p-2 flex gap-2 w-full max-w-3xl border border-amber-100 overflow-x-auto">
          {(['concept', 'tech', 'physics', 'uiux', 'roadmap'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 min-w-[120px] py-3 px-4 rounded-xl font-bold transition-all whitespace-nowrap ${
                activeTab === tab 
                  ? 'bg-amber-600 text-white shadow-md scale-105' 
                  : 'text-amber-900 hover:bg-amber-50 hover:scale-105'
              }`}
            >
              {tab === 'physics' ? 'Physics Design' : tab === 'uiux' ? 'VR UI/UX' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 mt-16">
        {activeTab === 'concept' && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Concept Overview */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-4xl text-amber-900 mb-6">The Concept</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Potato Dash VR is a chaotic physics-driven racing game built for high-immersion VR headsets. 
                  Players embody "Spud-atars"—silly, semi-sentient potatoes with unique physics profiles.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-amber-100 p-4 rounded-xl border-l-4 border-amber-500 shadow-sm">
                    <span className="block font-bold text-amber-900">Physics Comedy</span>
                    <span className="text-sm text-amber-800">Ragdoll-style stumbling and rolling.</span>
                  </div>
                  <div className="bg-amber-100 p-4 rounded-xl border-l-4 border-amber-500 shadow-sm">
                    <span className="block font-bold text-amber-900">8-Player PvP</span>
                    <span className="text-sm text-amber-800">Low-latency cross-platform races.</span>
                  </div>
                </div>
              </div>
              <PhysicsSim />
            </section>

            {/* Obstacles */}
            <section>
              <h2 className="font-heading text-4xl text-amber-900 mb-10 text-center">Kitchen Hazards</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {OBSTACLES.map((obs) => (
                  <div key={obs.id} className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-amber-500 hover:scale-105 transition-transform">
                    <div className="text-4xl mb-4">{obs.icon}</div>
                    <h3 className="font-heading text-xl text-amber-900 mb-2">{obs.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{obs.description}</p>
                    <div className="bg-red-50 text-red-600 text-[10px] font-black uppercase tracking-widest p-1 px-2 rounded-full inline-block">
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
            <h2 className="font-heading text-4xl text-amber-900 mb-8 text-center">Technical Blueprint</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-6">🛠️</div>
                <h3 className="font-heading text-2xl text-slate-800 mb-4">Game Engine</h3>
                <p className="text-slate-600 mb-6">Recommend <strong>Unity 2022.3 LTS</strong> for its robust XR Interaction Toolkit (XRI) and proven performance on mobile-first VR hardware.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mb-6">🌐</div>
                <h3 className="font-heading text-2xl text-slate-800 mb-4">Multiplayer Logic</h3>
                <p className="text-slate-600 mb-6">Utilizing <strong>Photon Fusion</strong> for high-tickrate physics synchronization and client-side prediction.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl mb-6">👓</div>
                <h3 className="font-heading text-2xl text-slate-800 mb-4">Target Platforms</h3>
                <p className="text-slate-600 mb-6">Primary focus on standalone and PC-tethered headsets for maximum reach.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'physics' && <PhysicsDesign />}
        
        {activeTab === 'uiux' && <UIDesign />}

        {activeTab === 'roadmap' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="font-heading text-4xl text-amber-900 mb-8 text-center">Development Roadmap</h2>
            <div className="space-y-4">
              {ROADMAP.map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm flex items-center justify-between border-l-8 border-amber-600">
                  <div>
                    <span className="text-amber-600 font-black text-sm uppercase tracking-widest">{item.quarter}</span>
                    <h3 className="font-heading text-xl text-amber-900 mt-1">{item.feature}</h3>
                  </div>
                  <div className={`px-4 py-1 rounded-full text-xs font-bold ${
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

      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-amber-100 py-4 px-6 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🥔</span>
            <span className="font-heading text-amber-900">POTATO DASH VR</span>
          </div>
          <p className="hidden md:block text-xs text-gray-400 font-medium">© 2024 Spud Studios • Internal Design Blueprint</p>
          <div className="flex gap-4">
            <button className="text-xs font-bold text-amber-600 hover:underline">Download PDF</button>
            <button className="text-xs font-bold text-amber-600 hover:underline">Share</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;