import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Ecommerce/Ecommerce.css';
import api from "../../config/configApi";  // Certifique-se de que o caminho para seu arquivo de configuração da API está correto
export const Ecommerce = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/produtos');
        setProducts(Array.isArray(response.data.products) ? response.data.products : []);
      } catch (error) {
        console.error('Erro ao obter os produtos:', error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === products.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? products.length - 1 : prevSlide - 1));
  };

  const handleImageClick = (productId) => {
    sessionStorage.setItem('selectedProductId', productId);
    navigate('/rosa');
  };

  return (
    <div>
      <nav className="navbar nav-cart navbar-expand-lg bg-body-tertiary myGrid">
        <div className="container-fluid">
          <button className="navbar-toggler navChoco d-block d-sm-none menuResponsi" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <i className='bx bx-menu navbar-toggler' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation"></i>
          <div className="offcanvas offcanvas-end myGridChild1" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body body-Cart">
              <ul className="nav navChocoDoce">
                <li className="nav-item nav-ChocoItem">
                  <a className="nav-link nav-chocoLink nav-alpha" href="#">Home</a>
                </li>
                <li className="nav-item nav-ChocoItem">
                  <a className="nav-link nav-chocoLink nav-alpha" href="#">Quem Somos</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="alphaBrand myGridChild2">
          <img className="chocoRosa" src="/img/logoChocola.svg" alt="Bootstrap" />
        </div>
        <div className="input-group myGridChild3">
          <div className="pesquisarChoco">
            <i className="bi bi-search"></i>
            <input type="text" className="form-control" />
          </div>
          <i className="bi bi-cart2 carrinho"></i>
          <i className="bi bi-person-circle"></i>
        </div>
      </nav>

      <section className="orange-container">
        <div className="row">
          <div className="col-md-12 space-above">
            <h2 className="pattaya-text">Shop now</h2>
            <p className="montserrat-text">Entre e mergulhe em um mundo de delícias! Bem-vindo ao paraíso dos chocolates, onde cada pedaço é uma tentação irresistível.</p>
          </div>
        </div>
        <img src="menina-chocolate.png" alt="Sua Imagem" className="image-menina" />
      </section>

      <section className="colorful-background">
        <div className="overlay-content">
          <h2 className="overlay-title-righteous"> Descubra Nossos Novos Sabores!</h2>
          <p className="overlay-text-montserrat">Desde combinações clássicas até criações surpreendentes, cada mordida é uma experiência única de prazer e indulgência. <br></br> Corra para a nossa loja e mergulhe nessa tentação de sabores!</p>
          <div className="buttons">
            <button className="saiba-mais-button">Saiba mais</button>
          </div>
        </div>
      </section>

      <section className="centered-image">
        <img src="menino-comendo.png" alt="Sua Imagem" className="image-menino" />
        <div className="carousel-section">
          <div className="carousel">
            <button className="prev" onClick={prevSlide}><i className="bi bi-arrow-left"></i></button>
            {products.map((product, index) => (
              <img
                key={index}
                src={product.image}
                alt={`Slide ${index}`}
                className={index === currentSlide ? "slide active" : "slide"}
                onClick={() => handleImageClick(product.id)}
              />
            ))}
            <button className="next" onClick={nextSlide}><i className="bi bi-arrow-right"></i></button>
          </div>
        </div>
      </section>

      <section className="product-list">
        <h2>Produtos</h2>
        {error && <p className="error">{error}</p>}
        <ul>
          {products.map((product, index) => (
            <li key={index}>{product.nome}</li>
          ))}
        </ul>
      </section>

      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 WIDTH logoDiv">
              <div className="logoHome">
                <a href="index.html"><img src="alpha.svg" alt="" className="img-fluid logo-footer" width={130} /></a>
                <div className="footer-about">
                  <p> </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 faleConosco WIDTH">
              <div className="useful-link">
                <h2>Useful Links</h2>
                <img src="./assets/images/about/home_line.png" alt="" className="img-fluid" />
                <div className="use-links">
                  <li><a href="index.html"><i className="bi bi-caret-right-fill"></i> FALE CONOSCO</a></li>
                  <li><a href="about.html"><i className="bi bi-caret-right-fill"></i> FEEDBACK</a></li>
                  <li><a href="gallery.html"><i className="bi bi-caret-right-fill"></i> SUPORTE</a></li>
                  <li><a href="contact.html"><i className="bi bi-caret-right-fill"></i> REGULAMENTOS</a></li>
                </div>
              </div>
            </div>
            <div className="col-md-3 linksHome WIDTH">
              <div className="social-links">
                <h2>Follow Us</h2>
                <img src="./assets/images/about/home_line.png" alt="" />
                <div className="social-icons">
                  <li><a href=""><i className="bi bi-facebook"></i> Facebook</a></li>
                  <li><a href=""><i className="bi bi-instagram"></i> Instagram</a></li>
                  <li><a href=""><i className="bi bi-linkedin"></i> Linkedin</a></li>
                </div>
              </div>
            </div>
            <div className="col-md-3 localHome">
              <div className="address">
                <h2>Address</h2>
                <img src="./assets/images/about/home_line.png" alt="" className="img-fluid" />
                <div className="address-links">
                  <li className="address1"><i className="bi bi-geo-alt-fill"></i> Kolathur ramankulam- Malappuram Dt Kerala 679338</li>
                  <li><a href=""><i className="bi bi-telephone-fill"></i> +91 90904500112</a></li>
                  <li><a href=""><i className="bi bi-envelope-fill"></i> mail@1234567.com</a></li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <section id="copy-right">
        <div className="copy-right-sec">
          <div className="itemsCopy">
            <i className="bi bi-c-circle"></i>
            <p>2021 Chobani, LCC, All Rights Reserved</p>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ecommerce;
