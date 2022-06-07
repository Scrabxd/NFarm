<template>
  <section id="hero">

    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
          <div data-aos="zoom-out">
            <h1>You, Your Cattle & The System <span>...</span></h1>
            <h2>Automated cattle certification system via NFT</h2>
            <div class="text-center text-lg-start">
              <a class="btn-get-started scrollto">Get Started</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="300">
          <img src="assets/img/clouds-nodes.png" class="img-fluid animated" alt="">
        </div>
      </div>
    </div>

<!--     <svg class="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
      <defs>
        <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z">
      </defs>
      <g class="wave1">
        <use xlink:href="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)">
      </g>
      <g class="wave2">
        <use xlink:href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)">
      </g>
      <g class="wave3">
        <use xlink:href="#wave-path" x="50" y="9" fill="#fff">
      </g>
    </svg> -->

  </section>

</template>

<script>

import Swal from 'sweetalert2'

//References
const zeniqChainId = 383414847825
window.userWalletAddress = null
window.networkChainId    = null

window.onload = () => {

  const btnGetStarted = document.querySelector( '.btn-get-started' )


  btnGetStarted.addEventListener( 'click', () => {

    //check if ethereum extension is installed  
    if (window.ethereum !== 'undefined') {

      loginWithMetamask();

    } else {

        Swal.fire( "You don't have metamask installed" )

      }

  })


}

// Connections
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
        window.location.href = 'http://localhost:8080/marketplace';

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
  name: 'HeroComponent'
}
</script>


