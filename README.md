# TwoBlue
An alternate to 2Blue, this project completely focuses on Virtual Game assistance instead of deck building. There are plenty of websites out there that help you build a deck, but not many that truly dedicate themselves to virtual play.

## Setup
To setup the project, a few steps are required:
- Copy `copy.env.development` and rename it to `.env.development`, populating any empty variables
- Copy `copy.env.production` and rename it to `.env.production`, populating any empty variables
- In the root directory, run `npm install` to install all required client dependencies
- In the server directory (TwoBlue/server) run `npm install` to install all required server dependencies

## Running the project
As this project has both the client and server, there are two parts to running the project.
- In the root directory, open a terminal and run `npm start`
- In the server directory (TwoBlue/server), open a terminal and run `npm start`