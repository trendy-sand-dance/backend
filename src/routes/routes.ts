import { FastifyInstance } from 'fastify';

// dev
import {getHome} from "../controllers/dev/getHome.controller";
import {getDB} from "../controllers/dev/getDB.controller";
import {addDev} from "../controllers/dev/addDev.controller";

// user
import {registerUser} from "../controllers/user/registerUser.controller";
import {loginUser} from "../controllers/user/loginUser.controller";
import {logout} from "../controllers/user/logout.controller";
import {deleteUser} from "../controllers/user/deleteUser.controller";
import {editUser} from "../controllers/user/editUser.controller";

// avatar
import {addAvatar} from "../controllers/avatar/addAvatar.controller";
import {editAvatar} from "../controllers/avatar/editAvatar.controller";
import {deleteAvatar} from "../controllers/avatar/deleteAvatar.controller";

// web
import {getDashUser} from "../controllers/web/getDashUser.controller";

async function routes(fastify: FastifyInstance) {

	// dev
	fastify.get('/', getHome);
	fastify.get('/DB', getDB);
	fastify.get('/add', addDev);

	// user
	fastify.post('/register', registerUser);
	fastify.post('/login', loginUser);
	fastify.post('/logout', logout);
	fastify.post('/delete', deleteUser);
	fastify.post('/edit', editUser);

	// avatar
	fastify.post('/addAvatar', addAvatar);
	fastify.post('/editAvatar', editAvatar);
	fastify.post('/deleteAvatar', deleteAvatar);

	// web
	fastify.get('/dash/:username', getDashUser);
};

export default routes;
