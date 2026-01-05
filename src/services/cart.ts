import db from "../models";

export const addToCart = (userId: number, courseId: number) =>
  new Promise(async (resolve, reject) => {
    try {
      // Check if course exists
      const course = await db.Course.findByPk(courseId);
      if (!course) {
        resolve({
          err: 1,
          mess: "Khóa học không tồn tại",
        });
        return;
      }

      // Check if already in cart
      const existingItem = await db.Cart.findOne({
        where: { user_id: userId, course_id: courseId },
      });

      if (existingItem) {
        resolve({
          err: 1,
          mess: "Khóa học đã có trong giỏ hàng",
        });
        return;
      }

      const newItem = await db.Cart.create({
        user_id: userId,
        course_id: courseId,
      });

      resolve({
        err: 0,
        mess: "Thêm vào giỏ hàng thành công",
        data: newItem,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getCart = (userId: number) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Cart.findAll({
        where: { user_id: userId },
        include: [
          {
            model: db.Course,
            as: "course",
            attributes: [
              "id",
              "title",
              "image",
              "price",
              "discount",
              "slug",
              "level",
              "lessons_count",
              "duration",
            ],
            include: [
              {
                model: db.User,
                as: "instructor",
                attributes: ["name", "avatar"],
              },
            ],
          },
        ],
        order: [["created_at", "DESC"]],
      });

      resolve({
        err: 0,
        mess: response ? "Lấy giỏ hàng thành công" : "Giỏ hàng trống",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const removeFromCart = (userId: number, courseId: number) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Cart.destroy({
        where: { user_id: userId, course_id: courseId },
      });

      resolve({
        err: response > 0 ? 0 : 1,
        mess:
          response > 0
            ? "Xóa khỏi giỏ hàng thành công"
            : "Không tìm thấy khóa học trong giỏ hàng",
      });
    } catch (error) {
      reject(error);
    }
  });
