import { useEffect, useState } from "react";
import { db } from "../firebase/firebase.js";
import { doc, getDoc, updateDoc, increment } from "firebase/firestore";

export default function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateVisitorCount = async () => {
      const docRef = doc(db, "statss", "visitors");

      if (!localStorage.getItem("portfolioVisited")) {
        await updateDoc(docRef, {
          count: increment(1),
        });

        localStorage.setItem("portfolioVisited", "true");
      }

      const snap = await getDoc(docRef);

      if (snap.exists()) {
        setCount(snap.data().count);
      }
    };

    updateVisitorCount();
  }, []);

  return (
    <div className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
      </span>
      <span className="text-sm font-medium tracking-tight text-gray-300">
        <span className="font-semibold text-white tabular-nums">
          {count.toLocaleString()}
        </span>{" "}
        Portfolio Visitors
      </span>
    </div>
  );
}