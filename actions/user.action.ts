import User from "../modals/user.modal";
import { dbConnect } from "../db/db";
import { UpdateQuery } from "mongoose";

export async function createUser(user: unknown) {
  try {
    await dbConnect();
    const newUser = User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}

export async function updateUser(
  userId: string,
  userUpdates: UpdateQuery<unknown> | undefined
) {
  try {
    await dbConnect();
    const updatedUser = await User.findOneAndUpdate(
      { clerkId: userId },
      userUpdates,
      { new: true }
    );
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.log(error);
    throw new Error("Error updating user");
  }
}
