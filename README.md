# Setup Project Laravel & React

## Project Description
this project uses Laravel as a backend, Reactjs as a frontend, and components UI use AntDesign.

## list version
### composer.json
- php ^7.2
- Laravel 5.8
### package.json
- react js ^16.2
- laravel-mix ^4.0.16 (important for route lazy react) 

## How to Install on Local Environment
You can follow the following step to configure this project
- Clone the repository using the command "git clone https://github.com/haidi20/setup-project.git"
- Create database in mysql
- Add rename .env.example file to .env and configure for the database
- Now go up to project and run the following commands <br>
  ```$ composer install``` <br>
  ```$ php artisan key:generate``` <br>
  ```$ php artisan migrate``` <br>
  ```$ php artisan db:seed``` <br>
  ```$ yarn install * for install package node_modules ``` <br>
- And run command ```$ php artisan serve``` and take a look at "localhost:8000" in browser