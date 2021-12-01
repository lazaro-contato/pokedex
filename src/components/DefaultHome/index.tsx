import React from "react";
import astronaut from '../../assets/Astronaut-pana 1.svg'
import {MainContainer, MainText, SecondaryText, SearchPokemonButton, AstronautImg} from "./styles";

type Props = {

}

export const DefaultHome = (props: Props) => {
    return (
        <div>
            <MainContainer>
                <AstronautImg src={astronaut}/>
                <MainText>Está meio vazio por aqui!</MainText>
                <SecondaryText>Procure por pokémons para adicioná-los aos seus favoritos.</SecondaryText>
                <SearchPokemonButton>Procurar pokémons</SearchPokemonButton>
            </MainContainer>

        </div>
    )
}