export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6">Welcome to Certin</h1>
      <p className="text-xl text-gray-600 max-w-2xl mb-8">
        Your comprehensive platform for managing and tracking certifications. Streamline your certification process with
        our powerful tools.
      </p>
      <div className="flex gap-4 flex-col sm:flex-row">
        <a href="/auth/login" className="px-6 py-3 rounded-md bg-black text-white hover:bg-black/90 transition-colors">
          Get Started
        </a>
        <a href="/about" className="px-6 py-3 rounded-md border border-black hover:bg-black/5 transition-colors">
          Learn More
        </a>
      </div>
    </div>
  );
}
