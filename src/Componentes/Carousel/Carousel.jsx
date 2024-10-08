
const Carousel = () => {
  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000">
                <img src="https://www.cristobalcolon.com/fullaccess/itemcategory160banner1.jpg" className="d-block w-100" alt="RipCurl"/>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
                <img src="https://www.cristobalcolon.com/fullaccess/itemcategory115banner1.jpg" className="d-block w-100" alt="RipCurl"/>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
                <img src="https://www.cristobalcolon.com/fullaccess/itemcategory138banner1.jpg" className="d-block w-100" alt="RipCurl"/>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
                <img src="https://www.cristobalcolon.com/fullaccess/itemcategory258banner1.jpg" className="d-block w-100" alt="RipCurl"/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}

export default Carousel