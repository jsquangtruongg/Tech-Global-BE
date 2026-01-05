import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert("roles", [
      {
        code: "R1",
        value: "Admin",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        code: "R2",
        value: "Moderator",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        code: "R3",
        value: "User",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete("roles", {}, {});
  },
};
