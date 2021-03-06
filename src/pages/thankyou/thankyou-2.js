import Head from 'next/head'
import NavBarThanks from '@/components/NavBarThanks'
import FooterMisc from '@/components/FooterMisc'
import LineSeparator from '@/components/LineSeparator'
import ThanksVideo from '@/components/ThanksVideoTwo'
import ThanksBenefit from '@/components/ThanksBenefit'
import ThanksAward from '@/components/ThanksAward'

export default function ThankYou2() {
  return (
    <>
      <Head>
        <title>Thankyou 2</title>
      </Head>
      {/* NAVBAR */}
      <NavBarThanks />
      <div className="page page--thanks page--thanks-two">
        <div className="page-content">
          <section className="thanks-title">
            <div className="container">
              <h1>THANK YOU</h1>
              <h4>We are preparing some money savings quotes for you now, and will be in touch with you shortly!</h4>
            </div>
          </section>
          <section className="thanks-recommend">
            <div className="container">
              <p>In the meantime we recommend...</p>
              <ul className="check">
                <li>
                  <strong>Getting your hands on your most recent health insurance bill</strong>, just so you know the
                  exact policy you are paying for and the amount you are paying... so we can <strong>beat it</strong>.
                </li>
                <li>
                  Having a think about your <strong>‘must have’ hospital and extras cover</strong> and your{' '}
                  <strong>‘nice to have’ hospital and extras cover</strong>. Think about whether you need top of the
                  range hospital cover? Or maybe you wear glasses and you might need optical cover? If you don’t know
                  the answers, let our experts know and they can help you out.
                </li>
              </ul>
            </div>
            <LineSeparator />
          </section>
          <section className="thanks-rating">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card card-rating">
                    <div className="card-body">
                      <div className="row justify-content-between align-items-center">
                        <div className="col-auto">
                          <div className="card-stars">
                            <img src="/static/img/thankyou/rating/stars-1.svg" alt="Five Stars" />
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="card-brand">
                            <img src="/static/img/thankyou/rating/feefo.png" alt="Feefo" />
                          </div>
                        </div>
                      </div>
                      <div className="card-text">
                        <h6 className="card-title">Great customer service</h6>
                        <p>
                          Tom Carroll was very professional, friendly and helpful. He took the time to explain
                          everything to me and found me a better coverage for less $$ monthly! Thanks Tom = legend!
                        </p>
                      </div>
                      <h6 className="card-author">— Caroline</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card card-rating">
                    <div className="card-body">
                      <div className="row justify-content-between align-items-center">
                        <div className="col-auto">
                          <div className="card-stars">
                            <picture>
                              <source
                                srcSet="/static/img/thankyou/rating/stars-2-m.svg"
                                media="(max-width: 768px)"
                                type="image/png"
                              />
                              <source
                                srcSet="/static/img/thankyou/rating/stars-2.svg"
                                media="(min-width: 769px)"
                                type="image/png"
                              />
                              <img src="/static/img/thankyou/rating/stars-2.svg" alt="Five Stars" />
                            </picture>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="card-brand">
                            <img src="/static/img/thankyou/rating/word-of-mouth.png" alt="Word of Mouth" />
                          </div>
                        </div>
                      </div>
                      <div className="card-text">
                        <p>
                          Brittany gave exceptional service - thank you so much. I am saving over $700 a year. Wish I
                          had done it before.
                        </p>
                      </div>
                      <h6 className="card-author">— Caroline</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <LineSeparator />
          </section>
          <section className="thanks-freebie">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-12">
                  <figure className="freebie">
                    <div className="freebie-img">
                      <img src="/static/img/thankyou/first-aid-kit.png" alt="First Aid Kit" />
                    </div>
                    <figcaption>
                      <h3>
                        <span>You will get a free</span> first aid kit when you switch &amp; save in{' '}
                        <span>February</span>
                      </h3>
                    </figcaption>
                  </figure>

                  <ThanksVideo />
                </div>
              </div>
            </div>
          </section>

          <section className="thanks-table-2">
            <div className="container page-content-table">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="card card-widget">
                        <div className="card-body">
                          <h5 className="card-title text-center mb-25px">Average saving by life stage</h5>
                          <div className="card-table">
                            <table className="table table-borderless table-fund">
                              <thead>
                                <tr className="table-orange text-left">
                                  <th>Life Stage</th>
                                  <th>Average Annual Saving</th>
                                </tr>
                              </thead>
                              <tbody className="text-left">
                                <tr>
                                  <td>Couple</td>
                                  <td>$300.08</td>
                                </tr>
                                <tr>
                                  <td>Extended Family</td>
                                  <td>$645.80</td>
                                </tr>
                                <tr>
                                  <td>Family</td>
                                  <td>$594.26</td>
                                </tr>
                                <tr>
                                  <td>Single</td>
                                  <td>$296.28</td>
                                </tr>
                                <tr>
                                  <td>Single Parent</td>
                                  <td>$540.61</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="card-footer">
                          <p>
                            Integer luctus tempor ex at ornare. Morbi et interdum est. Integer laoreet ex et mauris
                            euismod, eu cursus erat efficitur.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="card card-widget">
                        <div className="card-body">
                          <h5 className="card-title text-center mb-25px">Premium increases 2020 and 2021</h5>
                          <div className="card-table">
                            <table className="table table-borderless table-fund">
                              <thead>
                                <tr className="table-orange text-left">
                                  <th></th>
                                  <th>Oct 2020</th>
                                  <th>April 2021</th>
                                  <th>Total Rate Rise</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Fund 1</td>
                                  <td>5.58%</td>
                                  <td>3.78%</td>
                                  <td className="table-danger">9.36%</td>
                                </tr>
                                <tr>
                                  <td>Fund 2</td>
                                  <td>4.68%</td>
                                  <td>4.07%</td>
                                  <td className="table-danger">8.75%</td>
                                </tr>
                                <tr>
                                  <td>Fund 3</td>
                                  <td>4.32%</td>
                                  <td>4.30%</td>
                                  <td className="table-danger">8.62%</td>
                                </tr>
                                <tr>
                                  <td>Fund 4</td>
                                  <td>3.91%</td>
                                  <td>4.26%</td>
                                  <td className="table-danger">8.17%</td>
                                </tr>
                                <tr>
                                  <td>Fund 5</td>
                                  <td>3.94%</td>
                                  <td>0.83%</td>
                                  <td className="table-success">4.77%</td>
                                </tr>
                                <tr>
                                  <td>Fund 6</td>
                                  <td>2.66%</td>
                                  <td>1.11%</td>
                                  <td className="table-success">3.77%</td>
                                </tr>
                                <tr>
                                  <td>Fund 7</td>
                                  <td>2.90%</td>
                                  <td>0.50%</td>
                                  <td className="table-success">3.40%</td>
                                </tr>
                                <tr>
                                  <td>Fund 8</td>
                                  <td>1.98%</td>
                                  <td>0.94%</td>
                                  <td className="table-success">2.92%</td>
                                </tr>
                              </tbody>
                              <tfoot>
                                <tr>
                                  <td>Industry Average</td>
                                  <td>2.92%</td>
                                  <td>2.74%</td>
                                  <td>5.66%</td>
                                </tr>
                              </tfoot>
                            </table>
                          </div>
                          <p className="card-source">Source: Health.gov.au</p>
                        </div>
                        <div className="card-footer">
                          <p>
                            Integer luctus tempor ex at ornare. Morbi et interdum est. Integer laoreet ex et mauris
                            euismod, eu cursus erat efficitur.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <ThanksBenefit />

          {/* Award */}
          <ThanksAward />
        </div>
      </div>

      <FooterMisc style={{ marginTop: 0 }} />
    </>
  )
}
