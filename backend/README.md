<p align="center">
  <img alt="sbox" src="../images/logo.svg" width="480">
</p>

<h1 align="center">
  Backend
</h1>

---

- [Getting Started](#getting-started)
- [Structure](#project)


## Getting Started

### `npm install`
```bash
npm install
```

### `npm start`

```bash
npm start
```

Runs the api in the development mode.<br>
It listens on [http://localhost:3031](http://localhost:3031) by default.

It has hot reloading for the `./services` and `./routes` directories and will not need to be restarted when changing code.

## Project Structure
These project is broken down by multiple directories which all a focus on solves a particular problem.


### Top Level Directories
```
src/
|-- middleware/
|-- routes/
|-- services/
```

### Middleware
Contains all of express middleware needed to process requests before they reach the final endpoint handler. Think json body parser, cors, and file uploader.

### Routes
These are all mini router directories. This is where all the REST endpoint handler live. Note - They are dynamic required at runtime.

### services
If this backend was connected to a database. This where all the code needed to do so would live.
