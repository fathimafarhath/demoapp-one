import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, makeStyles, Typography } from "@material-ui/core";


const useStyles = makeStyles((theme)=>({
    card:{
        marginBottom:theme.spacing(5)
    },
    media:{
        height:250,
        [theme.breakpoints.down("sm")]:{
            height:150,

        },
    },
  
}))

const Post = () =>{
  const classes=useStyles()
  return (
    <Card className={classes.card}>
        <CardActionArea>
            <CardMedia className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="my post"
            />
            <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica  Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica  Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica species, ranging across all continents except Antarctica  Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica  Lizards are a widespread group of squamate reptiles, with over 6,000
                
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small" color="primary">Share</Button>
                <Button size="small" color="primary">Learn More</Button>
            </CardActions>
            
            
        </CardActionArea>
    </Card>
  )
 
    
  
}

export default Post;
