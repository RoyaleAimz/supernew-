// pages/scripts/index.js

import ScriptCard from '../../components/ScriptCard';

export default function Scripts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* VantaLite Card */}
      <ScriptCard
        title="Lite"
        price="7.99"
        slug="lite"
        image="/images/lite.png"
      />

      {/* VantaElite Card */}
      <ScriptCard
        title="Elite"
        price="12.99"
        slug="elite"
        image="/images/elite.png"
      />

      {/* Day Scripts Card */}
      <a
        href="https://discord.gg/GB4uFdzrzP"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
      >
        <div className="h-48 bg-gray-700 flex items-center justify-center">
          <img
            src="/images/discord-icon.svg"
            alt="Discord"
            className="h-12"
          />
        </div>
        <div className="p-4 bg-gray-900 text-center">
          <h4 className="font-semibold">Day Scripts</h4>
          <p>Join our Discord for Day Scripts</p>
        </div>
      </a>
    </div>
  );
}
