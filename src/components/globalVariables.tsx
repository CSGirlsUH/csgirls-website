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
  PRESIDENT: './Photos/OfficerPics_Fall_2025/President.png',
  VP_INT: './Photos/OfficerPics_Fall_2025/VP_Internal.png',
  VP_EXT: './Photos/OfficerPics_Fall_2025/VP_External.png',
  PROF_DEV_CHAIR_TECH: './Photos/OfficerPics_Fall_2025/Prof_Dev_Chair_Technical.png',
  PROF_DEV_CHAIR_BEHAV: './Photos/OfficerPics_Fall_2025/Prof_Dev_Chair_Behavioral.png',
  MENT_CHAIR: './Photos/OfficerPics_Fall_2025/Mentorship_Chair.png',
  KATTIS_CHAIR: './Photos/OfficerPics_Fall_2025/Kattis_Chair.png',
  MARKETING: './Photos/OfficerPics_Fall_2025/Marketing_Chair.png',
  DESIGNER: './Photos/OfficerPics_Fall_2025/Designer.png',
  WEBMASTER: './Photos/OfficerPics_Fall_2025/Webmaster.png',
  HISTORIAN: './Photos/OfficerPics_Fall_2025/Historian.png',
}

// * Officer Information
// * Last Updated Fall 2025
export const OFFICERS = {
  president: {
    name: 'Naumi Aparanji',
    discord: 'naumi5693',
    linkedin: 'https://www.linkedin.com/in/naumi-aparanji-364a12214/',
    pic: PICLINKS.PRESIDENT,
  },
  vp_int: {
    name: 'Joice Nasr Mikhael',
    discord: 'joicem',
    linkedin: 'https://www.linkedin.com/in/joice-mikhael/',
    pic: PICLINKS.VP_INT,
  },
  vp_ext: {
    name: 'Kat Rodriguez',
    discord: '3x_nihil.0',
    linkedin: 'https://www.linkedin.com/in/kathiana-rodriguez-753b7b28b/',
    pic: PICLINKS.VP_EXT,
  },
  prof_dev_tech: {
    name: 'Dom McDonald',
    discord: 'dom.dom.da.bomb',
    linkedin: 'https://www.linkedin.com/in/dominic-mcdonald-uh/',
    pic: PICLINKS.PROF_DEV_CHAIR_TECH,
  },
  prof_dev_behav: {
    name: 'Shruti Yenamagandla',
    discord: 'shruthi9663',
    linkedin: 'https://www.linkedin.com/in/shruthi-yenamagandla-23883428b/',
    pic: PICLINKS.PROF_DEV_CHAIR_BEHAV,
  },
  ment_chair: {
    name: 'Sylvia Ephraim',
    discord: 'mayberrysomething',
    linkedin: '',
    pic: PICLINKS.MENT_CHAIR,
  },
  kattis_chair: {
    name: 'Nathalye Gonzalez',
    discord: 'nat__23.',
    linkedin: 'https://www.linkedin.com/in/nathalye-gonzalez-/',
    pic: PICLINKS.KATTIS_CHAIR,
  },
  marketing: {
    name: 'Tanzeela Nizami',
    discord: 'ratantouille',
    linkedin: 'https://www.linkedin.com/in/tanzeela-nizami/',
    pic: PICLINKS.MARKETING,
  },
  designer: {
    name: 'Naomi Thomas',
    discord: 'naomi3967',
    linkedin: 'https://www.linkedin.com/in/naomi-thomas-625385291/',
    pic: PICLINKS.DESIGNER,
  },
  webmaster: {
    name: 'Zainab Qureshi',
    discord: 'zq_2003',
    linkedin: 'https://www.linkedin.com/in/zainabb-qureshi/',
    pic: PICLINKS.WEBMASTER,
  },
  historian: {
    name: 'Erika Jimenez',
    discord: 'erikajim',
    linkedin: 'https://www.linkedin.com/in/erika-jimenez-68b44618a/',
    pic: PICLINKS.HISTORIAN,
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
    name: 'Paycom',
    logo: './sponsors/paycom.png',
    link: 'https://www.paycom.com/careers/job-categories/internships/',
  },
].sort((a, b) => a.name.localeCompare(b.name))
