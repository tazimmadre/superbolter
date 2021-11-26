import React from "react";

import { connect } from "react-redux";
import { selectuser } from "../actions";

const CardDetails=(props)=> {
    return props.userDetails ? (
      <div className="ui very relaxed items secondary segment">
        <div className="item">
          <div className="image">
            <img
              src={props.userDetails.picture.large}
              alt={props.userDetails.phone}
            />
          </div>
          <div className="content">
            <h3 className="ui header">
              {props.userDetails.name.title +
                " " +
                props.userDetails.name.first +
                " " +
                props.userDetails.name.last}
            </h3>
            <div className="description">
              <p>
                {" "}
                <i className="map marker alternate icon"></i>
                {props.userDetails.location.street.number +
                  "   " +
                  props.userDetails.location.street.name +
                  "   " +
                  props.userDetails.location.city +
                  "   " +
                  props.userDetails.location.country +
                  "   " +
                  props.userDetails.location.state}
              </p>
              <p>
                <i className="envelope icon"></i>
                {props.userDetails.email}
              </p>
              <p>
                <i className="calendar outline icon"></i>

                {new Date(props.userDetails.dob.date).toLocaleDateString()}
              </p>
              <p>
                {" "}
                <i className="phone icon"></i>
                {props.userDetails.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="ui active centered inline loader"></div>
    );
};
const mapStateToProps=(state)=>{
  return {userDetails:state.selectedUser.payload};
}

export default connect(mapStateToProps, { selectuser })(CardDetails);