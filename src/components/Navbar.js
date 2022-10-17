import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const Div = styled.div`
    width: 100%;
    height: 100%;
`
export const Ul = styled.ul`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 3px;
`
export const Li = styled.li`
    width: 100%;
    height: 50px;
    font-size: 14px;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    background-color: white;
`
export const Navbar = () => {
    
	let navigate = useNavigate(); 
    
    const routeChange = () =>{ 
        let path = `/`; 
        navigate(path);
    }

    return(
        <Div>
            <Ul>
                Navbar
            </Ul>
        </Div>
    );
}