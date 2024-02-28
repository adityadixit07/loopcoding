import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  detail: [
    {
      bio: {
        type: String,
        default: "Not added Yet",
      },
      location: {
        type: String,
        default: "Not added Yet",
      },
      website: {
        type: String,
        default: "Not added Yet",
      },
      social: {
        twitter: {
          type: String,
          default: "Not added Yet",
        },
        facebook: {
          type: String,
          default: "Not added Yet",
        },
        linkedin: {
          type: String,
          default: "Not added Yet",
        },
        youtube: {
          type: String,
          default: "Not added Yet",
        },
      },
      education: {
        degree: {
          type: String,
          default: "Not added Yet",
        },
        major: {
          type: String,
          default: "",
        },
        university: {
          type: String,
          default: "",
        },
        graduationYear: {
          type: String,
          default: "",
        },
      },
      resume: {
        type: String,
        default: "",
      },
    },
  ],

  purchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  cart: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
    },
  ],
  paymentHistory: [
    {
      id: String,
      status: String,
      amount: Number,
      email: String,
      created: Number,
      currency: String,
      product: String,
    },
  ],
  totalAmount: {
    type: Number,
    default: 0,
  },
  savedContent: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.model("User", userSchema);
