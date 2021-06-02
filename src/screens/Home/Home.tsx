import React, { useState } from 'react'
import './Home.css';
import { useParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Props } from './Home.props'
import { Card } from '../../components/Card/Card';
import { MotionCard } from '../../components/MotionCard/MotionCard';
import { useFetchData } from '../../hooks/useFetchData/useFetchData';
import Loader from "react-loader-spinner";
import { useFetchDataDetail } from '../../hooks/useFetchDataDetail';
import { Header } from '../../components/Header';
import Select from 'react-select'

const options = [
  { value: 'prime', label: 'Prime Video' },
  { value: 'netflix', label: 'Netflix' },
  { value: 'disney', label: 'Disney +' }
]

interface ParamTypes {
  detailId: string
}
 export const Home: React.FC<Props> = () =>  {


  const [search, setSearch] = useState('')
  const imageHasLoaded = true;
  const {detailId} = useParams<ParamTypes>()

  const { data ,isLoading } = useFetchData(search)
  const { data: dataDetail, isLoading: isLoadingDetail } = useFetchDataDetail(detailId)

  const currentDetailId = data?.find((movie) => movie.id === parseInt(detailId))



  const linkList = data?.map((movie) => {
    return <Card item={movie} currenMotionId={currentDetailId?.id}/>
  });

  
  return (
      <div className="App">
      <Header currentRoute='movies'/>

        <div id='containerTop'>
          <div id='searchBar'>
            <form>
                <input id='inputSearchBar' type="text" value={search} placeholder='Seach movies...' onChange={event => setSearch(event.target.value)} />
            </form>
          </div>

            <div id="selector"><Select options={options}  /></div>
        </div>



        {!isLoading ?

          data?.length > 0 ? <div id='gallery'>{linkList} </div> : <div>Pas de recette</div>
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


