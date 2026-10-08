import { useEffect, useRef, useState } from 'react';

// AI-generated Fractal Tree component for the Home page.
function generateBranches(x, y, angle, length, depth, maxDepth, branches = []) {
  if (depth > maxDepth) return branches;

  const x2 = x + length * Math.cos(angle);
  const y2 = y - length * Math.sin(angle);
  branches.push({ x1: x, y1: y, x2, y2, depth });

  if (depth < maxDepth) {
    const nextLength = length * 0.72;
    generateBranches(x2, y2, angle - 0.45, nextLength, depth + 1, maxDepth, branches);
    generateBranches(x2, y2, angle + 0.45, nextLength, depth + 1, maxDepth, branches);
  }

  return branches;
}

function FractalTree({ width = 500, height = 650, maxDepth = 9 }) {
  const [growth, setGrowth] = useState(0);
  const frameRef = useRef();

  useEffect(() => {
    const GROW = 8;      // seconds to grow out
    const HOLD = 20;     // seconds fully grown
    const RETRACT = 8;   // seconds to pull back in
    const CYCLE = GROW + HOLD + RETRACT;

    // smoothstep: starts and ends slowly instead of moving at a constant speed
    const ease = (x) => x * x * (3 - 2 * x);

    let start;

    function animate(timestamp) {
      if (!start) start = timestamp;
      const t = ((timestamp - start) / 1000) % CYCLE;

      let progress;
      if (t < GROW) progress = ease(t / GROW);
      else if (t < GROW + HOLD) progress = 1;
      else progress = ease(1 - (t - GROW - HOLD) / RETRACT);

      setGrowth(progress * (maxDepth + 1));
      frameRef.current = requestAnimationFrame(animate);
    }

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [maxDepth]);

  const branches = generateBranches(width / 2, height, Math.PI / 2, height * 0.22, 0, maxDepth);

  return (
    <svg width={width} height={height}>
      {branches.map((b, i) => {
        const reveal = Math.max(0, Math.min(1, growth - b.depth));
        const x2 = b.x1 + (b.x2 - b.x1) * reveal;
        const y2 = b.y1 + (b.y2 - b.y1) * reveal;

        return (
          <line
            key={i}
            x1={b.x1}
            y1={b.y1}
            x2={x2}
            y2={y2}
            stroke="#f1f5f9"
            strokeWidth={Math.max(1, (maxDepth - b.depth) * 0.6)}
            strokeLinecap="round"
            opacity={0.2 + (1 - b.depth / maxDepth) * 0.5}
          />
        );
      })}
    </svg>
  );
}

export default FractalTree;