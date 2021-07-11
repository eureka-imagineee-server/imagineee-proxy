import { Application } from "https://deno.land/x/abc@v1.3.3/mod.ts";

const app = new Application();

app.get("/get", async (c) => {
	let r
	let result = await fetch(c.queryParams.url)
	//if (c.queryParams.type == 'text') {
		result = await result.text()
	//}
	r = result
	return JSON.stringify({data: r});
})
.start({ port: 8080 || process.env.PORT });

console.log(`running at http://localhost:${8080 || process.env.PORT}/`);