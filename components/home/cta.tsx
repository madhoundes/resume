'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative isolate overflow-hidden bg-zinc-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16"
        >
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s build something.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-300">
            Available for freelance opportunities and full-time roles. Let&apos;s discuss how I can help your team build better products.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all group"
            >
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#gradient)" fillOpacity="0.2" />
            <defs>
              <radialGradient id="gradient">
                <stop stopColor="#ffffff" />
                <stop offset={1} stopColor="#a1a1aa" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
