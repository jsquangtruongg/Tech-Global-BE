import { QueryInterface } from "sequelize";

const posts = [
  {
    title: "Phân tích xu hướng thị trường Vàng tuần tới",
    slug: "phan-tich-xu-huong-thi-truong-vang-tuan-toi",
    desc: "Nhận định thị trường Vàng (XAU/USD) với các phân tích kỹ thuật và cơ bản quan trọng trong tuần tới. Những điểm vào lệnh tiềm năng cho nhà đầu tư.",
    content: `
      <h2>Tổng quan thị trường</h2>
      <p>Thị trường vàng trong tuần qua đã có những biến động mạnh mẽ sau khi dữ liệu CPI của Mỹ được công bố. Giá vàng đã chạm ngưỡng kháng cự quan trọng tại 2050 USD/oz.</p>
      
      <h3>Phân tích kỹ thuật</h3>
      <p>Trên khung thời gian H4, vàng đang hình thành mô hình vai đầu vai ngược, cho thấy khả năng đảo chiều tăng giá trong ngắn hạn. Chỉ báo RSI đang ở vùng quá bán, ủng hộ cho đà tăng.</p>
      
      <h3>Tin tức cơ bản</h3>
      <p>Tuần tới sẽ có cuộc họp FOMC, đây là sự kiện quan trọng nhất ảnh hưởng đến giá vàng. Nếu FED giữ nguyên lãi suất, vàng có thể sẽ bứt phá.</p>
      
      <h2>Khuyến nghị giao dịch</h2>
      <ul>
        <li>Mua tại vùng: 2020 - 2025</li>
        <li>Cắt lỗ: 2010</li>
        <li>Chốt lời: 2050 - 2065</li>
      </ul>
    `,
    image:
      "https://res.cloudinary.com/dq4basktt/image/upload/v1768369383/tech-global/posts/eqn1tmfssinakbwuog5y.png",
    category: "Gold Trading",
    status: "published",
    views: 1250,
    author_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    title: "Bitcoin Halving 2024: Cơ hội hay rủi ro?",
    slug: "bitcoin-halving-2024-co-hoi-hay-rui-ro",
    desc: "Sự kiện Bitcoin Halving sắp tới sẽ tác động như thế nào đến thị trường Crypto? Liệu lịch sử có lặp lại với một chu kỳ tăng trưởng mạnh mẽ?",
    content: `
      <h2>Bitcoin Halving là gì?</h2>
      <p>Bitcoin Halving là sự kiện diễn ra mỗi 4 năm một lần, khi phần thưởng cho việc khai thác khối mới giảm đi một nửa. Điều này giúp kiểm soát lạm phát của Bitcoin.</p>
      
      <h3>Tác động lịch sử</h3>
      <p>Trong các chu kỳ trước (2012, 2016, 2020), giá Bitcoin đều tăng mạnh sau Halving. Tuy nhiên, bối cảnh kinh tế vĩ mô hiện tại đã khác.</p>
      
      <h3>Chiến lược đầu tư</h3>
      <p>Nhà đầu tư nên cân nhắc DCA (Dollar-Cost Averaging) để giảm thiểu rủi ro biến động giá ngắn hạn. Tập trung vào các đồng coin có nền tảng công nghệ tốt.</p>
    `,
    image:
      "https://res.cloudinary.com/dq4basktt/image/upload/v1768375409/tech-global/posts/mmsvpzfkxyzauh0kag4r.png",
    category: "Crypto",
    status: "published",
    views: 3400,
    author_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    title: "Top 5 chỉ báo kỹ thuật quan trọng cho người mới",
    slug: "top-5-chi-bao-ky-thuat-quan-trong-cho-nguoi-moi",
    desc: "Hướng dẫn sử dụng 5 chỉ báo kỹ thuật cơ bản nhưng hiệu quả nhất: MA, RSI, MACD, Bollinger Bands và Support/Resistance.",
    content: `
      <h2>1. Đường trung bình động (MA)</h2>
      <p>MA giúp xác định xu hướng chung của thị trường. SMA và EMA là hai loại phổ biến nhất.</p>
      
      <h2>2. RSI (Relative Strength Index)</h2>
      <p>RSI đo lường sức mạnh của xu hướng và xác định vùng quá mua/quá bán.</p>
      
      <h2>3. MACD</h2>
      <p>MACD là chỉ báo động lượng, giúp xác định điểm đảo chiều xu hướng.</p>
      
      <h2>4. Bollinger Bands</h2>
      <p>Bollinger Bands giúp đo lường biến động của thị trường và xác định các điểm breakout tiềm năng.</p>
      
      <h2>5. Hỗ trợ và Kháng cự</h2>
      <p>Đây là khái niệm cơ bản nhất nhưng cũng quan trọng nhất trong phân tích kỹ thuật.</p>
    `,
    image:
      "https://res.cloudinary.com/dq4basktt/image/upload/v1768375337/tech-global/posts/l4odoqtjvwt4zdazy7ju.jpg",
    category: "Trading Analysis",
    status: "published",
    views: 5600,
    author_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    title: "Hướng dẫn quản lý vốn trong giao dịch",
    slug: "huong-dan-quan-ly-von-trong-giao-dich",
    desc: "Quản lý vốn là chìa khóa để tồn tại và thành công trong thị trường tài chính. Các nguyên tắc vàng cần nhớ.",
    content: `
      <h2>Tại sao quản lý vốn lại quan trọng?</h2>
      <p>Dù bạn có phương pháp giao dịch tốt đến đâu, nếu không quản lý vốn, bạn vẫn có thể cháy tài khoản chỉ sau một chuỗi thua lỗ.</p>
      
      <h3>Quy tắc 2%</h3>
      <p>Không bao giờ rủi ro quá 2% tổng tài khoản cho một lệnh giao dịch. Điều này giúp bạn có thể chịu đựng được chuỗi thua lỗ dài mà không bị loại khỏi cuộc chơi.</p>
      
      <h3>Tỷ lệ R:R (Risk:Reward)</h3>
      <p>Luôn đặt mục tiêu lợi nhuận cao hơn rủi ro. Tỷ lệ tối thiểu nên là 1:2 hoặc 1:3.</p>
    `,
    image:
      "https://res.cloudinary.com/dq4basktt/image/upload/v1768371081/tech-global/posts/nqchmeophqsasnyc3lep.jpg",
    category: "Trading Analysis",
    status: "published",
    views: 2100,
    author_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    title: "Ethereum ETF: Bước ngoặt cho thị trường Altcoin?",
    slug: "ethereum-etf-buoc-ngoat-cho-thi-truong-altcoin",
    desc: "Sau Bitcoin ETF, Ethereum ETF đang được kỳ vọng sẽ được phê duyệt. Điều này có ý nghĩa gì đối với hệ sinh thái Altcoin?",
    content: `
      <h2>Kỳ vọng phê duyệt</h2>
      <p>Các chuyên gia dự đoán khả năng phê duyệt Ethereum ETF Spot là rất cao trong năm nay. Dòng tiền từ các tổ chức tài chính truyền thống có thể đổ vào Ethereum.</p>
      
      <h3>Ảnh hưởng đến Altcoin</h3>
      <p>Khi Ethereum tăng trưởng, dòng tiền thường sẽ lan tỏa sang các Altcoin khác (Altcoin Season). Đây là cơ hội lớn cho các nhà đầu tư.</p>
    `,
    image:
      "https://res.cloudinary.com/dq4basktt/image/upload/v1768371316/tech-global/posts/vuphnk2goyzzu4rebsp4.webp",
    category: "Crypto",
    status: "draft",
    views: 100,
    author_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
];

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert("post_news", posts);
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete("post_news", {}, {});
  },
};
