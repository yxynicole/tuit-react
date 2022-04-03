import React from "react";
import Tuits from "../tuits";
import * as service from "../../services/tuits-service";
import {useState} from "react";
import {useParams } from "react-router-dom";
import TuitPost from "../tuits/tuit-post"
//import {useEffect} from "react/cjs/react.production.min";

const Home = () => {
  const {uid} = useParams();

  const [tuits, setTuits] = useState([]);
  const [tuit, setTuit] = useState('');
  const userId = uid;
  const findTuits = () => {
    if(uid) {
      service.findTuitByUser(uid)
        .then(tuits => setTuits(tuits))
    } else {
      service.findAllTuits()
        .then(tuits => setTuits(tuits))
    }
  }
  //useEffect(() => {}, []);
  const createTuit = () =>{
      return service.createTuit(userId, {tuit})
          .then(findTuits).catch(e => alert(e))
  }

  const deleteTuit = (tid) =>
      service.deleteTuit(tid)
          .then(findTuits)
  return(
    <div className="ttr-home">
      <div className="border border-bottom-0">
        <h4 className="fw-bold p-2">Home Screen</h4>
          <div className="d-flex">
            <div className="p-2">
              <img className="ttr-width-50px rounded-circle"
                   src="../images/nasa-logo.jpg" alt="nasa logo"/>
            </div>
            <TuitPost createTuit={createTuit} setTuit={setTuit}/>
          </div>
      </div>
      <Tuits tuits={tuits} deleteTuit={deleteTuit} refreshTuits={findTuits}/>
    </div>
  );
};
export default Home;