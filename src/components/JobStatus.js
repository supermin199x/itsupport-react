import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CanvasContent } from '../components/Another';

export const Div = styled.div`
    width: 1070px;
    height: 600px;
    box-shadow: 0px 0px 3px black;
    padding: 5px;
`
export const Content = () => {

    return(
        <CanvasContent>
            <Div>
            
            </Div>
        </CanvasContent>
    );
}

