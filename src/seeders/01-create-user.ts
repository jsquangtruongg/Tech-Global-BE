import { QueryInterface } from "sequelize";
import bcrypt from "bcryptjs";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert("users", [
      {
        firstName: "Admin",
        lastName: "User",
        email: "admin@gmail.com",
        password: bcrypt.hashSync("14031609", bcrypt.genSaltSync(8)),
        phone: "0987654321",
        role_code: "R1",
        avatar: "https://example.com/admin-avatar.png",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        firstName: "Regular",
        lastName: "User",
        email: "user@gmail.com",
        password: bcrypt.hashSync("14031609", bcrypt.genSaltSync(8)),
        phone: "0987654322",
        role_code: "R3",
        avatar: "https://example.com/user-avatar.png",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        firstName: "Instructor",
        lastName: "User",
        email: "instructor@gmail.com",
        password: bcrypt.hashSync("14031609", bcrypt.genSaltSync(8)),
        phone: "0987654323",
        role_code: "R2",
        avatar: "https://example.com/instructor-avatar.png",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        firstName: "Nguyễn Quang",
        lastName: "Trường",
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
