import * as React from 'react';
import {LoginButton} from './styles'

type Props = {
    children: string,
};
export const Index = (props: Props) => {
    return (
        <div>
        <LoginButton>Entrar</LoginButton>
        </div>
    );
};