import React, { useContext } from 'react';
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

	const handleSubmit = () => {
		let goods_id = document.getElementById('goods_id').value;
		let goods_name = document.getElementById('goods_name').value;
		let goods_quantity = document.getElementById('goods_capacity').value;
		let goods_capacity = document.getElementById('goods_quantity').value;
		let warehouse_id = document.getElementById('warehouse_id').value;

		const newBody = {
			goods_id: goods_id,
			goods_name: goods_name,
			goods_quantity: goods_quantity,
			goods_capacity: goods_capacity,
			warehouse_id: warehouse_id
		};

		addGoods(newBody);
	};
	return (
		<div>
			<Card>
				<CardContent>
					<Grid>
						<TextField
							style={{ marginRight: '20px', marginBottom: '20px' }}
							id="goods_id"
							label="Goods ID"
							variant="outlined"
						/>

						<TextField
							style={{ marginBottom: '20px' }}
							id="goods_name"
							label="Goods Name"
							variant="outlined"
						/>
						<br />
						<TextField
							style={{ marginRight: '20px', marginBottom: '20px' }}
							id="goods_quantity"
							label="Goods Quantity"
							variant="outlined"
						/>

						<TextField
							style={{ marginBottom: '20px' }}
							id="goods_capacity"
							label="Goods Capacity"
							variant="outlined"
						/>
						<br />
						<TextField
							style={{ width: '60%', marginBottom: '20px' }}
							id="warehouse_id"
							label="Warehouse ID"
							variant="outlined"
						/>
						<br />
						<Button variant="contained" color="primary" onClick={handleSubmit}>
							ADD
						</Button>
					</Grid>
				</CardContent>
			</Card>
		</div>
	);
}

export default GoodsCard;
