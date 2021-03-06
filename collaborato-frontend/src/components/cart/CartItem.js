import React from "react";
export default class CartItem extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div id="main_data" className="card" style={{ marginBottom: "10px" }}>
        <div className="card-body">
          <h4 className="card-title">{product.idea_headline}</h4>
          <h5 className="card-text">{product.idea_description}</h5>
          <blockquote className="text-muted">
            {product.idea_owner_name}
          </blockquote>
          <h5 className="card-text">
            <strong>
              <small>price: </small>${product.price}
            </strong>
          </h5>
          <button
            className="btn btn-sm btn-warning float-right"
            onClick={() => this.props.remove(product)}
          >
            Remove from cart
          </button>
        </div>
      </div>
    );
  }
}
