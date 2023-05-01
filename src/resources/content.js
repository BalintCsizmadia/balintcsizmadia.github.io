export const person = {
  name: 'Balint Csizmadia',
  title: 'Software Developer'
};

export const stackItems = [
  {
    id: 1,
    heading: 'Languages',
    details: [{ id: 1, items: ['JavaScript', 'TypeScript', 'Java'] }],
    icon: 'code',
    iconType: 'fa'
  },
  {
    id: 2,
    heading: 'Backend',
    details: [{ id: 2, items: ['Node.js', 'Spring Boot'] }],
    icon: 'server',
    iconType: 'fa'
  },
  {
    id: 3,
    heading: 'Frontend',
    details: [
      { id: 3, group: 'Basics', items: ['HTML', 'CSS'] },
      {
        id: 4,
        group: 'Frameworks',
        // i know that React is not a framework but a library 🤓
        items: ['Vue', 'React', 'Angular']
      }
    ],
    icon: 'display',
    iconType: 'fa'
  },
  {
    id: 4,
    heading: 'Database',
    details: [{ id: 5, items: ['PostgreSQL', 'MySQL'] }],
    icon: 'database',
    iconType: 'fa'
  },
  {
    id: 5,
    heading: 'DevOps',
    details: [
      { id: 6, group: 'Infrastructure', items: ['Google Cloud Platform'] },
      { id: 7, group: 'Tools', items: ['Docker', 'Git', 'Terraform'] }
    ],
    icon: 'gears',
    iconType: 'fa'
  }
];

export const stackItems_alt = [
  {
    heading: 'Languages',
    details: [{ items: ['JavaScript', 'TypeScript', 'Java'] }],
    icon: 'code',
    iconType: 'fa'
  },
  {
    heading: 'Web technologies',
    details: [
      { group: 'Basics', items: ['HTML', 'CSS'] },
      { group: 'Frontend', items: ['Vue', 'React', 'Angular'] },
      { group: 'Backend', items: ['Node.js', 'Spring Boot'] }
    ],
    icon: 'server',
    iconType: 'fa'
  },
  {
    heading: 'Databases',
    details: [{ items: ['PostgreSQL', 'MySQL'] }],
    icon: 'database',
    iconType: 'fa'
  },
  {
    heading: 'Tools',
    details: [{ items: ['Docker', 'Git', 'Terraform'] }],
    icon: 'toolbox',
    iconType: 'fa'
  },
  {
    heading: 'DevOps',
    details: [
      { group: 'Infrastructure', items: ['Google Cloud Platform'] },
      { group: 'CI/CD', items: ['Jenkins', 'GitHub Actions', 'Cloud Build'] }
    ],
    icon: 'gears',
    iconType: 'fa'
  }
];

export const contactMethods = [
  {
    id: 1,
    name: 'GitHub',
    user: 'BalintCsizmadia',
    icon: 'github',
    iconType: 'fab',
    contact: 'https://github.com/balintcsizmadia'
  },
  {
    id: 2,
    name: 'LinkedIn',
    user: 'balint-csizmadia',
    icon: 'linkedin',
    iconType: 'fab',
    contact: 'https://linkedin.com/in/balint-csizmadia'
  },
  {
    id: 3,
    name: 'Email',
    user: 'balintcsizmadia1@gmail.com',
    icon: 'envelope',
    iconType: 'fa',
    contact: 'balintcsizmadia1@gmail.com',
    type: 'email'
  }
];
