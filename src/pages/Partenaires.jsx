import { motion } from 'framer-motion'

const logos = Array.from({ length: 10 }).map((_, i) => `https://dummyimage.com/240x100/efefef/111&text=Logo+${i+1}`)

export default function Partenaires() {
  return (
    <main className="pt-20">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl font-bold">Partenaires & Sponsors</motion.h1>
        <div className="mt-8 overflow-hidden">
          <div className="flex gap-12 animate-[marquee_30s_linear_infinite] [mask-image:linear-gradient(to_right,transparent,black,black,transparent)]">
            {logos.concat(logos).map((src, i) => (
              <img key={i} src={src} className="h-12 grayscale hover:grayscale-0 transition duration-300" />
            ))}
          </div>
        </div>
      </section>
      <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </main>
  )
}
