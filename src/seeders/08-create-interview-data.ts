import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    // 1. Insert Topics
    await queryInterface.bulkInsert("interview_topics", [
      {
        id: 1,
        name: "Phân tích kỹ thuật",
        market: "crypto",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        name: "Quản lý rủi ro",
        market: "crypto",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        name: "Tâm lý giao dịch",
        market: "crypto",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        name: "Tin tức & vĩ mô",
        market: "crypto",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        name: "Phân tích kỹ thuật",
        market: "gold",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        name: "Quản lý rủi ro",
        market: "gold",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 7,
        name: "Tâm lý giao dịch",
        market: "gold",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 8,
        name: "Tin tức & vĩ mô",
        market: "gold",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    // 2. Insert Sections
    await queryInterface.bulkInsert("interview_sections", [
      // Topic 1: Crypto Technical Analysis
      {
        id: 1,
        topic_id: 1,
        name: "Price Action",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        topic_id: 1,
        name: "Mô hình nến",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        topic_id: 1,
        name: "Kháng cự/Hỗ trợ",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        topic_id: 1,
        name: "Trendline",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        topic_id: 1,
        name: "Fibonacci",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        topic_id: 1,
        name: "RSI",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 7,
        topic_id: 1,
        name: "MACD",
        created_at: new Date(),
        updated_at: new Date(),
      },
      // Topic 5: Gold Technical Analysis
      {
        id: 8,
        topic_id: 5,
        name: "Price Action",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 9,
        topic_id: 5,
        name: "Mô hình nến",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 10,
        topic_id: 2,
        name: "Quản lý rủi ro",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 11,
        topic_id: 3,
        name: "Tâm lý giao dịch",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 12,
        topic_id: 4,
        name: "Tin tức & vĩ mô",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 13,
        topic_id: 6,
        name: "Quản lý rủi ro",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 14,
        topic_id: 7,
        name: "Tâm lý giao dịch",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 15,
        topic_id: 8,
        name: "Tin tức & vĩ mô",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    const levels: ("Entry" | "Junior" | "Middle" | "Senior" | "Expert")[] = [
      "Entry",
      "Junior",
      "Middle",
      "Senior",
      "Expert",
    ];
    const now = new Date();
    const qaBySection: Record<number, { q: string; a: string }[]> = {
      1: [
        {
          q: "Price Action là gì? Nguyên lý cốt lõi của phương pháp này?",
          a: "Price Action là phân tích hành động giá thuần dựa trên cấu trúc thị trường, vùng cung cầu, thanh khoản và phản ứng nến, bỏ qua chỉ báo trễ. Nguyên lý cốt lõi là đọc bối cảnh và ý đồ của dòng tiền qua chuyển động giá.",
        },
        {
          q: "Cấu trúc thị trường Uptrend/Downtrend thể hiện như thế nào?",
          a: "Uptrend: Higher High và Higher Low liên tiếp. Downtrend: Lower High và Lower Low liên tiếp. Việc duy trì cấu trúc xác nhận xu hướng; phá vỡ cấu trúc báo hiệu khả năng đảo chiều hoặc điều chỉnh sâu.",
        },
        {
          q: "BOS và CHoCH khác nhau ra sao trong đọc cấu trúc?",
          a: "BOS là Break of Structure, phá vỡ đỉnh/đáy xu hướng, xác nhận tiếp diễn. CHoCH là Change of Character, phá vỡ vùng dao động gần nhất ngược hướng xu thế hiện tại, báo hiệu khả năng chuyển pha.",
        },
        {
          q: "Vùng cung cầu (Supply/Demand) được xác định như thế nào?",
          a: "Vùng cung là nơi bán mạnh từng xuất hiện, thường quanh đỉnh và nến phân phối; vùng cầu là nơi mua mạnh xuất hiện quanh đáy và nến tích lũy. Xác định bằng các base trước cú đẩy mạnh (Imbalance).",
        },
        {
          q: "Order Block là gì và ứng dụng vào Entry?",
          a: "Order Block là nến cuối cùng trước cú đẩy mạnh tạo BOS. Nó đại diện khối lệnh của tổ chức. Khi giá hồi test lại OB cùng bối cảnh phù hợp có thể làm điểm vào lệnh với RR tốt.",
        },
        {
          q: "Fair Value Gap (FVG) là gì? Tại sao quan trọng?",
          a: "FVG là khoảng trống giá giữa nến để lại do mất cân bằng cung cầu. Giá thường có xu hướng lấp FVG trong hồi quy. Kết hợp FVG với OB và cấu trúc cho điểm vào xác suất cao.",
        },
        {
          q: "Thanh khoản (Liquidity) hoạt động thế nào trong Price Action?",
          a: "Thanh khoản tích tụ tại vùng có nhiều stop, như trên đỉnh/đáy rõ ràng. Giá thường quét thanh khoản trước khi đi theo hướng chủ đạo. Nhận diện các pool liquidity giúp tránh bị quét và chọn entry sau sweep.",
        },
        {
          q: "Các kiểu Entry phổ biến: Breakout, Pullback, Reversal?",
          a: "Breakout theo sau BOS; Pullback tại OB/FVG sau cú đẩy; Reversal khi có CHoCH và tín hiệu từ cấu trúc nhỏ. Chọn kiểu entry dựa vào bối cảnh, vị trí trên khung thời gian cao và RR kỳ vọng.",
        },
        {
          q: "Quản trị rủi ro (SL/TP/RR) trong giao dịch Price Action?",
          a: "Đặt SL sau vùng invalidation (qua đáy/đỉnh cấu trúc). TP theo mốc thanh khoản hoặc vùng cung cầu kế tiếp. Ưu tiên RR tối thiểu 1:2 đến 1:3, scale-out khi đạt các điểm mốc để bảo toàn lợi nhuận.",
        },
        {
          q: "Khung thời gian (HTF/LTF) phối hợp ra sao?",
          a: "Xác định xu hướng và vùng quan trọng trên HTF (H4/D1), triển khai entry trên LTF (M15/M5). Sự đồng pha giữa HTF và LTF giúp giảm nhiễu và tăng xác suất.",
        },
        {
          q: "Invalidation trong Price Action nghĩa là gì?",
          a: "Invalidation là điểm mà luận đề giao dịch không còn đúng, thường khi cấu trúc bị phá vỡ ngược kỳ vọng. Nó là vị trí đặt SL hợp lý để giới hạn rủi ro.",
        },
        {
          q: "Hiểu nến quyết định (Decision Candle) và nến do dự?",
          a: "Nến quyết định có thân lớn, phá vùng giá; nến do dự nhỏ, bóng dài, cho thấy thiếu cam kết. Đặt trọng tâm vào nến quyết định gần vùng quan trọng khi tìm tín hiệu vào.",
        },
        {
          q: "Quét thanh khoản (Liquidity Sweep) có ý nghĩa gì?",
          a: "Sweep quét stop trên đỉnh/đáy để tích lũy thanh khoản rồi đảo chiều. Entry sau sweep tại OB/FVG cho điểm vào tốt với SL ngắn.",
        },
        {
          q: "Imbalance và Rebalancing trong dòng giá?",
          a: "Imbalance là mất cân bằng thể hiện bằng FVG. Rebalancing là quá trình giá quay lại lấp khoảng trống trước khi tiếp diễn. Quan sát hành vi khi lấp gap để xác nhận hướng.",
        },
        {
          q: "Cách chọn vùng giá ưu tiên giao dịch?",
          a: "Chọn vùng tại HTF có confluence: OB mạnh, FVG, thanh khoản, vùng cung cầu. Tránh giao dịch giữa vùng không rõ ràng; ưu tiên cạnh vùng để tối ưu RR.",
        },
        {
          q: "Kịch bản tiếp diễn vs đảo chiều, phân biệt ra sao?",
          a: "Tiếp diễn: BOS theo xu hướng, pullback nông, momentum giữ. Đảo chiều: CHoCH, fail to continue, xuất hiện OB ngược và sweep ở đầu xu hướng. Kiểm chứng qua khung thời gian cao.",
        },
        {
          q: "Quản lý lệnh khi giá đi ngược kỳ vọng?",
          a: "Nếu bối cảnh chưa bị vô hiệu, có thể đợi tái test vùng; nếu invalidation bị phá, đóng lệnh theo kế hoạch. Không dời SL vô nguyên tắc; ưu tiên tuân thủ kịch bản.",
        },
        {
          q: "Kết hợp Price Action với tin tức như thế nào?",
          a: "Tránh vào lệnh ngay trước tin lớn. Dùng vùng và cấu trúc để xác định kịch bản sau tin; chờ xác nhận bằng nến quyết định hoặc retest để giảm nhiễu.",
        },
        {
          q: "Sai lầm phổ biến của người mới với Price Action?",
          a: "Giao dịch giữa vùng, bỏ qua HTF, không xác định invalidation rõ, vào lệnh vì một nến đơn lẻ, thiếu kế hoạch quản trị rủi ro.",
        },
        {
          q: "Xây dựng kế hoạch giao dịch theo Price Action?",
          a: "Xác định xu hướng HTF, đánh dấu vùng confluence, lập kịch bản tiếp diễn/đảo chiều, quy tắc entry/SL/TP, tiêu chí quản lý lệnh, nhật ký giao dịch để tối ưu dần.",
        },
      ],
      2: [
        {
          q: "Mô hình Engulfing là gì và tín hiệu giao dịch?",
          a: "Engulfing là nến bao trùm hoàn toàn nến trước, báo hiệu đảo chiều mạnh. Bullish Engulfing tại đáy và Bearish Engulfing tại đỉnh có xác suất cao hơn khi xuất hiện ở vùng cung cầu.",
        },
        {
          q: "Pin Bar phản ánh điều gì trong hành động giá?",
          a: "Pin Bar có bóng dài, thân nhỏ, cho thấy sự từ chối giá. Bullish Pin Bar tại vùng cầu báo hiệu khả năng bật lên; Bearish tại vùng cung cho khả năng giảm.",
        },
        {
          q: "Doji thể hiện ý nghĩa gì?",
          a: "Doji thân rất nhỏ, cho thấy giằng co. Doji tại vùng quan trọng sau xu hướng mạnh có thể báo hiệu đảo chiều hoặc nghỉ; cần xác nhận qua nến sau.",
        },
        {
          q: "Morning Star và Evening Star hoạt động ra sao?",
          a: "Morning Star là cụm 3 nến báo hiệu đảo chiều tăng ở đáy; Evening Star ở đỉnh báo hiệu giảm. Xác suất cao hơn khi xuất hiện ở vùng S/D với volume ủng hộ.",
        },
        {
          q: "Harami là gì? Khác Engulfing như thế nào?",
          a: "Harami là nến nhỏ nằm trong thân nến lớn trước đó, báo hiệu do dự và khả năng đảo chiều. Engulfing thì nến sau bao trùm nến trước thể hiện quyết liệt hơn.",
        },
        {
          q: "Tweezer Top/Bottom cho tín hiệu gì?",
          a: "Tweezer có hai đỉnh hoặc đáy bằng nhau, thể hiện từ chối mạnh tại cùng mức giá. Kết hợp với vùng kháng cự/hỗ trợ cho xác suất tốt.",
        },
        {
          q: "Marubozu cho thấy điều gì về momentum?",
          a: "Marubozu thân dài, không bóng hoặc bóng rất nhỏ, thể hiện momentum mạnh. Theo xu hướng, nó có thể báo hiệu tiếp diễn; tại vùng cực trị có thể là climax.",
        },
        {
          q: "Three White Soldiers/Black Crows ý nghĩa?",
          a: "Ba nến tăng liên tiếp thân dài báo hiệu đảo chiều tăng mạnh; ba nến giảm liên tiếp báo hiệu đảo chiều giảm mạnh. Chú ý vị trí xuất hiện để tránh vào muộn.",
        },
        {
          q: "Inside Bar và chiến lược giao dịch?",
          a: "Inside Bar là nến nằm trong biên độ nến trước, phản ánh tích lũy. Chiến lược là chờ breakout theo xu hướng với SL ngoài biên, hoặc trade false-break tuỳ bối cảnh.",
        },
        {
          q: "Outside Bar có khác gì Engulfing?",
          a: "Outside Bar bao trùm biên độ nến trước cả thân lẫn bóng, thể hiện biến động mạnh. Tín hiệu tương tự Engulfing nhưng cần lọc nhiễu khi xuất hiện giữa vùng.",
        },
        {
          q: "Belt Hold là gì?",
          a: "Belt Hold là nến mở cửa tại cực trị và di chuyển một hướng mạnh. Nó thể hiện sự thống trị của một phía trong phiên, phù hợp làm tín hiệu tiếp diễn khi theo xu hướng.",
        },
        {
          q: "Heikin Ashi dùng như thế nào với mô hình nến?",
          a: "Heikin Ashi làm mượt xu hướng; kết hợp với mô hình nến chuẩn trên nến thường để lọc nhiễu và giữ lệnh theo trend.",
        },
        {
          q: "Kết hợp mô hình nến với khối lượng?",
          a: "Tín hiệu đảo chiều tại vùng quan trọng với gia tăng khối lượng đáng tin cậy hơn. Khối lượng thấp đi kèm mô hình có thể cho thấy false-signal.",
        },
        {
          q: "Xác nhận mô hình nến cần tiêu chí gì?",
          a: "Vị trí xuất hiện (vùng S/D, S/R), nến xác nhận tiếp theo, cấu trúc khung lớn, khối lượng. Không giao dịch mô hình nến đơn lẻ giữa vùng.",
        },
        {
          q: "Sai lầm thường gặp khi trade mô hình nến?",
          a: "Vào lệnh chỉ dựa một mô hình mà bỏ qua bối cảnh, đặt SL quá gần, không có kế hoạch TP rõ ràng, trade ngược xu hướng mạnh.",
        },
        {
          q: "Mô hình nến trong rang-bound khác xu hướng ra sao?",
          a: "Trong range, mẫu nến đảo chiều ở biên vùng có xác suất tốt; trong xu hướng, mẫu nến theo xu hướng tại pullback có xác suất cao hơn.",
        },
        {
          q: "Khi nào nên bỏ qua mô hình nến?",
          a: "Khi xuất hiện tại giữa vùng, không có confluence HTF, ngay trước tin mạnh, hoặc khi cấu trúc mâu thuẫn.",
        },
        {
          q: "Kết hợp mô hình nến với OB/FVG thế nào?",
          a: "Mô hình nến tại rìa OB hoặc khi lấp FVG cung cấp entry xác nhận; cần bối cảnh đủ và invalidation rõ.",
        },
        {
          q: "Cách đặt SL/TP khi trade mô hình nến?",
          a: "Đặt SL sau điểm vô hiệu mô hình (qua bóng nến quan trọng). TP tại mốc thanh khoản hoặc vùng S/R kế tiếp. Tối ưu RR qua entry tại rìa vùng.",
        },
        {
          q: "Quy trình checklist trước khi vào lệnh theo mô hình nến?",
          a: "Xác định vị trí, xu hướng HTF, confluence, nến xác nhận, invalidation, RR tối thiểu, kế hoạch quản lý lệnh và ghi chép.",
        },
      ],
      3: [
        {
          q: "Kháng cự/Hỗ trợ là gì? Zone vs Line?",
          a: "Kháng cự/Hỗ trợ là vùng giá nơi cung hoặc cầu trội. Dùng zone sẽ thực tế hơn line vì giá hiếm khi phản ứng chính xác tại một điểm.",
        },
        {
          q: "Cách vẽ vùng hỗ trợ/kháng cự hiệu quả?",
          a: "Xác định các swing high/low đáng kể, hợp lưu với volume và nến quyết định. Ưu tiên các vùng từng tạo chuyển động mạnh.",
        },
        {
          q: "Flip Zone là gì?",
          a: "Flip Zone là vùng từng là hỗ trợ chuyển thành kháng cự hoặc ngược lại. Đây là vùng có xác suất phản ứng cao.",
        },
        {
          q: "Multi-timeframe S/R phối hợp ra sao?",
          a: "Đánh dấu vùng chính trên HTF, tinh chỉnh trên LTF để tìm điểm vào. Vùng HTF có sức nặng lớn hơn vùng LTF.",
        },
        {
          q: "Retest vùng S/R cho entry thế nào?",
          a: "Chờ giá phá vùng rồi retest, xuất hiện nến xác nhận hoặc mô hình nến và giao dịch theo hướng phá vỡ.",
        },
        {
          q: "False Breakout tại S/R nhận diện ra sao?",
          a: "Giá vượt vùng nhưng không giữ được, nhanh chóng quay lại và phá ngược. Sweep thanh khoản tại vùng là tín hiệu mạnh.",
        },
        {
          q: "S/R động khác S/R tĩnh thế nào?",
          a: "S/R động dùng MA, VWAP, trendline; S/R tĩnh dùng vùng cấu trúc. Kết hợp cả hai cho độ tin cậy cao.",
        },
        {
          q: "Ưu tiên vùng nào khi có nhiều S/R?",
          a: "Ưu tiên vùng có nhiều hợp lưu: HTF zone, khối lượng, FVG/OB, tin cậy lịch sử. Tránh vào giữa hai vùng gần nhau.",
        },
        {
          q: "Quy tắc SL/TP với giao dịch tại S/R?",
          a: "SL ngoài vùng một khoảng hợp lý để tránh nhiễu; TP tại vùng đối diện hoặc mốc thanh khoản kế tiếp.",
        },
        {
          q: "S/R trong range giao dịch thế nào?",
          a: "Mua gần hỗ trợ, bán gần kháng cự, chờ tín hiệu xác nhận. Tránh breakout giả giữa range.",
        },
        {
          q: "Hợp lưu S/R với Fibonacci?",
          a: "Vùng trùng 0.618/0.5 hoặc mở rộng 1.272/1.618 tăng xác suất phản ứng. Kết hợp với cấu trúc và mô hình nến.",
        },
        {
          q: "S/R với tin tức mạnh?",
          a: "Tin có thể xuyên phá vùng. Tránh vào lệnh trước tin; chờ ổn định rồi đánh theo phản ứng tại vùng.",
        },
        {
          q: "Sai lầm khi vẽ S/R?",
          a: "Vẽ quá nhiều, không phân cấp HTF/LTF, chọn điểm không tạo chuyển động, bỏ qua bối cảnh.",
        },
        {
          q: "Backtest S/R như thế nào?",
          a: "Kiểm tra lịch sử phản ứng vùng, tỷ lệ thành công theo bối cảnh, tối ưu quy tắc vào/thoát lệnh.",
        },
        {
          q: "Khi nào bỏ qua S/R?",
          a: "Trong xu hướng rất mạnh, vùng yếu dễ bị xuyên phá. Ưu tiên giao dịch theo xu hướng và tín hiệu tiếp diễn.",
        },
        {
          q: "Kết hợp S/R với thanh khoản?",
          a: "Vùng có pool stop phía sau thường bị sweep. Chờ sweep tại vùng rồi giao dịch theo hướng chính.",
        },
        {
          q: "Xác định vùng vô hiệu tại S/R?",
          a: "Khi giá đóng cửa rõ ngoài vùng và tiếp diễn, coi như vùng vô hiệu cho bối cảnh hiện tại.",
        },
        {
          q: "S/R và quản lý cảm xúc?",
          a: "Không cố bắt đỉnh đáy; tuân thủ kế hoạch. Giao dịch tại vùng cần kỷ luật và xác nhận rõ ràng.",
        },
        {
          q: "Ví dụ thực tế về giao dịch tại S/R?",
          a: "Giá phá kháng cự HTF, retest trên LTF bằng Engulfing, vào lệnh theo xu hướng với SL dưới vùng, TP tại mốc thanh khoản tiếp theo.",
        },
        {
          q: "Checklist giao dịch S/R?",
          a: "Phân cấp vùng, hợp lưu, tín hiệu, invalidation, RR, quản lý lệnh.",
        },
      ],
      4: [
        {
          q: "Trendline là gì? Quy tắc cơ bản vẽ trendline?",
          a: "Trendline là đường nối các đáy tăng hoặc đỉnh giảm để mô tả xu hướng. Cần ít nhất 2 điểm, xác nhận với điểm thứ 3 cho độ tin cậy.",
        },
        {
          q: "Bao nhiêu điểm chạm thì trendline đáng tin?",
          a: "Hai điểm tạo đường, điểm chạm thứ ba xác nhận. Càng nhiều điểm chạm hợp lệ độ tin cậy càng cao.",
        },
        {
          q: "Kênh giá (Price Channel) ứng dụng thế nào?",
          a: "Kênh giá tạo bởi trendline và đường song song. Trade mua ở đáy kênh, bán ở đỉnh kênh hoặc breakout theo hướng chính.",
        },
        {
          q: "Wedge và ứng dụng giao dịch?",
          a: "Wedge là mô hình hội tụ, báo hiệu suy yếu. Breakout wedge thường đi mạnh; chờ retest để vào an toàn.",
        },
        {
          q: "Sai lầm phổ biến khi vẽ trendline?",
          a: "Ép đường theo ý muốn, dùng điểm chạm không hợp lệ, bỏ qua HTF, vẽ quá nhiều làm rối bối cảnh.",
        },
        {
          q: "Break trendline xác nhận khi nào?",
          a: "Khi giá đóng cửa rõ ràng ngoài đường và có follow-through. Retest lại đường tăng độ tin cậy.",
        },
        {
          q: "Trendline trong range có tác dụng?",
          a: "Trong range, trendline ít giá trị. Ưu tiên S/R vùng; trendline chỉ hỗ trợ quan sát dao động nhỏ.",
        },
        {
          q: "Kết hợp trendline với mô hình nến?",
          a: "Tín hiệu nến tại điểm chạm hoặc retest giúp xác nhận entry. Ưu tiên nến quyết định và mô hình đảo chiều.",
        },
        {
          q: "Độ dốc trendline có ý nghĩa?",
          a: "Dốc lớn báo xu hướng mạnh nhưng dễ đứt; dốc vừa ổn định hơn. Quá dốc thường là climax cần thận trọng.",
        },
        {
          q: "Trendline và đa khung thời gian?",
          a: "Vẽ trên HTF để tránh nhiễu; tinh chỉnh entry trên LTF. Trendline HTF có trọng lượng lớn hơn.",
        },
        {
          q: "Dùng trendline làm SL/TP?",
          a: "SL dưới/ trên trendline sau break giả; TP tại cạnh đối diện kênh hoặc vùng S/R kế.",
        },
        {
          q: "Parallel Channel kéo như thế nào?",
          a: "Kéo đường song song từ trendline qua điểm chạm đối diện hợp lệ. Dùng để dự đoán biên dao động.",
        },
        {
          q: "Pitchfork khác kênh giá?",
          a: "Pitchfork gồm ba điểm, tạo ba đường định hướng. Dùng để theo dõi quỹ đạo giá nâng cao.",
        },
        {
          q: "Trendline với thanh khoản?",
          a: "Stop thường nằm dưới đường. Sweep trendline có thể là bẫy; chờ xác nhận sau sweep.",
        },
        {
          q: "Khi nào không nên tin trendline?",
          a: "Khi cấu trúc HTF mâu thuẫn, hoặc thị trường biến động bởi tin mạnh. Ưu tiên vùng và cấu trúc.",
        },
        {
          q: "Error tolerance khi vẽ trendline?",
          a: "Cho phép sai số nhỏ; coi trendline như vùng thay vì đường tuyệt đối.",
        },
        {
          q: "Combine trendline với OB/FVG?",
          a: "Điểm giao cắt trendline và OB/FVG tăng confluence, là nơi nên quan sát entry.",
        },
        {
          q: "Quản lý lệnh dựa trên trendline?",
          a: "Dời SL theo swing, chốt từng phần khi chạm cạnh kênh, giữ khi có breakout hợp lệ.",
        },
        {
          q: "Ví dụ setup với trendline?",
          a: "Xu hướng tăng, giá pullback chạm trendline, xuất hiện Pin Bar, vào lệnh buy với SL dưới swing, TP tại đỉnh cũ.",
        },
        {
          q: "Checklist trendline?",
          a: "Điểm chạm hợp lệ, HTF xu hướng, confluence, tín hiệu xác nhận, invalidation, RR.",
        },
      ],
      5: [
        {
          q: "Fibonacci Retracement là gì? Các mức phổ biến?",
          a: "Fibonacci Retracement đo mức hồi quy, các mức phổ biến 0.382, 0.5, 0.618. 0.618 thường là mức hồi sâu quan trọng.",
        },
        {
          q: "Fibonacci Extension dùng để làm gì?",
          a: "Extension dự đoán mục tiêu mở rộng xu hướng. Các mức 1.272, 1.618 hay dùng để đặt TP.",
        },
        {
          q: "Cách lựa chọn swing để vẽ Fibonacci?",
          a: "Chọn swing rõ ràng theo xu hướng hiện tại. Tránh vẽ trên dao động nhiễu không đại diện.",
        },
        {
          q: "Kết hợp Fibo với S/R ra sao?",
          a: "Vùng trùng nhau giữa Fibo và S/R tăng xác suất. Ưu tiên entry tại 0.5–0.618 nếu có confluence.",
        },
        {
          q: "Hồi nông vs hồi sâu, chiến lược nào phù hợp?",
          a: "Hồi nông: tiếp diễn mạnh, có thể entry breakout/pullback; hồi sâu: chờ tín hiệu rõ ràng tại 0.618/OB.",
        },
        {
          q: "AB=CD và mối liên hệ với Fibo?",
          a: "AB=CD là mô hình đối xứng, dùng tỷ lệ Fibonacci để xác nhận điểm D. Hợp lưu với S/R tăng độ tin cậy.",
        },
        {
          q: "Harmonic Patterns sử dụng Fibonacci như thế nào?",
          a: "Các mẫu như Gartley, Bat, Crab dùng tỷ lệ Fibo cụ thể cho từng đoạn để xác nhận mẫu hình.",
        },
        {
          q: "Fibo trong xu hướng mạnh có đáng tin?",
          a: "Trong xu hướng rất mạnh, hồi có thể nông hơn mức chuẩn. Dựa thêm cấu trúc và momentum để đánh giá.",
        },
        {
          q: "Sai lầm khi dùng Fibo?",
          a: "Vẽ tùy tiện, không theo swing hợp lệ, vào lệnh chỉ vì một mức Fibo mà không có confluence.",
        },
        {
          q: "Kết hợp Fibo với mô hình nến?",
          a: "Tại mức 0.5/0.618, tìm tín hiệu nến đảo chiều xác nhận entry. SL sau invalidation.",
        },
        {
          q: "Fibo và thanh khoản?",
          a: "Các mức Fibo thường gần vùng stop. Sweep quanh mức rồi đảo chiều là cơ hội vào lệnh tốt.",
        },
        {
          q: "Mục tiêu TP bằng Extension",
          a: "Dùng 1.272, 1.618, đôi khi 2.0 làm mục tiêu. Chốt từng phần tại các mốc.",
        },
        {
          q: "Fibo với đa khung thời gian?",
          a: "Vẽ trên HTF để tìm vùng mạnh; vào lệnh trên LTF khi có xác nhận phù hợp.",
        },
        {
          q: "Khi nào bỏ qua Fibo?",
          a: "Khi swing không rõ, bối cảnh hỗn loạn, hoặc tin tức sắp phát hành.",
        },
        {
          q: "Ví dụ setup với Fibo 0.618?",
          a: "Xu hướng tăng, giá hồi về 0.618 vùng confluence, xuất hiện Engulfing, vào buy, SL dưới đáy, TP 1.272.",
        },
        {
          q: "Tối ưu RR nhờ Fibo?",
          a: "Entry tại mức sâu giúp SL ngắn, TP theo extension cho RR cao hơn.",
        },
        {
          q: "Dùng Fibo cho quản lý lệnh?",
          a: "Dời SL khi vượt các mức, chốt từng phần tại extension, giữ phần còn lại theo trend.",
        },
        {
          q: "Backtest Fibo?",
          a: "Kiểm tra hiệu quả mức trên thị trường mục tiêu, thống kê tỷ lệ thành công theo bối cảnh.",
        },
        {
          q: "Checklist Fibo?",
          a: "Swing chuẩn, confluence, tín hiệu xác nhận, invalidation, RR, kế hoạch TP.",
        },
        {
          q: "Hạn chế của Fibo?",
          a: "Chỉ là công cụ hỗ trợ; cần kết hợp cấu trúc, vùng và nến để tăng xác suất.",
        },
      ],
      6: [
        {
          q: "RSI là gì? Thang đo và ngưỡng cơ bản?",
          a: "RSI là chỉ báo động lượng dao động từ 0–100. Ngưỡng thường dùng: quá mua >70, quá bán <30, tùy thị trường có thể điều chỉnh.",
        },
        {
          q: "Phân kỳ RSI Regular vs Hidden?",
          a: "Regular Divergence báo hiệu đảo chiều; Hidden Divergence thể hiện tiếp diễn xu hướng. Quan sát tại vùng S/R để giao dịch.",
        },
        {
          q: "RSI Range Shift có ý nghĩa gì?",
          a: "Trong xu hướng tăng, RSI thường dao động 40–80; trong xu hướng giảm 20–60. Range shift xác nhận thay đổi cấu trúc.",
        },
        {
          q: "RSI và tín hiệu breakout?",
          a: "RSI vượt ngưỡng và giữ trên/dưới cho thấy momentum mạnh, hỗ trợ tín hiệu breakout hợp lệ.",
        },
        {
          q: "Sai lầm phổ biến khi dùng RSI?",
          a: "Vào lệnh chỉ vì quá mua/quá bán, bỏ qua xu hướng và bối cảnh. Cần kết hợp cấu trúc để tránh bắt dao.",
        },
        {
          q: "Kết hợp RSI với Price Action?",
          a: "Dùng RSI để xác nhận tại vùng, tìm phân kỳ tại OB/FVG, vào lệnh khi nến xác nhận xuất hiện.",
        },
        {
          q: "RSI đa khung thời gian?",
          a: "Xác minh phân kỳ trên HTF, vào lệnh trên LTF. HTF phân kỳ mạnh đáng tin hơn.",
        },
        {
          q: "Cài đặt RSI phù hợp thị trường?",
          a: "Chu kỳ 14 là phổ biến, nhưng có thể tinh chỉnh theo sản phẩm. Tránh tối ưu quá mức.",
        },
        {
          q: "RSI và thanh khoản?",
          a: "Phân kỳ sau sweep thanh khoản ở vùng quan trọng là tín hiệu mạnh cho đảo chiều.",
        },
        {
          q: "RSI kết hợp S/R?",
          a: "Phân kỳ hoặc range shift tại vùng S/R tăng xác suất phản ứng. Dùng để xác nhận entry.",
        },
        {
          q: "RSI trong range?",
          a: "Trong range, quá mua/quá bán tại biên vùng có giá trị; trong trend mạnh, tín hiệu này dễ gây sai lệch.",
        },
        {
          q: "RSI và quản lý lệnh?",
          a: "Chốt từng phần khi RSI vào vùng cực trị; giữ lệnh nếu cấu trúc chưa bị vô hiệu.",
        },
        {
          q: "RSI và lọc nhiễu?",
          a: "Kết hợp với HTF cấu trúc, chỉ vào lệnh khi có nến xác nhận để giảm false-signal.",
        },
        {
          q: "RSI cảnh báo đảo chiều sớm?",
          a: "Phân kỳ xuất hiện sớm nhưng cần xác nhận bằng cấu trúc trước khi vào lệnh.",
        },
        {
          q: "Ví dụ setup với RSI phân kỳ?",
          a: "Giá tạo LL mới nhưng RSI tạo HL tại vùng cầu HTF, xuất hiện Engulfing, vào buy với SL dưới đáy.",
        },
        {
          q: "Checklist RSI?",
          a: "Bối cảnh, xu hướng HTF, phân kỳ, confluence, nến xác nhận, invalidation, RR.",
        },
        {
          q: "Điều chỉnh ngưỡng RSI theo sản phẩm?",
          a: "Sản phẩm biến động mạnh có thể dùng ngưỡng 80/20; sản phẩm ít biến động dùng 70/30.",
        },
        {
          q: "RSI với thời điểm tin tức?",
          a: "Tránh giao dịch tín hiệu RSI ngay trước tin; chờ ổn định rồi đánh theo cấu trúc.",
        },
        {
          q: "Hạn chế của RSI?",
          a: "RSI là chỉ báo trễ, không phản ánh nguyên nhân. Cần Price Action để đọc ý đồ dòng tiền.",
        },
        {
          q: "Backtest RSI hiệu quả?",
          a: "Thống kê phân kỳ tại vùng HTF, tỉ lệ thành công theo ngưỡng, tối ưu quy tắc vào/thoát lệnh.",
        },
      ],
      7: [
        {
          q: "MACD là gì? Thành phần chỉ báo?",
          a: "MACD gồm đường MACD, Signal và Histogram, đo chênh lệch giữa hai EMA để phản ánh momentum và tín hiệu giao cắt.",
        },
        {
          q: "Tín hiệu giao cắt MACD/Signal?",
          a: "MACD cắt lên Signal báo hiệu tăng; cắt xuống báo hiệu giảm. Tín hiệu mạnh hơn khi xảy ra trên/dưới zero line phù hợp xu hướng.",
        },
        {
          q: "Zero line có ý nghĩa gì?",
          a: "Trên zero line cho thấy momentum tăng; dưới zero line là momentum giảm. Vượt zero line xác nhận chuyển pha.",
        },
        {
          q: "MACD Histogram đọc như thế nào?",
          a: "Histogram thể hiện độ mạnh momentum. Mở rộng tăng cho thấy lực mạnh; co hẹp cảnh báo suy yếu và khả năng đảo chiều.",
        },
        {
          q: "Phân kỳ MACD và ứng dụng?",
          a: "Phân kỳ giữa giá và MACD báo hiệu đảo chiều hoặc điều chỉnh. Kết hợp với vùng và mô hình nến để xác nhận.",
        },
        {
          q: "Cài đặt MACD phù hợp?",
          a: "Thiết lập mặc định 12-26-9 là phổ biến; có thể điều chỉnh theo sản phẩm nhưng tránh tối ưu quá mức.",
        },
        {
          q: "MACD trong xu hướng mạnh?",
          a: "Trong trend mạnh, tín hiệu giao cắt ngược dễ gây nhiễu. Ưu tiên tín hiệu đồng pha trend.",
        },
        {
          q: "MACD đa khung thời gian?",
          a: "Xác nhận momentum trên HTF, vào lệnh trên LTF. Tín hiệu HTF có trọng lượng lớn hơn.",
        },
        {
          q: "MACD và breakout?",
          a: "Histogram mở rộng cùng phá vỡ vùng cho thấy breakout có chất lượng cao hơn.",
        },
        {
          q: "Sai lầm phổ biến khi dùng MACD?",
          a: "Vào lệnh chỉ theo giao cắt, bỏ qua bối cảnh; không xác định invalidation rõ ràng.",
        },
        {
          q: "Kết hợp MACD với Price Action?",
          a: "Dùng MACD để xác nhận momentum tại OB/FVG sau BOS; vào lệnh khi có nến quyết định.",
        },
        {
          q: "MACD và thanh khoản?",
          a: "Sau sweep thanh khoản, MACD đảo ngưỡng và Histogram mở rộng là tín hiệu mạnh cho đảo chiều.",
        },
        {
          q: "Quản lý lệnh với MACD?",
          a: "Chốt từng phần khi Histogram suy yếu; giữ lệnh khi cấu trúc còn đồng pha.",
        },
        {
          q: "Ví dụ setup với MACD?",
          a: "Giá phá đỉnh, MACD trên zero, Histogram mở rộng, retest vùng, vào buy cùng xu hướng.",
        },
        {
          q: "Checklist MACD?",
          a: "Xu hướng HTF, zero line, histogram, phân kỳ, confluence, tín hiệu xác nhận, invalidation.",
        },
        {
          q: "MACD trong range?",
          a: "Trong range, giao cắt thường nhiễu. Ưu tiên S/R và chờ breakout rõ.",
        },
        {
          q: "Tối ưu RR với MACD?",
          a: "Vào tại retest khi Histogram bắt đầu mở rộng để giữ SL ngắn và TP theo cấu trúc.",
        },
        {
          q: "Backtest MACD?",
          a: "Thống kê hiệu quả tín hiệu theo xu hướng, zero line và vị trí xuất hiện.",
        },
        {
          q: "Hạn chế của MACD?",
          a: "Là chỉ báo trễ, không cho biết nguyên nhân. Cần xác nhận bằng Price Action.",
        },
        {
          q: "Khi nào bỏ qua tín hiệu MACD?",
          a: "Khi mâu thuẫn với HTF hoặc ngay trước tin lớn. Ưu tiên cấu trúc và vùng.",
        },
      ],
      8: [
        {
          q: "Price Action là gì? Nguyên lý cốt lõi trên Gold?",
          a: "Đọc hành động giá trên Gold dựa vùng cung cầu, thanh khoản và cấu trúc đa khung. Gold thường có tin mạnh nên cần lọc tín hiệu.",
        },
        {
          q: "Cấu trúc Uptrend/Downtrend trên Gold?",
          a: "HH/HL cho tăng; LH/LL cho giảm. Kết hợp với tin vĩ mô để tránh nhiễu khi cấu trúc thay đổi nhanh.",
        },
        {
          q: "BOS/CHoCH trên Gold dùng như thế nào?",
          a: "BOS xác nhận tiếp diễn; CHoCH cảnh báo chuyển pha. Ưu tiên kiểm tra HTF để tránh false break.",
        },
        {
          q: "Vùng cung cầu Gold đặc trưng?",
          a: "Vùng gần mốc tâm lý 1900/2000 thường là S/R mạnh. Quan sát OB và FVG quanh mốc này.",
        },
        {
          q: "FVG trên Gold có ý nghĩa?",
          a: "Gold hay tạo FVG sau tin. Chờ lấp một phần rồi tìm tín hiệu theo hướng chủ đạo.",
        },
        {
          q: "Thanh khoản trên Gold hoạt động ra sao?",
          a: "Pool stop quanh các mốc tròn dễ bị sweep. Vào lệnh sau sweep và xác nhận tại OB.",
        },
        {
          q: "Entry phù hợp với Gold?",
          a: "Retest OB sau BOS với nến quyết định. Tránh vào giữa vùng ngay sau tin.",
        },
        {
          q: "Quản trị rủi ro trên Gold?",
          a: "SL cần rộng hơn một chút do biến động cao; RR vẫn tối thiểu 1:2, ưu tiên chốt từng phần.",
        },
        {
          q: "Khung thời gian đề xuất?",
          a: "HTF H4/D1 cho vùng; LTF M15/M5 cho entry. Tránh M1 quá nhiễu.",
        },
        {
          q: "Invalidation trên Gold?",
          a: "Qua đáy/đỉnh cấu trúc HTF. Không dời SL vô nguyên tắc khi biến động lớn.",
        },
        {
          q: "Nến quyết định và do dự trên Gold?",
          a: "Nến dài sau tin là quyết định; cần retest để vào an toàn. Nến do dự ngay sau tin dễ nhiễu.",
        },
        {
          q: "Liquidity Sweep ở mốc tròn?",
          a: "Sweep quanh 1950/2000 thường xuất hiện. Chờ đảo chiều xác nhận rồi vào theo bối cảnh.",
        },
        {
          q: "Imbalance và Rebalancing trên Gold?",
          a: "Sau tin, giá thường re-balance nhanh. Không đuổi giá; chờ hồi để tối ưu RR.",
        },
        {
          q: "Chọn vùng giao dịch trên Gold?",
          a: "Ưu tiên vùng confluence quanh mốc tâm lý, OB/FVG và S/R HTF.",
        },
        {
          q: "Tiếp diễn vs đảo chiều trên Gold?",
          a: "Tiếp diễn khi BOS và momentum giữ; đảo chiều khi CHoCH và sweep mạnh. Xác nhận đa khung.",
        },
        {
          q: "Quản lý lệnh khi Gold nhiễu?",
          a: "Giữ kỷ luật, giảm khối lượng khi trước tin; ưu tiên setup rõ ràng.",
        },
        {
          q: "Kết hợp Price Action với tin vĩ mô?",
          a: "Theo dõi lịch kinh tế; tránh vào ngay trước tin, đánh theo phản ứng sau tin.",
        },
        {
          q: "Sai lầm phổ biến với Gold?",
          a: "Overtrade, bỏ qua tin, không tuân SL, vào lệnh giữa vùng.",
        },
        {
          q: "Ví dụ setup với Gold?",
          a: "BOS lên H4, retest OB M15, xuất hiện Engulfing, buy với SL dưới swing, TP vùng 1.618 extension.",
        },
        {
          q: "Checklist Price Action trên Gold?",
          a: "Xu hướng HTF, vùng confluence, tín hiệu xác nhận, invalidation, RR, tin tức.",
        },
      ],
      9: [
        {
          q: "Engulfing trên Gold đáng tin ở đâu?",
          a: "Tại mốc tâm lý và vùng S/R HTF. Engulfing sau tin mạnh cần retest để vào an toàn.",
        },
        {
          q: "Pin Bar trên Gold cho biết gì?",
          a: "Từ chối giá mạnh tại vùng cầu/cung. Kết hợp HTF để tránh nhiễu.",
        },
        {
          q: "Doji trên Gold nên xử lý thế nào?",
          a: "Doji sau biến động tin thể hiện giằng co; chờ nến xác nhận trước khi vào.",
        },
        {
          q: "Morning/Evening Star trên Gold?",
          a: "Cụm ba nến tại vùng mạnh báo hiệu đảo chiều đáng tin hơn khi khối lượng ủng hộ.",
        },
        {
          q: "Harami trên Gold?",
          a: "Harami cho thấy do dự; cần nến xác nhận hướng sau đó để vào lệnh.",
        },
        {
          q: "Tweezer với mốc tròn 2000?",
          a: "Tweezer tại 2000 báo hiệu từ chối mạnh. Quan sát xác nhận trên LTF.",
        },
        {
          q: "Marubozu sau tin NFP?",
          a: "Marubozu thể hiện momentum mạnh; chờ retest để vào theo hướng chính.",
        },
        {
          q: "Three Soldiers/Crows trên Gold?",
          a: "Ba nến liên tiếp thể hiện đảo chiều mạnh. Tránh đuổi giá; chờ pullback.",
        },
        {
          q: "Inside Bar sau tin CPI?",
          a: "Inside Bar phản ánh tích lũy. Trade breakout theo xu hướng chính sau tin.",
        },
        {
          q: "Outside Bar trên Gold?",
          a: "Biên độ rộng phản ánh biến động. Cần bối cảnh rõ để tránh false-signal.",
        },
        {
          q: "Belt Hold trong phiên Mỹ?",
          a: "Nến mở cửa tại cực trị và chạy một hướng mạnh. Theo xu hướng, dùng làm tín hiệu tiếp diễn.",
        },
        {
          q: "Heikin Ashi trên Gold?",
          a: "Làm mượt xu hướng; kết hợp mô hình nến chuẩn để lọc nhiễu.",
        },
        {
          q: "Mô hình nến và khối lượng trên Gold?",
          a: "Khối lượng tăng xác nhận tín hiệu; khối lượng thấp cảnh báo bẫy.",
        },
        {
          q: "Xác nhận mô hình nến trên Gold?",
          a: "Vị trí, nến xác nhận, HTF, khối lượng. Không trade mô hình đơn lẻ.",
        },
        {
          q: "Sai lầm khi trade nến trên Gold?",
          a: "Bỏ qua mốc tâm lý, tin tức, không có invalidation rõ.",
        },
        {
          q: "Range vs Trend trên Gold?",
          a: "Trong range, nến đảo chiều ở biên vùng hiệu quả; trong trend, nến theo hướng tại pullback tốt hơn.",
        },
        {
          q: "Khi nào bỏ qua mô hình nến trên Gold?",
          a: "Ngay trước tin lớn hoặc giữa vùng không rõ ràng.",
        },
        {
          q: "Kết hợp mô hình nến với OB/FVG trên Gold?",
          a: "Mô hình tại rìa OB sau khi lấp FVG là tín hiệu tốt.",
        },
        {
          q: "Đặt SL/TP khi trade nến trên Gold?",
          a: "SL sau điểm vô hiệu; TP tại vùng kế tiếp hoặc extension.",
        },
        {
          q: "Checklist mô hình nến trên Gold?",
          a: "Vị trí, confluence, nến xác nhận, invalidation, RR, tin tức.",
        },
      ],
      10: [
        {
          q: "Quản lý rủi ro là gì trong giao dịch?",
          a: "Là hệ thống quy tắc để bảo toàn vốn, kiểm soát thua lỗ và tối ưu lợi nhuận với rủi ro chấp nhận được.",
        },
        {
          q: "Vì sao quản lý rủi ro quan trọng hơn tín hiệu?",
          a: "Tín hiệu tốt vẫn có xác suất thua. Quản lý rủi ro đảm bảo bạn sống sót đủ lâu để tận dụng lợi thế thống kê.",
        },
        {
          q: "Max risk per trade nên là bao nhiêu?",
          a: "Thường 0.5–2% tùy phong cách và biến động sản phẩm. Người mới nên giữ 1% hoặc thấp hơn.",
        },
        {
          q: "Position sizing tính như thế nào?",
          a: "Khối lượng = (Risk per trade × Equity) / (Stop distance). Giúp chuẩn hóa rủi ro mỗi lệnh.",
        },
        {
          q: "Risk of ruin là gì?",
          a: "Xác suất phá sản dựa trên winrate và RR. Giảm risk per trade và tăng RR để hạ risk of ruin.",
        },
        {
          q: "Portfolio-level risk quản lý ra sao?",
          a: "Giới hạn tổng rủi ro mở cùng lúc; tránh tương quan cao giữa các vị thế để không cộng dồn rủi ro.",
        },
        {
          q: "Drawdown xử lý thế nào?",
          a: "Giảm khối lượng khi drawdown vượt ngưỡng; tạm ngưng giao dịch để đánh giá hệ thống.",
        },
        {
          q: "RR tối thiểu nên là bao nhiêu?",
          a: "Tối thiểu 1:2 giúp có lợi thế kể cả winrate trung bình. Hệ thống tốt hướng đến RR trung bình ≥1:2.",
        },
        {
          q: "Dời SL có nên không?",
          a: "Chỉ dời SL theo cấu trúc khách quan. Tránh dời SL rộng hơn khi lệnh đi ngược; đó là lỗi kỷ luật.",
        },
        {
          q: "Partial take-profit có lợi gì?",
          a: "Giúp khóa lợi nhuận và giảm áp lực tâm lý, đồng thời vẫn giữ phần lệnh nếu xu hướng tiếp diễn.",
        },
        {
          q: "Khi nào nên tăng khối lượng?",
          a: "Khi hệ thống ổn định, drawdown thấp, bạn có dữ liệu đủ lớn. Tăng theo bước nhỏ để tránh đột biến rủi ro.",
        },
        {
          q: "Stop-out nên đặt ở đâu?",
          a: "Tại điểm invalidation của luận đề giao dịch, không đặt tùy tiện theo số pip cố định.",
        },
        {
          q: "Risk budgeting là gì?",
          a: "Phân bổ rủi ro theo ngày/tuần/tháng. Hết ngân sách rủi ro thì dừng, tránh tâm lý gỡ lỗ.",
        },
        {
          q: "Khi nào không nên giao dịch?",
          a: "Khi biến động bất thường trước tin lớn, khi cảm xúc mất kiểm soát, hoặc khi hệ thống mâu thuẫn trên HTF.",
        },
        {
          q: "Scaling in/out quản trị rủi ro thế nào?",
          a: "Scale-in chỉ khi xác suất tăng lên; scale-out để giảm rủi ro khi giá tiến đến vùng mục tiêu.",
        },
        {
          q: "Mean reversion vs trend following rủi ro khác nhau?",
          a: "Mean reversion dễ bị đuối trong xu hướng mạnh; trend following chịu nhiều whipsaw trong range. Điều chỉnh risk theo thị trường.",
        },
        {
          q: "Khi nào dùng trailing stop?",
          a: "Khi muốn bảo toàn lợi nhuận theo xu hướng dài. Tránh trailing quá chặt gây stop sớm.",
        },
        {
          q: "Hedging có phù hợp day trader?",
          a: "Hedging phức tạp và tốn phí. Day trader thường dùng SL rõ ràng thay vì hedging.",
        },
        {
          q: "Tối ưu thuế phí vào quản lý rủi ro?",
          a: "Phí giao dịch ảnh hưởng kỳ vọng lợi nhuận; giảm overtrade, chọn sản phẩm phí thấp, tối ưu RR.",
        },
        {
          q: "Checklist quản lý rủi ro?",
          a: "Risk per trade, sizing, invalidation, RR, tổng rủi ro mở, ngân sách rủi ro, kế hoạch drawdown.",
        },
      ],
      11: [
        {
          q: "Tâm lý giao dịch ảnh hưởng thế nào đến kết quả?",
          a: "Cảm xúc chi phối quyết định. Không kỷ luật sẽ phá hủy lợi thế của hệ thống, dẫn đến overtrade và gỡ lỗ.",
        },
        {
          q: "FOMO là gì và cách tránh?",
          a: "Fear Of Missing Out: sợ bỏ lỡ cơ hội. Tránh bằng kế hoạch rõ ràng, chỉ giao dịch khi điều kiện hệ thống thỏa mãn.",
        },
        {
          q: "Overconfidence gây hại như thế nào?",
          a: "Sau chuỗi thắng, trader tự tin quá mức, tăng khối lượng vô kỷ luật, dễ dẫn đến drawdown lớn.",
        },
        {
          q: "Loss aversion và hệ quả?",
          a: "Ác cảm thua lỗ khiến giữ lệnh thua quá lâu, chốt lời sớm lệnh thắng. Cần tuân SL và để lợi nhuận chạy.",
        },
        {
          q: "Kỷ luật là gì trong trading?",
          a: "Là tuân thủ hệ thống và kế hoạch bất kể cảm xúc. Kỷ luật biến lợi thế thống kê thành kết quả thực tế.",
        },
        {
          q: "Nhật ký giao dịch có vai trò gì?",
          a: "Giúp phản hồi khách quan, nhận diện lỗi tâm lý và cải thiện hành vi qua dữ liệu.",
        },
        {
          q: "Stress quản lý như thế nào?",
          a: "Giảm khối lượng, nghỉ ngơi, tập luyện, không giao dịch khi mệt mỏi. Sức khỏe tinh thần là nền tảng.",
        },
        {
          q: "Kỳ vọng thực tế trong trading?",
          a: "Lợi nhuận ổn định, tăng trưởng vừa phải. Tránh mong ước làm giàu nhanh dẫn đến rủi ro quá mức.",
        },
        {
          q: "Sợ bỏ lỡ vs sợ thua lỗ cân bằng ra sao?",
          a: "Ưu tiên tuân hệ thống hơn cảm xúc; cơ hội luôn có, vốn một khi mất khó lấy lại.",
        },
        {
          q: "Cách đối mặt chuỗi thua?",
          a: "Giảm risk, dừng giao dịch tạm thời, xem lại dữ liệu, chỉ trở lại khi tâm lý ổn định.",
        },
        {
          q: "Nhận diện revenge trade?",
          a: "Vào lệnh vô kỷ luật sau thua lỗ để gỡ. Dừng ngay; quay lại kế hoạch sau khi bình tĩnh.",
        },
        {
          q: "Mindset vào lệnh đúng đắn?",
          a: "Tư duy xác suất, kỳ vọng dài hạn, chấp nhận thua lỗ bình thường, tập trung vào quy trình.",
        },
        {
          q: "Sự kiên nhẫn có vai trò gì?",
          a: "Kiên nhẫn chờ setup chuẩn tăng chất lượng lệnh, giảm phí, tăng RR trung bình.",
        },
        {
          q: "Khi nào không nên nhìn chart?",
          a: "Khi đang cảm xúc mạnh, khi chưa có kế hoạch. Tránh tự tạo áp lực dẫn đến quyết định sai.",
        },
        {
          q: "Tự tin vs liều lĩnh khác nhau?",
          a: "Tự tin dựa dữ liệu và hệ thống; liều lĩnh bỏ qua rủi ro và kỷ luật.",
        },
        {
          q: "Tư duy kiểm soát rủi ro trong tâm lý?",
          a: "Chấp nhận không kiểm soát được thị trường, chỉ kiểm soát được risk, sizing và hành vi.",
        },
        {
          q: "Thiết lập thói quen tốt cho trader?",
          a: "Ngủ đủ, vận động, thiền, ghi chép, ôn hệ thống, chuẩn bị trước phiên.",
        },
        {
          q: "Ảnh hưởng xã hội và tin đồn?",
          a: "Tránh bị dẫn dắt bởi mạng xã hội. Bám sát hệ thống, lọc thông tin.",
        },
        {
          q: "Khi nào nên nghỉ dài ngày?",
          a: "Khi cảm xúc cạn kiệt, drawdown lớn, hoặc biến cố cá nhân. Bảo vệ vốn và sức khỏe.",
        },
        {
          q: "Checklist tâm lý giao dịch?",
          a: "Trạng thái tâm lý, kỷ luật, nhật ký, kỳ vọng, nghỉ ngơi, tuân hệ thống.",
        },
      ],
      12: [
        {
          q: "Tin tức vĩ mô ảnh hưởng thế nào đến thị trường?",
          a: "Tin vĩ mô tác động đến lãi suất, tăng trưởng, lạm phát, làm thay đổi dòng tiền và khẩu vị rủi ro.",
        },
        {
          q: "Các sự kiện vĩ mô quan trọng cần theo dõi?",
          a: "CPI, PPI, NFP, GDP, lãi suất, Fed minutes, PMI, doanh số bán lẻ, cán cân thương mại.",
        },
        {
          q: "CPI và lạm phát ảnh hưởng tới vàng/crypto?",
          a: "CPI cao → lãi suất tăng → USD mạnh, vàng chịu áp lực; Crypto nhạy cảm thanh khoản, biến động lớn.",
        },
        {
          q: "NFP tác động ra sao?",
          a: "Số liệu việc làm ảnh hưởng kỳ vọng lãi suất, tăng biến động mạnh ngay sau công bố.",
        },
        {
          q: "Fed Rate Decision ảnh hưởng thế nào?",
          a: "Thay đổi lãi suất điều hướng dòng tiền toàn cầu, tác động rộng tới tất cả tài sản.",
        },
        {
          q: "Dot Plot và forward guidance?",
          a: "Cho thấy kỳ vọng lãi suất tương lai, hướng dẫn thị trường về chính sách dự kiến.",
        },
        {
          q: "PMI có ý nghĩa gì?",
          a: "Phản ánh sức khỏe sản xuất/dịch vụ; PMI cao cho thấy nền kinh tế khỏe, tác động đến kỳ vọng lãi suất.",
        },
        {
          q: "Lịch kinh tế dùng thế nào?",
          a: "Đánh dấu thời điểm công bố, tránh giao dịch trước tin, chuẩn bị kịch bản phản ứng sau tin.",
        },
        {
          q: "Cách giao dịch quanh tin lớn?",
          a: "Tránh vào trước tin; chờ phản ứng đầu tiên, giao dịch retest theo hướng chủ đạo với SL rõ ràng.",
        },
        {
          q: "Tin bất ngờ xử lý ra sao?",
          a: "Giảm khối lượng, chờ ổn định, đánh theo cấu trúc mới; không gỡ lỗ bốc đồng.",
        },
        {
          q: "Carry trade và lãi suất ảnh hưởng thị trường?",
          a: "Chênh lệch lãi suất tạo dòng tiền carry; thay đổi lãi suất làm dịch chuyển vị thế.",
        },
        {
          q: "Tác động địa chính trị?",
          a: "Căng thẳng làm tăng nhu cầu trú ẩn, vàng hưởng lợi; thị trường rủi ro biến động mạnh.",
        },
        {
          q: "Dòng tiền và thanh khoản vĩ mô?",
          a: "Thanh khoản cao hỗ trợ tài sản rủi ro; thắt chặt làm tài sản này chịu áp lực.",
        },
        {
          q: "Khi nào bỏ qua tin vĩ mô?",
          a: "Tin nhỏ không ảnh hưởng chính sách; tập trung vào kỹ thuật nếu không có sự kiện lớn.",
        },
        {
          q: "Macro regime thay đổi đọc ra sao?",
          a: "Theo dõi lạm phát, tăng trưởng, chính sách. Regime thay đổi khi chuỗi dữ liệu chuyển pha.",
        },
        {
          q: "Kết hợp vĩ mô với Price Action?",
          a: "Xác định hướng chủ đạo bởi vĩ mô, tìm entry bằng vùng và cấu trúc kỹ thuật.",
        },
        {
          q: "Sai lầm phổ biến với tin vĩ mô?",
          a: "Giao dịch ngay trước/đúng lúc công bố, không có SL, cố đoán số liệu.",
        },
        {
          q: "Chu kỳ kinh tế ảnh hưởng danh mục?",
          a: "Chu kỳ khác nhau ưu tiên tài sản khác nhau; điều chỉnh phân bổ theo regime.",
        },
        {
          q: "Backtest chiến lược quanh tin?",
          a: "Thống kê biến động sau tin, hiệu quả các setup retest, tối ưu thời gian vào lệnh.",
        },
        {
          q: "Checklist tin vĩ mô?",
          a: "Lịch kinh tế, kịch bản, quản lý rủi ro, xác nhận kỹ thuật, đánh giá phản ứng.",
        },
      ],
      13: [
        {
          q: "Quản lý rủi ro cho Gold có gì khác?",
          a: "Biến động cao và nhạy cảm tin; cần SL rộng hơn, giảm khối lượng trước/sau tin lớn.",
        },
        {
          q: "Risk per trade với Gold?",
          a: "Thường thấp hơn crypto nếu biến động lớn. Điều chỉnh theo ATR và bối cảnh.",
        },
        {
          q: "Position sizing cho Gold?",
          a: "Dựa trên khoảng SL theo pip và giá trị hợp đồng. Tính sizing chuẩn hóa rủi ro.",
        },
        {
          q: "Drawdown với Gold xử lý?",
          a: "Giảm khối lượng, hạn chế giao dịch trước phiên Mỹ khi tin dày, đánh giá lại hệ thống.",
        },
        {
          q: "RR tối ưu với Gold?",
          a: "Hướng đến 1:2 trở lên. Lấy TP theo vùng HTF và mốc thanh khoản.",
        },
        {
          q: "Scale-in/out trên Gold?",
          a: "Scale-out tại mốc tâm lý; scale-in chỉ khi có xác nhận thêm từ HTF.",
        },
        {
          q: "Trailing stop phù hợp?",
          a: "Theo swing H4/D1 để giữ xu hướng dài; tránh trailing quá chặt.",
        },
        {
          q: "Risk budgeting theo phiên?",
          a: "Phân bổ rủi ro theo phiên Á/Âu/Mỹ; phiên Mỹ biến động cao cần rủi ro thấp hơn.",
        },
        {
          q: "Stop-out cho Gold?",
          a: "Đặt sau invalidation HTF để tránh nhiễu. Không đặt SL quá gần mốc tròn.",
        },
        {
          q: "Hedging cho Gold?",
          a: "Phức tạp và tốn phí; ưu tiên SL rõ ràng và quản lý lệnh hơn hedging.",
        },
        {
          q: "Lãi suất ảnh hưởng Gold?",
          a: "Tăng lãi suất làm USD mạnh, Gold chịu áp lực; quản trị rủi ro chặt quanh kỳ họp Fed.",
        },
        {
          q: "ATR dùng cho Gold?",
          a: "Dùng ATR để ước lượng SL hợp lý theo biến động hiện tại.",
        },
        {
          q: "Overtrade với Gold tránh thế nào?",
          a: "Chỉ giao dịch vùng confluence HTF; tránh bắt đáy đỉnh liên tục tại mốc tâm lý.",
        },
        {
          q: "Quản lý cảm xúc với Gold?",
          a: "Biến động lớn dễ gây hoảng loạn. Giữ kỷ luật, giảm khối lượng khi không chắc bối cảnh.",
        },
        {
          q: "Partial TP ở mốc tròn?",
          a: "TP một phần tại 1900/1950/2000, giữ phần còn lại nếu xu hướng giữ.",
        },
        {
          q: "Checklist risk Gold?",
          a: "ATR, mốc tâm lý, lịch tin, invalidation HTF, sizing, RR.",
        },
        {
          q: "Khi nào dừng giao dịch Gold?",
          a: "Khi tin dày, cấu trúc mâu thuẫn, hoặc drawdown tăng. Bảo vệ vốn.",
        },
        {
          q: "Ảnh hưởng spread và phí?",
          a: "Phí cao ăn mòn lợi nhuận. Tránh scalping quá nhiều khi spread cao.",
        },
        {
          q: "Ví dụ quản trị lệnh Gold?",
          a: "Buy tại OB HTF, SL dưới swing, TP tại mốc tròn kế tiếp, scale-out dần.",
        },
        {
          q: "Kế hoạch risk dài hạn?",
          a: "Thiết lập ngân sách rủi ro tháng, điều chỉnh theo hiệu suất và biến động.",
        },
      ],
      14: [
        {
          q: "Tâm lý giao dịch Gold khác gì?",
          a: "Gold phản ứng mạnh với tin, dễ kích hoạt cảm xúc. Cần kỷ luật, chờ xác nhận.",
        },
        {
          q: "FOMO với Gold xử lý?",
          a: "Không đuổi giá sau tin; chờ retest và tín hiệu nến tại vùng.",
        },
        {
          q: "Overconfidence trên Gold?",
          a: "Sau chuỗi thắng dễ tăng khối lượng vô kỷ luật; giữ sizing chuẩn.",
        },
        {
          q: "Loss aversion với biến động Gold?",
          a: "Giữ lệnh thua lâu gây thiệt hại lớn. Tuân SL HTF.",
        },
        {
          q: "Tư duy xác suất với Gold?",
          a: "Chấp nhận nhiễu cao; tập trung RR và quản trị lệnh.",
        },
        {
          q: "Nhật ký giao dịch Gold?",
          a: "Ghi lại phản ứng sau tin, vùng hiệu quả, thời điểm tốt theo phiên.",
        },
        {
          q: "Quản lý stress khi vàng biến động?",
          a: "Giảm khối lượng, nghỉ phiên tin, ôn lại hệ thống.",
        },
        {
          q: "Kỳ vọng thực tế với Gold?",
          a: "Ưu tiên ổn định; tránh mục tiêu phi thực tế trong phiên tin.",
        },
        {
          q: "Revenge trade trên Gold?",
          a: "Dừng ngay khi có dấu hiệu; quay lại kế hoạch sau khi bình tĩnh.",
        },
        {
          q: "Kiên nhẫn trước mốc tròn?",
          a: "Chờ nến xác nhận tại mốc; tránh phá vỡ giả.",
        },
        {
          q: "Khi nào tránh nhìn chart vàng?",
          a: "Ngay trước công bố tin mạnh; sau chuỗi thua liên tiếp.",
        },
        {
          q: "Tự tin vs liều lĩnh trên Gold?",
          a: "Tự tin dựa HTF và vùng; liều lĩnh đuổi giá sau tin.",
        },
        {
          q: "Kiểm soát rủi ro trong tâm lý?",
          a: "Giữ sizing, tuân kế hoạch; không tăng rủi ro vô kỷ luật.",
        },
        {
          q: "Thói quen tốt cho trader Gold?",
          a: "Chuẩn bị lịch tin, vùng HTF, kế hoạch phiên, nghỉ ngơi đầy đủ.",
        },
        {
          q: "Ảnh hưởng tin đồn?",
          a: "Không chạy theo tin đồn; bám hệ thống và dữ liệu chuẩn.",
        },
        {
          q: "Khi nào nghỉ dài ngày với Gold?",
          a: "Khi cảm xúc bất ổn, drawdown lớn, thị trường nhiễu cao.",
        },
        {
          q: "Ví dụ tâm lý tốt với Gold?",
          a: "Bỏ qua setup kém, chỉ vào khi đủ confluence, không gỡ lỗ bốc đồng.",
        },
        {
          q: "Checklist tâm lý Gold?",
          a: "Kỷ luật, nhật ký, lịch tin, sizing, RR, trạng thái cảm xúc.",
        },
        {
          q: "Sai lầm phổ biến tâm lý với Gold?",
          a: "Đuổi giá, bắt đỉnh đáy, không tuân SL, overtrade.",
        },
        {
          q: "Xây dựng mindset dài hạn?",
          a: "Tập trung quy trình, thống kê, cải thiện dần; không tìm lệnh hoàn hảo.",
        },
      ],
      15: [
        {
          q: "Tin vĩ mô ảnh hưởng vàng thế nào?",
          a: "Vàng phản ứng với lãi suất, USD, lạm phát. Tin mạnh khiến biến động lớn và quét thanh khoản.",
        },
        {
          q: "CPI và vàng?",
          a: "CPI cao → lãi suất tăng → USD mạnh → vàng chịu áp lực; nhưng kỳ vọng lạm phát cao dài hạn hỗ trợ vàng.",
        },
        {
          q: "NFP với vàng?",
          a: "NFP tốt củng cố USD và chính sách thắt chặt, vàng giảm. Ngược lại vàng được hỗ trợ.",
        },
        {
          q: "Fed rate ảnh hưởng vàng?",
          a: "Tăng lãi suất làm chi phí cơ hội nắm giữ vàng tăng, thường gây giảm giá vàng.",
        },
        {
          q: "PMI và vàng?",
          a: "PMI mạnh củng cố tăng trưởng, hỗ trợ USD; vàng chịu áp lực. PMI yếu ngược lại.",
        },
        {
          q: "Lịch kinh tế cho vàng dùng thế nào?",
          a: "Đánh dấu các tin lớn, tránh vào trước tin; giao dịch retest theo hướng sau tin.",
        },
        {
          q: "Geopolitical risk và vàng?",
          a: "Rủi ro địa chính trị tăng nhu cầu trú ẩn, hỗ trợ vàng. Theo dõi tin để điều chỉnh chiến lược.",
        },
        {
          q: "USD Index ảnh hưởng vàng?",
          a: "USD mạnh thường khiến vàng giảm. Quan sát DXY để đánh giá bối cảnh.",
        },
        {
          q: "Lạm phát kỳ vọng và vàng?",
          a: "Kỳ vọng lạm phát tăng dài hạn hỗ trợ vàng dù lãi suất ngắn hạn tăng.",
        },
        {
          q: "Khi nào vàng phá mốc tâm lý sau tin?",
          a: "Khi có momentum lớn và xác nhận đa khung. Tránh đuổi giá; chờ retest.",
        },
        {
          q: "Macro regime với vàng?",
          a: "Regime thắt chặt tài chính gây áp lực; nới lỏng hỗ trợ vàng. Điều chỉnh chiến lược theo regime.",
        },
        {
          q: "Carry trade và vàng?",
          a: "Không áp dụng trực tiếp, nhưng dòng tiền carry ảnh hưởng USD và nhu cầu vàng.",
        },
        {
          q: "Tin bất ngờ và vàng xử lý?",
          a: "Giảm khối lượng, chờ ổn định, giao dịch theo cấu trúc mới.",
        },
        {
          q: "Backtest chiến lược theo tin với vàng?",
          a: "Thống kê hành vi vàng sau tin CPI/NFP, hiệu quả retest, tối ưu thời điểm vào.",
        },
        {
          q: "Sai lầm với tin vĩ mô và vàng?",
          a: "Giao dịch ngay lúc công bố, không SL, cố đoán kết quả, bỏ qua cấu trúc.",
        },
        {
          q: "Checklist vĩ mô cho vàng?",
          a: "Lịch tin, DXY, lãi suất, lạm phát, kịch bản, quản trị rủi ro.",
        },
        {
          q: "Kết hợp vĩ mô với Price Action cho vàng?",
          a: "Xác định hướng chủ đạo bởi vĩ mô, tìm entry tại vùng confluence kỹ thuật.",
        },
        {
          q: "Ví dụ setup vàng sau CPI?",
          a: "Sau CPI cao, vàng giảm mạnh, chờ retest vùng kháng cự mới, vào sell theo xu hướng.",
        },
        {
          q: "Tin vĩ mô và phiên giao dịch vàng?",
          a: "Phiên Mỹ thường là thời điểm công bố tin, biến động cao; điều chỉnh kế hoạch theo phiên.",
        },
        {
          q: "Xây dựng kế hoạch vĩ mô dài hạn cho vàng?",
          a: "Theo dõi chu kỳ, chính sách, lạm phát; điều chỉnh vị thế theo regime và vùng HTF.",
        },
      ],
    };
    const interviewRows = Object.entries(qaBySection).flatMap(
      ([sectionId, qaList]) =>
        qaList.map((item, i) => ({
          section_id: Number(sectionId),
          question: item.q,
          answer: item.a,
          level: levels[i % levels.length],
          created_at: now,
          updated_at: now,
        }))
    );
    await queryInterface.bulkInsert("interviews", interviewRows);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete("interviews", {});
    await queryInterface.bulkDelete("interview_sections", {});
    await queryInterface.bulkDelete("interview_topics", {});
  },
};
