import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Container>
        <h1 className="text-5xl font-bold">Invoicemaster</h1>
        <p>
          <Button asChild>
            <Link href="/dashboard">Sign In</Link>
          </Button>
        </p>
      </Container>
    </main>
  );
}
