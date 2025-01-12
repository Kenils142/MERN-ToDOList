# MERN To-Do List

A simple To-Do List application built with the MERN stack (MongoDB, Express, React, Node.js).

## Requirements

- Node.js
- Yarn
- MongoDB

## Installation

### Windows

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/mern-todo-list.git
    cd mern-todo-list
    ```

2. Install Yarn globally if you haven't already:
    ```bash
    npm install -g yarn
    ```

3. Install backend dependencies:
    ```bash
    cd server
    yarn install
    ```

4. Install frontend dependencies:
    ```bash
    cd ../client
    yarn install
    ```

### Ubuntu

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/mern-todo-list.git
    cd mern-todo-list
    ```

2. Install Yarn globally if you haven't already:
    ```bash
    sudo npm install -g yarn
    ```

3. Install backend dependencies:
    ```bash
    cd server
    yarn install
    ```

4. Install frontend dependencies:
    ```bash
    cd ../client
    yarn install
    ```

## Setup

1. Create a `.env` file in the [server](http://_vscodecontentref_/1) directory and add your MongoDB URI:
    ```env
    MONGO_URI=your_mongodb_uri
    ```

## Running the Application

### Windows

1. Start the backend server:
    ```bash
    cd server
    yarn start
    ```

2. Start the frontend development server:
    ```bash
    cd ../client
    yarn start
    ```

### Ubuntu

1. Start the backend server:
    ```bash
    cd server
    yarn start
    ```

2. Start the frontend development server:
    ```bash
    cd ../client
    yarn start
    ```

## Usage

- Open your browser and navigate to `http://localhost:3000` to view the application.
- Use the UI to add, view, update, and delete tasks.

## Notes

- Yarn was used instead of `npx create-react-app` due to version conflicts that were not easily fixable.