import { CanvasRow, Container, CanvasContent } from '../components/Another';
import { Sidebar } from '../components/Sidebar';
import {useState} from 'react';

export const ListManual = () => {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const url = 'http://localhost:8080/reportcomputer/frmReportComputer?computer_id=';
    const [id, setId] = useState('');

    const handleChange = event => {
        setId(event.target.value);
        console.log(event.target.value);
    }

    return(
        <Container>
            <CanvasRow>
                <Sidebar />
                <CanvasContent>
                    <label>COMPUTER_ID 
                        <input type="text" onChange={handleChange} />
                        <p>{id}</p>
                    </label>
                    <button onClick={() => openInNewTab(url+id)}>click</button>
                </CanvasContent>
            </CanvasRow>
        </Container>
    );
}