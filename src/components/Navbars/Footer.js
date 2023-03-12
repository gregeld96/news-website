
function Footer(){
    return (
        <div style={{height: '50px'}} className="layout__non fw-bolder text-white text-center">
            <p style={{paddingTop: '10px'}}>@{new Date().getFullYear()}</p>
        </div>
    )
}

export default Footer;