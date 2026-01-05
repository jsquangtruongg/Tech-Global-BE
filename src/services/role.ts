import db from "../models";

export const getAllRoles = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Role.findAll({
        attributes: ["code", "value"],
      });
      resolve({
        err: response ? 0 : 1,
        mess: response ? "Lấy danh sách quyền thành công" : "Không tìm thấy quyền nào",
        roleData: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const createRole = (body: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Role.findOrCreate({
        where: { code: body.code },
        defaults: {
          code: body.code,
          value: body.value,
        },
      });
      resolve({
        err: response[1] ? 0 : 1,
        mess: response[1] ? "Tạo quyền thành công" : "Mã quyền đã tồn tại",
        roleData: response[0],
      });
    } catch (error) {
      reject(error);
    }
  });

export const updateRole = (body: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Role.update(
        { value: body.value },
        { where: { code: body.code } }
      );
      resolve({
        err: response[0] > 0 ? 0 : 1,
        mess:
          response[0] > 0
            ? "Cập nhật quyền thành công"
            : "Không tìm thấy quyền hoặc không có thay đổi",
      });
    } catch (error) {
      reject(error);
    }
  });

export const deleteRole = (code: string) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Role.destroy({
        where: { code },
      });
      resolve({
        err: response > 0 ? 0 : 1,
        mess: response > 0 ? "Xóa quyền thành công" : "Không tìm thấy quyền",
      });
    } catch (error) {
      reject(error);
    }
  });
