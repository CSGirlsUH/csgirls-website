import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OfficerCard from '@/components/OfficerCard'
import { PICLINKS, OFFICERS } from '@/components/globalVariables'

const Officers = () => {
  return (
    <>
      <div className="mx-auto my-auto bg-white font-poppins text-black">
        <Navbar />

        {/* Mobile Variant */}
        <div className="visible flex flex-col overflow-y-auto md:hidden">
          <h1 className="flex flex-row justify-center py-6 font-poppins text-2xl">
            Meet The 2025-2026 Officers!
          </h1>

          {/* Mobile Officer Cards */}
          <section className="flex flex-col justify-center gap-10 pb-10">
            <OfficerCard position="President" {...OFFICERS.president} />
            <OfficerCard position="VP Internal" {...OFFICERS.vp_int} />
            <OfficerCard position="VP External" {...OFFICERS.vp_ext} />
            <OfficerCard position="Prof. Dev. Chair - Technical" {...OFFICERS.prof_dev_tech} />
            <OfficerCard position="Prof. Dev. Chair - Behavioral" {...OFFICERS.prof_dev_behav} />
            <OfficerCard position="Mentorship Chair" {...OFFICERS.ment_chair} />
            <OfficerCard position="Kattis Chair" {...OFFICERS.kattis_chair} />
            <OfficerCard position="Marketing Chair" {...OFFICERS.marketing} />
            <OfficerCard position="Designer" {...OFFICERS.designer} />
            <OfficerCard position="Webmaster" {...OFFICERS.webmaster} />
            <OfficerCard position="Historian" {...OFFICERS.historian} />
          </section>
        </div>

        {/* Desktop Officer Cards */}
        <div className="hidden flex-col overflow-y-auto md:flex">
          <h1 className="py-6 text-center text-6xl font-normal">
            Meet The 2025-2026 Officers!
          </h1>

          <section className="flex flex-row flex-wrap justify-center gap-10 py-10">
            <OfficerCard position="President" {...OFFICERS.president} />
            <OfficerCard position="VP Internal" {...OFFICERS.vp_int} />
            <OfficerCard position="VP External" {...OFFICERS.vp_ext} />
            <OfficerCard position="Prof. Dev. Chair - Technical" {...OFFICERS.prof_dev_tech} />
            <OfficerCard position="Prof. Dev. Chair - Behavioral" {...OFFICERS.prof_dev_behav} />
            <OfficerCard position="Mentorship Chair" {...OFFICERS.ment_chair} />
            <OfficerCard position="Kattis Chair" {...OFFICERS.kattis_chair} />
            <OfficerCard position="Marketing Chair" {...OFFICERS.marketing} />
            <OfficerCard position="Designer" {...OFFICERS.designer} />
            <OfficerCard position="Webmaster" {...OFFICERS.webmaster} />
            <OfficerCard position="Historian" {...OFFICERS.historian} />
          </section>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Officers
