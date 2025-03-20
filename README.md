# Welcome to Flights Services

## Project Setup

- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following environment variables
   - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json  

```
{
    "development": {
    "username": "root",
    "password": "yourDBpassword",
    "database": "Flights_Search_DB_LOCAL",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` 
