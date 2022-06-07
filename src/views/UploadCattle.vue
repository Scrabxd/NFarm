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
                  <input type="text" name="name" class="form-control" id="name" placeholder="Name" required>
                </div>
                <div class="col-md-6 form-group">
                  <input type="text" class="form-control" name="weight" id="email" placeholder="Weight" required>
                </div>
              </div>
              <div class="row mt-3">
                <div class="form-group ">
                  <input type="text" class="form-control" name="cattle-breed" id="cattle breed" placeholder="Cattle breed" required>
                </div>
              </div> 
               <div class="row mt-3">
                <div class="col-md-6 form-group ">
                  <input type="text" class="form-control" name="location" id="location" placeholder="Location" required>
                </div>
                <div class="col-md-6 form-group">
                  <input type="text" class="form-control" name="age" id="age" placeholder="Age" required>
                </div>
              </div>

              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center mt-5"><button type="submit">Upload</button></div>
            </form>

          </div>

        </div>

      </div>
    </section>
</template>