import styled from 'styled-components'

const Header = styled.div`
  height: ${props => props.height || '30px'};
  width: 100%;
  padding-top: ${props => props.paddingTop || null};

  display: flex;
  justify-content: ${props => props.justifyContent || 'flex-start'};
`

export default Header
