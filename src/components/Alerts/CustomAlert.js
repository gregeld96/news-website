import { Alert } from "react-bootstrap";


const CustomAlert = ({message, toggle, open}) => {
    return (
        <Alert color="success" toggle={toggle} isOpen={open} >
            <p className="mb-0">
                {message}
            </p>
        </Alert>
    )
}

export default CustomAlert;