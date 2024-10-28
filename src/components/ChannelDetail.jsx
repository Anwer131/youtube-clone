import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import {Videos, ChannelCard} from './index'
import { fetchFromAPI } from "../utils/fetchFromAPI"


const ChannelDetail = () => {
  const [videos,setVideos] = useState([]);
  const [channelDetail,setChannelDetail] = useState([]);
  const {id} = useParams();
  console.log(channelDetail)
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0]));
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideos(data?.items));
  }, [id])
  
  return (
    <Box minHeight='95vh'>
      <Box sx={{alignContent:'center'}}>
        <div style={{background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(253,45,45,1) 100%)',zIndex:10,height:'250px'}}/>
        <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{mr:{sm:'100px'}}}/>
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail