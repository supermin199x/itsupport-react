import { CanvasRow, Container, CanvasContent } from '../components/Another';
import { Sidebar } from '../components/Sidebar';

export const ListUps = () => {
    return(
        <Container>
            <CanvasRow>
                <Sidebar />
                <CanvasContent>
                    ListUps
                </CanvasContent>
            </CanvasRow>
        </Container>
    );
}