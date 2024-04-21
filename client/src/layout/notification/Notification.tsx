import { ScrollArea } from "@/components/ui/scroll-area";
import { TOKEN } from "@/utils/constant";
import axios from "axios";
import { useEffect, useState } from "react";
import NotificationMessage, { Noti } from "./NotificationMessage";
import ContentHeader from "../content/ContentHeader";

//this is content section
const Notification = () => {
  const [notifications , setNotifications] = useState([])
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/noti`,{
      headers:{
        Authorization: `Bearer ${TOKEN}`
      }
    }).then(res => setNotifications(res.data.latestNoti))
  },[])
  console.log(notifications);
  return (
    <ScrollArea className="w-full lg:w-[41.67%] border">
      <ContentHeader text="Notifications" />
      {
        notifications.map((noti :Noti) =>{
          return <NotificationMessage key={noti.id}  noti={noti}/>
        })
      }
    </ScrollArea>
  );
};

export default Notification;
