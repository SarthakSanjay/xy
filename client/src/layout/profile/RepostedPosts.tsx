import { useContext, useEffect, useState } from "react"
import { tweet } from "../types/tweet"
import axios from "axios"
import useLoading from "@/hooks/useLoading"
import Tweet from "../content/Tweet"
import Loading from "@/components/Loading"
import { TOKEN } from "@/utils/constant"
import { stateContext } from "@/App"

const RepostedPosts = () => {
    const [tweet , setTweet] = useState([])
    const { isLoading, setLoading } = useLoading();
    const {setTotal,setText} = useContext(stateContext)
    console.log('reposted tweets',tweet);
    useEffect(()=>{
        setLoading(true)
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/repost/tweets`,{
            headers:{
                Authorization :`Bearer ${TOKEN}`
            }
        })
        .then((res) => {
            setTweet(res.data.tweet)
            setTotal(res.data.tweet.length)
            setText("Reposts")
            setLoading(false)
        })
    },[])
  return (
    <div>
         {!isLoading ? (
          tweet.map((tweetObj:{tweet:tweet}) => {
            console.log(tweetObj.tweet);
            return <Tweet key={tweetObj.tweet.id} tweet={tweetObj.tweet} isTweet={true}  />;
          })
        ) : (
          <Loading />
        )}
    </div>
  )
}

export default RepostedPosts