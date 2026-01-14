import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    const now = new Date();
    const sections = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const sectionName: Record<number, string> = {
      1: "Price Action",
      2: "Mô hình nến",
      3: "Kháng cự/Hỗ trợ",
      4: "Trendline",
      5: "Fibonacci",
      6: "RSI",
      7: "MACD",
      8: "Price Action",
      9: "Mô hình nến",
      10: "Quản lý rủi ro",
      11: "Tâm lý giao dịch",
      12: "Tin tức & vĩ mô",
      13: "Quản lý rủi ro",
      14: "Tâm lý giao dịch",
      15: "Tin tức & vĩ mô",
    };

    const mcBank: Record<
      string,
      { q: string; options: string[]; correct: number }[]
    > = {
      "Price Action": [
        {
          q: "BOS (Break of Structure) trong Price Action ám chỉ điều gì?",
          options: [
            "Phá vỡ đỉnh/đáy xu hướng hiện tại",
            "Nến Doji xuất hiện",
            "Khối lượng tăng đột biến",
            "Giá tạo gap",
          ],
          correct: 0,
        },
        {
          q: "CHoCH (Change of Character) báo hiệu điều gì?",
          options: [
            "Khả năng chuyển pha xu hướng",
            "Tiếp diễn xu hướng hiện tại",
            "Tăng biến động trong phiên",
            "Mở rộng biên độ dao động",
          ],
          correct: 0,
        },
        {
          q: "Order Block đại diện cho điều gì?",
          options: [
            "Nến cuối trước cú đẩy mạnh của tổ chức",
            "Vùng điều chỉnh nhỏ",
            "Mẫu nến 3 cây",
            "Khoảng trống giá",
          ],
          correct: 0,
        },
        {
          q: "FVG (Fair Value Gap) là:",
          options: [
            "Khoảng trống mất cân bằng cung cầu giữa các nến",
            "Vùng kháng cự",
            "Vùng hỗ trợ",
            "Mẫu nến đảo chiều",
          ],
          correct: 0,
        },
        {
          q: "Thanh khoản (Liquidity) thường tích tụ ở:",
          options: [
            "Trên đỉnh/đáy rõ ràng",
            "Giữa vùng giá",
            "Trong kênh giá",
            "Tại mức 0.5 Fibonacci",
          ],
          correct: 0,
        },
        {
          q: "Entry Pullback xác suất cao tại:",
          options: [
            "Order Block/FVG có confluence",
            "Giữa vùng không rõ ràng",
            "Ngay sau nến Doji",
            "Khi RSI chạm 50",
          ],
          correct: 0,
        },
        {
          q: "Invalidation nên đặt:",
          options: [
            "Sau đỉnh/đáy cấu trúc bị phá",
            "Tại mức giá tròn",
            "Tại giữa vùng",
            "Theo số pip cố định",
          ],
          correct: 0,
        },
        {
          q: "Khung thời gian phù hợp để xác định xu hướng:",
          options: ["H4/D1 (HTF)", "M1", "M3", "Chỉ LTF"],
          correct: 0,
        },
        {
          q: "Tiếp diễn xu hướng xác nhận bằng:",
          options: [
            "BOS theo hướng xu thế",
            "Một nến lớn",
            "RSI vượt 70",
            "MACD giao cắt",
          ],
          correct: 0,
        },
        {
          q: "RR tối thiểu khuyến nghị:",
          options: ["1:2 hoặc hơn", "1:1", "1:0.5", "Phụ thuộc cảm xúc"],
          correct: 0,
        },
      ],
      "Mô hình nến": [
        {
          q: "Mô hình báo đảo chiều tăng mạnh ở đáy:",
          options: [
            "Morning Star",
            "Evening Star",
            "Shooting Star",
            "Bearish Engulfing",
          ],
          correct: 0,
        },
        {
          q: "Mô hình báo đảo chiều giảm mạnh ở đỉnh:",
          options: [
            "Evening Star",
            "Morning Star",
            "Hammer",
            "Bullish Engulfing",
          ],
          correct: 0,
        },
        {
          q: "Engulfing là:",
          options: [
            "Nến sau bao trùm hoàn toàn nến trước",
            "Nến trong thân nến trước",
            "Hai nến có đỉnh/đáy bằng nhau",
            "Nến không bóng",
          ],
          correct: 0,
        },
        {
          q: "Pin Bar thể hiện:",
          options: [
            "Sự từ chối giá mạnh",
            "Tiếp diễn xu hướng",
            "Tích lũy",
            "Phân kỳ",
          ],
          correct: 0,
        },
        {
          q: "Doji phản ánh:",
          options: [
            "Giằng co, thiếu cam kết",
            "Đảo chiều chắc chắn",
            "Momentum mạnh",
            "Breakout",
          ],
          correct: 0,
        },
        {
          q: "Harami là:",
          options: [
            "Nến nhỏ nằm trong thân nến lớn trước",
            "Nến bao trùm",
            "Nến không bóng",
            "Ba nến tăng liên tiếp",
          ],
          correct: 0,
        },
        {
          q: "Tweezer Top/Bottom:",
          options: [
            "Hai đỉnh/đáy gần bằng nhau",
            "Ba nến giảm liên tiếp",
            "Belt Hold",
            "Outside Bar",
          ],
          correct: 0,
        },
        {
          q: "Marubozu cho thấy:",
          options: [
            "Momentum mạnh theo một hướng",
            "Giằng co",
            "Phân kỳ",
            "Inside Bar",
          ],
          correct: 0,
        },
        {
          q: "Three White Soldiers:",
          options: [
            "Ba nến tăng thân dài liên tiếp",
            "Ba nến giảm",
            "Hai nến bằng nhau",
            "Nến không bóng",
          ],
          correct: 0,
        },
        {
          q: "Inside Bar là:",
          options: [
            "Nến nằm trong biên độ nến trước",
            "Nến bao trùm nến trước",
            "Nến không bóng",
            "Nến thân dài cực lớn",
          ],
          correct: 0,
        },
      ],
      "Kháng cự/Hỗ trợ": [
        {
          q: "S/R là:",
          options: [
            "Vùng giá nơi cung/cầu trội",
            "Chỉ báo momentum",
            "Mức Fibo cố định",
            "Mẫu nến",
          ],
          correct: 0,
        },
        {
          q: "Flip Zone là:",
          options: [
            "Hỗ trợ chuyển thành kháng cự hoặc ngược lại",
            "Vùng gap",
            "Vùng FVG",
            "Vùng OB nhỏ",
          ],
          correct: 0,
        },
        {
          q: "Retest hợp lệ là:",
          options: [
            "Phá vùng rồi quay lại kiểm định có xác nhận",
            "Quay lại vùng nhiều lần",
            "Nến Doji tại vùng",
            "RSI vượt 50",
          ],
          correct: 0,
        },
        {
          q: "False Breakout nhận diện:",
          options: [
            "Vượt vùng rồi quay lại phá ngược",
            "Vượt vùng và tiếp diễn mạnh",
            "Khối lượng tăng",
            "MACD cắt lên",
          ],
          correct: 0,
        },
        {
          q: "Zone thực tế hơn Line vì:",
          options: [
            "Giá hiếm khi phản ứng đúng một điểm",
            "Dễ vẽ hơn",
            "Đẹp hơn",
            "Chuẩn hơn trên M1",
          ],
          correct: 0,
        },
        {
          q: "Ưu tiên vùng khi:",
          options: [
            "Có nhiều confluence (HTF, OB, FVG, volume)",
            "Ở giữa range",
            "Ngay sau tin",
            "Chỉ có một nến đẹp",
          ],
          correct: 0,
        },
        {
          q: "SL tại S/R nên:",
          options: [
            "Đặt ngoài vùng hợp lý",
            "Đặt giữa vùng",
            "Cố định 10 pip",
            "Không đặt",
          ],
          correct: 0,
        },
        {
          q: "Trong range chiến lược:",
          options: [
            "Mua gần hỗ trợ, bán gần kháng cự với xác nhận",
            "Breakout theo mọi hướng",
            "Theo MACD",
            "Theo RSI 70/30",
          ],
          correct: 0,
        },
        {
          q: "Hợp lưu S/R với Fibo:",
          options: [
            "Trùng 0.5/0.618 hoặc extension 1.272/1.618",
            "Bất kỳ mức nào",
            "Chỉ 0.382",
            "Chỉ 2.0",
          ],
          correct: 0,
        },
        {
          q: "Khi vùng vô hiệu:",
          options: [
            "Giá đóng cửa rõ ngoài vùng và tiếp diễn",
            "Có Doji",
            "RSI về 50",
            "MACD giao cắt",
          ],
          correct: 0,
        },
      ],
      Trendline: [
        {
          q: "Trendline nối:",
          options: [
            "Các đáy tăng hoặc đỉnh giảm hợp lệ",
            "Mọi điểm bất kỳ",
            "Các nến Doji",
            "Các gap",
          ],
          correct: 0,
        },
        {
          q: "Độ tin cậy trendline:",
          options: [
            "Tăng với điểm chạm thứ ba trở lên",
            "Chỉ cần một điểm",
            "Không liên quan",
            "Phụ thuộc RSI",
          ],
          correct: 0,
        },
        {
          q: "Kênh giá dùng để:",
          options: [
            "Mua đáy kênh, bán đỉnh kênh hoặc breakout",
            "Xác định FVG",
            "Đo volume",
            "Đo ATR",
          ],
          correct: 0,
        },
        {
          q: "Wedge báo hiệu:",
          options: [
            "Suy yếu, chờ breakout và retest",
            "Tiếp diễn mạnh",
            "Range",
            "Volume cao",
          ],
          correct: 0,
        },
        {
          q: "Break trendline hợp lệ khi:",
          options: [
            "Đóng cửa rõ ngoài và có follow-through",
            "Có Doji",
            "RSI 70",
            "MACD giao cắt",
          ],
          correct: 0,
        },
        {
          q: "Độ dốc quá lớn thường:",
          options: ["Là climax dễ đứt", "Bền vững", "Không quan trọng", "Tốt"],
          correct: 0,
        },
        {
          q: "Đa khung thời gian:",
          options: [
            "Vẽ trên HTF, vào trên LTF",
            "Chỉ LTF",
            "Chỉ HTF",
            "Tùy hứng",
          ],
          correct: 0,
        },
        {
          q: "Parallel channel kéo:",
          options: [
            "Đường song song qua điểm chạm đối diện hợp lệ",
            "Theo cảm tính",
            "Qua điểm bất kỳ",
            "Không cần",
          ],
          correct: 0,
        },
        {
          q: "SL/TP theo trendline:",
          options: [
            "SL sau break giả; TP cạnh đối diện/vùng kế",
            "SL giữa kênh; TP tùy ý",
            "Không SL",
            "TP cố định",
          ],
          correct: 0,
        },
        {
          q: "Confluence tốt là:",
          options: [
            "Giao cắt trendline với OB/FVG",
            "Chỉ trendline",
            "Chỉ RSI",
            "Chỉ MACD",
          ],
          correct: 0,
        },
      ],
      Fibonacci: [
        {
          q: "Mức hồi quy phổ biến:",
          options: [
            "0.382, 0.5, 0.618",
            "0.1, 0.2, 0.3",
            "0.7, 0.8, 0.9",
            "1.1, 1.2, 1.3",
          ],
          correct: 0,
        },
        {
          q: "Mức mở rộng phổ biến:",
          options: ["1.272, 1.618", "1.05, 1.1", "2.5, 3.0", "0.786"],
          correct: 0,
        },
        {
          q: "0.618 thường:",
          options: [
            "Mức hồi sâu quan trọng",
            "Mức mở rộng",
            "Không dùng",
            "Chỉ trong range",
          ],
          correct: 0,
        },
        {
          q: "AB=CD là:",
          options: [
            "Mô hình đối xứng dùng tỷ lệ Fibo",
            "Mẫu nến",
            "Chỉ báo",
            "Vùng S/R",
          ],
          correct: 0,
        },
        {
          q: "Harmonic Patterns dùng:",
          options: ["Tỷ lệ Fibonacci cụ thể", "Volume", "RSI", "MACD"],
          correct: 0,
        },
        {
          q: "Confluence tốt:",
          options: ["Fibo trùng S/R/OB", "Chỉ Fibo", "Chỉ RSI", "Chỉ MACD"],
          correct: 0,
        },
        {
          q: "Sai lầm Fibo:",
          options: [
            "Vẽ tùy tiện, không theo swing hợp lệ",
            "Chỉ dùng 0.382",
            "Chỉ dùng 2.0",
            "Không vẽ",
          ],
          correct: 0,
        },
        {
          q: "Chiến lược tại 0.5/0.618:",
          options: [
            "Tìm tín hiệu nến đảo chiều xác nhận entry",
            "Vào ngay",
            "Đợi RSI 50",
            "Đợi MACD",
          ],
          correct: 0,
        },
        {
          q: "TP bằng Extension:",
          options: ["1.272/1.618", "0.5", "0.382", "2.618 luôn"],
          correct: 0,
        },
        {
          q: "Đa khung thời gian:",
          options: ["Vẽ HTF, vào LTF", "Chỉ LTF", "Chỉ HTF", "Không cần"],
          correct: 0,
        },
      ],
      RSI: [
        {
          q: "RSI quá mua/quá bán:",
          options: [
            ">70 / <30 (thường dùng)",
            ">90 / <10",
            ">50 / <50",
            ">60 / <40",
          ],
          correct: 0,
        },
        {
          q: "Phân kỳ Regular báo hiệu:",
          options: ["Đảo chiều", "Tiếp diễn", "Range", "Breakout"],
          correct: 0,
        },
        {
          q: "Phân kỳ Hidden báo hiệu:",
          options: ["Tiếp diễn", "Đảo chiều", "Range", "Breakout"],
          correct: 0,
        },
        {
          q: "Range Shift trong xu hướng tăng:",
          options: ["RSI dao động 40–80", "20–60", "0–100", "50–60"],
          correct: 0,
        },
        {
          q: "RSI breakout đáng tin khi:",
          options: [
            "Giữ trên/dưới ngưỡng phù hợp xu hướng",
            "Chạm 50",
            "Về 30",
            "Vượt 90",
          ],
          correct: 0,
        },
        {
          q: "Sai lầm phổ biến:",
          options: [
            "Vào lệnh chỉ vì quá mua/bán",
            "Kết hợp cấu trúc",
            "Có kế hoạch SL",
            "Backtest kỹ",
          ],
          correct: 0,
        },
        {
          q: "Kết hợp RSI với Price Action:",
          options: [
            "Xác nhận tại vùng, tìm phân kỳ ở OB/FVG",
            "Chỉ nhìn RSI",
            "Chỉ nhìn nến",
            "Chỉ nhìn volume",
          ],
          correct: 0,
        },
        {
          q: "Đa khung thời gian:",
          options: [
            "Xác minh phân kỳ HTF, vào LTF",
            "Chỉ LTF",
            "Chỉ HTF",
            "Không dùng",
          ],
          correct: 0,
        },
        {
          q: "Thanh khoản và RSI:",
          options: [
            "Phân kỳ sau sweep ở vùng mạnh là tín hiệu tốt",
            "RSI 50 là đủ",
            "RSI 80 luôn đảo chiều",
            "Không liên quan",
          ],
          correct: 0,
        },
        {
          q: "Quản lý lệnh theo RSI:",
          options: [
            "Chốt từng phần khi vào vùng cực trị",
            "Giữ nguyên",
            "Không chốt",
            "Chỉ trailing stop",
          ],
          correct: 0,
        },
      ],
      MACD: [
        {
          q: "MACD gồm:",
          options: [
            "Đường MACD, Signal, Histogram",
            "RSI và EMA",
            "Bollinger Bands",
            "VWAP",
          ],
          correct: 0,
        },
        {
          q: "Giao cắt MACD/Signal:",
          options: [
            "Cắt lên báo tăng; cắt xuống báo giảm",
            "Luôn đảo chiều",
            "Không ý nghĩa",
            "Chỉ trong range",
          ],
          correct: 0,
        },
        {
          q: "Zero line:",
          options: [
            "Trên là momentum tăng, dưới là momentum giảm",
            "Không quan trọng",
            "Chỉ cho RSI",
            "Chỉ cho DXY",
          ],
          correct: 0,
        },
        {
          q: "Histogram mở rộng:",
          options: ["Momentum mạnh", "Giằng co", "Range", "Divergence"],
          correct: 0,
        },
        {
          q: "Phân kỳ MACD:",
          options: [
            "Báo đảo chiều/điều chỉnh",
            "Báo tiếp diễn",
            "Không dùng",
            "Chỉ cho vàng",
          ],
          correct: 0,
        },
        {
          q: "Thiết lập phổ biến:",
          options: ["12-26-9", "5-10-2", "20-50-14", "9-21-50"],
          correct: 0,
        },
        {
          q: "MACD trong trend mạnh:",
          options: [
            "Tín hiệu ngược dễ nhiễu; ưu tiên đồng pha",
            "Luôn chính xác",
            "Không dùng",
            "Chỉ RSI",
          ],
          correct: 0,
        },
        {
          q: "MACD và breakout:",
          options: [
            "Histogram mở rộng cùng phá vỡ tăng độ tin cậy",
            "Không liên quan",
            "Chỉ dùng zero line",
            "Chỉ dùng signal",
          ],
          correct: 0,
        },
        {
          q: "Sai lầm phổ biến:",
          options: [
            "Vào lệnh chỉ theo giao cắt, bỏ qua bối cảnh",
            "Kết hợp cấu trúc",
            "Tuân thủ SL",
            "Backtest",
          ],
          correct: 0,
        },
        {
          q: "Đa khung thời gian:",
          options: [
            "Xác nhận trên HTF, vào LTF",
            "Chỉ LTF",
            "Chỉ HTF",
            "Không cần",
          ],
          correct: 0,
        },
      ],
      "Quản lý rủi ro": [
        {
          q: "Max risk per trade khuyến nghị:",
          options: ["~1% vốn", "~10%", "~5%", "~0%"],
          correct: 0,
        },
        {
          q: "Position sizing đúng là:",
          options: [
            "(Risk × Equity) / Stop distance",
            "Vào full margin",
            "Dựa cảm xúc",
            "Cố định khối lượng",
          ],
          correct: 0,
        },
        {
          q: "Risk of ruin phụ thuộc:",
          options: [
            "Winrate và RR",
            "Màu nến",
            "Khung thời gian",
            "Loại tài sản",
          ],
          correct: 0,
        },
        {
          q: "Partial TP giúp:",
          options: [
            "Khóa lợi nhuận, giảm áp lực",
            "Tăng rủi ro",
            "Không tác dụng",
            "Luôn sai",
          ],
          correct: 0,
        },
        {
          q: "Dời SL hợp lý khi:",
          options: [
            "Theo cấu trúc khách quan",
            "Khi thua lỗ",
            "Theo cảm xúc",
            "Theo pip cố định",
          ],
          correct: 0,
        },
        {
          q: "Risk budgeting:",
          options: [
            "Phân bổ rủi ro theo kỳ (ngày/tuần/tháng)",
            "Vào lệnh liên tục",
            "Không quản lý",
            "Chỉ dựa RR",
          ],
          correct: 0,
        },
        {
          q: "RR tối thiểu:",
          options: ["≥1:2", "1:1", "≤1:1", "Không quan trọng"],
          correct: 0,
        },
        {
          q: "Khi drawdown tăng:",
          options: [
            "Giảm khối lượng, tạm dừng đánh giá hệ thống",
            "Tăng khối lượng gỡ lỗ",
            "Giữ nguyên",
            "Ngừng SL",
          ],
          correct: 0,
        },
        {
          q: "Stop-out đặt tại:",
          options: [
            "Điểm invalidation luận đề",
            "Giữa vùng",
            "Mốc tròn bất kỳ",
            "Không đặt",
          ],
          correct: 0,
        },
        {
          q: "Tương quan vị thế cao gây:",
          options: [
            "Cộng dồn rủi ro",
            "Giảm rủi ro",
            "Không ảnh hưởng",
            "Tăng lợi nhuận",
          ],
          correct: 0,
        },
      ],
      "Tâm lý giao dịch": [
        {
          q: "FOMO là:",
          options: [
            "Sợ bỏ lỡ cơ hội",
            "Sợ thua lỗ",
            "Quá tự tin",
            "Thiếu kỷ luật",
          ],
          correct: 0,
        },
        {
          q: "Revenge trade là:",
          options: [
            "Vào lệnh gỡ lỗ vô kỷ luật",
            "Trade theo hệ thống",
            "Chốt lời từng phần",
            "Giảm khối lượng",
          ],
          correct: 0,
        },
        {
          q: "Loss aversion dẫn tới:",
          options: [
            "Giữ lệnh thua lâu, chốt lời sớm",
            "Kiên nhẫn",
            "Kỷ luật",
            "Tăng RR",
          ],
          correct: 0,
        },
        {
          q: "Kỷ luật nghĩa là:",
          options: [
            "Tuân thủ hệ thống bất kể cảm xúc",
            "Theo cảm xúc",
            "Bỏ SL",
            "Overtrade",
          ],
          correct: 0,
        },
        {
          q: "Nhật ký giao dịch giúp:",
          options: [
            "Phản hồi khách quan, cải thiện hành vi",
            "Tăng winrate ngay",
            "Giảm phí",
            "Không cần",
          ],
          correct: 0,
        },
        {
          q: "Chuỗi thua xử lý:",
          options: [
            "Giảm risk, tạm nghỉ, xem lại dữ liệu",
            "Tăng khối lượng",
            "Không nghỉ",
            "Bỏ hệ thống",
          ],
          correct: 0,
        },
        {
          q: "Mindset đúng:",
          options: [
            "Tư duy xác suất, kỳ vọng dài hạn",
            "Đoán đỉnh đáy",
            "Không SL",
            "Theo đám đông",
          ],
          correct: 0,
        },
        {
          q: "Kiên nhẫn giúp:",
          options: [
            "Tăng chất lượng lệnh, RR tốt hơn",
            "Giảm lợi nhuận",
            "Tăng phí",
            "Không tác dụng",
          ],
          correct: 0,
        },
        {
          q: "Khi cảm xúc mạnh:",
          options: [
            "Không nên giao dịch",
            "Tăng khối lượng",
            "Giao dịch liên tục",
            "Bỏ kế hoạch",
          ],
          correct: 0,
        },
        {
          q: "Kỳ vọng thực tế:",
          options: [
            "Ổn định, tăng trưởng vừa phải",
            "Làm giàu nhanh",
            "Gấp đôi mỗi ngày",
            "Không quan trọng",
          ],
          correct: 0,
        },
      ],
      "Tin tức & vĩ mô": [
        {
          q: "CPI cao thường:",
          options: [
            "Tăng kỳ vọng lãi suất, USD mạnh",
            "USD yếu",
            "Không ảnh hưởng",
            "Vàng tăng ngay",
          ],
          correct: 0,
        },
        {
          q: "NFP tốt thường:",
          options: [
            "Củng cố USD và thắt chặt chính sách",
            "USD yếu",
            "Vàng tăng mạnh",
            "Crypto giảm luôn",
          ],
          correct: 0,
        },
        {
          q: "Quyết định lãi suất Fed:",
          options: [
            "Điều hướng dòng tiền toàn cầu",
            "Chỉ ảnh hưởng crypto",
            "Chỉ ảnh hưởng vàng",
            "Không ảnh hưởng",
          ],
          correct: 0,
        },
        {
          q: "PMI phản ánh:",
          options: [
            "Sức khỏe sản xuất/dịch vụ",
            "Lạm phát",
            "Nợ công",
            "Tỷ giá",
          ],
          correct: 0,
        },
        {
          q: "Giao dịch quanh tin lớn:",
          options: [
            "Tránh vào trước tin, chờ retest theo hướng",
            "Vào đúng lúc công bố",
            "Đoán số liệu",
            "Không SL",
          ],
          correct: 0,
        },
        {
          q: "Rủi ro địa chính trị:",
          options: [
            "Tăng nhu cầu trú ẩn (vàng)",
            "Giảm biến động",
            "Không ảnh hưởng",
            "Chỉ ảnh hưởng CPI",
          ],
          correct: 0,
        },
        {
          q: "Dot Plot cho thấy:",
          options: ["Kỳ vọng lãi suất tương lai", "PMI", "GDP", "CPI"],
          correct: 0,
        },
        {
          q: "DXY mạnh thường:",
          options: [
            "Gây áp lực lên vàng",
            "Không ảnh hưởng vàng",
            "Crypto tăng",
            "Lãi suất giảm",
          ],
          correct: 0,
        },
        {
          q: "Macro regime thắt chặt:",
          options: [
            "Áp lực lên tài sản rủi ro",
            "Hỗ trợ tài sản rủi ro",
            "Không ảnh hưởng",
            "Chỉ ảnh hưởng USD",
          ],
          correct: 0,
        },
        {
          q: "Checklist tin vĩ mô:",
          options: [
            "Lịch tin, kịch bản, quản trị rủi ro, xác nhận kỹ thuật",
            "Chỉ xem mạng xã hội",
            "Chỉ xem RSI",
            "Không cần",
          ],
          correct: 0,
        },
      ],
    };

    const essayBank: Record<string, { prompt: string; answer: string }[]> = {
      "Price Action": [
        {
          prompt:
            "Giải thích vai trò của BOS và CHoCH trong xác định xu hướng.",
          answer:
            "BOS xác nhận tiếp diễn khi phá đỉnh/đáy xu thế; CHoCH phá vùng dao động ngược xu thế hiện tại báo hiệu khả năng chuyển pha. Kết hợp đa khung để tránh nhiễu.",
        },
        {
          prompt: "Trình bày cách xác định Order Block chất lượng.",
          answer:
            "OB là nến cuối trước cú đẩy tạo BOS. OB chất lượng nằm ở HTF, có confluence FVG/thanh khoản và phản ứng rõ ràng khi retest.",
        },
        {
          prompt: "Phân tích cơ chế thanh khoản và sweep trước khi đảo chiều.",
          answer:
            "Stop tập trung tại đỉnh/đáy rõ; giá thường sweep để tích lũy thanh khoản rồi đảo chiều. Entry sau sweep tại OB/FVG giúp RR tốt.",
        },
        {
          prompt: "Xây dựng kịch bản tiếp diễn và đảo chiều theo đa khung.",
          answer:
            "HTF cho hướng chủ đạo; LTF tìm tín hiệu: tiếp diễn với BOS và pullback nông; đảo chiều với CHoCH, fail to continue và OB ngược.",
        },
        {
          prompt: "Quy trình chọn vùng giao dịch ưu tiên.",
          answer:
            "Đánh dấu vùng confluence HTF (OB/FVG/SR/thanh khoản), loại bỏ vùng giữa range, xác định invalidation và RR trước khi vào lệnh.",
        },
      ],
      "Mô hình nến": [
        {
          prompt: "Phân biệt Engulfing, Harami và Outside/Inside Bar.",
          answer:
            "Engulfing: nến sau bao trùm nến trước; Harami: nến nhỏ trong thân nến lớn; Outside Bar: biên độ bao trùm; Inside Bar: nến trong biên độ nến trước.",
        },
        {
          prompt: "Điều kiện bối cảnh để mô hình nến đáng tin.",
          answer:
            "Vị trí tại vùng S/R/OB, có nến xác nhận, phù hợp HTF và khối lượng. Tránh giao dịch mô hình đơn lẻ giữa vùng.",
        },
        {
          prompt: "Ứng dụng Pin Bar tại vùng cầu/cung.",
          answer:
            "Pin Bar bóng dài tại rìa vùng cho thấy từ chối mạnh. Kết hợp confluence, vào lệnh với SL sau điểm vô hiệu và TP theo vùng kế tiếp.",
        },
        {
          prompt: "Xây dựng checklist trade theo mô hình nến.",
          answer:
            "Vị trí, confluence, nến xác nhận, invalidation, RR tối thiểu, quản lý lệnh và nhật ký.",
        },
        {
          prompt: "Sai lầm phổ biến khi trade mô hình nến.",
          answer:
            "Bỏ qua bối cảnh, vào lệnh vì một nến, SL quá gần, không có kế hoạch TP, trade ngược xu hướng mạnh.",
        },
      ],
      "Kháng cự/Hỗ trợ": [
        {
          prompt: "Giải thích khái niệm Zone vs Line và cách vẽ.",
          answer:
            "Zone thực tế hơn Line vì giá phản ứng theo vùng. Vẽ quanh swing high/low đáng kể và vùng tạo chuyển động mạnh; tinh chỉnh theo HTF.",
        },
        {
          prompt: "Xây dựng chiến lược retest sau breakout.",
          answer:
            "Chờ phá vùng, retest có nến xác nhận; vào theo hướng phá với SL ngoài vùng và TP vùng đối diện/extension.",
        },
        {
          prompt: "Nhận diện false-break và cách tận dụng.",
          answer:
            "Vượt vùng rồi phá ngược nhanh, thường kèm sweep thanh khoản. Vào sau sweep theo hướng chủ đạo.",
        },
        {
          prompt: "Kết hợp S/R với Fibonacci.",
          answer:
            "Confluence tại 0.5/0.618 hoặc 1.272/1.618 tăng xác suất; xác nhận bằng mô hình nến và cấu trúc.",
        },
        {
          prompt: "Quy tắc SL/TP tại vùng S/R.",
          answer:
            "SL ngoài vùng hợp lý để tránh nhiễu; TP theo vùng đối diện hoặc mốc thanh khoản kế tiếp; scale-out để bảo toàn lợi nhuận.",
        },
      ],
      Trendline: [
        {
          prompt: "Quy tắc vẽ trendline hợp lệ và kiểm chứng.",
          answer:
            "Nối các đáy tăng/đỉnh giảm với ít nhất 2 điểm; điểm chạm thứ 3 xác nhận. Kiểm chứng HTF để giảm nhiễu.",
        },
        {
          prompt: "Chiến lược giao dịch với kênh giá.",
          answer:
            "Mua đáy kênh, bán đỉnh kênh hoặc trade breakout retest; SL theo break giả, TP cạnh đối diện hoặc vùng kế.",
        },
        {
          prompt: "Nhận diện wedge và xử lý.",
          answer:
            "Wedge hội tụ báo suy yếu; chờ breakout có follow-through và retest để vào an toàn.",
        },
        {
          prompt: "Quản lý lệnh theo trendline.",
          answer:
            "Dời SL theo swing, chốt từng phần tại cạnh kênh; giữ khi breakout hợp lệ.",
        },
        {
          prompt: "Confluence trendline với OB/FVG.",
          answer: "Điểm giao cắt tăng xác suất; tìm nến xác nhận trên LTF.",
        },
      ],
      Fibonacci: [
        {
          prompt: "Ứng dụng mức 0.5/0.618 trong hồi quy.",
          answer:
            "0.5/0.618 thường là vùng hồi chất lượng; tìm nến đảo chiều xác nhận và đặt SL sau invalidation, TP theo extension.",
        },
        {
          prompt: "Dùng extension 1.272/1.618 cho mục tiêu.",
          answer:
            "Chốt từng phần tại 1.272/1.618; giữ phần còn lại nếu xu hướng giữ.",
        },
        {
          prompt: "Kết hợp Fibo với S/R và cấu trúc.",
          answer:
            "Confluence tăng xác suất; tránh dùng Fibo đơn lẻ không bối cảnh.",
        },
        {
          prompt: "Harmonic Patterns và yêu cầu tỷ lệ.",
          answer:
            "Mỗi mẫu yêu cầu tỷ lệ cụ thể; kiểm chứng vùng và cấu trúc trước khi vào.",
        },
        {
          prompt: "Sai lầm khi vẽ Fibo và cách sửa.",
          answer:
            "Vẽ tùy tiện; cần chọn swing rõ, đa khung thời gian và kiểm chứng.",
        },
      ],
      RSI: [
        {
          prompt: "Phân kỳ Regular/Hidden và ứng dụng.",
          answer:
            "Regular báo đảo chiều; Hidden báo tiếp diễn. Ưu tiên tại vùng S/R/OB với nến xác nhận.",
        },
        {
          prompt: "Range shift và xác nhận xu hướng.",
          answer:
            "Trong uptrend RSI 40–80; downtrend 20–60. Range shift xác nhận chuyển pha.",
        },
        {
          prompt: "Kết hợp RSI với Price Action.",
          answer:
            "Dùng RSI để xác nhận tại vùng và tìm phân kỳ; entry tại OB/FVG sau nến xác nhận.",
        },
        {
          prompt: "Sai lầm phổ biến khi dùng RSI.",
          answer:
            "Vào lệnh chỉ vì quá mua/bán; cần bối cảnh và invalidation rõ.",
        },
        {
          prompt: "Quản lý lệnh theo vùng RSI.",
          answer:
            "Chốt từng phần khi RSI vào vùng cực trị; giữ nếu cấu trúc đồng pha.",
        },
      ],
      MACD: [
        {
          prompt: "Giải thích các thành phần MACD và ý nghĩa.",
          answer:
            "MACD đo chênh EMA; Signal là trung bình MACD; Histogram phản ánh độ mạnh momentum.",
        },
        {
          prompt: "Vai trò zero line và xác nhận momentum.",
          answer:
            "Trên zero line là momentum tăng; dưới là giảm. Vượt zero line xác nhận chuyển pha.",
        },
        {
          prompt: "Phân kỳ MACD và bối cảnh phù hợp.",
          answer:
            "Phân kỳ báo đảo chiều/điều chỉnh; cần vị trí vùng và nến xác nhận để vào lệnh.",
        },
        {
          prompt: "Sai lầm khi giao dịch theo giao cắt MACD.",
          answer:
            "Bỏ qua bối cảnh, vào theo giao cắt ngược trend dễ nhiễu; cần confluence.",
        },
        {
          prompt: "Kết hợp MACD với Price Action.",
          answer: "Dùng Histogram mở rộng cùng phá vỡ/vùng để tăng độ tin cậy.",
        },
      ],
      "Quản lý rủi ro": [
        {
          prompt: "Thiết kế position sizing chuẩn.",
          answer:
            "Tính theo (Risk × Equity)/Stop; chuẩn hóa rủi ro mỗi lệnh; tránh cố định khối lượng.",
        },
        {
          prompt: "Risk budgeting và kiểm soát chuỗi thua.",
          answer:
            "Phân bổ rủi ro theo kỳ; khi hết ngân sách dừng; chuỗi thua giảm khối lượng và tạm nghỉ.",
        },
        {
          prompt: "Khi nào dời SL hợp lý?",
          answer:
            "Chỉ khi có cấu trúc mới xác nhận; tránh dời SL rộng hơn vì cảm xúc.",
        },
        {
          prompt: "Chiến lược partial TP.",
          answer:
            "Chốt từng phần tại mốc, giảm áp lực; giữ phần còn lại khi xu hướng tiếp diễn.",
        },
        {
          prompt: "Quản trị rủi ro danh mục.",
          answer:
            "Giảm tương quan vị thế; giới hạn tổng rủi ro mở; tránh cộng dồn rủi ro.",
        },
      ],
      "Tâm lý giao dịch": [
        {
          prompt: "Nhận diện và xử lý FOMO.",
          answer:
            "Xây kế hoạch, chỉ vào lệnh khi thỏa điều kiện hệ thống; chấp nhận bỏ lỡ để bảo vệ vốn.",
        },
        {
          prompt: "Revenge trade và cách tránh.",
          answer:
            "Nhận diện hành vi gỡ lỗ vô kỷ luật; dừng giao dịch, ôn hệ thống và trở lại khi tỉnh táo.",
        },
        {
          prompt: "Loss aversion ảnh hưởng kết quả.",
          answer:
            "Giữ lệnh thua quá lâu và chốt lời sớm; cần tuân SL và để lợi nhuận chạy theo kế hoạch.",
        },
        {
          prompt: "Vai trò nhật ký giao dịch.",
          answer:
            "Phản hồi khách quan, nhận diện lỗi tâm lý, cải thiện kỷ luật qua dữ liệu.",
        },
        {
          prompt: "Xây mindset dài hạn.",
          answer:
            "Tư duy xác suất, kỳ vọng thực tế, tập trung quy trình, không tìm lệnh hoàn hảo.",
        },
      ],
      "Tin tức & vĩ mô": [
        {
          prompt: "Ảnh hưởng của CPI/NFP tới thị trường.",
          answer:
            "CPI cao tăng kỳ vọng lãi suất làm USD mạnh; NFP tốt củng cố thắt chặt. Cả hai tăng biến động, cần quản trị rủi ro.",
        },
        {
          prompt: "Chiến lược giao dịch quanh tin lớn.",
          answer:
            "Tránh vào trước tin; chờ phản ứng đầu tiên; giao dịch retest theo hướng chủ đạo với SL rõ.",
        },
        {
          prompt: "Theo dõi DXY và lãi suất.",
          answer:
            "DXY mạnh gây áp lực vàng và tài sản rủi ro; quyết định lãi suất thay đổi dòng tiền toàn cầu.",
        },
        {
          prompt: "Xây checklist vĩ mô.",
          answer:
            "Lịch tin, kịch bản, quản trị rủi ro, xác nhận kỹ thuật, đánh giá phản ứng sau tin.",
        },
        {
          prompt: "Sai lầm thường gặp với tin vĩ mô.",
          answer:
            "Vào lệnh lúc công bố, không SL, đoán số liệu; bỏ qua cấu trúc và bối cảnh.",
        },
      ],
    };

    const caseBank: Record<string, { prompt: string; answer: string }[]> = {
      "Price Action": [
        {
          prompt:
            "Quan sát cấu trúc H4: xác định vùng OB/FVG để vào lệnh theo xu hướng.",
          answer:
            "Đánh dấu OB trước BOS, tìm FVG chưa lấp; chờ retest trên LTF xuất hiện nến quyết định, SL sau invalidation.",
        },
        {
          prompt: "Biểu đồ thể hiện sweep đỉnh: đề xuất điểm entry sau sweep.",
          answer:
            "Đợi nến xác nhận đảo chiều tại OB, vào lệnh sau pullback ngắn với SL qua đỉnh sweep.",
        },
        {
          prompt:
            "Xu hướng tăng yếu dần: chọn kịch bản tiếp diễn hay đảo chiều.",
          answer:
            "Nếu CHoCH xuất hiện trên LTF và HTF mâu thuẫn, ưu tiên đảo chiều; ngược lại theo BOS tiếp diễn.",
        },
        {
          prompt: "Giá tạo Imbalance lớn: xác định vùng rebalancing.",
          answer:
            "Kỳ vọng giá lấp FVG; tìm entry khi lấp phần lớn gap kèm tín hiệu nến.",
        },
        {
          prompt: "Xác định invalidation rõ cho luận đề.",
          answer:
            "Đặt SL sau đáy/đỉnh cấu trúc bị phá; nếu bị chạm SL coi luận đề vô hiệu và dừng lệnh.",
        },
      ],
      "Mô hình nến": [
        {
          prompt: "Cụm nến Morning Star tại vùng cầu HTF: kế hoạch vào lệnh.",
          answer:
            "Xác nhận bằng nến thứ ba thân dài; vào lệnh buy tại retest, SL dưới đáy cụm, TP vùng kháng cự kế tiếp.",
        },
        {
          prompt: "Bearish Engulfing ở đỉnh kháng cự: xử lý thế nào?",
          answer:
            "Sell sau retest nhỏ; SL trên đỉnh cụm; TP vùng hỗ trợ gần và thanh khoản đáy.",
        },
        {
          prompt: "Pin Bar bóng dài tại rìa vùng: đánh giá độ tin cậy.",
          answer:
            "Tin cậy khi có confluence HTF và volume; cần nến xác nhận sau đó.",
        },
        {
          prompt: "Inside Bar trong tích lũy: kế hoạch breakout.",
          answer:
            "Trade theo xu hướng chủ đạo; đặt SL ngoài biên; TP theo vùng đối diện.",
        },
        {
          prompt: "Tweezer tại mốc tròn: vào lệnh thế nào?",
          answer: "Đợi xác nhận; vào lệnh theo hướng từ chối; SL sau mốc tròn.",
        },
      ],
      "Kháng cự/Hỗ trợ": [
        {
          prompt: "Giá phá kháng cự HTF rồi retest: đề xuất entry.",
          answer:
            "Buy tại retest có nến xác nhận; SL dưới vùng; TP tại vùng đối diện/extension.",
        },
        {
          prompt: "False-break hỗ trợ với sweep đáy: xử lý.",
          answer:
            "Vào buy sau sweep khi giá quay lại vùng; SL dưới đáy sweep; TP vùng kháng cự.",
        },
        {
          prompt: "Xác định Flip Zone đáng tin.",
          answer:
            "Vùng từng là hỗ trợ chuyển thành kháng cự kèm volume/OB; vào lệnh theo hướng mới.",
        },
        {
          prompt: "Range rõ ràng: chiến lược.",
          answer:
            "Mua biên dưới, bán biên trên với tín hiệu nến; tránh giữa range.",
        },
        {
          prompt: "Confluence với Fibo 0.618 tại hỗ trợ.",
          answer: "Buy tại confluence, SL dưới vùng; TP 1.272/1.618 extension.",
        },
      ],
      Trendline: [
        {
          prompt: "Xu hướng tăng: chạm trendline lần 3.",
          answer: "Buy với nến xác nhận; SL dưới swing; TP đỉnh kênh.",
        },
        {
          prompt: "Break trendline giảm với follow-through.",
          answer:
            "Chờ retest trendline rồi sell; SL trên retest; TP vùng hỗ trợ kế.",
        },
        {
          prompt: "Wedge hội tụ trước breakout mạnh.",
          answer:
            "Đợi breakout, vào sau retest; SL ngoài wedge; TP theo biên độ mở rộng.",
        },
        {
          prompt: "Kênh giá song song: entry tối ưu.",
          answer:
            "Vào tại cạnh kênh với tín hiệu; SL ngoài kênh; TP cạnh đối diện.",
        },
        {
          prompt: "Confluence trendline + OB.",
          answer:
            "Entry tại điểm giao cắt; SL sau invalidation OB; TP vùng kế.",
        },
      ],
      Fibonacci: [
        {
          prompt: "Hồi về 0.618 với confluence S/R.",
          answer: "Vào tại nến xác nhận; SL dưới vùng; TP 1.272/1.618.",
        },
        {
          prompt: "AB=CD hoàn tất tại vùng kháng cự.",
          answer: "Sell tại điểm D; SL trên vùng; TP hỗ trợ gần.",
        },
        {
          prompt: "Extension 1.618 làm mục tiêu.",
          answer: "Chốt phần tại 1.272, phần tại 1.618; giữ nếu trend mạnh.",
        },
        {
          prompt: "Swing lựa chọn để vẽ Fibo.",
          answer: "Chọn swing rõ theo xu hướng; tránh nhiễu LTF.",
        },
        {
          prompt: "Harmonic Pattern trùng confluence.",
          answer: "Chờ xác nhận; SL sau invalidation; TP theo vùng kế.",
        },
      ],
      RSI: [
        {
          prompt: "Phân kỳ Regular tại vùng cung mạnh.",
          answer: "Sell sau nến xác nhận; SL trên vùng; TP vùng hỗ trợ.",
        },
        {
          prompt: "Hidden divergence trong xu hướng tăng.",
          answer: "Buy theo tiếp diễn; SL dưới swing; TP vùng kháng cự kế.",
        },
        {
          prompt: "Range shift xác nhận chuyển pha.",
          answer:
            "Điều chỉnh chiến lược theo range mới; vào khi có confluence.",
        },
        {
          prompt: "RSI breakout giữ trên 70.",
          answer: "Theo xu hướng; vào tại pullback; SL dưới swing.",
        },
        {
          prompt: "Quản lý lệnh khi RSI cực trị.",
          answer: "Chốt từng phần; giữ phần còn lại nếu cấu trúc chưa vô hiệu.",
        },
      ],
      MACD: [
        {
          prompt: "Histogram mở rộng cùng phá vỡ kháng cự.",
          answer: "Buy theo breakout; SL dưới retest; TP vùng kháng cự kế.",
        },
        {
          prompt: "Phân kỳ MACD tại đỉnh.",
          answer: "Sell sau xác nhận; SL trên đỉnh; TP hỗ trợ gần.",
        },
        {
          prompt: "Vượt zero line kèm follow-through.",
          answer: "Theo xu hướng; vào tại retest; SL sau invalidation.",
        },
        {
          prompt: "Giao cắt ngược trend gây nhiễu.",
          answer: "Tránh vào; chờ confluence và xác nhận phù hợp xu hướng.",
        },
        {
          prompt: "MACD trên HTF xác nhận, LTF entry.",
          answer: "Đồng pha HTF/LTF; vào với nến quyết định; SL theo cấu trúc.",
        },
      ],
      "Quản lý rủi ro": [
        {
          prompt: "Tính position sizing cho lệnh với SL 100 pip.",
          answer:
            "Khối lượng = (Risk × Equity)/100 pip; đảm bảo risk per trade ~1%.",
        },
        {
          prompt: "Kế hoạch khi drawdown 10%.",
          answer:
            "Giảm khối lượng, tạm nghỉ, đánh giá hệ thống; không gỡ lỗ vô kỷ luật.",
        },
        {
          prompt: "Risk budgeting tuần đã hết.",
          answer: "Dừng giao dịch; ôn lại dữ liệu; tránh overtrade.",
        },
        {
          prompt: "Partial TP tại mốc tâm lý.",
          answer: "Chốt một phần tại 1900/2000; giữ phần còn lại theo trend.",
        },
        {
          prompt: "Giảm tương quan vị thế.",
          answer:
            "Phân bổ danh mục đa dạng; giới hạn số lệnh cùng hướng trên cùng tài sản.",
        },
      ],
      "Tâm lý giao dịch": [
        {
          prompt: "Chuỗi thua 5 lệnh liên tiếp.",
          answer:
            "Giảm risk, dừng tạm thời, xem lại hệ thống, chỉ trở lại khi tâm lý ổn định.",
        },
        {
          prompt: "Nhận diện FOMO trên breakout.",
          answer: "Không đuổi giá; chờ retest và xác nhận; tuân kế hoạch.",
        },
        {
          prompt: "Revenge trade sau thua lớn.",
          answer:
            "Dừng ngay; ghi nhật ký; quay lại khi bình tĩnh; không tăng khối lượng.",
        },
        {
          prompt: "Thiết lập thói quen trước phiên.",
          answer:
            "Chuẩn bị vùng, kế hoạch, kiểm tra lịch tin, đặt quy tắc SL/TP/RR.",
        },
        {
          prompt: "Xây mindset dài hạn.",
          answer:
            "Tập trung quy trình, thống kê, tối ưu dần; chấp nhận thua lỗ bình thường.",
        },
      ],
      "Tin tức & vĩ mô": [
        {
          prompt: "Kịch bản sau CPI cao hơn kỳ vọng.",
          answer:
            "USD mạnh, vàng chịu áp lực; chờ retest kháng cự mới để sell theo cấu trúc.",
        },
        {
          prompt: "Phản ứng sau NFP bất ngờ tốt.",
          answer:
            "Biến động mạnh; chờ ổn định; trade retest theo hướng chủ đạo.",
        },
        {
          prompt: "Theo dõi DXY và vàng.",
          answer:
            "DXY tăng gây áp lực vàng; chọn kịch bản phù hợp; tránh giao dịch trước tin.",
        },
        {
          prompt: "Tin bất ngờ trong phiên Mỹ.",
          answer: "Giảm khối lượng, không gỡ lỗ; chờ cấu trúc mới để đánh giá.",
        },
        {
          prompt: "Xây checklist giao dịch theo tin.",
          answer:
            "Lịch tin, kịch bản phản ứng, quản trị rủi ro, xác nhận kỹ thuật, đánh giá sau tin.",
        },
      ],
    };

    const rows: any[] = [];
    for (const s of sections) {
      const name = sectionName[s];
      const mcList = mcBank[name] || [];
      const essayList = essayBank[name] || [];
      const caseList = caseBank[name] || [];

      // Multiple-choice: lấy tối đa 10 câu
      for (let i = 0; i < Math.min(10, mcList.length); i++) {
        const item = mcList[i];
        rows.push({
          section_id: s,
          type: "multiple-choice",
          content: item.q,
          options: JSON.stringify(
            item.options.map((text, idx) => ({
              id: `opt-${s}-${i + 1}-${idx}`,
              text,
              isCorrect: idx === item.correct,
            }))
          ),
          media: null,
          correct_answer: null,
          explanation: `Giải thích chi tiết: Đáp án đúng là "${item.options[item.correct]}". Đây là kiến thức quan trọng cần nắm vững trong phần ${name}.`,
          related_question_ids: JSON.stringify([]),
          created_at: now,
          updated_at: now,
        });
      }

      // Essay: lấy tối đa 5 câu
      for (let i = 0; i < Math.min(5, essayList.length); i++) {
        const item = essayList[i];
        rows.push({
          section_id: s,
          type: "essay",
          content: item.prompt,
          options: null,
          media: null,
          correct_answer: item.answer,
          explanation: null,
          related_question_ids: JSON.stringify([]),
          created_at: now,
          updated_at: now,
        });
      }

      // Case-study: lấy tối đa 5 câu
      for (let i = 0; i < Math.min(5, caseList.length); i++) {
        const item = caseList[i];
        rows.push({
          section_id: s,
          type: "case-study",
          content: item.prompt,
          options: null,
          media: JSON.stringify({
            type: "image",
            url: "https://via.placeholder.com/960x540.png?text=Case+Study",
          }),
          correct_answer: item.answer,
          explanation:
            "Phân tích đa khung, kiểm chứng confluence và nến xác nhận.",
          related_question_ids: JSON.stringify([]),
          created_at: now,
          updated_at: now,
        });
      }
    }
    await queryInterface.bulkInsert("studies", rows);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete("studies", {});
  },
};
