import { useContext, useEffect, useState } from "react"
import { tweet } from "../types/tweet"
import axios from "axios"
import useLoading from "@/hooks/useLoading"
import Tweet from "../content/Tweet"
import Loading from "@/components/Loading"
import { TOKEN } from "@/utils/constant"
import { stateContext } from "@/App"

const Replies = () => {
    const [comment , setComment] = useState([])
    const { isLoading, setLoading } = useLoading();
    const {setTotal,setText} = useContext(stateContext)
    console.log('replies comment',comment);
    useEffect(()=>{
        setLoading(true)
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/comment/replies`,{
            headers:{
                Authorization :`Bearer ${TOKEN}`
            }
        })
        .then((res)=>{
            setComment(res.data.comments)
            setTotal(res.data.comments.length)
            setText('Replies')
            setLoading(false)
        })
    },[])
  return (
    <div>
         {!isLoading ? (
          comment.map((tweet:tweet) => {
            return <Tweet key={tweet.id} tweet={tweet} isComment={true}  />;
          })
        ) : (
          <Loading />
        )}
    </div>
  )
}

export default Replies