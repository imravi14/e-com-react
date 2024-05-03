import React from "react";

function Card(props) {
  return (
    <div className="container">
      <div className="row">
        {props.items.map((item, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
            <div className="card mt-4">
              <img src={item.img} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <p>{item.title}</p>
                <h5 className="card-title">{item.category}</h5>
                <p className="card-text">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
