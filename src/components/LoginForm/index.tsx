import * as React from 'react';
import {LoginButton} from "../LoginButton/styles";
import {FormInput} from "./styles";

type Props = {

};
export const LoginForm = (props: Props) => {


    return (
        <form>
            <FormInput placeholder='E-mail' type='email'/>
            <FormInput placeholder='Senha' type='password'/>
            <LoginButton>Entrar</LoginButton>
        </form>
    );
};