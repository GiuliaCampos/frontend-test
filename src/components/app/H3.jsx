
import styled from 'styled-components';

export default styled.h3`
  font-size: ${props => props.theme.fontSize.h3};
  font-family: ${props => props.theme.baseFontFamily};
  font-weight: ${props => props.theme.baseFontWeight};
  line-height: ${props => props.theme.fontSize.h3};
  color: ${props => props.theme.color.baseFont};
  margin-bottom: ${props => props.theme.marginHalf}
`;