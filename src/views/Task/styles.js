import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    `

    export const Form = styled.div`
        width: 50%;
    `

    export const TypeIcons = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;

        img {
            width: 50px;
            height: 50px;
            margin: 10px;
            cursor: pointer;

            &:hover{
                opacity: 0.5;
            }
        }
    `