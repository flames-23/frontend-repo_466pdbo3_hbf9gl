import Header from './Header'
import Hero from './components/Hero'
import { Values, Why, Impact, Follow } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="pt-16">
        <Hero />
        <Values />
        <Why />
        <Impact />
        <Follow />
      </main>
      <footer className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-black/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Rallye Solidrive — Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a href="/rallye" className="hover:text-black">Le Rallye</a>
            <a href="/solidarite" className="hover:text-black">Solidarité</a>
            <a href="/galerie" className="hover:text-black">Galerie</a>
            <a href="/partenaires" className="hover:text-black">Partenaires</a>
            <a href="/inscription" className="hover:text-black font-semibold btn-gloss">Participer</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
