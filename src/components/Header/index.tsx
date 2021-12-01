import React from "react";
import {HeaderContainer, HeaderElement, PokeLogoImage} from './styles'

import logoImage from '../../assets/pokemon-white-logo.svg'
import {Navbar} from "../Navbar";
import {ExitButton} from "../ExitButton";

type Props = {

}

export const Header = (props: Props) => {
    return (
        <div>
            <HeaderContainer>
                <HeaderElement>
                    <PokeLogoImage src={logoImage} />
                    <Navbar />
                    <ExitButton />
                </HeaderElement>
            </HeaderContainer>

        </div>
    )
}