function GeneralField({title, errorMessage, type, value, onChange, disabled = false, optional = false, placeholder = ""}) {
    return (
        <div className="field">
            <div className="label">{title} {optional ? <span className="label__optional">(Optional)</span> : ""}</div>
            <input placeholder={placeholder} disabled={disabled} className={`${errorMessage ? "input__error" : "input__normal"} input`} value={value} type={type} onChange={onChange} />
            {
                errorMessage ? <p className='label__error'>{errorMessage}</p> : null
            }
        </div>
    )
}

export default GeneralField;