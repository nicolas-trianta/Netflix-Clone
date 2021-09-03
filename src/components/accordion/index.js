import React, { useState, useContext, createContext } from "react";
import { Container, Frame, Title, Item, Inner, Header, Body, } from './styles/accordion';

const ToggleContext = createContext();

function Accordion({ children, ...restProps }){
    return(
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
}

export default Accordion;

Accordion.Title = function AccordionTitle({chidlren, ...restProps}){
    return <Title {...restProps}>{chidlren}</Title>
}

Accordion.Frame = function AccordionFrame({chidlren, ...restProps}){
    return <Frame {...restProps}>{chidlren}</Frame>
}

Accordion.Item = function AccordionItem({chidlren, ...restProps}){
    const [toggleShow, setToggleShow] = useState(false);
    return(
        <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
            <Item {...restProps}>{chidlren}</Item>
        </ToggleContext.Provider>
    )
}

Accordion.Header = function AccordionHeader({chidlren, ...restProps}){
    const { toggleShow, setToggleShow } = useContext(ToggleContext);
    return 
    <Header onClick={() => setToggleShow((setToggleShow) => !toggleShow)} {...restProps}>
        {chidlren}
    </Header>
}

Accordion.Body = function AccordionBody({chidlren, ...restProps}){
    const { toggleShow } = useContext(ToggleContext);
    return toggleShow ? <Body {...restProps}>{chidlren}</Body> : null;
}