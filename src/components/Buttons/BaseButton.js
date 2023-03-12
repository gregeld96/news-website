import { Spinner } from "react-bootstrap";


export default function BaseButton({ title, onClick, disabled, submitting }) {
    return (
        <div
            onClick={submitting ? null : onClick}
            className={`button-base text-center ${disabled ? 'button-base__disabled' : 'button-base__primary'} me-2 mt-2 w-100 text-white mb-3`}
        >
            { 
                submitting ? <Spinner style={{height: '16px', width: '16px'}} /> : title
            }
        </div>
    )
}