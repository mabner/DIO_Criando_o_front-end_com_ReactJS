import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';

const Header = () => {
	return (
		<Grid
			container
			direction='row'
			justify='space-between'
			alignItems='center'
			xs={12}
		>
			<Typography variant='h4'>
				<span class='material-icons'>set_meal</span>Marcoshop Aquarinator
			</Typography>
			<Link to='/'>
				<Button color='primary'>
					<span class='material-icons'>home</span>Home
				</Button>
			</Link>
			<Link to='/contato'>
				<Button color='primary'>
					<span class='material-icons'>email</span>Contato
				</Button>
			</Link>
			<Cart />
		</Grid>
	);
};

export default Header;
