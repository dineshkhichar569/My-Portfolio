import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { privateDocs } from "../../data/privateDocs";
import {
  DownloadCloud,
  File,
  FileText,
  Image,
  MoveUpRight,
  Search,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

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
  if (type === "pdf") {
    return <FileText className="h-5 w-5" />;
  }
  if (type === "image") {
    return <Image className="w-5 h-5" />;
  }
  return <File className="w-5 h-5" />;
}

function downloadFile(url, filename) {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename || "";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/80">
      {children}
    </span>
  );
}

export default function Documents() {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const docs = useMemo(() => {
    return privateDocs.map((d) => ({
      ...d,
      type: inferType(d.file, d.type),
    }));
  }, []);

  // for Search and direct option button
  const filterDocs =
    filter === "all"
      ? docs.filter((doc) =>
          doc.title.toLowerCase().includes(search.toLowerCase()),
        )
      : docs.filter(
          (doc) =>
            doc.type === filter &&
            doc.title.toLowerCase().includes(search.toLowerCase()),
        );

  return (
    <div
      className="relative min-h-screen px-4 py-10 text-white bg-gradient-to-b from-black via-black to-zinc-950"
      onClick={() => {
        if (active != null) {
          setActive(null);
        }
      }}
    >
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-8 left-8 z-50"
      >
        <Link to={-1}>
          <motion.div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-base font-medium cursor-pointer backdrop-blur-md bg-white/10 border border-white/20 shadow-[0_0_8px_rgba(0,255,255,0.2)]"
            whileHover={{
              scale: 1.15,
              rotate: -8,
              boxShadow: "0 0 12px rgba(0,255,255,0.4)",
              backgroundColor: "rgba(0, 255, 255, 0.1)",
            }}
            whileTap={{
              scale: 0.95,
              rotate: 0,
              boxShadow: "0 0 16px rgba(0,255,255,0.5)",
            }}
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            ⟵
          </motion.div>
        </Link>
      </motion.div>


      {/* Main Content */}
      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <h1 className="text-3xl font-semibold tracking-tight">
                  Private Vault
                </h1>
              </div>
              <p className="max-w-2xl text-sm text-white/70">
                Secure documents served through Cloudflare Access + R2. Click
                any file to preview & download.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                <Pill>{docs.length} items</Pill>
                <Pill>Zero Trust</Pill>
                <Pill>R2 Storage</Pill>
              </div>
            </div>

            {/* to controll what to show */}
            <div className="flex w-full flex-col gap-2 sm:w-[22rem]">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Search className="text-white/50 h-5 w-5" />
                </span>
                <input
                  placeholder="Search Documents"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-10 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/20 focus:bg-white/10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilter("all")}
                  className={`rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 ${
                    filter == "all"
                      ? "bg-white text-black border-white"
                      : "border-white/10 bg-white/5 text-white/70"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilter("pdf")}
                  className={`rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 ${
                    filter == "pdf"
                      ? "bg-white text-black border-white"
                      : "border-white/10 bg-white/5 text-white/70"
                  }`}
                >
                  PDF
                </button>
                <button
                  onClick={() => setFilter("image")}
                  className={`rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 ${
                    filter == "image"
                      ? "bg-white text-black border-white"
                      : "border-white/10 bg-white/5 text-white/70"
                  }`}
                >
                  Images
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.05, duration: 0.35 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filterDocs.map((doc, index) => {
            const url = `/api/private-file/${encodeURIComponent(doc.file)}`;
            return (
              <motion.button
                key={index}
                type="button"
                onClick={() => setActive({ ...doc, url })}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-left shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur transition hover:border-white/20 hover:bg-white/[0.09]"
              >
                {/* box background glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute -top-24 right-[-6rem] h-56 w-56 rounded-full bg-white/15 blur-3xl" />
                </div>

                <div className="relative flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-2.5">
                      <Icon type={doc.type} />
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold leading-tight text-white">
                        {doc.title}
                      </div>
                      <div className="mt-1 text-xs text-white/70">
                        {prettyType(doc.type)}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="hidden sm:inline-flex rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/70">
                      Protected
                    </span>
                    <div
                      className="opacity-60 transition group-hover:opacity-100"
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
                </div>

                <div className="relative mt-4 text-xs text-white/70 line-clamp-2">
                  {doc.description || "Click to open secure preview."}
                </div>

                <div className="relative mt-4 flex items-center justify-between gap-3">
                  <div className="text-[11px] text-white/55 truncate">
                    {doc.file}
                  </div>
                  <div className="h-6 w-6 rounded-full border border-white/10 bg-white/5 opacity-0 transition group-hover:opacity-100 flex items-center justify-center">
                    <DownloadCloud className="w-4 h-4" />
                  </div>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* PopUp box to view contents */}
        <AnimatePresence>
          {active && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 z-40 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActive(null)}
              />

              {/* PopUp contents */}
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                role="dialog"
                aria-modal="true"
              >
                <div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)] backdrop-blur-xl">
                  {/* Top bar */}
                  <div className="flex flex-col gap-3 border-b border-white/10 px-5 py-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="rounded-lg border border-white/10 bg-white/10 p-2">
                        <Icon type={active.type} />
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold truncate">
                          {active.title}
                        </div>
                        <div className="text-xs text-white/70 truncate">
                          {active.file}
                        </div>
                      </div>
                      <div className="hidden sm:flex items-center gap-2 pl-2">
                        <Pill>{prettyType(active.type)}</Pill>
                        <Pill>Secure</Pill>
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-2">
                      <button
                        className="rounded-xl border flex gap-2 items-center border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white hover:bg-white/10 transition"
                        onClick={() => downloadFile(active.url, active.file)}
                      >
                        <DownloadCloud className="w-4 h-4" />
                        Download
                      </button>

                      <a
                        href={active.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl border flex gap-2 items-center border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white hover:bg-white/10 transition"
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
                        Open
                      </a>

                      <button
                        type="button"
                        onClick={() => setActive(null)}
                        className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10 transition"
                        aria-label="Close"
                      >
                        ✕
                      </button>
                    </div>
                  </div>

                  {/* Preview area */}
                  <div className="h-[74vh] bg-black/10 p-0">
                    {active.type === "image" ? (
                      <div className="h-full w-full flex items-center justify-center">
                        <div className="relative h-full w-full border border-white/10 bg-black/40 p-3">
                          <img
                            src={active.url}
                            alt={active.title}
                            className="h-full w-full rounded-xl object-contain"
                          />
                        </div>
                      </div>
                    ) : active.type === "pdf" ? (
                      <div className="h-full w-full">
                        <div className="h-full w-full overflow-hidden border border-white/10 bg-black/40">
                          <iframe
                            title={active.title}
                            src={active.url}
                            className="h-full w-full"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="h-full w-full flex flex-col items-center justify-center gap-4 p-8 text-center">
                        <div className="text-xl font-semibold">
                          Preview not available
                        </div>
                        <div className="max-w-md text-sm text-white/70">
                          This file type can’t be previewed in the modal. Use{" "}
                          <b>Open</b> or <b>Download</b>.
                        </div>
                        <div className="flex gap-2">
                          <Button as="a" href={active.url} variant="primary">
                            Open
                          </Button>
                          <Button
                            variant="secondary"
                            onClick={() =>
                              downloadFile(active.url, active.file)
                            }
                          >
                            Download
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between border-t border-white/10 px-5 py-2 text-xs text-white/60">
                    <span className="hidden sm:inline">
                      Protected by Cloudflare Access
                    </span>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
