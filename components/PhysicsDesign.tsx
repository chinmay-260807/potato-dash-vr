
import React from 'react';

const PhysicsDesign: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center">
        <h2 className="font-heading text-4xl text-amber-900 mb-4">Comedic Motion Systems</h2>
        <p className="text-slate-600 max-w-3xl mx-auto">
          Designing the "Spud-Logic" engine: Where wobbly physics meets responsive gameplay.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Rigidbody Settings Card */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
          <h3 className="font-heading text-2xl text-amber-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">🏗️</span> Rigidbody Configuration
          </h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
              <span className="font-bold text-slate-700">Mass</span>
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-lg font-mono text-sm">1.5 - 2.5 kg</span>
            </li>
            <li className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
              <span className="font-bold text-slate-700">Drag</span>
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-lg font-mono text-sm">0.8 (Air) / 2.0 (Ground)</span>
            </li>
            <li className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
              <span className="font-bold text-slate-700">Interpolation</span>
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-lg font-mono text-sm">Interpolate (Essential for VR)</span>
            </li>
            <li className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
              <span className="font-bold text-slate-700">Center of Mass</span>
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-lg font-mono text-sm">Shifted slightly bottom-offset</span>
            </li>
          </ul>
          <p className="mt-6 text-sm text-slate-500 italic">
            *Note: Low center of mass creates the "Weeble-Wobble" effect, helping potatoes recover naturally from minor bumps.*
          </p>
        </div>

        {/* Animation Blending Card */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
          <h3 className="font-heading text-2xl text-amber-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">🌀</span> Procedural Animation
          </h3>
          <div className="space-y-4">
            <div className="p-4 border border-amber-100 rounded-2xl">
              <h4 className="font-bold text-amber-800 mb-1">Squash & Stretch</h4>
              <p className="text-sm text-slate-600">Scale.Y is inverse to Velocity.Y. On collision, a 0.2s lerp creates a satisfying "thud" impact deformation.</p>
            </div>
            <div className="p-4 border border-amber-100 rounded-2xl">
              <h4 className="font-bold text-amber-800 mb-1">Jiggle Physics</h4>
              <p className="text-sm text-slate-600">Simulate "Starch Inertia" using a spring-damper system on child bones, reacting to lateral g-forces.</p>
            </div>
            <div className="p-4 border border-amber-100 rounded-2xl">
              <h4 className="font-bold text-amber-800 mb-1">Stumble Recovery</h4>
              <p className="text-sm text-slate-600">When tilt angle &gt; 45°, blend into "Flail" animation state until Upward Vector aligns with Global Up.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pseudocode Section */}
      <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 text-8xl">⌨️</div>
        <h3 className="font-heading text-3xl mb-8">Locomotion & Stumble Logic</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h4 className="text-amber-400 font-mono font-bold uppercase tracking-widest text-sm underline decoration-amber-500/50 underline-offset-8">
              Movement Handler (C# Pseudocode)
            </h4>
            <div className="bg-slate-800/50 p-6 rounded-2xl font-mono text-xs leading-relaxed border border-slate-700">
              <pre className="text-amber-100/90">{`void HandleLocomotion(Vector2 input) {
  // 1. Calculate target velocity
  Vector3 moveDir = Camera.main.transform.TransformDirection(
    new Vector3(input.x, 0, input.y)
  );
  
  // 2. Add Wobble Torque
  float wobbleFreq = rb.velocity.magnitude * 0.5f;
  Vector3 wobble = new Vector3(
    Mathf.Sin(Time.time * wobbleFreq),
    0,
    Mathf.Cos(Time.time * wobbleFreq)
  ) * wobbleIntensity;
  
  rb.AddTorque(wobble, ForceMode.Acceleration);

  // 3. Apply Slip on Butter
  float currentFriction = isOnButter ? 0.05f : 1.0f;
  rb.AddForce(moveDir * speed * currentFriction);
}`}</pre>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-amber-400 font-mono font-bold uppercase tracking-widest text-sm underline decoration-amber-500/50 underline-offset-8">
              Stumble & Yelps (Logic Flow)
            </h4>
            <div className="bg-slate-800/50 p-6 rounded-2xl font-mono text-xs leading-relaxed border border-slate-700">
              <pre className="text-amber-100/90">{`void CheckStumble() {
  float tilt = Vector3.Angle(transform.up, Vector3.up);

  if (tilt > stumbleThreshold && !isStumbling) {
    TriggerStumble();
  }
}

void TriggerStumble() {
  isStumbling = true;
  PlayFunnySound("Potato_Yelp_" + Random.Range(1, 5));
  
  // Apply random tumble force
  rb.AddRelativeTorque(Random.insideUnitSphere * 10f);
  
  // Wait for recovery
  StartCoroutine(WaitToRecover());
}

IEnumerator WaitToRecover() {
  yield return new WaitForSeconds(1.5f);
  // Procedural Stand-Up via Lerp
  isStumbling = false;
}`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* VR Optimization */}
      <section className="bg-white rounded-3xl p-10 border border-slate-200">
        <h3 className="font-heading text-3xl text-amber-900 mb-6">VR Performance & Comfort</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
               <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 font-bold">✓</div>
               <div>
                  <h5 className="font-bold text-slate-800">Sphere Proxy Colliders</h5>
                  <p className="text-sm text-slate-500">Instead of Mesh Colliders, use a single Sphere for movement and a set of 3 capsules for the "Spud Shape". This significantly reduces PhysX overhead.</p>
               </div>
            </div>
            <div className="flex gap-4 items-start">
               <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 font-bold">✓</div>
               <div>
                  <h5 className="font-bold text-slate-800">Fixed Timestep Sync</h5>
                  <p className="text-sm text-slate-500">Match Physics step to 90Hz or 120Hz depending on target headset refresh rate to eliminate "micro-stutter" in rolling objects.</p>
               </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
               <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 font-bold">✓</div>
               <div>
                  <h5 className="font-bold text-slate-800">Dynamic Decimation</h5>
                  <p className="text-sm text-slate-500">Only simulate high-fidelity "Jiggle" for potatoes within a 5-meter radius of the player camera.</p>
               </div>
            </div>
            <div className="flex gap-4 items-start">
               <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 font-bold">✓</div>
               <div>
                  <h5 className="font-bold text-slate-800">Comfort Vignette</h5>
                  <p className="text-sm text-slate-500">Automatically trigger peripheral darkening during rapid rotations or "Sky-high Pan Launches" to prevent nausea.</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhysicsDesign;
