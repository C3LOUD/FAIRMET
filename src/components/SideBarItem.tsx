import { Box } from '@chakra-ui/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type Props = {
	direct: string;
	text: string;
};

const SideBarItem: React.FC<Props> = ({ direct, text }) => {
	const location = useLocation();
	const { hash, pathname } = location;
	return (
		<Box
			textAlign="left"
			w="100%"
			_hover={{ textDecoration: 'underline' }}
			textColor={direct === pathname + hash ? 'active' : ''}
			fontWeight={direct === pathname + hash ? '500' : '400'}
		>
			<Link to={direct}>{text}</Link>
		</Box>
	);
};

export default SideBarItem;
