//import fastifyPlugin from 'fastify-plugin';
//import Database from 'better-sqlite3';

//export default fastifyPlugin(async (fastify) => {
//  const db = new Database('/app/src/database/database.db', {
//    verbose: console.log
//});

//fastify.decorate('sqlite', {
//	query: (sql: string) => db.prepare(sql).all()
//});
//});

import fastifyPlugin from 'fastify-plugin';
import Database from 'better-sqlite3';
import fs from 'fs';

export default fastifyPlugin(async (fastify) => {
  const dbPath = '/app/src/database/database.db';

  if (!fs.existsSync(dbPath)) {
    throw new Error(`Database not found at ${dbPath}. Ensure it is created by the 'database' service.`);
  }

  const db = new Database(dbPath, { verbose: console.log });

  fastify.decorate('sqlite', {
    query: (sql: string) => db.prepare(sql).all()
  });
});