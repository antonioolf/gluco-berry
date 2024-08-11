import styled from 'styled-components'

const ButtonStyled = styled.a`
  font-size: var(--font-size-normal);
  font-weight: 800;
  border-radius: 200px;
  padding: 10px 20px;
  color: white;
  background-color: var(--blue-2);
  text-decoration: none;
  &:hover {
    
  }
`

function ButtonPrimary(props) {
  return (
    <ButtonStyled href={props.href}>{props.children}</ButtonStyled>
  )
}

export default ButtonPrimary
