import { Response } from "express";

export function errorMessage(msg: String, res: Response) {
  return res.status(400).json({
    msg: "",
    error: msg,
    data: "",
  });
}

export function successDataMessage(data: any, res: Response) {
  return res.status(400).json({
    msg: "Success",
    error: "",
    data: data,
  });
}
