import React from 'react'

// import images 
import shopAll from "../../assets/images/Funko/fandoms/shop_all.png"
import fandoms_fav from "../../assets/images/Funko/fandoms/fandoms_fav.png"
import vdo_games from "../../assets/images/Funko/fandoms/vdo_games.png"
import anime  from "../../assets/images/Funko/fandoms/anime.png"
import cartoons from "../../assets/images/Funko/fandoms/cartoons.png"
import pop from "../../assets/images/Funko/category/pop.png"

const Header = () => {
    return (
        <div>
            <section className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-xs-12 col-sm-4">
                            <div className="contact-number">
                                <i className="tf-ion-ios-telephone"></i>
                                <span>0123- 12345-025025</span>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12 col-sm-4">
                            <div className="logo text-center">
                                <a href="index.html">
                                    <h2><b>Funko STORE</b></h2>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12 col-sm-4">
                            <ul className="top-menu text-right list-inline">
                                <li className="dropdown cart-nav dropdown-slide">
                                    <a href="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"><i
                                        className="tf-ion-android-cart"></i>Cart</a>
                                    <div className="dropdown-menu cart-dropdown">
                                        <div className="media">
                                            <a className="pull-left" href="#!">
                                                <img className="media-object" src="./images/Funko/product/home-product/pro-1.png" alt="image" />
                                            </a>
                                            <div className="media-body">
                                                <h4 className="media-heading"><a href="#!">POP! THÉODEN</a></h4>

                                                <h5><strong>$1200</strong></h5>
                                            </div>
                                            <a href="#!" className="remove"><i className="tf-ion-close"></i></a>
                                        </div>

                                        <div className="media">
                                            <a className="pull-left" href="#!">
                                                <img className="media-object" src="./images/Funko/product/home-product/pro-2.png" alt="image" />
                                            </a>
                                            <div className="media-body">
                                                <h4 className="media-heading"><a href="#!">POP! LIGHT FURY</a></h4>

                                                <h5><strong>$12.00</strong></h5>
                                            </div>
                                            <a href="#!" className="remove"><i className="tf-ion-close"></i></a>
                                        </div>

                                        <div className="cart-summary">
                                            <span>Total</span>
                                            <span className="total-price">$1799.00</span>
                                        </div>
                                        <ul className="text-center cart-buttons">
                                            <li><a href="cart.html" className="btn btn-small">View Cart</a></li>
                                            <li><a href="checkout.html" className="btn btn-small btn-solid-border">Checkout</a></li>
                                        </ul>
                                    </div>

                                </li>

                                <li className="dropdown search dropdown-slide">
                                    <a href="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"><i
                                        className="tf-ion-ios-search-strong"></i> Search</a>
                                    <ul className="dropdown-menu search-dropdown">
                                        <li>
                                            <form action="https://demo.themefisher.com/aviato-bootstrap/post">
                                                <input type="search" className="form-control" placeholder="Search..." /></form>
                                        </li>
                                    </ul>
                                </li>

                                <li className="commonSelect">
                                    <select className="form-control">
                                        <option>EN</option>
                                        <option>DE</option>
                                        <option>FR</option>
                                        <option>ES</option>
                                    </select>
                                </li>

                                <li className="ps-5 ms-5">
                                    <a href="/login.html">Login</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            <section className="menu">
                <nav className="navbar navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <h2 className="menu-title">Main Menu</h2>
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                                aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                        </div>

                        <div id="navbar" className="navbar-collapse collapse text-center">
                            <ul className="nav navbar-nav">

                                <li className="dropdown ">
                                    <a href="index.html">Home</a>
                                </li>


                                <li className="dropdown dropdown-slide">
                                    <a href="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
                                        role="button" aria-haspopup="true" aria-expanded="false">Fandoms <span
                                            className="tf-ion-ios-arrow-down"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="./shop.html"> <img className="nav-list-img" src={shopAll} alt="shop all" /> Shop All</a></li>
                                        <li><a href="./shop.html"> <img className="nav-list-img" src={fandoms_fav} alt="favorites" />
                                            Fandoms Favorites</a></li>
                                        <li><a href="./shop.html"> <img className="nav-list-img" src={vdo_games} alt="video games" /> Video Games</a></li>
                                        <li><a href="./shop.html"> <img className="nav-list-img" src={anime} alt="anime & manga" /> Anime & Manga</a></li>
                                        <li><a href="./shop.html"> <img className="nav-list-img" src={cartoons} alt="animation and cartoons" />Animation & Cartoons</a></li>
                                    </ul>
                                </li>

                                <li className="dropdown dropdown-slide">
                                    <a href="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
                                        role="button" aria-haspopup="true" aria-expanded="false">Category <span
                                            className="tf-ion-ios-arrow-down"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="./shop.html"> <img className="nav-list-img" src={pop} alt="shop all" /> Pop!</a></li>
                                        
                                        <li><a href="./shop.html"> <img className="nav-list-img" src="./images/Funko/category/rewind.png" alt="video games" /> Rewind</a></li>
                                        <li><a href="./shop.html"> <img className="nav-list-img" src="./images/Funko/category/soda.png" alt="anime & manga" /> Vinyl Soda</a></li>
                                        <li><a href="./shop.html"> <img className="nav-list-img" src="./images/Funko/category/gold.png" alt="animation and cartoons" />Vinyl Gold</a></li>
                                    </ul>
                                </li>

                                <li className="dropdown dropdown-slide">
                                    <a href="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
                                        role="button" aria-haspopup="true" aria-expanded="false">Featured <span
                                            className="tf-ion-ios-arrow-down"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="./shop.html"> <img className="nav-list-img" src="./images/Funko/featured/new.png" alt="shop all" /> New Releases</a></li>
                                        <li><a href="./shop.html"> <img className="nav-list-img" src="./images/Funko/featured/exclusive.png" alt="favorites" />
                                            Exclisives</a></li>
                                        <li><a href="./shop.html"> <img className="nav-list-img" src="./images/Funko/featured/best.png" alt="video games" /> Best Seller</a></li>
                                        <li><a href="./shop.html"> <img className="nav-list-img" src="./images/Funko/featured/stock.png" alt="anime & manga" /> Back In Stock</a></li>
                                        <li><a href="./shop.html"> <img className="nav-list-img" src="./images/Funko/featured/comming.png" alt="animation and cartoons" />Comming Soon</a></li>
                                    </ul>
                                </li>

                                <li className="dropdown ">
                                    <a href="./coming-soon.html">!Pop Yourself</a>
                                </li>



                            </ul>

                        </div>
                    </div>
                </nav>
            </section>
        </div>
    )
}

export default Header
