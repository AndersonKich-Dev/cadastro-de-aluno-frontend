import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    padding: .7rem 0;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.gray_500};
    border: 1px solid ${props => props.theme.colors.gray_600};
    color:${props => props.theme.colors.gray_200};
    text-transform: uppercase;
    letter-spacing: .5rem;
    font-family: Inter_400;
    text-align: center;

    h1 {
        font-size: 1rem;
    }

`;