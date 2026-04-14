export default function Loader() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
      
      <div className="relative">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-primary/30 rounded-full animate-ping"></div>
      </div>

      <p className="mt-4 text-gray-600 font-medium animate-pulse">
        Loading your data...
      </p>

    </div>
  );
}