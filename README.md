# React + Vite

The project is a web application for managing a database of superheroes, with the ability to add, edit, view, and delete cards with information about each hero. The core technology stack includes React for frontend development and Node.js for creating a RESTful API on the backend. The project also used modern development approaches such as client-side pagination, form processing, and managed components.

\*\*\*Technologies and Libraries

\*\*\*Frontend (React)
React Hooks: Hooks such as useState, useEffect, and useCallback were used extensively to manage state, side effects, and optimize rerendering.
Formik: To simplify working with forms and validating data in them. With Formik, we create managed forms for adding and editing information about a superhero.
Yup: A data validation library integrated with Formik to ensure the correctness of data in forms.
Axios: Used to interact with the REST API on the backend, specifically to create, read, update, and delete superhero data.
React Router (if applicable): To manage navigation within the app and transitions between pages.
SCSS Modules: To style components and prevent class name collisions.

\*\*\*Backend (Node.js)
Express.js: Used to build the API with handling various HTTP requests (GET, POST, PATCH, DELETE).
MongoDB and Mongoose: A NoSQL database for storing superhero information. Mongoose simplifies working with data and provides a simple schema for data models.
CORS: Configured to address issues with browser security policies preventing cross-origin requests.

\*\*\*Implementation Details

\*\*\*Image Handling
For the image field, we added a placeholder: if the user does not upload their own image, the placeholder image will be displayed by default. This allows the cards to be informative even without custom images, and improves the overall UX.

\*\*\*Prop Drilling
The project uses prop nesting of no more than three levels, which is considered a good practice and helps keep the code clean and easy to maintain. With such nesting, components can directly pass the necessary data to child components without the need for an external state manager.
If nesting exceeded three levels, we would use Redux or Redux Toolkit to avoid excessive prop drilling and simplify state management at the application level.

\*\*\*Pagination
Pagination is implemented on the server side, which optimizes data loading and reduces network load. On the backend, a limited amount of data is transferred, which is necessary for the current page. The Pagination component manages the display and navigation between pages, providing an intuitive interface for the user to navigate the hero database.

\*\*\*Methods and data handling
API requests (CRUD) are handled using HTTP methods, including GET, POST, PATCH, and DELETE. For example, the PATCH method is used to update data, and POST is used to create a new hero.

The useEffect example hook was used to request data when the page is refreshed, and useState managed the current page and the array of hero data.

\*\*\*Form Management
The HeroForm component uses Formik to create fields for editing hero properties such as nickname, realName, originDescription, superpowers, catchPhrase, and image. The forms are validated using Yup to ensure that all data is entered correctly.

\*\*\*Additional Points
User Experience: The application supports navigation through hero cards and provides a popup (modal window) to display detailed information about the selected hero. This provides an intuitive user experience with the database.

\*\*\*Adaptability to Requirements
We have taken into account the potential needs of the project for managing more complex state - for example, using the Redux Toolkit in case the data volume and logic become more complex.

The project demonstrates a good knowledge of the basic tools and technologies for creating a client-server application, as well as a careful attention to performance optimization and user experience.
