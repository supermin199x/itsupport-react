import { CanvasRow, Container, CanvasContent } from '../components/Another';
import { Sidebar } from '../components/Sidebar';

export const ListCctv = () => {
    return(
        <Container>
            <CanvasRow>
                <Sidebar />
                <CanvasContent>
                    ListCctv
                </CanvasContent>
            </CanvasRow>
        </Container>
    );
}