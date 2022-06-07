<template>
    <section id="contact" class="contact mt-5">
      <div class="container">

        <div class="section-title mt-5 text-center" data-aos="fade-up">
          <p>Upload my cattle</p>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left" data-aos-delay="200">

            <form action="#" method="post" role="form" class="php-email-form">
              <div class="row mt-3">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Name" >
                </div>
                <div class="col-md-6 form-group">
                  <input type="text" class="form-control" name="weight" id="email" placeholder="Weight" >
                </div>
              </div>
              <div class="row mt-3">
                <div class="form-group ">
                  <input type="text" class="form-control" name="cattle-breed" id="cattle breed" placeholder="Cattle breed" >
                </div>
              </div> 
               <div class="row mt-3">
                <div class="col-md-6 form-group ">
                  <input type="text" class="form-control" name="location" id="location" placeholder="Location" >
                </div>
                <div class="col-md-6 form-group">
                  <input type="text" class="form-control" name="age" id="age" placeholder="Age" >
                </div>
              </div>

              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center mt-5">
                <a type="button" href="/documents" class="btn mb-4 ms-auto btn-primary-outline mb-5" id="marketplace">
                Upload
            </a>
                </div>
            </form>

          </div>

        </div>

      </div>
    </section>
</template>