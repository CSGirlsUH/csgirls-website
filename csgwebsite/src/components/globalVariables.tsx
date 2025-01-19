export type Sponsor = {
  name: string
  logo: string
  link: string
  rank: string
}

export const WEBLINKS = {
  REGISTER:
    'https://docs.google.com/forms/d/e/1FAIpQLSe98Ijb0UZk8DWfQW4YZttEiyHBtRyasaA-fDMFjwzeQN_F7Q/viewform',
  CONTACT: 'https://linktr.ee/csgirls',
  DONATE: 'https://www.paypal.com/paypalme/CSGirls',
  NEWSLETTER:
    'https://csgirls.us17.list-manage.com/subscribe?u=076028e0729274943f4c3555a&id=13147ae73f',
}

// * Pictures used in OfficerMain.tsx
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

// * Officer Information
//* Last Updated Spring 2023
export const OFFICERS = {
  president: {
    name: 'Rebecca Santos',
    discord: 'https://discord.com/users/eckybae',
    linkedin: 'https://www.linkedin.com/in/rebeccasantos106/',
    pic: PICLINKS.PRESIDENT,
  },
  vp_ext: {
    name: 'Carolyn Heron',
    discord: 'https://discord.com/users/carisimo',
    linkedin: 'https://www.linkedin.com/in/ana-c-heron/',
    pic: PICLINKS.VP_EXT,
  },
  vp_int: {
    name: 'Chelsea Nguyen',
    discord: 'https://discord.com/users/sheepsgardenn',
    linkedin: 'https://www.linkedin.com/in/cngu/',
    pic: PICLINKS.VP_INT,
  },
  marketing_dir: {
    name: 'Kaitlin Wood',
    discord: 'https://discord.com/users/kaminji',
    linkedin: 'https://www.linkedin.com/in/kaitlinwood03/',
    pic: PICLINKS.MARKETING_DIR,
  },
  prof_dev_chair1: {
    name: 'Daisy Gonzalez',
    discord: 'https://discord.com/users/flowerspasms',
    linkedin: 'https://www.linkedin.com/in/daigza09/',
    pic: PICLINKS.PROF_DEV_CHAIR1,
  },
  prof_dev_chair2: {
    name: 'Maria Thomas',
    discord: 'https://discord.com/users/straw6286',
    linkedin: 'https://www.linkedin.com/in/maria-le-thomas/',
    pic: PICLINKS.PROF_DEV_CHAIR2,
  },
  ment_chair1: {
    name: 'Reem Alkhalily',
    discord: 'https://discord.com/users/jynxae',
    linkedin: 'https://www.linkedin.com/in/reem-alkhalily-9a9152250/',
    pic: PICLINKS.MENT_CHAIR1,
  },
  ment_chair2: {
    name: 'Lisa Zuniga',
    discord: 'https://discord.com/users/zuuni#8270',
    linkedin: 'https://www.linkedin.com/in/lisa-zuniga/',
    pic: PICLINKS.MENT_CHAIR2,
  },
  secy: {
    name: 'Neha Joshi',
    discord: 'https://discord.com/users/neyhuh',
    linkedin: 'https://www.linkedin.com/in/nehakjoshi/',
    pic: PICLINKS.SECY,
  },
  webmaster: {
    name: 'Sage Turner',
    discord: 'https://discord.com/users/sayj',
    linkedin: 'https://www.linkedin.com/in/sageturn01/',
    pic: PICLINKS.WEBMASTER,
  },
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
    logo: './sponsors/chevron_logo.svg',
    link: 'https://careers.chevron.com/internship',
  },
  {
    name: 'Deloitte',
    logo: './sponsors/deloitte_logo.svg',
    link: 'https://www2.deloitte.com/us/en/pages/careers/articles/join-deloitte-internships.html',
  },
  {
    name: 'Paycom',
    logo: './sponsors/paycom_logo.svg',
    link: 'https://www.paycom.com/careers/job-categories/internships/',
  },
  {
    name: 'SLB',
    logo: './sponsors/slb_logo.svg',
    link: 'https://careers.slb.com/fojoblist/it-intern',
  },
].sort((a, b) => a.name.localeCompare(b.name))
