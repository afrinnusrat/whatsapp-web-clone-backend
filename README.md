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
