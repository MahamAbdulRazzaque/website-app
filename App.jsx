import './App.css';
import logo from './assets/web-icon-logo-A6B586D114-seeklogo.com_.png';

export default function App() {
  return(
    <div>
      <header className='header'>
        <div className="logo">
          <img src={logo} alt="Website logo" />
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section id='home' className='hero-section'>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, delectus? Nihil minus sunt repellat cumque temporibus ea maxime est eius voluptatibus, tenetur, quas inventore molestias, dicta neque quisquam ipsum repellendus.</p>
      </section>
      <section id='about' className='section'>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, delectus? Nihil minus sunt repellat cumque temporibus ea maxime est eius voluptatibus, tenetur, quas inventore molestias, dicta neque quisquam ipsum repellendus.</p>
      </section>
      <section id='services' className='section'>
        <h2>Our Servies</h2>
        <div className="conatiner">
          <div className="card"><h3>Web Designing</h3></div>
          <div className="card"><h3>Web Designing</h3></div>
          <div className="card"><h3>Web Designing</h3></div>
          <div className="card"><h3>Web Designing</h3></div>
          <div className="card"><h3>Web Designing</h3></div>
          <div className="card"><h3>Web Designing</h3></div>
        </div>
      </section>
      <section id='contact' className='section'>
        <h2>Contact Us</h2>
        <p>Email : info@gmail.com</p>
        <p>Phone : +92 145678993</p>
      </section>
      <footer className='footer'>
        <p>&copy; 2025 Mywebsite. All rights reserveds</p>
      </footer>
    </div>
  )
}