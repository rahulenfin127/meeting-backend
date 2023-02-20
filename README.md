# Node.js Practical Test

## Instructions to run the application after cloning locally

* To install dependencies run 'npm install' on the terminal after getting into backend folder

* To start the application  run 'npm start' on the terminal 

## Instructions to run the application 

### I have deployed the fullstack project also in AWS and used Nginx as web server & reverse proxy

* Live link : http://34.204.5.233/

### I have deployed the backend for testing in AWS and used Nginx as web server & reverse proxy

* Live link : http://34.239.102.32/

## Api requests for each requirements

* http://34.239.102.32/api/users/signup  -- User Signup

    For signup you need to give the firstname,lastname,email and password in the request body

    sample input 

    {
    "firstName":"Rahul",
    "lastName":"P",
    "password":"99999",
    "email":"rahulpar1999@gmail.com"
    }

* http://34.239.102.32/api/users/login   -- User Login

    For logging in you need to give the email and password in the request body

    sample input 

    {
    "password":"99999",
    "email":"rahulpar1999@gmail.com"
    }

* http://34.239.102.32/api/users/profile     -- View User Profile

    To view the user profile section you need to attch the jwt token in thr headers

* http://34.239.102.32/api/users/user-history  -- View insights history 

* http://34.239.102.32/api/users/get-insights  -- Find out insights of new website

* http://34.239.102.32/api/users/add-to-fav-insight  -- Mark an insight as favourite

* http://34.239.102.32/api/users/remove-from-fav-insight -- Remove insight from favourite

* http://34.239.102.32/api/users/:id -- Remove an insight

* http://34.239.102.32/api/users/logout   -- User Logout


## Project Screenshots


![Screenshot (105)](https://user-images.githubusercontent.com/60054042/208376998-1d0d30d8-edc2-4ffc-a66a-6479f1373037.png)

![Screenshot (106)](https://user-images.githubusercontent.com/60054042/208377044-6c9b7635-e82a-4468-a27e-7e7156169a40.png)


![Screenshot (107)](https://user-images.githubusercontent.com/60054042/208377074-6c5964c4-d263-45d3-9d16-aa2cff9dc002.png)


## Services used:
* Node.js
* React.js
* Express.js
* MongoDB
* JWT
* Mongoose
* bcryptjs
* AWS
* Nginx
