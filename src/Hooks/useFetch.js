import { useState, useEffect } from 'react'

import axios from '../axios/axios'
// import axios from 'axios'

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    //  const cancelTokenSource = axios.CancelToken.source()
    const abortCont = new AbortController()
    const getData = async () => {
      try {
        const { data } = await axios.get(url, {
          // cancelToken: cancelTokenSource.token,
          signal: abortCont.signal,
        })
        setData(data)
        setIsPending(false)
        console.log(data)
      } catch (err) {
        console.log(err)
        if (err.name === 'CanceledError') {
          console.log('Fetch aborted')
        } else {
          setError(err.message)
          setIsPending(false)
        }
      }
    }
    getData()

    //  return () => cancelTokenSource.cancel()
    return () => abortCont.abort()
  }, [url])

  return { data, isPending, error }
}

export default useFetch
