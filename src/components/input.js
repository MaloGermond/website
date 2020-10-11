import React from "react"
import styled from "styled-components"

const Field = styled.input`
  background-color: var(--colors-background-light-low);
  border-radius: 4px;
  border-style: none;
  padding: 0.5rem 1rem;
`

const Label = styled.p`
  padding-left: 1rem;
`

const Wrapper = styled.label`
  display: flex;
  flex-direction: column;
`

export default function Input(props) {
  return (
    <Wrapper>
      <Label>{props.label}</Label>
      <Field type={props.type} placeholder={props.placeholder}></Field>
    </Wrapper>
  )
}
