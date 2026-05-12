import Container from "../components/Container.jsx";
import Button from "../components/Button.jsx";

export default function StaffUnavailable() {
  return (
    <div className="py-24 bg-funeka-bg min-h-screen flex items-center">
      <Container>
        <div className="max-w-xl rounded-2xl border border-funeka-divider bg-white p-8 shadow-soft">
          <h1 className="text-2xl font-semibold text-funeka-anchor">Staff portal is currently unavailable.</h1>
          <p className="mt-3 text-funeka-text leading-relaxed">
            Please return to the public site while secure staff access is being prepared.
          </p>
          <div className="mt-6">
            <Button as="a" href="/">Home</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
