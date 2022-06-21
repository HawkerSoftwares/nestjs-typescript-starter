<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /><a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
   
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository. This project has been cloned from official [Nestjs Typescript Starter](https://github.com/nestjs/typescript-starter). This project demonstartes the use of Layouts/Views/Partials using [Handlebars.js](https://handlebarsjs.com/)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Helpers

Helper functions, or "helpers" are functions that can be [registered with Handlebars][] and can be called within a template. Helpers can be used for transforming output, iterating over data, etc. To keep with the spirit of *logic-less* templates, helpers are the place where logic should be defined.

Handlebars ships with some [built-in helpers][], such as: `with`, `if`, `each`, etc. Most applications will need to extend this set of helpers to include app-specific logic and transformations. Beyond defining global helpers on `Handlebars`, this view engine supports `ExpressHandlebars` instance-level helpers via the `helpers` configuration property, and render-level helpers via `options.helpers` when calling the `render()` and `renderView()` methods.

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Narender Saini](https://github.com/narensaini)
- Our Website - [Hawker Softwares](https://hawkersoftwares.com)
- Original Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Nestjs Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
