import { CanvasRow, Container, CanvasContent } from '../components/Another';
import { Sidebar } from '../components/Sidebar';

export const ListNetwork = () => {
    return(
        <Container>
            <CanvasRow>
                <Sidebar />
                <CanvasContent>
                    ListNetwork
                </CanvasContent>
            </CanvasRow>
        </Container>
    );
}