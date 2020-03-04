  
import _ from 'lodash';

require('dotenv').config();
const Contentful = require('contentful')

const Client = Contentful.createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.CDAPI_ACCESS_TOKEN,
})

export default (async function getPosts () {
    const entries = await Client.getEntries({
        content_type: process.env.POST_CONTENT_TYPE_ID,
    })

    const posts = _.map(entries.items, item => item.fields)

    return posts;
})