import { NavLink } from "react-router-dom";
import Container from "../components/Container.jsx";
import Button from "../components/Button.jsx";

export default function NotFound() {
  return (
    <div className="py-16">
      <Container>
        <div className="max-w-xl rounded-2xl border border-funeka-dividerGrey bg-white p-8 shadow-soft">
          <h1 className="text-2xl font-semibold text-funeka-charcoal">Page not found</h1>
          <p className="mt-3 text-funeka-midGrey leading-relaxed">
            The page you’re looking for doesn’t exist. Use the navigation to continue.
          </p>
          <div className="mt-6 flex gap-3">
            <Button as={NavLink} to="/">Home</Button>
            <Button as={NavLink} to="/jobs" variant="ghost">View Jobs</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
