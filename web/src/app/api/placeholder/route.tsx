import type { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  // Get parameters with defaults
  const width = Number.parseInt(searchParams.get("width") || "300", 10)
  const height = Number.parseInt(searchParams.get("height") || "300", 10)
  const text = searchParams.get("text") || `${width}×${height}`
  const bgColor = searchParams.get("bgColor") || "#636f80" // slate-200
  const textColor = searchParams.get("textColor") || "#64748b" // slate-500

  // Create SVG
  const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${bgColor}"/>
      <text 
        x="50%" 
        y="50%" 
        dominant-baseline="middle" 
        text-anchor="middle" 
        font-family="system-ui, sans-serif" 
        font-size="${Math.floor(width / 10)}px" 
        font-weight="500" 
        fill="${textColor}"
      >
        ${text}
      </text>
    </svg>
  `

  // Return the SVG with appropriate headers
  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  })
}
