import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema(
  {
    inventoryType: {
      type: String,
      required: [true, "Inventory Type required"],
      enum: ["in", "out"],
    },
    bloodGroup: {
      type: String,
      required: [true, "Blood group is required"],
      enum: ["A+", "B+", "O-", "O+", "AB+", "AB-", "A-", "B-"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
    },
    donorEmail:{
      type:String,
      required:[true,"organisation is required"]
    },
    organisation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: [true, "users is required"],
    },
    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: function () {
        return this.inventoryType === "out";
      },
    },
    donor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      // required: function () {
      //   return this.inventoryType === "in";
      // },
    },
  },
  { timestamps: true }
);
export default mongoose.model("Inventory", inventorySchema);
