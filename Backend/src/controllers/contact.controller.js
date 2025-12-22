import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js"
import { User } from "../models/user.model.js";
import { Contact } from "../models/contact.model.js";

export const addContact = asyncHandler(async (req, res) => {
  const { contactName, contactEmail, contactNumber } = req.body;
  const userId = req.user._id;

  console.log("userid: ", userId);
  if (!userId) {
    throw new Error("Unauthorized user")
  }
  if (!contactName || !contactEmail || !contactNumber) {
    throw new ApiError(400, "fullName and email are required");
  }

  const existingContact = await Contact.findOne({
    $or: [{ contactEmail }, { contactNumber }],
  });

  if (existingContact) {
    throw new ApiError(409, "Contact already exists");
  }

  //start a transaction from here , so that you can roll back if any error occurs 
  const contact = await Contact.create({
    contactName,
    contactEmail,
    contactNumber,
  })

  const updatedUser = await User.findByIdAndUpdate(userId, {
    $push: { contacts: contact },
  }, { new: true })

  return res.status(201).json({
    status: 200,
    message: "Contact added successfully",
  })
});

export const fetchAllContacts = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  console.log(userId)
  if (!userId) {
    throw new Error("Unauthorized user");
  }
  const allContacts = await User.find(userId).select("contacts");

  return res.status(200).json(
    new ApiResponse(200, allContacts, "Contacts fetched successfully")
  )
})
