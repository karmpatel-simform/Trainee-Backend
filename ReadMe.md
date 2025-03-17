# Trainee-Backend

A simple backend project built with Node.js and Express.

## Table of Contents

- [Requirements](#requirements)
- [Startup Setup Steps](#startup-setup-steps)
- [Installation](#installation)
- [Configure the App](#configure-the-app)
- [Running the Project](#running-the-project)
- [Production Build](#production-build)

## Requirements

Before you begin, you will need **Node.js 22.14.0** and **Yarn** installed on your system.

### Node.js Installation

- **Windows**: Download and install from the [Node.js website](https://nodejs.org/).
- **Ubuntu**: Run the following commands:

  ```bash
  $ sudo apt install nodejs
  $ sudo apt install npm
  ```

To check if Node.js and npm are installed, run:

```bash
$ node --version
$ npm --version
```

### Yarn Installation

After installing Node.js, you also need **Yarn**. Install it globally with:

```bash
$ npm install -g yarn
```

## Startup Setup Steps

1. **Clone the repository**:
   ```bash
   $ git clone https://github.com/karmpatel-simform/Trainee-Backend.git
   ```

2. **Navigate into the project folder**:
   ```bash
   $ cd Trainee-Backend
   ```

3. **Install dependencies**:
   ```bash
   $ npm install
   ```

## Installation Yarn

1. Clone the repository:
   ```bash
   $ git clone https://github.com/karmpatel-simform/Trainee-Backend.git
   ```

2. Navigate to the project directory:
   ```bash
   $ cd Trainee-Backend
   ```

3. Install the required dependencies:
   ```bash
   $ yarn install
   ```

## Configure the App

After installation, you may need to configure some settings:

1. Open the configuration file (`.env` or similar).
2. Update the settings like database credentials, API keys, etc.

## Running the Project

To start the server:

```bash
$ npm run server
```

This will run the backend in development mode on http://localhost:3000/ .

## Production Build

To create a production-ready build:

```bash
$ npm run build
```

