import { useState } from 'react';
import EyeLineIcon from 'remixicon-react/EyeLineIcon';
import EyeOffLineIcon from 'remixicon-react/EyeOffLineIcon';

function PasswordField({title, errorMessage, value, onChange, disabled}) {
    const [show, setShow] = useState(false);

    return (
        <div className="field">
            <div className="label">{title}</div>
            <div className={errorMessage ? "password__error" : "password"}>
                <input disabled={disabled} className="password__input input" value={value} type={show ? "text" : "password" } onChange={onChange} />
                <div onClick={() => disabled ? null : setShow(!show)}>
                    {show ? (
                        <EyeOffLineIcon />
                    ) : (
                        <EyeLineIcon />
                    )}
                </div>
            </div>
            {
                errorMessage ? <p className='label__error'>{errorMessage}</p> : null
            }
        </div>
    )
}

export default PasswordField;