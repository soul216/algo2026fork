```tsx
import { useWallet } from '@txnlab/use-wallet-react'
import { Link } from 'react-router-dom'

/**
 * Home Page — Beyond The Table RWA Demo
 * Rebranded landing page for the BTT tokenization proof-of-concept on Algorand
 */
export default function Home() {
  const { activeAddress } = useWallet()

  return (
    <div style={{ backgroundColor: '#C65A2E' }} className="min-h-screen font-sans">

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center">
          <div
            className="inline-block mb-4 px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full"
            style={{ backgroundColor: '#222222', color: '#F2E9DF' }}
          >
            Beyond The Table — Proof of Concept
          </div>

          <h1
            className="mt-4 text-5xl sm:text-6xl font-black uppercase leading-tight tracking-wide"
            style={{ color: '#F2E9DF', fontFamily: "'Anton', 'Impact', sans-serif" }}
          >
            Tokenizing Cleveland's<br />Creative Economy
          </h1>

          <p
            className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#F2E9DF', opacity: 0.9 }}
          >
            A trust-first platform for artists, community organizations, and foundations to tokenize
            real-world assets on Algorand — transparently, compliantly, and built for the culture.
          </p>

          <p
            className="mt-2 text-sm font-semibold uppercase tracking-widest"
            style={{ color: '#F2E9DF', opacity: 0.65 }}
          >
            Fueling Cleveland's Creative Workforce Through Collaboration
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/tokenize"
              className="px-8 py-3 rounded-lg font-bold uppercase tracking-wide transition shadow-md"
              style={
                activeAddress
                  ? { backgroundColor: '#222222', color: '#F2E9DF' }
                  : { backgroundColor: '#222222', color: '#F2E9DF', opacity: 0.4, cursor: 'not-allowed' }
              }
            >
              Start Tokenizing
            </Link>

            
              className="px-8 py-3 rounded-lg font-bold uppercase tracking-wide transition"
              style={{ border: '2px solid #F2E9DF', color: '#F2E9DF', backgroundColor: 'transparent' }}
              target="_blank"
              rel="noreferrer"
              href="https://dev.algorand.co/concepts/assets/overview/"
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#F2E9DF'
                ;(e.currentTarget as HTMLAnchorElement).style.color = '#C65A2E'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent'
                ;(e.currentTarget as HTMLAnchorElement).style.color = '#F2E9DF'
              }}
            >
              Learn about ASAs
            </a>
          </div>

          {!activeAddress && (
            <p className="mt-6 text-sm" style={{ color: '#F2E9DF', opacity: 0.6 }}>
              Connect your wallet using the button in the top-right to get started.
            </p>
          )}
        </div>
      </div>

      {/* How It Works */}
      <div
        className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24"
        style={{ backgroundColor: '#F2E9DF' }}
      >
        <div className="max-w-7xl mx-auto pt-16">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <h2
                className="text-2xl sm:text-3xl font-black uppercase tracking-wide"
                style={{ fontFamily: "'Anton', 'Impact', sans-serif", color: '#222222' }}
              >
                How It Works
              </h2>
              <p className="mt-2 max-w-2xl" style={{ color: '#222222', opacity: 0.7 }}>
                From wallet to verified asset in four straightforward steps — no technical background required.
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs" style={{ color: '#C65A2E', fontWeight: 700 }}>
              <span className="inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: '#C65A2E' }} />
              Live on Algorand TestNet
            </div>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                num: '1',
                title: 'Connect Your Wallet',
                body: 'Sign in with Pera, Defly, Exodus, or KMD on localnet. One tap to connect — your keys, your control.',
                meta1: 'Non-custodial sign-in',
                meta2: 'Instant',
              },
              {
                num: '2',
                title: 'Define Your Asset',
                body: 'Name it, brand it, set supply and decimals. Attach a metadata URL to link off-chain documentation or legal records.',
                meta1: 'Mint on TestNet',
                meta2: 'Fast',
              },
              {
                num: '3',
                title: 'Track Your Portfolio',
                body: 'Every asset you create is logged in a clean history view — always available, right in your browser.',
                meta1: 'Local history',
                meta2: 'At a glance',
              },
              {
                num: '4',
                title: 'Move Value Freely',
                body: 'Transfer ALGO, TestNet USDC, or any BTT asset directly from the platform — no third-party tools needed.',
                meta1: 'Built-in transfers',
                meta2: 'All-in-one',
              },
            ].map(step => (
              <div
                key={step.num}
                className="group rounded-2xl p-6 transition hover:shadow-xl"
                style={{ backgroundColor: '#FFFFFF', border: '1px solid #e5e0d8' }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-xl font-black text-lg"
                    style={{ backgroundColor: '#C65A2E', color: '#FFFFFF', fontFamily: "'Anton', sans-serif" }}
                  >
                    {step.num}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold uppercase tracking-wide" style={{ color: '#222222' }}>
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed" style={{ color: '#222222', opacity: 0.7 }}>
                      {step.body}
                    </p>
                  </div>
                </div>
                <div className="mt-4 h-px" style={{ backgroundColor: '#F2E9DF' }} />
                <div className="mt-4 flex items-center justify-between text-xs" style={{ color: '#C65A2E', fontWeight: 600 }}>
                  <span>{step.meta1}</span>
                  <span>{step.meta2}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Highlight */}
      <div className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28" style={{ backgroundColor: '#222222' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="text-3xl sm:text-4xl font-black uppercase leading-tight mb-4"
              style={{ fontFamily: "'Anton', 'Impact', sans-serif", color: '#F2E9DF' }}
            >
              Built for Trust.<br />Designed for the Community.
            </h2>
            <p className="mb-6 leading-relaxed" style={{ color: '#F2E9DF', opacity: 0.75 }}>
              Beyond The Table brings institutional-grade compliance controls to artists, foundations,
              and community organizations — without the enterprise price tag or the gatekeeping.
            </p>
            <ul className="space-y-4">
              {[
                { label: 'Manager Role', desc: 'Update and govern asset settings over time' },
                { label: 'Freeze Authority', desc: 'Pause transfers when compliance requires it' },
                { label: 'Clawback Control', desc: 'Recover tokens in dispute or regulatory scenarios' },
                { label: 'Metadata Support', desc: 'Link legal docs, agreements, or media off-chain' },
              ].map(f => (
                <li key={f.label} className="flex gap-3">
                  <span className="font-black text-xl" style={{ color: '#C65A2E' }}>✓</span>
                  <span style={{ color: '#F2E9DF' }}>
                    <strong style={{ color: '#F2E9DF' }}>{f.label}:</strong>{' '}
                    <span style={{ opacity: 0.8 }}>{f.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl p-8" style={{ backgroundColor: '#C65A2E' }}>
            <div className="rounded-xl p-6 shadow-sm" style={{ backgroundColor: '#F2E9DF', border: '1px solid #e0d9d0' }}>
              <p
                className="text-xs mb-4 uppercase tracking-widest font-bold"
                style={{ color: '#C65A2E' }}
              >
                Sample Asset Configuration
              </p>
              <div className="space-y-3 text-sm">
                {[
                  { label: 'Asset Name', value: 'Community Arts Fund', valueStyle: { color: '#222222', fontWeight: 700 } },
                  { label: 'Symbol', value: 'BTT216', valueStyle: { color: '#C65A2E', fontWeight: 700 } },
                  { label: 'Total Supply', value: '1,000,000', valueStyle: { color: '#222222', fontWeight: 700 } },
                  { label: 'Decimals', value: '2', valueStyle: { color: '#222222', fontWeight: 700 } },
                  { label: 'Manager', value: 'Your Wallet', valueStyle: { color: '#222222', fontWeight: 700 } },
                ].map((row, i, arr) => (
                  <div key={row.label}>
                    <div className="flex justify-between">
                      <span style={{ color: '#222222', opacity: 0.6 }}>{row.label}</span>
                      <span style={row.valueStyle}>{row.value}</span>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="mt-3 h-px" style={{ backgroundColor: '#e0d9d0' }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-4 text-xs text-center font-semibold" style={{ color: '#F2E9DF', opacity: 0.75 }}>
              Demo environment — running on Algorand TestNet.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ backgroundColor: '#F2E9DF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <p
            className="text-xs font-black uppercase tracking-widest mb-3"
            style={{ color: '#C65A2E' }}
          >
            Beyond The Table
          </p>
          <h2
            className="text-3xl sm:text-4xl font-black uppercase mb-4"
            style={{ fontFamily: "'Anton', 'Impact', sans-serif", color: '#222222' }}
          >
            Real Assets. Real Community. Real Chain.
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#222222', opacity: 0.7 }}>
            Launch your first BTT token in minutes. Explore what compliant, community-owned asset
            tokenization looks like when it's built for the culture.
          </p>
          <Link
            to="/tokenize"
            className="inline-block px-8 py-3 rounded-lg font-bold uppercase tracking-wide transition shadow-md"
            style={
              activeAddress
                ? { backgroundColor: '#C65A2E', color: '#FFFFFF' }
                : { backgroundColor: '#C65A2E', color: '#FFFFFF', opacity: 0.4, cursor: 'not-allowed' }
            }
          >
            Create Your First Asset
          </Link>
        </div>
      </div>

    </div>
  )
}
```