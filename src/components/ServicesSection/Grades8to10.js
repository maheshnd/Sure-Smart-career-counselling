export const Grades8to10 = () => {
  return (
    <div
      className="tab-pane fade show active"
      id="v-pills-nextgen"
      role="tabpanel"
      aria-labelledby="v-pills-nextgen-tab"
    >
      <div className="d-md-flex">
        <div className="one-forth align-self-center">
          <img src="images/student1.png" className="img-fluid" alt="" />
        </div>
        <div className="one-half ml-md-5 align-self-center">
          <div className="accordion" id="accordionExample">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    PROFILE EVALUATION
                  </button>
                </h5>
              </div>

              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  Questions about streams only via Email
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    COUNSELLING SESSION
                  </button>
                </h5>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="card-body">Questions about streams</div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    COUNSELLING PLUS CAREER ASSESMENT
                  </button>
                </h5>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">
                      Questions on India and Abroad Colleges
                    </li>
                    <li className="list-group-item">
                      College admissions and scholarships advice
                    </li>
                    <li className="list-group-item">
                      Understanding personality
                    </li>
                    <li className="list-group-item">
                      Report with three key careers indication
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    COUNSELLING PLUS CAREER ASSESMENT
                  </button>
                </h5>
              </div>
              <div
                id="collapseFour"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">
                      Questions on India and Abroad Colleges
                    </li>
                    <li className="list-group-item">
                      College admissions and scholarships advice
                    </li>
                    <li className="list-group-item">
                      14 page report with three key careers indication
                    </li>
                    <li className="list-group-item">5 -6 sessions a year</li>
                    <li className="list-group-item">
                      Guidance on the admission test process
                    </li>
                    <li className="list-group-item">
                      Test, pattern syllabus and finalizing best strategy
                    </li>
                    <li className="list-group-item">
                      Short listing colleges: Aspiration, Best-fit and Safe fit
                    </li>
                    <li className="list-group-item">
                      College List servicesFor atleast 2 Career options
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
