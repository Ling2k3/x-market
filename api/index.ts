console.log("Start serving via Bun!");
Bun.serve({
	fetch(request: Request): Response | Promise<Response> {
		return new Response("ducanh !");
	},
	port: 4444,
});
