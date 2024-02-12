# Getting started with NodeJS

[![Deploy at Divio
badge](https://img.shields.io/badge/deploy%20at%20divio-DFFF67)](https://control.dev.aldryn.net/app/new/?template_url=https://github.com/divio/getting-started-with-nodejs/archive/refs/heads/main.zip)


This is a template project to bootstrap a NodeJS application.


## Quick Start with Divio Cloud

### Create a free Divio account
Create a free [Divio account](https://control.divio.com/).

### Deploy your app in Divio Cloud
- Click the `Deploy at Divio` button above and provide the information requested by the app creation wizard (eg. app name and app settings)

- Deploy an environment; test or live. Open the Env URL in your browser.

For more details about Divio system, read [Divio documentation](https://docs.divio.com/introduction/)


## Setup your local development environment with Divio CLI

Please follow our simple guidelines for [Divio CLI installation](https://docs.divio.com/introduction/01-installation/) and [setup local development](https://docs.divio.com/introduction/01-installation/#tutorial-installation&gsc.tab=0)


## Setup your local development environment without Divio CLI

### Install Docker

This project uses Docker and docker-compose which you can install from the [offical Docker website](https://docs.docker.com/get-docker/).

### Clone the repository

```
git clone https://github.com/divio/getting-started-with-nodejs.git
```

### Build the project

Let's build the docker image of the project.
```
cd getting-started-with-nodejs
docker-compose build
```

### Run the project

```
docker-compose up
```

This command will start the `web` service. You can reach the web application at [http://localhost:8000]().


## How to develop

Follow the official [Nodejs guides](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)


## Contribute to the project

See the [contribution guide](./CONTRIBUTING.md).
