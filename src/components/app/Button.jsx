
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style } from '../../configs/theme';

const ButtonStyled = styled.button`
  background: ${props => props.theme.color[props.color]};
  border-radius: ${style('radius')};
  box-shadow: ${style('shadow.small')};
  border: none;
  color: ${props => props.theme.color[`${props.color}Alt`]};

  cursor: pointer;
  display: inline-block;
  font-family: ${style('headerFontFamily')};
  font-size: ${style('fontSize.normal')};
  font-weight: ${style('headerFontWeight')};
  line-height: ${style('fontSize.normal')};
  padding: ${style('paddingHalf')};
  position: relative;
  text-decoration: none;
  margin-left: ${style('marginHalf')};

  @media only screen and (min-width: 768px){
    font-size: 2.5rem
    
  }
  @media only screen and (min-width: 992px){
    font-size: 1rem
  }
`;

const Button = ({ label, ...props }) => (
  <ButtonStyled {...props}>
    {label}
  </ButtonStyled>
);

Button.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  color: 'primary',
  type: 'button',
};

export default Button;
