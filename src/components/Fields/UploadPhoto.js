import ImageAddLineIcon from 'remixicon-react/ImageAddLineIcon';
import BaseButton from '../Buttons/BaseButton';

function UploadPhoto({title, value, logo, onChange}) {
    return (
        <div className='field text-center'>
            <p className='label'>{title}</p>
            {
                value !== '' ? 
                    <div>
                        <div style={{marginTop: '10px'}}>
                            <div className='photo__border-filled'>
                                <img src={logo} style={{width: '100%', height: '100%'}} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor={`file-${title}`} style={{cursor: 'pointer', width: '198px', marginLeft: 'auto', marginRight: 'auto'}}>
                                <BaseButton title={"Change Image"} />
                            </label>
                            <input id={`file-${title}`} style={{visibility:'hidden'}} onChange={onChange} type="file" />
                        </div>
                    </div> : logo ? <div>
                        <div style={{marginTop: '10px'}}>
                            <div className='photo__border-filled'>
                                <img src={logo} style={{width: '100%', height: '100%'}} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor={`file-${title}`} style={{cursor: 'pointer', width: '198px', marginLeft: 'auto', marginRight: 'auto'}}>
                                <BaseButton title={"Change Image"} />
                            </label>
                            <input id={`file-${title}`} style={{visibility:'hidden'}} onChange={onChange} type="file" />
                        </div>
                    </div> : <div style={{marginTop: '10px'}}>
                        <label htmlFor={`file-${title}`} className='photo__border'>
                            <div className='photo__image' style={{marginLeft: 'auto', marginRight: 'auto'}}>
                                <ImageAddLineIcon />
                            </div>
                        </label>
                        <input id={`file-${title}`} style={{visibility:'hidden'}} value={value} type="file" onChange={onChange} />
                    </div>
            }
        </div>
    )
}

export default UploadPhoto;