import styled from 'styled-components'

const Label = styled.h1`
  border: 0px;
  margin: 0px;
  margin-left: ${props => props.marginLeft || '5px'};
  margin-right: ${props => props.marginRight || '5px'};
  margin-top: ${props => props.marginTop || null};
  padding-top: 3px;
  padding-left: 2px;
  cursor: default;

  text-align: ${props => props.align || 'center'};
  height: ${props => props.height || 'auto'};
  width: ${props => props.width || 'auto'};
  font-family: ${props => props.theme.fontFamily.default || null};
  font-size: ${props => props.fontSize || props.theme.fontSize.medium};

  background-color: ${props => props.backgroundColor || null};

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;
  flex-grow:  ${props => props.grow || 0};
`

export default Label
