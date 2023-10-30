import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                theme: '#63d297',
            },
            fontFamily: {
                sans: [
                    'Lucida Sans',
                    'Lucida Sans Regular',
                    'Lucida Grande',
                    'Lucida Sans Unicode',
                    'Geneva',
                    'Verdana',
                    'sans-serif',
                ],
            },
            animation: {
                'bounce-in': 'bounce-in-top 1.1s both',
            },
            keyframes: {
                'bounce-in-top': {
                    '0%': {
                        transform: 'translateY(-500px)',
                        'animation-timing-function': 'ease-in',
                        opacity: '0',
                    },
                    '38%': {
                        transform: 'translateY(0)',
                        'animation-timing-function': 'ease-out',
                        opacity: '0',
                    },

                    '55%': {
                        transform: 'translateY(-65px)',
                        'animation-timing-function': 'ease-in',
                    },

                    '72%': {
                        transform: 'translateY(0)',
                        'animation-timing-function': 'ease-out',
                    },

                    '81%': {
                        transform: 'translateY(-28px)',
                        'animation-timing-function': 'ease-in',
                    },

                    '90%': {
                        transform: 'translateY(0)',
                        'animation-timing-function': 'ease-out',
                    },

                    '95%': {
                        transform: 'translateY(-8px)',
                        'animation-timing-function': 'ease-in',
                    },

                    '100%': {
                        transform: 'translateY(0)',
                        'animation-timing-function': 'ease-out',
                    },
                },
            },
        },
    },
    plugins: [],
};
export default config;
