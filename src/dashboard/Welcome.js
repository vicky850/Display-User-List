import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import { withStyles } from '@material-ui/core/styles';

import { translate } from 'react-admin';

const styles = {
    media: {
        height: '21em',
    }
};

const mediaUrl = `https://www.techsaga.co.in/assets/images/crm-solution.jpg`;

const Welcome = ({ classes, translate }) => (
    <Card>
        <CardMedia image={mediaUrl} className={classes.media} />
        <CardContent>
            <Typography style={{textAlign: 'justify'}} variant="headline" component="h2">
                {translate('pos.dashboard.welcome.title')}
            </Typography>
            <Typography component="p">
                {translate('pos.dashboard.welcome.subtitle')}
            </Typography>
        </CardContent>
    </Card>
);

export default withStyles(styles)(translate(Welcome));
