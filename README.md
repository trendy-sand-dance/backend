<div align=center>

# service template 
This repo contains the basic layout of our services, it runs a node server.
</div>

## Repo information
Database holds two tables: user data and game data. 
User management container only accesses the user data table

** if you want to change the structure of the database table(s), you must delete the db file in the container: src/database/database.db 
AND
remove the volume so then see the changes and create a new database with the updated table(s)

to continue to branch off and add to this repo:
- password hashing
- google authentication
- two-factor authentication

## Repo setup
After you've created a repo based on this template you should setup the branch rules.
T.B.A

## Project setup
1. Set the name in `package.json` to the name of the service.
T.B.A


## dev pre-requisites
- docker



## Running in dev mode
- building the container
```
make devbuild
```

- running the container
```
make rundev
```

## Running in prod mode
- building the container
```
make prodbuild
```

- running the container
```
make runprod
```

## Cleaning the container
```
make clean
```

