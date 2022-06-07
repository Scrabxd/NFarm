<template>
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top d-flex align-items-center header-transparent">
    <div class="container d-flex align-items-center justify-content-between">

      <div class="logo">
        <h1><router-link to="/">NFarm</router-link></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto menu-item active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto menu-item" href="#about">About</a></li>
          <li><a class="nav-link scrollto menu-item" href="#team">Team</a></li>
          <li><a class="nav-link scrollto menu-item" href="#pricing">Pricing</a></li>
          <li><a class="nav-link scrollto upload-nav-item">Upload my cattle</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header>
  <!-- End Header -->

</template>

<script>
import Swal from 'sweetalert2'
const zeniqChainId = 383414847825
// menu items reference

window.onload = () => {
  const menuItems = document.querySelectorAll( '.menu-item' )
  
  menuItems.forEach( item => {

    item.addEventListener( 'click', () => {
      menuItems.forEach( item => {
        item.classList.remove( 'active' )
      })

      item.classList.add( 'active' )
      
    })
    })

}


window.addEventListener( 'load', () => {

  const uploadCattleItem = document.querySelector( '.upload-nav-item' )
  
  uploadCattleItem.addEventListener( 'click', loginWithMetamask )

})

async function loginWithMetamask () {

    // make a request to connect to a metamask account and get the wallet address
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        .catch( ( error ) => {
            if (error.code === 4001 ) {
                Swal.fire( 'You need to accept the request to continue' )
            }
            return 
        })

    // if we don't have account return to avoid asign user wallet
    if ( !accounts ) { 

      Swal.fire( "We couldn't connect to you MetaMask account" )

      return 
      
      }

    
    // get the metamask chain id
    window.networkChainId = window.ethereum.networkVersion;

    //check if metamask is connected to zeniq chain
    if ( window.networkChainId == zeniqChainId ) {

        window.userWalletAddress = accounts[ 0 ]
        window.location.href = 'http://localhost:8080/upload-my-cattle';

    } else {

        Swal.fire( 'Please connect to zeniq smart chain' )
        metamaskLogOut();

    }

}

async function metamaskLogOut () {
    // delete the userWalletAddress
    window.userWalletAddress = null
}



export default {
  name: 'HeaderComponent',
}



</script>


