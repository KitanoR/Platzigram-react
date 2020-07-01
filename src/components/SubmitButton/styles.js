import styled from 'styled-components';

export const Button = styled.button`
    background: #8d00FF;
    border-radius: 3px;
    height: 32px;
    width: 100%;
    text-align: center;
    display: block;
    color: #fff;

    &[disabled] {
        opacity: 0.3;
    }
`;