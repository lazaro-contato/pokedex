import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secondary: string;

            danger: string;
            success: string;
            warning: string;

            background: string;
            mainText: string;
            textMedium: string;
            textRegular: string;
            border: string;

            GREY500: string;
            GREY400: string;
            GREY300: string;
            GREY200: string;
            GREY100: string;
            WHITE: string;
        },
    }
}