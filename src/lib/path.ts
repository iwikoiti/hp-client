export const routePaths = {
  home: "/",
  allTasks: "/allTasks",
  createTasks: "/createTasks",
  addVolunteer: "/addVolanteer",
  task: "/allTasks/:task",
  verification: "/verification",
};

export const linksPaths = {
  home: "/",
  allTasks: "/allTasks",
  createTasks: "/createTasks",
  addVolunteer: "/addVolanteer",
  task: (taskId: string) => `/allTasks/${taskId}`,
  verification: "/verification",
};
