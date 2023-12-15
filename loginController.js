// const array = [];
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { secret_key } = require('./secret'); 
const { regSchema } = require('./model/registerModel');
const stripe=require("stripe")("sk_test_51ONW0JSJoaZaL7s6sCtHytA4RKMvz9prM8pincTmfL5xRWe0d4n12rHCkM6x1SGl8INVqySOgLlivEtZtrIPpSau00baOnaXMw")


const register = async(req, res) => {
    const data = req.body;
    console.log(data)
    try {
    const existingUser = await regSchema.findOne({email:{$eq:data.email}});
    if (existingUser) {
        return res.send({ msg: 'User already registered' });
    }
    else{
    data.password = bcrypt.hashSync(data.password, 10);
    console.log(data.password)
    const regDB= await regSchema.create(data)
    console.log(regDB)
    const token = jwt.sign({ user:data.email }, secret_key, { expiresIn: '300000' });
    console.log('token:', token);
    return res.send({ msg: 'User Registered successfully', token: token });
}
    }
    catch(err){
        console.log(err)
    }
}

const login = async(req, res) => {
    const logindata = req.body;
    try{

    const userDetails = await regSchema.findOne({email:{$eq:logindata.email}});
    if (userDetails) {
        // res.status(404).send({ msg: 'User not found' });
    

    const validate = bcrypt.compareSync(logindata.password,userDetails.password);
    
    if (validate) {
        const token = jwt.sign({ useremail: logindata.email }, secret_key, { expiresIn: '300000' });
        console.log(token);
        return res.send({ msg: 'User login successfully', token: token, userdetail:userDetails });
    } else {
        return res.send({ msg: 'Invalid credentials' });
    }

}
else{
    return res.send({msg:"user not registered/ invalid Email"})
}

    }

    catch(err){
        console.log(err)
    }
};

const userauth = async (req, res) => {
    const user = req.user;
    console.log(user);
    if (user && user.useremail) {
        try {
            const userinfo = await regSchema.findOne({ email: user.useremail });
            if (userinfo) {
                res.send({ msg: "User Authorized", userdata: userinfo })
            }
            else {
                res.send("User not found");
            }
        }
        catch (err) {
            console.log("Error fetching user detail from db:", err);
        }
    }
    console.log("user authorized!");
}

const createcheckout = async (req, res) => {
    const { products } = req.body;
    console.log(products);
  
    const lineItems = products.map((prod) => ({
      
      price_data: {
        currency: "inr",
        product_data: {
          name: prod.name,
        },
        unit_amount: prod.price * 100,
      },
      quantity: prod.quantity
    }));
  
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:3000/Success",
        cancel_url: "http://localhost:3000/Cancel",
      });
  
      res.json({ id: session.id });
    } catch (error) {
      console.error('Error creating checkout session:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
 


module.exports = { register, login, userauth, createcheckout};
