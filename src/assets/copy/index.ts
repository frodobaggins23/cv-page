import { Copy, WorkPosition, WORK_TYPE } from './types'

export const header: Copy = {
  name: 'Jakub Čejchan',
  intro: 'Javascript developer'
}

export const about: Copy = {
  name: 'Title',
  paragraphs: [
    'For over 6 years, I have been working in online marketing, specializing on websites.',
    'Few years ago, I decided to upgrade my career and become a javascript developer.'
  ]
}

export const work: Array<WorkPosition> = [
  {
    title: 'Javascript Developer',
    employer: 'Socialbakers',
    dates: '09/2019 – now',
    description: 'Working with React, Next JS, Redux, CSS modules, Styled Components. Agile development (Web team, Product team)',
    workType: WORK_TYPE.CODING
  },
  {
    title: 'Coding Bootcamp',
    employer: 'Data4You',
    dates: '05/2019 – 07/2019',
    description: 'Intensive 12-week coding bootcamp focused on web development. Course syllabus.',
    workType: WORK_TYPE.CODING
  },
  {
    title: 'Web Content Specialist',
    employer: 'Avast Software',
    dates: '08/2017 – 04/2019',
    description: 'Responsible for company presentation on corporate websites (AVG, HMA). Agile development (JIRA). Web analytics.',
    workType: WORK_TYPE.MARKETING
  },
  {
    title: 'Web Specialist',
    employer: 'B/ S / H',
    dates: '11/2015 – 06/2017',
    workType: WORK_TYPE.MARKETING
  },
  {
    title: 'Online specialist / fundraiser ',
    employer: 'Člověk v tísni',
    dates: '02/2013 – 10/2015',
    workType: WORK_TYPE.MARKETING
  }
]

export const myVision : Copy = {
  title: 'My vision',
  claim: 'Dig deeper into JS',
  paragraphs: [
    `I am already pretty confident working with React / Redux but would like to strengthen 
    my backend skills (Express) as well as explore new interesting frameworks (e.g. Svelte, Angular)`
  ]
}

export const icons : Array<Copy> = [
  {
    src: 'w',
    text: 'jakub.cejchan@gmail.com',
    link: 'mailto:jakub.cejchan@gmail.com',
    alt: 'email'
  },
  {
    src: '',
    text: 'linkedin.com/in/jakubcej/',
    link: 'https://linkedin.com/in/jakubcej/',
    alt: 'linkedin'
  },
  {
    src: '',
    text: '606 652 181',
    link: '',
    alt: 'phone'
  }
]

export const other: Array<Copy> = [
  {
    title: 'Education',
    values: ['Mgr. | Charles University']
  },
  {
    title: 'Language skills',
    values: [
      'Czech - native speaker',
      'English - fluent, CAE certificate',
      'German - beginner'
    ]
  },
  {
    title: 'Courses',
    values: [
      'Javascript for webmasters | 2019',
      'Web Development (Coursera) | 2018'
    ]
  }
]
