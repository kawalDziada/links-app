import React from 'react';
import moment from 'moment';

// const now = moment();

// console.log(now.format('MMM Do YYYY'));

export default class LinkForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      adress: props.link ? props.link.adress : '',
      description: props.link ? props.link.description : '',
      createdAt: props.link ? moment(props.link.createdAt) : moment(),
      error: ''
    };
  }
  onAdressChange = (e) => {
    const adress = e.target.value;
    this.setState(() => ({adress}));
  };
  onDescriptionChange = (e) => {
      const description = e.target.value;
      this.setState(() => ({description}));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if(!this.state.adress || !this.state.description) {
      const error = 'Pleace provide adress and description!';
      this.setState(() => ({error}))
    } else {
      this.setState(() => ({error: ''}));
      this.props.onSubmit({
        adress: this.state.adress,
        description: this.state.description,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
          {this.state.error && <p className="form__error">{this.state.error}</p>}
          <input 
              className="text-input"
              type='text'
              placeholder='Adress'
              autoFocus
              value={this.state.adress}
              onChange={this.onAdressChange}
          />
          <textarea
              className="textarea"
              placeholder='Add description for your link'
              value={this.state.description}
              onChange={this.onDescriptionChange}
          >
          </textarea>
          <button className="button button-big__form">Add Link</button>
      </form>
    )
  }
}
