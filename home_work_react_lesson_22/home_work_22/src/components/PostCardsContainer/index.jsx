import React from 'react'
import { posts } from '../../data/data'
import PostCard from '../PostCard'
import s from './index.module.css'

export default function PostCardsConatiner() {
  return (
    <div className={s.container}>
        {
            posts.map(el => <PostCard {...el} key={el.id}  />)
        }
    </div>
  )
}
