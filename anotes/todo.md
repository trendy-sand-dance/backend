

**now working on (backend from template from now on)** 

1) postman
2) db in user container working with volume from database container
3) squash + merge + joope dev ops - dont have settings option, do i follow the github instructions?


3) deleting for user + avatar.. use DELETE request?, when/how delete requests
4) schemas - what for and where will they be- lets figure that out together? 
5) editing/logged in blah blah
6) dev login and logout

7) edit user without being logged in, poss easier for testing without, consider for final version

**editing passwords dashboard etc**
- edituser ejs needs user specific info
- deleteuser ejs needs user specific info
- after login, pass user to dashboard for user specific dash needs user specific info
- registerUser controller is a export async function, good? what is this? should the rest be? I need to learn


**later**
- check this: id: result.lastInsertRowid i need to check this but i think naturally when a new element is added to the db table, the id increments, so to get that id number we can use something like the above
- mees workfames/tools for password - hashing etc
- create some variables for errors/logs like db not inited and the main messages for 	clients like db connection error/http error pages...




**team**

- handling db user memebers ID. after deletion etc... ? ask team
- same page for names of things like database table for users etc
- lets start collecting env varibales etc so we all use the same
- do we need/want a name ? or just username, password? email?
- tsx / pnpm / ts-node + nodemon.. what are we actually all using?


**remember**

 ! order of plugin registering is super important
- static then views
- dbconnector then routes

 ! must have both reply and request if using one of these, with only reply OR request, errors 

 ! ? database queries, ? these avtually matter, the amount of them needs to match the values given in the run() that comes after