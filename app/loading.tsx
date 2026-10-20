export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100">
      <div
        className="w-10 h-10 rounded-full border-4 border-purple-200 border-t-purple-600 animate-spin"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}
