import styled from 'styled-components'

import Label from './Label'

const LabelInfo = styled(Label)`
  font-size: ${props => props.theme.fontSize.giant || null};
  margin: 1px; 
  margin-left: ${props => props.marginLeft || null};
  text-align: left;
`

export default LabelInfo
