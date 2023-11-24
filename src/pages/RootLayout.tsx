import { Box, Container, Flex, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import { RiCopyrightLine } from 'react-icons/ri';
import ScrollToHashElement from '../components/ScrollToHashElement';

const RootLayout = () => {
	return (
		<Box bgColor="primary" textColor="secondary" minH="100vh">
			<Container as="main" maxW={{ base: '48rem', md: '64rem', lg: '90rem' }} bgColor="white">
				<ScrollToHashElement />
				<Flex w="100%" justifyContent="center" gap={2}>
					<Box w="20%" display={{ base: 'none', md: 'block' }}>
						<SideBar />
					</Box>
					<Flex flexDirection="column" px="0" w={{ base: '100%', md: '80%' }}>
						<Image
							src="/image/logo.svg"
							alt="logo"
							objectFit="contain"
							h="5rem"
							px={8}
							w="100%"
							align={{ base: 'left', md: 'center' }}
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
