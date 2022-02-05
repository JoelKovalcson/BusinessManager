# BusinessManager

## Description

The foundation for this project was provided by an online bootcamp for [Full-Stack Development](https://bootcamps.vanderbilt.edu/coding/online/landing/). 

This project focused on creating a command-line interface to manage 

The requirements for the project were as follows:
* Use `Inquirer`
* Use MySQL
* Use `MySQL2` package
* Use `console.table` package for printing MySQL rows

## Installation

1. Make sure you have `node`, `git`, and `MySQL` installed.
2. Clone this repository to a location of your preference.
3. Navigate to this location with a terminal of choice.
4. Run the command `npm install`.
5. Provide the following files (in this order) to `MySQL` through some means (such as command-line):
   1. `db/db.sql` to create the database
   2. `db/schema.sql` to create the tables
   3. (Optional) `db/seeds.sql` to input some example data
6. Setup your `.env` file with your `MySQL` credentials.
7. Start the application with `npm start`.
8. Follow on screen prompts to modify and view the database.

## Guide

For a visual guide of the above steps, watch [this video]().

## What I Did

I started this project by creating many of the SQL queries required in `routes`. After I had finished setting up most of the core routes, I continued on to generate questions that would provide the information needed to use the routes. When I had the groundwork setup, I finally started writing the core application logic using the routes and questions to modify the database based on user input.

## Future Plans

I plan on adding more routes and questions for further modifying the database so that there is more functionality and usability.