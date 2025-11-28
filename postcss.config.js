import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default {
	plugins: [
		tailwindcss(),
		autoprefixer(),
		// add cssnano as a plugin instance in production
		...(process.env.NODE_ENV === 'production' ? [cssnano({ preset: 'default' })] : []),
	],
};
