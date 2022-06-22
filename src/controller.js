
const User = require("./model");
const bcrypt = require("bcryptjs");
const getUserDetails = async (req, res) => {
    try {
      const userDatas = await User.find({});
      res.send({
        success: true,
        status: 200,
        message: "Success",
        data: userDatas.map((val) => val.view()),
      });
    } catch (error) {
      res.send({ success: false, status: 404, message: "Fetch Failed" });
    }
  };

  const newUser = (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    const userDatas = new User(req.body);
    userDatas.save().then(data => {
        res.status(201).send({success: true, message: 'Data saved.'});
    }).catch(err => {
        res.status(500).send({error: err, success: false})
    })
}

const login = async(req, res) => {
  const user = await User.findOne({phone: req.body.phone});
  if(!user){
      return res.status(500).send({success: false, message: 'User not found.'});
  }else if(user && bcrypt.compareSync(req.body.password, user.password)) {
      
          // {expiresIn: '1d'} //1d = one day, 1w = one week, 1m = one month
      return res.status(201).send({success: true, message: 'Login success', data: user});
  }else {
      return res.status(500).send({success: false, message: 'Wrong password.'});
  }
}

const deleteUser = async(req, res) => {
  await User.findByIdAndDelete(req.params.id).then(response => {
      if(response) {
          return res.status(201).send({success: true, message: 'Data deleted.'});
      }else {
          return res.status(404).send({success: false, message: 'User not found'});
      }
  }).catch(err => {
      return res.status(500).send({error: err, success: false})
  })
}

const editUser = async(req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body).then(response => {
      return res.status(201).send({success: true, message: 'Data updated.'});
  }).catch(err => {
      return res.status(500).send({error: err, success: false})
  })
}

module.exports = {
  getUserDetails,
  newUser,
  login,
  deleteUser,
  editUser
};