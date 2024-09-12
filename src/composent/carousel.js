import carousel_P_I from './../img/Ellipse.png'
import carousel_P_O from './../img/canard.webp'
import carousel_Img from './../img/canard.webp'

let a = 2

function carousel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
             {Array.from({ length: a }, (_, i) => <div className={"card" + i}><img src={carousel_P_I}/></div>)}
             {console.log(a)}
            <ol className="carousel-indicators">
               
                <img className="test active" src={carousel_P_I} alt="Third slide"/>

                <img className="test active" src={carousel_P_I} alt="Third slide"/>

                <img className="test active" src={carousel_P_I} alt="Third slide"/>
            </ol>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={carousel_Img} alt="First slide"/>
                </div>

                <div className="carousel-item">
                    <img className="d-block w-100" src={carousel_Img} alt="Second slide"/>
                </div>

                <div className="carousel-item">
                    <img className="d-block w-100" src={carousel_Img} alt="Third slide"/>
                </div>
            </div>

            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>

                <span className="sr-only">Previous</span>
            </a>

            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>

                <span className="sr-only">Next</span>
            </a>
        </div>
    );
  }
  
  export default carousel;