import styled from 'styled-components'

const Button = styled.div`
  height: ${props => props.height || '100%'};
  width: ${props => props.width || null};
  margin-left: ${props => props.marginLeft || null};
  padding-top: ${props => props.paddingTop || null};
  padding-bottom: ${props => props.paddingBottom || null};
  background-color: ${props => props.backgroundColor || props.theme.backgroundColor.button};

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow:  ${props => props.grow || 0};
  cursor: default;
`

export default Button
