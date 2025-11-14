import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/dRBdpY8aSqcdPO2y/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white pointer-events-none" />
      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-end pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-black">
              Rallye Solidrive
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-black/70">
              Une aventure humaine, sportive et solidaire au cœur des dunes.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="/inscription" className="group inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-semibold transition-all hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                Participer
                <span className="inline-block h-4 w-4 rounded-full bg-white/30 group-hover:bg-white/50 transition-colors" />
              </a>
              <a href="#impact" className="inline-flex items-center gap-2 rounded-full border border-black/20 px-6 py-3 text-sm font-semibold text-black transition-all hover:-translate-y-0.5">
                Soutenir la cause
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
