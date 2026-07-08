export default {
  fetch(request) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api/worker")) {
      return Response.json({
        name: "Cloudflare",
      });
    }
		return new Response(null, { status: 404 });
  },
} satisfies ExportedHandler<Env>;
