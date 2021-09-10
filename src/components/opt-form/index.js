import React from 'react';
import {Container, Text, Button, Input, Break } from './styles/opt-form';

function OptForm({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

export default OptForm;

OptForm.Input = function OptFormInput({ ...restProps }){
    return <Input {...restProps}/>
}

OptForm.Button = function OptFormButton({children, ...restProps}){
    return(
        <Button {...restProps}>
            {children} <img src="/images/icons/chevron-right.png" alt="Try Now"/>
        </Button>
    )
}

OptForm.Text = function OptFormText({children, ...restProps}){
    return(<Text {...restProps}>{children}</Text>)
}

OptForm.Break = function OptFormBreak({ ...restProps}){
    return <Break {...restProps}/>
}