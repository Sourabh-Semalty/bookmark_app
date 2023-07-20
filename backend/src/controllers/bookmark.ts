import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import asyncErrorHandler from "../utils/asyncErrorHandler";
import { body } from "express-validator"; // Import the validation methods from express-validator
import createHttpError from "http-errors";
import Bookmark, { IBookmark } from "../models/Bookmark";

export const getAllBookmarks = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {}
);

export const getBookmark = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {}
);

export const addBookmark = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { title, description, status, important } = req.body as IBookmark;
    body(title, "Title field is required").notEmpty();
    body(status, "Status field is required").notEmpty();

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessage = errors
        .array()
        .map((error) => error.msg)
        .join(", ");
      return next(createHttpError(400, errorMessage));
    }

    const bookmark = new Bookmark({
      title,
      description,
      status,
      important,
    });
    const result = await bookmark.save();
    return res.json(result);
  }
);

export const updateBookmark = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {}
);

export const deleteBookmark = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {}
);
