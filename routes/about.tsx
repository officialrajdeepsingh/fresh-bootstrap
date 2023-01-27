import Layout from '../components/Layout.tsx';

function about() {
    return (
        <Layout>
            <section id="about-section" className="pt-5 pb-5">
                <div className="container wrapabout">
                    <div className="row">
                        <div className="col-lg-10 m-auto align-items-center justify-content-left d-flex mb-5 mb-lg-0">
                            <div className="blockabout">
                                <div className="blockabout-inner text-center text-sm-start">
                                    <div className="title-big pb-3 mb-3">
                                        <h3>ABOUT ME</h3>
                                    </div>
                                    <p className="description-p text-muted pe-0 pe-lg-0">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quas optio reiciendis deleniti voluptatem facere sequi, quia, est sed dicta aliquid quidem facilis culpa iure perferendis? Dolor ad quia deserunt.
                                    </p>
                                    <p className="description-p text-muted pe-0 pe-lg-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quas optio reiciendis deleniti voluptatem facere.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default about;