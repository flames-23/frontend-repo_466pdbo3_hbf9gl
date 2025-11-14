import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Inscription() {
  const [sent, setSent] = useState(false)
  return (
    <main className="pt-20">
      <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl font-bold">Inscription</motion.h1>
        <p className="mt-4 text-black/70">Formulaire moderne avec labels flottants.</p>
        {!sent ? (
          <form className="mt-8 space-y-6" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
            {['Nom de l\'équipage','Email','Téléphone'].map((label, i) => (
              <div key={i} className="relative">
                <input required type="text" className="peer w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none transition focus:ring-2 focus:ring-black/10" placeholder=" " />
                <label className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 bg-white px-1 text-black/50 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-xs peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-0">{label}</label>
              </div>
            ))}
            <button className="inline-flex items-center rounded-full bg-black text-white px-6 py-3 text-sm font-semibold transition-all hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">Envoyer</button>
          </form>
        ) : (
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="mt-10 rounded-3xl border border-black/10 bg-white p-10 text-center">
            <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-green-100 text-green-700 grid place-items-center">✓</div>
            <h2 className="text-xl font-semibold">Merci !</h2>
            <p className="text-black/70">Nous revenons vers vous très vite.</p>
          </motion.div>
        )}
      </section>
    </main>
  )
}
