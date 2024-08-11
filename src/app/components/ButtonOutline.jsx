import styled from 'styled-components'

const ButtonStyled = styled.a`
  font-size: var(--font-size-normal);
  font-weight: 800;
  border-radius: 200px;
  padding: 10px 20px;
  color: var(--blue-1);
  border: solid 2px var(--blue-1);
  text-decoration: none;
  &:hover {
    background-color: var(--blue-1);
    color: white;
  }
`

function ButtonOutline(props) {
  return (
    <ButtonStyled href={props.href}>{props.children}</ButtonStyled>
  )
}

export default ButtonOutline

