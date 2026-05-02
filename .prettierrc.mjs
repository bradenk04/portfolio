/** @type {import("prettier").Config} */
export default {
    plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'es5',
    printWidth: 100,
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
};