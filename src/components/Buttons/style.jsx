import styled from "styled-components";

export const Button = styled.button`
    width: 250px;
    border: none;
    border-radius: 1rem;
    padding: 0.8rem;
    color: ${(props) => props.color ? props.color : 'white'};
    background-color: ${(props) => props.bg ? props.bg : '#39ACA3'};
    font-size: 15px;
    :hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
`;