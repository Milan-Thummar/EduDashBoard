import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <main
      id="main"
      className="ui-container py-14 flex items-center justify-center"
    >
      <section className="w-full max-w-xl p-8 text-center">
        <p className="text-xs font-semibold tracking-wider text-color-text-secondary uppercase">
          404 error
        </p>

        <h1 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-color-text-primary">
          Page not found
        </h1>

        <p className="mt-3 text-sm text-color-text-secondary">
          The page you’re looking for doesn’t exist.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            aria-label="Go back to dashboard"
            className="ui-btn-primary w-full"
          >
            Go to Dashboard
          </Link>

          <Button
            variant="outline"
            fullWidth
            ariaLabel="Go back to previous page"
            onClick={() => navigate(-1)}
          >
            Go Back
          </Button>
        </div>
      </section>
    </main>
  );
}
