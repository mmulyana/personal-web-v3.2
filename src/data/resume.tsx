import { Icons } from '@/components/icons'
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from 'lucide-react'

export const DATA = {
  name: 'Mulyana',
  initials: 'DV',
  url: 'https://dillion.io',
  location: 'Indonesia',
  locationLink: 'https://www.google.com/maps/place/sanfrancisco',
  description: 'Frontend Engineer.',
  summary: 'I have 1 year of experience in frontend development',
  avatarUrl: '/me.png',
  skills: [
    'React',
    'Next.js',
    'Typescript',
    'Node.js',
    'HTMX',
    'Laravel',
    'Vue.js',
    'Playwright',
    'Tailwind',
    'GraphQL',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/blog', icon: NotebookIcon, label: 'Blog' },
    { href: '#', icon: CodeIcon, label: 'Projects' },
    { href: '#', icon: PencilLine, label: 'Notes' },
  ],
  contact: {
    email: 'hello@example.com',
    tel: '+123456789',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://dub.sh/dillion-github',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://dub.sh/dillion-linkedin',
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: 'X',
        url: 'https://dub.sh/dillion-twitter',
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: 'Youtube',
        url: 'https://dub.sh/dillion-youtube',
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: '#',
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: 'Rakamin',
      href: 'https://rakamin.com/',
      badges: [],
      location: 'Remote',
      title: 'Frontend Engineer Intern',
      logoUrl: '/rakamin.png',
      start: 'May',
      end: 'Aug 2024',
      description:
        'Enhance and maintain 360 hiring platform, and implemented end-to-end testing',
    },
    {
      company: 'Bitkreasi',
      badges: [],
      href: 'https://bitkreasi.id/',
      location: 'Remote',
      title: 'Software Engineer Intern',
      logoUrl: '/bitkreasi.png',
      start: 'Jan',
      end: 'Apr 2024',
      description: 'Description',
    },
    {
      company: 'Black wolf tech',
      href: 'https://www.blackwolftech.id/',
      badges: [],
      location: 'Remote',
      title: 'Frontend Developer',
      logoUrl: '/bwt.jpeg',
      start: 'Aug',
      end: 'Dec 2023',
      description: 'Description',
    },
    {
      company: 'Kecilin',
      href: 'https://kecilin.id/',
      badges: [],
      location: 'Sleman, Yogyakarta',
      title: 'Frontend Developer Intern',
      logoUrl: '/kecilin.png',
      start: 'Jul',
      end: 'Sept 2023',
      description: 'Description',
    },
  ],
  education: [
    {
      school: 'Universitas Ahmad Dahlan',
      href: 'https://uad.ac.id/',
      degree: 'Bachelor degree',
      logoUrl: '/uad.jpeg',
      start: '2020',
      end: 'Present',
    },
    {
      school: 'Binar Academy',
      href: 'https://www.binaracademy.com/',
      degree: 'Frontend Javascript Batch 4',
      logoUrl: '/binar.jpeg',
      start: 'Feb',
      end: 'Jun 2023',
    },
    {
      school: 'Bangkit Academy',
      href: 'https://grow.google/intl/id_id/bangkit/?tab=machine-learning',
      degree: 'Cloud computing cohort',
      logoUrl: '/bangkit.jpg',
      start: 'Feb',
      end: 'Jul 2024',
    },
  ],
  projects: [
    {
      title: 'Chat Collect',
      href: 'https://chatcollect.com',
      dates: 'Jan 2024 - Feb 2024',
      active: true,
      description:
        'With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.',
      technologies: [
        'Next.js',
        'Typescript',
        'PostgreSQL',
        'Prisma',
        'TailwindCSS',
        'Stripe',
        'Shadcn UI',
        'Magic UI',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://chatcollect.com',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: '',
      video:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4',
    },
    {
      title: 'Magic UI',
      href: 'https://magicui.design',
      dates: 'June 2023 - Present',
      active: true,
      description:
        'Designed, developed and sold animated UI components for developers.',
      technologies: [
        'Next.js',
        'Typescript',
        'PostgreSQL',
        'Prisma',
        'TailwindCSS',
        'Stripe',
        'Shadcn UI',
        'Magic UI',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://magicui.design',
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: 'Source',
          href: 'https://github.com/magicuidesign/magicui',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '',
      video: 'https://cdn.magicui.design/bento-grid.mp4',
    },
    {
      title: 'llm.report',
      href: 'https://llm.report',
      dates: 'April 2023 - September 2023',
      active: true,
      description:
        'Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.',
      technologies: [
        'Next.js',
        'Typescript',
        'PostgreSQL',
        'Prisma',
        'TailwindCSS',
        'Shadcn UI',
        'Magic UI',
        'Stripe',
        'Cloudflare Workers',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://llm.report',
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: 'Source',
          href: 'https://github.com/dillionverma/llm.report',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '',
      video: 'https://cdn.llm.report/openai-demo.mp4',
    },
    {
      title: 'Automatic Chat',
      href: 'https://automatic.chat',
      dates: 'April 2023 - March 2024',
      active: true,
      description:
        'Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.',
      technologies: [
        'Next.js',
        'Typescript',
        'PostgreSQL',
        'Prisma',
        'TailwindCSS',
        'Shadcn UI',
        'Magic UI',
        'Stripe',
        'Cloudflare Workers',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://automatic.chat',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: '',
      video:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4',
    },
  ],
  hackathons: [
    {
      title: 'Hack Western 5',
      dates: 'November 23rd - 25th, 2018',
      location: 'London, Ontario',
      description:
        'Developed a mobile application which delivered bedtime stories to children using augmented reality.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
      links: [],
    },
    {
      title: 'Hack The North',
      dates: 'September 14th - 16th, 2018',
      location: 'Waterloo, Ontario',
      description:
        'Developed a mobile application which delivers university campus wide events in real time to all students.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
      links: [],
    },
  ],
} as const
