export const ProjectType = {
  WEB_APP: 'Application Web',
  MOBILE_APP: 'Application Mobile',
  WEBSITE: 'Site Web',
  DESIGN: 'Design',
  VIDEO: 'Vidéo'
}

export const Technologies = {
  VUE: { name: 'Vue.js', version: '3.x' },
  LARAVEL: { name: 'Laravel', version: '10.x' },
  TAILWIND: { name: 'TailwindCSS', version: '3.x' },
  THREEJS: { name: 'Three.js', version: 'r158' },
  MYSQL: { name: 'MySQL', version: '8.x' }
}

export const projects = [
  {
      id: 1,
      slug: 'portfolio-3d',
      title: "Portfolio Interactif 3D",
      shortDescription: "Portfolio personnel avec expérience 3D interactive",
      description: `Portfolio créatif mettant en avant mes projets à travers une expérience
          immersive en 3D. Développé avec Vue.js et Three.js, il offre une navigation
          fluide et intuitive tout en présentant mon travail de manière innovante.`,
      image: "/project1.jpg",
      gallery: [
          {
              url: "/portfolio-1.jpg",
              alt: "Vue d'ensemble du portfolio",
              description: "Page d'accueil avec navigation 3D interactive",
              category: "interface"
          },
          {
              url: "/portfolio-2.jpg",
              alt: "Section projets",
              description: "Galerie de projets avec animations fluides",
              category: "interface"
          },
          {
              url: "/portfolio-3.jpg",
              alt: "Expérience 3D",
              description: "Environnement 3D interactif",
              category: "feature"
          }
      ],
      githubUrl: "https://github.com/Yanismd27/portfolio",
      liveUrl: "https://yanismeddour.com",
      technologies: [
          Technologies.VUE.name,
          Technologies.THREEJS.name,
          Technologies.TAILWIND.name
      ],
      type: ProjectType.WEBSITE,
      year: "2024",
      role: "Full Stack Developer",
      duration: "3 mois",
      status: "En ligne",
      content: [
          {
              title: "Le Concept",
              text: `L'objectif était de créer un portfolio qui se démarque en offrant 
                  une expérience utilisateur unique et mémorable. L'utilisation de la 3D 
                  permet de présenter les projets de manière innovante tout en démontrant 
                  mes compétences techniques.`
          },
          {
              title: "Défis Techniques",
              text: `Le principal défi était d'optimiser les performances 3D pour garantir 
                  une expérience fluide sur tous les appareils, notamment mobiles. La gestion 
                  des animations et des transitions nécessitait également une attention particulière.`,
              image: {
                  url: "/challenges-portfolio.jpg",
                  alt: "Schéma d'architecture technique du portfolio",
                  description: "Diagramme détaillant l'architecture technique du projet"
              }
          },
          {
              title: "Solution",
              text: `J'ai implémenté diverses optimisations comme le lazy loading des modèles 3D, 
                  la réduction des polygones et l'utilisation de GSAP pour des animations fluides. 
                  L'architecture du projet suit les bonnes pratiques Vue.js avec la Composition API.`
          }
      ],
      features: [
          "Navigation 3D interactive",
          "Mode sombre/clair",
          "Animations fluides",
          "Design responsive",
          "Optimisation des performances"
      ]
  },
  {
      id: 2,
      slug: 'therapify',
      title: "Therapify",
      shortDescription: "Plateforme de mise en relation patients-thérapeutes",
      description: `Therapify est une application web facilitant la mise en relation entre 
          patients et thérapeutes. Elle permet la prise de rendez-vous en ligne, 
          la gestion des consultations et le suivi des patients.`,
      image: "/therapify.jpeg",
      gallery: [
          {
              url: "/therapify-2.jpeg",
              alt: "Interface de prise de rendez-vous",
              description: "Système intuitif de prise de rendez-vous en ligne",
              category: "interface"
          },
          {
              url: "/therapify-3.jpeg",
              alt: "Dashboard thérapeute",
              description: "Tableau de bord personnalisé pour les thérapeutes",
              category: "feature"
          },
          {
              url: "/therapify-4.jpeg",
              alt: "Interface de messagerie",
              description: "Système de messagerie sécurisé entre patients et thérapeutes",
              category: "feature"
          }
      ],
      githubUrl: "https://github.com/Yanismd27/Therapify",
      liveUrl: "https://therapify.example.com",
      technologies: [
          Technologies.VUE.name,
          Technologies.LARAVEL.name,
          Technologies.TAILWIND.name,
          Technologies.MYSQL.name
      ],
      type: ProjectType.WEB_APP,
      year: "2024",
      role: "Full Stack Developer",
      duration: "6 mois",
      status: "En développement",
      content: [
          {
              title: "Le Concept",
              text: `Therapify répond au besoin croissant de solutions de santé mentale 
                  accessibles en ligne. La plateforme simplifie la recherche de thérapeutes 
                  et la gestion des rendez-vous pour les patients tout en offrant aux 
                  professionnels des outils de gestion efficaces.`
          },
          {
              title: "Défis Techniques",
              text: `Les principaux défis incluaient la sécurisation des données sensibles, 
                  la mise en place d'un système de réservation en temps réel et l'intégration 
                  d'une solution de visioconférence sécurisée.`,
              image: {
                  url: "/therapify-architecture.jpeg",
                  alt: "Architecture technique de Therapify",
                  description: "Schéma détaillant l'architecture sécurisée de la plateforme"
              }
          },
          {
              title: "Solution",
              text: `L'application utilise Laravel pour une API robuste et sécurisée, 
                  Vue.js pour une interface réactive, et implémente des solutions de 
                  chiffrement pour la protection des données. Le système de réservation 
                  utilise des websockets pour les mises à jour en temps réel.`
          }
      ],
      features: [
          "Recherche avancée de thérapeutes",
          "Prise de rendez-vous en ligne",
          "Système de messagerie sécurisé",
          "Visioconférence intégrée",
          "Tableau de bord personnalisé"
      ]
  },
  {
      id: 3,
      slug: 'tokyo-journey',
      title: "Tokyo Journey",
      shortDescription: "Voyage à travers Tokyo",
      description: `Tokyo Journey est le résumé d'un voyage artistique et créatif à travers 
          l'une des villes les plus fascinantes du monde.`,
      image: "/Tokyo2.jpg",
      gallery: [
          {
              url: "/tokyo2.jpg",
              alt: "Architecture traditionnelle de Tokyo",
              description: "Kabukicho et son quartier lumineux",
              category: "architecture"
          },
          {
              url: "/tokyo5.jpg",
              alt: "Culture japonaise",
              description: "Mélange de tradition et modernité",
              category: "culture"
          },
          {
            url: "/tokyo6.jpg",
            alt: "Culture japonaise",
            description: "Mélange de tradition et modernité",
            category: "culture"
        }
      ],
      githubUrl: "https://yanismeddour.myportfolio.com/a-journey-in-tokyo-2022",
      liveUrl: "https://tokyojourney.example.com",
      type: ProjectType.DESIGN,
      year: "2024",
      role: "Photographe & Designer",
      duration: "1 mois",
      status: "Terminé",
      content: [
          {
              title: "Le Concept",
              text: `Tokyo Journey est une exploration visuelle de la culture et de l'architecture 
                  japonaise, capturant l'essence unique de cette métropole fascinante.`
          },
          {
              title: "Défis Techniques",
              text: `Les principaux défis de ce projet étaient de trouver un équilibre entre 
                  la simplicité et la complexité, tout en capturant l'authenticité de Tokyo.`,
              image: {
                  url: "/tokyo-process.jpg",
                  alt: "Processus créatif",
                  description: "Aperçu du processus de création et d'édition photographique"
              }
          },
          {
              title: "Solution",
              text: `À travers une série de photographies soigneusement composées et éditées, 
                  le projet parvient à capturer l'essence de Tokyo, de ses quartiers modernes 
                  à ses temples traditionnels.`
          }
      ],
      features: [
          "Photographie urbaine",
          "Documentation culturelle",
          "Narration visuelle",
          "Design éditorial",
          "Composition artistique"
      ]
  },
  {
    id: 4,
    slug: '100k',
    title: "Road to 100k",
    shortDescription: "Plateforme de gestion de finances personnelles avec objectif",
    description: `Road to 100k est une application web permettant de suivre et gérer ma progression 
        vers mon objectif financier de 100 000 €. Elle offre des outils de suivi, d'analyse 
        et de visualisation pour optimiser la gestion de patrimoine personnel.`,
    image: "/100K3.jpeg",
    gallery: [
        {
            url: "/100K1.jpeg",
            alt: "Dashboard principal",
            description: "Vue d'ensemble avec progression vers l'objectif et métriques clés",
            category: "interface"
        },
        {
            url: "/100K2.jpeg",
            alt: "Suivi des investissements",
            description: "Visualisation détaillée de la répartition des actifs",
            category: "feature"
        },
        {
            url: "/100K3.jpeg",
            alt: "Analyse des performances",
            description: "Graphiques et statistiques de progression mensuelle",
            category: "analytics"
        }
    ],
    githubUrl: "https://github.com/Yanismd27/100k",
    liveUrl: "https://100k.example.com",
    technologies: [
        Technologies.VUE.name,
        Technologies.LARAVEL.name,
        Technologies.TAILWIND.name,
        Technologies.MYSQL.name
    ],
    type: ProjectType.WEB_APP,
    year: "2024",
    role: "Full Stack Developer",
    duration: "4 mois",
    status: "En développement",
    content: [
        {
            title: "Le Concept",
            text: `Road to 100k est né du besoin de suivre efficacement la progression vers un 
                objectif financier ambitieux. L'application combine des outils de suivi financier, 
                des visualisations de données et des analyses prédictives pour aider à atteindre 
                l'objectif de 100 000 € d'épargne et d'investissements. Elle permet de centraliser 
                toutes les informations financières en un seul endroit et d'avoir une vue claire 
                sur la progression.`
        },
        {
            title: "Défis Techniques",
            text: `Les principaux défis incluaient la mise en place d'un système sécurisé 
                pour les données financières sensibles, l'intégration de graphiques complexes 
                pour la visualisation des données, et le développement d'algorithmes de calcul 
                de projections financières précis.`,
            image: {
                url: "/100k-architecture.jpeg",
                alt: "Architecture technique de Road to 100k",
                description: "Schéma détaillant l'architecture sécurisée et le traitement des données"
            }
        },
        {
            title: "Solution",
            text: `L'application utilise une architecture moderne avec Vue.js pour l'interface 
                utilisateur réactive, Laravel pour une API robuste et sécurisée, et une base 
                de données MySQL optimisée pour les données financières. Les graphiques sont 
                générés avec des bibliothèques de visualisation performantes, et l'application 
                inclut des algorithmes personnalisés pour les projections et analyses financières.`
        }
    ],
    features: [
        "Tableau de bord personnalisable",
        "Suivi en temps réel de la progression",
        "Visualisations graphiques avancées",
        "Projections financières",
        "Alertes et notifications d'objectifs",
        "Export de rapports détaillés",
        "Gestion multi-comptes et multi-devises"
    ]
},
{
  id: 5,
  slug: 'shizen-bonzai',
  title: "Shizen Bonzai",
  shortDescription: "E-commerce spécialisé dans la vente de bonsaïs",
  description: `Shizen Bonzai est une boutique en ligne dédiée à l'art du bonsaï, 
      proposant une sélection soigneuse d'arbres, d'outils et d'accessoires. 
      La plateforme offre également des guides d'entretien et un suivi personnalisé 
      pour accompagner les passionnés dans leur journey.`,
  image: "/shizen4.jpeg",
  gallery: [
      {
          url: "/shizen1.jpeg",
          alt: "Page d'accueil Shizen",
          description: "Interface épurée mettant en avant les plus beaux bonsaïs",
          category: "interface"
      },
      {
          url: "/shizen2.jpeg",
          alt: "Catalogue de produits",
          description: "Présentation détaillée des bonsaïs avec leurs caractéristiques",
          category: "feature"
      },
      {
          url: "/shizen3.jpeg",
          alt: "Guide d'entretien",
          description: "Sections éducatives et conseils d'experts",
          category: "content"
      }
  ],
  githubUrl: "https://github.com/Yanismd27/shizen-bonzai",
  liveUrl: "https://shizenbonzai.com",
  technologies: [
      Technologies.VUE.name,
      Technologies.LARAVEL.name,
      Technologies.TAILWIND.name,
      Technologies.MYSQL.name
  ],
  type: ProjectType.WEB_APP,
  year: "2024",
  role: "Full Stack Developer",
  duration: "5 mois",
  status: "En ligne",
  content: [
      {
          title: "Le Concept",
          text: `Shizen Bonzai est né de la passion pour l'art ancestral du bonsaï et 
              du désir de le rendre accessible au plus grand nombre. Plus qu'une simple 
              boutique en ligne, la plateforme se veut un lieu d'apprentissage et 
              d'échange autour de cet art japonais. Chaque bonsaï est soigneusement 
              sélectionné et accompagné d'un guide d'entretien personnalisé, permettant 
              même aux débutants de se lancer en toute confiance.`
      },
      {
          title: "Défis Techniques",
          text: `Le principal défi était de créer une expérience utilisateur fluide 
              combinant e-commerce et contenu éducatif. Il fallait également mettre 
              en place un système de gestion des stocks sophistiqué pour des produits 
              vivants nécessitant un suivi particulier, ainsi qu'un système de 
              recommandations basé sur le niveau d'expertise et les conditions 
              environnementales de l'acheteur.`,
          image: {
              url: "/shizen-architecture.jpeg",
              alt: "Architecture technique de Shizen Bonzai",
              description: "Schéma de l'architecture e-commerce et du système de recommandations"
          }
      },
      {
          title: "Solution",
          text: `La solution s'appuie sur une architecture moderne avec Vue.js pour 
              une interface réactive et élégante, Laravel pour une gestion robuste 
              du back-end, et une base de données MySQL optimisée pour le e-commerce. 
              Le système inclut un algorithme de recommandation personnalisé, un suivi 
              des stocks en temps réel, et une intégration transparente des contenus 
              éducatifs avec l'expérience d'achat.`
      }
  ],
  features: [
      "Catalogue produits détaillé",
      "Système de filtrage avancé",
      "Guides d'entretien personnalisés",
      "Suivi des commandes en temps réel",
      "Espace membre personnalisé",
      "Blog et contenu éducatif",
      "Système de recommandations intelligent",
      "Paiement sécurisé multi-devises",
      "Service après-vente intégré"
  ]
}
]

export default projects