import { useWallet } from '@txnlab/use-wallet-react'
import { Link } from 'react-router-dom'

/**
 * Home Page
 * Landing page showcasing the RWA tokenization platform
 * Displays features, how it works, and CTAs to connect wallet and create assets
 */
export default function Home() {
  const { activeAddress } = useWallet()

  return (
    <div className="bg-white dark:bg-indigo-950">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 text-sm font-semibold rounded-full">
            ALGOSOUL Assets LLC — Proof of Concept
          </div>

          <h1 className="mt-4 text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
            The SOUL216 + ALGO<br />Asset Ecosystem
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A trust-first platform for artists, organizations, and community foundations to tokenize real-world assets on Algorand — transparently, compliantly, and without the noise.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/tokenize"
              className={`px-8 py-3 rounded-lg font-semibold transition text-white shadow-md ${
                activeAddress ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-slate-400 cursor-not-allowed'
              }`}
            >
              Start Tokenizing
            </Link>

            <a
              className="px-8 py-3 border-2 border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 rounded-lg font-semibold hover:border-indigo-400 dark:hover:border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/40 transition"
              target="_blank"
              rel="noreferrer"
              href="https://dev.algorand.co/concepts/assets/overview/"
            >
              Learn about ASAs
            </a>
          </div>

          {!activeAddress && (
            <p className="mt-6 text-slate-500 dark:text-slate-400">Connect your wallet using the button in the top-right to get started.</p>
          )}
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">How it works</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl">
              From wallet to verified asset in four straightforward steps — no technical background required.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="inline-flex h-2 w-2 rounded-full bg-amber-500" />
            Live on Algorand TestNet
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Step 1 */}
          <div
            className="group rounded-2xl border border-indigo-100 dark:border-indigo-800 bg-white dark:bg-indigo-900/40 backdrop-blur
                          p-6 hover:shadow-lg hover:shadow-indigo-100/60 dark:hover:shadow-indigo-950/60 transition"
          >
            <div className="flex items-start gap-4">
              <div
                className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-xl
                              bg-indigo-100 text-indigo-600 dark:bg-indigo-800/60 dark:text-indigo-300 font-bold"
              >
                1
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Connect Your Wallet</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Sign in with Pera, Defly, Exodus, or KMD on localnet. One tap to connect — your keys, your control.
                </p>
              </div>
            </div>

            <div className="mt-4 h-px bg-indigo-50 dark:bg-indigo-800" />

            <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Non-custodial sign-in</span>
              <span className="group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">Instant</span>
            </div>
          </div>

          {/* Step 2 */}
          <div
            className="group rounded-2xl border border-indigo-100 dark:border-indigo-800 bg-white dark:bg-indigo-900/40 backdrop-blur
                          p-6 hover:shadow-lg hover:shadow-indigo-100/60 dark:hover:shadow-indigo-950/60 transition"
          >
            <div className="flex items-start gap-4">
              <div
                className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-xl
                              bg-indigo-100 text-indigo-600 dark:bg-indigo-800/60 dark:text-indigo-300 font-bold"
              >
                2
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Define Your Asset</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Name it, brand it, set supply and decimals. Attach a metadata URL to link off-chain documentation or legal records.
                </p>
              </div>
            </div>

            <div className="mt-4 h-px bg-indigo-50 dark:bg-indigo-800" />

            <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Mint on TestNet</span>
              <span className="group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">Fast</span>
            </div>
          </div>

          {/* Step 3 */}
          <div
            className="group rounded-2xl border border-indigo-100 dark:border-indigo-800 bg-white dark:bg-indigo-900/40 backdrop-blur
                          p-6 hover:shadow-lg hover:shadow-indigo-100/60 dark:hover:shadow-indigo-950/60 transition"
          >
            <div className="flex items-start gap-4">
              <div
                className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-xl
                              bg-indigo-100 text-indigo-600 dark:bg-indigo-800/60 dark:text-indigo-300 font-bold"
              >
                3
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Track Your Portfolio</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Every asset you create is logged in a clean history view — always available, right in your browser.
                </p>
              </div>
            </div>

            <div className="mt-4 h-px bg-indigo-50 dark:bg-indigo-800" />

            <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Local history</span>
              <span className="group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">At a glance</span>
            </div>
          </div>

          {/* Step 4 */}
          <div
            className="group rounded-2xl border border-indigo-100 dark:border-indigo-800 bg-white dark:bg-indigo-900/40 backdrop-blur
                          p-6 hover:shadow-lg hover:shadow-indigo-100/60 dark:hover:shadow-indigo-950/60 transition"
          >
            <div className="flex items-start gap-4">
              <div
                className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-xl
                              bg-indigo-100 text-indigo-600 dark:bg-indigo-800/60 dark:text-indigo-300 font-bold"
              >
                4
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Move Value Freely</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Transfer ALGO, TestNet USDC, or any SOUL216 asset directly from the platform — no third-party tools needed.
                </p>
              </div>
            </div>

            <div className="mt-4 h-px bg-indigo-50 dark:bg-indigo-800" />

            <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Built-in transfers</span>
              <span className="group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">All-in-one</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Highlight */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Built for Trust. Designed for Real Life.</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              ALGOSOUL Assets brings institutional-grade compliance controls to artists, foundations, and community organizations — without the enterprise price tag.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-amber-500 dark:text-amber-400 font-bold text-xl">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Manager Role:</strong> Update and govern asset settings over time
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 dark:text-amber-400 font-bold text-xl">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Freeze Authority:</strong> Pause transfers when compliance requires it
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 dark:text-amber-400 font-bold text-xl">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Clawback Control:</strong> Recover tokens in dispute or regulatory scenarios
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 dark:text-amber-400 font-bold text-xl">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Metadata Support:</strong> Link legal docs, agreements, or media off-chain
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-900/40 rounded-2xl p-8">
            <div className="bg-white dark:bg-indigo-950/80 rounded-xl border border-indigo-100 dark:border-indigo-800 p-6 shadow-sm">
              <p className="text-xs text-indigo-400 dark:text-indigo-500 mb-4 font-mono uppercase tracking-widest">Sample Asset Configuration</p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Asset Name</span>
                  <span className="font-semibold text-slate-900 dark:text-white">Community Arts Fund</span>
                </div>
                <div className="h-px bg-indigo-50 dark:bg-indigo-800" />
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Symbol</span>
                  <span className="font-semibold text-amber-500 dark:text-amber-400">SOUL216</span>
                </div>
                <div className="h-px bg-indigo-50 dark:bg-indigo-800" />
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Total Supply</span>
                  <span className="font-semibold text-slate-900 dark:text-white">1,000,000</span>
                </div>
                <div className="h-px bg-indigo-50 dark:bg-indigo-800" />
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Decimals</span>
                  <span className="font-semibold text-slate-900 dark:text-white">2</span>
                </div>
                <div className="h-px bg-indigo-50 dark:bg-indigo-800" />
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Manager</span>
                  <span className="font-semibold text-slate-900 dark:text-white">Your Wallet</span>
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs text-center text-indigo-400 dark:text-indigo-500">This is a demo environment running on Algorand TestNet.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 dark:bg-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <p className="text-amber-400 dark:text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">ALGOSOUL Assets LLC</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Real assets. Real community. Real chain.</h2>
          <p className="text-lg text-indigo-200 mb-8 max-w-2xl mx-auto">
            Launch your first SOUL216 token in minutes. Explore what compliant, community-owned asset tokenization looks like in practice.
          </p>
          <Link
            to="/tokenize"
            className={`inline-block px-8 py-3 rounded-lg font-semibold transition ${
              activeAddress
                ? 'bg-amber-500 text-white hover:bg-amber-600 shadow-md'
                : 'bg-indigo-400 text-white cursor-not-allowed'
            }`}
          >
            Create Your First Asset
          </Link>
        </div>
      </div>
    </div>
  )
}