import React from "react"
import styled from "styled-components"

const Field = styled.textarea`
  background-color: var(--colors-background-light-medium);
  border-radius: 4px;
  border-style: none;
  padding: 0.5rem 1rem;
  resize: none;
  min-height: 16rem;
`

const Label = styled.p`
  padding-left: 1rem;
`

const Wrapper = styled.label`
  display: flex;
  flex-direction: column;
`
export default function TextArea(props) {
  return (
    <Wrapper>
      <Label>{props.label}</Label>
      <Field placeholder={props.placeholder}></Field>
    </Wrapper>
  )
}
