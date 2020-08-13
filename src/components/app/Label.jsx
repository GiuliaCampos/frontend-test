
import styled from 'styled-components';

export default styled.p`
  font-family: ${props => props.theme.baseFontFamily};
  font-weight: ${props => props.theme.baseFontWeight};
  line-height: ${props => props.theme.fontSize.normal};
  color: ${props => props.theme.color.baseFont};
  margin-bottom: ${props => props.theme.marginHalf}
  @media only screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSize.h2};
  }
  @media only screen and (min-width: 992px) {
    font-size: ${props => props.theme.fontSize.normal};
  }
`;