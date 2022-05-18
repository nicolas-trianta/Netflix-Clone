import React from "react";
import { Container, Title, SubTitle } from "./styles/feature";

function Feature({children, ...retProps}){
  return <Container {...retProps}>{children}</Container>;
}

export default Feature;

Feature.Title = function FeatureTitle({children, ...restProps}){
  return <Title { ...restProps}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({children, ...restProps}){
  return <SubTitle { ...restProps}>{children}</SubTitle>;
};