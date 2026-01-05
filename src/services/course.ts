import db from "../models";
import { Op } from "sequelize";

export const getAllCourses = ({ page, limit, order, title, ...query }: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const queries: any = { raw: false, nest: true };
      // Pagination logic if needed, but for now getting all or basic pagination
      // const offset = !page || +page <= 1 ? 0 : +page - 1;
      // const fLimit = +limit || +process.env.LIMIT_COURSE! || 10;
      // queries.offset = offset * fLimit;
      // queries.limit = fLimit;

      if (order) queries.order = [order];
      if (title) query.title = { [Op.substring]: title };

      const response = await db.Course.findAll({
        where: query,
        ...queries,
        include: [
          {
            model: db.Section,
            as: "sections",
            include: [
              {
                model: db.Lesson,
                as: "lessons",
              },
            ],
          },
          {
            model: db.User,
            as: "instructor",
            attributes: ["id", "name", "avatar"],
          },
        ],
        order: [
          ["id", "DESC"],
          [{ model: db.Section, as: "sections" }, "id", "ASC"],
          [
            { model: db.Section, as: "sections" },
            { model: db.Lesson, as: "lessons" },
            "id",
            "ASC",
          ],
        ],
      });
      const courses = response.map((course: any) => {
        const courseData = course.get({ plain: true });
        courseData.lessons_count = courseData.sections.reduce(
          (acc: number, section: any) => acc + (section.lessons?.length || 0),
          0
        );
        return courseData;
      });

      resolve({
        err: response ? 0 : 1,
        mess: response
          ? "Lấy danh sách khóa học thành công"
          : "Không tìm thấy khóa học nào",
        data: courses,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getCourseDetail = (id: number) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Course.findOne({
        where: { id },
        include: [
          {
            model: db.Section,
            as: "sections",
            include: [
              {
                model: db.Lesson,
                as: "lessons",
              },
            ],
          },
          {
            model: db.User,
            as: "instructor",
            attributes: ["id", "name", "avatar"],
          },
        ],
        order: [
          [{ model: db.Section, as: "sections" }, "id", "ASC"],
          [
            { model: db.Section, as: "sections" },
            { model: db.Lesson, as: "lessons" },
            "id",
            "ASC",
          ],
        ],
      });
      const courseData = response
        ? response.get({ plain: true })
        : null;
      if (courseData) {
        courseData.lessons_count = courseData.sections?.reduce(
          (acc: number, section: any) => acc + (section.lessons?.length || 0),
          0
        );
      }
      resolve({
        err: response ? 0 : 1,
        mess: response
          ? "Lấy chi tiết khóa học thành công"
          : "Khóa học không tồn tại",
        data: courseData,
      });
    } catch (error) {
      reject(error);
    }
  });

export const createCourse = (payload: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const { sections, ...courseData } = payload;

      // Generate slug if not provided
      if (!courseData.slug) {
        courseData.slug =
          courseData.title
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d")
            .replace(/[^a-z0-9]/g, "-") +
          "-" +
          Date.now();
      }

      const newCourse = await db.Course.create(courseData);

      if (sections && sections.length > 0) {
        for (const section of sections) {
          const newSection = await db.Section.create({
            course_id: newCourse.id,
            title: section.title,
          });

          if (section.lessons && section.lessons.length > 0) {
            for (const lesson of section.lessons) {
              await db.Lesson.create({
                section_id: newSection.id,
                title: lesson.title,
                duration: lesson.duration,
                preview: lesson.preview,
                video_url: lesson.video_url,
              });
            }
          }
        }
      }

      resolve({
        err: 0,
        mess: "Tạo khóa học thành công",
        data: newCourse,
      });
    } catch (error) {
      reject(error);
    }
  });

export const updateCourse = (id: number, payload: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const { sections, ...courseData } = payload;

      const course = await db.Course.findByPk(id);
      if (!course) {
        resolve({
          err: 1,
          mess: "Khóa học không tồn tại",
        });
        return;
      }

      await db.Course.update(courseData, { where: { id } });

      // Handle sections/lessons update: simpler to delete old and create new for MVP
      // But we should be careful about IDs if needed. For now, replace all.
      if (sections) {
        // Find existing sections
        const existingSections = await db.Section.findAll({
          where: { course_id: id },
        });
        const existingSectionIds = existingSections.map((s: any) => s.id);

        // Delete lessons of existing sections
        if (existingSectionIds.length > 0) {
          await db.Lesson.destroy({
            where: { section_id: existingSectionIds },
          });
        }

        // Delete existing sections
        await db.Section.destroy({ where: { course_id: id } });

        // Create new structure
        for (const section of sections) {
          const newSection = await db.Section.create({
            course_id: id,
            title: section.title,
          });

          if (section.lessons && section.lessons.length > 0) {
            for (const lesson of section.lessons) {
              await db.Lesson.create({
                section_id: newSection.id,
                title: lesson.title,
                duration: lesson.duration,
                preview: lesson.preview,
                video_url: lesson.video_url,
              });
            }
          }
        }
      }

      resolve({
        err: 0,
        mess: "Cập nhật khóa học thành công",
      });
    } catch (error) {
      reject(error);
    }
  });

export const deleteCourse = (id: number) =>
  new Promise(async (resolve, reject) => {
    try {
      // Cascading delete should handle sections and lessons if configured in DB,
      // but Sequelize hooks might be needed if not.
      // We set onDelete: 'CASCADE' in migrations, so DB level should handle it.
      const response = await db.Course.destroy({ where: { id } });

      resolve({
        err: response > 0 ? 0 : 1,
        mess:
          response > 0 ? "Xóa khóa học thành công" : "Khóa học không tồn tại",
      });
    } catch (error) {
      reject(error);
    }
  });
