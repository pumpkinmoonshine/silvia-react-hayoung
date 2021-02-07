import React from "react";
import styled from "styled-components";

export default function Form({ props, children }) {
  const { title } = props;
  return (
    <FormWrapper>
      <Title>{title}</Title>
      {children}
    </FormWrapper>
  );
}

const FormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 60px auto;
  max-width: 960px;
  min-width: 328px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 34px;
  text-align: center;
  font-weight: 100;
  color: #ff5c7c;
`;
