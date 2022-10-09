import React from 'react'

export default function footer() {
    return (
        <>
            <section class="page-footer" >

                <div class="text-center text-black footer-bg">

                    <div class="container">

                        <section class="mt-5">

                            <div class="row text-center d-flex justify-content-center pt-5">

                                <div class="col-md-2">
                                    <h6 class="text-uppercase font-weight-bold">
                                        <a href="#!" class="text-white">About us</a>
                                    </h6>
                                </div>

                                <div class="col-md-2">
                                    <h6 class="text-uppercase font-weight-bold">
                                        <a href="#!" class="text-white">Products</a>
                                    </h6>
                                </div>

                                <div class="col-md-2">
                                    <h6 class="text-uppercase font-weight-bold">
                                        <a href="#!" class="text-white">Awards</a>
                                    </h6>
                                </div>

                                <div class="col-md-2">
                                    <h6 class="text-uppercase font-weight-bold">
                                        <a href="#!" class="text-white">Help</a>
                                    </h6>
                                </div>

                                <div class="col-md-2">
                                    <h6 class="text-uppercase font-weight-bold">
                                        <a href="#!" class="text-white">Contact</a>
                                    </h6>
                                </div>

                            </div>

                        </section>

                        <hr class="my-5" />

                        <section class="mb-5">
                            <div class="row d-flex justify-content-center">
                                <div class="col-lg-8">
                                    <p class="text-white">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                                        distinctio earum repellat quaerat voluptatibus placeat nam,
                                        commodi optio pariatur est quia magnam eum harum corrupti
                                        dicta, aliquam sequi voluptate quas.
                                    </p>
                                </div>
                            </div>
                        </section>


                        {/* Section: Social  */}
                        <section class="text-center mb-5">
                            <a href="#" class="text-white me-4">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="text-white me-4">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="text-white me-4">
                                <i class="fab fa-google"></i>
                            </a>
                            <a href="#" class="text-white me-4">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#" class="text-white me-4">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href="#" class="text-white me-4">
                                <i class="fab fa-github"></i>
                            </a>
                        </section>
                        {/*  Section: Social  */}
                    </div>
                    {/* - Grid container  */}

                    {/* - Copyright  */}
                    <div
                        class="text-center p-3 copy-right-bg"
                    >
                        © 2020 Copyright:
                        <a class="text-white" href="https://mdbootstrap.com/"
                        >MDBootstrap.com</a
                        >
                    </div>
                    {/*  Copyright  */}
                </div>

            </section>
        </>

    )
}
