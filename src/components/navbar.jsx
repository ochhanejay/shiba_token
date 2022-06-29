import React from 'react'
import '../App.css';

// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js"

const NavBar = () => {
    return ( 
        <>
        {/* <button className='btn btn-primary'>hello</button> */}

        <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    


    <div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <img class="navbar-brand" src='https://shibatoken.com/images/shib-logo.svg'/>
    <a class="navbar-brand name" href="#">
    <div class="button navbar-brand">
    <p class="btnText">SHIBA TOKEN </p>
      <div class="btnTwo">
        <p class="btnText2">SHIBA TOKEN</p>
      </div>
    </div>
    </a>
    </div>
      <form class="d-flex">
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Ecosystem</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Buy</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ShibaSwap</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Art</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Rescue</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Community</a>
        </li>
        <p className='cl'>|</p>
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    EN
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Spanish</a></li>
    <li><a class="dropdown-item" href="#">German</a></li>
    <li><a class="dropdown-item" href="#">Italian</a></li>
    <li><a class="dropdown-item" href="#">Hebrew</a></li>
    <li><a class="dropdown-item" href="#">Russian</a></li>
    <li><a class="dropdown-item" href="#">Vietnamese</a></li>
    <li><a class="dropdown-item" href="#">Chinese</a></li>
  </ul>
</div>
        <li className='nav-item'>
            
            <button className='use_btn btn' ><img src="https://shibatoken.com/images/swap-ico.svg" alt="" className='arow' />Use ShibaSwp</button>
        </li>
      </ul>
    </div>
      </form>
  </div>
</nav>

            {/* <div data-w-id="f0e5ad37-b0ef-10db-2c5c-8f577fe3fd53" class="arr-up-trigger"></div>
  <div data-collapse="medium" data-animation="default" data-duration="400" id="up" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav">
    
    <nav role="navigation" class="nav-menu w-nav-menu">
      <a href="index.html" aria-current="page" class="brand-url mobile-menu w-nav-brand w--current">
        <div class="brand-url-logo-wrap"><img src="images/shib-logo.svg" loading="eager" alt="" class="brand-url--logo"/></div>
        <div class="brand-url-txt-wrap">
          <div class="brand-url--txt white">SHIBA TOKEN</div>
          <div class="brand-url--txt orange">SHIBA TOKEN</div>
        </div>
      </a>
      <div class="nav-menu-holder">
        <a href="#ecosystem" class="nav-link w-nav-link">Ecosystem</a>
        <a href="#how-to-buy" class="nav-link buy w-nav-link">Buy</a>
        <a href="#shibaswap" class="nav-link ss w-nav-link">ShibaSwap</a>
        <a href="#art" class="nav-link more w-nav-link">Art</a>
        <a href="#rescue" class="nav-link more w-nav-link">Rescue</a>
        <a href="#community" class="nav-link more w-nav-link">Community</a>
        <div data-hover="false" data-delay="200" class="nav-drop more w-dropdown">
          <div class="nav-drop-toggle w-dropdown-toggle">
            <div>More</div><img src="images/lang-arr.svg" loading="eager" alt="" class="nav-drop-toggle__ico"/>
          </div>
          <nav class="nav-drop-list w-dropdown-list">
            <a href="#how-to-buy" class="nav-drop-link buy w-dropdown-link">Buy</a>
            <a href="#shibaswap" class="nav-drop-link ss w-dropdown-link">ShibaSwap</a>
            <a href="#art" class="nav-drop-link w-dropdown-link">Art</a>
            <a href="#rescue" class="nav-drop-link w-dropdown-link">Rescue</a>
            <a href="#community" class="nav-drop-link w-dropdown-link">Community</a><img src="images/lang-ico.svg" loading="eager" alt="" class="nav-drop-list__ico"/>
          </nav>
        </div>
        <div class="nav-menu-divider"></div>
        <div data-hover="false" data-delay="200" class="nav-drop w-dropdown">
          <div class="nav-drop-toggle w-dropdown-toggle">
            <div>EN</div><img src="images/lang-arr.svg" loading="eager" alt="" class="nav-drop-toggle__ico"/>
          </div>
          <nav class="nav-drop-list w-dropdown-list">
            <a href="#" class="nav-drop-link inactive w-dropdown-link">Spanish</a>
            <a href="#" class="nav-drop-link inactive w-dropdown-link">German</a>
            <a href="#" class="nav-drop-link inactive w-dropdown-link">Italian</a>
            <a href="#" class="nav-drop-link inactive w-dropdown-link">Hebrew</a>
            <a href="#" class="nav-drop-link inactive w-dropdown-link">Russian</a>
            <a href="#" class="nav-drop-link inactive w-dropdown-link">Romanian</a>
            <a href="#" class="nav-drop-link inactive w-dropdown-link">Vietnamese</a>
            <a href="#" class="nav-drop-link inactive w-dropdown-link">Chinese</a><img src="images/lang-ico.svg" loading="eager" alt="" class="nav-drop-list__ico"/>
          </nav>
        </div>
        <a data-w-id="83ede1da-a6a9-6333-f4b5-f0658eb01779" href="https://shibaswap.com/" target="_blank" class="cta-btn-transparent mobile-menu w-inline-block"><img src="images/swap-ico.svg" loading="eager" alt="" class="cta-btn--ico mobile-menu"/>
          <div class="cta-btn__txt">Use ShibaSwap</div>
          <div class="cta-btn-transparent__gradhide"></div>
          <div class="cta-btn-transparent__gradhide-red"></div>
          <div class="cta-btn-transparent__animbox"></div>
        </a>
      </div>
    </nav>
    <div scroll="both" class="navbar-menu-btn w-nav-button">
      <div data-w-id="8d5d5526-3ed7-7fc9-3cbe-7e890f4a33c1" data-animation-type="lottie" data-src="https://uploads-ssl.webflow.com/5e91e0975f867814995a0439/5e9b03aa05bf3a7794114011_tw-menu.json" data-loop="0" data-direction="1" data-autoplay="0" data-is-ix2-target="1" data-renderer="svg" data-default-duration="3" data-duration="0" data-ix2-initial-state="0" class="navbar-lottie"></div>
    </div>
  </div> */}
        </>
     );
}
 
export default NavBar;