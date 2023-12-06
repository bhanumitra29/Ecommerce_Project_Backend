const array = [];
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { secret_key } = require('./secret'); // Assuming secret key is in 'secret.js' file

const register = (req, res) => {
    const data = req.body;
    // Validate required fields
    if (!data.email || !data.password || !data.name || !data.phone) {
        return res.status(400).send({ msg: 'Missing required fields' });
    }

    const existingUser = array.find((item) => item.email === data.email);
    if (existingUser) {
        return res.status(400).send({ msg: 'User already registered' });
    }

    const saltround = bcrypt.genSaltSync(10);
    const hashpassword = bcrypt.hashSync(data.password, saltround);
    const tempobject = {
        email: data.email,
        password: hashpassword,
        name: data.name,
        phone: data.phone,
    };

    array.push(tempobject);

    const token = jwt.sign({ useremail: data.email }, secret_key, { expiresIn: '7d' });
    console.log('token:', token);

    return res.send({ msg: 'User Registered successfully', token: token });
};

const login = (req, res) => {
    const logindata = req.body;

    const userDetails = array.find((item) => item.email === logindata.email);
    if (!userDetails) {
        return res.status(404).send({ msg: 'User not found' });
    }

    const validate = bcrypt.compareSync(logindata.password, userDetails.password);
    if (validate) {
        const token = jwt.sign({ useremail: logindata.email }, secret_key, { expiresIn: '7d' });
        console.log(token);
        return res.send({ msg: 'User login successfully', token: token });
    } else {
        return res.status(401).send({ msg: 'Invalid credentials' });
    }
};

module.exports = { register, login };
