'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import CTA from '@/components/home/cta';
import { motion } from 'motion/react';
import { use } from 'react';

// Mock data fetching function
const getProject = (slug: string) => {
  return {
    title: 'Fintech Dashboard App',
    category: 'Product Design',
    heroImage: 'https://picsum.photos/seed/fintech/1920/1080',
    overview: {
      problem: 'Users were struggling to understand their financial health due to a cluttered interface and confusing data visualization.',
      role: 'Lead UI/UX Designer',
      timeline: '3 Months',
      tools: ['Figma', 'Protopie', 'React'],
    },
    sections: [
      {
        title: 'The Problem',
        content: 'The existing dashboard was overloaded with information, leading to high cognitive load and user drop-off. Key metrics were buried under secondary features, and the mobile experience was severely compromised. We needed to simplify the complex financial data into actionable insights.',
        image: 'https://picsum.photos/seed/problem/1200/800',
      },
      {
        title: 'The Process',
        content: 'We started with extensive user research, interviewing 20+ active users to understand their pain points. This led to a complete restructuring of the information architecture. We prioritized the most critical data points—net worth, recent transactions, and upcoming bills—and moved secondary features to dedicated sections.',
        image: 'https://picsum.photos/seed/process/1200/800',
      },
      {
        title: 'The Solution',
        content: 'The final design introduces a modular widget system, allowing users to customize their dashboard based on their priorities. We implemented a clean, minimalist aesthetic with a focus on typography and subtle color coding to indicate financial health at a glance. The mobile experience was rebuilt from the ground up to ensure parity with the desktop version.',
        image: 'https://picsum.photos/seed/solution/1200/800',
      },
      {
        title: 'The Outcome',
        content: 'Post-launch metrics showed a significant improvement in user engagement. The simplified navigation led to a 35% increase in user retention over the first three months. Additionally, customer support tickets related to finding specific features decreased by 50%.',
        image: 'https://picsum.photos/seed/outcome/1200/800',
      }
    ]
  };
};

export default function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = getProject(slug);

  return (
    <article className="bg-white">
      {/* Hero Section */}
      <header className="pt-24 pb-16 sm:pt-32 sm:pb-24 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/work" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Work
          </Link>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 text-xl leading-8 text-zinc-600">
              {project.overview.problem}
            </p>
          </motion.div>
        </div>
      </header>

      {/* Hero Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full h-[50vh] sm:h-[70vh] relative bg-zinc-100"
      >
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Overview Grid */}
      <section className="py-16 sm:py-24 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h3 className="text-sm font-medium text-zinc-500">Role</h3>
              <p className="mt-2 text-base font-medium text-zinc-900">{project.overview.role}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <h3 className="text-sm font-medium text-zinc-500">Timeline</h3>
              <p className="mt-2 text-base font-medium text-zinc-900">{project.overview.timeline}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <h3 className="text-sm font-medium text-zinc-500">Category</h3>
              <p className="mt-2 text-base font-medium text-zinc-900">{project.category}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
              <h3 className="text-sm font-medium text-zinc-500">Tools</h3>
              <p className="mt-2 text-base font-medium text-zinc-900">{project.overview.tools.join(', ')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="py-16 sm:py-24 space-y-24 sm:space-y-32">
        {project.sections.map((section, index) => (
          <section key={index} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center`}>
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 1 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2 lg:col-start-8' : ''}`}
              >
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                  {section.title}
                </h2>
                <p className="mt-6 text-lg leading-8 text-zinc-600">
                  {section.content}
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-7'}`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-100">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* Next Project / CTA */}
      <section className="py-24 sm:py-32 bg-zinc-50 border-t border-zinc-200">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Ready to start your project?
          </h2>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 transition-all"
            >
              Let&apos;s Talk
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center text-sm font-semibold text-zinc-900 hover:text-zinc-600 transition-colors"
            >
              View more work <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </article>
  );
}
