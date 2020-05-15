import styled from 'styled-components'

const Container = styled.div`
  width: ${props => props.width || '100%'};
  max-width: ${props => props.maxWidth || 'auto'};
  min-width: ${props => props.minWidth || 'auto'};
  height: ${props => props.height || 'auto'};
  min-height: ${props => props.minHeight || 'auto'};
  margin-top: ${props => props.marginTop || null};
  margin-bottom: ${props => props.marginBottom || null};
  margin-left: ${props => props.marginLeft || null};
  margin-right: ${props => props.marginRight || null};
  padding-top: ${props => props.paddingTop || null};
  padding-bottom: ${props => props.paddingBottom || null};
  padding-right: ${props => props.paddingRight || null};
  padding-left: ${props => props.paddingLeft || null};

  background-color: ${props => props.backgroundColor || null};
  overflow: ${props => props.overFlow || null};

  display: ${props => props.display || 'flex'};
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-content: flex-start;
  align-items: ${props => props.alignItems || 'flex-start'};
  flex-grow:  ${props => props.flexGrow || '1'};
  flex-shrink: 1;
  flex-basis: ${props => props.flexBasis || 'auto'};
  flex-wrap: ${props => props.flexWrap || 'wrap'}; // -reverse;
`

export default Container
