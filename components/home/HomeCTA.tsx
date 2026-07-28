import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";

export default function HomeCTA() {
  return (
    <section className="py-28">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-[#0B0F16] px-8 py-20 text-center">

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Ready to Elevate Your Online Presence?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
            Whether you're launching a new business or refreshing an existing
            website, we'll create a modern online presence that builds trust,
            attracts customers, and helps your business grow.
          </p>

          <div className="mt-10">
            <Button
              href="/contact"
              className="px-10 py-5 text-lg"
            >
              Get Started Today
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}