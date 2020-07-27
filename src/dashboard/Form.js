import React from 'react';
import { useTheme } from '@material-ui/core/styles';

import Title from './Title';
// import GoodsCard from '../goods/GoodsCard';
import GoodsCard from '../goods/GoodsCard';

// Generate Sales Data

export default function Form() {
	const theme = useTheme();

	return (
		<React.Fragment>
			<Title>Form Add</Title>
			<GoodsCard />
		</React.Fragment>
	);
}
