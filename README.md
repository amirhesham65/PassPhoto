# PassPhoto
A private PIN-protected photos storage web app built with JavaScript, React, ChakraUI and Firebase.

![PassPhoto Web APP](https://i.ibb.co/pdWpSvT/Screen-Shot-2021-08-23-at-1-59-59-PM.png)

## Features 
1. Email and password user authentication (v0.1)
2. Image uploading to Firebase cloud storage (v0.1)
3. PIN/Passcode app locking (in progress)
4. PWA offline support (upcoming)
5. PWA downloadablity on user's devices (upcoming)

## Installation
1. Make sure you have Node.js and Git installed
2. clone this project
```sh
$ git clone https://github.com/amirhesham65/PassPhoto.git
```
3. Create a .env.staging file within the root directory as following
```sh
REACT_APP_FB_API=<your_firebase_api_key>
REACT_APP_FB_DOMAIN=<your_firebase_domain>
REACT_APP_FB_PROJECT=<your_firebase_project>
REACT_APP_FB_BUCKET=<your_firebase_bucket>
REACT_APP_FB_SENDER=<your_firebase_sender_id>
REACT_APP_FB_APP=<your_firebase_app_id>
```
4. Install dependencies and run the project
```sh
$ npm install && npm start
```