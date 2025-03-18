

**now working on (backend from template from now on)** 

5) connection between frontend + backend containers
6) continue user things from the list below
7) add pruning to clean rule mf
8) test request server, add futher things from usermanagement repo

do i need to do this?
9) change usermanagement repo to be more like this + delete node_modules dir, should still work

**editing passwords dashboard etc**
- edituser ejs needs user specific info
- deleteuser ejs needs user specific info
- after login, pass user to dashboard for user specific dash needs user specific info
- registerUser controller is a export async function, good? what is this? should the rest be? I need to learn

- check this: id: result.lastInsertRowid i need to check this but i think naturally when a new element is added to the db table, the id increments, so to get that id number we can use something like the above

- mees workfames/tools for password - hashing etc

**me**

- make db table an environment variable
- check each column in database + restrictions, add to registration correctly (name needed but no field to input name) ( use miro tables )
- import paths etc, env variables...
- create some variables for errors/logs like db not inited and the main messages for clients like db connection error/http error pages...
- handling db user memebers ID. after deletion etc... ? ask team
- loggin state, needs to be saved so user can see who else is logged in
- later/not/someoneelse 12) flash messages + key stufff 13) favicon

**team**

- same page for names of things like database table for users etc
- lets start collecting env varibales etc so we all use the same
- do we need/want a name ? or just username, password? email?
- tsx / pnpm / ts-node + nodemon.. what are we actually all using?