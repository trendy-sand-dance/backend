import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import {registerUser} from "../controllers/registerUser.controller";
import {getHome} from "../controllers/getHome.controller";


async function routes(fastify: FastifyInstance) {

	// get
	fastify.get('/', getHome);

	// post
	fastify.post('/register', registerUser);
};

export default routes;
