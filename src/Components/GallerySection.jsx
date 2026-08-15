import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";

import { useGallery } from "../hooks/useGallery";
import { thumb, full, blur, download } from "../lib/ik";

const BREAKPOINTS = [
  { min: 768, cols: 4 },
  { min: 640, cols: 3 },
  { min: 0, cols: 2 },
];

const useColumnCount = () => {
  const [cols, setCols] = useState(2);
  useEffect(() => {
    const update = () =>
      setCols(BREAKPOINTS.find((b) => window.innerWidth >= b.min).cols);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return cols;
};

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    setIsDesktop(
      window.matchMedia("(hover: hover) and (pointer: fine)").matches,
    );
  }, []);
  return isDesktop;
};

const ratioOf = (img) =>
  img.width && img.height ? img.height / img.width : 1.25;

const Tile = ({ img, onClick, hover, onDims }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      {...(hover
        ? { whileHover: { scale: 1.03 }, whileTap: { scale: 0.98 } }
        : {})}
      style={{ aspectRatio: `${img.width || 4} / ${img.height || 5}` }}
      className="relative w-full cursor-pointer overflow-hidden rounded-xl bg-white/5 shadow-lg"
    >
      <img
        src={blur(img.url)}
        alt=""
        aria-hidden
        className={`absolute inset-0 h-full w-full scale-110 object-cover blur-xl transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src={thumb(img.url)}
        alt={img.alt}
        loading="lazy"
        decoding="async"
        onLoad={(e) => {
          const { naturalWidth: w, naturalHeight: h } = e.currentTarget;
          if (w && h && h > w !== img.height > img.width) onDims(img.id, w, h);
          setLoaded(true);
        }}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </motion.div>
  );
};

const Lightbox = ({ img, onClose }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [img, onClose]);

  const w = img.width || 4;
  const h = img.height || 5;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.96 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: `min(90vw, ${((85 * w) / h).toFixed(2)}vh)`,
          aspectRatio: `${w} / ${h}`,
        }}
        className="relative overflow-hidden rounded-xl shadow-2xl"
      >
        <img
          src={blur(img.url)}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl"
        />

        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-9 w-9 animate-spin rounded-full border-2 border-white/25 border-t-white/90" />
          </div>
        )}

        <img
          src={full(img.url)}
          alt={img.alt}
          onLoad={() => setLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </motion.div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close"
        className="absolute right-5 top-5 z-10 cursor-pointer rounded-lg border border-white/20 bg-black/40 px-2 font-rubrik text-2xl font-medium text-white shadow-md backdrop-blur-md transition hover:bg-black/70"
      >
        &times;
      </button>

      <a
        href={download(img.url)}
        download
        onClick={(e) => e.stopPropagation()}
        aria-label="Download"
        className="absolute bottom-5 right-5 z-10 cursor-pointer rounded-lg border border-white/20 bg-black/40 p-1.5 shadow-md backdrop-blur-md transition hover:bg-black/70"
      >
        <Download className="h-5 w-5 text-white" />
      </a>
    </motion.div>
  );
};

const GallerySection = () => {
  const { images, status } = useGallery();
  const isDesktop = useIsDesktop();
  const cols = useColumnCount();

  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(15);
  const [fixes, setFixes] = useState({});

  const fixDims = (id, width, height) =>
    setFixes((f) => (f[id] ? f : { ...f, [id]: { width, height } }));

  const sized = useMemo(
    () => images.map((img) => ({ ...img, ...(fixes[img.id] || {}) })),
    [images, fixes],
  );
  const columns = useMemo(() => {
    const buckets = Array.from({ length: cols }, () => []);
    const heights = new Array(cols).fill(0);

    sized.slice(0, visibleCount).forEach((img) => {
      const shortest = heights.indexOf(Math.min(...heights));
      buckets[shortest].push(img);
      heights[shortest] += ratioOf(img);
    });

    return buckets;
  }, [sized, visibleCount, cols]);

  if (status === "loading") {
    return (
      <div className="mx-0 flex gap-3 p-3 md:mx-[50px]">
        {Array.from({ length: cols }).map((_, c) => (
          <div key={c} className="flex flex-1 flex-col gap-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                style={{ aspectRatio: (i + c) % 2 ? "4 / 5" : "4 / 3" }}
                className="w-full animate-pulse rounded-xl bg-white/5"
              />
            ))}
          </div>
        ))}
      </div>
    );
  }

  if (status === "error") {
    return (
      <p className="py-16 text-center font-rubrik text-white/40">
        Couldn't load the gallery right now.
      </p>
    );
  }

  if (status === "empty") {
    return (
      <p className="py-16 text-center font-rubrik text-white/40">
        Nothing here yet.
      </p>
    );
  }

  return (
    <>
      <div className="mx-0 flex items-start gap-3 p-3 md:mx-[50px]">
        {columns.map((col, c) => (
          <div key={c} className="flex flex-1 flex-col gap-3">
            {col.map((img) => (
              <Tile
                key={img.id}
                img={img}
                hover={isDesktop}
                onDims={fixDims}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        ))}
      </div>

      {visibleCount < images.length && (
        <div className="flex justify-center py-10">
          <button
            onClick={() => setVisibleCount((c) => c + 15)}
            className="cursor-target rounded-xl border border-white/20 bg-white/5 px-7 py-3 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10"
          >
            Load More
          </button>
        </div>
      )}

      <AnimatePresence>
        {selectedImage && (
          <Lightbox
            img={{ ...selectedImage, ...(fixes[selectedImage.id] || {}) }}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;
