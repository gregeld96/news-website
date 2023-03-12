import { Col, Row } from "react-bootstrap";
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon';


function SectionHeader({title, onClick}) {
    return (
        <Row className="justify-content-space-between align-items-center">
                <Col>
                    <p className="header__title">{title}</p>
                </Col>
                <Col className="text-end">
                    <div onClick={onClick} style={{display: 'inline-flex', alignItems: 'center'}}>
                        <p className="header__subheading">View All</p>
                        <ArrowRightSLineIcon color="white" size={18} style={{marginLeft: '5px', marginTop: '3px'}} />
                    </div>
                </Col>
            </Row>
    )
}

export default SectionHeader;