# NodeBits
NodeBits aims to provide you with an easy way to get a site up and running quickly. Since every site has different goals, requirements, and tech - NodeBits is built as a series a pluggable 'bits' that you can quickly combine into a powerful foundation for your site.

## Getting Started
The NodeBits package itself is the boot loader. You supply it with the bits and it puts them together. Each bit is intentionally focused on subset of the whole. To cut down on dependency bloat, each bit is distributed as an independent npm package - you only include what you need.

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
import nodeBitsCode from 'node-bits-code';
import nodeBitsExpress from 'node-bits-express';

nodeBits([
  nodeBitsCode({
    path: `${__dirname}/src`,
  }),
  nodeBitsExpress({
    port: 3000,
  })
]);
```

## What is a "Bit"
A bit is a building block of an app. Below are the existing bits I know about, but you can easily make your own. Each bit is given an opportunity to do something in the following hooks:

* initializeDatabase
* loadSchema
* loadRoutes
* initializeServer

## Current Bits
### [NodeBits-Express](https://github.com/jgretz/node-bits-express)
The express bit wraps the popular express package for hosting web apps. It exposes

### [NodeBits-Code](https://github.com/jgretz/node-bits-code)

### NodeBits-Mongo

### NodeBits-Postgre

### NodeBits-Admin

### NodeBits-Dynamic-Schema
