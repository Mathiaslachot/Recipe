
import { useEffect, useMemo, useState } from 'react'
import { DOMAIN } from '../../config'
import { UseFetchDataDetail } from './useFetchDataDetail.types'

export const useFetchDataDetail: UseFetchDataDetail = (id) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<any>([])

  useEffect(() => {
    setIsLoading(true)
    fetch(`${DOMAIN}/movies/${id}` , {
      "method" : "GET",
    })
    .then((response) => response.json())
    .then((data) => {
      setData(data)
      setIsLoading(false)
    })

  },[id])


  const result = useMemo<ReturnType<UseFetchDataDetail>>(
    () => ({
      data,
      isLoading,
    }),
    [data, isLoading],
  )

  return result
}
