function findMinimumChannels(channels) {}

// Example Usage
const channels = [
  {
    channelName: "general",
    members: ["Alice", "Bob", "Charlie"],
  },
  { channelName: "random", members: ["Alice", "David"] },
  { channelName: "gaming", members: ["Charlie", "Eve"] },
  { channelName: "music", members: ["Bob", "Eve", "David"] },
];

console.log(findMinimumChannels(channels));
// ["general", "music"] or ["gaming", "random", "general"]
