# M.E.A.N todolist

todolist application created using the [M.E.A.N](https://en.wikipedia.org/wiki/MEAN_(software_bundle)) stack

# Installation
download or clone the repo
```sh
$ git clone https://github.com/mgellis91/mean_todolist/
```
Install Dependencies
````sh
$ cd mean_todolist
$ npm install
````
# Running the app
[Mongodb](https://www.mongodb.com/) is required in order for the application to store the entries in the todo list. For information on installing and running Mongodb on other platforms vist the [Mongodb docs](https://docs.mongodb.com/manual/installation/)

start mongodb in seperate terminal instance (using OSX)
```sh
$ mongod
```
Inside the root of mean_todolist directory run
```sh
$ node src/app.js
```
