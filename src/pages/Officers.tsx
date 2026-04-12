import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OfficerCard from '@/components/OfficerCard'
import { OFFICERS } from '@/components/globalVariables'

const allOfficers = [
  { position: 'President', ...OFFICERS.president, category: 'Leadership' },
  { position: 'VP Internal', ...OFFICERS.vp_int, category: 'Leadership' },
  { position: 'VP External', ...OFFICERS.vp_ext, category: 'Leadership' },
  { position: 'Advisor', ...OFFICERS.advisor, category: 'Leadership' },
  { position: 'Prof. Dev. Chair - Technical', ...OFFICERS.prof_dev_tech, category: 'Professional Development' },
  { position: 'Prof. Dev. Chair - Behavioral', ...OFFICERS.prof_dev_behav, category: 'Professional Development' },
  { position: 'Kattis Chair', ...OFFICERS.kattis_chair, category: 'Operations' },
  { position: 'Marketing Chair', ...OFFICERS.marketing, category: 'Operations' },
   { position: 'Webmaster', ...OFFICERS.webmaster, category: 'Operations' },
  { position: 'Designer', ...OFFICERS.designer, category: 'Operations' },
  { position: 'Historian', ...OFFICERS.historian, category: 'Operations' },
]

const categories = ['All', 'Leadership', 'Professional Development', 'Operations']

const Officers = () => {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = allOfficers.filter((officer) => {
    const matchesSearch =
      officer.name.toLowerCase().includes(search.toLowerCase()) ||
      officer.position.toLowerCase().includes(search.toLowerCase())
    const matchesCategory =
      activeCategory === 'All' || officer.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <>
      <div className="mx-auto my-auto bg-white font-poppins text-black">
        <Navbar />

        <div className="flex flex-col">
          {/* Header */}
          <h1 className="py-8 text-center text-3xl font-medium md:text-5xl">
            Meet The 2025-2026 Officers!
          </h1>

          {/* Search bar */}
          <div className="mx-auto mb-4 w-full max-w-md px-6">
            <input
              type="text"
              placeholder="Search by name or role..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-2 text-base focus:border-logopurple focus:outline-none"
            />
          </div>

          {/* Category filter buttons */}
          <div className="mx-auto mb-8 flex flex-row flex-wrap justify-center gap-3 px-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  activeCategory === cat
                    ? 'bg-logopurple text-white'
                    : 'border border-logopurple text-logopurple hover:bg-purple-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* No results */}
          {filtered.length === 0 && (
            <p className="py-20 text-center text-gray-500">
              No officers found. Try a different search!
            </p>
          )}

          {/* Officer cards */}
          <section className="flex flex-row flex-wrap justify-center gap-8 pb-16 px-6">
            {filtered.map((officer) => (
              <OfficerCard
                key={officer.name}
                position={officer.position}
                name={officer.name}
                pic={officer.pic}
                discord={officer.discord}
                linkedin={officer.linkedin}
              />
            ))}
          </section>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Officers