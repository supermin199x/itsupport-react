import { CanvasRow, Container, CanvasContent } from '../components/Another';
import { Sidebar } from '../components/Sidebar';

export const ReportJob = () => {
    return(
        <Container>
            <CanvasRow>
                <Sidebar />
                <CanvasContent>
                ReportJob
                </CanvasContent>
            </CanvasRow>
        </Container>
    );
}