export default function CancelButton({ title, onClick, disabled, submitting }) {
    return (
        <div
            onClick={submitting ? null : onClick}
            className={`button-base text-center ${disabled ? 'button-base__secondary-disabled' : 'button-base__secondary'} me-2 mt-2 w-100 mb-3`}
        >
            {title}
        </div>
    )
}