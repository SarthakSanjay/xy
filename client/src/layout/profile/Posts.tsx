import { useContext, useEffect, useState } from "react"
import { tweet } from "../types/tweet"
import axios from "axios"
import useLoading from "@/hooks/useLoading"
import Tweet from "../content/Tweet"
import Loading from "@/components/Loading"
import { TOKEN } from "@/utils/constant"
import { stateContext } from "@/App"

const Posts = () => {
    const [tweet , setTweet] = useState([])
    const { isLoading, setLoading } = useLoading();
    const {setTotal,setText} = useContext(stateContext)
    useEffect(()=>{
        setLoading(true)
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/tweet/user/tweets`,{
            headers:{
                Authorization :`Bearer ${TOKEN}`
            }
        })
        .then((res)=>{
            setTweet(res.data.tweet)
            setTotal(res.data.tweet.length)
            setText('Posts')
            setLoading(false)
        })
    },[])
  return (
    <div>
         {!isLoading ? (
          tweet.map((tweet: tweet) => {
            return <Tweet key={tweet.id} tweet={tweet} isTweet={true}  />;
          })
        ) : (
          <Loading />
        )}
    </div>
  )
}

export default Posts