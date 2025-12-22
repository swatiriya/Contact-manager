import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/apiError";
import { User } from "../models/user.model";
import { Contact } from "../models/contact.model";

export const addContact = asyncHandler(async (req, res) => {
  const { fullName, email } = req.body;
  const userId = req.user._id;

  if (!fullName || !email) {
    throw new ApiError(400, "fullName and email are required");
  }

  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const existingContact = await Contact.findOne({
    email,
    user: userId,
  });

  if (existingContact) {
    throw new ApiError(409, "Contact already exists");
  }


  const contact = await Contact.create({
    fullName,
    email,
    user: userId,
  });

  res.status(201).json({
    success: true,
    message: "Contact added successfully",
    data: contact,
  });
});

