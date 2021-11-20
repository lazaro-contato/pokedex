import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      font-family: 'Poppins', sans-serif;
      color: red;
    }

`

export const COLORS = {

    GREY500: '#1E1E1F',
    GREY400: '#4B4B4D',
    GREY300: '#7D7E80',
    GREY200: 'D2D4D6',
    GREY100: '#F5F7FA',
    WHITE: '#FFFFFF'
}

export const FONTWEIGHT = {
    REGULAR: '400',
    MEDIUM: '500',
    SEMIBOLD: '600',
    BOLD: '700'
}

export const MEDIA = {
    EXTRA_LARGE_SCREEN: '@media(min-width: 1500px)',
    LARGE_SCREEN: '@media(min-width: 1400px)',
    MEDIUM_SCREEN: '@media(max-width: 1000px)',
    SMALL_SCREEN:'@media(max-width: 640px)',
    EXTRA_SMALL_SCREEN: '@media(max-width: 400px)',
}

export const MAXMEDIA = {
    EXTRA_LARGE_SCREEN: '@media(min-width: 1500px)',
    LARGE_SCREEN: '@media(min-width: 1400px)',
    MEDIUM_SCREEN: '@media(min-width: 1000px)',
    SMALL_SCREEN:'@media(min-width: 640px)',
    EXTRA_SMALL_SCREEN: '@media(min-width: 400px)',
}