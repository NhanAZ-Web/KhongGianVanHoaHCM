import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { basename, join, resolve } from 'node:path'

const inputDir = resolve(process.env.CTIM_VITE_DIST_DIR ?? 'dist-ctim-vite')
const outputDir = resolve(process.env.CTIM_SINGLE_DIST_DIR ?? 'dist-ctim')
const defaultAssetBaseUrl =
  'https://raw.githubusercontent.com/NhanAZ-Web/KhongGianVanHoaHCM/master/public/'

const assetBaseUrl = normalizeBaseUrl(
  process.env.CTIM_ASSET_BASE_URL ?? defaultAssetBaseUrl,
)

function normalizeBaseUrl(value) {
  return value.endsWith('/') ? value : `${value}/`
}

function escapeInlineClosingTag(content, tagName) {
  return content.replace(new RegExp(`</${tagName}`, 'gi'), `<\\/${tagName}`)
}

function getAssetFilePath(url) {
  const parsedUrl = new URL(url, 'https://ctim.local/')
  return join(inputDir, 'assets', basename(parsedUrl.pathname))
}

function rewritePublicAssetUrls(html) {
  return html
    .replace(
      /https:\/\/nhanaz-web\.github\.io\/KhongGianVanHoaHCM\/(assets\/images\/[^"'<>\\\s)]+)/g,
      (_, assetPath) => `${assetBaseUrl}${assetPath}`,
    )
    .replace(
      /\/KhongGianVanHoaHCM\/((?:assets\/images|favicon|apple-touch-icon|android-chrome|site\.webmanifest|robots\.txt|icons\.svg)[^"'<>\\\s)]*)/g,
      (_, assetPath) => `${assetBaseUrl}${assetPath}`,
    )
}

async function inlineStyles(html) {
  const stylesheetPattern =
    /<link\b(?=[^>]*\brel=["']stylesheet["'])(?=[^>]*\bhref=["']([^"']+)["'])[^>]*>/gi

  const matches = [...html.matchAll(stylesheetPattern)]
  let nextHtml = html

  for (const match of matches) {
    const [tag, href] = match
    const css = await readFile(getAssetFilePath(href), 'utf8')
    const inlineStyle = `<style data-ctim-inline="stylesheet">\n${escapeInlineClosingTag(css, 'style')}\n</style>`
    nextHtml = nextHtml.replace(tag, () => inlineStyle)
  }

  return nextHtml
}

async function inlineScripts(html) {
  const scriptPattern =
    /<script\b(?=[^>]*\bsrc=["']([^"']+)["'])([^>]*)><\/script>/gi

  const matches = [...html.matchAll(scriptPattern)]
  let nextHtml = html

  for (const match of matches) {
    const [tag, src, attributes] = match

    if (!/\btype=["']module["']/.test(attributes)) {
      continue
    }

    const js = await readFile(getAssetFilePath(src), 'utf8')
    const inlineScript = `<script type="module" data-ctim-inline="app">\n${escapeInlineClosingTag(js, 'script')}\n</script>`
    nextHtml = nextHtml.replace(tag, () => inlineScript)
  }

  return nextHtml
}

async function main() {
  const sourceHtml = await readFile(join(inputDir, 'index.html'), 'utf8')
  const withRemotePublicAssets = rewritePublicAssetUrls(sourceHtml)
  const withInlineStyles = await inlineStyles(withRemotePublicAssets)
  const singleHtml = await inlineScripts(withInlineStyles)

  await rm(outputDir, { force: true, recursive: true })
  await mkdir(outputDir, { recursive: true })
  await writeFile(join(outputDir, 'index.html'), singleHtml)

  if (process.env.CTIM_KEEP_VITE_DIST !== '1') {
    await rm(inputDir, { force: true, recursive: true })
  }

  console.log(`Created ${join(outputDir, 'index.html')}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
