import { ImageResponse } from 'next/og'
import { site } from '@/lib/content'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: '#0A0D0C',
          color: '#E9F3EE',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 20, height: 20, background: '#3EF2A8' }} />
          <span
            style={{
              fontSize: 28,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: '#3EF2A8',
            }}
          >
            {site.role}
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <span style={{ fontSize: 22, color: '#5C706A' }}>sai@bristol:~$ whoami</span>
          <span style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>{site.name}</span>
          <span style={{ fontSize: 32, color: '#8AA39B', maxWidth: 900 }}>{site.tagline}</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
