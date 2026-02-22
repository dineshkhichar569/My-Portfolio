import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { privateDocs } from "../../data/privateDocs";

function getExt(name = "") {
  const clean = name.split("?")[0].split("#")[0];
  const parts = clean.split(".");
  return parts.length > 1 ? parts.pop().toLowerCase() : "";
}

function inferType(file, explicitType) {
  if (explicitType) return explicitType;
  const ext = getExt(file);
  if (["png", "jpg", "jpeg", "webp", "gif"].includes(ext)) return "image";
  if (ext === "pdf") return "pdf";
  return "file";
}

function prettyType(t) {
  if (t === "pdf") return "PDF";
  if (t === "image") return "Image";
  return "File";
}

function Icon({ type }) {
  // Simple inline icons (no extra libraries)
  if (type === "pdf") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M6 2h8l4 4v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
        <path d="M14 2v6h6" />
        <path d="M7 14h10" />
        <path d="M7 18h6" />
      </svg>
    );
  }
  if (type === "image") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
        <path d="M8 11a2 2 0 1 0 0.001 0z" />
        <path d="M21 16l-5-5L5 21" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M6 2h8l4 4v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
      <path d="M14 2v6h6" />
    </svg>
  );
}

function downloadFile(url, filename) {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename || "";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export default function Documents() {
  const [active, setActive] = useState(null); // { title, file, type, description }

  const docs = useMemo(() => {
    return privateDocs.map((d) => ({
      ...d,
      type: inferType(d.file, d.type),
    }));
  }, []);

  return (
    <div className="min-h-[calc(100vh-64px)] px-4 py-10">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-8 flex flex-col gap-2"
        >
          <h1 className="text-3xl font-semibold tracking-tight">
            Private Vault
          </h1>
          <p className="text-sm opacity-70">
            Secure documents served through Cloudflare Access + R2. Click any
            file to preview & download.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.05, duration: 0.35 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {docs.map((doc, index) => {
            const url = `/api/private-file/${encodeURIComponent(doc.file)}`;
            return (
              <motion.button
                key={doc.file || index}
                type="button"
                onClick={() => setActive({ ...doc, url })}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group text-left rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur transition hover:bg-white/10"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/10 p-2">
                      <Icon type={doc.type} />
                    </div>
                    <div>
                      <div className="font-medium leading-tight">
                        {doc.title}
                      </div>
                      <div className="mt-1 text-xs opacity-70">
                        {prettyType(doc.type)}
                      </div>
                    </div>
                  </div>

                  <div
                    className="opacity-50 group-hover:opacity-90 transition"
                    aria-hidden
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M9 7h8v8" />
                    </svg>
                  </div>
                </div>

                <div className="mt-4 text-xs opacity-70 line-clamp-2">
                  {doc.description || "Click to open secure preview."}
                </div>

                <div className="mt-4 text-[11px] opacity-60 break-all">
                  {doc.file}
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {active && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 z-40 bg-black/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActive(null)}
              />

              {/* Dialog */}
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                role="dialog"
                aria-modal="true"
              >
                <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl">
                  {/* Top bar */}
                  <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="rounded-xl border border-white/10 bg-white/10 p-2">
                        <Icon type={active.type} />
                      </div>
                      <div className="min-w-0">
                        <div className="font-medium truncate">
                          {active.title}
                        </div>
                        <div className="text-xs opacity-70 truncate">
                          {active.file}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => downloadFile(active.url, active.file)}
                        className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm hover:bg-white/15 transition"
                      >
                        Download
                      </button>

                      <a
                        href={active.url}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm hover:bg-white/15 transition"
                      >
                        Open
                      </a>

                      <button
                        type="button"
                        onClick={() => setActive(null)}
                        className="rounded-xl border border-white/10 px-3 py-2 text-sm hover:bg-white/5 transition"
                        aria-label="Close"
                      >
                        ✕
                      </button>
                    </div>
                  </div>

                  {/* Preview area */}
                  <div className="h-[70vh] bg-black">
                    {active.type === "image" ? (
                      <div className="h-full w-full flex items-center justify-center p-4">
                        <img
                          src={active.url}
                          alt={active.title}
                          className="max-h-full max-w-full rounded-xl border border-white/10 object-contain"
                        />
                      </div>
                    ) : active.type === "pdf" ? (
                      <iframe
                        title={active.title}
                        src={active.url}
                        className="h-full w-full"
                      />
                    ) : (
                      <div className="h-full w-full flex flex-col items-center justify-center gap-3 p-6 text-center">
                        <div className="text-lg font-medium">
                          Preview not available
                        </div>
                        <div className="text-sm opacity-70">
                          This file type can’t be previewed here. Use Open or
                          Download.
                        </div>
                        <div className="flex gap-2">
                          <a
                            href={active.url}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm hover:bg-white/15 transition"
                          >
                            Open in new tab
                          </a>
                          <button
                            type="button"
                            onClick={() =>
                              downloadFile(active.url, active.file)
                            }
                            className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm hover:bg-white/15 transition"
                          >
                            Download
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Footer hint */}
                  <div className="border-t border-white px-4 py-3 text-xs opacity-70">
                    Tip: Press
                    <span className="rounded bg-white px-1 py-0.5">Esc</span>
                    to close.
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* ESC key to close */}
      <EscToClose open={!!active} onClose={() => setActive(null)} />
    </div>
  );
}

function EscToClose({ open, onClose }) {
  useMemo(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return null;
}
