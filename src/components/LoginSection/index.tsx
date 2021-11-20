import React from 'react';
import PokemonLogoImage from '../../assets/pokemon-main-logo.png'
import {MainContainerLogin, FormContainer, PokemonMainImage} from "./styles";

import {LoginText} from "../LoginText";
import {LoginForm} from "../LoginForm";

type Props = {

};
export const LoginSection = (props: Props) => {
    return (
        <>

        <MainContainerLogin>
            <FormContainer>
                <PokemonMainImage src={PokemonLogoImage} />
                <LoginText>Comece a coletar pokémons!</LoginText>
                <LoginForm/>
            </FormContainer>
        </MainContainerLogin>
        </>
    );
};