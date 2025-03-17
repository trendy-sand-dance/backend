import { FastifyInstance } from 'fastify';
//import {registerUser} from "../controllers/registerUser.controller";
import {getHome} from "../controllers/getHome.controller";
//import {getDB} from "../controllers/getDB.controller";


async function routes(fastify: FastifyInstance) {

	// get
	//fastify.get('/DB', getDB);
	fastify.get('/getHome', getHome);

	// post
	//fastify.post('/register', registerUser);
};

export default routes;
