import React from "react";
import { connect } from "react-redux";
import Card from "../components/common/Card";
import { allState } from "../redux/mapStateToProps";
import "../styles/Favourites.css";

function Favourites(props) {
  const {
    allState: {
      userState: { favourites }
    }
  } = props;
  console.log(props.allState);
  return (
    <div className="Favourites">
      {favourites.length ? (
        favourites.map(post => (
          <div key={post._id} className="card mt-5" style={{ width: "200px" }}>
            <Card post={post} />
          </div>
        ))
      ) : (
        <h1 className="text-center mt-5">No Favourites</h1>
      )}
    </div>
  );
}

export default connect(
  allState,
  null
)(Favourites);
