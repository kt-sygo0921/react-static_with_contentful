// import axios from 'axios'
import path from 'path'
import _ from 'lodash';
import fetchPosts from './contentful/fetchPost';
// import { Post } from './types'

// Typescript support in static.config.js is not yet supported, but is coming in a future update!


export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getRoutes: async () => {
    // const { data: posts } /* :{ data: Post[] } */ = await axios.get(
    //   'https://jsonplaceholder.typicode.com/posts'
    // )
    const posts = await fetchPosts()
    return [
      {
        path: '/blog',
        getData: () => ({
          posts,
        }),
        children: posts.map((post /* : Post */) => ({
          path: `/post/${post.id}`,
          template: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
    ]
  },
  plugins: [
    'react-static-plugin-typescript',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
