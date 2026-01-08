
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const PhysicsSim: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [bounciness, setBounciness] = useState(0.8);
  const [gravity, setGravity] = useState(0.5);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = svgRef.current.clientWidth;
    const height = 400;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const potato = {
      x: width / 2,
      y: 50,
      vx: 2,
      vy: 0,
      radius: 25
    };

    const draw = () => {
      svg.selectAll(".potato").remove();
      
      // Shadow
      svg.append("ellipse")
        .attr("cx", potato.x)
        .attr("cy", height - 10)
        .attr("rx", potato.radius * (1 - (height - potato.y) / height))
        .attr("ry", 5)
        .attr("fill", "rgba(0,0,0,0.1)")
        .attr("class", "potato-shadow");

      // Potato Body
      svg.append("ellipse")
        .attr("class", "potato")
        .attr("cx", potato.x)
        .attr("cy", potato.y)
        .attr("rx", potato.radius * 1.2)
        .attr("ry", potato.radius)
        .attr("fill", "#c19a6b")
        .attr("stroke", "#8B4513")
        .attr("stroke-width", 2);

      // Eyes
      svg.append("circle")
        .attr("cx", potato.x - 8)
        .attr("cy", potato.y - 5)
        .attr("r", 3)
        .attr("fill", "black");
      svg.append("circle")
        .attr("cx", potato.x + 8)
        .attr("cy", potato.y - 5)
        .attr("r", 3)
        .attr("fill", "black");
    };

    const update = () => {
      potato.vy += gravity;
      potato.x += potato.vx;
      potato.y += potato.vy;

      // Floor collision
      if (potato.y + potato.radius > height - 10) {
        potato.y = height - 10 - potato.radius;
        potato.vy *= -bounciness;
      }

      // Wall collision
      if (potato.x + potato.radius > width || potato.x - potato.radius < 0) {
        potato.vx *= -1;
      }

      draw();
    };

    const timer = d3.timer(update);
    return () => timer.stop();
  }, [bounciness, gravity]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <h3 className="font-heading text-xl text-amber-900">Potato Physics Lab</h3>
        <div className="flex gap-6">
          <div className="flex flex-col">
            <label className="text-xs font-bold text-gray-500 uppercase">Bounciness</label>
            <input 
              type="range" min="0" max="1" step="0.1" 
              value={bounciness} 
              onChange={(e) => setBounciness(parseFloat(e.target.value))}
              className="accent-amber-600"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-bold text-gray-500 uppercase">Gravity</label>
            <input 
              type="range" min="0" max="2" step="0.1" 
              value={gravity} 
              onChange={(e) => setGravity(parseFloat(e.target.value))}
              className="accent-amber-600"
            />
          </div>
        </div>
      </div>
      <div className="border-2 border-dashed border-gray-200 rounded-lg bg-slate-50 relative">
        <svg ref={svgRef} className="w-full h-[400px]" />
        <div className="absolute bottom-4 right-4 text-[10px] text-gray-400 font-mono">
          SYSTEM: OVR_PHYSICS_INIT_SUCCESS
        </div>
      </div>
    </div>
  );
};

export default PhysicsSim;
