import React, { FC } from 'react'
import { CardProps } from './Card.props'
import './Card.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Card: FC<CardProps> = ({item, currenMotionId}) => {

  return (
    <motion.div layoutId={item?.id} className='container'>
        <Link to={`/${item?.id}`} className='link'>
          <motion.img src={item?.poster} alt="ImgRecipe" className='img' layoutId={`img-${item?.id}`}/>
          <motion.p className='title' layoutId={`title-${item?.id}`}>{item?.title}</motion.p>
        </Link>
    </motion.div>
  )
}
