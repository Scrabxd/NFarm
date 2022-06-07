<template>
    <section id="contact" class="contact mt-5">
      <div class="container">

        <div class="section-title mt-5" data-aos="fade-up">
          <p>Upload documents</p>
        </div>

        <div  class="d-flex mb-10">
            <a type="button" class="btn mb-4 ms-auto btn-primary-outline mb-5 btn-primary-outline--disabled" id="btn-upload">
                Certificate my cattle
            </a>
        </div>

        <div class="row mb-4">
            <div class="col-md-6 col-12">
                <div class="card missing" id="vaccines-card">
                    <div class="card-body d-flex justify-content-between align-items-center align-items-center">
                        <p class="m-0"> Vaccines</p>

                        <button class="btn btn-primary-small btn-sm d-flex align-items-center " id="file">
                            <span class="button-text">Upload</span>
                            <i class="bi bi-cloud-upload"></i>
                        </button>

                        <small class="d-flex align-items-center color-primary validated d-none" id="span">
                            <span>Validated</span>
                            <i class="bi bi-check2-circle color-primary"></i>
                        </small>
                        
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-12">
                <div class="card border-primary document-uploaded">
                    <div class="card-body d-flex justify-content-between align-items-center align-items-center">
                        <p class="m-0"> Livestock slaughterhouse  </p>
                        <small class="d-flex align-items-center color-primary validated">
                            <span>Validated</span>
                            <i class="bi bi-check2-circle color-primary"></i>
                        </small>
                        
                    </div>
                </div>
            </div>

         </div>

        <div class="row mb-4">
            <div class="col-md-6 col-12">
                <div class="card border-primary document-uploaded">
                    <div class="card-body d-flex justify-content-between align-items-center align-items-center">
                        <p class="m-0"> Cut machinery </p>
                        <small class="d-flex align-items-center color-primary validated">
                            <span>Validated</span>
                            <i class="bi bi-check2-circle color-primary"></i>
                        </small>
                        
                    </div>
                </div>
            </div>


            <div class="col-md-6 col-12">
                <div class="card border-primary document-uploaded">
                    <div class="card-body d-flex justify-content-between align-items-center align-items-center">
                        <p class="m-0 color-primary">Feeding</p>
                        <small class="d-flex align-items-center color-primary validated">
                            <span>Validated</span>
                            <i class="bi bi-check2-circle color-primary"></i>
                        </small>
                    </div>
                </div>
            </div>
         </div>

         <div class="row mb-4">
             <div class="col-md-6 col-12">
                <div class="card border-primary document-uploaded">
                    <div class="card-body d-flex justify-content-between align-items-center align-items-center">
                        <p class="m-0 color-primary">Genealogy</p>
                        <small class="d-flex align-items-center color-primary validated">
                            <span>Validated</span>
                            <i class="bi bi-check2-circle color-primary"></i>
                        </small>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-12">
                <div class="card border-primary document-uploaded">
                    <div class="card-body d-flex justify-content-between align-items-center align-items-center">
                        <p class="m-0 color-primary">Cattle shoeing</p>
                        <small class="d-flex align-items-center color-primary validated">
                            <span>Validated</span>
                            <i class="bi bi-check2-circle color-primary"></i>
                        </small>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-4">
             <div class="col-md-6 col-12">
                <div class="card border-primary document-uploaded">
                    <div class="card-body d-flex justify-content-between align-items-center align-items-center">
                        <p class="m-0 color-primary">Beef cut</p>
                        <small class="d-flex align-items-center color-primary validated">
                            <span>Validated</span>
                            <i class="bi bi-check2-circle color-primary"></i>
                        </small>
                    </div>
                </div>
            </div>
             <div class="col-md-6 col-12">
                <div class="card border-primary document-uploaded">
                    <div class="card-body d-flex justify-content-between align-items-center align-items-center">
                        <p class="m-0 color-primary">Refrigerator process</p>
                        <small class="d-flex align-items-center color-primary validated">
                            <span>Validated</span>
                            <i class="bi bi-check2-circle color-primary"></i>
                        </small>
                    </div>
                </div>
            </div>


        </div>

        <div class="row mb-4">
            <div class="col-md-6 col-12">
                <div class="card border-primary document-uploaded">
                    <div class="card-body d-flex justify-content-between align-items-center align-items-center">
                        <p class="m-0 color-primary">Export slaughter certificate</p>
                        <small class="d-flex align-items-center color-primary validated">
                            <span>Validated</span>
                            <i class="bi bi-check2-circle color-primary"></i>
                        </small>
                    </div>
                </div>
            </div>
        </div>


      </div>
    </section>
</template>

<script>

import Swal from 'sweetalert2'

window.onload = () => {

  const btnGetStarted = document.querySelector( '#file' )

  btnGetStarted.addEventListener( 'click', () => {

        Swal.fire({
        title: 'Upload',
        input: 'file',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Upload',
        confirmButtonColor: '#1AA66B',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {

        },
        allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
        if (result.isConfirmed) {
            var btn = document.querySelector( '#btn-upload' );
            var card = document.querySelector( '#vaccines-card' );
            document.querySelector( '#span' ).classList.remove("d-none");
            document.querySelector( '#file' ).classList.add("d-none");
            
            btn.classList.remove("btn-primary-outline--disabled");

            card.classList.remove("missing");
            card.classList.add("document-uploaded");
            card.classList.add("border-primary");

        }
        })

  })


}




export default {
  name: 'DocumentsValidation'
}
</script>




