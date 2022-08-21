import styled from "styled-components";

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
    h1 {
        font-size:40px;
    }
`;

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