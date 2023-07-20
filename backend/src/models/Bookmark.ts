import mongoose, { Schema } from "mongoose";

export interface IBookmark extends Document {
  title: string;
  description: string;
  status: "active" | "notactive";
  createdAt?: Date;
  updatedAt?: Date;
  important: boolean;
}

const BookmarkSchema = new Schema<IBookmark>({
  title: { type: String, required: [true, "is required field"] },
  description: String,
  status: {
    type: String,
    enum: ["active", "notactive"],
    default: "active",
    required: [true, "is required field"],
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  important: { type: Boolean, default: false },
});

const Bookmark = mongoose.model("Bookmark", BookmarkSchema);

export default Bookmark;
