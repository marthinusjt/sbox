<p align="center">
  <img alt="sbox" src="./images/logo.svg" width="480">
</p>

<p align="center">
  Sbox Monorepo
</p>

---

- [Structure](#project)
- [Getting Started](#getting-started)
  - [Dev Environment Setup](#dev-environment-setup)
- [Commands](#commands)
- [Advanced Setup](#advanced-setup)

### Project

- [frontend](./frontend/README.md) - _React App_
- [backend](./backend/README.md) -  _Express REST APIs_

# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Dev Environment Setup

**Clone project**

```bash
git clone https://github.com/emmoistner/sbox.git
cd sbox
```

**Node install**

Must at least have node version **10.15 or above**! **Ignore this step if you already have node installed at the correct version**

```bash
# This should install the version designated in .nvmrc
nvm install
```

**Install dependencies**

```bash
npm run setup
```
**Running code**

### Setup
```bash
# This will start both the backend apis as well as the frontend react application
npm start
```

## Commands

- [setup](#setup)
- [start](#start)
- [test](#testing)

### Setup
_runs npm install for every package (frontend, backend)_

```bash
npm run setup
```

### Start

_runs npm start for every package (frontend, backend)_

```bash
npm run setup
```


## Advanced Setup
**Setting up aws credentials (DEVOPS only)**

Create the directory `~/.aws` and file `credentials`

```bash
mkdir ~/.aws
cd ~/.aws
nano credentials
```

Add your ID and Secret to `~/.aws/credentials`

```
[default]
aws_access_key_id=<ID>
aws_secret_access_key=<SECRET>

[dev]
aws_access_key_id=<ID>
aws_secret_access_key=<SECRET>
```
