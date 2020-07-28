import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"

const Contained = styled.button`
  border-radius: 8px;
  background: var(--colors-primary-200);
  border-style: none;
  font-size: 1.5rem;
  padding: 0.9rem 1rem;
  transition: 0.3s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-transform: uppercase;

  & :hover {
    background: var(--colors-primary-400);
  }

  & :focus {
    background: var(--colors-primary-400);
  }

  & :active {
    background: var(--colors-primary-500);
  }
`

const Icon = styled.i`
  height: 24px;
`

export default function Button({ children, to, trailingIcon, leadingIcon }) {
  function handleClick(e) {
    e.preventDefault()
    if (to != null) {
      navigate(to)
    }
  }

  return (
    <Contained onClick={handleClick}>
      {" "}
      {trailingIcon != null ? (
        <Icon className={"icon-" + trailingIcon}></Icon>
      ) : (
        ""
      )}{" "}
      {children}
      {leadingIcon != null ? (
        <Icon className={"icon-" + leadingIcon}></Icon>
      ) : (
        ""
      )}
    </Contained>
  )
}
