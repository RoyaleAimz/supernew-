// components/Header.js

import Link from 'next/link'
import BackButton from './BackButton'

export default function Header() {
  return (
    <header className="h-16 flex items-center justify-between px-6 bg-transparent">
      {/* Left: Back + Logo */}
      <div className="flex items-center space-x-4">
        <BackButton />
        <Link href="/">
          <a className="font-bold text-xl">VantaScripts</a>
        </Link>
      </div>

      {/* Center: Nav */}
      <nav className="space-x-6">
        <Link href="/"><a>Home</a></Link>
        <Link href="/scripts"><a>Scripts</a></Link>
        <Link href="/faq"><a>FAQ</a></Link>
        <a href="#payments">Payments</a>
      </nav>

      {/* Right: Discord Icon */}
      <a href="https://discord.gg/GB4uFdzrzP" target="_blank" rel="noopener noreferrer">
        <img src="/images/discord-icon.svg" alt="Discord" className="w-6 h-6 hover:opacity-80" />
      </a>
    </header>
  )
}
