import styled from 'styled-components';

//Layout
export const Container = styled.div`
    width:100vw;
    height:100vh;
`
export const CanvasRow = styled.div`
    width:100%;
    height:100%;
    display: flex;
    flex-direction: row;
    column-gap: 10px;
    padding: 10px;
`
export const CanvasCol = styled.div`
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
`
export const CanvasLogin = styled.div`
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10%;
`
export const CanvasSidebar = styled.div`
    width:fit-content;
    height:fit-content;
    display: flex;
    flex-direction: column;
`
export const CanvasContent = styled.div`
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 3px black;
    padding: 20px;
`