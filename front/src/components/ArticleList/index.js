import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  media: {
    height: 100,
  },
});

const ArticleList = ({ article }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <Link to={`/article/${article?.id}`}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={article?.image}
              title={article?.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {article?.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </>
  );
};

export default ArticleList;
