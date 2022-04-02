import React from "react";
import Tuits from "../tuits";
import * as service from "../../services/tuits-service";
import {useState} from "react";
import {useParams} from "react-router-dom";
import {useEffect} from "react/cjs/react.production.min";

const Home = () => {
  const {uid} = useParams();
  const [tuits, setTuits] = useState([]);
  const [tuit, setTuit] = useState('');
  const userId = uid;
  const findTuits = () => {
    // if(uid) {
    //   service.findTuitByUser(uid)
    //     .then(tuits => setTuits(tuits))
    // } else {
    //   service.findAllTuits()
    //     .then(tuits => setTuits(tuits))
    // }
  }
  //useEffect(findTuits, []);
  const createTuit = () =>
      service.createTuit(userId, {tuit})
          .then(findTuits)
  const deleteTuit = (tid) =>
      service.deleteTuit(tid)
          .then(findTuits)
  return(
    <div className="ttr-home">
      <div className="border border-bottom-0">
        <h4 className="fw-bold p-2">Home Screen</h4>
        {
          uid &&
          <div className="d-flex">
            <div className="p-2">
              <img className="ttr-width-50px rounded-circle"
                   src="../images/nasa-logo.jpg" alt="nasa logo"/>
            </div>
            <div className="p-2 w-100">
              <textarea
                  onChange={(e) =>
                      setTuit(e.target.value)}
                placeholder="What's happening?"
                className="w-100 border-0"></textarea>
              <div className="row">
                <div className="col-10 ttr-font-size-150pc text-primary">
                  <i className="fas fa-portrait me-3"></i>
                  <i className="far fa-gif me-3"></i>
                  <i className="far fa-bar-chart me-3"></i>
                  <i className="far fa-face-smile me-3"></i>
                  <i className="far fa-calendar me-3"></i>
                  <i className="far fa-map-location me-3"></i>
                </div>
                <div className="col-2">
                  <button onClick={createTuit}
                     className={`btn btn-primary rounded-pill fa-pull-right
                                  fw-bold ps-4 pe-4`}>
                    Tuit
                  </button>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
      <Tuits tuits={tuits} deleteTuit={deleteTuit} refreshTuit={findTuits}/>
    </div>
  );
};
export default Home;