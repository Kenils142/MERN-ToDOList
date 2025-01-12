# MERN To-Do List

A simple To-Do List application built with the MERN stack (MongoDB, Express, React, Node.js).

## Requirements

- Node.js
- npm
- Yarn
- MongoDB

## Note

1. This application was developed on Ubuntu. So installation and steup might not be up to the point for Windows but i will try my best to get it covered.

2. Yarn was only used for react, as app npx installation was having version conflict issues and was quite hard to fix till the point i gave up on it and switched to yarn.

## Installation

1. You can install [Nodejs and npm](https://nodejs.org/en/download) here using installer.
2. Once the **Nodejs and npm** are installed use the following command to install **Yarn**. 
    ```
    npm install -g yarn
    ```
3. Installation and Instruction for [MongoDB](https://nodejs.org/en/download) are well documented on this link.

4. Now that we have all technologies needed, lets clone the repository. Move to the desired Project destination and write the following command to clone the github repository.
    ```
    git clone https://github.com/Kenils142/MERN-ToDOList.git .
    ```
    Note that the current directory must be empty.
5. Server folder is for backend and client folder is for front end.
6. To install required packages for server, move to server folder.
    ```
    cd server
    ```
7. now to install the packages required for server by running
    ```
    npm install
    ```
8. lets go to client directory to install packages required for the client.
    ```
    cd ..\client
    ```
    not sure if this would work in windows if it doesn't follow this alternative.
    ```
    cd 
    cd client
    ```
9. Now to installed packages required by the client use the following command.
    ```
    yarn
    ```

Now we have installed every thing we need. We can now easily run the application.

## Running the Application.

1. Move to the server directory again using same steps as above and then run the following command in the terminal.
    ```
    npm start
    ```
    This should start the server and give the following output
    ```
    > mern-todo-list-server@1.0.0 start
    > node server.js

    Server running on port 5000
    MongoDB Connected: localhost
    ```
2. Once the server is started, create new instance of terminal and then run the client using the following command.
    ```
    yarn start
    ```
    this should start the client server and should give the following final output.
    ```
    Compiled successfully!

    You can now view client in the browser.

    Local:            http://localhost:3000
    On Your Network:  http://192.168.0.105:3000

    Note that the development build is not optimized.
    To create a production build, use yarn build.

    webpack compiled successfully
    ```
3. This should directly open react app in the browser but if it doesnt copy paste the following link in your browser `http://localhost:3000/`.