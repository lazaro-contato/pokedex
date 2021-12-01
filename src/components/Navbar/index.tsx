import React from "react";
import {NavLinks, NavContainer} from "./styles";


type Props = {

}

export const Navbar = (props: Props) => {
    return (
        <div>
            <NavContainer>
                    <NavLinks>Favoritos</NavLinks>
                    <NavLinks>Procurar</NavLinks>
                    <NavLinks>Ver todos</NavLinks>
            </NavContainer>
        </div>
    )
} ;