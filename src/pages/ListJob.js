import { CanvasRow, Container, CanvasContent } from '../components/Another';
import { Sidebar } from '../components/Sidebar';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Table = styled.table`
    border-collapse: collapse;
`
const Tr = styled.tr`
    border-collapse: collapse;
    line-height: 30px;
    cursor: pointer;
    :hover {
        background-color: gold;
    }
`
const Th = styled.th`
    font-size: 16px;
    color: white;
    border: solid 2px black;
    border-collapse: collapse;
    padding: 10px;
    text-align: center;
    background-color: green;
`
const Td = styled.td`
    padding: 10px;
    font-size: 16px;
    border-collapse: collapse;
    border: solid 2px black;
    text-align: center;
`
const Title = styled.td`
    font-size: 24px;
    text-decoration:underline;
    font-weight: 900;
    margin-bottom: 20px;
`
const BtnAccept = styled.button`
    margin-left: 10px;
    padding: 2px;
    font-size: 10px;
    cursor: pointer;
    :hover {
        background-color: rgb(0,95,184);
        color: white;
    }
`

export const ListJob = () => {

    const [data, setData] = useState({ users: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://127.0.0.1:1880/members',
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
                    <Title>งานวันนี้</Title>
                    <Table>
                        <Tr>
                            <Th>ลำดับ</Th>
                            <Th>แผนก</Th>
                            <Th>วันที่รับแจ้ง</Th>
                            <Th>วันที่ปิดงาน</Th>
                            <Th>ชื่อผู้แจ้ง</Th>
                            <Th>ชื่อเครื่อง</Th>
                            <Th>อาการ</Th>
                            <Th>สถานะ</Th>
                        </Tr>   
                        {data.users.map((item) => { 
                        return <Tr>
                            <Td>
                                <p>{item.id}</p>
                            </Td>
                            <Td>
                                <p>{item.department}</p>
                            </Td>
                            <Td>
                                <p>{item.date_request.substring(0,10)}</p>
                            </Td>
                            <Td>
                                <p>{item.date_success.substring(0,10)}</p>
                            </Td>
                            <Td>
                                <p>{item.employee_name}</p>
                            </Td>
                            <Td>
                                <p>{item.device_id}</p>
                            </Td>
                            <Td>
                                <p>{item.detail}</p>
                            </Td>
                            <Td>
                                <p>{item.active}
                                    <BtnAccept>Accept</BtnAccept>
                                </p>
                            </Td>
                        </Tr>
                        })}
                    </Table>
                </CanvasContent>
            </CanvasRow>
        </Container>
        
    );
}