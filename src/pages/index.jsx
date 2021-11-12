import Counter from "~/components/Counter";
import { Link } from "solid-app-router"

export default function Home() {
  return (
    <main>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <Link href="/blog/why-i-love-solid/">Another page</Link>{" "}
        to learn how to build Solid apps.
      </p>
    </main>
  );
}
