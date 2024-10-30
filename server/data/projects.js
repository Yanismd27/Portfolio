// server/data/projects.js

export const projects = [
    {
        id: 1,
        title: "Project Title 1",
        description: "Description détaillée du projet...",
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
                image: "/challenges.jpg",
                imageAlt: "Technical challenges visualization"
            },
            {
                title: "Solution",
                text: "Description de la solution...",
            }
        ]
    },
    // Autres projets...
]

export default projects