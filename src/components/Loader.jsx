export default function Loader() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      
      <div className="flex gap-2">
        <span className="w-3 h-3 bg-primary rounded-full animate-bounce"></span>
        <span className="w-3 h-3 bg-primary rounded-full animate-bounce delay-150"></span>
        <span className="w-3 h-3 bg-primary rounded-full animate-bounce delay-300"></span>
      </div>

      <p className="mt-4 text-gray-500 text-sm">
        Loading...
      </p>

    </div>
  );
}