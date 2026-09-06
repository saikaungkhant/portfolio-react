const PATHS = {
  up: 'M1 17 L10 13 L19 14 L28 8 L37 9 L46 1',
  down: 'M1 1 L10 5 L19 4 L28 10 L37 9 L46 17',
}

export default function Sparkline({ trend = 'up' }) {
  return (
    <svg
      width="47"
      height="18"
      viewBox="0 0 47 18"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={PATHS[trend]}
        stroke="var(--accent)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
