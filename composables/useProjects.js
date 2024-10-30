import { ref } from 'vue'

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "Description détaillée du projet 1...",
    image: "/project1.jpg",
    githubUrl: "https://github.com/...",
    demoUrl: "https://demo.com",
    technologies: ["Vue.js", "Three.js", "TailwindCSS"],
    year: "2024",
    role: "Full Stack Developer",
    content: [
      {
        title: "Le Concept",
        text: "Description du concept...",
      },
      {
        title: "Défis Techniques",
        text: "Description des défis...",
        image: "/challenges1.jpg",
        imageAlt: "Technical challenges visualization"
      },
      {
        title: "Solution",
        text: "Description de la solution...",
      }
    ]
  },
  // ... autres projets avec le même format
]

export const useProjects = () => {
  const projects = ref(projectsData)

  const getProject = (id) => {
    return projects.value.find(p => p.id === id) || null
  }

  return {
    projects,
    getProject
  }
}

export default useProjects