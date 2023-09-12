import { Router, json } from "express";
import { errorMessage, successDataMessage } from "../utils/handler";
import database from "../models/database";

const userRouter = Router();

/**
 * Creates a user
 */
userRouter.post("/signup", json(), async (req, res) => {
  try {
    const phoneNumber = req.body.phoneNumber;
    const email = req.body.email;
    const password = req.body.password;

    if (
      typeof email !== "string" ||
      typeof phoneNumber !== "string" ||
      typeof password !== "string"
    )
      throw Error("Wrong Body Format.");

    await database
      .insertInto("users")
      .values({
        phone_number: phoneNumber,
        email: email,
        password: password,
        account_balance: 0,
        verified: false,
      })
      .execute();

    return successDataMessage("", res);
  } catch (e: any) {
    return errorMessage(String(e), res);
  }
});

/**
 * login a user
 */
userRouter.post("/signin", json(), async (req, res) => {
  try {
    const phoneNumber = req.body.phoneNumber;
    const password = req.body.password;

    if (typeof phoneNumber !== "string" || typeof password !== "string")
      throw Error("Wrong Body Format.");

    const data = await database
      .selectFrom("users")
      .selectAll()
      .where("users.phone_number", "=", phoneNumber)
      .execute();

    if (data.length != 1) throw Error("No Such User or Invalid Database");

    return successDataMessage("", res);
  } catch (e: any) {
    return errorMessage(String(e), res);
  }
});

/**
 * User Requests a OTP Generation
 */
userRouter.post("/generate", json(), async (req, res) => {
  try {
    const phoneNumber = req.body.phoneNumber;

    return successDataMessage("", res);
  } catch (e: any) {
    return errorMessage(String(e), res);
  }
});

/**
 * User can verify OTP
 */
userRouter.post("/verify", json(), async (req, res) => {
  try {
    const phoneNumber = req.body.phoneNumber;

    return successDataMessage("", res);
  } catch (e: any) {
    return errorMessage(String(e), res);
  }
});

export default userRouter;
