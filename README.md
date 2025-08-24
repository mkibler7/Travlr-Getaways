- Architecture -

  Throughout this project I worked with both traditional frontend and modern SPA development approaches. On the customer side, I used Express to serve HTML templates and basic JavaScript to provide simple interactions, such as rendering trip data from the backend. 
On the administrative side, I built a Single Page Application (SPA) with Angular. This SPA provides a much richer user experience, including client-side routing, reusable components, reactive forms, and dynamic state updates without reloading the page. 
While Express-based HTML/JavaScript provides simple page rendering, the SPA's purpose is to enhance responsiveness and scalability.

  The backend uses a NoSQL MongoDB database because it provides flexibility in handling unstructured or semi-structured data, such as trips with varying fields. 
MongoDB’s document model allows for easy scalability and direct integration with JSON, making it ideal for modern applications where data requirements may evolve over time.

- Functionality -

  JSON is different from JavaScript because it is a lightweight text format purely for data representation, not for logic or behavior. 
JSON is language-agnostic and provides a standard way for the frontend Angular SPA and the backend Express API to exchange data. 
The Angular app, for example, fetches trip data as JSON, displays it to the user, and sends updates in JSON format back to the API.

  During development, I frequently refactored code to improve readability and efficiency. As an example, I moved repeated HTTP request logic into Angular services and implemented a JWT interceptor to automatically attach authorization headers. 
The benefits of reusable UI components were clear in Angular—forms, navigation bars, and trip cards could be reused across different views, reducing duplication and ensuring consistency.

- Testing -
  In this application, I tested various API endpoints that handled CRUD operations for trips. Methods like GET, POST, and PUT were tested to ensure data retrieval and updates functioned as expected. 
Adding authentication introduced new challenges because some endpoints required a valid JWT token. I confirmed proper functionality by first testing with Postman and then verifying that Angular correctly attached headers via its interceptor. 
This process reinforced my understanding of how methods map to specific endpoints and how security layers enforce proper access control in a full stack application.

- Reflection -

  This course has helped me grow as a developer by giving me direct experience building a working full stack application from the ground up. I learned how to integrate frontend and backend code, design and consume REST APIs, and secure routes with JWT authentication. 
On the frontend, I developed stronger skills in Angular and SPA architecture, while on the backend I gained comfort with Express, MongoDB, and middleware. These skills will make me more marketable as a candidate by demonstrating that I can design, implement, and test complete web solutions that align with industry practices.
