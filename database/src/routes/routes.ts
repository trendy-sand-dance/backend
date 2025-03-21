import { FastifyInstance } from 'fastify';

// dev
import {getHome} from "../controllers/dev/getHome.controller";
import {getDB} from "../controllers/dev/getDB.controller";
import {addDev} from "../controllers/dev/addDev.controller";
import {delDev} from "../controllers/dev/delDev.controller";
import {changeStatusDev} from "../controllers/dev/changeStatusDev.controller";
import {editDev} from "../controllers/dev/editDev.controller";

// web
import {getDashUser} from "../controllers/web/getDashUser.controller";

async function routes(fastify: FastifyInstance) {

	// dev
	fastify.get('/', getHome);
	fastify.get('/DB', getDB);
	fastify.get('/add', addDev);
	fastify.get('/del', delDev);
	fastify.get('/stat', changeStatusDev);
	fastify.get('/eddy', editDev);

	// web
	fastify.get('/dash/:username', getDashUser);
};

export default routes;
