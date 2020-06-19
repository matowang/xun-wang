const sanityClient = require('@sanity/client')
export default sanityClient({
    projectId: '7qt2mn5y',
    dataset: 'production',
    token: process.env.SANITY_TOKEN, // or leave blank to be anonymous user
    useCdn: true // `false` if you want to ensure fresh data
})