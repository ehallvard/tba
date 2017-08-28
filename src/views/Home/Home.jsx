import * as React from "react";
import { connect } from "react-redux";
import {fetchNewTime} from '../../redux/actionCreators';

export const Home = (props) => {
  return (
    <div className="home">
      <h1>Welcome home!</h1>
      <p>
        The time is {props.currentTime}
      </p>
      <button onClick={props.updateTime}>Update</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentTime: state.currentTime.currentTime
  };
};

const mapDispatchToProps = dispatch => ({
    updateTime: () => dispatch(fetchNewTime())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
