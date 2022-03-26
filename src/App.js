import React, { useState, useEffect } from "react";
import { View } from "./components/View";

const getDatafromLS = () => {
  const data = localStorage.getItem("feedbacks");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const App = () => {
  const [feedbacks, setFeedbacks] = useState(getDatafromLS());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [radiobutton, setradiobutton] = useState("");

  const feedbackformhandler = (e) => {
    e.preventDefault();

    let feedback = {
      name,
      email,
      phone,
      radiobutton,
    };

    setFeedbacks([...feedbacks, feedback]);
    setName("");
    setEmail("");
    setPhone("");
    setradiobutton("");
  };

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  return (
    <div className="wrapper">
      <div className="container">
        <h1>Aromatic Bar</h1>
        <hr />

        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#home">
              From
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#tutorials">
              Table
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div className="tab-pane fade show active" id="home">
            <div className="form-container">
              <form
                autoComplete="off"
                className="form-group"
                onSubmit={feedbackformhandler}
              >
                <label>Customer Name</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                ></input>
                <br></br>
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                ></input>
                <br></br>
                <label>Phone</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                ></input>
                <br></br>
                <div className="mb-4">
                  <div className="col-md-6">
                    <label htmlFor="radiobutton" className="form-label">
                      User Experience ?
                    </label>
                    <br />
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="excellent"
                        name="clean"
                        onChange={(e) => setradiobutton(e.target.value)}
                        value="Excellent"
                      />
                      <label className="form-check-label" htmlFor="excellent">
                        Excellent
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="clean"
                        onChange={(e) => setradiobutton(e.target.value)}
                        value="Good"
                      />
                      <label className="form-check-label" htmlFor="goods">
                        Good
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="clean"
                        onChange={(e) => setradiobutton(e.target.value)}
                        value="Fair"
                      />
                      <label className="form-check-label" htmlFor="fair">
                        Fair
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="clean"
                        onChange={(e) => setradiobutton(e.target.value)}
                        value="bed"
                      />
                      <label className="form-check-label" htmlFor="bed">
                        Bed
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-success text-right btn-md  "
                >
                  Give Feedback
                </button>
              </form>
            </div>
          </div>
          <div className="tab-pane fade" id="tutorials">
            <div className="view-container">
              {feedbacks.length > 0 && (
                <>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Customer Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>User Experience</th>
                        </tr>
                      </thead>
                      <tbody>
                        <View feedbacks={feedbacks} />
                      </tbody>
                    </table>
                  </div>
                  <button
                    className="btn btn-danger btn-md"
                    onClick={() => setFeedbacks([])}
                  >
                    Remove All
                  </button>
                </>
              )}
              {feedbacks.length < 1 && <div>No feedbacks are added yet</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
