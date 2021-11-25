import React from "react";

import { connect } from "react-redux";
import { selectuser } from "../actions";

const CardDetails=(props)=> {
    return (
      <div class="ui very relaxed items secondary segment">
        <div class="item">
          <div class="image">
            <img src={props.userDetails.picture.large} />
          </div>
          <div class="content">
            <h3 class="ui header">
              {props.userDetails.name.title +
                " " +
                props.userDetails.name.first +
                " " +
                props.userDetails.name.last}
            </h3>
            <div class="description">
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
                <i class="calendar outline icon"></i>

                {new Date(props.userDetails.dob.date).toLocaleDateString()}
              </p>
              <p>
                {" "}
                <i class="phone icon"></i>
                {props.userDetails.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};
const mapStateToProps=(state)=>{
  return {userDetails:state.selectedUser.payload};
}

export default connect(mapStateToProps, { selectuser })(CardDetails);