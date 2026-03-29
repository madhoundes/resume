'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

const projects = [
  {
    id: 'fintech-dashboard',
    title: 'Fintech Dashboard App',
    impact: 'Increased user retention by 35% through simplified navigation.',
    image: 'https://picsum.photos/seed/fintech/1200/800',
    slug: '/work/fintech-dashboard',
  },
  {
    id: 'saas-landing',
    title: 'SaaS Landing Page',
    impact: 'Boosted conversion rate by 2.5x with a new Framer-built site.',
    image: 'https://picsum.photos/seed/saas/1200/800',
    slug: '/work/saas-landing',
  },
  {
    id: 'ecommerce-app',
    title: 'E-commerce Mobile App',
    impact: 'Redesigned checkout flow resulting in 15% fewer abandoned carts.',
    image: 'https://picsum.photos/seed/ecommerce/1200/800',
    slug: '/work/ecommerce-app',
  },
];

export default function FeaturedWork() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Selected Work</h2>
            <p className="mt-4 text-lg text-zinc-600">A curated selection of my recent projects.</p>
          </div>
          <Link href="/work" className="hidden sm:inline-flex items-center text-sm font-semibold text-zinc-900 hover:text-zinc-600 transition-colors">
            View all projects <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="group relative flex flex-col lg:flex-row gap-8 lg:gap-16 items-center"
            >
              <div className={`w-full lg:w-3/5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Link href={project.slug} className="block overflow-hidden rounded-2xl bg-zinc-100">
                  <div className="relative aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-[1.02]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </Link>
              </div>
              <div className={`w-full lg:w-2/5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                  <Link href={project.slug} className="hover:underline decoration-zinc-300 underline-offset-4">
                    {project.title}
                  </Link>
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-zinc-600">
                  {project.impact}
                </p>
                <div className="mt-8">
                  <Link
                    href={project.slug}
                    className="inline-flex items-center text-sm font-semibold text-zinc-900 hover:text-zinc-600 transition-colors"
                  >
                    Read case study <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 sm:hidden">
          <Link href="/work" className="inline-flex w-full items-center justify-center rounded-full bg-zinc-100 px-8 py-3.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-200 transition-colors">
            View all projects
          </Link>
        </div>
      </div>
    </section>
  );
}
