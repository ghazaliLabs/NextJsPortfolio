import React from 'react';
import { Card, CardContent, CardHeader, Avatar, Typography } from '@mui/material';

const Testimonial1 = ({ name, position, testimony, imageSrc }) => {
  return (
    <Card sx={{ maxWidth: 400, marginBottom: '10px' }}>
      <CardHeader
        avatar={<Avatar alt={name} src={imageSrc} />}
        title={name}
        subheader={position}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {testimony}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Testimonial1;
