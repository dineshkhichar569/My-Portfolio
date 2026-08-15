import { useEffect, useState } from "react";

export function useGallery() {
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let alive = true;

    fetch("/api/gallery")
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data) => {
        if (!alive) return;
        setImages(data);
        setStatus(data.length ? "ready" : "empty");
      })
      .catch(() => alive && setStatus("error"));

    return () => {
      alive = false;
    };
  }, []);

  return { images, status };
}
