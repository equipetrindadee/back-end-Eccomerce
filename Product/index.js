import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../config/configApi";
import '../Product/product.css'

export const ChocolateRosa = () => {
    const [product, setProduct] = useState(null); // Estado para o produto selecionado
    const [quantity, setQuantity] = useState(1); // Estado para a quantidade
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get('/produtos');
                const products = response.data.produtos || [];
                console.log("Dados da API:", response.data); // Adicionando console.log para verificar os dados retornados pela API
                // Encontre o produto com o id desejado
                const selectedProduct = products.find(product => product.id === 1);
                if (selectedProduct) {
                    setProduct(selectedProduct);
                    console.log("Produto encontrado:", selectedProduct); // Adicionando console.log para verificar o produto encontrado
                } else {
                    console.error("Produto não encontrado.");
                }
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        };
        fetchProducts();
    }, []);



    const handleBuyClick = () => {
        if (product) {
            const selectedProduct = {
                id: product.id,
                name: product.name,
                price: product.price,
                description: product.description,
                quantity: quantity // Adiciona a quantidade ao produto selecionado
            };

            navigate('/cart', { state: { product: selectedProduct } });
        } else {
            console.error("Nenhum produto disponível.");
        }
    };

    const increaseQuantity = () => setQuantity(prevQuantity => prevQuantity + 1);
    const decreaseQuantity = () => setQuantity(prevQuantity => Math.max(0, prevQuantity - 1));

    return (
        <div>
            <body>
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
                                        <a className="nav-link nav-chocoLink nav-alpha" href="#">Store</a>
                                    </li>
                                    <li className="nav-item nav-ChocoItem">
                                        <a className="nav-link nav-chocoLink nav-alpha" href="#">Blog</a>
                                    </li>
                                    <li className="nav-item nav-ChocoItem">
                                        <a className="nav-link nav-chocoLink nav-alpha" href="#">Contacts</a>
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
                            <input type="text" className="form-control btn" />
                        </div>
                        <i className="bi bi-cart2 cartNav"></i>
                        <i className="bi bi-person-circle"></i>
                    </div>
                </nav>

                <p className="descricao-chocolateRosa">Descrição do produto</p>

                <div className="container-rosa">
                    <div className="quadradoAmarelo"></div>
                    <div className="chocolate-rosa-info">
                        <h1 className="titleDescri">Descrição de produto</h1>
                        <img className="talentoMorango" src="./img/talento1.png" alt="Chocolate Talento" />
                        <div className="flexImage">
                            <div className="chocoMorango">
                                <h1 className="chocoRosa-h1">Chocolate Talento</h1>
                                <p>
                                    <span className="text-marcado">Branco com Doce de Leite 85g</span>
                                </p>
                            </div>
                            <img src="./img/talento1.png" alt="Chocolate Talento" />
                        </div>

                        <div className="valores-product">
                            <p className="preco-rosa">R$ {product && product.price.toFixed(2)}</p>



                            <div className="quantity-control">
                                <button className="quantity-button" onClick={decreaseQuantity}>-</button>
                                <span className="quantity">{quantity}</span>
                                <button className="quantity-button" onClick={increaseQuantity}>+</button>
                            </div>
                        </div>

                        <div className="rating">
                            <input type="radio" id="star5" name="rate" value="5" />
                            <label htmlFor="star5" title="text"></label>
                            <input type="radio" id="star4" name="rate" value="4" />
                            <label htmlFor="star4" title="text"></label>
                            <input type="radio" id="star3" name="rate" value="3" />
                            <label htmlFor="star3" title="text"></label>
                            <input type="radio" id="star2" name="rate" value="2" />
                            <label htmlFor="star2" title="text"></label>
                            <input defaultChecked type="radio" id="star1" name="rate" value="1" />
                            <label htmlFor="star1" title="text"></label>
                        </div>

                        <p className="descricao-chocoRosa">DESCRIÇÃO</p>
                        <p className="descricao-text-chocoRosa">Uma combinação perfeita entre o chocolate branco Talento® e o delicioso sabor de Doce de Leite.</p>
                        <div className="compra-chocolateRosa">
                            <div className="icone-chocolateRosa">
                                <i className="bi bi-cart2 cartIcon"></i>
                            </div>
                            <button onClick={handleBuyClick} className="comprar-chocoRosa">COMPRAR</button>
                        </div>
                    </div>
                    <div className="chocolate-image">
                        <img src="./img/talento1.png" alt="Chocolate Talento" />
                    </div>
                </div>
            </body>
        </div>
    )
}

export default ChocolateRosa;
