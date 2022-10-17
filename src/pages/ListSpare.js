import { CanvasRow, Container, CanvasContent } from '../components/Another';
import { Sidebar } from '../components/Sidebar';

export const ListSpare = () => {
    return(
        <Container>
            <CanvasRow>
                <Sidebar />
                <CanvasContent>
                    ListSpare
                </CanvasContent>
            </CanvasRow>
        </Container>
    );
}