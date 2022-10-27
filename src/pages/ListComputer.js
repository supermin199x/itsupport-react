import { CanvasRow, Container, CanvasContent } from '../components/Another';
import { Sidebar } from '../components/Sidebar';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContainerComputer = styled.div`
    width: 100%;
    height: fit-content;
    overflow-x: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 20px;
    column-gap: 2%;
    padding: 20px;
    border: solid 1px lightgray;
    border-radius: 3px;
`
const Title = styled.td`
    font-size: 24px;
    text-decoration:underline;
    font-weight: 900;
    margin-bottom: 20px;
`
const Box = styled.div`
    position: relative;
    width: 18.40%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    padding: 20px;
    box-shadow: 0px 0px 3px black;
    font-size: 12px;
    font-weight: bold;
    :hover{
        cursor: pointer;
        background-color: lightgray;
        box-shadow: 0px 0px 5px black;
    }
`
export const Img = styled.img`
    width: 100px;
    height: 150px;
`
export const BtnAdd = styled.button`
    width: 100px;
    height: 30px;
    padding: 2px;
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
`
export const BtnShowDetail = styled.button`
    width: fit-content;
    height: fit-content;
    padding: 2px;
    position: absolute;
    top: 3px;
    right: 3px;
    font-size: 10px;
`
export const ModalBackground = styled.div`
    width: 100vw;
    height: 100vh;
    display: none;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    position: fixed;
    background-color: gray;
    opacity: 70;
    z-index: 99;
`
export const ModalAdd = styled.div`
    width: 500px;
    height: 500px;
    padding: 2px;
    background-color: white;
    border-radius: 3px;
    position: fixed;
    z-index: 100;
`

export const ListComputer = () => {

    const showModalAdd = () => {
        var modalAdd = document.getElementById('modalAdd');

        modalAdd.style.display = "flex";
    };

    const hideModalAdd = () => {
        var modalAdd = document.getElementById('modalAdd');

        modalAdd.style.display = "none";
    };

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const url = 'http://localhost:8080/reportcomputer/frmReportComputer?computer_id=';

    const [data, setData] = useState({ users: []});

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://127.0.0.1:1880/computers'
            );

            setData({
                users: result.data
            });
        }

        fetchData();

    }, []);

    return(
        <Container>
            <CanvasRow>
                <Sidebar />
                <CanvasContent>
                    <Title>เครื่องคอมพิวเตอร์</Title>
                    <BtnAdd onClick={() => showModalAdd()}>เพิ่ม</BtnAdd>
                    <ContainerComputer>
                        {data.users.map((item) => {
                            return <Box>
                                <BtnShowDetail onClick={() => openInNewTab(url+item.computer_id)}>View</BtnShowDetail>
                                <Img src={ require('../images/pc.webp') } alt=''/>
                                <p>{item.computer_name}</p>
                            </Box>
                        })}
                    </ContainerComputer>
                    <ModalBackground id='modalAdd' onClick={() => hideModalAdd() }>
                        <ModalAdd>
                            <button onClick={() => hideModalAdd() }>Close</button>
                        </ModalAdd>
                    </ModalBackground>
                </CanvasContent>
            </CanvasRow>
        </Container>
    );
}