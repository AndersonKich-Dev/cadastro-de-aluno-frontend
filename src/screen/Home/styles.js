import styled from 'styled-components'


export const Container = styled.div`
    width: 30%;
    height: 50%;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background-color: ${props => props.theme.colors.gray_500};

    h1 {
        text-align: center;
        width: 80%;
        text-transform: uppercase;
        padding: .5rem 0;
        border-bottom: 1px solid ${props => props.theme.colors.gray_600};
        color: white;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }

    ul {
        width: 100%;
        height: 100%;
        display: flex;
        
        li {
            flex: 1;
            border: 1px solid ${props => props.theme.colors.gray_600};
           // background-color: ${props => props.theme.colors.green};
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            margin: 2rem 1rem 2rem 1rem;
            cursor: pointer;
            transition: all .5s ease-in-out;

            a {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            svg {
                transition: all .5s ease-in-out;
                font-size: 3rem;
                color: ${props => props.theme.colors.gray_200};
            }

            :hover {
                border: 1px solid ${props => props.theme.colors.green};
            }

        }
    }
`;