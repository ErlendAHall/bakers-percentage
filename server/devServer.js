import { resolve } from "https://deno.land/std/path/mod.ts"
import { send, Router, Application } from "https://deno.land/x/oak/mod.ts"

let clientDir = resolve(Deno.cwd() + "/client")
console.log("%c⧭", "color: #00e600", clientDir)
let router = new Router()
let bpApp = new Application()
let port = 1337

bpApp.use(async (context) => {
  await send(context, context.request.url.pathname, {
    root: clientDir,
    index: "index.html",
  })
})
bpApp.addEventListener("", (error) => console.log(error))

console.info("Bakers percentage is running at localhost:" + port)
await bpApp.listen({ port })

async function serveStatics(context) {
  // await send(context, context.params.path ?? "");
  await send(context, context.request.url.pathname, {
    root: clientDir,
    index: "index.html",
  })
}
