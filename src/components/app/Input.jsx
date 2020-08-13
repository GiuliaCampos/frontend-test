import styled from 'styled-components';

export default styled.input `
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 300px;
    height: 40px;
    border-color: #fff;
    border-radius: 50px;
    margin: 20px;
    padding: 20px;
    box-shadow: 0px 5px 6px -3px #000;
    font-family: ${props => props.theme.headerFontFamily};
    &.population{
        width: 180px;
    }
    @media only screen and (min-width: 768px){
        &.population{
            width: 500px;
            height: 80px;
            font-size: 2rem
        }
    }
    @media only screen and (min-width: 992px){
        &.population{
            width: 300px;
            height: 40px;
            font-size: 1rem
        }
    }
`