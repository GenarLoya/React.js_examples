import Project from "../models/Project.js";

export const resolvers = {
  Query: {
    hello: () => "Hello world",
  },
  Mutation: {
    createProject: async (_, {name, description}) => {
      const project = new Project({
        name,
        description
      })
      
      const saveProject = await project.save()
      console.log(name, description)
      return saveProject;
    },
  },
};
