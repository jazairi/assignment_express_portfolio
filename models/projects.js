class Project {
  constructor(name, repo, ...technologies) {
    this.name = name
    this.repo = repo
    this.technologies = technologies
  }
}

const projects = [
  new Project("Async Node.js", "https://github.com/jazairi/assignment_async_nodejs", "JavaScript", "node.js"),
  new Project("Hello Node.js", "https://github.com/jazairi/assignment_node_hello_world", "Javascript", "node.js"),
  new Project("Node.js Server", "https://github.com/jazairi/assignment_build_a_nodejs_server", "Javascript", "node.js")
]

module.exports = {
  Project,
  projects
}
