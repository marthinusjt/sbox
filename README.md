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

### Project

- [frontend](./endpoints/api/readme.md) - _React App_
- [backend](./db/README.md) -  _Serverless REST APIs_

# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Dev Environment Setup

**Clone project**

```bash
git clone https://github.com/emmoistner/sbox.git
cd sbox
```

**Node install**

```bash
nvm install # This should install the version designated in .nvmrc
```

**Install dependencies**

```bash
npm run setup
```

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

**Running code**
### Setup

// TODO

_This should fill out as we progress_
Currently, refer to each package how to run code.

- [frontend](./endpoints/api/readme.md) - _React App_
- [backend](./db/README.md) - _Serverless REST APIs_

## Commands

- [setup](#setup)
- [test](#testing)
- [clean](#clean)

### Setup

// TODO

### Testing

// TODO
