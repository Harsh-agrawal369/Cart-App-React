import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ProductName: "",
      ProductPrice: 0,
    };
  }

  render() {
    return (
      <form
        onSubmit={(e) => {
            e.preventDefault();
          this.props.additem(this.state.ProductName, Number(this.state.ProductPrice));
        }}
      >
        <div className="row">
          <div className="mb-3 col-6">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputname"
              aria-describedby="name"
              name="ProductName"
              onChange={(e) => {
                this.setState({ ProductName: e.currentTarget.value });
              }}
              value={this.state.ProductName}
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="inputPrice" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="inputPrice"
              name="ProductPrice"
              onChange={(e) => {
                this.setState({ ProductPrice: Number(e.currentTarget.value) });
              }}
              value={this.state.ProductPrice}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default AddItem;
