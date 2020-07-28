import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"

const Contained = styled.button`
  border-radius: 8px;
  background: var(${props => props.backgroundColor || `--colors-primary-200`});
  border-style: none;
  font-size: 1rem;
  padding: 0.6rem 0.7rem;
  transition: 0.3s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-transform: uppercase;
  margin: 0;

  & :hover {
    background: var(${props => props.hoverColor || `--colors-primary-400`});
  }

  & :focus {
    background: var(${props => props.focusColor || `--colors-primary-400`});
  }

  & :active {
    background: ${props => props.activeColor || `--colors-primary-500`};
  }
`

const Icon = styled.i`
  height: 1rem;
`

export default function Button({
  children,
  to,
  trailingIcon,
  leadingIcon,
  background,
  foreground,
  hovered,
  actived,
  focused,
}) {
  function handleClick(e) {
    e.preventDefault()
    if (to != null) {
      navigate(to)
    }
  }

  return (
    <Contained
      onClick={handleClick}
      backgroundColor={background}
      hoverColor={hovered}
      activeColor={actived}
      focusColor={focused}
    >
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
