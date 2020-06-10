import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Paper,
	Card,
	CardActions,
	CardHeader,
	CardContent,
	Button,
	Divider,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles((theme) => ({
	title: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
	},
	head: {
		backgroundColor: 'rgba(1,57,152,0.5)',
		color: '#FFF',
	},
	content: {
		flexGrow: 1,
		margin: theme.spacing(3),
	},
	cardaction: {
		justifyContent: 'center',
	},
	link: {
		textDecoration: 'None',
	},
}));

function HomeTable(props) {
	const classes = useStyles();
	const { title, linkTo, columns, data } = props;

	return (
		<Paper className={classes.content}>
			<Card>
				<CardHeader className={classes.title} title={title} color="primary" />
				<Divider />
				<CardContent>
					<div>
						<Table>
							<TableHead className={classes.head}>
								<TableRow>
									{columns.map((item) => {
										return <TableCell>{item.title}</TableCell>;
									})}
								</TableRow>
							</TableHead>
							<TableBody>
								{data.map((items, index) => {
									const rowData = [];
									Object.values(items).map((value) => {
										rowData.push(<TableCell>{value}</TableCell>);
									});
									return <TableRow hover>{rowData}</TableRow>;
								})}
							</TableBody>
						</Table>
					</div>
				</CardContent>
				<Divider />
				<CardActions className={classes.cardaction}>
					<Link to={linkTo} className={classes.link}>
						<Button color="primary" size="small" variant="text">
							View all <ArrowRightIcon />
						</Button>
					</Link>
				</CardActions>
			</Card>
		</Paper>
	);
}

export default HomeTable;
