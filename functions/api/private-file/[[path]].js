export async function onRequest(context) {
  const { env, params, request } = context;

  // [[path]] makes params.path an array of URL segments
  const key = Array.isArray(params.path) ? params.path.join("/") : params.path;

  // Cloudflare Access header (request must pass Access)
  const accessJwt = request.headers.get("Cf-Access-Jwt-Assertion");
  if (!accessJwt) {
    return new Response("Unauthorized", { status: 401 });
  }

  // Fetch from R2 (binding name: PRIVATE_BUCKET)
  const obj = await env.PRIVATE_BUCKET.get(key);
  if (!obj) {
    return new Response("File not found", { status: 404 });
  }

  return new Response(obj.body, {
    headers: {
      "Content-Type":
        obj.httpMetadata?.contentType || "application/octet-stream",
      // Optional: force download instead of opening in browser
      // "Content-Disposition": `attachment; filename="${key.split("/").pop()}"`,
    },
  });
}
