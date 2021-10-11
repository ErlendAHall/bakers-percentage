import { resolve } from "https://deno.land/std/path/mod.ts";
import { send, Router, Application } from "https://deno.land/x/oak/mod.ts";

let clientDir = resolve(Deno.cwd(), "../client/");
let router = new Router();
let bpApp = new Application();

router.get("/", serveStatics);

async function serveStatics(context) {
  await send(context, context.request.url.pathname, {
    root: clientDir,
    index: "index.html",
  });
}

bpApp.use(router.routes());
bpApp.use(router.allowedMethods);
await bpApp.listen({ port: 1337 });
