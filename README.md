# Rocksmith Progress

Keep track of your Rocksmith progress

https://rocksmith.ubisoft.com/rocksmith/en-us/home/

https://www.youtube.com/watch?v=XHM9uB2kNkU

## API

| Routes               | Calls     | Scopes | Description         |
|:--------------------:|:---------:|:------:|:-------------------:|
| /api/songrecords     | Get       | index  | Get all songs       |
| /api/songrecords     | Post      | create | Create a new song   |
| /api/songrecords/:id | Get       | show   | Get a specific song |
| /api/songrecords/:id | Put       | upsert | Update a song       |
| /api/songrecords/:id | Patch     | patch  | Update a data field |
| /api/songrecords/:id | Delete    | delete | Delete a song       |

- Documentation - Swagger - https://app.swaggerhub.com/apis/tobsirl/RocksmithProgress/1.0.0

## Schema for Song Record
```json
{
  "songName": "{type: String, required: true}"
  "artistName": "{type: String, required: true}"
  "difficulty": "{type: Number, min: 0, max: 100, required: true}"
  "speed": "{type: Number, min: 0, max: 100, required: true}"
  "levelUp": "{type: Boolean}"
  "accelerate": "{type: Boolean}"
  "advancedSettings": "[advancedSettingsSchema]"
  "dateCreated": "{type: Date, required: true, default: Date.now}"

  "difficultyRepeats": "{type: String, enum: ['Infinite', '1', '2', '3', '5']}"
  "speedRepeats": "{type: String, enum: ['Infinite', '1', '2', '3', '5']}"
  "tolerance": "{type: String, enum: ['None', 'Low', 'Med', 'High']}"
  "speedIncrement": "{type: Number, min: 1, max: 20}"
  "rewindAnimation": "{type: Boolean}"
  "masterMode": "{type: Boolean}"
  "autoContinue": "{type: Boolean}"
  "showMistakes": "{type: Boolean}"
}
```

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node >= 4.x.x, npm >= 2.x.x
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

3. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `gulp build` for building and `gulp serve` for preview.

## Deployed to Heroku

https://rocksmithprogress.herokuapp.com/

## Testing

Running `npm test` will run the unit tests with karma.

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 4.2.0.
