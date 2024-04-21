import UserAvatar from "@/components/UserAvatar"
import { Repeat2, UserRound } from "lucide-react"
import { IoMdHeart } from "react-icons/io"

interface NMProp {
       noti : Noti
  }
export interface Noti {
    id:number,
    type:string,
    user:{
      fullname:string
    },
    tweet: {
      text:string
    }
}
const NotificationMessage :React.FC<NMProp>  = ({noti}) => {
    console.log('notificaiton', noti);
  return (
    <div className="text-white h-max border w-full px-4 hover:bg-sky-500/10">
              <div className=" w-full flex justify-start gap-3 py-3">
                {noti.type === "Liked" ? 
                <IoMdHeart className="text-pink-500 h-8 w-8" /> 
                :
                
                    noti.type === "Reposted" ?
                    <Repeat2  className="text-green-500 w-8 h-8"/>
                    
                    :
                    <UserRound className="text-sky-500 w-8 h-8" />
                
                }
                <UserAvatar />
              </div>
              <div className="pl-12">
                <span className="font-bold">{noti.user.fullname}</span> {noti.type} {noti.tweet ? "your tweet ": "you"}
              </div>
              <div className="pl-12 text-gray-500">
                {noti.tweet?.text}
              </div>
          </div>
  )
}

export default NotificationMessage