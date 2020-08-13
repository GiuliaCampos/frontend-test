import styled from 'styled-components';

export default styled.option`
    width: 300px;
    height: 40px;
    border-color: #fff;
    border-radius: 50px;
    margin: 20px;
    padding: 20px;
    box-shadow: 0px 5px 6px -3px #000;
    font-family: ${props => props.theme.headerFontFamily};
    @media only screen and (min-width: 768px){
        width: 600px;
        height: 80px;
        font-size: 1rem
    }
    @media only screen and (min-width: 992px){
        width: 300px;
        height: 40px;
        font-size: 1rem
    }
`