
import styled from 'styled-components';

export default styled.p`
  font-size: ${props => props.theme.fontSize.normal};
  font-family: ${props => props.theme.baseFontFamily};
  font-weight: ${props => props.theme.baseFontWeight};
  line-height: ${props => props.theme.fontSize.normal};
  color: ${props => props.theme.color.baseFont};
  margin-bottom: ${props => props.theme.marginHalf}
`;