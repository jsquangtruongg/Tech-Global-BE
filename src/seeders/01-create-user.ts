import { QueryInterface } from "sequelize";
import bcrypt from "bcryptjs";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert("users", [
      {
        name: "Admin User",
        email: "admin@gmail.com",
        password: bcrypt.hashSync("14031609", bcrypt.genSaltSync(8)),
        phone: "0987654321",
        role_code: "R1",
        avatar: "https://example.com/admin-avatar.png",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Regular User",
        email: "user@gmail.com",
        password: bcrypt.hashSync("14031609", bcrypt.genSaltSync(8)),
        phone: "0987654322",
        role_code: "R3",
        avatar: "https://example.com/user-avatar.png",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Instructor User",
        email: "instructor@gmail.com",
        password: bcrypt.hashSync("14031609", bcrypt.genSaltSync(8)),
        phone: "0987654323",
        role_code: "R2",
        avatar: "https://example.com/instructor-avatar.png",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Nguyễn Quang Trường",
        email: "nguyenqtthangbinh@gmail.com",
        password: bcrypt.hashSync("14031609", bcrypt.genSaltSync(8)),
        phone: "0353486203",
        role_code: "R2",
        avatar: "https://example.com/instructor-avatar.png",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete("users", {}, {});
  },
};
