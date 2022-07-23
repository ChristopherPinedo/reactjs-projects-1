

const projectData = {
  sections: [
    {
      "title": "Personal",
      "route": "/personal",
      "content": [
        {
          "title": "Portfolio",
          "route":"/personal/portfolio",
          "description": "Portafolio de proyectos",
          "technologies": ["HTML", "CSS", "JS"]
        }
      ]
    },
    {
      "title": "Platzi",
      "route": "/platzi",
      "content": [
        {
          "title": "Todo App",
          "route":"/platzi/todoApp",
          "description": "Aplicación de tareas"
        }
      ]
    }
  ],
  projects: getProjectsArray()
};

function getProjectsArray() {
  const projectsArray = [];
  projectData.sections.map((ele) => {
    projectsArray.push({
      section: ele.title,
      ...ele.content
    })
  })
  return projectsArray
}

console.log(projectData.projects)

export { projectData }