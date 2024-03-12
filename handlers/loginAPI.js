const Collection = require("./mongo");

const loginApi = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await Collection.findOne({ email });
  
      if (!user) {
        return res.json("notexist");
      }
  
      if (user.password !== password) {
        return res.json("fail");
      }
  
      res.json("success");
    } catch (error) {
      console.error("Login error:", error);
      res.json("fail");
    }
  };

module.exports = loginApi