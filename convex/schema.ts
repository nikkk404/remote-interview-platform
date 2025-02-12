import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    email: v.string(),
    image: v.optional(v.string()),
    name: v.string(),
    role: v.union(
        v.literal("candidate"),
        v.literal("interviewer")
    ),
  }).index("by_clerk_id", ["clerkId"]),
});