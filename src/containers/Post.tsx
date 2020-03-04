import React, {useEffect} from 'react'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'
import { Post } from '../../types'

export default () => {
  const { post }: { post: Post } = useRouteData()
  useEffect(() => {
    {post.footerScripts}
  },[])
  return (
    <div>
      <Link to="/blog/">{'<'} Back</Link>
      <br />
      <h3>{post.title}</h3>
      <p dangerouslySetInnerHTML={{
        __html: post.body
      }} />
    </div>
  )
}
