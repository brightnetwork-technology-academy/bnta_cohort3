# Connecting Spring Boot to React

In this exercise your task is to build a React application which will let you load data from a locally-hosted API and submit new entries to it. The back-end is provided for you and doesn't need to be modified. Your application should have separate components to handle different tasks and be able to make GET and POST requests to the API. You can continue using the `fetch` API to make the requests, or if you want to you can research how to do it using the `axios` library.

## Considerations

- Remember to create the database before you start the app! You can find the name of it in the `application.properties` file.
- The routes which you can make requests to are defined in the controller. Use either a web browser or Postman to test them to see how the json is structured and what information you need to send in a POST request.
- There are no other routes in the API so your front-end can't make any updates or delete records, but feel free to add them if you want to investigate.
- Remember to copy the code to a different directory before starting work, otherwise you'll run into trouble next time you pull from the course notes repo.
- CSS is optional, but may be useful...