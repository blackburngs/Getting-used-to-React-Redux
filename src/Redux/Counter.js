import React from "react";
import { connect } from "react-redux";
import { increase, decrease, reset } from "./Action";

const Counter = (props) => {
  return (
    <div>
      <h1>Getting used to React Redux</h1>
      <button
        type="button"
        className="btn btn-success"
        onClick={props.increase}
      >
        +
      </button>
      <div>counter value: {props.count}</div>
      <button type="button" className="btn btn-danger" onClick={props.decrease}>
        -
      </button>
      <br />
      <button type="button" className="btn btn-primary" onClick={props.reset}>
        reset
      </button>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease()),
    reset: () => dispatch(reset()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
