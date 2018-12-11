import React from "react";
import PropTypes from "prop-types";

import Slide from "../../components/Slide";

const WebauthnSlide = ({ platform }) => {
  const styles = {
    background: '#f99157',
    padding: '15px 20px',
    border: 'none',
    borderRadius: '3px',
    color: '#fff',
    fontSize: '20px',
    fontWeight: 'bold'
  };

  const createRandomUIntArray = () => {
    const arr = new Uint8Array(32);
    crypto.getRandomValues(arr);

    return arr;
  }

  const attestationOptions = {
    challenge: createRandomUIntArray(),
    rp: {
      name: "Auth0"
    },
    attestation: "direct",
    authenticatorSelection: {},
    pubKeyCredParams: [
      {
        type: "public-key",
        alg: -7
      }
    ]
  };

  if (platform) {
    attestationOptions.authenticatorSelection = {
      authenticatorAttachment: 'platform'
    }
  }

  const user = {
    id: createRandomUIntArray(),
    name: "Sam Bellen",
    displayName: "Sambego"
  };

  const handleRegister = () => {
    navigator.credentials.create({
      publicKey: {
        ...attestationOptions,
        user
      }
    }).then(response => window.alert(`Login successfull, public key: ${response.id}`));
  }

  return (
    <Slide>
        <button style={styles} onClick={handleRegister}>Login with authenticator device</button>
    </Slide>
  );
};

WebauthnSlide.propTypes = {
  platform: PropTypes.bool
};

WebauthnSlide.defaultProps = {
  platform: false
};

export default WebauthnSlide;
