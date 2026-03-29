'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import CTA from '@/components/home/cta';
import { motion } from 'motion/react';

const projects = [
  {
    id: 'fintech-dashboard',
    title: 'Fintech Dashboard App',
    category: 'Product Design',
    impact: 'Increased user retention by 35% through simplified navigation.',
    image: 'https://picsum.photos/seed/fintech/1200/800',
    slug: '/work/fintech-dashboard',
  },
  {
    id: 'saas-landing',
    title: 'SaaS Landing Page',
    category: 'Framer Development',
    impact: 'Boosted conversion rate by 2.5x with a new Framer-built site.',
    image: 'https://picsum.photos/seed/saas/1200/800',
    slug: '/work/saas-landing',
  },
  {
    id: 'ecommerce-app',
    title: 'E-commerce Mobile App',
    category: 'UI/UX Design',
    impact: 'Redesigned checkout flow resulting in 15% fewer abandoned carts.',
    image: 'https://picsum.photos/seed/ecommerce/1200/800',
    slug: '/work/ecommerce-app',
  },
  {
    id: 'health-tracker',
    title: 'Health Tracker Dashboard',
    category: 'Product Design',
    impact: 'Designed a comprehensive dashboard for tracking daily health metrics.',
    image: 'https://picsum.photos/seed/health/1200/800',
    slug: '/work/health-tracker',
  },
  {
    id: 'real-estate-platform',
    title: 'Real Estate Platform',
    category: 'UI/UX Design',
    impact: 'Streamlined property search, increasing user engagement by 40%.',
    image: 'https://picsum.photos/seed/realestate/1200/800',
    slug: '/work/real-estate-platform',
  },
];

export default function WorkPage() {
  return (
    <>
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
              Selected Work
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              A collection of digital products, websites, and design systems I&apos;ve built to solve real business problems.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-24">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index % 2 === 0 ? 0 : 0.2 }}
                className="group relative flex flex-col items-start"
              >
                <Link href={project.slug} className="block w-full overflow-hidden rounded-2xl bg-zinc-100">
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
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <span className="text-zinc-500">{project.category}</span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900">
                    <Link href={project.slug} className="hover:underline decoration-zinc-300 underline-offset-4">
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-base leading-7 text-zinc-600">
                    {project.impact}
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href={project.slug}
                    className="inline-flex items-center text-sm font-semibold text-zinc-900 hover:text-zinc-600 transition-colors"
                  >
                    Read case study <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <CTA />
    </>
  );
}
