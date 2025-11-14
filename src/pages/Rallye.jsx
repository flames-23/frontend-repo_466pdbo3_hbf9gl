import { motion } from 'framer-motion'

export default function Rallye() {
  return (
    <main className="pt-20">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl font-bold">Le Rallye & Programme</motion.h1>
        <p className="mt-4 text-black/70 max-w-2xl">Carte stylisée, étapes et programme dynamique.</p>
        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-black/10 h-96 bg-[linear-gradient(135deg,#fce7c3,#fde68a)]" />
          <div className="space-y-4">
            {[1,2,3,4].map(i => (
              <details key={i} className="group rounded-2xl border border-black/10 bg-white p-5">
                <summary className="cursor-pointer list-none font-semibold">Étape {i} — Découverte</summary>
                <p className="mt-2 text-black/70">Parcours, briefing, checkpoints et immersion progressive.</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
