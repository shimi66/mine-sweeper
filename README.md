# Welcome to Minesweeper!
This is a full stack application that I have been using to learn and demonstrate my software knowledge and development skills. Please feel free to play around with this project while I continue to add additional features and implement different concepts.

This repo is forked from `Chaos66-dev` which is another one of my github accounts that was used for a class. Since that class has ended, I have transferred development to my personal repo as I would like this to be a project I continue to work on.

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#devnotes">Dev Notes</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
<!-- insert screenshot here -->
This is a full-stack, web application that displays an instance of the famous Minesweeper game, along with difficulty settings and high scores which are stored in the associated database. It's purpose is to enhance and demonstrate my understanding of full stack applications as well as give me a place to try out new tools.

### Built With
<p align="left">
  <a href="https://nodejs.org/" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" width="40" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" width="40" />
  </a>
  <a href="https://expressjs.com/" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express" width="40" />
  </a>
  <a href="https://www.postgresql.org/" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="PostgreSQL" width="40" />
  </a>
</p>

<!-- GETTING STARTED -->
## Getting Started
### Prerequisites
This project will require that you have the following installed and running for the installation and usage steps to execute correctly.
* Node
* Docker

### Installation
1. Clone this repo to your local machine:
```sh
git clone https://github.com/shimi66/mine-sweeper.git
```
2. Create a .env file in the projects root directory with the following variables:
```
POSTGRES_USER=<insert postgres user here>
POSTGRES_PASSWORD=<insert postgres password here>
POSTGRES_DB=minesweeper
POSTGRES_HOST=pg_db
POSTGRES_PORT=5432
```
3. Start up the application using docker compose with the following command:
```sh
docker-compose up --build
```
4. Navigate to port 5173 on your localhost:
```sh
http://localhost:5173
```

<!-- USAGE EXAMPLES -->
## Usage
<!-- add application usage stuff here -->

<!-- Dev Notes -->
## Dev Notes
- [ ] Use GitHub Actions
- [ ] Force linting prior to pull request
- [ ] Implement testing
- [ ] Implement high scores
- [ ] MUI usage
- [ ] Add seed data of my scores

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

<!-- CONTACT -->
## Contact

Erik Voss - [LinkedIn](https://www.linkedin.com/in/erik-voss1/ )




<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Choose an Open Source License](https://choosealicense.com)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

