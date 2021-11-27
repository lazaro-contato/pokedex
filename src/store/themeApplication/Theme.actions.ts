export function toggleTheme(theme: any) {
    return {
        type: 'TOGGLE_THEME',
        payload: theme,
    }
}