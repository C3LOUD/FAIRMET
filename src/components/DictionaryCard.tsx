import {
	Box,
	Card,
	CardBody,
	Image,
	Text,
	Stack,
	StackDivider,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Brand } from '../types';

type Props = {
	brand: Brand;
	viewDetail: (e: React.MouseEvent) => void;
};

const DictionaryCard: React.FC<Props> = ({ brand, viewDetail }) => {
	const [isShow, setIsShow] = useState<boolean>(false);
	const toggleDetail = () => setIsShow(!isShow);
	return (
		<Card
			border="none"
			shadow="none"
			rounded="none"
			role="group"
			transition="all 0.3s ease"
		>
			<CardBody p="0" position="relative" overflow="hidden">
				<Box
					cursor="pointer"
					overflow="hidden"
					position="relative"
					zIndex="5"
					onClick={toggleDetail}
				>
					<Box
						_groupHover={{ transform: 'scale(105%)' }}
						transition="all 0.3s ease"
					>
						<Image
							objectFit="cover"
							src={`/image/Brand/${brand.title}/logo.png`}
							alt={brand.title}
						/>
					</Box>
					<Box
						position="absolute"
						transition="all 0.3s ease"
						zIndex="10"
						bgColor="shade.500"
						bottom="-100%"
						w="100%"
						h="100%"
						transform={`${isShow ? 'translateY(-100%)' : 'translateY(0)'}`}
					></Box>
				</Box>
				<Text
					position="relative"
					zIndex="5"
					align="center"
					fontWeight="bold"
					_groupHover={{ bgColor: 'tint.500' }}
				>
					{brand.title}
				</Text>
				<Box
					borderWidth={`${isShow ? '1px 0px' : '0px'}`}
					borderColor="gray"
					position="relative"
					height={`${isShow ? 'max-content' : '0'}`}
					transition="all 0.3s ease"
					transform={`${isShow ? 'translateY(0%)' : 'translateY(-100%)'}`}
					zIndex="1"
					px="4"
					py={`${isShow ? '4' : '0'}`}
				>
					<Stack divider={<StackDivider borderColor="shade.900" />} spacing="1">
						<Box>
							<Text p="2" fontSize="14" align="left">
								Bags, Watches, Nail Tools
							</Text>
						</Box>
						<Box>
							<Text p="2" fontSize="14" align="left">
								South Korea, United Kingdom, Germany
							</Text>
						</Box>
						<Box>
							<Text p="2" fontSize="14" align="left">
								Hers, I don't care
							</Text>
						</Box>
					</Stack>
					<Text
						id={brand.id}
						fontSize="14"
						align="right"
						position="absolute"
						right="0"
						bottom="0"
						fontStyle="italic"
						_hover={{ fontWeight: 'bold' }}
						cursor="pointer"
						display={`${isShow ? 'block' : 'none'}`}
						onClick={viewDetail}
					>
						View More
					</Text>
				</Box>
			</CardBody>
		</Card>
	);
};

export default DictionaryCard;
