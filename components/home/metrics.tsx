export default function Metrics() {
  return (
    <section className="py-24 sm:py-32 bg-zinc-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
          <div className="flex flex-col gap-y-3 border-r border-zinc-800 last:border-0 md:border-r">
            <dt className="text-sm leading-6 text-zinc-400">Project Views</dt>
            <dd className="order-first text-4xl font-semibold tracking-tight text-white sm:text-5xl">100k+</dd>
          </div>
          <div className="flex flex-col gap-y-3 border-r border-zinc-800 last:border-0 md:border-r">
            <dt className="text-sm leading-6 text-zinc-400">Appreciations</dt>
            <dd className="order-first text-4xl font-semibold tracking-tight text-white sm:text-5xl">10k+</dd>
          </div>
          <div className="flex flex-col gap-y-3 border-r border-zinc-800 last:border-0 md:border-r">
            <dt className="text-sm leading-6 text-zinc-400">Years Experience</dt>
            <dd className="order-first text-4xl font-semibold tracking-tight text-white sm:text-5xl">5+</dd>
          </div>
          <div className="flex flex-col gap-y-3">
            <dt className="text-sm leading-6 text-zinc-400">Happy Clients</dt>
            <dd className="order-first text-4xl font-semibold tracking-tight text-white sm:text-5xl">50+</dd>
          </div>
        </div>
      </div>
    </section>
  );
}
