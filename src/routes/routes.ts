import { FastifyInstance } from 'fastify';

// get
import {getHome} from "../controllers/getHome.controller";
import {getDB} from "../controllers/getDB.controller";

// post
import {registerUser} from "../controllers/registerUser.controller";
import {loginUser} from "../controllers/loginUser.controller";
import {deleteUser} from "../controllers/deleteUser.controller";
import {editUser} from "../controllers/editUser.controller";
import {getDashUser} from "../controllers/getDashUser.controller";

async function routes(fastify: FastifyInstance) {

	// get
	fastify.get('/', getHome);
	fastify.get('/DB', getDB);

	// post
	fastify.post('/register', registerUser);
	fastify.post('/login', loginUser);
	fastify.post('/delete', deleteUser);
	fastify.post('/edit', editUser);
	fastify.post('/dash', getDashUser);
};

export default routes;
