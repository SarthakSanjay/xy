import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const ProfileNavbar = () => {
    const navigate = useNavigate()
  return (
    <div className="h-20 w-full flex">
        <Button className="w-full h-14 rounded-none" variant={"navigation"}
        onClick={()=>{navigate('/profile')}}>Posts</Button>
        <Button className="w-full h-14 rounded-none" variant={"navigation"}
        onClick={()=>{navigate('/profile/repost')}}>Reposts</Button>
        <Button className="w-full h-14 rounded-none" variant={"navigation"}
        onClick={()=>{navigate('/profile/replies')}}>Replies</Button>
        <Button className="w-full h-14 rounded-none" variant={"navigation"}
        onClick={()=>{navigate('/profile/likes')}}>Likes</Button>
    </div>
  )
}

export default ProfileNavbar