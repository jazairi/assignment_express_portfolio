class Project {
  constructor(name, repo, screenshot, ...technologies) {
    this.name = name
    this.repo = repo
    this.screenshot = screenshot
    this.technologies = technologies
  }
}

const projects = [
  new Project("Async Node.js", "https://github.com/jazairi/assignment_async_nodejs", "../public/images/async-node.png", "JavaScript", "node.js"),
  new Project("Hello Node.js", "https://github.com/jazairi/assignment_node_hello_world", "../public/images/hello-node.png", "Javascript", "node.js"),
  new Project("Node.js Server", "https://github.com/jazairi/assignment_build_a_nodejs_server", "../public/images/node-server.png", "Javascript", "node.js")
]

module.exports = {
  Project,
  projects
}
