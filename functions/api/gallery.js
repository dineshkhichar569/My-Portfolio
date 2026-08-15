export async function onRequest({ env }) {
  const auth = btoa(env.IMAGEKIT_PRIVATE_KEY + ":");

  const res = await fetch(
    "https://api.imagekit.io/v1/files?path=/gallery&fileType=image&limit=100&sort=DESC_CREATED",
    { headers: { Authorization: `Basic ${auth}` } },
  );

  if (!res.ok) {
    return new Response(JSON.stringify({ error: "imagekit_failed" }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }

  const files = await res.json();

  const images = files.map((f) => ({
    id: f.fileId,
    url: f.url,
    alt:
      f.customMetadata?.alt ||
      f.name.replace(/\.[^.]+$/, "").replace(/[-_]/g, " "),
    width: f.width,
    height: f.height,
  }));

  return new Response(JSON.stringify(images), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=300, s-maxage=300",
    },
  });
}
