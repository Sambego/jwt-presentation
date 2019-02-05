import React, { Component } from 'react';
import Crypto from 'crypto-js';

import Slide from '../../components/Slide';

import styles from './JWTPlayground.css'

export default class JWTPlayground extends Component {
  state = {
    header: JSON.stringify({
      "alg": "HS256",
      "typ": "JWT"
    }, null, 2),
    payload: JSON.stringify({
      "sub": "16",
      "name": "Sam Bellen",
      "iat": Date.now()
    }, null, 2),
    secret: 'secret',
    jwt: undefined,
  }

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleBase64ify = this.handleBase64ify.bind(this);
    this.handleSign = this.handleSign.bind(this);
    this.handleGetJWT = this.handleGetJWT.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleBase64ify(event) {
    event.preventDefault();

    const cleanString = this.state[event.target.dataset.target].replace(/\r?\n|\r/g, '').replace(/ /g, '');

    this.base64ify(cleanString, event.target.dataset.target);
  }

  base64ify(value, name) {
    this.setState(state => ({...state, [name]: btoa(value).replace('==', '').replace("=", '')}));
  }

  handleSign(event) {
    event.preventDefault();

    const hash = Crypto.HmacSHA256(`${this.state.header}.${this.state.payload}`, this.state.secret).toString(Crypto.enc.Base64).replace('==', '').replace("=", '').replace(/\//g, '_').replace(/\+/g, '-');

    this.setState(state => ({...state, secret: hash}));
  }

  handleGetJWT() {
    this.setState(state => ({...state, jwt: `${this.state.header}.${this.state.payload}.${this.state.secret}`}));
  }

  render() {
    return (
      <Slide>
        {!this.state.jwt && <div className={styles.container}><div className={styles.row}>
          <textarea name="header" className={styles.header} value={this.state.header} rows="4" onChange={this.handleChange} />
          <button className={styles.button} type="button" data-target="header" onClick={this.handleBase64ify}>Base64ify</button>
        </div>
        <div className={styles.row}>
          <textarea name="payload" className={styles.payload} value={this.state.payload} rows="5" onChange={this.handleChange} />
          <button className={styles.button} type="button" data-target="payload" onClick={this.handleBase64ify}>Base64ify</button>
        </div>
        <div className={styles.row}>
          <input name="secret" type="text" value={this.state.secret} className={styles.secret} onChange={this.handleChange} />
          <button className={styles.button} type="button" data-target="secret" onClick={this.handleSign}>sign</button>
        </div>
        <div className={styles.row}>
          <button className={styles.button} style={{maxWidth: "100%"}} type="button" onClick={this.handleGetJWT}>Get JWT</button>
        </div>
        </div>}
        {this.state.jwt && <div className={styles.jwt}>{this.state.jwt}</div>}
      </Slide>
    )
  }
}
