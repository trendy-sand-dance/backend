import fastifyPlugin from 'fastify-plugin';
import Database from 'better-sqlite3';

export default fastifyPlugin(async (fastify) => {
  const db = new Database('/app/database/src/database/database.db', {
    verbose: console.log
  });
  
  fastify.decorate('sqlite', {
    query: (sql: string) => db.prepare(sql).all()
  });
});