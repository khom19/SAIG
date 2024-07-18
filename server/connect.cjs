const { MongoClient } = require("mongodb")
require("dotenv").config({path: "./config.env"})

async function main() {
    const Db = process.env.ATLAS_URI
    const Client = new MongoClient(Db)

    try {
        await Client.connect

        const collections = await Client.db("sample_mflix").collections()
        collections.forEach((collection) => console.log(collection.s.namespace.collection));
    } catch(e) {
        console.error(e)
    } finally {
        await Client.close()
    }
}

main()