import { 
    Container ,
    Navbar
} from 'react-bootstrap';

const Layout = ({ children }) => (
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    Cosuno Test
                </Navbar.Brand>
            </Container>
        </Navbar>
        <Container className="mt-3">
            { children }
        </Container>
    </div>
)

export default Layout