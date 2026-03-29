import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-lg font-semibold tracking-tight text-zinc-900">
              Ahmed Madhoun
            </span>
            <span className="mt-1 text-sm text-zinc-500">
              UI/UX Designer & Framer Developer
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
            >
              Behance
            </a>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center sm:justify-start">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Ahmed Madhoun. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
