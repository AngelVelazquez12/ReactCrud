# How to Clone the React and Express Repository

This guide will walk you through the steps to clone the React and Express repository to your local machine.

## Prerequisites
Before you begin, make sure you have the following installed on your machine:
- Git
- Node.js

## Steps
1. Open your terminal or command prompt.
2. Navigate to the directory where you want to clone the repository.
3. Run the following command to clone the repository:
    ```
    git clone https://github.com/AngelVelazquez12/ReactCrud
    ```

4. Once the cloning process is complete, lets set up the backend:
    ```
    cd my-app-backend
    npm init -y
    npm install express mysql body-parser cors

    ```
5. Now lets go with the frontend:
    ```
    cd my-app-frontend
    npm install axios

    ```
6. Run the backend server:
    ```
    node index.js

    ```
7. Run the React App:
    ```
    npm start

    ```   

That's it! You have successfully cloned this React and Express repository and started the development server. Happy coding!
