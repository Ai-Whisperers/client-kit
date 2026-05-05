// This script copies the shared modules to all client repos
// Run: npx tsx scripts/copy-to-repos.ts

const SHARED_SRC = "/tmp/client-kit-new/src"
const TYPE_B_REPOS = [
  "dayah-litworks-deploy", "superspuma", "depiflash", "bichos-gym",
  "cocodrilo-fitness", "mantra-spa", "luis-de-leon-concept", "magnolia-peluqueria",
  "3md-website", "ozmontania-website", "villamayor-asociados", "maiyu-atelier", "nudo"
]
const ROOT = "/root"
const MODULES = ["types", "storage", "analytics", "seo", "ui", "db"]
// payment module is more complex — only copy to e-commerce sites

async function main() {
  const { cp } = await import("fs/promises")
  const { join } = await import("path")
  
  for (const repo of TYPE_B_REPOS) {
    const target = join(ROOT, repo, "lib", "client-kit")
    await cp(SHARED_SRC, target, { recursive: true, force: true })
    console.log(`Copied to ${repo}/lib/client-kit/`)
  }
}
main().catch(console.error)
