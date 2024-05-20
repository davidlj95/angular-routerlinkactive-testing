# `RouterLinkActive` testing

Purpose of this sample app is to answer to a [StackOverflow question](https://stackoverflow.com/questions/45013284/how-can-i-test-routerlinkactive-in-angular) about how to test apps using [Angular's `RouterLinkActive` directive](https://angular.dev/api/router/RouterLinkActive) in latest version of Angular (right now v17.3)

See complete explanation in the [StackOverflow's answer](https://stackoverflow.com/a/78507412/3263250)

Main meat is in [sidebar component test](./src/app/side-bar/side-bar.component.spec.ts)

You can find an alternative solution that couples to the `RouterLink` directive APIs in [a separate branch](https://github.com/davidlj95/angular-routerlinkactive-testing/tree/using-router-directives)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

Specific command for creation:
```shell
pnpm dlx @angular/cli@17.3.x new --package-manager=pnpm \
  --inline-style --inline-template \
  --no-ssr --style css routerlinkactive-testing
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
