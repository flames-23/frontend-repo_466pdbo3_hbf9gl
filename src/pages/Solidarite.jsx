import { motion } from 'framer-motion'

const testimonials = [
  { name: 'Camille', text: "Une aventure qui change la vie et soutient des actions concrètes." },
  { name: 'Yassine', text: "L'esprit d'équipe et l'impact social font toute la différence." },
  { name: 'Lina', text: "Des paysages magnifiques, une cause qui nous rassemble." },
]

export default function Solidarite() {
  return (
    <main className="pt-20">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl font-bold">Solidarité & Impact</motion.h1>
        <p className="mt-4 text-black/70 max-w-2xl">Témoignages, stories et impact visuel.</p>
        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.6 }} className="rounded-3xl border border-black/10 bg-white p-6">
              <p className="text-black/80">“{t.text}”</p>
              <p className="mt-3 text-sm text-black/60">— {t.name}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-[9/16] overflow-hidden rounded-[28px] border border-black/10 bg-gray-100">
              <img src={`https://images.unsplash.com/photo-150${i+12}81393784-d120267933ba?q=80&w=800&auto=format&fit=crop`} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
