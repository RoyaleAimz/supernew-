// pages/index.js

import Link from 'next/link';

export default function Home() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      {/* Left: Hero Text */}
      <div>
        <h1 className="text-4xl font-bold">Unleash your potential with VantaScripts!</h1>
        <p className="mt-4 text-lg">
          Premium Rust scripts built for power, performance, and peace of mind.
        </p>
        <Link href="/scripts">
          <a className="mt-6 inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg">
            View Scripts
          </a>
        </Link>
      </div>

      {/* Right: Dashboard Placeholder */}
      <div>
        <img
          src="/images/placeholder-dashboard.png"
          alt="Dashboard Preview"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
