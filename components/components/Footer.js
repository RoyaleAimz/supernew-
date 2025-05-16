// components/Footer.js

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-6 text-gray-100">
      <div className="container mx-auto grid grid-cols-3 gap-4 text-center text-sm">
        {/* Brand */}
        <div>
          <h3 className="font-semibold">VantaScripts</h3>
          <p>Master Rust with our cutting-edge scripts.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold">Quick Links</h3>
          <Link href="/"><a>Home</a></Link><br />
          <Link href="/scripts"><a>Scripts</a></Link><br />
          <Link href="/faq"><a>FAQ</a></Link><br />
          <a href="#payments">Payments</a>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold">Legal</h3>
          <Link href="/terms"><a>Terms of Service</a></Link><br />
          <Link href="/terms"><a>Privacy Policy</a></Link>
        </div>
      </div>

      <p className="text-center text-xs mt-4">&copy;2025 VantaScripts. All rights reserved.</p>
    </footer>
  );
}
