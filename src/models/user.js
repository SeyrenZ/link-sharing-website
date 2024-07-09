import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    links: {
      type: JSON,
      default: [],
    }
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
