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
	const { agoods, updateGoods } = useContext(GlobalContext);

	const [ disable, setDisable ] = useState(true);

	const [ selected, setSelected ] = useState([]);

	const handleClose = () => {
		props.closeModal();
		setDisable(true);
	};

	const handleEdit = () => {
		setDisable(false);
		console.log('selected', selected);
	};
	const handleSave = () => {
		updateGoods(agoods.goods_id, selected);
		setDisable(true);
	};

	const handleChange = (key, val) => {
		setSelected({ ...selected, [key]: val });
	};

	useEffect(
		() => {
			console.log('agoods', agoods);
			setSelected(agoods);
		},
		[ agoods ]
	);

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
						value={selected.goods_id}
						fullWidth
					/>
					<TextField
						InputProps={{
							readOnly: disable
						}}
						autoFocus
						margin="dense"
						label="Goods Name"
						fullWidth
						variant="outlined"
						value={selected.goods_name}
						onChange={(e) => handleChange('goods_name', e.target.value)}
					/>
					<TextField
						multiline
						InputProps={{
							readOnly: disable
						}}
						autoFocus
						margin="dense"
						label="Goods Quantity"
						fullWidth
						variant="outlined"
						value={selected.goods_quantity}
						onChange={(e) => handleChange('goods_quantity', e.target.value)}
					/>
					<TextField
						multiline
						InputProps={{
							readOnly: disable
						}}
						autoFocus
						margin="dense"
						label="Goods Capacity"
						variant="outlined"
						fullWidth
						value={selected.goods_capacity}
						onChange={(e) => handleChange('goods_capacity', e.target.value)}
					/>
					<TextField
						multiline
						InputProps={{
							readOnly: disable
						}}
						autoFocus
						margin="dense"
						label="Warehouse ID"
						variant="outlined"
						fullWidth
						value={selected.warehouse_id}
						onChange={(e) => handleChange('warehouse_id', e.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					{disable ? (
						<div>
							<Button onClick={handleClose} color="primary">
								OK
							</Button>
							<Button color="primary" onClick={handleEdit}>
								Edit
							</Button>
						</div>
					) : (
						<div>
							<Button onClick={handleClose} color="primary">
								CANCEL
							</Button>
							<Button color="primary" onClick={handleSave}>
								Save
							</Button>
						</div>
					)}
				</DialogActions>
			</Dialog>
		</div>
	);
}
export default GoodsEdit;
