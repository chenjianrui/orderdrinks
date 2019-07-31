import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Form.css";
class Form extends Component {
  state = {
    data: {
      id: Math.floor(Date.now() / 1000),
      title: "",
      price: "",
      notes: ""
    }
  };

  componentDidMount() {
    this.input.focus();
    if (this.props.title !== this.state.title) {
      const { title, price, notes, id } = this.props;
      console.log(this.props);
      this.setState({
        data: {
          id,
          title,
          price,
          notes
        }
      });
    }
  }

  handleChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };
  render() {
    const { type, buttonType, onClicked } = this.props;
    const {
      data: { title, price, notes }
    } = this.state;
    let disabled = !title || !price || price <= 0;
    return (
      <div>
        <h2>{type}</h2>
        <form className="form-content">
          <label>
            Name <span className="required-field">*</span>{" "}
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            ref={input => {
              this.input = input;
            }}
            placeholder="name"
            onChange={this.handleChange}
          />
          <label>
            Price <span className="required-field">*</span>
          </label>
          <input
            type="number"
            name="price"
            id="price"
            value={price}
            placeholder="price"
            onChange={this.handleChange}
          />
          <label>Notes </label>
          <textarea
            rows={4}
            type="text"
            name="notes"
            id="notes"
            value={notes}
            placeholder="notes"
            onChange={this.handleChange}
          />
          <div className="form-footer">
            <Link to="/" className="btn btn-default">
              Cancel
            </Link>
            <button
              className="btn btn-primary"
              onClick={() => onClicked(this.state.data)}
              disabled={disabled}
            >
              {buttonType}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
