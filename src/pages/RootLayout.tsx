import { Box, Container, Flex, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import { RiCopyrightLine } from 'react-icons/ri';
import ScrollToHashElement from '../components/ScrollToHashElement';

const RootLayout = () => {
	return (
		<Box bgColor="primary" textColor="secondary">
			<Container as="main" maxW={{ base: '48rem', md: '60rem', lg: '90rem' }} px="2%">
				<ScrollToHashElement />
				<Flex gap={{ base: '2rem' }} w="100%" justifyContent="center">
					<Box maxW="13.75rem" w="15%" display={{ base: 'none', md: 'block' }}>
						<SideBar />
					</Box>
					<Flex flexDirection="column" px="0" w="80%">
						<Image
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Hololive_Production_logo.svg/512px-Hololive_Production_logo.svg.png"
							alt="logo"
							objectFit="contain"
							h="5rem"
						/>
						<Outlet />
						<HStack alignSelf="center" w="fit-content">
							<Text>{'Copyright'}</Text>
							<RiCopyrightLine />
							<Text>{'2023 Owner. \u00A0All rights reserved'}</Text>
						</HStack>
					</Flex>
				</Flex>
			</Container>
		</Box>
	);
};

export default RootLayout;
