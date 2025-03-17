//import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

//export async function getDB(fastify: FastifyInstance, request: FastifyRequest, reply: FastifyReply): Promise<void> {

//	const db = fastify.db;
//	if (!db)
//		console.log("no db!!!!!!!!!!");
//	else
//	console.log("WE GOT DB OUTSIDE DBCONNTROLLER");
//	const query = `SELECT * FROM userTable`;
//	const userTable = db.prepare(query).all();
//	return reply.send({ title: "Home", userTable });
//};
