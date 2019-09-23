<h1 align="center">NGXS - Angular Architecture Guide</h1>

<p align="center">:warning: Work In Progress :warning:</p>

This demo app is deployed at https://charlinho.github.io/ngxs-architecture-sample/demo

## Folder Structure

```
app/
│    app.component.scss
│    app.component.spec.ts
│    app.component.ts
│    app-routing.module.ts
│    app.module.ts
│    app.states.ts
└──  user/
   │         user.module.ts
   │         user.service.ts
   │         user.interface.ts
   │         user.component.ts
   │         user.component.spec.ts
   │         user.component.scss
   │         user.component.html
   ├── actions/
   │         user.action.ts
   ├── components/
   │         create-user/
   │             create-user.component.scss
   │             create-user.component.spec.ts
   │             create-user.component.ts
   │             create-user.component.html
   │         list-users/
   │             list-users.component.scss
   │             list-users.component.spec.ts
   │             list-users.component.ts
   │             list-users.component.html
   └── state/
            user.state.ts
```
