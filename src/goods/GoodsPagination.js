import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { GlobalContext } from '../variables/GlobalState';
import Button from '@material-ui/core/Button';
import TableHead from '@material-ui/core/TableHead';
import GoodsEdit from './GoodsEdit';

const useStyles1 = makeStyles((theme) => ({
	root: {
		flexShrink: 0,
		marginLeft: theme.spacing(2.5)
	}
}));

function TablePaginationActions(props) {
	const classes = useStyles1();
	const theme = useTheme();
	const { count, page, rowsPerPage, onChangePage } = props;

	const handleFirstPageButtonClick = (event) => {
		onChangePage(event, 0);
	};

	const handleBackButtonClick = (event) => {
		onChangePage(event, page - 1);
	};

	const handleNextButtonClick = (event) => {
		onChangePage(event, page + 1);
	};

	const handleLastPageButtonClick = (event) => {
		onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
	};

	return (
		<div className={classes.root}>
			<IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
				{theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
			</IconButton>
			<IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
				{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
			</IconButton>
			<IconButton
				onClick={handleNextButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="next page"
			>
				{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
			</IconButton>
			<IconButton
				onClick={handleLastPageButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="last page"
			>
				{theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
			</IconButton>
		</div>
	);
}

TablePaginationActions.propTypes = {
	count: PropTypes.number.isRequired,
	onChangePage: PropTypes.func.isRequired,
	page: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired
};

const useStyles2 = makeStyles({
	table: {
		minWidth: 500
	}
});

export default function GoodsPagination() {
	const { agoods, getAGoods, goods, getGoods, removeGoods } = useContext(GlobalContext);
	const [ modal, setModal ] = useState(false);
	const [ detail, setDetail ] = useState([]);

	const handleDetail = (data) => {
		setDetail(data.goods_id);
		setModal(true);
		getAGoods(data.goods_id);
		// console.log(getAGoods);
	};

	const handleClose = () => {
		setModal(false);
	};

	useEffect(() => {
		getGoods();
	}, []);

	const handleDelete = (id) => {
		removeGoods(id);
	};

	// console.log(goods);

	const classes = useStyles2();
	const [ page, setPage ] = React.useState(0);
	const [ rowsPerPage, setRowsPerPage ] = React.useState(5);

	const emptyRows = rowsPerPage - Math.min(rowsPerPage, goods.length - page * rowsPerPage);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<div>
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="custom pagination table">
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
						{(rowsPerPage > 0
							? goods.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							: goods).map((row) => (
							<TableRow key={row.goods_id}>
								<TableCell>{row.goods_id}</TableCell>
								<TableCell>{row.goods_name}</TableCell>
								<TableCell>{row.goods_quantity}</TableCell>
								<TableCell>{row.goods_capacity}</TableCell>
								<TableCell>{row.warehouse_id}</TableCell>
								<TableCell align="right">
									<Button onClick={() => handleDetail(row)} variant="contained" color="primary">
										Edit
									</Button>
									<Button
										variant="contained"
										color="secondary"
										onClick={() => handleDelete(row.goods_id)}
									>
										Delete
									</Button>
								</TableCell>
							</TableRow>
						))}

						{emptyRows > 0 && (
							<TableRow style={{ height: 53 * emptyRows }}>
								<TableCell colSpan={6} />
							</TableRow>
						)}
					</TableBody>
					<TableFooter>
						<TableRow>
							<TablePagination
								rowsPerPageOptions={[ 5, 10, 25, { label: 'All', value: -1 } ]}
								colSpan={3}
								count={goods.length}
								rowsPerPage={rowsPerPage}
								page={page}
								SelectProps={{
									inputProps: { 'aria-label': 'rows per page' },
									native: true
								}}
								onChangePage={handleChangePage}
								onChangeRowsPerPage={handleChangeRowsPerPage}
								ActionsComponent={TablePaginationActions}
							/>
						</TableRow>
					</TableFooter>
				</Table>
			</TableContainer>
			<GoodsEdit modal={modal} id={detail} closeModal={handleClose} />
		</div>
	);
}
