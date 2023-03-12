function TextField({title, errorMessage, value, onChange, maxLength, disabled = false, optional = false, placeholder}) {
    return (
        <div className="field">
            <div className="label">{title} {optional ? <span className="label__optional">(Optional)</span> : ""}</div>
            <textarea rows={10} placeholder={placeholder} disabled={disabled} maxLength={maxLength} className={`${errorMessage ? "input__error" : "input__normal"} input`} value={value} onChange={onChange} />
            {
                errorMessage ? <p className='label__error'>{errorMessage}</p> : null
            }
        </div>
    )
}

export default TextField;