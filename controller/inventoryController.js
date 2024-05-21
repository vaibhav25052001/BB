import inventoryModel from "../models/inventoryModel.js";
import userModel from "../models/userModel.js";
//create inventory
export const createInventoryController = async (req, res) => {
  try {
    const { email, inventoryType } = req.body;
    //validation
    const user = await userModel.findOne({ email });
    console.log(user);
    if (!user) {
      throw new Error("User not found");
    }
    // if (inventoryType === "in" && user.role !== "donor") {
    //   throw new Error("Not a donor");
    // }
    if (inventoryType === "out" && user.role !== "hospital") {
      throw new Error("Not a hospital");
    }
    const inventory = await new inventoryModel(req.body).save();
    return res.status(201).send({
      success: true,
      message: "New Blood Group Added",
      inventory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error in creating conventory",
      error,
    });
  }
};

//get all blood records
export const getInventoryController = async (req, res) => {
  try {
    const inventory = await inventoryModel
      .find({
        organisation: req.body.userId,
      })
      .populate("donor")
      .populate("hospital")
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      message: "Getting all records successfully",
      inventory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error in getting blood records",
      error,
    });
  }
};
