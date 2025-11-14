import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = Array.from({ length: 10 }).map((_, i) => `https://images.unsplash.com/photo-15${60+i}81393784-d120267933ba?q=80&w=1200&auto=format&fit=crop`)

export default function Galerie() {
  const [active, setActive] = useState(null)
  return (
    <main className="pt-20">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl font-bold">Galerie & Médias</motion.h1>
        <div className="mt-8 columns-2 md:columns-3 lg:columns-4 gap-3 [column-fill:_balance]"><div className="grid gap-3">
          {images.map((src, i) => (
            <motion.button key={i} onClick={() => setActive(src)} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group relative w-full overflow-hidden rounded-2xl">
              <img src={src} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
            </motion.button>
          ))}
        </div></div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-6" onClick={() => setActive(null)}>
            <motion.img initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.98 }} src={active} className="max-h-[80vh] w-auto rounded-2xl shadow-2xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
