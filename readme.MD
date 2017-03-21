Angular 2 Fundamentals Course
========================
This is the getting started package for the Pluralsight course on Angular 2 Fundamentals found here: http://app.pluralsight.com/courses/angular-fundamentals

**Course Status**

The course is currently up-to-date.


Getting Started
---------------
Be sure you're running the recommended node version, which is 6.3.0+: `node --version`

Follow along with the course linked above. To start the server:

```
npm install
npm start
npm run server
```

**ANGULAR CLI**
https://github.com/angular/angular-cli

sudo npm install -g angular-cli

En consola: ng new todo
Crea una nueva aplicacion 'todo'
 - npm start

Crear un component todo-list:
 - ng g component todo-list
--------------

**Interpolation, expressions, events and statements**
{{user.name}} --> interpolation (con dobles llaves) <h2>{{user.name}}</h2>
[src] --> Property binding (con comillas dobles)  <img [src]="user.imageUrl">
user.name --> expression
(click) --> binding

https://github.com/jmcooper/angular2-fundamentals-files


----------------
**Services**
Sirven para agrupar logica de negocio en un archivo separado de modo que se pueda inyectar donde se necesita y s pueda reutilizar. Por ej: trer los datos dese una api y manejar las excepciones vinculadas a eso.
