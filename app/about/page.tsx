'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import CTA from '@/components/home/cta';
import { motion } from 'motion/react';

const skills = [
  'UI/UX Design', 'Product Strategy', 'Design Systems', 'Prototyping',
  'Framer Development', 'Webflow', 'React / Next.js', 'Tailwind CSS'
];

const tools = [
  'Figma', 'Framer', 'Webflow', 'Adobe Creative Suite', 'VS Code', 'GitHub'
];

const experience = [
  {
    role: 'Senior UI/UX Designer',
    company: 'Tech Startup Inc.',
    period: '2022 - Present',
    description: 'Leading product design for a B2B SaaS platform. Established a comprehensive design system and improved user onboarding completion by 40%.'
  },
  {
    role: 'Freelance Product Designer & Framer Expert',
    company: 'Self-Employed',
    period: '2020 - Present',
    description: 'Partnering with early-stage startups to design and build high-converting marketing sites and MVP products.'
  },
  {
    role: 'UI Designer',
    company: 'Creative Agency LLC',
    period: '2018 - 2020',
    description: 'Designed e-commerce experiences and marketing campaigns for global brands.'
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
                Hi, I&apos;m Ahmed.
              </h1>
              <p className="mt-6 text-xl leading-8 text-zinc-600">
                I&apos;m a UI/UX Designer and Framer Developer based in Ontario, Canada. I specialize in crafting premium, conversion-focused digital products for startups and forward-thinking brands.
              </p>
              <p className="mt-4 text-lg leading-8 text-zinc-600">
                My approach bridges the gap between aesthetics and functionality. I don&apos;t just design pretty screens; I build scalable systems and high-performance websites that drive real business results. As a Framer Expert, I turn complex designs into pixel-perfect, interactive realities.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 transition-all"
                >
                  Let&apos;s Talk
                </Link>
                <a
                  href="https://drive.google.com/file/d/1JhEeDLTl-xTfYDWwKPPyj9E7ioRufyiU/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50 transition-all group"
                >
                  Download Resume
                  <Download className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                </a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-3xl bg-zinc-100 shadow-xl"
            >
              <Image
                src="https://picsum.photos/seed/portrait/800/1000"
                alt="Ahmed Madhoun"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Skills & Tools */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1 space-y-16"
            >
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Skills</h2>
                <ul className="mt-6 space-y-3">
                  {skills.map((skill) => (
                    <li key={skill} className="flex items-center text-zinc-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Tools</h2>
                <div className="mt-6 flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span key={tool} className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-800">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-10">Experience</h2>
              <div className="space-y-12">
                {experience.map((job, index) => (
                  <div key={index} className="relative pl-8 sm:pl-0">
                    <div className="hidden sm:block absolute left-0 top-2 h-full w-px bg-zinc-200"></div>
                    <div className="hidden sm:block absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-zinc-400 ring-4 ring-white"></div>
                    
                    <div className="sm:pl-8">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-bold text-zinc-900">{job.role}</h3>
                        <span className="text-sm font-medium text-zinc-500 mt-1 sm:mt-0">{job.period}</span>
                      </div>
                      <p className="text-base font-medium text-zinc-900 mb-4">{job.company}</p>
                      <p className="text-base leading-7 text-zinc-600">{job.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
