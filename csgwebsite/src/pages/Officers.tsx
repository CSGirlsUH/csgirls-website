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
          <img
            src={PICLINKS.BANNER}
            className="h-[200px] w-full object-cover"
            alt="2023-2024 Officer Team at First General Meeting"
          />
          <h1 className="flex flex-row justify-center py-6 font-poppins text-2xl">
            Meet The 2023-2024 Officers!
          </h1>

          {/* Mobile Officer Cards */}
          <section className="flex flex-col justify-center gap-10 pb-10">
            <OfficerCard
              position="President"
              name={OFFICERS.president.name}
              discord={OFFICERS.president.discord}
              linkedin={OFFICERS.president.linkedin}
              pic={PICLINKS.PRESIDENT}
            />
            <OfficerCard
              position="VP External"
              name={OFFICERS.vp_ext.name}
              discord={OFFICERS.vp_ext.discord}
              linkedin={OFFICERS.vp_ext.linkedin}
              pic={PICLINKS.VP_EXT}
            />
            <OfficerCard
              position="VP Internal"
              name={OFFICERS.vp_int.name}
              discord={OFFICERS.vp_int.discord}
              linkedin={OFFICERS.vp_int.linkedin}
              pic={PICLINKS.VP_INT}
            />
            <OfficerCard
              position="Prof. Development Chair"
              name={OFFICERS.prof_dev_chair1.name}
              discord={OFFICERS.prof_dev_chair1.discord}
              linkedin={OFFICERS.prof_dev_chair1.linkedin}
              pic={PICLINKS.PROF_DEV_CHAIR1}
            />
            <OfficerCard
              position="Prof. Development Chair"
              name={OFFICERS.prof_dev_chair2.name}
              discord={OFFICERS.prof_dev_chair2.discord}
              linkedin={OFFICERS.prof_dev_chair2.linkedin}
              pic={PICLINKS.PROF_DEV_CHAIR2}
            />
            <OfficerCard
              position="Mentorship Chair"
              name={OFFICERS.ment_chair1.name}
              discord={OFFICERS.ment_chair1.discord}
              linkedin={OFFICERS.ment_chair1.linkedin}
              pic={PICLINKS.MENT_CHAIR1}
            />
            {/* <OfficerCard
              position="Mentorship Chair"
              name={OFFICERS.ment_chair2.name}
              discord={OFFICERS.ment_chair2.discord}
              linkedin={OFFICERS.ment_chair2.linkedin}
              pic={PICLINKS.MENT_CHAIR2}
            /> */}
            <OfficerCard
              position="Secretary"
              name={OFFICERS.secy.name}
              discord={OFFICERS.secy.discord}
              linkedin={OFFICERS.secy.linkedin}
              pic={PICLINKS.SECY}
            />
            <OfficerCard
              position="Director of Marketing"
              name={OFFICERS.marketing_dir.name}
              discord={OFFICERS.marketing_dir.discord}
              linkedin={OFFICERS.marketing_dir.linkedin}
              pic={PICLINKS.MARKETING_DIR}
            />
            <OfficerCard
              position="Webmaster"
              name={OFFICERS.webmaster.name}
              discord={OFFICERS.webmaster.discord}
              linkedin={OFFICERS.webmaster.linkedin}
              pic={PICLINKS.WEBMASTER}
            />
          </section>
        </div>

        {/* Desktop Officer Cards */}
        <div className="hidden flex-col overflow-y-auto md:flex">
          <h1 className="py-6 text-center text-6xl font-normal">
            Meet The 2023-2024 Officers!
          </h1>
          <img
            src={PICLINKS.BANNER}
            alt="Fall 2023 Officers"
            className="mx-auto h-[524px] w-[1573px] rounded-[20px] object-cover"
          ></img>
          {/* Desktop Officer Cards */}
          <section className="flex flex-row flex-wrap justify-center gap-10 py-10">
            <OfficerCard
              position="President"
              name={OFFICERS.president.name}
              discord={OFFICERS.president.discord}
              linkedin={OFFICERS.president.linkedin}
              pic={PICLINKS.PRESIDENT}
            />
            <OfficerCard
              position="VP External"
              name={OFFICERS.vp_ext.name}
              discord={OFFICERS.vp_ext.discord}
              linkedin={OFFICERS.vp_ext.linkedin}
              pic={PICLINKS.VP_EXT}
            />
            <OfficerCard
              position="VP Internal"
              name={OFFICERS.vp_int.name}
              discord={OFFICERS.vp_int.discord}
              linkedin={OFFICERS.vp_int.linkedin}
              pic={PICLINKS.VP_INT}
            />
            <OfficerCard
              position="Prof. Development Chair"
              name={OFFICERS.prof_dev_chair1.name}
              discord={OFFICERS.prof_dev_chair1.discord}
              linkedin={OFFICERS.prof_dev_chair1.linkedin}
              pic={PICLINKS.PROF_DEV_CHAIR1}
            />
            <OfficerCard
              position="Prof. Development Chair"
              name={OFFICERS.prof_dev_chair2.name}
              discord={OFFICERS.prof_dev_chair2.discord}
              linkedin={OFFICERS.prof_dev_chair2.linkedin}
              pic={PICLINKS.PROF_DEV_CHAIR2}
            />
            <OfficerCard
              position="Mentorship Chair"
              name={OFFICERS.ment_chair1.name}
              discord={OFFICERS.ment_chair1.discord}
              linkedin={OFFICERS.ment_chair1.linkedin}
              pic={PICLINKS.MENT_CHAIR1}
            />
            {/* <OfficerCard
              position="Mentorship Chair"
              name={OFFICERS.ment_chair2.name}
              discord={OFFICERS.ment_chair2.discord}
              linkedin={OFFICERS.ment_chair2.linkedin}
              pic={PICLINKS.MENT_CHAIR2}
            /> */}
            <OfficerCard
              position="Secretary"
              name={OFFICERS.secy.name}
              discord={OFFICERS.secy.discord}
              linkedin={OFFICERS.secy.linkedin}
              pic={PICLINKS.SECY}
            />
            <OfficerCard
              position="Director of Marketing"
              name={OFFICERS.marketing_dir.name}
              discord={OFFICERS.marketing_dir.discord}
              linkedin={OFFICERS.marketing_dir.linkedin}
              pic={PICLINKS.MARKETING_DIR}
            />
            <OfficerCard
              position="Webmaster"
              name={OFFICERS.webmaster.name}
              discord={OFFICERS.webmaster.discord}
              linkedin={OFFICERS.webmaster.linkedin}
              pic={PICLINKS.WEBMASTER}
            />
          </section>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Officers
