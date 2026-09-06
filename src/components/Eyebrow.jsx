export default function Eyebrow({ num, children }) {
  return (
    <p className="eyebrow">
      {num ? (
        <span className="eyebrow-num">{num}</span>
      ) : (
        <span className="eyebrow-dot" aria-hidden="true" />
      )}
      {children}
    </p>
  )
}
