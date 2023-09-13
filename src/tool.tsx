import * as React from 'react';
  import Card from '@mui/material/Card';
  import CardActions from '@mui/material/CardActions';
  import CardContent from '@mui/material/CardContent';
  import CardMedia from '@mui/material/CardMedia';
  import Button from '@mui/material/Button';
  import Typography from '@mui/material/Typography';

  interface AppCard {
    name: string;
    url: string;
    desc: string;
  }
export default function ToolCard ({tool}: any) {
    console.log(tool)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <div className='item'>

          <div className='overlay'></div>
          <iframe className='tool' src={tool.url} ></iframe>
          </div>
       
      <CardContent>
        <Typography style={{textTransform:'capitalize'}} gutterBottom variant="h5" component="div">
          {tool.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {tool.desc}
        </Typography>
      </CardContent>
      <CardActions style={{width: '100%',justifyContent: 'center'}}>
        <a target='_blank' href={tool.url}>
        <Button size="small">Learn More</Button>
        </a>
      </CardActions>
    </Card>
  );
}