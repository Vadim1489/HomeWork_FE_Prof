import React from 'react'
import s from './index.module.css'

export default function PostCard({title, body,  reaction}) {
  return (
    <div className={s.card}>
        <h3>{title}</h3>
        <p>{body}</p>
        <p>{reaction}</p>
    </div>
  )
}
