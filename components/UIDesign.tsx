
import React from 'react';

const UIDesign: React.FC = () => {
  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="text-center">
        <h2 className="font-heading text-4xl text-amber-900 mb-4">Immersive VR UX Design</h2>
        <p className="text-slate-600 max-w-3xl mx-auto text-lg">
          Crafting a spatial interface that feels tactile, readable, and vomit-free in the "Potato-Verse".
        </p>
      </div>

      {/* Main Menu - The Spud Hub */}
      <section className="bg-amber-50 rounded-[3rem] p-10 shadow-inner border border-amber-100">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <h3 className="font-heading text-3xl text-amber-900 mb-6 flex items-center gap-3">
              <span className="bg-amber-200 p-2 rounded-2xl">🏡</span> The Spud-Hub Menu
            </h3>
            <p className="text-slate-700 mb-6 leading-relaxed">
              The main menu is a <strong>diegetic floating barn</strong> located in a giant sack of virtual potting soil. 
              Instead of flat 2D panels, players interact with 3D objects:
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-amber-800">Punchable Start Buttons</h4>
                  <p className="text-sm text-slate-600">Soft, squishy potato-shaped buttons that react to physical contact (haptic buzz on impact).</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-amber-800">Spud-O-Mat Skin Booth</h4>
                  <p className="text-sm text-slate-600">A physical mirror where players grab and "slap" skins onto their avatar like stickers.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-amber-800">Spatial Audio Cues</h4>
                  <p className="text-sm text-slate-600">Ambient farm sounds (clucking, tractor hums) help orient players in 360 space.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/3 bg-white rounded-3xl p-6 shadow-xl border-4 border-amber-200 relative overflow-hidden group">
            <div className="absolute inset-0 bg-amber-100/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-center py-10">
              <div className="text-6xl mb-4 animate-bounce">📦</div>
              <div className="space-y-3">
                <div className="h-4 w-3/4 bg-amber-200 rounded-full mx-auto"></div>
                <div className="h-4 w-1/2 bg-amber-100 rounded-full mx-auto"></div>
                <div className="mt-8 flex justify-center gap-2">
                   <div className="w-12 h-12 bg-amber-500 rounded-lg shadow-md border-b-4 border-amber-700"></div>
                   <div className="w-12 h-12 bg-amber-500 rounded-lg shadow-md border-b-4 border-amber-700"></div>
                </div>
              </div>
              <p className="mt-8 text-xs font-mono text-amber-800 uppercase tracking-tighter">VR Menu Mockup v1.0</p>
            </div>
          </div>
        </div>
      </section>

      {/* In-Race HUD & Readability */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10">
          <h3 className="font-heading text-3xl mb-8 flex items-center gap-3">
            <span className="text-3xl">⏱️</span> In-Race HUD
          </h3>
          <div className="space-y-6">
            <div className="flex items-center gap-6 p-4 bg-slate-800 rounded-2xl border border-slate-700">
               <div className="text-4xl">🌡️</div>
               <div>
                  <h4 className="font-bold text-amber-400">Freshness Meter</h4>
                  <p className="text-xs text-slate-400">A thermometer that fills with "steam" as you speed up. If it redlines, you stumble (overheat).</p>
               </div>
            </div>
            <div className="flex items-center gap-6 p-4 bg-slate-800 rounded-2xl border border-slate-700">
               <div className="text-4xl">🏁</div>
               <div>
                  <h4 className="font-bold text-amber-400">Wrist-Watch Mini Map</h4>
                  <p className="text-xs text-slate-400">Attached to the left VR controller. Gaze-activated transparency keeps the field of view clean.</p>
               </div>
            </div>
            <div className="flex items-center gap-6 p-4 bg-slate-800 rounded-2xl border border-slate-700">
               <div className="text-4xl">🥇</div>
               <div>
                  <h4 className="font-bold text-amber-400">Floating Distance Markers</h4>
                  <p className="text-xs text-slate-400">Rendered in world-space (diegetic) to avoid "sticker-on-lens" nausea.</p>
               </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-lg">
          <h3 className="font-heading text-3xl text-amber-900 mb-8">VR Readability Rules</h3>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <span className="text-2xl">📐</span>
              <div>
                <h4 className="font-bold text-slate-800">The "Safe Zone"</h4>
                <p className="text-sm text-slate-500 text-pretty">Place UI between 1m and 2m from the camera. Anything closer causes eye strain (vergence-accommodation conflict).</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl">👁️</span>
              <div>
                <h4 className="font-bold text-slate-800">Center-Focus Text</h4>
                <p className="text-sm text-slate-500">Keep critical text within the central 30° of the FOV where lenses are sharpest.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl">☁️</span>
              <div>
                <h4 className="font-bold text-slate-800">No Hard Transitions</h4>
                <p className="text-sm text-slate-500">Use 0.5s fade-ins for all floating panels to reduce cognitive load and prevent "jump scares".</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Comfort & Accessibility */}
      <section className="bg-emerald-900 text-emerald-50 rounded-[3rem] p-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl">🛡️</div>
        <div className="max-w-4xl relative z-10">
          <h3 className="font-heading text-4xl mb-8">Comfort & Motion Sickness</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-emerald-300 font-bold uppercase text-sm tracking-widest">Dynamic Vignette</h4>
              <p className="text-emerald-100/80 leading-relaxed">
                As the potato rolls or gains speed, the peripheral vision is subtly darkened (Vignetting). 
                This reduces the sense of motion in the "fringe" FOV, which is where most nausea originates.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-emerald-300 font-bold uppercase text-sm tracking-widest">Static Reference Frame</h4>
              <p className="text-emerald-100/80 leading-relaxed">
                Option to display a <strong>"Fixed Horizon" grid</strong> during intense tumbles. 
                Gives the brain a stable anchor to focus on while the spud avatar flops around.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-emerald-300 font-bold uppercase text-sm tracking-widest">Snap Turning</h4>
              <p className="text-emerald-100/80 leading-relaxed">
                30° or 45° incremental rotations for players sensitive to smooth stick turning.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-emerald-300 font-bold uppercase text-sm tracking-widest">Grip-to-Steer</h4>
              <p className="text-emerald-100/80 leading-relaxed">
                Instead of tilt-steering, players can "grab" the world and pull it, a more comfortable "climbing" style locomotion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Celebrations & Lobby */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-amber-100 shadow-lg">
            <h3 className="font-heading text-2xl text-amber-900 mb-6">Multiplayer Lobby: "The Sifter"</h3>
            <p className="text-slate-600 mb-6">
               Players wait in a giant sifter tray. You can physically poke other potatoes, play mini-games like "Mash-Ball", 
               or look through a telescope to view current live races.
            </p>
            <div className="bg-amber-50 h-48 rounded-2xl flex items-center justify-center border-2 border-dashed border-amber-200">
               <div className="flex -space-x-4">
                  {[1,2,3,4,5].map(i => (
                     <div key={i} className="w-16 h-16 rounded-full bg-amber-600 border-4 border-white flex items-center justify-center text-white font-bold shadow-lg animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>🥔</div>
                  ))}
               </div>
            </div>
         </div>
         <div className="bg-gradient-to-br from-amber-400 to-amber-600 text-white rounded-3xl p-8 shadow-xl">
            <h3 className="font-heading text-2xl mb-4 text-amber-900">Finish Line!</h3>
            <ul className="space-y-4 text-sm font-bold">
               <li className="bg-white/20 p-3 rounded-xl">✨ Golden Sour Cream Shower</li>
               <li className="bg-white/20 p-3 rounded-xl">🍟 Exploding French-Fry Confetti</li>
               <li className="bg-white/20 p-3 rounded-xl">🎺 Tuber-Trumpet Victory Tune</li>
               <li className="bg-white/20 p-3 rounded-xl">🕺 Automatic "Victory Flop" Animation</li>
            </ul>
         </div>
      </section>
    </div>
  );
};

export default UIDesign;
