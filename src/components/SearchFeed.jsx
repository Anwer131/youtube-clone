import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import {Box, Stack, Typography} from '@mui/material'
import { Videos} from './index'
import { fetchFromAPI } from "../utils/fetchFromAPI"
const SearchFeed = () => {
  const [videos,setVideos] = useState([]);
  const {searchTerm} = useParams();
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=> setVideos(data.items));
  },[searchTerm]);
  return (
    <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
      <Typography variant="h4" fontWeight='bold' mb={2} sx={{color:'white'}}>
        Search Results for: <span style={{color:'red'}}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos}/>
    </Box>
)}

export default SearchFeed