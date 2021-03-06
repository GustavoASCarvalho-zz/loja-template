import Env from '@ioc:Adonis/Core/Env'
import { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'
import Url from 'url-parse'

const databaseUrl = new Url(Env.get('DATABASE_URL'))

const databaseConfig: DatabaseConfig = {
  connection: Env.get('DB_CONNECTION'),

  connections: {
    pg: {
      client: 'pg',
      connection: {
        host: databaseUrl.hostname as string,
        port: databaseUrl.port as number,
        user: databaseUrl.username as string,
        password: databaseUrl.password as string,
        database: databaseUrl.pathname.substr(1) as string,
        // ssl: {
        //   rejectUnauthorized: false,
        // },
      },
      migrations: {
        naturalSort: true,
      },
      healthCheck: false,
      debug: false,
    },
  },
}

export default databaseConfig
