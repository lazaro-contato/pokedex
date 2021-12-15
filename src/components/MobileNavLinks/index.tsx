import React, {useState} from 'react';
import { NavLinksContainer, Link, LinksWrapper, LinkItem, HambButton } from './styles'
import {ExitButton} from "../ExitButton";
import hambImg from '../../assets/bars-solid.svg'
import xMark from '../../assets/xmark-solid.svg'


type Props = {

};

export const MobileNavLinks = (props: Props) => {

    const [isOpen, setOpen] = useState(false);

    return (
        <NavLinksContainer>
            <HambButton onClick={() => setOpen(!isOpen)} src={isOpen ? xMark : hambImg}/>
            {isOpen && (
                <LinksWrapper>
                    <LinkItem><Link href='#'>Favoritos</Link></LinkItem>
                    <LinkItem><Link href='#'>Procurar</Link></LinkItem>
                    <LinkItem><Link href='#'>Ver todos</Link></LinkItem>
                    <ExitButton />
                </LinksWrapper>
            )}
        </NavLinksContainer>

    );
};