export async function onRequest({ env, params }) {
  const key = Array.isArray(params.path) ? params.path.join("/") : params.path;
  if (!key) return new Response("Missing file path", { status: 400 });

  const obj = await env.PRIVATE_BUCKET.get(key);
  if (!obj) return new Response("File not found", { status: 404 });

  return new Response(obj.body, {
    headers: {
      "Content-Type": obj.httpMetadata?.contentType || "application/octet-stream",
      "Cache-Control": "private, no-store",
    },
  });
}