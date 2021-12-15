import React from "react";
import {HeaderContainer, LeftSection, MiddleSection, RightSection, PokeLogoImage} from './styles'

import logoImage from '../../assets/pokemon-white-logo.svg'
import {ExitButton} from "../ExitButton";
import {NavLinks} from "../NavLinks";
import {useMediaQuery} from "react-responsive";
import {MobileNavLinks} from "../MobileNavLinks";

type Props = {

}

export const Header = (props: Props) => {
    const isMobile = useMediaQuery({query: '(max-width: 800px)'})
    return (
                <HeaderContainer>
                    <LeftSection>
                        <PokeLogoImage src={logoImage} />
                    </LeftSection>
                    <MiddleSection>
                        {!isMobile && <NavLinks />}
                    </MiddleSection>
                    <RightSection>
                        {!isMobile && <ExitButton />}
                        {isMobile && <MobileNavLinks />}
                    </RightSection>
                </HeaderContainer>
    )
}