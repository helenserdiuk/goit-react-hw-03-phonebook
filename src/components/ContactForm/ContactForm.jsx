import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import style from './contactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { name, number } = this.state;

    return (
      <div className={style.formWrapper}>
        <form onSubmit={handleSubmit}>
          <label className={style.label}>
            Name
            <input
              className={style.input}
              type="name"
              name="name"
              value={name}
              onChange={handleChange}
              id={this.nameInputId}
            />
          </label>
          <label className={style.label}>
            Number
            <input
              className={style.input}
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
              id={this.numberInputId}
            />
          </label>
          <button className={style.btn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
