// const array = [];
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { secret_key } = require('./secret'); // Assuming secret key is in 'secret.js' file
const { regSh } = require('./model/registerModel');

const register = async(req, res) => {
    const data = req.body;
    // Validate required fields
    if (!data.email || !data.password || !data.name || !data.phone) {
        return res.status(400).send({ msg: 'Missing required fields' });
    }

    const existingUser = regSh.findOne({email:{$eq:data.email}});
    if (existingUser) {
        return res.status(400).send({ msg: 'User already registered' });
    }

    const saltround = bcrypt.genSaltSync(10);
    const hashpassword = bcrypt.hashSync(data.password, saltround);
    // const tempobject = {
    //     email: data.email,
    //     password: hashpassword,
    //     name: data.name,
    //     phone: data.phone,
    // };

    const regDB= await regSh.create(data)

    // array.push(tempobject);

    const token = jwt.sign({ email: data.email }, secret_key, { expiresIn: '7d' });
    console.log('token:', token);

    return res.send({ msg: 'User Registered successfully', token: token });
};

const login = async(req, res) => {
    const logindata = req.body;

    const userDetails = regSh.findOne({email:{$eq:logindata.email}});
    if (!userDetails) {
        return res.status(404).send({ msg: 'User not found' });
    }

    const validate = bcrypt.compareSync(logindata.password, userDetails.password);
    if (validate) {
        const token = jwt.sign({ email: logindata.email }, secret_key, { expiresIn: '7d' });
        console.log(token);
        return res.send({ msg: 'User login successfully', token: token });
    } else {
        return res.status(401).send({ msg: 'Invalid credentials' });
    }
};

const userauth = async (req, res) => {
    const user = req.body;
    console.log(user);
    if (user && user.email) {
        try {
            const userinfo = await regSh.findOne({ email: user.email });
            if (userinfo) {
                res.send({ msg: "User Authorized", userdata: userinfo })
            }
            else {
                res.status(404).send("User not found");
            }
        }
        catch (err) {
            console.log("Error fetching user detail from db:", err);
        }
    }
    console.log("user authorized!");
}


module.exports = { register, login, userauth};
