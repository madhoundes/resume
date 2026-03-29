'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 sm:pt-32 sm:pb-40 lg:pt-40 lg:pb-48">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl leading-[1.1]"
            >
              Designing products that convert, not just look good.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg leading-8 text-zinc-600 font-medium"
            >
              UI/UX Designer & Framer Developer helping startups build scalable, high-performance digital products.
            </motion.p>

            <motion.ul 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-8 space-y-3 text-sm text-zinc-500"
            >
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-900" />
                30+ product experiences shipped
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-900" />
                SaaS & startup-focused
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-900" />
                Optimized for speed, scale, and conversion
              </li>
            </motion.ul>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 text-base font-semibold text-zinc-900"
            >
              From idea → shipped product → measurable results.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 transition-all"
              >
                View Work
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50 transition-all group"
              >
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://drive.google.com/file/d/1JhEeDLTl-xTfYDWwKPPyj9E7ioRufyiU/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold leading-6 text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                Download Resume
                <Download className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-zinc-900/10"
          >
            <Image
              src="https://picsum.photos/seed/dashboardui/1200/1600"
              alt="Product UI Mockup"
              fill
              className="object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-200/40 via-zinc-50 to-zinc-50"></div>
    </section>
  );
}
