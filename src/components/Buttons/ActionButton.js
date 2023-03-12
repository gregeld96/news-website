export default function ActionButton({ title, onClick, icon, submitting }) {
    return (
        <div
            onClick={submitting ? null : onClick}
            className={`button-base button-base__primary text-center me-2 mt-2 text-white mb-3`}
            style={{width: '150px'}}
        >
            {title}
        </div>
    )
}