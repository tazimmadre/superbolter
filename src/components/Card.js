import React,{useEffect,useState} from "react";
import {useHistory} from "react-router-dom";
import { connect } from "react-redux";
import { getData,selectuser } from "../actions";

const Card=(props)=> {
  const navigate=useHistory();
  const [data,setData]=useState([]);
    useEffect(() => {
      props.getData(5);
      setData(props.cards);
      console.log(data);
    },[]);
  const renderlist=() =>{
    return (
      data &&
      data.map((x) => {
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
    );
  }

    return <div className="ui link cards">{renderlist()}</div>;
}
const mapStateToProps = (state) => {
  console.log(state);
  return {cards:(state.fetch.payload)};
};

export default connect(mapStateToProps, { getData,selectuser })(Card);
