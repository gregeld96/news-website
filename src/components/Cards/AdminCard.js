import { Col, Row } from 'react-bootstrap';
import User6LineIcon from 'remixicon-react/User6LineIcon';
import BaseButton from '../Buttons/BaseButton';
import CancelButton from '../Buttons/CancelButton';

function AdminArticleCard({ onDelete, img, creatorName, createdDate, content, title, onClick, onEdit }) {
    return (
        <div className="card custom-card mt-3" onClick={onClick}>
            <img src={img?.includes("https") ? img : `http://192.168.18.5:3000/${img}`}className="rounded-top image-article" />
            <div className="px-3 py-3">
                <p className="date-article">{createdDate}</p>
                <p className="fw-bolder title-article">{title}</p>
                <p className="desc-article">{content}</p>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <User6LineIcon style={{stroke: 'black'}} size={18} />
                    <p style={{paddingLeft: '5px', fontWeight: '500', textTransform: 'capitalize'}}>{creatorName}</p>
                </div>
                <Row className='py-3'>
                    <Col>
                        <BaseButton title={'Edit'} onClick={onEdit} />
                    </Col>
                    <Col>
                        <CancelButton title={"Delete"} onClick={onDelete} />
                    </Col>
                    
                </Row>
            </div>
        </div>

    )
}

export default AdminArticleCard; 