import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { BookCardLayout } from '../components/BookCard';
import BookCarousel from '../components/BookCarousel';
import BookFooterSection from '../components/BookFooterSection';
import BookSection from '../components/BookSection';
import BrandCarousel from '../components/BrandCarousel';
import HeroCarousel from '../components/HeroCarousel';
import ReferenceSearch, { PaginationType } from '../components/ReferenceSearch';

const Landing = () => {
	return (
		<Container px="0" maxW="100%">
			<Box as="section" id="hero" w="100%" mb="5rem">
				<HeroCarousel />
			</Box>
			<Box as="section" id="reference-search" mb="8rem">
				<Heading mb="2rem">
					{'Reference Search \u3010Collection コレクション\u3011'}
				</Heading>
				<ReferenceSearch type={PaginationType.infinite} initLimit={4} />
			</Box>
			<Box as="section" id="book" mb="5rem">
				<Heading borderBottom="2px" mb="2rem">
					{'Book 記事一覧 \uFF08TOP: Colume, Book, News\uFF09'}
				</Heading>
				<Text
					fontStyle="italic"
					fontWeight="500"
					fontSize="20"
					textColor="shade.500"
				>
					HIGHLIGHTS
				</Text>
				<Box bgColor="tint.500">
					<BookCarousel type={BookCardLayout.LandscapeLeft} />
				</Box>
				<Box h="3rem" />
				<BookSection />
				<Box h="5rem" />
				<Heading>{'Brand コレクション'}</Heading>
				<Box h="1rem" />
				<BrandCarousel />
				<Box h="3rem" />
				<BookFooterSection />
			</Box>
		</Container>
	);
};

export default Landing;
