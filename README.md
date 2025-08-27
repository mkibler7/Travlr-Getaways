# Travlr Getaways
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
  ✅ Server-rendered via Pug templates for fast first paint and SEO-friendly HTML  
  <img width="1316" height="1257" alt="image" src="https://github.com/user-attachments/assets/c0466a48-418d-4b70-a32c-accb50c12abe" />
  <img width="1309" height="1306" alt="image" src="https://github.com/user-attachments/assets/580d5ebe-5073-45c6-b90e-95376a267c60" />
  <img width="1315" height="1214" alt="image" src="https://github.com/user-attachments/assets/010ac7a3-d15a-4985-b642-c0e0da2fe02f" />

Admin SPA (Angular)  
  ✅ Trip listing with live data from API  
  ✅ Create trip form (validates and persists to MongoDB)  
  ✅ Image rendering from src/assets/images  
  ✅ Dev proxy so the SPA can call /api/* without CORS issues  

 <img width="1405" height="1164" alt="image" src="https://github.com/user-attachments/assets/52488df6-c485-455a-829d-49a3ca28e159" />
 <img width="1410" height="419" alt="image" src="https://github.com/user-attachments/assets/7916735b-2fbe-4fe1-90e4-c24f8a48ee3c" />
 <img width="1402" height="1269" alt="image" src="https://github.com/user-attachments/assets/2466ec35-c81f-485d-b932-9ec0ba432da9" />
 <img width="1404" height="725" alt="image" src="https://github.com/user-attachments/assets/f6fe150f-06aa-4b4d-8d28-3ddd271b5009" />
 <img width="1406" height="1255" alt="image" src="https://github.com/user-attachments/assets/794e1e82-6f7a-425e-aa1e-b0fca1e3138d" />

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
