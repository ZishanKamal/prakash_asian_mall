import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Ornament } from "@/components/ui/Ornament";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-parchment-texture py-32">
      <Container className="text-center">
        <p className="font-display text-7xl text-gold-dark sm:text-8xl">404</p>
        <Ornament className="mt-4" />
        <h1 className="mt-6 font-display text-3xl text-ink sm:text-4xl">
          This page has wandered off the Fort Road
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back
          to the heritage.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/" variant="primary">
            <Home className="h-4 w-4" /> Back to home
          </Button>
          <Button href="/shops" variant="outline">
            <ArrowLeft className="h-4 w-4" /> Browse shops
          </Button>
        </div>
      </Container>
    </section>
  );
}
