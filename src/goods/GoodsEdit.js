import React, { useEffect, useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { GlobalContext } from '../variables/GlobalState';

import { Typography } from '@material-ui/core';

function GoodsEdit(props) {
	// const { getAGoods } = useContext(GlobalContext);
	const handleClose = () => {
		props.closeModal();
	};

	const [ detail, setDetail ] = useState({
		goods_id: '',
		goods_name: '',
		goods_quantity: '',
		goods_capacity: '',
		warehouse_id: ''
	});

	useEffect(() => {
		console.log(props.detail.goods_id);
		setDetail({
			goods_id: props.detail.goods_id,
			goods_name: props.detail.goods_name,
			goods_quantity: props.detail.goods_quantity,
			goods_capacity: props.detail.goods_capacity,
			warehouse_id: props.detail.warehouse_id
		});
		console.log(detail);
	}, []);

	return (
		<div>
			<Dialog open={props.modal} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Details</DialogTitle>
				<DialogContent>
					<TextField
						InputProps={{
							readOnly: true
						}}
						autoFocus
						margin="dense"
						label="Goods ID"
						variant="outlined"
						value={props.detail.goods_id}
						fullWidth
					/>
					<TextField
						InputProps={{
							readOnly: true
						}}
						autoFocus
						margin="dense"
						label="Goods Name"
						fullWidth
						variant="outlined"
						value={props.detail.goods_name}
					/>
					<TextField
						multiline
						InputProps={{
							readOnly: true
						}}
						value={props.detail.goods_quantity}
						autoFocus
						margin="dense"
						label="Goods Quantity"
						fullWidth
						variant="outlined"
					/>
					<TextField
						multiline
						InputProps={{
							readOnly: true
						}}
						value={props.detail.goods_capacity}
						autoFocus
						margin="dense"
						label="Goods Capacity"
						variant="outlined"
						fullWidth
					/>
					<TextField
						multiline
						InputProps={{
							readOnly: true
						}}
						value={props.detail.warehouse_id}
						autoFocus
						margin="dense"
						label="Warehouse ID"
						variant="outlined"
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						OK
					</Button>
					<Button color="primary">Edit</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
export default GoodsEdit;
