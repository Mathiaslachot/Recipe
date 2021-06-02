import React, { FC } from 'react'
import { MotionCardProps } from './MotionCard.props'
import './MotionCard.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from "react-loader-spinner";


export const MotionCard: FC<MotionCardProps> = ({item, itemDetail, loading}) => {

  const allData = JSON.parse(localStorage.getItem('movies') || '[]');

  const isExist = allData.find((d: any) => d.id === itemDetail.id)

  const addItem = () => {
    localStorage.setItem('Detail', JSON.stringify('movies', [...allData, itemDetail]))
  }
  return (

    <>
      <Link to={`/`} className='link'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        className="overlay" />

        {item?.id && 
        
          <div className='open' >
            <motion.div className='card' layoutId={item?.id}>

              <motion.img src={item?.poster} alt="ImgRecipe" className='imageDetail' layoutId={`img-${item?.id}`}/>
              <div id='informationDetail'>
                <div>
                  <motion.p className='bigTitleDetail' layoutId={`title-${item?.id}`}>{item?.title}</motion.p>
                  <p className='titleDetail' >Réalisateur : {item?.director}</p> 
                  <p className='titleDetail' >Durée : {item?.duration}mm</p> 
                  <p className='titleDetail' >Sortie le {item?.year}</p> 
                </div>
                <button id='favoriteButton' onClick={() => addItem()}>{isExist ? 'Supprimer des favoris' : 'Ajouter en favoris'}</button>
              </div>
            {loading ? (
              <div className='loaderDetail'>
                <Loader  type="Puff" color="#D13F3F" height={100} width={100} />
              </div>
            ) : (
             <></>
            )}
       
            </motion.div>
          </div>
          

        }
   
      </Link>
    </>
  )
}
