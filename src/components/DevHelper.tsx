import './DevHelper.css'

interface DevHelperProps {
  mensaje: string
}

function DevHelper({ mensaje }: DevHelperProps) {
  return (
    <div className="dev-helper">
      <div className="dev-helper-bubble">{mensaje}</div>
      <svg className="dev-helper-avatar" viewBox="0 0 100 220" role="img" aria-label="Asistente MOP">
        <ellipse cx="50" cy="215" rx="45" ry="8" fill="var(--color-border)" />
        <rect x="15" y="120" width="70" height="80" rx="18" fill="var(--color-accent-green)" />
        <rect x="30" y="140" width="40" height="28" rx="4" fill="var(--color-bg)" />
        <text x="50" y="160" textAnchor="middle" fontFamily="monospace" fontWeight="bold" fontSize="16" fill="var(--color-accent-green)">MOP</text>
        <circle cx="50" cy="70" r="48" fill="var(--color-surface)" stroke="var(--color-text-primary)" strokeWidth="2" />
        <circle cx="32" cy="65" r="7" fill="var(--color-text-primary)" />
        <circle cx="68" cy="65" r="7" fill="var(--color-text-primary)" />
        <circle cx="32" cy="63" r="2" fill="var(--color-surface)" />
        <circle cx="68" cy="63" r="2" fill="var(--color-surface)" />
        <path d="M35 88 Q50 98 65 88" fill="none" stroke="var(--color-text-primary)" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="6" y="14" width="88" height="10" rx="5" fill="var(--color-text-primary)" />
        <circle cx="12" cy="19" r="4" fill="var(--color-accent-blue)" />
        <circle cx="88" cy="19" r="4" fill="var(--color-accent-blue)" />
      </svg>
    </div>
  )
}

export default DevHelper