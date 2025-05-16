// pages/faq.js

export default function FAQ() {
  const items = [
    {
      question: 'How can I trust VantaScripts?',
      answer: 'Join our Discord to see vouches and feedback.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept Credit/Debit, Apple Pay, Google Pay, PayPal, PaySafe, Crypto, and Cash App.'
    },
    {
      question: 'What’s your refund policy?',
      answer: 'If a script malfunctions or we make an error, you’re eligible for a full refund.'
    },
    {
      question: 'How do I install my script?',
      answer: 'After purchase, visit our Discord or the Scripts page to download the loader and follow the setup guide.'
    },
    {
      question: 'How can I bypass an EAC ban?',
      answer: 'Use our built-in spoofer on a fresh account—launch, click “Spoof,” and you’re set.'
    }
  ];

  return (
    <div className="space-y-4">
      {items.map(({ question, answer }) => (
        <details key={question} className="p-4 bg-gray-700 rounded-lg">
          <summary className="cursor-pointer font-semibold text-lg">{question}</summary>
          <p className="mt-2 text-base">{answer}</p>
        </details>
      ))}
    </div>
  );
}
