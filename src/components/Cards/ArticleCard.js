import User6LineIcon from 'remixicon-react/User6LineIcon';

function ArticleCard({ img, creatorName, createdDate, content, title, onClick }) {
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
                <div style={{ color: "#C58C49", textDecoration: "none", textAlign: "right" }}>
                    Read More
                </div>
            </div>
        </div>

    )
}

export default ArticleCard; 