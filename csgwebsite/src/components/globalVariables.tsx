export type Sponsor = {
  name: string
  logo: string
  link: string
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
  BANNER: './Photos/Officers_Fall_2024.jpg',
  PRESIDENT: './Photos/OfficerPics_Fall_2024/Reem_Pres.jpg',
  VP_EXT: './Photos/OfficerPics_Fall_2024/Neha_VPExternal.jpg',
  VP_INT: './Photos/OfficerPics_Fall_2024/Lisa_VPInternal.jpg',
  MARKETING_DIR: './Photos/OfficerPics_Fall_2024/Yosan_MarkDir.jpg',
  PROF_DEV_CHAIR1: './Photos/OfficerPics_Fall_2024/Joice_ProfDevChair.jpg',
  PROF_DEV_CHAIR2: './Photos/OfficerPics_Fall_2024/Anthony_ProfDevChair.jpg',
  MENT_CHAIR1: './Photos/OfficerPics_Fall_2024/Naumi_MentorChair.jpg',
  // MENT_CHAIR2: './Photos/OfficerPics_Fall_2024/_MentorChair.jpg',
  SECY: './Photos/OfficerPics_Fall_2024/Emma_Secy.jpg',
  WEBMASTER: './Photos/OfficerPics_Fall_2024/Sage_WebM.jpg',
}

// * Officer Information
// * Last Updated Fall 2024
export const OFFICERS = {
  president: {
    name: 'Reem Alkhalily',
    discord: 'jynxae',
    linkedin: 'https://www.linkedin.com/in/reem-alkhalily-9a9152250/',
    pic: PICLINKS.PRESIDENT,
  },
  vp_ext: {
    name: 'Neha Joshi',
    discord: 'neyhuh',
    linkedin: 'https://www.linkedin.com/in/nehakjoshi/',
    pic: PICLINKS.VP_EXT,
  },
  vp_int: {
    name: 'Lisa Zuñiga',
    discord: 'zuunii.',
    linkedin: 'https://www.linkedin.com/in/lisa-zuniga/',
    pic: PICLINKS.VP_INT,
  },
  marketing_dir: {
    name: 'Yosan Asefa',
    discord: 'buddahchip.',
    linkedin: 'https://www.linkedin.com/in/yosan-asefa/',
    pic: PICLINKS.MARKETING_DIR,
  },
  prof_dev_chair1: {
    name: 'Joice Nasr Mikhael',
    discord: 'joicem',
    linkedin: 'https://www.linkedin.com/in/joice-mikhael/',
    pic: PICLINKS.PROF_DEV_CHAIR1,
  },
  prof_dev_chair2: {
    name: 'Anthony Delgado',
    discord: 'assassin4101',
    linkedin: 'https://www.linkedin.com/in/anthonyd4101/',
    pic: PICLINKS.PROF_DEV_CHAIR2,
  },
  ment_chair1: {
    name: 'Naumi Aparanji',
    discord: 'naumi5693',
    linkedin: 'https://www.linkedin.com/in/naumi-aparanji-364a12214/',
    pic: PICLINKS.MENT_CHAIR1,
  },
  // ment_chair2: {
  //   name: '',
  //   discord: '',
  //   linkedin: '',
  //   pic: PICLINKS.MENT_CHAIR2,
  // },
  secy: {
    name: 'Emma Pham',
    discord: '_progoat',
    linkedin: 'https://www.linkedin.com/in/emma-pham-28802b255/',

    pic: PICLINKS.SECY,
  },
  webmaster: {
    name: 'Sage Turner',

    discord: 'sayj',
    linkedin: 'https://www.linkedin.com/in/sageturn01/',
    pic: PICLINKS.WEBMASTER,
  },
}


// * Sponsor Information
// * Last Updated Fall 2025
export const SPONSORS: Sponsor[] = [
  {
    name: 'Sysco',
    logo: './sponsors/sysco.png',
    link: 'https://careers.sysco.com/en',
  },

  {
    name: 'HPE',
    logo: './sponsors/hpe.png',
    link: 'https://careers.hpe.com/us/en/students',
  },

  
  {
    name: 'LyondellBasell',
    logo: './sponsors/lyondellbasell_logo.svg',
    link: 'https://www.lyondellbasell.com/en/careers/university-recruiting/',
  },

  {
    name: 'Credera',
    logo: './sponsors/credera.png',
    link: 'https://www.credera.com/en-us/careers',
  },

  {
    name: 'Deloitte',
    logo: './sponsors/deloitte_logo.svg',
    link: 'https://www2.deloitte.com/us/en/pages/careers/articles/join-deloitte-internships.html',
  },

  {
    name: 'Paycom',
    logo: './sponsors/paycom.png',
    link: 'https://www.paycom.com/careers/job-categories/internships/',
  },

]

.sort((a, b) => a.name.localeCompare(b.name))
