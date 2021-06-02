import { AnimatePresence } from 'framer-motion';
import React from 'react'
import Loader from 'react-loader-spinner';
import { useParams } from 'react-router';
import { Header } from '../../components';
import { Card } from '../../components/Card/Card';
import { MotionCard } from '../../components/MotionCard/MotionCard';
import { useFetchData } from '../../hooks/useFetchData';
import { useFetchDataDetail } from '../../hooks/useFetchDataDetail';
import './Favorite.css';
import { Props } from './Favorite.props'

interface ParamTypes {
  detailId: string
}

 export const Favorite: React.FC<Props> = () =>  {


  const imageHasLoaded = true;
  const {detailId} = useParams<ParamTypes>()


  const { data ,isLoading } = useFetchData()
  const { data: dataDetail, isLoading: isLoadingDetail } = useFetchDataDetail(detailId)

  const currentDetailId = data?.find((movie) => movie.id === parseInt(detailId))

  const cardList = data?.map((movie) => {
    return <Card item={movie} currenMotionId={currentDetailId?.id}/>
  });


  return (
    <div className="App">
      <Header currentRoute='favorite'/>

      {!isLoading ?

        data?.length > 0 ? <div id='gallery'>{cardList} </div> : <div>Pas de films</div>
        
      :
        <div id="loader">
          <Loader  type="Puff" color="#D13F3F" height={100} width={100} />
        </div>
      }
        

      <AnimatePresence >
        {detailId !== undefined && imageHasLoaded && 
          <MotionCard item={currentDetailId} itemDetail={dataDetail} loading={isLoadingDetail}/>}
      </AnimatePresence>
  </div>
  );
}


