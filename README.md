# Travlr Getaways
A full-stack travel booking application built with the MEAN stack, featuring an admin dashboard and visitor-facing site.

Public Website + Admin SPA + Express/Mongo API

This was an application made by following the textbook in my CS-465 fullstack computer programming course at SNHU. 

This application aims to serve:
  - Visitors - Server-rendered website using Express + Pug that displays trips, resort info and contact details.
  - Admins - An Angular SPA for managing trips.
Both clients utilize the same Express REST API and MongoDB database.

## Features

Public Webstie (Visitors)  
  ✅ Home page with brand/intro content  
  ✅ Trips page showing all available trips with images, price, length, dates  
  ✅ Contact information page  
  ✅ Server-rendered via Pug templates

  ![image](https://github.com/user-attachments/assets/c0466a48-418d-4b70-a32c-accb50c12abe)
  ![image](https://github.com/user-attachments/assets/580d5ebe-5073-45c6-b90e-95376a267c60)
  ![image](https://github.com/user-attachments/assets/010ac7a3-d15a-4985-b642-c0e0da2fe02f)
  

Admin SPA (Angular)  
  ✅ Trip listing with live data from API  
  ✅ Create trip form (validates and persists to MongoDB)  
  ✅ Image rendering from src/assets/images  
  ✅ Dev proxy so the SPA can call /api/* without CORS issues  

 ![image](https://github.com/user-attachments/assets/52488df6-c485-455a-829d-49a3ca28e159)
 ![image](https://github.com/user-attachments/assets/794e1e82-6f7a-425e-aa1e-b0fca1e3138d)
 ![image](https://github.com/user-attachments/assets/2466ec35-c81f-485d-b932-9ec0ba432da9)
 ![image](https://github.com/user-attachments/assets/f6fe150f-06aa-4b4d-8d28-3ddd271b5009)
 ![image](https://github.com/user-attachments/assets/794e1e82-6f7a-425e-aa1e-b0fca1e3138d)

## Tech Stack
  - Angular (standalone components, HttpClient, RxJS)
  - Bootstrap 5 for styling
  - Node.js / Express REST API
  - MongoDB + Mongoose for data persistence
  - Postman (API testing) and MongoDB Compass (DB inspection)

## How to Run

  1. Clone this repo: https://github.com/mkibler7/cs465-fullstack.git
  2. Open up powershell or another CLI and go to project directory.
  3. Run npm install
  4. Run npm start
  5. You should now be able to visit [http](http://localhost:3000/) to see the public vistors website.
  6. Open another CLI instance.
  7. Find the project directory, and navigate to the app_admin folder.
  8. Run npm install
  9. Run ng serve
  10. You should now be able to visit [http](http://localhost:4200/) to see the admin SPA.
  11. For testing purposes:  
          name:      Joe Smith  
          email:     jsmith9867@example.com  
          password:  SomeSpecialMagicString!

## Contact Info
Created by **Michael Kibler** (CS-465 Fullstack Textbook Project)
[LinkedIn](https://www.linkedin.com/in/michael-kibler-11369519b/) | [Email](mailto:mpkibler7@gmail.com)
