export type Sponsor = {
  name: string
  logo: string
  link: string
  rank: string
}

export const WEBLINKS = {
  REGISTER:
    'https://docs.google.com/forms/d/e/1FAIpQLSff7H7m7n_37ksRhXXJfl3RzKySWsXFHTY-t_5-9YkZThOvgw/viewform',
  CONTACT: 'https://linktr.ee/csgirls',
}

// Pictures used in OfficerMain.tsx
export const PICLINKS = {
  BANNER: './Photos/OfficersHeart.jpg',
  PRESIDENT: './Photos/OfficerPics/Becky_Pres.jpg',
  VP_EXT: './Photos/OfficerPics/Caro_VPExternal.jpg',
  VP_INT: './Photos/OfficerPics/Chelsea_VPInternal.jpg',
  MARKETING_DIR: './Photos/OfficerPics/Kaitlin_MarkDir.jpg',
  PROF_DEV_CHAIR1: './Photos/OfficerPics/Daisy_ProfDevChair.jpg',
  PROF_DEV_CHAIR2: './Photos/OfficerPics/Maria_ProfDevChair.jpg',
  MENT_CHAIR1: './Photos/OfficerPics/Reem_MentorChair.jpg',
  MENT_CHAIR2: './Photos/OfficerPics/Lisa_MentorChair.jpg',
  SECY: './Photos/OfficerPics/Neha_Secy.jpg',
  WEBMASTER: './Photos/OfficerPics/Sage_WebM_Alt.jpg',
}

export const SPONSORS: Sponsor[] = [
  // * PLATINUM SPONSORS
  {
    name: 'Google',
    logo: './sponsors/google_logo.svg',
    link: 'https://www.google.com/about/careers/applications/students/',
    rank: 'Platinum',
  },

  {
    name: 'Adobe',
    logo: './sponsors/adobe_logo.svg',
    link: 'https://www.adobe.com/careers/university.html',
    rank: 'Platinum',
  },

  // * GOLD SPONSORS

  // * SILVER SPONSORS
  {
    name: 'LyondellBasell',
    logo: './sponsors/lyondellbasell_logo.svg',
    link: 'https://www.lyondellbasell.com/en/careers/university-recruiting/',
    rank: 'Silver',
  },

  // * BRONZE SPONSORS
]

export const PARTNERS = [
  {
    name: 'Chevron',
    link: 'https://careers.chevron.com/internship',
    logo: './sponsors/chevron_logo.svg',
  },
  {
    name: 'Paycom',
    link: 'https://www.paycom.com/careers/job-categories/internships/',
    logo: './sponsors/paycom_logo.svg',
  },
  {
    name: 'SLB',
    link: 'https://careers.slb.com/fojoblist/it-intern',
    logo: './sponsors/slb_logo.svg',
  },
]
