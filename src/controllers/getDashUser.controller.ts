import { FastifyRequest, FastifyReply } from 'fastify';

export async function getDashUser(request: FastifyRequest, reply: FastifyReply): Promise<void> {

	// give frontend user details + data
	
	// know which user has logged in
	// query db for all relativant information
	// send / respond to frontend with this info
};

// reply with dashboard of logged in user (request the frontend for that page with that user specifics)
