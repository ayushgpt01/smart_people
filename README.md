# Smart People

Smart People is a web application that allows users to upload a photo or provide a URL and find human faces in the image using the Clarifai API. The application is built using ReactJS for the front-end, ExpressJS for the back-end, and PostgreSQL for the database.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you get started, you will need to have the following software installed on your system:

-   NodeJS
-   npm
-   PostgreSQL

### Installing

Follow these steps to get the development environment running:

1.  Clone the repository to your local machine:

bashCopy code

`git clone https://github.com/ayushgpt01/smart_people.git` 

2.  Change into the directory:

bashCopy code

`cd smart_people` 

3.  Install the dependencies:

Copy code

`npm install` 

4.  Create a PostgreSQL database for the application.
    
5.  Create a `.env` file in the root of the project and add the following environment variables:
    

cssCopy code

`DATABASE_URL=[Your database URL]
CLARIFAI_API_KEY=[Your Clarifai API Key]` 

6.  Start the development server:

Copy code

`npm run dev` 

The app will now be running at [http://localhost:3000/](http://localhost:3000/).

## Built With

-   [ReactJS](https://reactjs.org/) - JavaScript library for building user interfaces
-   [ExpressJS](https://expressjs.com/) - Node.js web application framework
-   [PostgreSQL](https://www.postgresql.org/) - Object-relational database management system
-   [Clarifai API](https://www.clarifai.com/) - API for image recognition and analysis

## Author

-   [Ayush Gupta](https://github.com/ayushgpt01)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
