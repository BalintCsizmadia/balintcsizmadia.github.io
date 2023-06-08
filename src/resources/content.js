export const person = {
  name: 'Balint Csizmadia',
  title: 'Software Developer'
};

export const stackItems = [
  {
    id: 1,
    heading: 'Languages',
    details: [
      {
        id: 1,
        items: [
          { name: 'JavaScript', icon: 'js' },
          { name: 'TypeScript', icon: 'js' },
          { name: 'Java', icon: 'java' }
        ]
      }
    ],
    icon: 'code',
    iconType: 'fa',
    displayAlterIcon: false
  },
  {
    id: 2,
    heading: 'Backend',
    details: [
      {
        id: 2,
        items: [
          { name: 'Node.js', icon: 'node-js' },
          { name: 'Spring Boot', icon: 'java' }
        ]
      }
    ],
    icon: 'server',
    iconType: 'fa',
    displayAlterIcon: false
  },
  {
    id: 3,
    heading: 'Frontend',
    details: [
      {
        id: 3,
        group: 'Basics',
        items: [
          { name: 'HTML', icon: 'html5' },
          { name: 'CSS', icon: 'css3-alt' }
        ]
      },
      {
        id: 4,
        group: 'Frameworks',
        items: [
          { name: 'Vue', icon: 'vuejs' },
          // i know that React is not a framework but a library 🤓
          { name: 'React', icon: 'react' },
          { name: 'Angular', icon: 'angular' }
        ]
      }
    ],
    icon: 'display',
    iconType: 'fa',
    displayAlterIcon: false
  },
  {
    id: 4,
    heading: 'Database',
    details: [
      {
        id: 5,
        items: [
          { name: 'PostgreSQL', icon: 'database', iconType: 'fa' },
          { name: 'MySQL', icon: 'database', iconType: 'fa' }
        ]
      }
    ],
    icon: 'database',
    iconType: 'fa',
    displayAlterIcon: false
  },
  {
    id: 5,
    heading: 'DevOps',
    details: [
      {
        id: 6,
        group: 'Infrastructure',
        items: [{ name: 'Google Cloud Platform', icon: 'google' }]
      },
      {
        id: 7,
        group: 'Tools',
        items: [
          { name: 'Docker', icon: 'docker' },
          { name: 'Git', icon: 'git' },
          { name: 'Terraform', icon: 'road-bridge', iconType: 'fa' }
        ]
      }
    ],
    icon: 'gears',
    iconType: 'fa',
    displayAlterIcon: false
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
