import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert("roles", [
      {
        id: "c8a1b8a4-2f3c-4b9a-9a7e-1c2d3e4f5a61",
        code: "R1",
        value: "Admin",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "d9b2c9b5-3a4d-5c0b-a8b9-2d3e4f5a6b72",
        code: "R2",
        value: "Moderator",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "eaC3d0c6-4b5e-6d1c-b9ca-3e4f5a6b7c83",
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
