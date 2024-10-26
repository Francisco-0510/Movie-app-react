import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
};

const styles = {
	global: (props) => ({
		body: {
			margin: 0,
			padding: 1,
			bg: mode(
				props.theme.semanticTokens.colors['chakra-body-bg']._light,
				'#0D0D0D'
			)(props),
		},
	}),
};

const theme = extendTheme({ config, styles });

export default theme;
