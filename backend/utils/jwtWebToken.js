import jwt from 'jsonwebtoken'

const jwtAtoken = (payload, secret, options = {}) => {
    return jwt.sign(payload, secret, options);
};

export default jwtAtoken;