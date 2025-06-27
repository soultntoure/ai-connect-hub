import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800">
      {/* Header */}
      <header className="w-full p-6 bg-white shadow-md flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-700">AI Connect Hub</div>
        <nav className="space-x-4">
          <Link href="/dashboard/solutions" className="text-gray-600 hover:text-blue-700 font-medium">
            Browse Solutions
          </Link>
          <Link href="/login" className="text-gray-600 hover:text-blue-700 font-medium">
            Login
          </Link>
          <Link href="/register">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium shadow-md">
              Get Started
            </button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center text-center py-20 px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
            Unlock Business Growth with <span className="text-blue-600">Plug-and-Play AI</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10">
            Discover, integrate, and activate powerful AI solutions into your existing operations with minimal effort.
          </p>
          <Link href="/register">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-full font-bold shadow-lg transform transition duration-300 hover:scale-105">
              Start Your AI Journey Today
            </button>
          </Link>
          <p className="mt-4 text-sm text-gray-500">No coding required. Instant integration.</p>
        </div>
      </section>

      {/* Features Section (Placeholder) */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose AI Connect Hub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg shadow-md bg-gray-50">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Curated Marketplace</h3>
              <p className="text-gray-700">Access a hand-picked selection of high-quality AI solutions tailored for various business needs.</p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-gray-50">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Effortless Integration</h3>
              <p className="text-gray-700">Integrate AI into your workflow in minutes, not months, with our intuitive setup.</p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-gray-50">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Scalable & Secure</h3>
              <p className="text-gray-700">Leverage a robust cloud infrastructure designed for performance and data security.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full p-6 bg-gray-800 text-white text-center text-sm">
        &copy; {new Date().getFullYear()} AI Connect Hub. All rights reserved.
      </footer>
    </div>
  );
}