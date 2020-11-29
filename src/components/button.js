import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { navigate } from "gatsby"

const Contained = styled.button`
  border-radius: 8px;
  background: var(${props => props.theme.enabled});
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
    background: var(${props => props.theme.hovered});
  }

  & :focus {
    background: var(${props => props.theme.focused});
  }

  & :active {
    background: var(${props => props.theme.actived});
  }
`

const Icon = styled.i`
  height: 1rem;
`

Button.defaultProps = {
  style: {
    enabled: "--colors-primary-400",
    hovered: "--colors-primary-500",
    focused: "--colors-primary-500",
    actived: "--colors-primary-700",
  },
}

export default function Button({
  children,
  to,
  action,
  trailingIcon,
  leadingIcon,
  ariaLabel,
  style,
}) {
  function handleClick(e) {
    e.preventDefault()
    if (to != null) {
      navigate(to)
    }
    if (action != null) {
      window.open(action)
    }
  }

  return (
    <ThemeProvider theme={style}>
      <Contained onClick={handleClick} aria-label={ariaLabel}>
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
    </ThemeProvider>
  )
}

/*


if (type === "secondary") {
  const style = {
    enabled: "--colors-surface-050",
    hovered: "--colors-surface-200",
    focused: "--colors-surface-200",
    actived: "--colors-surface-400",
  }
} else {
  const style = {
    enabled: "--colors-primary-200",
    hovered: "--colors-primary-400",
    focused: "--colors-primary-400",
    actived: "--colors-primary-500",
  }
}
*/
