import { FastifyReply } from 'fastify';

export async function getHome(reply: FastifyReply) {

	return reply.send("home page");
};

