import User from "../modals/user.modal";
import { dbConnect } from "../db/db";

export async function createUser(user: unknown) {
  try {
    await dbConnect();
    const newUser = User.create(user);
    return JSON.parse(JSON.stringify(newUser));
    
  } catch (error) {
    console.log(error);
  }
}

export async function updateUser(userId: string, updateData: Record<string, unknown>) {
    try {
      await dbConnect();
      const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
        new: true, // Returns the updated document
      });
      if (!updatedUser) {
        throw new Error(`User with ID ${userId} not found`);
      }
      return JSON.parse(JSON.stringify(updatedUser));
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  }
  