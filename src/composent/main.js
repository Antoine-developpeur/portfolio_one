import './main.css';
import Carousel from './carousel'
import logo from '../img/canard.webp';
import Tes from './text'
// import carousel_P_O from '../img/Elipse 2.png'

function main() {
    return (
      <main className="">
        <div className="start">
            <h1>Bienvenue</h1>
            
            <div className="block">
                <img src={logo}/>

                <p><Tes /></p>
            </div>
        </div>

        <div className="pre">
            <h2>Présentation</h2>

            <div className="block">
                <p>lorem  lipsum</p>

                <img src={logo}/>
            </div>
        </div>

        <div className="project">
            <h2>Projets</h2>

            <div className="block_c">
                {/* carousel */}

                
                <Carousel />
                {/* <p>lorem  lipsum</p> */}
            </div>

            <div className="point">
                
            </div>
        </div>

        <div className="competences">
            <h2>Compétences</h2>

            <div className="block">
                <p>lorem  lipsum</p>

                <img src={logo}/>
            </div>
        </div>

        <div className="contact">
            <h2>Contact</h2>

            <div className="block">
                <img src={logo}/>

                <p>lorem  lipsum</p>
            </div>
        </div>
      </main>
    );
  }
  
  export default main;

 
//   function carousel() {

// function carousel() {
//     if(is)
// }