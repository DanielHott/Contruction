import styled from "styled-components";

export const Form = styled.form`
    display: flex;

    width: 50vw;
    height: 70vh;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-right: 10%;
    margin-left: 10%;
    a {
        color: #efcf25;
        text-decoration: underline;
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    img {
        position: absolute;
        left: 0;
        top: 0;
        height: 50px;
        width: 100px;
    }
`;

export const GreenWall = styled.div`
    background: url('/assets/blue.jpg');
    height: 100vh;
    width: 65vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
`;