// components/PaymentBar.js

export default function PaymentBar() {
  return (
    <div
      id="payments"
      className="fixed bottom-0 left-0 w-full bg-gray-800 py-2 flex justify-center space-x-4 z-50"
    >
      {[
        'mastercard',
        'visa',
        'amex',
        'paypal',
        'apple-pay',
        'google-pay',
        'crypto',
        'cash-app',
      ].map((name) => (
        <img
          key={name}
          src={`/images/${name}.svg`}
          alt={name}
          className="h-6"
        />
      ))}
    </div>
  );
}
