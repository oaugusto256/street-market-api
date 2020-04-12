# Introduction

This is a hackathon boilerplate for new Node.js applications created by [Major League Hacking](https://github.com/mlh). It is for hackers looking to get started quickly on a new hackathon project using the Node.js environment.

- [Installation Guide](#installation-guide) - How to get started with a new Node.js app
- [User Guide](./docs/USER_GUIDE.md) - How to develop apps created with this starter project

# Overview
This is an API project to help people find street fairs nearby. First, the development of this project is to run in Brazil where in some states allows public street fairs in some streets and neighborhoods.

The motivation:
- Help farming families to sell their products.
- Help people to find organic products and farming families.
- Moving the local economy and small producers.

## Documentation and Features:

- [User Stories](./docs/USER_STORIES.md) - The requirements and features

# <a name='installation-guide'>Installation Guide</a>

This project requires the following tools:

- Node.js - The JavaScript environment for server-side code.
- NPM - A Node.js package manager used to install dependencies.
- MongoDB Atlas - A no-relational database system.

## Getting Started

**Step 1. Clone the code into a fresh folder**

```
$ git clone https://github.com/kelvinmaues/fair-street-api.git
$ cd fair-street-api
```

**Step 2. Install Dependencies.**

Next, we need to install the project dependencies, which are listed in `package.json`.

```
$ npm install
```

**Step 3: Run the Server.**

Now we're ready to start our server which is as simple as:

```
$ npm start
```

Open http://localhost:5000 to view it in your browser.

The app will automatically reload if you make changes to the code.
You will see the build errors and warnings in the console.

# What's Included?

- [Express](https://expressjs.com/) - A minimal web framework for Node.js web applications
- [Sequelize](http://docs.sequelizejs.com/) - A promise-based ORM for Node.js that supports PostgreSQL, MySQL, and SQLite.
- [Bootstrap 4](https://getbootstrap.com/) - An open source design system for HTML, CSS, and JS.
- [Handlebars](https://handlebarsjs.com/) - A popular templating language for building layouts.

# License

The Hackathon Starter Kit is open source software [licensed as MIT][mlh-license].

[mlh-conduct]: https://github.com/MLH/mlh-hackathon-nodejs-starter/blob/master/docs/CONDUCT.md
[mlh-license]: https://github.com/MLH/mlh-hackathon-nodejs-starter/blob/master/LICENSE.md
