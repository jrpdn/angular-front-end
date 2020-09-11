# angular-front-end

The following repository contains the angular front end code as well as the backend code:

Folder: angular-front-end contains the angular application code
Folder: Microservices contains the backend microservices coded in spring boot

Instructions for running the application:

1.Run the microservices in the following order:
              discovery-server
              company-details-service
              sectorservice
              stock-exchange-service
              upload-excel-service
              user-details-service (must be run at the and so that zull gateway can fecth registry instantly)
2. Install the front end application in your system using npm install.
3. Run the angular applicatio using the command ng serve -o
4. Now got to localhost:4200 for the application.

5. (Optional) In order to test the microservices seperatelyh send all the requests to localhost:8080/<microservice name>/<URL PATH defined in controller>

