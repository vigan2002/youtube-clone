import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams()

  console.log(channelDetail, videos);

  useEffect(() => {
    fetchFromAPI(`channels?.part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items));
  },[id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(247,58,0,1) 22%, rgba(119,0,255,1) 100%)',
          zIndex: 10,
          height: '300px',
        }}  
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-140px"/>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr: { sm: '100px'}}}/>
          <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail