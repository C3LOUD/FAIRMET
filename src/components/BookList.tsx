import { Container } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import BookCard from './BookCard';

const getBooks = async () => {
	return [1, 2, 3, 4];
};

const BookList = () => {
	const [books, setBooks] = useState<any>([]);

	useEffect(() => {
		getBooks().then((res) => setBooks(res));
	}, []);

	return (
		<Container maxW="52rem" w="100%">
			{books.map((book: any, i: number) => (
				<BookCard key={i} />
			))}
		</Container>
	);
};

export default BookList;
