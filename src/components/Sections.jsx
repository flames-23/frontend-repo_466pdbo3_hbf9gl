import { motion } from 'framer-motion'
import { Heart, Gauge, Users, Compass, Map, Flag, Globe, Instagram } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

export function Values() {
  const items = [
    { icon: Heart, title: 'Solidarité', text: "Chaque kilomètre compte pour une cause concrète." },
    { icon: Gauge, title: 'Aventure', text: "Un défi sportif accessible, humain et authentique." },
    { icon: Users, title: 'Communauté', text: "Des équipages unis, une expérience inoubliable." },
  ]
  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 {...fadeUp} className="text-3xl sm:text-4xl font-bold text-black mb-10">Nos valeurs</motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-lg transition-all will-change-transform hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500/20 to-rose-500/20 text-amber-700 group-hover:scale-110 transition-transform">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-black">{title}</h3>
              <p className="mt-2 text-black/70">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Why() {
  const steps = [
    { icon: Compass, title: 'Préparer', text: "Briefing, matériel, esprit d'équipe." },
    { icon: Map, title: 'Explorer', text: "Pistes, dunes et navigation ludique." },
    { icon: Flag, title: 'Célébrer', text: "Arrivée, partage et solidarité concrète." },
  ]
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 {...fadeUp} className="text-3xl sm:text-4xl font-bold text-black mb-10">Pourquoi participer ?</motion.h2>
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-6">
            {steps.map(({ icon: Icon, title, text }, idx) => (
              <motion.div key={title} {...fadeUp} transition={{ ...fadeUp.transition, delay: idx * 0.06 }} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-amber-700"><Icon size={22} /></div>
                  <div>
                    <h3 className="text-lg font-semibold text-black">{title}</h3>
                    <p className="mt-1 text-black/70">{text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="lg:col-span-5">
            <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop" alt="Dunes" className="absolute inset-0 h-full w-full object-cover scale-110 will-change-transform" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function Impact() {
  const stats = [
    { label: 'km parcourus', value: 12000 },
    { label: 'fonds reversés', value: 54000 },
    { label: 'équipages engagés', value: 86 },
  ]
  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-amber-50/40 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 {...fadeUp} className="text-3xl sm:text-4xl font-bold text-black mb-10">Impact solidaire</motion.h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <motion.div key={s.label} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }} className="rounded-2xl border border-black/10 bg-white p-8 text-center shadow-sm">
              <AnimatedCounter target={s.value} />
              <p className="mt-2 text-sm tracking-wide uppercase text-black/60">{s.label}</p>
              <div className="mt-4 h-2 w-full rounded-full bg-black/10 overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: `${Math.min(100, (s.value/60000)*100)}%` }} viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeOut' }} className="h-full bg-gradient-to-r from-amber-500 to-rose-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AnimatedCounter({ target }) {
  return (
    <motion.div
      initial={{ textContent: 0 }}
      whileInView={{ textContent: target }}
      viewport={{ once: true }}
      transition={{ duration: 1.6, ease: 'easeOut' }}
      className="text-4xl font-extrabold tracking-tight"
    >
      {Math.floor(target).toLocaleString('fr-FR')}
    </motion.div>
  )
}

export function Follow() {
  const items = new Array(8).fill(0).map((_, i) => `https://images.unsplash.com/photo-15${90+i}81393784-d120267933ba?q=80&w=800&auto=format&fit=crop`)
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 {...fadeUp} className="text-3xl sm:text-4xl font-bold text-black mb-10 flex items-center gap-3">
          <Instagram size={28} /> Suivez l’aventure
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {items.map((src, i) => (
            <motion.a key={i} href="#" {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.03 }} className="group relative block overflow-hidden rounded-2xl">
              <img src={src} alt="insta" className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/0 group-hover:ring-black/10 transition" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
