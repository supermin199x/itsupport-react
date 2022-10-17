import { CanvasRow, Container, CanvasContent } from '../components/Another';
import { Sidebar } from '../components/Sidebar';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContainerPrinter = styled.div`
    width: 100%;
    height: 500px;
    overflow-x: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 10px;
    column-gap: 10px;
    padding: 20px;
    border: solid 1px gray;
`
const Title = styled.td`
    font-size: 24px;
    text-decoration:underline;
    font-weight: 900;
    margin-bottom: 20px;
`
const Box = styled.div`
    width: 24%;
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: 3px;
    padding: 20px;
    box-shadow: 0px 0px 3px black;
    font-size: 12px;
`

export const ListPrinter = () => {

    const [data, setData] = useState({ users: []});

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://127.0.0.1:1880/printers'
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
                    <ContainerPrinter>
                        {data.users.map((item) => {
                            return <Box>
                                <p>{item.printer_name}</p>
                            </Box>
                        })}
                    </ContainerPrinter>
                </CanvasContent>
            </CanvasRow>
        </Container>
    );
}