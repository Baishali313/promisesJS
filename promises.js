function updateLastUserActivityTime(user) {
  return new Promise((resolve) => {
      setTimeout(() => {
          const currentTime = new Date().toISOString();
          user.lastActivityTime = currentTime;
          console.log(`${user.name}'s last activity time updated to ${currentTime}`);
          resolve();
      }, 1000);
  });
}

function createPost(user, post) {
  return new Promise((resolve) => {
      setTimeout(() => {
          user.posts.push(post);
          console.log(`Post created by ${user.name}: ${post}`);
          resolve();
      }, 1000);
  });
}

function deleteLastPost(user) {
  return new Promise((resolve) => {
      setTimeout(() => {
          const deletedPost = user.posts.pop();
          console.log(`Last post "${deletedPost}" by ${user.name} deleted.`);
          resolve();
      }, 1000);
  });
}

const user = {
  name: "Baishali Ghosh",
  lastActivityTime: "13th January 2023",
  posts: []
};

// Use Promise.all to execute promises concurrently
Promise.all([
  createPost(user, "new post"),
  updateLastUserActivityTime(user)
])
.then(() => Promise.all([
  createPost(user, "Another post"),
  updateLastUserActivityTime(user)
]))
.then(() => Promise.all([
  deleteLastPost(user),
  updateLastUserActivityTime(user)
]))
.then(() => {
  console.log("Posts after deletion:", user.posts);
})
.catch((error) => {
  console.error("Error:", error);
});
