# Assignment Three
## Purpose
The purpose of this assignment is to get comfortable working with a NoSQL database (MongoDB). 

For this assignment you will create a Users collection to store users for your signup and signin methods.  You will pass Username, Name and Password as part of signup.  To get a token you will call SingIn with username and password only.  The token should include the Name and UserName (not password)

You will also create Movies collection to store information about movies.  All endpoints will be protected with the JWT token received by a signin call. 

## Requirements
Create a collection in MongoDB to hold information about movies
- Each entry should contain the following
    - title (string, required, index)
    - releaseDate
    - genre (Action, Adventure, Comedy, Drama, Fantasy, Horror, Mystery, Thriller, Western, Science Fiction)
    - Array of three actors that were in the film
        - actorName
        - characterName
    - The movie collection should have at least five movies
- Create a NodeJS Web API to interact with your database
    - Follow best practices (e.g. /movies collection)
    - Your API should support all CRUD operations (through HTTP POST, PUT, DELETE, GET)
    - Ensure incoming entities contain the necessary information.  For example if the movie does not contain actors, the entity should not be created and an error should be returned 
- All endpoints should be protected with a JWT token (implement signup, and signin)
    - For this assignment you must implement a User database in Mongo
        - name
        - username 
        - password (should be hashed)
    - If username exists the endpoint should return an error that the user already exists
    - JWT secret needs to be stored in an environment variable
- Update the Pre-React CSC3916_REACT placeholder project to support /signup and /signin methods.  The React Single Page App should use your Assignment 3 API to support those two operations.

## Submissions
- All source code should be stored on github (remember .gitignore for node_modules)
- API needs to be deployed to heroku or render
- React Website that allows user to signup and singin (we did this in class)
- PostMan test collection that 
    - Signs Up a user (create a random user name and random password in your pre-test)
    - SignIn a User – parse token and store in postman environment variable
    - A separate call for each endpoint (save a movie, update a movie, delete a movie and get a movie)
    - Test error conditions (user already exists)
        - SignUp (user already exist)
        - Save Movie (missing information like actors (must be at least three), title, year or Genre)

- Create a readme.md at the root of your github repository with the embedded (markdown) to your test collection
    - Within the collection click the (…), share collection -> Embed
    - Static Button
    - Click update link
    - Include your environment settings
    - Copy to clipboard 
- Submit the Url to canvas with the REPO CSC_3916
- Note: All tests should be testing against your Heroku or Render endpoint

| Route | GET | POST | PUT | DELETE |
| --- | --- | --- | --- | --- |
| movies | Return all movies| save a single movie | FAIL | FAIL |
| movies/:movieparameter | Return a specific movie based on the :movieparameter | FAIL | Update the specific movie based on the :movieparameter in your case it’s the title | Delete the specific movie based on the :movieparamters your case it’s the title |*

* If Query String (Later Homework) reviews=true aggregate in reviews |

## Rubic
- -5 for missing REACT site (-2 if you are not able to signup or signin on the react site) that is all we implemented
- -1 for MovieSchema missing any of the attributes (array of actors, genre, year released or title)
- -2 for missing routes for /movies (POST/PUT/DELETE/GET)
- -1 for missing authentication on routes
- -2 for not deployed on Heroku/Render
- -1 missing Test error conditions
- -1 missing PostMan tests (signup, signin, separate call for each route)

## Resources
- https://www.mongodb.com/cloud/atlas
- Create a Free Subscription *Amazon
- https://render.com/docs/deploy-create-react-app **important: Environment Variable for https://github.com/AliceNN-ucdenver/CSC3916_REACT env.REACT_APP_API_URL, this weekend I will look at changes (I believe only 1 change in the actions)

- ## Postman API Collection

Click the button below to run the Postman collection and test the API:
[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/41740081-54e5caee-9213-4e21-85a1-8ae12b9c3c7f?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D41740081-54e5caee-9213-4e21-85a1-8ae12b9c3c7f%26entityType%3Dcollection%26workspaceId%3Dbd7f337b-a9cf-47ae-8848-c40a738c3714#?env%5BNIkitha-Hw4%5D=W3sia2V5IjoibmlraXRoYS1odzQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiSldULi4uIiwiY29tcGxldGVTZXNzaW9uVmFsdWUiOiJKV1QgZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2SWpZM1pqQXpPVGN6TVRObE56aGhaakJrWkRjM01EaGlPU0lzSW5WelpYSnVZVzFsSWpvaWNuSnlRR2R0WVdsc0xtTnZiU0lzSW1saGRDSTZNVGMwTXpnM05URTBPQ3dpWlhod0lqb3hOelF6T0RjNE56UTRmUS5CREZWSnpnT1hDRGdUR2ZJUTlLNVhpcnRYZ0VaY0lqdWxtQ2k2SUlvZ3c0Iiwic2Vzc2lvbkluZGV4IjowfV0=)
