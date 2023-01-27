import Layout from '../components/Layout.tsx';

function contact() {
    return (
        <Layout>
            <div className="container text-center">
                <section class="mb-4">


                    <h2 class="h1-responsive font-weight-bold text-center my-5">Contact us</h2>

                    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                        a matter of hours to help you.</p>

                    <div class="row">


                        <div class="col-md-10 mb-md-0 m-auto mb-5">


                            <div class="row">


                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <label for="name" class="mb-3">Your name</label>
                                        <input type="text" id="name" name="name" class="form-control" />
                                    </div>
                                </div>



                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <label for="email" class="mb-3">Your email</label>
                                        <input type="text" id="email" name="email" class="form-control" />
                                    </div>
                                </div>


                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form mb-0">
                                        <label for="subject" class="mb-3">Subject</label>
                                        <input type="text" id="subject" name="subject" class="form-control" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">


                                <div class="col-md-12">

                                    <div class="md-form ">
                                        <label for="message">Your message</label>
                                        <textarea type="text" id="message" name="message" rows="2" class="mb-3 form-control md-textarea"></textarea>
                                    </div>

                                </div>
                            </div>


                            <div class="text-center text-md-left p-4">
                                <a class="btn btn-primary p-3">Submit Now</a>
                            </div>
                        </div>

                    </div>

                </section>
            </div>
        </Layout>
    );
}

export default contact;