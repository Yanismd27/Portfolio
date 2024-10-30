export interface Project {
    id: number
    title: string
    description: string
    image: string
    githubUrl?: string
    demoUrl?: string
    technologies: string[]
    year: string
    role: string
    content: {
      title: string
      text: string
      image?: string
      imageAlt?: string
    }[]
  }