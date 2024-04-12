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
        items: [
          { name: 'JavaScript', icon: 'js', iconSource: 'fontawesome' },
          { name: 'TypeScript', icon: 'typescript', iconSource: 'simpleicons' },
          { name: 'Java', icon: 'java', iconSource: 'fontawesome' }
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
        items: [
          { name: 'Node.js', icon: 'node-js', iconSource: 'fontawesome' },
          { name: 'Spring Boot', icon: 'java', iconSource: 'fontawesome' }
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
        group: 'Basics',
        items: [
          { name: 'HTML', icon: 'html5', iconSource: 'fontawesome' },
          { name: 'CSS', icon: 'css3-alt', iconSource: 'fontawesome' }
        ]
      },
      {
        group: 'Frameworks',
        items: [
          { name: 'Vue', icon: 'vuejs', iconSource: 'fontawesome' },
          // i know that React is not a framework but a library 🤓
          { name: 'React', icon: 'react', iconSource: 'fontawesome' },
          { name: 'Angular', icon: 'angular', iconSource: 'fontawesome' }
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
        items: [
          { name: 'PostgreSQL', icon: 'postgres', iconSource: 'simpleicons' },
          { name: 'MySQL', icon: 'mysql', iconSource: 'simpleicons' }
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
        items: [{ name: 'Google Cloud Platform', icon: 'google', iconSource: 'fontawesome' }]
      },
      {
        id: 7,
        group: 'Tools',
        items: [
          { name: 'Docker', icon: 'docker', iconSource: 'fontawesome' },
          { name: 'Git', icon: 'git', iconSource: 'fontawesome' },
          { name: 'Terraform', icon: 'terraform', iconSource: 'simpleicons' }
        ]
      }
    ],
    icon: 'gears',
    iconType: 'fa',
    displayAlterIcon: false
  }
];

export const stackItemsAlt = [
  {
    id: 1,
    heading: 'Languages',
    details: [
      {
        items: [
          { name: 'JavaScript', icon: 'js', iconSource: 'fontawesome' },
          { name: 'TypeScript', icon: 'typescript', iconSource: 'simpleicons' },
          { name: 'Java', icon: 'java', iconSource: 'fontawesome' }
        ]
      }
    ],
    icon: 'code',
    iconType: 'fa'
  },
  {
    id: 2,
    heading: 'Web technologies',
    details: [
      {
        group: 'Basics',
        items: [
          { name: 'HTML', icon: 'html5', iconSource: 'fontawesome' },
          { name: 'CSS', icon: 'css3-alt', iconSource: 'fontawesome' }
        ]
      },
      {
        group: 'Frontend',
        items: [
          { name: 'Vue', icon: 'vuejs', iconSource: 'fontawesome' },
          { name: 'React', icon: 'react', iconSource: 'fontawesome' },
          { name: 'Angular', icon: 'angular', iconSource: 'fontawesome' }
        ]
      },
      {
        group: 'Backend',
        items: [
          { name: 'Node.js', icon: 'node-js', iconSource: 'fontawesome' },
          { name: 'Spring Boot', icon: 'java', iconSource: 'fontawesome' }
        ]
      }
    ],
    icon: 'laptop-code',
    iconType: 'fa'
  },
  {
    id: 3,
    heading: 'Databases',
    details: [
      {
        items: [
          { name: 'PostgreSQL', icon: 'postgres', iconSource: 'simpleicons' },
          { name: 'MySQL', icon: 'mysql', iconSource: 'simpleicons' }
        ]
      }
    ],
    icon: 'database',
    iconType: 'fa'
  },
  {
    heading: 'Tools',
    details: [
      {
        items: [
          { name: 'Docker', icon: 'docker', iconSource: 'fontawesome' },
          { name: 'Git', icon: 'git', iconSource: 'fontawesome' },
          { name: 'Terraform', icon: 'terraform', iconSource: 'simpleicons' }
        ]
      }
    ],
    icon: 'gears',
    iconType: 'fa',
    displayAlterIcon: false
  },
  {
    id: 4,
    heading: 'DevOps',
    details: [
      {
        group: 'Infrastructure',
        items: [{ name: 'Google Cloud Platform', icon: 'google', iconSource: 'fontawesome' }]
      },
      {
        group: 'CI/CD',
        items: [
          { name: 'Jenkins', icon: 'jenkins', iconSource: 'fontawesome' },
          { name: 'GitHub Actions', icon: 'github', iconSource: 'fontawesome' },
          { name: 'Cloud Build', icon: 'cloud', iconSource: 'fontawesome', iconType: 'fa' }
        ]
      }
    ],
    icon: 'infinity',
    iconType: 'fa',
    displayAlterIcon: false
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
