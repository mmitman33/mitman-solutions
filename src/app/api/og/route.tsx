import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export async function GET() {
  // Fetch the image data
  const imageUrl = 'https://mitman-solutions.com/images/icon-only-large.png'
  const imageResponse = await fetch(imageUrl)
  
  if (!imageResponse.ok) {
    throw new Error(`Failed to fetch image: ${imageResponse.status}`)
  }
  
  const imageData = await imageResponse.arrayBuffer()
  const imageBlob = new Blob([imageData], { type: 'image/png' })
  
  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          <img
            src={imageBlob}
            alt="Mitman Solutions"
            width="200"
            height="200"
            style={{
              objectFit: 'contain',
              backgroundColor: 'transparent',
            }}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
