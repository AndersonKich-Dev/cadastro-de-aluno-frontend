import styled from 'styled-components'


export const Container = styled.form`
    width: 30%;
    height: 80%;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
    background-color: #313439;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding: 1rem;
   
`;

export const Title = styled.span`
    width: 60%;
    padding: .7rem 0;
    transform: translateY(-85%);
    border-radius: 5px;
    background-color: #313439;
    border: 1px solid ${props => props.theme.colors.gray_600};
    color:${props => props.theme.colors.gray_200};
    text-transform: uppercase;
    letter-spacing: .5rem;
    font-family: Inter_400;
    text-align: center;
`;

export const Avatar = styled.label`
    position: relative;
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.colors.gray_600};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: border .5s ease;

    :hover {
        border: 1px solid ${props => props.theme.colors.green};
    }
    
    input {
        visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
        width: 1rem;
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    svg {
        width: 50%;
        height: 50%;
        color: ${props => props.theme.colors.gray_600};
        
    }

`;

export const Field = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    

    label {
        font-family: Inter_400;
        color: ${props => props.theme.colors.gray_200};
        font-size: 0.625rem;
        text-transform: uppercase;
        letter-spacing: .3rem;
    }

    input {
        width: 100%;
        height: 2rem;
        background-color: transparent;
        border: 0;
        border-bottom: 2px solid ${props => props.theme.colors.gray_600};
        color: ${props => props.theme.colors.gray_50};
    }

`;

export const Button = styled.input`
    width: 60%;
    padding: .7rem 0;
    border: none;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.gray_50};
    cursor: pointer;
    transition: filter .5s ease;

    :hover {
        filter: brightness(70%);
    }
`;