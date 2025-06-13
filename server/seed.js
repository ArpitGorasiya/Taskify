// export const tasks = [
//   {
//     title: "Website Project Proposal",
//     priority: "high",
//     stage: "todo",
//     date: new Date("2023-01-15").toISOString(),
//     comments: [],
//     assets: [],
//     team: [{ name: "John Doe" }, { name: "Anthony Doe" }],
//     subTasks: [
//       {
//         title: "Blog App Admin Dashboard",
//         date: new Date("2023-01-15").toISOString(),
//         tag: "Design",
//       },
//       {
//         title: "Blog App Dashboard",
//         date: new Date("2023-01-15").toISOString(),
//         tag: "Coding",
//       },
//     ],
//   },
//   {
//     title: "Review Code Changes",
//     priority: "medium",
//     stage: "in progress",
//     date: new Date("2023-02-01").toISOString(),
//     comments: [],
//     assets: [],
//     team: [{ name: "Bob Smith" }, { name: "Alice Johnson" }],
//     subTasks: [
//       {
//         title: "Blog App Dashboard",
//         date: new Date("2023-01-15").toISOString(),
//         tag: "Coding",
//       },
//       {
//         title: "Blog App Admin Dashboard",
//         date: new Date("2023-01-15").toISOString(),
//         tag: "Design",
//       },
//     ],
//   },
//   {
//     title: "Bug Fixing",
//     priority: "low",
//     stage: "completed",
//     date: new Date("2023-02-10").toISOString(),
//     comments: [],
//     assets: [],
//     team: [{ name: "Jane Doe" }, { name: "Charlie Brown" }],
//     subTasks: [
//       {
//         title: "Blog App Dashboard",
//         date: new Date("2023-01-15").toISOString(),
//         tag: "Coding",
//       },
//       {
//         title: "Blog App Admin Dashboard",
//         date: new Date("2023-01-15").toISOString(),
//         tag: "Design",
//       },
//     ],
//   },
//   {
//     title: "Tsk Manager Project",
//     priority: "high",
//     stage: "in progress",
//     date: new Date("2023-02-10").toISOString(),
//     comments: [],
//     assets: [],
//     team: [{ name: "Jane Doe" }, { name: "Charlie Brown" }],
//     subTasks: [
//       {
//         title: "Blog App Dashboard",
//         date: new Date("2023-01-15").toISOString(),
//         tag: "Coding",
//       },
//       {
//         title: "Blog App Admin Dashboard",
//         date: new Date("2023-01-15").toISOString(),
//         tag: "Design",
//       },
//     ],
//   },
//   {
//     title: "Tsk Manager Project",
//     priority: "high",
//     stage: "in progress",
//     date: new Date("2023-02-10").toISOString(),
//     comments: [],
//     assets: [],
//     team: [{ name: "Jane Doe" }, { name: "Charlie Brown" }],
//     subTasks: [
//       {
//         title: "Blog App Dashboard",
//         date: new Date("2023-01-15").toISOString(),
//         tag: "Coding",
//       },
//       {
//         title: "Blog App Admin Dashboard",
//         date: new Date("2023-01-15").toISOString(),
//         tag: "Design",
//       },
//     ],
//   },
//   {
//     title: "Tsk Manager Project",
//     priority: "high",
//     stage: "todo",
//     date: new Date("2023-02-10").toISOString(),
//     comments: [],
//     assets: [],
//     team: [{ name: "Jane Doe" }, { name: "Charlie Brown" }],
//     subTasks: [
//       {
//         title: "Blog App Dashboard",
//         date: new Date("2023-01-15").toISOString(),
//         tag: "Coding",
//       },
//       {
//         title: "Blog App Admin Dashboard",
//         date: new Date("2023-01-15").toISOString(),
//         tag: "Design",
//       },
//     ],
//   },
//   {
//     title: "Tsk Manager Project",
//     priority: "high",
//     stage: "completed",
//     date: new Date("2023-02-10").toISOString(),
//     comments: [],
//     assets: [],
//     team: [{ name: "Jane Doe" }, { name: "Charlie Brown" }],
//     subTasks: [
//       {
//         title: "Blog App Dashboard",
//         date: new Date("2023-01-15").toISOString(),
//         tag: "Coding",
//       },
//       {
//         title: "Blog App Admin Dashboard",
//         date: new Date("2023-01-15").toISOString(),
//         tag: "Design",
//       },
//     ],
//   },
//   {
//     title: "Task Manager Project",
//     priority: "high",
//     stage: "todo",
//     date: new Date("2023-02-10").toISOString(),
//     comments: [],
//     assets: [],
//     team: [{ name: "Jane Doe" }, { name: "Charlie Brown" }],
//     subTasks: [
//       {
//         title: "Blog App Dashboard",
//         date: new Date("2023-01-15").toISOString(),
//         tag: "Coding",
//       },
//       {
//         title: "Blog App Admin Dashboard",
//         date: new Date("2023-01-15").toISOString(),
//         tag: "Design",
//       },
//     ],
//   },
//   {
//     title: "Tsk Manager Project",
//     priority: "high",
//     stage: "completed",
//     date: new Date("2023-02-10").toISOString(),
//     comments: [],
//     assets: [],
//     team: [{ name: "Jane Doe" }, { name: "Charlie Brown" }],
//     subTasks: [
//       {
//         title: "Blog App Dashboard",
//         date: new Date("2023-01-15").toISOString(),
//         tag: "Coding",
//       },
//       {
//         title: "Blog App Admin Dashboard",
//         date: new Date("2023-01-15").toISOString(),
//         tag: "Design",
//       },
//     ],
//   },
// ];

// const uri =
//   "mongodb+srv://admin:admin123@cluster0.js2im.mongodb.net/taskmanager"; // or your MongoDB Atlas URI
// import mongoose from "mongoose";
// import Task from "./models/taskModel.js";

// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// async function seedDatabase() {
//   try {
//     await Task.deleteMany({});

//     await Task.insertMany(tasks);

//     console.log("✅ Mongoose data seeded successfully");
//   } catch (err) {
//     console.error("❌ Seeding error:", err);
//   } finally {
//     mongoose.disconnect();
//   }
// }

// seedDatabase();

import mongoose from "mongoose";
import Task from "./models/taskModel.js";

// User ObjectIds from your existing DB
const userJohn = new mongoose.Types.ObjectId("684b1658e218b9a62bc2754b");
const userJane = new mongoose.Types.ObjectId("684b1659e218b9a62bc2754c");
const userAlex = new mongoose.Types.ObjectId("684b1659e218b9a62bc2754d");

const tasks = [
  {
    title: "Launch Landing Page",
    date: new Date("2023-01-15"),
    priority: "high",
    stage: "todo",
    description: "Create and deploy the marketing landing page.",
    team: [userJohn, userJane],
    subTasks: [
      {
        title: "Design Hero Section",
        date: new Date("2023-01-10"),
        tag: "Design",
        isCompleted: false,
      },
      {
        title: "Implement Form Logic",
        date: new Date("2023-01-12"),
        tag: "Coding",
        isCompleted: false,
      },
    ],
    assets: [],
    links: [],
    activities: [],
  },
  {
    title: "Refactor Dashboard",
    date: new Date("2023-02-01"),
    priority: "medium",
    stage: "in progress",
    description: "Clean up the dashboard component and make it responsive.",
    team: [userJohn, userAlex],
    subTasks: [
      {
        title: "Responsive Header",
        date: new Date("2023-01-25"),
        tag: "Coding",
        isCompleted: true,
      },
      {
        title: "Sidebar UX Review",
        date: new Date("2023-01-28"),
        tag: "Design",
        isCompleted: false,
      },
    ],
    assets: [],
    links: [],
    activities: [],
  },
  {
    title: "Sprint Retrospective",
    date: new Date("2023-03-10"),
    priority: "low",
    stage: "completed",
    description: "Conducted a sprint retrospective meeting.",
    team: [userJane],
    subTasks: [
      {
        title: "Prepare Presentation",
        date: new Date("2023-03-05"),
        tag: "Planning",
        isCompleted: true,
      },
      {
        title: "Write Summary Report",
        date: new Date("2023-03-08"),
        tag: "Documentation",
        isCompleted: true,
      },
    ],
    assets: [],
    links: [],
    activities: [],
  },
  {
    title: "User Onboarding Flow",
    date: new Date("2023-04-01"),
    priority: "high",
    stage: "todo",
    description: "Create a guided onboarding experience for new users.",
    team: [userAlex],
    subTasks: [
      {
        title: "Sketch Wireframes",
        date: new Date("2023-03-30"),
        tag: "Design",
        isCompleted: false,
      },
      {
        title: "Backend APIs",
        date: new Date("2023-03-31"),
        tag: "Coding",
        isCompleted: false,
      },
    ],
    assets: [],
    links: [],
    activities: [],
  },
  {
    title: "Bug Bash Week",
    date: new Date("2023-04-20"),
    priority: "medium",
    stage: "in progress",
    description: "Fix as many bugs as possible reported in the backlog.",
    team: [userJane, userAlex],
    subTasks: [
      {
        title: "Fix Login Redirect Bug",
        date: new Date("2023-04-15"),
        tag: "Bug",
        isCompleted: true,
      },
      {
        title: "Resolve Dark Mode Glitch",
        date: new Date("2023-04-17"),
        tag: "Bug",
        isCompleted: false,
      },
    ],
    assets: [],
    links: [],
    activities: [],
  },
  {
    title: "Marketing Analytics Dashboard",
    date: new Date("2023-05-05"),
    priority: "high",
    stage: "completed",
    description: "Develop and deploy the marketing insights dashboard.",
    team: [userJohn],
    subTasks: [
      {
        title: "Design Charts UI",
        date: new Date("2023-05-01"),
        tag: "Design",
        isCompleted: true,
      },
      {
        title: "API Integration",
        date: new Date("2023-05-03"),
        tag: "Coding",
        isCompleted: true,
      },
    ],
    assets: [],
    links: [],
    activities: [],
  },
];

const uri =
  "mongodb+srv://admin:admin123@cluster0.js2im.mongodb.net/taskmanager";

mongoose.connect(uri);

async function seedDatabase() {
  try {
    await Task.deleteMany({});
    await Task.insertMany(tasks);
    console.log("✅ Dummy task data seeded successfully!");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
  } finally {
    mongoose.disconnect();
  }
}

seedDatabase();
