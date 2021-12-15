import React from 'react';
import {NavLinksContainer, Link, LinksWrapper, LinkItem} from './styles'
type Props = {

};

export const NavLinks = (props: Props) => {
    return (
        <NavLinksContainer>
            <LinksWrapper>
                <LinkItem><Link href='#'>Favoritos</Link></LinkItem>
                <LinkItem><Link href='#'>Procurar</Link></LinkItem>
                <LinkItem><Link href='#'>Ver todos</Link></LinkItem>
            </LinksWrapper>
        </NavLinksContainer>

    );
};