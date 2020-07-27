import React, { useContext } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { GlobalContext } from '../variables/GlobalState';

function preventDefault(event) {
	event.preventDefault();
}

const useStyles = makeStyles({
	depositContext: {
		flex: 1
	}
});

export default function Deposits() {
	const { goods } = useContext(GlobalContext);

	const classes = useStyles();
	return (
		<React.Fragment>
			<Title>Data</Title>
			<Typography component="p" variant="h6">
				Total Data Goods : {goods.length}
			</Typography>
			<Typography component="p" variant="h6">
				{/* Total Data Goods in WH0001 : {goods.length} */}
			</Typography>
			<Typography color="textSecondary" className={classes.depositContext} />
		</React.Fragment>
	);
}
