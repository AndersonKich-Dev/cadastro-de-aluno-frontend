import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${props => props.theme.colors.gray_600};
    cursor: pointer;
    transition: border .5s ease;

    :hover {
        border: 1px solid ${props => props.theme.colors.green};
    }

    svg{
        color: ${props => props.theme.colors.gray_200};
    }


`;