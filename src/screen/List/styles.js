import styled from 'styled-components'


export const Container = styled.div`
    position: relative;
    width: 80%;
    height: 60%;
    border: 1px solid black;
    background-color: ${props => props.theme.colors.gray_500};
    padding: 3rem 2rem;
    border-radius: 8px;
   
`;

export const Table = styled.table`   
    width: 100%;
    height: 100%;
    
    thead {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        tr {
            flex: 1;
            height: 3rem;
            border-bottom: 3px solid red;
            display: flex;
            align-items: center;
            justify-content: center;

            p {
                text-transform: uppercase;
                color: ${props => props.theme.colors.gray_200};
                letter-spacing: .5rem;
            }
        }
    }   
`;

export const Tbody = styled.div`
    width: 100%;
    height: calc(100% - 3rem);
    overflow: auto;

    ::-webkit-scrollbar {
        width: 0;
    }

    tbody {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: .5rem;

        tr {
            width: 100%;
            height: 4rem;
            border: 1px solid ${props => props.theme.colors.gray_600};
            border-radius: 8px;
            margin-bottom: .5rem;
            display: flex;
            transition: border .5s ease;

            :hover {
                border: 1px solid ${props => props.theme.colors.green};
            }
                
            
        }

        td {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;

            p {
                color: ${props => props.theme.colors.gray_200};
            }
        }
    }
    

`;

export const Avatar = styled.div`
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all .5s ease-in-out;

    img {
       width: 100%;
       height: 100%;
        border-radius: 8px;

    }

    :hover{
            width: 200px;
            height: 200px;
            z-index: 99;
        }
`;

export const ActionsButton = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const Icon = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.colors.gray_600};
    cursor: pointer;
    transition: all .5s linear;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    svg {
        color: ${props => props.theme.colors.gray_200};
    }

    :hover {
        transform: scale(1.1);
        border: 1px solid ${props => props.color};
    }
`;