import {
	Box,
	Button,
	Flex,
	Image,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from '@chakra-ui/react';
import { faker } from '@faker-js/faker';
import React from 'react';
import { Brand, TagKey } from '../types';
import TagList from './TagList';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

type Props = {
	isOpen: boolean;
	onClose: () => void;
	brand: Brand;
	previousHandler: (e: React.MouseEvent) => void;
	nextHandler: (e: React.MouseEvent) => void;
};

const imageGridMinH = 60;
const productTagList: TagKey[] = [
	'Style, Occasion & Dressing Type',
	'Function & Activity',
	'Item & Category',
	'Specific Item',
];
const otherTagList: TagKey[] = [
	'Sort',
	'Field',
	'Country & Region',
	'Price',
	'Gender',
];

const DictionaryModal: React.FC<Props> = ({
	isOpen,
	onClose,
	brand,
	nextHandler,
	previousHandler,
}) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent
				my="auto"
				rounded="none"
				h="90vh"
				w="90vw"
				maxW="80rem"
				px="2rem"
				py="1rem"
				position="relative"
			>
				<Button
					variant="unstyled"
					textColor="secondary"
					position="absolute"
					fontSize="40"
					_hover={{ textColor: 'shade.100' }}
					rounded="none"
					display="flex"
					justifyContent="center"
					alignItems="center"
					transform="auto"
					top="50%"
					translateY="-50%"
					left="0"
					translateX="-100%"
					p="0"
					onClick={previousHandler}
				>
					<FaChevronLeft />
				</Button>
				<Button
					variant="unstyled"
					textColor="secondary"
					_hover={{ textColor: 'shade.100' }}
					position="absolute"
					fontSize="40"
					rounded="none"
					display="flex"
					justifyContent="center"
					alignItems="center"
					transform="auto"
					top="50%"
					translateY="-50%"
					right="0"
					translateX="100%"
					p="0"
					onClick={nextHandler}
				>
					<FaChevronRight />
				</Button>

				<Box overflow="hidden" h="100%" w="100%">
					<Flex
						overflowY="auto"
						h="100%"
						css={{
							'&::-webkit-scrollbar': {
								display: 'none',
							},
						}}
					>
						<Flex
							flex="2"
							direction="column"
							gap="1rem"
							minH={`${imageGridMinH}rem`}
						>
							<Box flex={`2 1 ${imageGridMinH / 2}rem`} minH="0" minW="0">
								<Image
									src={faker.image.url()}
									objectFit="cover"
									w="100%"
									h="100%"
									objectPosition="center"
								/>
							</Box>
							<Box flex={`1 1 ${imageGridMinH / 4}rem`} minH="0" minW="0">
								<Image
									src={faker.image.url()}
									w="100%"
									h="100%"
									objectFit="cover"
									objectPosition="center"
								/>
							</Box>
							<Flex flex={`1 1 ${imageGridMinH / 4}rem`} minH="0" minW="0">
								<Box flexBasis="50%">
									<Image
										w="100%"
										h="100%"
										src={faker.image.url()}
										objectFit="cover"
										objectPosition="center"
									/>
								</Box>
								<Box flexBasis="50%">
									<Image
										w="100%"
										h="100%"
										src={faker.image.url()}
										objectFit="cover"
										objectPosition="center"
									/>
								</Box>
							</Flex>
						</Flex>
						<Box flex="3">
							<ModalHeader>{brand.title}</ModalHeader>
							<ModalBody>
								<Tabs>
									<TabList display="flex">
										<Tab
											flex="1"
											_selected={{
												textColor: 'secondary',
												borderBottom: 'solid 1px',
											}}
											textColor="shade.500"
										>
											{'Introduction'}
										</Tab>
										<Tab
											flex="1"
											_selected={{
												textColor: 'secondary',
												borderBottom: 'solid 1px',
											}}
											textColor="shade.500"
										>
											{'Personality \u0026 Product'}
										</Tab>
										<Tab
											flex="1"
											_selected={{
												textColor: 'secondary',
												borderBottom: 'solid 1px',
											}}
											textColor="shade.500"
										>
											{'Other Detail \u0026 Link'}
										</Tab>
									</TabList>

									<TabPanels>
										<TabPanel
											display="flex"
											px="2rem"
											py="3rem"
											gap="1rem"
											flexDirection="column"
										>
											{brand?.content ? (
												brand.content.split('\n').map((section, i) => (
													<Text key={i} textColor="secondary">
														{section}
													</Text>
												))
											) : (
												<Text
													textAlign="center"
													fontSize={18}
													textColor="shade.500"
													opacity="20%"
													fontWeight={700}
													fontStyle="italic"
												>
													{'Empty'}
												</Text>
											)}
										</TabPanel>
										<TabPanel>
											<Flex flexDirection="column" gap="2rem">
												{productTagList.map((title, i) => (
													<TagList
														key={i}
														title={title}
														value={brand.tags[title]}
													/>
												))}
											</Flex>
										</TabPanel>
										<TabPanel>
											<Flex flexDirection="column" gap="2rem">
												{otherTagList.map((title, i) => (
													<TagList
														key={i}
														title={title}
														value={brand.tags[title]}
													/>
												))}
											</Flex>
										</TabPanel>
									</TabPanels>
								</Tabs>
							</ModalBody>
						</Box>
					</Flex>
				</Box>
			</ModalContent>
		</Modal>
	);
};

export default DictionaryModal;
