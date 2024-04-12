import React from "react";

const FaqOne = () => {
  return (
    <>
      {/*faq-area start*/}
      <div>
        <div className="container p-sm-0">
          <div className="row">
            <div className="col-xl-6 col-lg-5 order-lg-2">
              <div className="thumb text-center mb-4 mb-lg-0">
                <img src="assets/img/faq/faq.jpg" alt="Transpro" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 order-lg-1">
              <div className="section-title">
                <h4 className="subtitle">FAQ</h4>
                <h2 className="title">FREQUENTLY ASKED ANY QUESTION</h2>
                <p className="content">
                  Progressively utilize integrated bandwidth via vertical
                  relationships. Objectively impact emerging human capital via
                  tactical methods of empowerment.
                </p>
              </div>
              <div className="accordion faq-accordion" id="accordionExample">
                <div className="accordion-item single-accordion-inner">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <span>1.</span> What is a removalist and what services do
                      they provide?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      A removalist is a company that specialises in helping
                      people move their belongings from one location to another.
                      They provide a range of services, including packing,
                      loading, transportation, unloading, and unpacking. Some
                      removalists may also offer additional services, such as
                      storage solutions or pet transport.
                    </div>
                  </div>
                </div>
                <div className="accordion-item single-accordion-inner">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <span>2.</span> How much does it cost to move house
                      Australia?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Moving house in Australia can be expensive, but the cost
                      varies depending on factors like distance and the amount
                      of items involved. Local moves can range from AUD $100 to
                      $200 per hour, while long-distance moves are usually based
                      on volume and distance, potentially costing anywhere from
                      $500 to over $10,000. If you need packing, unpacking or
                      furniture assembly services, you should expect to pay
                      extra. Connect with local moving companies today at Find a
                      Mover and be sure to account for incidental expenses in
                      your budget
                    </div>
                  </div>
                </div>
                <div className="accordion-item single-accordion-inner mb-0">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <span>3.</span> How many boxes do I need for a 3 bed house
                      move?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      So you're wondering how many boxes you'll need to get the
                      move done. The truth is, it can vary based on a few key
                      factors. Room size, the amount of possessions you own, and
                      your personal packing style can all play a role. Although,
                      as a rough guideline, you'll likely require anywhere from
                      30 to 50 boxes to reliably manage a 3-bedroom move. Let's
                      get started on your stress-free moving journey.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*faq-area end*/}
    </>
  );
};

export default FaqOne;
