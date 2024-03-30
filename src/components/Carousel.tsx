interface CarouselProps {
    images: string[];
    id: string;
}

const Carousel = ({images}: CarouselProps) => {
    return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            {images.map((image) => (
                <div key={image} className="carousel-item active">
                    <img 
                        src={image} 
                        className="d-block w-100"
                    />
                </div>
            ))}
        </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
    </div>
    )
}

export default Carousel;