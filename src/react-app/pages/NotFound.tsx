import { Container, Heading, Button } from "../components/ui";

export default function NotFound() {
  return (
    <section>
      <Container className="py-32">
        <p className="font-display text-sm font-bold text-blue-400">404</p>
        <Heading as="h1" className="mt-4">This page doesn't exist.</Heading>
        <p className="mt-5 max-w-lg text-lg text-gray-300">The link may be old or mistyped. Here are a few places to start.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/">Go home</Button>
          <Button to="/programs" variant="secondary">See programs</Button>
        </div>
      </Container>
    </section>
  );
}
