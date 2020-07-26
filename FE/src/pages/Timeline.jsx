import React, { useEffect } from "react";
import "../styles/Timeline.css";
import { connect } from "react-redux";
import Card from "../components/common/Card";
import { Link } from "react-router-dom";
import { ADD_TO_FAVOURITES } from "../redux/actionCreators/userActionCreators";
import { SET_TIMELINE } from "../redux/actionCreators/timelineActionCreators";

function Timeline(props) {
  const { SET_TIMELINE } = props;

  useEffect(() => {
    SET_TIMELINE();
  }, [SET_TIMELINE]);

  console.log(props);
  return (
    <div className="Timeline">
      {props.allState.timelineState.allPosts.length ? (
        props.allState.timelineState.allPosts.map(post => (
          <div key={post.id} className="card mt-5" style={{ width: "200px" }}>
            <Card post={post} />
            <Link
              onClick={() => ADD_TO_FAVOURITES(post.id)}
              to=""
              className="btn btn-primary"
            >
              Add to favourites
            </Link>
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
const mapStateToProps = state => {
  return { allState: { ...state } };
};

export default connect(
  mapStateToProps,
  { SET_TIMELINE, ADD_TO_FAVOURITES }
)(Timeline);
