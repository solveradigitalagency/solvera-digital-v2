import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";

export default function CTA() {
  return (
    <section className="pb-16">
      <Container>

        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-[#11151E] to-[#18102A] px-6 py-7 md:px-8 lg:px-10 lg:flex-row">

          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7C5CFF]">
              Ready to Get Started?
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
              Let's Build Your New Website.
            </h2>

            <p className="mt-4 max-w-xl text-neutral-400">
              Schedule a free discovery call and let's discuss how we can
              create a website that helps your business stand out online.
            </p>
          </div>

          <Button
            href="/contact"
            className="w-full max-w-xs sm:w-auto"
          >
            Book a Free Discovery Call
          </Button>

        </div>

      </Container>
    </section>
  );
}