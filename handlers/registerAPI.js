const Collection = require("./mongo");




const registerApi =  async (req, res) =>{
    const { fullName, email, password } = req.body;
  
    try {
      const existingUser = await Collection.findOne({ email });
      if (existingUser) {
        return res.json("exist");
      }
  
      const newUser = new Collection({
        fullName,
        email,
        password,
      });
  
      await newUser.save();
      res.json("Register successfully");
    } catch (error) {
      console.error("Registration error:", error);
      res.json("fail");
    }
  };

module.exports = registerApi