import React, { useContext, useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { GlobalContext } from '../variables/GlobalState';

function GoodsCard() {
	const { addGoods } = useContext(GlobalContext);

	const [ selectedGoods, setSeletedGoods ] = useState({
		goods_id: '',
		goods_name: '',
		goods_quantity: '',
		goods_capacity: '',
		warehouse_id: ''
	});

	const handleChange = (key, val) => {
		setSeletedGoods({ ...selectedGoods, [key]: val });
	};

	const handleSubmit = () => {
		addGoods(selectedGoods);
	};
	return (
		<div>
			<Card>
				<CardContent>
					<Grid>
						<form onSubmit={handleSubmit}>
							<TextField
								value={selectedGoods.goods_id}
								style={{ marginRight: '20px', marginBottom: '20px' }}
								id="goods_id"
								label="Goods ID"
								variant="outlined"
								onChange={(e) => handleChange('goods_id', e.target.value)}
							/>

							<TextField
								value={selectedGoods.goods_name}
								style={{ marginBottom: '20px' }}
								id="goods_name"
								label="Goods Name"
								variant="outlined"
								onChange={(e) => handleChange('goods_name', e.target.value)}
							/>
							<br />
							<TextField
								value={selectedGoods.goods_quantity}
								style={{ marginRight: '20px', marginBottom: '20px' }}
								id="goods_quantity"
								label="Goods Quantity"
								variant="outlined"
								onChange={(e) => handleChange('goods_quantity', e.target.value)}
							/>

							<TextField
								value={selectedGoods.goods_capacity}
								style={{ marginBottom: '20px' }}
								id="goods_capacity"
								label="Goods Capacity"
								variant="outlined"
								onChange={(e) => handleChange('goods_capacity', e.target.value)}
							/>
							<br />
							<TextField
								value={selectedGoods.warehouse_id}
								style={{ width: '60%', marginBottom: '20px' }}
								id="warehouse_id"
								label="Warehouse ID"
								variant="outlined"
								onChange={(e) => handleChange('warehouse_id', e.target.value)}
							/>
							<br />
							<Button variant="contained" color="primary" type="submit">
								ADD
							</Button>
						</form>
					</Grid>
				</CardContent>
			</Card>
		</div>
	);
}

export default GoodsCard;
