import User from "../models/User";
import { connectToDB } from "../mongodb/mongoose";

export const createOrUpdateUser = async (
  id,
  first_name,
  last_name,
  image_url,
  email_addresses,
  username
) => {
  try {
    await connectToDB();
    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        firstName: first_name,
        lastName: last_name,
        profilePhoto: image_url,
        email: email_addresses[0].email_address,
        username: username,
      },
      { upsert: true, new: true }
    );
    await user.save();
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (id) => {
  try {
    await connectToDB();
    await User.deleteOne({ clerkId: id });
  } catch (error) {
    console.log(error);
  }
};
