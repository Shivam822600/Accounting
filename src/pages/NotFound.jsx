import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section min-h-[60vh] bg-white">
      <div className="container-page max-w-2xl text-center">
        <p className="eyebrow mb-3">404</p>
        <h1 className="heading-lg">Page not found</h1>
        <p className="body-copy mt-4">The page may have moved during the React conversion.</p>
        <Link to="/" className="btn-primary mt-7">
          Back Home
        </Link>
      </div>
    </section>
  );
}
