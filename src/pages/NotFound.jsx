import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl">404</h1>
      <Link to="/" className="btn mt-4">Go Home</Link>
    </div>
  );
}