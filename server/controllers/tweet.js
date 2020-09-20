const mongodb = require('mongodb')

// get
const getTweets = async (req, res) => {
    const tweets = await connectDB()
    res.status(200).send( await tweets.find({}).toArray())
}

// post
const postTweet = async (req, res) => {
    const tweets = await connectDB()
    tweets.insertOne({
        tweet: req.body.tweet,
        created_at: new Date()
    })
    res.status(201).send()
}
// delete
const deleteTweet = async (req, res) =>{
    const tweets = await connectDB()
    await tweets.deleteOne({
        _id: new mongodb.ObjectID(req.params.id)
    })
    res.status(200).send()
}

// mongoDB
async function connectDB(){
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://lourencer123:9T7rMZeTEofCm42P@mevn-firebaseauth-clust.ixgll.mongodb.net/mevn_firebase_auth?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    return client.db('mevn_firebase_auth').collection('tweets');
}

module.exports = {
    getTweets,
    postTweet,
    deleteTweet
    // deleteTweet
}
// 9T7rMZeTEofCm42P