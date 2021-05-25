import styled from 'styled-components'


export const Container = styled.div`
    width: 20%;
    height: 50%;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;


    h1 {
        text-align: center;
        width: 100%;
        text-transform: uppercase;
        padding: .5rem 0;
        background-color: ${props => props.theme.colors.orange_100};
        color: white;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }

    ul {
        width: 100%;
        
        li {
            width: 100%;
            height: 4rem;
            background-color: ${props => props.theme.colors.green};
            margin: .5rem 0;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
    }
`;