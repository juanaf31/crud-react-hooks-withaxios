import React, { useContext, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../dashboard/Title';
import Button from '@material-ui/core/Button';
import { GlobalContext } from '../variables/GlobalState';

const GoodList = () => {
	const { goods, getGoods, removeGoods } = useContext(GlobalContext);

	useEffect(() => {
		getGoods();
	}, []);

	const handleDelete = (id) => {
		removeGoods(id);
	};

	if (goods.length) {
		return (
			<div>
				<Title>Goods</Title>
				<Table size="small">
					<TableHead>
						<TableRow>
							<TableCell>Goods ID</TableCell>
							<TableCell>Goods Name</TableCell>
							<TableCell>Goods Quantity </TableCell>
							<TableCell>Goods Capacity</TableCell>
							<TableCell>Warehouse ID</TableCell>
							<TableCell align="right">Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{goods.map((goods) => (
							<TableRow key={goods.goods_id}>
								<TableCell>{goods.goods_id}</TableCell>
								<TableCell>{goods.goods_name}</TableCell>
								<TableCell>{goods.goods_quantity}</TableCell>
								<TableCell>{goods.goods_capacity}</TableCell>
								<TableCell>{goods.warehouse_id}</TableCell>
								<TableCell align="right">
									<Button variant="contained" color="primary">
										Edit
									</Button>
									<Button
										variant="contained"
										color="secondary"
										onClick={() => handleDelete(goods.goods_id)}
									>
										Delete
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		);
	} else {
		return <div>No Services</div>;
	}
};

export default GoodList;
