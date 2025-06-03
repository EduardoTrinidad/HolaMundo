group "default" {
  targets = ["app"]
}

target "app" {
  context = "."
  dockerfile = "Dockerfile"
  tags = ["eduardot0/hola-mundo:latest"]
  push = true
}
