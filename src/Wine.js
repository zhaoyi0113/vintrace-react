import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useParams, Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign: 'center',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Wine = ({ wineryData }) => {
  const classes = useStyles();
  const { lotCode } = useParams('lotCode');
  const winery = wineryData.find((data) => data.lotCode === lotCode);
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {lotCode}
        </Typography>
        <Typography variant="h5" component="h2">
          {winery.description || ''}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {winery.volume}
        </Typography>
        <Typography variant="body2" component="p">
          {winery.tankCode}
        </Typography>
        <Typography variant="body2" component="p">
          {winery.productState}
        </Typography>
        <Typography variant="body2" component="p">
          {winery.ownerName}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/">
          <Button size="small">Go Back</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

const mapStateToProps = (state, props) => {
  return {
    wineryData: state.wineryData,
  };
};

export default connect(mapStateToProps)(Wine);
