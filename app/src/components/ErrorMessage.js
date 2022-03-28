import {
    Alert
} from 'react-bootstrap';

const ErrorMessage = ({ children }) => (
    <Alert variant="danger">
        <p>
            { children }
        </p>
    </Alert>
)

export default ErrorMessage