import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert("my_diaries", [
      {
        id: 1,
        user_id: 1,
        title: "Nhật ký cảm xúc mẫu 1",
        emotion: "positive",
        content: "<p>Hôm nay mình vào lệnh khá tự tin, tuân thủ đúng plan.</p>",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        user_id: 1,
        title: "Nhật ký cảm xúc mẫu 2",
        emotion: "neutral",
        content:
          "<p>Thị trường biến động mạnh, cảm xúc hơi căng thẳng nhưng vẫn giữ kỷ luật.</p>",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        user_id: 1,
        title: "Nhật ký cảm xúc mẫu 3",
        emotion: "negative",
        content:
          "<p>Giao dịch không như kỳ vọng, cần bình tĩnh xem lại chiến lược.</p>",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        user_id: 2,
        title: "Nhật ký người dùng 2 - 1",
        emotion: "positive",
        content:
          "<p>Hoàn thành mục tiêu học tập hôm nay, cảm thấy rất tích cực.</p>",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        user_id: 2,
        title: "Nhật ký người dùng 2 - 2",
        emotion: "neutral",
        content: "<p>Ngày làm việc bình thường, không quá áp lực.</p>",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        user_id: 2,
        title: "Nhật ký người dùng 2 - 3",
        emotion: "negative",
        content:
          "<p>Gặp chút vấn đề trong dự án, hơi căng thẳng nhưng sẽ xử lý.</p>",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 7,
        user_id: 3,
        title: "Nhật ký Instructor - 1",
        emotion: "neutral",
        content: "<p>Chuẩn bị bài giảng xong, cảm xúc ổn định.</p>",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 8,
        user_id: 3,
        title: "Nhật ký Instructor - 2",
        emotion: "positive",
        content: "<p>Sinh viên phản hồi tốt, thấy hứng thú và tích cực.</p>",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 9,
        user_id: 3,
        title: "Nhật ký Instructor - 3",
        emotion: "negative",
        content: "<p>Lịch dạy dày, hơi mệt mỏi, cần nghỉ ngơi hợp lý.</p>",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 10,
        user_id: 4,
        title: "Nhật ký Nguyễn Quang Trường - 1",
        emotion: "positive",
        content: "<p>Hoàn tất một tính năng khó, cảm giác rất tích cực.</p>",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 11,
        user_id: 4,
        title: "Nhật ký Nguyễn Quang Trường - 2",
        emotion: "neutral",
        content: "<p>Review code cho team, mọi thứ ổn.</p>",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 12,
        user_id: 4,
        title: "Nhật ký Nguyễn Quang Trường - 3",
        emotion: "negative",
        content:
          "<p>Deadline sát, hơi áp lực, cần chia nhỏ công việc để xử lý.</p>",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 13,
        user_id: 4,
        title: "Nhật ký Nguyễn Quang Trường - 4",
        emotion: "neutral",
        content: "<p>Tham gia họp dự án, ghi nhận yêu cầu mới.</p>",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 14,
        user_id: 2,
        title: "Nhật ký người dùng 2 - 4",
        emotion: "positive",
        content: "<p>Hoàn thành checklist cá nhân, duy trì thói quen tốt.</p>",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete("my_diaries", {}, {});
  },
};
