# WhatsApp Web Clone Backend

This project reference from [https://www.youtube.com/watch?v=gzdQDxzW2Tw](https://www.youtube.com/watch?v=gzdQDxzW2Tw)

### To Run type `node server.js` in terminal

Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

## FRONTEND STACK

- React.JS
- Firebase for hosting

## BACKEND STACK

- Express.js
- MongoDB Cloud Database
- Heroku for hosting the backend

## `Project Setup`

1. Initialize git `$ git init`
2. Initialize npm `$ npm init`

- package name: (whatsapp-web-clone-backend) `Enter aja`
- version: (1.0.0) `Enter aja`
- description: `Enter aja`
- entry point: (index) server.js `type server.js and Enter`
- test command: `Enter aja`
- git repository: (https://github.com/wildenali/whatsapp-web-clone-backend.git) `Enter aja`
- keywords: `Enter aja`
- author: wilden `type your name, for example wilden`
- licence: (ISC) `Enter aja`
- Is this OK? (yes) `Enter aja`

3. Install express and mongoose `$ npm i express mongoose`
4. Install node_modules `$ npm i`
5. Create and config `.gitignore` file
6. Create a server file with the name `server.js` file

## `MongoDB Cloud Setup`

1. Create Account or Sign In to [https://www.mongodb.com/](https://www.mongodb.com/)
2. Click `Project` > + `New Project`
3. Name Your Project by `whatsapp-web-clone-backend`, Click `Next` button
4. In Add Member just Click `Create Project`
5. On Cluster Area Click `Build a Cluster` button
6. Choose Shared Clusters and click `Create a Cluster` button
7. Choose `AWS` for Cloud Provider and choose `N. Virgiana` for Region
8. Choose `M0 Sandbox (Shared RAM, 512 MB Storage)` in Cluster Tier
9. Choose `MongoDB 4.2, No Backup` in Additional Settings
10. Choose `Cluster0` in Cluster Name
11. Click `Create Cluster` button

## `Run Project with Nodemon`

1. Install nodemon `$ npm i -g nodemon`, if you already have, no need install
2. To check nodemon just type `$ nodemon --version`
3. Run the Project `nodemon server.js`
4. Open from web browser [http://localhost:5000](http://localhost:5000)

## `MongoDB Cloud - Database Setup`

#### Database Access

1. Click `Database Access` button
2. Click `Add New Database User` button
3. Authentication Method -> `Password`
4. Password Authentication

- username: `admin`
- password: `EYsaSMDTFoqIzrU3` (to get the password, click `Autogenerate Secure Password` button)

5. Click `Add User` button

#### Network Access

1. Click `Network Access` button
2. Click `Add an IP address` button
3. Click `ALLOW ACCESS FROM ANYWHERE`
4. Click `Confirm` button

#### Clusters setup

1. Click `Clusters` button
2. Click `CONNECT` button
3. Choose a connection method -> `Connect your application`
4. Copy string in the box of `Add your connection string into your application code` -> `mongodb+srv://admin:<password>@cluster0.xgclt.mongodb.net/<dbname>?retryWrites=true&w=majority`
5. Click `Close` button
6. Paste and edit to server.js, looks like

```
// importing
import mongoose from "mongoose";

// DB Config
const connection_url = "mongodb+srv://admin:EYsaSMDTFoqIzrU3@cluster0.xgclt.mongodb.net/admin?retryWrites=true&w=majority"
mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
```

## `Postman`

1. To check `GET` Request with Postman

- Open postman
- Setup to GET request
- Fill the request url with `http://localhost:5000/` and click SEND
- Have a look the result in Body tab

2. `POST` request

- Open postman
- Setup to POST request
- Fill the request url with http://localhost:9000/v2/posts
- Click `Body` > `raw` > change form `Text` to `JSON(application/json)`
- Fill with

```
{
	"message": "heeey anjaay it works",
	"name": "Mang Ali",
	"timestamp": "Im a demo timestamp...",
  "received": false
}
```

- Click `Send` button
- Have a look for result

3. To check `GET` sync Request with Postman

- Open postman
- Setup to GET request
- Fill the request url with `http://localhost:5000/messages/sync` and click SEND
- Have a look the result in Body tab

## `PUSHER`

To make database (mongodb) realtime katanya sih gitu

1. Open [https://pusher.com/](https://pusher.com/)
2. Sign in / Sign up
3. In Channels box click `Get started` button
4. Fill the name your app with name `whatsapp-web-clone`
5. Select a cluster `ap1 (Asia Pasific (Singapore))`
6. Change Front end to be `React`
7. Change Back end to be `Node.js`
8. Click `Create app` button
9. Install pusher `$ npm install pusher`
10. Copy script in Node.js side, the script look like following below<br/>
    Paste and edit to server.js that script

```
var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '1075945',
  key: '5967c078021a0ed38791',
  secret: '83285372f17a7e2daaaf',
  cluster: 'ap1',
  encrypted: true
});

pusher.trigger('my-channel', 'my-event', {
  'message': 'hello world'
});
```

11. Test the pusher

- Open postman
- Use Post Request like point `## Postman` no 2, can change data body and try again

12. Check Debug Console on pusher.com

- Open [https://pusher.com/](https://pusher.com/)
- Going to your project
- Click `Debug Console`

## `Install CORS`

cors ini penggantinya

```
// security messages
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});
```

1. Install cors `$ npm i cors`
2. Type some script to server.js
