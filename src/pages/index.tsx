import Container from '@mui/material/Container';

import React, {useEffect, useRef, useState} from 'react'
import ReactHowler from 'react-howler'
import {Typography} from "@mui/material";
import {Pause, PlayArrow} from "@mui/icons-material";
import Button from "@mui/material/Button";

const Index: React.FC = () => {

  // const [isOn, toggleIsOn] = useToggle(true);
  const [isPlaying, togglePlaying] = useState(false);

  const musicFile = 'assets/music/sound.ogg'

  const [duration, setDuration] = useState(0);
  const [seek, setSeek] = useState(0);
  const [isLoaded, setLoaded] = useState(false);

  let player = useRef<ReactHowler>(null);

  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setSeek(player.current.seek());
      }, 100);
    } else if (!isPlaying && seek !== 0) {
      clearInterval(interval);
      setSeek(0)
    }
    return () => clearInterval(interval);
  }, [isPlaying, seek]);

  const handleClick = () => {
    togglePlaying(!isPlaying)
  }

  function handleOnEnd() {
    console.log('onEnd')
    if(isPlaying) {
      togglePlaying(!isPlaying)
    }
  }
  function handleOnLoad() {
    console.log('onLoad')
    if(duration === 0) {
      setDuration(player.current.duration())
    }
    if (!isLoaded) {
      setLoaded(true)
    }
  }

  function handlePause() {
    console.log('onPause')
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="body2" color="text.secondary" align="center">
        My best player
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        Duration: {duration.toFixed(2)} Seek: {seek.toFixed(2)} isLoaded: {isLoaded ? 'loaded' : 'loading'}
      </Typography>
      <Button onClick={() => handleClick()}>
        {isPlaying ? <Pause/> : <PlayArrow/>}
      </Button>
      <ReactHowler
        src={musicFile}
        playing={isPlaying}
        onPause={() => handlePause()}
        onEnd={() => handleOnEnd()}
        onLoad={() => handleOnLoad()}
        ref={(ref) => (player.current = ref)}
      />
    </Container>)
}
export default Index
