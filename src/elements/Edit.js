import styled from 'styled-components'

const Edit = styled.input`
  border: 0px;
  margin: 0px;

  background-color: ${props => props.backgroundColor || props.theme.backgroundColor.button};
  height: ${props => props.height || 'auto'};
  width: ${props => props.width || 'auto'};
  font-family: ${props => props.theme.fontFamily.default || null};
  font-size: ${props => props.theme.fontSize.medium || null};

  display: flex;
  flex-grow:  ${props => props.grow || 0};
`

export default Edit
