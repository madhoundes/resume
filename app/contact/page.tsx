'use client';

import { Mail, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              Let&apos;s build something together.
            </h1>
            <p className="mt-6 text-xl leading-8 text-zinc-600">
              I&apos;m currently available for freelance projects and full-time opportunities. If you&apos;re looking for a UI/UX Designer or Framer Developer, I&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Contact Information</h2>
                <p className="mt-4 text-lg text-zinc-600">
                  Feel free to reach out via email or connect with me on social media. I typically respond within 24 hours.
                </p>
              </div>

              <dl className="space-y-8 text-base leading-7 text-zinc-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <Mail className="h-7 w-6 text-zinc-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a className="hover:text-zinc-900 font-medium transition-colors" href="mailto:hello@ahmedmadhoun.com">
                      hello@ahmedmadhoun.com
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Location</span>
                    <MapPin className="h-7 w-6 text-zinc-400" aria-hidden="true" />
                  </dt>
                  <dd>Ontario, Canada</dd>
                </div>
              </dl>

              <div className="flex gap-x-6">
                <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" aria-hidden="true" />
                </a>
                <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-6 w-6" aria-hidden="true" />
                </a>
                <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                  <span className="sr-only">GitHub</span>
                  <Github className="h-6 w-6" aria-hidden="true" />
                </a>
              </div>
            </motion.div>

            {/* Contact Form / Calendly Placeholder */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-zinc-50 rounded-3xl p-8 sm:p-10 ring-1 ring-zinc-200/50"
            >
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 mb-8">Send a message</h3>
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-zinc-900">
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="block w-full rounded-md border-0 py-2.5 px-3.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-900 sm:text-sm sm:leading-6 transition-shadow"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-zinc-900">
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-2.5 px-3.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-900 sm:text-sm sm:leading-6 transition-shadow"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium leading-6 text-zinc-900">
                    Message
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border-0 py-2.5 px-3.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-900 sm:text-sm sm:leading-6 transition-shadow"
                      defaultValue={''}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="block w-full rounded-md bg-zinc-900 px-3.5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 transition-all"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
