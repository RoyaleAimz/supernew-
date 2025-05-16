// components/BackButton.js

export default function BackButton() {
  return (
    <button
      onClick={() => history.back()}
      className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm"
    >
      Back
    </button>
  );
}
