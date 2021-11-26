import React,{useEffect} from "react";
import {useHistory} from "react-router-dom";
import { connect } from "react-redux";
import { getData,selectuser } from "../actions";

const Card=(props)=> {
  const navigate=useHistory();
    useEffect(() => {
      props.getData(50);
    },[]);
  const renderlist=() =>{
    return       props.cards ?(
      props.cards.map((x) => {
        return (
          <div
            className="ui card"
            key={x.phone}
            onClick={(click) => {
              click.preventDefault();
              props.selectuser(x);
              navigate.push("/view");
            }}
          >
            <div className="image">
              <img src={x.picture.large} alt={x.name.first} />
            </div>
            <div className="content">
              <h4 className="header">
                {x.name.title + " " + x.name.first + " " + x.name.last}
              </h4>
              <div className="meta">
                <p>
                  {" "}
                  <i className="envelope icon"></i>
                  {x.email}
                </p>
              </div>
            </div>
          </div>
        );
      })
    ):(<div className="ui active centered inline loader"></div>);
  }

    return (
      <div className="ui secondary segment">
    <div className="ui link cards centered">{renderlist()}
    </div>
      </div>
    );
}
const mapStateToProps = (state) => {
  console.log(state);
  return {cards:(state.fetch.payload),selecteduser:state.selecteduser};
};

export default connect(mapStateToProps, { getData,selectuser })(Card);
