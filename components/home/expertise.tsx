'use client';

import { LayoutTemplate, Code2, Smartphone, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const skills = [
  {
    name: 'Product Design',
    description: 'End-to-end product design from user research to high-fidelity prototypes.',
    icon: LayoutTemplate,
  },
  {
    name: 'UI/UX Systems',
    description: 'Scalable design systems that ensure consistency and speed up development.',
    icon: Smartphone,
  },
  {
    name: 'Framer Development',
    description: 'Pixel-perfect, high-performance websites built visually with Framer.',
    icon: Code2,
  },
  {
    name: 'No-code / AI Tools',
    description: 'Leveraging modern tools to build faster and smarter.',
    icon: Sparkles,
  },
];

export default function Expertise() {
  return (
    <section className="py-24 sm:py-32 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Expertise</h2>
          <p className="mt-4 text-lg text-zinc-600">
            Specialized in crafting digital experiences that look great and perform even better.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-200/50 hover:shadow-md transition-shadow"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900">
                <skill.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-zinc-900">
                {skill.name}
              </h3>
              <p className="mt-2 text-base leading-7 text-zinc-600">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
