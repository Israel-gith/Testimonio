import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton, Stack, Box, Paper } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Testimonio = ({ nombre, imagen, alt, testimonio, titulo }) => {
  const [meGusta, setMeGusta] = useState(false);

  const handleLike = () => {
    setMeGusta(!meGusta);
  };

  return (
    <Stack direction={'column'}  alignItems={'center'} sx={{ marginTop: 5 }}>
      <Card sx={{
        width: { xs: '400px', sm: '430px', md: '580px' },
        textAlign: 'center',
        height: {xs:584,md:564},
      }}
      elevation={12}
      >
        <CardMedia
          component="img"
          height="380"
          image={imagen}
          alt={alt}
        />
        <CardContent>
            <Typography sx={{fontSize:17}} variant="h6">{nombre}</Typography>
            <Typography variant="caption" color="text.secondary">{titulo}</Typography> <br />
            <Box sx={{ textAlign: 'justify' }}>
            <Typography sx={{fontSize:14}} variant="subtitle" color="text.primary" >{testimonio}</Typography>
            </Box>
            <br /> 
            <Box sx={{ textAlign: 'left' }}>
          <IconButton onClick={handleLike} sx={{ alignSelf: 'flex-start' }}>
            {meGusta ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon color='error' />}
          </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Testimonio;