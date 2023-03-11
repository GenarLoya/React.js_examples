import {tedious} from 'tedious'

const Connection = tedious.Connection

// Configuration for the connection with the db
const server = '172.17.0.2'

// authentication configurations
const userName = 'sa'

const password = 'h3re1920gr3#2104'

const typeDB = 'default'

const authentication = {
	type: typeDB,
	options: {
		userName,
		password,
	},
}

// Options configuration

const dbName = 'checador'
const dbPORT = 1443

const options = {
	encrypt: false,
	database: dbName,
	port: dbPORT,
}

// Join all the configurations
const config = {
	server,
	authentication,
	options,
}

/**
 * Create a connection with the db. You need to call the `connect` method
 * after creating the new Connection.
 * @example
 * ```
 * const db = createConnection()
 * db.connect()
 * ```
 * @returns { Connection }
 */
export const createConnection = () => new Connection(config)

