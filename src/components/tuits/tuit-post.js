const TuitPost = ({createTuit, setTuit}) => {

    return (
        <div className="p-2 w-100">
              <textarea
                  onChange={(e) =>
                      setTuit(e.target.value)}
                  placeholder="What's happening?"
                  className="w-100 border-0"/>
            <div className="row">
                <div className="col-10 ttr-font-size-150pc text-primary">
                    <i className="fas fa-portrait me-3"/>
                    <i className="far fa-gif me-3"/>
                    <i className="far fa-bar-chart me-3"/>
                    <i className="far fa-face-smile me-3"/>
                    <i className="far fa-calendar me-3"/>
                    <i className="far fa-map-location me-3"/>
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
    );
};

export default TuitPost;