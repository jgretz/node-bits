# node-bits
node-bits is a node microframework with the aim of providing "just enough" magic to enable you to quickly and painlessly build your api / site. Since every site has different goals, requirements, and tech - node-bits is built as a series a pluggable 'bits' that you can quickly combine into a powerful foundation for your site.

## Getting Started
The node-bits package itself is the boot loader. You supply it with the bits and it puts them together. Each bit is intentionally focused on subset of the whole. To cut down on dependency bloat, each bit is distributed as an independent npm package - you only include what you need.

### Install
I recommend reading through the list of existing bits, choosing your combination and then installing them together.

For example:
```
npm install node-bits node-bits-express node-bits-code --save
```

or

```
yarn add node-bits node-bits-express node-bits-code
```

### Configuration
Each bit has their own configuration, for example, you may provide a path to the code bit or a connection string to a database bit.

These bits are then provided to the boot loader like:

```
import nodeBits from 'node-bits';
import nodeBitsExpress from 'node-bits-express';
import nodeBitsCode from 'node-bits-code';
import nodeBitsRest from 'node-bits-rest';

nodeBits([
  nodeBitsExpress({
    port: 4000,
  }),
  nodeBitsCode({
    path: `${__dirname}`,
  }),
  nodeBitsRest({
    prefix: 'api',
  }),
]);
```

## What is a "bit"
A bit is a building block of an app. Below are the existing bits I know about, but you can easily make your own. Each bit is given an opportunity to do something in the following hooks:

* initialize
* initializeDatabase
* loadSchema
* loadRoutes
* initializeServer

## Current Bits
### [node-bits-express](https://github.com/jgretz/node-bits-express)
The express bit wraps the popular express package for hosting web apps. It will take all routes defined by other bits and configure express to listen for those routes. In addition, it also exposes easy hooks for you to provide custom configurations.

Visit the [repo](https://github.com/jgretz/node-bits-express) to find out more specifics.

### [node-bits-code](https://github.com/jgretz/node-bits-code)
The code bit allows you to use friendly code to express your schemas and routes. Rather than force you to use a DSL made up by a server or database package, this bit abstracts the concepts of routes and schema to their generic forms, which keeps your code nice, clean and straight forward while reducing complexity and coupling. It also follows the convention of the your folder structure so you can focus on adding value not configuring the server.

Visit the [repo](https://github.com/jgretz/node-bits-code) to find out more specifics.

### [node-bits-rest](https://github.com/jgretz/node-bits-rest)
The rest bit builds and exposes rest services for every schema object defined by bits during loadSchema.

Visit the [repo](https://github.com/jgretz/node-bits-rest) to find out more specifics.

### [node-bits-mongo](https://github.com/jgretz/node-bits-mongo)
The mongo bit allows you to connect to a mongo database and expose this connection to other bits.

For example, combining this bit with the "code bit" and the "rest bit" will allow you to define your schema in files, and have a fully functional rest setup up with a mongo backend simply by connecting the a couple bits.

Visit the [repo](https://github.com/jgretz/node-bits-mongo) to find out more specifics.

### [node-bits-sql](https://github.com/jgretz/node-bits-sql)
The sql bit allows you to connect to a sql database and expose this connection to other bits.

For example, combining this bit with the "code bit" and the "rest bit" will allow you to define your schema in files, and have a fully functional rest setup up with a sql backend simply by connecting the a couple bits.

Visit the [repo](https://github.com/jgretz/node-bits-sql) to find out more specifics.

### [node-bits-password](https://github.com/jgretz/node-bits-password)
The password bit provides an implementation of password hashing which can be attached to either mongo or sql database. By simply, defining your field as type PASSWORD, this bit will hash any value saved to that field.

Visit the [repo](https://github.com/jgretz/node-bits-password) to find out more specifics.

### [node-bits-spa](https://github.com/jgretz/node-bits-spa)
The spa bit allows you to quickly configure hosting a single page app at a specified url.

Visit the [repo](https://github.com/jgretz/node-bits-spa) to find out more specifics.

### [node-bits-jwt](https://github.com/jgretz/node-bits-jwt)
The jwt bit provides an implementation of user based JWT to secure your api and site. It also allows you to restrict access down to the route / verb level by role.

Visit the [repo](https://github.com/jgretz/node-bits-jwt) to find out more specifics.

## Utility
### Log
node-bits exposes three log utility functions. These wrap console.log and use the [chalk](https://www.npmjs.com/package/chalk) to color the output appropriately.

```
log('message', ' part 2');
logWarning('danger will robinson');
logError('error error error');
```

### ExecuteSeries
Promises are common in js, and most times multiple promises can be run 'in parallel' using Promise.all. There are times, often when dealing with a series of db calls, that you need to execute a series of promises in order. node-bits exposes an executeSeries function that accepts an array of promises and executes them in series.

```
executeSeries([
  db.findById(1),
  Promise.resolve(2),
  db.findById(3),
]);
```

### Timer
The most common first step when profiling an app is to set timers around blocks of code. node-bits exposes three functions to help with this:

```
startTimer('foo');
toggleTimer('foo');
stopTimer('foo');
```

Each method defaults to console.log, but accepts a 2nd parameter that can override that. Toggle and Stop will return the time.

Under the covers, node-bits is using performance.now to evaluate the time elapsed.

### Constants
There are a few concepts shared across multiple bits such as the following: database types, database relationship types, http verbs, etc. To define them in one place, they live in node-bits.

See the [constants.js](https://github.com/jgretz/node-bits/blob/master/src/constants.js) file for the full list.
