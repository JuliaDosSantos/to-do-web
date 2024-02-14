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

        .inative{
            opacity: 0.5;
        }

        button {
            border: none;
            background: none;
        }
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

    export const Input = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 20px 0;

        span{
            color: #707070;
            margin: 5px 0;
        }

        input {
            font-size: 16px;
            padding: 15px;
            border: none;
            border-bottom: 1px solid #EE6B26;
        }

        img {
            width: 20px;
            height: 20px;
            position: relative;
            left: 90%;
            bottom: 35px;
        }
    `

    export const TextArea = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 20px 0;

        span{
            color: #707070;
            margin: 5px 0;
        }

        textarea{
            font-size: 16px;
            border: 1px solid #EE6B26;
        }
    `