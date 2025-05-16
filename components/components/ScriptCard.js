// components/ScriptCard.js

import Link from 'next/link';

export default function ScriptCard({ title, price, slug, image }) {
  return (
    <Link href={`/scripts/${slug}`}>
      <a className="relative block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        {/* Background Image */}
        <div
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-wrap gap-2">
          {[
            'Undetected',
            'Best Value',
            'Maximum Stealth',
            'Complete Security',
            'Ultra Performance',
          ].map((badge) => (
            <span
              key={badge}
              className="px-2 py-1 bg-gray-700 bg-opacity-75 rounded-full text-xs neon-glow"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Title & Price */}
        <div className="p-4 flex justify-between items-center bg-gray-900">
          <h4 className="font-semibold">{title}</h4>
          <span className="font-bold">${price}</span>
        </div>
      </a>
    </Link>
  );
}
