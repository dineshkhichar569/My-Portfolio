import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

let nextId = 1;

export default function ClickSpark({
  rayCount = 12,
  particleCount = 20,
  colorCore = "#facc15",
  // colorRay = "white",
  colorParticle = "white",
  spread = 120,
  life = 1,
}) {
  const [sparks, setSparks] = useState([]);
  const timeouts = useRef(new Map());

  useEffect(() => {
    function onPointerDown(e) {
      const x = e.clientX;
      const y = e.clientY;
      const created = [];

      ///////////////// for the Central core burst
      created.push({
        id: nextId++,
        type: "core",
        x,
        y,
      });

      ///////////////////  for the Rays
      for (let i = 0; i < rayCount; i++) {
        const angle = (i / rayCount) * (Math.PI * 2);
        const dx = Math.cos(angle) * spread;
        const dy = Math.sin(angle) * spread;
        created.push({
          id: nextId++,
          type: "ray",
          x,
          y,
          dx,
          dy,
        });
      }

      /////////////////////// for the Small particles
      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * spread * 0.6;
        const dx = Math.cos(angle) * dist;
        const dy = Math.sin(angle) * dist;
        created.push({
          id: nextId++,
          type: "particle",
          x,
          y,
          dx,
          dy,
        });
      }

      setSparks((s) => [...s, ...created]);

      created.forEach((sp) => {
        const t = setTimeout(() => {
          setSparks((s) => s.filter((p) => p.id !== sp.id));
          timeouts.current.delete(sp.id);
        }, Math.ceil((life + 0.3) * 1000));
        timeouts.current.set(sp.id, t);
      });
    }

    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      timeouts.current.forEach((t) => clearTimeout(t));
      timeouts.current.clear();
    };
  }, [rayCount, particleCount, spread, life]);

  return (
    <div aria-hidden>
      <AnimatePresence>
        {sparks.map((s) => {
          if (s.type === "core") {
            return (
              <motion.span
                key={s.id}
                initial={{ opacity: 1, scale: 0 }}
                animate={{ opacity: 0, scale: 3 }}
                transition={{ duration: life * 0.5, ease: "easeOut" }}
                style={{
                  position: "fixed",
                  left: s.x - 10,
                  top: s.y - 10,
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background: colorCore,
                  filter: "blur(6px)",
                  pointerEvents: "none",
                  zIndex: 9999,
                }}
              />
            );
          }

          // if (s.type === "ray") {
          //   return (
          //     <motion.span
          //       key={s.id}
          //       initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          //       animate={{ opacity: 0, x: s.dx, y: s.dy, scale: 0.8 }}
          //       transition={{ duration: life, ease: "easeOut" }}
          //       style={{
          //         position: "fixed",
          //         left: s.x,
          //         top: s.y,
          //         width: 2,
          //         height: 40,
          //         background: colorRay,
          //         borderRadius: "1px",
          //         transformOrigin: "center",
          //         rotate: Math.atan2(s.dy, s.dx) + "rad",
          //         filter: "blur(1px)",
          //         pointerEvents: "none",
          //         zIndex: 9999,
          //       }}
          //     />
          //   );
          // }

          if (s.type === "particle") {
            return (
              <motion.span
                key={s.id}
                initial={{ opacity: 1, x: 0, y: 0, scale: 0.8 }}
                animate={{ opacity: 0, x: s.dx, y: s.dy, scale: 0 }}
                transition={{ duration: life, ease: "easeOut" }}
                style={{
                  position: "fixed",
                  left: s.x - 3,
                  top: s.y - 3,
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: colorParticle,
                  filter: "blur(2px)",
                  pointerEvents: "none",
                  zIndex: 9999,
                }}
              />
            );
          }

          return null;
        })}
      </AnimatePresence>
    </div>
  );
}
