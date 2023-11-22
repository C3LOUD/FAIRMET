import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	breakpoints: {
		base: '0px',
		sm: '320px',
		md: '768px',
		lg: '960px',
		xl: '1440px',
	},
	fonts: {
		heading: `"Baskerville Old Face", "Yu Gothic UI", serif`,
		body: `"Gill Sans MT", "Yu Gothic UI", san-serif`,
	},
	colors: {
		primary: '#F9F9F9',
		secondary: '#2A2A2B',
		shade: {
			50: '#DADADD',
			100: '#CDCDD0',
			200: '#B5B6BA',
			300: '#9D9EA4',
			400: '#86878E',
			500: '#707178',
			600: '#59595F',
			700: '#434347',
			800: '#2C2D2F',
			900: '#161618',
			950: '#0C0C0D',
		},
		tint: {
			50: '#E8E3E3',
			100: '#EAE6E6',
			200: '#EAE6E6',
			300: '#ECE9E9',
			400: '#ECE9E9',
			500: '#EEEBEB',
			600: '#C2B7B7',
			700: '#988686',
			800: '#665757',
			900: '#342D2D',
			950: '#191515',
		},
		active: '#F3CCCC',
	},
});
