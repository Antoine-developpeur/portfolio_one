import './main.css';
import logo from '../img/canard.webp';

function main() {
    return (
      <main className="">
        <div className="start">
            <h1>Bienvenue</h1>
            
            <div className="block">
                <img src={logo}/>

                <p>lorem  lipsum</p>
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

            <div className="block">
                <img src={logo}/>

                <p>lorem  lipsum</p>
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