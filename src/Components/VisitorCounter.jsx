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

  return <div>👀 {count.toLocaleString()} Developers Visited</div>;
}
