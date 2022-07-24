
const projectsData = {
  sections: [
    {
      title: "Personal",
      route: "/personal",
      content: [
        {
          title: "Portfolio",
          route: "/personal/portfolio",
          ghRoute: "https://github.com/ChristopherPinedo/reactjs-projects-1",
          description: "Portafolio de proyectos",
          technologies: ["HTML", "CSS", "JS"],
          concepts: ["POO", "POO", "POO", "POO"],
        },
        {
          title: "Default Project",
          route: "/personal/defaultProject",
          ghRoute: "https://github.com/ChristopherPinedo/reactjs-projects-1",
          description: "Default Project",
          technologies: ["Tech1", "Tech2", "Tech3"],
          concepts: ["POO", "POO", "POO", "POO"],
        },
      ]
    },
    {
      title: "Platzi",
      route: "/platzi",
      content: [
        {
          title: "Todo App",
          route: "/platzi/todoApp",
          ghRoute: "https://github.com/ChristopherPinedo/reactjs-projects-1",
          description: "Aplicación de tareas",
          technologies: ["HTML", "CSS", "JS"],
          concepts: ["POO", "POO", "POO", "POO"],
        },
        {
          title: "Default Project",
          route: "/personal/defaultProject",
          ghRoute: "https://github.com/ChristopherPinedo/reactjs-projects-1",
          description: "Default Project",
          technologies: ["Tech1", "Tech2", "Tech3"],
          concepts: ["POO", "POO", "POO", "POO"],
        },
      ]
    }
  ],
  projects() {
    const projectsArray = [];
    this.sections.map((ele) => {
      ele.content.map((ele2) => {
        projectsArray.push({
          section: ele.title,
          ...ele2
        })
      })
    })
    return projectsArray
  }
};



export { projectsData }