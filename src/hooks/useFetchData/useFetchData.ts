
import { useEffect, useMemo, useState } from 'react'
import { DOMAIN } from '../../config'
import { UseFetchData } from './useFetchData.types'

export const useFetchData: UseFetchData = (search) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    setIsLoading(true)
    const interval = setTimeout(() => {
    const isSearch = search && search?.length > 0 ? `/search?search=${search}` : ''
      fetch(DOMAIN + '/movies' + isSearch , {
      "method" : "GET",
    })
    .then((response) => response.json())
    .then(({data}) => {
      setData(data)
      setIsLoading(false)
    })

    }, 1500);

    return () => clearTimeout(interval);

    
  },[search])


  const result = useMemo<ReturnType<UseFetchData>>(
    () => ({
      data,
      isLoading,
    }),
    [data, isLoading],
  )

  return result
}
