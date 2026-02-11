import db from "../models";
import { v4 as uuidv4 } from "uuid";

export const create = (body: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.CommonError.create({
        ...body,
        id: body.id || uuidv4(),
      });
      resolve({
        err: response ? 0 : 1,
        mes: response ? "Created successfully" : "Failed to create",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const list = (query: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.CommonError.findAll({
        order: [["updatedAt", "DESC"]],
      });
      resolve({
        err: response ? 0 : 1,
        mes: response ? "Got list" : "Failed to get list",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const detail = (id: string) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.CommonError.findByPk(id);
      resolve({
        err: response ? 0 : 1,
        mes: response ? "Got detail" : "Not found",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const update = (id: string, body: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.CommonError.update(body, {
        where: { id },
      });
      resolve({
        err: response[0] > 0 ? 0 : 1,
        mes: response[0] > 0 ? "Updated successfully" : "Failed to update",
      });
    } catch (error) {
      reject(error);
    }
  });

export const remove = (id: string) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.CommonError.destroy({
        where: { id },
      });
      resolve({
        err: response > 0 ? 0 : 1,
        mes: response > 0 ? "Deleted successfully" : "Failed to delete",
      });
    } catch (error) {
      reject(error);
    }
  });
