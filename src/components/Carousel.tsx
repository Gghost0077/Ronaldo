import {useState, useEffect} from "react"

interface CarouselProps {
    images: string[];
}

const Carousel = ({images}: CarouselProps) => {
    const [activeImage, setActiveImage] = useState(0)

    const nextImage = () => {
        activeImage === images.length-1 ? setActiveImage(0) : setActiveImage(activeImage+1)
    }

    const prevImage = () => {
        activeImage === 0 ? setActiveImage(images.length-1) : setActiveImage(activeImage-1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 4000);
    
        return () => clearInterval(interval);
    });

    return (
    <div className="carousel slide">
        <div className="carousel-inner">
            {images.map((image, index) => (
                <div key={image} className={activeImage === index ? "carousel-item active" : "carousel-item"}>
                    <img 
                        src={image} 
                        className="d-block w-100"
                    />
                </div>
            ))}
        </div>
    <button className="carousel-control-prev" type="button" onClick={prevImage}>
        <span className="carousel-control-prev-icon"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-slide="next" onClick={nextImage}>
        <span className="carousel-control-next-icon"></span>
        <span className="visually-hidden">Next</span>
    </button>
    </div>
    )
}

export default Carousel;