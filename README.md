Getting Started:
Install node (latest or newer version)

Install the project:
##
    npm install

Run the webserver:
##
    ng serve

Production Deployment you would run ng build and deploy the dist/trucks folder to a real web server:
##
    ng build

Documentation
====
I chose Angular 18 for this project because it creates efficient responsive web apps. It is also a framework 
that lets you do backend and frontend really quickly which was I needed for this assesment. I also killed 2 
birds with one stone by doing this assessment and trying out Angular 18 for the first time.

My plan was to allow the user to check off food trucks they have visited, so they can keep track of which ones they have tried
but there wasn't enough time for that. Originally, I was going to put all the foodtrucks on a map using the longitude and lattitude, but I didn't want to spend too much 
time looking for a map of San Francisco that could be used in a dataviz project.

An actual production ready app (and if I had more than 3 hours)
* For speed, I converted the CSV to json and just loaded it using an Angular Import command. In a real app,
I would have probably kept the data in a database. That would have taken a lot longer to set up although I
probably could have done that with mySQL or Postgres and PHP somewhat quickly. Also, I could have retrieved the JSON or CSV
using an HTTP request.
* I just used some basic CSS, but better would be to use a framework and or get CSS that follows branding from a style guide.
* Would have used SASS or SCSS but for this small project there wasn't a benefit.
* Was going to look into hosting on Firebase but that would have taken time, and since it's an assesment, I chose to serve it up using Angulars built in development 
web server which allowed me to see changes as I developed.
* I used a picture of a food truck from Google Images.
* In my opinion, using a Framework such as React, I didn't really need to document the app too much because the location of code is somewhat prescriptive by the framework 
and somewhat self documentting, but with more time could definitely add more documentation.
* Didn't do any automated testing, but a production app, even a simple thing like this should have some test coverage.


  
