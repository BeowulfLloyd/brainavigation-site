import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {<Image src="/logo_small.png" alt="BRAINavigation logo" width={32} height={32} />}
          <span className="text-lg font-semibold tracking-wide">BRAINavigation.ai</span>
        </div>
        {/* <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-300">
          <a href="#about" className="hover:text-zinc-100">About</a>
          <a href="#features" className="hover:text-zinc-100">Features</a>
          <a href="#contact" className="hover:text-zinc-100">Contact</a>
        </nav> */}
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Accuracy-first AI <span className="text-emerald-400">navigation</span>
            </h1>
            <p className="mt-5 text-zinc-300 md:text-lg">
              BRAINavigation builds next-gen AI for embodied robotics
              that is transparent, auditable, physics-aware, and aligned
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:team@brainavigation.ai"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 font-medium text-zinc-950 hover:bg-emerald-400 transition"
              >
                Contact us
              </a>
{/*               <a
                href="#features"
                className="inline-flex items-center justify-center rounded-lg border border-zinc-700 px-5 py-3 font-medium text-zinc-100 hover:bg-zinc-900 transition"
              >
                Learn more
              </a>
 */}            </div>

             <p className="mt-4 text-xs text-zinc-400" id="about">
              Early access • Pilot industry-partnerships available
            </p>
           </div>

          {/* Optional hero image */}
          <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-800 overflow-hidden">
            {<Image src="/logo.png" alt="BRAINavigation hero" fill className="object-cover opacity-80" />}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-28 mx-auto max-w-6xl px-6 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-zinc-800 p-6 bg-zinc-900/40">
            <h3 className="text-lg font-semibold">Robust estimation and mapping</h3>
            <p className="mt-2 text-zinc-300 text-sm">
              Architected by experts in trajectory analysis for dependable positioning and kinematics
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 p-6 bg-zinc-900/40">
            <h3 className="text-lg font-semibold">AI-assisted planning</h3>
            <p className="mt-2 text-zinc-300 text-sm">
              Agency and semantic prediction for autonomous or human-in-loop operations
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 p-6 bg-zinc-900/40">
            <h3 className="text-lg font-semibold">Transparent alignment</h3>
            <p className="mt-2 text-zinc-300 text-sm">
              White-box network for traces-of-intent and strong customizable alignment guarantees
            </p>
          </div>
        </div>
      </section>

{/*    
      <section id="about" className="scroll-mt-28 mx-auto max-w-4xl px-6 pb-16 text-center">
         <h2 className="text-2xl md:text-3xl font-semibold mb-6">About Us</h2>
        <p className="text-zinc-300 leading-relaxed text-lg">
          <strong>BRAINavigation.ai</strong> is building the next generation of
          embodied intelligence for physical navigation and defense systems.
          We fuse artificial intelligence, robotics, and advanced perception
          technologies to create systems that <strong>move, sense, and act</strong> with precision
          in <strong>complex, dynamic environments</strong>.
        </p>
        <p className="text-zinc-300 leading-relaxed text-lg mt-4">
          At our core, we develop <strong>AI-driven navigation platforms</strong> that integrate
          sensor fusion, autonomous decision-making, and real-time mapping into
          robust software and hardware solutions. Our mission: to build the
          foundation for unstoppable, <strong>trustworthy embodied AI</strong> — technology that
          extends human capability, secures the physical world, and reshapes how
          machines and people interact.
        </p>
        <p className="text-zinc-300 leading-relaxed text-lg mt-4">
        We believe that autonomy isn’t just software — it’s a whole ecosystem.
        That’s why we pair our core AI/ML research with <strong>rigorous</strong> engineering in
        robotics, embedded systems, and human alignment factors. Our platforms
        emphasize security, privacy, and resilience, ensuring operation in demanding conditions.
      </p>

      <p className="text-zinc-300 leading-relaxed text-lg mt-4">
        The result is a suite of capabilities that transform how machines
        navigate and coordinate to support human operators in real-world conditions:
      </p>
 
       <ul className="text-zinc-300 leading-relaxed text-lg mt-4 list-disc list-inside space-y-2 text-left max-w-2xl mx-auto">
        <li>Autonomous navigation &amp; mapping in contested or GPS-denied environments</li>
        <li>Sensor fusion for reliable physics &amp; AI/ML for agentic decision-making</li>
        <li>Defense-ready systems that enhance force protection and situational awareness</li>
        <li>Scalable platforms that can be adapted across domains</li>
       </ul>
       </section>
 */}

      {/* Contact */}
      <section id="contact" className="scroll-mt-28 mx-auto max-w-6xl px-6 pb-12">
        <div className="rounded-2xl border border-zinc-800 p-8 md:p-10 bg-zinc-900/40 flex flex-col md:flex-row items-center md:items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-semibold">Ready to talk?</h4>
            <p className="mt-1 text-zinc-300">
              We're lining up industry partners in robotic frame manufacturing. Let's see if there's a fit!
            </p>
          </div>
{/*           <a href="mailto:team@brainavigation.ai"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 font-medium text-zinc-950 hover:bg-emerald-400 transition">
            Email team@brainavigation.ai
          </a>
 */}        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} BRAINavigation.ai</span>
          <div className="flex items-center gap-5">
{/*         <a href="/" className="hover:text-zinc-200">Home</a>
            <a href="#about" className="hover:text-zinc-200">About</a>
            <a href="#features" className="hover:text-zinc-200">Features</a>
            <a href="#contact" className="hover:text-zinc-200">Contact</a>
 */}          </div>
        </div>
      </footer>
    </main>
  );
}
