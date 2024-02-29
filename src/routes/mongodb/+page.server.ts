/* import clientPromise from '$lib/mongodb/mongodb.client'
import { ObjectId } from 'mongodb'

export async function load() {
    let client, events

    try {
        client = await clientPromise

        // grabs airbnb database
        const db = client?.db("scheduleDB")

        // grabs the listingsAndReviews collection
        const collection = db?.collection("events")

        // grabs US listings with no weekly price, no monthly price, and not in Hawaii, Maui, Island of Hawaiʻi, The Big Island, Oahu, or Kauai
        // theres just too many in the islands and new york
        const eventsArray = await collection?.find({}).toArray()

        // converts the object id to a string, and adds the image URL, and converts the bathrooms, price, security_deposit, extra_people, guests_included, and cleaning_fee to a float
        events = await Promise.all((eventsArray || []).map(async (event) => {
            return { 
                ...event, 
                _id: (event._id as ObjectId).toString()
            }
        }))

    } catch(error) {
        console.log('failed to connect to MongoDB', error)
        
        // closes the client connection if there is an error and the client exists
        if (client) {
            await client.close()
        }
        return {
            status: 500,
            body: 'Failed to connect to MongoDB'
        }
    }

    return {
        // returns a 200 status code and the movie object
        status: 200,
        body: events
    }

} */