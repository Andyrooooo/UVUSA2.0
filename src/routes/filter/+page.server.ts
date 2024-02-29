// import clientPromise from '$lib/mongodb/mongodb.client'
// // import { ObjectId } from 'mongodb'

// export async function load() {
//     let client, name

//     try {
//         client = await clientPromise

//         const db = client?.db("scheduleDB")

//         const collection = db?.collection("fileName")

//         const nameGrab = await collection?.findOne({})
//         console.log(nameGrab)

//         name = nameGrab ? { ...nameGrab, _id: nameGrab._id.toString() } : null
//         console.log(name)

//     } catch(error) {
//         console.log('failed to connect to MongoDB', error)
        
//         // closes the client connection if there is an error and the client exists
//         if (client) {
//             await client.close()
//         }
//         return {
//             status: 500,
//             body: 'Failed to connect to MongoDB'
//         }
//     }

//     return {
//         // returns a 200 status code and the movie object
//         status: 200,
//         body: name
//     }

// }