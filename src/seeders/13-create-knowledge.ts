import { QueryInterface } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface) {
    const now = new Date();
    await queryInterface.bulkInsert("knowledge_articles", [
      {
        id: "price-action",
        topic: "METHODS",
        title: "Price Action",
        summary:
          "Phương pháp giao dịch dựa trên hành động giá để xác định xu hướng và vùng phản ứng quan trọng",
        content: `
  <h2>Price Action là gì?</h2>
  <p>
    Price Action (hành động giá) là phương pháp giao dịch dựa hoàn toàn vào sự biến động của giá
    trên biểu đồ mà không phụ thuộc vào các chỉ báo kỹ thuật như RSI, MACD hay Bollinger Bands.
    Trader sử dụng Price Action sẽ tập trung quan sát cách giá di chuyển, phản ứng tại các vùng
    quan trọng để đưa ra quyết định mua hoặc bán.
  </p>
  <p>
    Bản chất của Price Action xuất phát từ nguyên lý: mọi biến động giá đều phản ánh hành vi của
    các thành phần tham gia thị trường như người mua, người bán, tổ chức lớn và các nhà tạo lập thị trường.
    Các yếu tố kinh tế, chính trị, xã hội hay tin tức đều được phản ánh trực tiếp thông qua giá.
  </p>
  <img src="https://www.usim.edu.my/wp-content/uploads/2018/12/forex-market-time.jpeg" alt="Price Action" />
  <h2>Nguyên tắc cốt lõi của Price Action</h2>
  <p>
    Phương pháp Price Action cho rằng giá là yếu tố quan trọng nhất và chứa đựng mọi thông tin cần thiết.
    Thay vì cố gắng dự đoán tương lai bằng nhiều công cụ phức tạp, trader tập trung đọc hiểu
    hành vi của thị trường thông qua biểu đồ giá, mô hình nến và cấu trúc thị trường.
  </p>
  <h2> Các yếu tố quan trọng trong Price Action</h2>
  <h3>1. Cấu trúc thị trường (Market Structure)</h3>
  <p>
    Hiểu rõ cấu trúc thị trường là bước đầu tiên để xác định phe nào đang kiểm soát cuộc chơi. Thị trường chỉ di chuyển theo 3 trạng thái:
    <ul>
      <li>
       <strong>Xu hướng tăng (Uptrend):</strong> Giá liên tục tạo đỉnh sau cao hơn đỉnh trước (Higher High - <em>HH</em>) và đáy sau cao hơn đáy trước (Higher Low - <em>HL</em>).
       <br><em>Chiến lược:</em> Ưu tiên canh Buy tại các nhịp hồi (HL).
      </li>
      <li>
       <strong>Xu hướng giảm (Downtrend):</strong> Giá tạo đỉnh sau thấp hơn đỉnh trước (Lower High - <em>LH</em>) và đáy sau thấp hơn đáy trước (Lower Low - <em>LL</em>).
       <br><em>Chiến lược:</em> Ưu tiên canh Sell tại các đỉnh thấp hơn (LH).
      </li>
      <li>
       <strong>Đi ngang (Sideway/Range):</strong> Giá dao động trong một biên độ hẹp giữa hai vùng hỗ trợ và kháng cự, không tạo đỉnh/đáy mới rõ rệt.
      </li>
    </ul>
  </p>

 <h3>2. Hỗ trợ và Kháng cự (Support & Resistance)</h3>
  <p>
   Đây là các "vùng cản tâm lý" quan trọng nơi giá thường xuyên đảo chiều hoặc phản ứng mạnh.
    <ul>
      <li>
       <strong>Vùng Hỗ trợ (Support):</strong> Là vùng giá thấp nơi phe Mua (Buyers) đủ mạnh để ngăn giá giảm sâu hơn. Tại đây, nhu cầu (Demand) vượt quá nguồn cung (Supply).
      </li>
      <li>
       <strong>Vùng Kháng cự (Resistance):</strong> Là vùng giá cao nơi phe Bán (Sellers) áp đảo, ngăn giá tăng tiếp. Tại đây, nguồn cung (Supply) vượt quá nhu cầu (Demand).
      </li>
      <li>
       <strong>Lưu ý quan trọng (Role Reversal):</strong> Khi một vùng Hỗ trợ bị phá vỡ, nó thường trở thành Kháng cự mới (và ngược lại).
      </li>
    </ul>
  </p>

  <h3>3. Mô hình nến quan trọng trong Price Action</h3>
  <p>
  Một số mô hình nến thường được sử dụng:
    <ul>
      <li>
       <h3>1. Mô hình nến Pin Bar (Nến Pin Bar)</h3>
       <p>
         <strong>Pin Bar</strong> là mô hình nến đảo chiều mạnh mẽ, cho thấy sự từ chối giá quyết liệt tại các vùng quan trọng.
         Đây là một trong những tín hiệu Price Action đáng tin cậy nhất.
       </p>
       <p><strong>Đặc điểm nhận dạng:</strong></p>
       <ul>
         <li>Bóng nến (râu nến) rất dài, chiếm ít nhất 2/3 chiều dài cả nến.</li>
         <li>Thân nến nhỏ, nằm lệch hẳn về một phía (trên hoặc dưới).</li>
       </ul>
       <p><strong>Ý nghĩa giao dịch:</strong></p>
       <ul>
         <li><strong>Pin Bar đuôi dưới dài:</strong> Phe bán cố đẩy giá xuống nhưng phe mua phản công mạnh mẽ, đẩy giá đóng cửa lên cao → <em>Tín hiệu Mua (Bullish).</em></li>
         <li><strong>Pin Bar đuôi trên dài:</strong> Phe mua cố đẩy giá lên nhưng phe bán áp đảo, kéo giá xuống thấp → <em>Tín hiệu Bán (Bearish).</em></li>
       </ul>
       <p>
         <em>Lưu ý:</em> Pin Bar chỉ thực sự hiệu quả khi xuất hiện tại <strong>Vùng Hỗ trợ/Kháng cự (Support/Resistance)</strong> hoặc tại điểm hồi về (Pullback) trong một xu hướng rõ ràng.
       </p>
       <img src="https://cdn.dnse.com.vn/dnse-news/2022/08/dac-diem-cua-nen-pin-bar.jpg" alt="Mô hình nến Pin Bar đảo chiều trong Price Action" />
      </li>
      
      <li>
       <h3>2. Mô hình nến Inside Bar</h3>
       <p>
         <strong>Inside Bar</strong> là mô hình nến thể hiện sự do dự, tích lũy và nén giá của thị trường trước khi có biến động lớn.
       </p>
       <p><strong>Cấu tạo:</strong> Gồm một nến mẹ (Mother Bar) lớn bao trùm toàn bộ nến con (Inside Bar) phía sau.</p>
       <p><strong>Chiến lược giao dịch Breakout:</strong></p>
       <ul>
         <li><strong>Buy:</strong> Khi giá phá vỡ (breakout) lên trên đỉnh của nến mẹ.</li>
         <li><strong>Sell:</strong> Khi giá phá vỡ xuống dưới đáy của nến mẹ.</li>
       </ul>
       <p>
         <em>Mẹo:</em> Inside Bar hoạt động tốt nhất khi là mô hình <strong>tiếp diễn xu hướng</strong> (giá nghỉ ngơi trước khi chạy tiếp).
       </p>
       <img src="https://ftmo-frontend-prod.storage.googleapis.com/wp-content/uploads/2025/08/04115053/Insider-bar-1030x564-1.png" alt="Mô hình nến Inside Bar tiếp diễn xu hướng" />
      </li>

      <li>
       <h3>3. Mô hình nến Engulfing (Nến Nhấn Chìm)</h3>
       <p>
         <strong>Engulfing</strong> là mô hình nến đảo chiều mạnh, thể hiện sự thay đổi hoàn toàn quyền kiểm soát giữa phe mua và phe bán.
       </p>
       <p><strong>Các loại mô hình:</strong></p>
       <ul>
         <li><strong>Bullish Engulfing (Nhấn chìm tăng):</strong> Nến tăng sau bao trùm hoàn toàn nến giảm trước đó → <em>Dự báo giá tăng.</em></li>
         <li><strong>Bearish Engulfing (Nhấn chìm giảm):</strong> Nến giảm sau bao trùm hoàn toàn nến tăng trước đó → <em>Dự báo giá giảm.</em></li>
       </ul>
       <p>
         <em>Thời điểm vào lệnh:</em> Hiệu quả nhất khi xuất hiện tại các vùng đảo chiều quan trọng (đỉnh/đáy cũ) hoặc kết thúc một nhịp hồi.
       </p>
       <img src="https://stockinsight.hsc.com.vn/wp-content/uploads/Engulfing-img3.png" alt="Mô hình nến Engulfing đảo chiều xu hướng" />
      </li> 
    </ul>
  </p>

  <h2>Tại sao nên giao dịch theo Price Action? (Ưu điểm)</h2>
  <ul>
    <li>
      <strong>Đơn giản hóa biểu đồ (Minimalism):</strong> Loại bỏ sự lộn xộn của các chỉ báo kỹ thuật (Indicators), giúp Trader tập trung hoàn toàn vào hành vi giá thực tế và tâm lý thị trường.
    </li>
    <li>
      <strong>Tín hiệu dẫn dắt (Leading Indicator):</strong> Giá luôn chạy trước tin tức và chỉ báo. Price Action giúp bạn vào lệnh sớm hơn thay vì chờ đợi các chỉ báo có độ trễ (Lagging Indicators).
    </li>
    <li>
      <strong>Tư duy logic & Khách quan:</strong> Giúp hiểu rõ <em>tại sao</em> giá di chuyển (do phe mua hay phe bán đang kiểm soát) thay vì giao dịch máy móc theo công thức rập khuôn.
    </li>
    <li>
      <strong>Quản lý rủi ro hiệu quả:</strong> Dễ dàng xác định chính xác các điểm vào lệnh (Entry), cắt lỗ (Stop Loss) và chốt lời (Take Profit) dựa trên các vùng cản thực tế.
    </li>
  </ul>

  <h2>Những hạn chế cần lưu ý khi dùng Price Action</h2>
  <ul>
    <li>
      <strong>Yếu tố chủ quan:</strong> Cùng một biểu đồ, hai Trader có thể nhìn ra hai kịch bản khác nhau (Bullish hoặc Bearish) tùy thuộc vào kinh nghiệm và góc nhìn cá nhân.
    </li>
    <li>
      <strong>Cần thời gian rèn luyện (Learning Curve):</strong> Không có công thức "chén thánh" cố định. Bạn cần thời gian thực chiến đủ lâu để "cảm" được nhịp điệu và cấu trúc thị trường.
    </li>
    <li>
      <strong>Rủi ro từ "Bẫy giá" (False Breakout):</strong> Các tổ chức lớn (Big Boys/Market Makers) thường tạo ra các mô hình giả để quét thanh khoản (Stop Hunt) trước khi giá chạy thật.
    </li>
  </ul>

  <h2>Một số chiến lược Price Action phổ biến</h2>
  <h3>1. Giao dịch theo Pullback</h3>
    <img src="https://cdn.vietnambiz.vn/2019/11/13/becoming-a-better-trader-maximizing-breakout-and-pullback-strategies-prtechbodybreakoutpullbackspngfull-1573620016051731536233.png" alt="Price Action" />
  <p>
    Trader vào lệnh khi giá hồi về vùng hỗ trợ hoặc kháng cự trong xu hướng chính.
    Đây là chiến lược an toàn và được sử dụng rất phổ biến.
  </p>

  <h3>2. Giao dịch đảo chiều</h3>
  <img src="https://9746c6837f.vws.vegacdn.vn/posts/files/tweezer-bottom.png" alt="đảo chiều" />

  <p>
    Chiến lược này tập trung vào việc xác định các vùng giá mạnh nơi thị trường có khả năng đảo chiều.
    Tuy nhiên, phương pháp này đòi hỏi kinh nghiệm và quản lý rủi ro chặt chẽ.
  </p>

  <h3>3. Giao dịch Breakout</h3>
    <img src="https://cdn.24hmoney.vn/upload/images/2022-2/2022-05-31/partner/screenshot-2022-05-31-154658-1653986981-width829height334.png" alt="Breakout" />

  <p>
    Trader vào lệnh khi giá phá vỡ một vùng hỗ trợ, kháng cự hoặc vùng tích lũy quan trọng,
    kỳ vọng giá sẽ tiếp tục di chuyển mạnh theo hướng breakout.
  </p>

  <h2>Quy trình 4 bước giao dịch Price Action hiệu quả (Checklist)</h2>
  <ol>
    <li>
      <strong>Bước 1 - Xác định cấu trúc (Market Structure):</strong> Quan sát khung thời gian lớn (H4, D1) để biết phe nào đang kiểm soát thị trường (Uptrend, Downtrend hay Sideway).
    </li>
    <li>
      <strong>Bước 2 - Tìm vùng quan trọng (Key Levels):</strong> Vẽ các đường Hỗ trợ/Kháng cự, Trendline hoặc Supply/Demand nơi giá có khả năng phản ứng mạnh nhất.
    </li>
    <li>
      <strong>Bước 3 - Chờ tín hiệu xác nhận (Signal):</strong> Kiên nhẫn đợi sự xuất hiện của các mô hình nến đảo chiều (Pin Bar, Engulfing...) ngay tại vùng quan trọng đã xác định ở Bước 2.
    </li>
    <li>
      <strong>Bước 4 - Vào lệnh & Quản lý rủi ro (Execution):</strong>
      <ul>
        <li>Đặt <strong>Stop Loss (SL)</strong> ngay sau râu nến hoặc vùng cản để bảo vệ tài khoản.</li>
        <li>Đặt <strong>Take Profit (TP)</strong> theo tỷ lệ R:R tối thiểu 1:2.</li>
      </ul>
    </li>
  </ol>

  <h2>Lời kết</h2>
  <p>
    <strong>Price Action</strong> không phải là "chén thánh" giúp bạn giàu nhanh sau một đêm, nhưng nó là tấm bản đồ chân thực nhất về thị trường. 
    Thành công đến từ việc bạn kiên nhẫn chờ đợi tín hiệu đẹp tại vùng giá tốt và tuân thủ kỷ luật quản lý vốn.
  </p>
  <p>
    <em>Hãy bắt đầu bằng việc quan sát biểu đồ quá khứ (Backtest) để rèn luyện kỹ năng đọc nến trước khi mạo hiểm với tiền thật. Chúc bạn giao dịch thành công!</em>
  </p>
  `,
        level: "BASIC",
        tags: JSON.stringify(["Quan trọng", "Bắt buộc phải biết"]),
        related: JSON.stringify([
          "Pin Bar",
          "Inside Bar",
          "Support Resistance",
        ]),
        created_at: now,
        updated_at: now,
      },
      {
        id: "trend-following",
        topic: "METHODS",
        title: "Trend Following",
        summary: "Đi theo xu hướng chính, bỏ qua nhiễu nhỏ để tối ưu RR.",
        content: `
  <h2>Trend Following là gì?</h2>
  <p>
    <strong>Trend Following (Giao dịch theo xu hướng)</strong> là một chiến lược đầu tư tập trung vào việc xác định và đi theo
    hướng di chuyển chính của thị trường (Uptrend hoặc Downtrend) thay vì cố gắng dự đoán đỉnh hay đáy.
  </p>
  <p>
    Triết lý cốt lõi của phương pháp này gói gọn trong câu nói nổi tiếng: <em>"The Trend Is Your Friend" (Xu hướng là bạn).</em>
    Trader sẽ mua khi giá đang tăng và bán khi giá đang giảm, với mục tiêu ăn trọn con sóng lớn thay vì lướt lát ngắn hạn.
  </p>
  <img src="https://habinhfx.com/wp-content/uploads/2024/09/Mo-hinh-tam-giac-giam-1024x604.jpg" alt="Biểu đồ xu hướng tăng và giảm" />

  <h2>Tại sao nên giao dịch theo xu hướng?</h2>
  <p>
    Nhiều Trader huyền thoại như <em>Ed Seykota, Jesse Livermore</em> hay các quỹ đầu cơ lớn đều sử dụng phương pháp này vì tính hiệu quả dài hạn của nó:
  </p>
  <ul>
    <li>
      <strong>Tỷ lệ Rủi ro/Lợi nhuận (R:R) cực tốt:</strong> Bạn có thể chấp nhận thua lỗ nhỏ (cắt lỗ sớm khi sai xu hướng) để đổi lấy những lệnh thắng cực lớn (gồng lời đến khi hết sóng).
    </li>
    <li>
      <strong>Ít căng thẳng hơn:</strong> Không cần phải "đoán" thị trường sẽ đi về đâu ngày mai. Bạn chỉ cần phản ứng theo những gì biểu đồ đang hiển thị.
    </li>
    <li>
      <strong>Loại bỏ nhiễu (Noise):</strong> Bỏ qua những biến động ngắn hạn vô nghĩa để tập trung vào bức tranh lớn.
    </li>
  </ul>

  <h2>Cách xác định xu hướng thị trường</h2>
  <h3>1. Dựa vào Cấu trúc giá (Market Structure)</h3>
  <ul>
    <li><strong>Xu hướng Tăng (Uptrend):</strong> Giá liên tục tạo Đỉnh sau cao hơn Đỉnh trước (Higher High) và Đáy sau cao hơn Đáy trước (Higher Low).</li>
    <li><strong>Xu hướng Giảm (Downtrend):</strong> Giá liên tục tạo Đáy sau thấp hơn Đáy trước (Lower Low) và Đỉnh sau thấp hơn Đỉnh trước (Lower High).</li>
  </ul>

  <h3>2. Dựa vào Đường trung bình động (Moving Averages - MA)</h3>
  <p>
    Đây là công cụ đơn giản nhưng hiệu quả nhất để lọc nhiễu và xác định xu hướng:
  </p>
  <ul>
    <li>
      <strong>EMA 50 & EMA 200:</strong> Khi giá nằm trên đường EMA 200 và đường EMA 50 cắt lên trên EMA 200 (Golden Cross) → <em>Xác nhận xu hướng Tăng dài hạn.</em>
    </li>
    <li>
      <strong>Độ dốc của đường MA:</strong> Đường MA càng dốc lên thì lực tăng càng mạnh. Nếu MA đi ngang, thị trường đang Sideway.
    </li>
  </ul>
  <img src="https://9746c6837f.vws.vegacdn.vn/posts/files/1_1-MA.png" alt="Giao cắt đường trung bình động Golden Cross" />

  <h2>Chiến lược vào lệnh theo xu hướng (Entry Strategies)</h2>
  <h3>1. Vào lệnh khi giá hồi quy (Pullback)</h3>
  <img src="https://isg.com.vn/wp-content/uploads/2022/11/15_1.png" alt="Biểu đồ Pullback" />

  <p>
    Đây là cách vào lệnh an toàn và tối ưu nhất. Thay vì mua đuổi khi giá đang tăng mạnh, bạn kiên nhẫn chờ giá "nghỉ ngơi" hồi về các vùng hỗ trợ quan trọng.
  </p>
  <ul>
    <li><strong>Bước 1:</strong> Xác định xu hướng chủ đạo là TĂNG.</li>
    <li><strong>Bước 2:</strong> Chờ giá hồi về vùng Hỗ trợ, Trendline hoặc đường EMA 20/50.</li>
    <li><strong>Bước 3:</strong> Tìm tín hiệu đảo chiều (nến Pin Bar, Engulfing) tại vùng hồi đó để Buy.</li>
  </ul>

  <h3>2. Vào lệnh khi giá phá vỡ (Breakout)</h3>
  <p>
    Dành cho những lúc thị trường đi quá mạnh và không có nhịp hồi sâu.
  </p>
  <img src="https://media.ftv.com.vn/media/pullback-la-gi-02.jpg" alt="Biểu đồ Breakout" />
  <ul>
    <li><strong>Bước 1:</strong> Xác định mô hình tích lũy (như mô hình Cờ đuôi nheo, Tam giác, hoặc vùng đi ngang).</li>
    <li><strong>Bước 2:</strong> Đặt lệnh Buy Stop phía trên vùng kháng cự hoặc chờ nến đóng cửa hẳn phía trên rồi vào lệnh.</li>
    <li><em>Lưu ý:</em> Cách này rủi ro dính False Breakout cao hơn cách Pullback.</li>
  </ul>x

  <h2>Sai lầm thường gặp của Trader theo xu hướng</h2>
  <ul>
    <li>
      <strong>Cố gắng bắt đỉnh/bắt đáy:</strong> Tư duy "giá cao quá rồi, phải Sell thôi" là kẻ thù số 1. Trong một xu hướng mạnh, giá có thể "cao" mãi không thấy đỉnh.
    </li>
    <li>
      <strong>Vào lệnh ngược xu hướng (Counter-trend):</strong> Rất nguy hiểm nếu chưa đủ kinh nghiệm. Hãy nhớ: <em>"Đừng chặn đầu xe tải".</em>
    </li>
    <li>
      <strong>Thiếu kiên nhẫn:</strong> Trend Following đòi hỏi sự kiên nhẫn cực lớn để chờ đúng điểm vào và gồng lời. Phần lớn thời gian là "ngồi im" (Sitting on hands).
    </li>
  </ul>

  <h2>Kết luận</h2>
  <p>
    <strong>Trend Following</strong> là lối chơi của những "kẻ săn mồi" kiên nhẫn. Nó không mang lại cảm giác phấn khích liên tục như Day Trading,
    nhưng là con đường bền vững nhất để xây dựng tài sản. Hãy tập trung vào việc quản lý rủi ro và để thị trường làm nốt phần việc còn lại: 
    <em>"Cut losses short, let profits run" (Cắt lỗ sớm, để lãi chạy).</em>
  </p>
  `,
        level: "BASIC",
        tags: JSON.stringify(["Quan trọng"]),
        related: JSON.stringify(["EMA", "MACD"]),
        created_at: now,
        updated_at: now,
      },
      {
        id: "range-trading",
        topic: "METHODS",
        title: "Range Trading (Giao dịch Sideway)",
        summary:
          "Kiếm lợi nhuận khi thị trường đi ngang trong biên độ Hỗ trợ - Kháng cự.",
        content: `
  <h2>Range Trading là gì?</h2>
  <p>
    <strong>Range Trading (Giao dịch trong vùng giá)</strong> là phương pháp giao dịch được áp dụng khi thị trường rơi vào trạng thái <strong>không có xu hướng rõ ràng</strong> (Sideway).
    Khác với Trend Following (nơi giá chạy mạnh về một hướng), trong Range Trading, phe Mua và phe Bán có sức mạnh tương đương nhau, tạo ra thế cân bằng tạm thời.
    Kết quả là giá chỉ dao động qua lại trong một <strong>biên độ cố định</strong>, giống như một quả bóng bàn bật nảy giữa hai bức tường vô hình.
  </p>
  <p>
    Thực tế thống kê cho thấy thị trường dành tới <strong>70% thời gian</strong> để đi ngang hoặc tích lũy. Vì vậy, nắm vững kỹ năng Range Trading giúp bạn kiếm lợi nhuận ngay cả khi thị trường có vẻ "nhàm chán" nhất.
  </p>
  
  <img src="https://gldt.mql5.vn/2025/05/Figure-3-Sideways-Trend1.png" alt="Thị trường Sideway - Range Trading" />
  
  <hr/>
  
  <h3>Tại sao thị trường lại đi ngang (Sideway)?</h3>
  <p>Thị trường đi vào trạng thái Sideway thường do một trong các nguyên nhân sau:</p>
  <ul>
    <li><strong>Tâm lý chờ đợi:</strong> Cả phe Mua và Bán đều đang thận trọng chờ đợi các tin tức kinh tế quan trọng (như Nonfarm, lãi suất Fed, CPI...).</li>
    <li><strong>Sự "nghỉ ngơi" của xu hướng:</strong> Sau một đợt tăng hoặc giảm mạnh, thị trường cần thời gian để tích lũy lại năng lượng trước khi bứt phá tiếp.</li>
    <li><strong>Hoạt động của "Cá mập":</strong> Các tổ chức tài chính lớn (Big Boys) đang âm thầm gom hàng (Tích lũy) hoặc xả hàng (Phân phối) trong một vùng giá nhất định.</li>
  </ul>
  
  <p>
    <em>Lưu ý:</em> Giai đoạn này là "mồ chôn" của các Trader đánh theo xu hướng (Trend Trader) vì các tín hiệu Breakout giả xuất hiện liên tục, nhưng lại là <strong>mảnh đất màu mỡ cho Range Trader</strong>.
  </p>
  
  <hr/>
  
  <h3>Cách nhận diện thị trường Sideway chuẩn xác</h3>
  <p>Để tránh nhầm lẫn với các nhịp điều chỉnh phức tạp, hãy kiểm tra các dấu hiệu sau:</p>
  <ul>
    <li><strong>Cấu trúc đỉnh đáy:</strong> Giá <strong>không tạo được Higher High</strong> (đỉnh cao hơn) và cũng <strong>không tạo được Lower Low</strong> (đáy thấp hơn).</li>
    <li><strong>Đường trung bình động (MA):</strong> Các đường MA ngắn hạn và dài hạn (như EMA 20, EMA 50) đi ngang, xoắn vào nhau và nằm giữa biểu đồ giá.</li>
    <li><strong>Bollinger Bands:</strong> Hai dải băng trên và dưới co thắt lại, báo hiệu biến động thấp.</li>
    <li><strong>Biên độ rõ ràng:</strong> Giá chạm và bật lại nhiều lần (ít nhất 2 lần) tại cùng một vùng đỉnh và vùng đáy.</li>
  </ul>
  
  <p><em>⚠️ Nguyên tắc vàng: Chỉ giao dịch Range khi biên độ đủ rộng để đảm bảo tỷ lệ R:R (Rủi ro/Lợi nhuận) tốt.</em></p>
  
  <hr/>
  
  <h3>Chiến lược giao dịch Range Trading 4 bước</h3>
  
  <h4>Bước 1: Xác định biên độ Range (Hỗ trợ & Kháng cự)</h4>
  <p>
    Hãy vẽ các <strong>vùng giá (Zone)</strong> thay vì một đường kẻ mỏng manh.
    <ul>
      <li><strong>Vùng Hỗ trợ (Support Zone):</strong> Nối các đáy gần nhất. Đây là nơi phe Mua canh me nhập cuộc.</li>
      <li><strong>Vùng Kháng cự (Resistance Zone):</strong> Nối các đỉnh gần nhất. Đây là nơi phe Bán sẵn sàng xả hàng.</li>
    </ul>
  </p>

  <h4>Bước 2: Kiên nhẫn chờ giá về biên (Cực kỳ quan trọng)</h4>
  <p>
    Sai lầm lớn nhất là giao dịch ở <strong>giữa vùng Range (Middle Range)</strong>. Tại đây, giá có thể đi bất cứ đâu và tỷ lệ thắng chỉ là 50/50.
    Hãy kiên nhẫn như một thợ săn, chỉ bóp cò khi "con mồi" đi vào tầm ngắm (vùng biên).
  </p>

  <h4>Bước 3: Tìm tín hiệu xác nhận (Confluence)</h4>
  <p>Đừng đặt lệnh chờ (Limit) một cách mù quáng. Hãy đợi thị trường "trả lời" bằng các mô hình nến đảo chiều:</p>
  <ul>
    <li><strong>Tại Hỗ trợ:</strong> Tìm nến Pin Bar đuôi dưới dài, Bullish Engulfing (Nhấn chìm tăng), hoặc mô hình Hai đáy (Double Bottom).</li>
    <li><strong>Tại Kháng cự:</strong> Tìm nến Shooting Star, Bearish Engulfing (Nhấn chìm giảm), hoặc mô hình Hai đỉnh (Double Top).</li>
  </ul>

  <h4>Bước 4: Vào lệnh và Quản lý lệnh</h4>
  <ul>
    <li><strong>Buy:</strong> Khi có tín hiệu đảo chiều tăng tại Hỗ trợ. → <strong>TP:</strong> Tại vùng Kháng cự đối diện (hoặc 90% biên độ Range).</li>
    <li><strong>Sell:</strong> Khi có tín hiệu đảo chiều giảm tại Kháng cự. → <strong>TP:</strong> Tại vùng Hỗ trợ đối diện.</li>
  </ul>
  
  <img src="https://res.cloudinary.com/dq4basktt/image/upload/v1770260781/ChatGPT_Image_10_05_14_5_thg_2_2026_juw3ly.png" alt="Minh họa điểm vào lệnh Buy Sell chuẩn trong Range Trading" />
  
  <hr/>
  
  <h3>Cách đặt Stop Loss an toàn để tránh "Quét SL"</h3>
  <p>
    Trong thị trường Sideway, hiện tượng <strong>False Breakout (Phá vỡ giả)</strong> hay "quét râu nến" xảy ra như cơm bữa.
    Để bảo vệ tài khoản:
  </p>
  <ul>
    <li><strong>Stop Loss cho lệnh Buy:</strong> Đặt bên dưới vùng Hỗ trợ một khoảng (buffer) từ 5-10 pips hoặc dưới râu nến thấp nhất gần đó.</li>
    <li><strong>Stop Loss cho lệnh Sell:</strong> Đặt bên trên vùng Kháng cự một khoảng an toàn.</li>
  </ul>
  <p><em>Mẹo:</em> Đừng đặt SL quá sát, hãy cho thị trường một chút không gian để "thở".</p>
  
  <hr/>
  
  <h3>3 Sai lầm "chí mạng" khi giao dịch Range Trading</h3>
  <ol>
    <li><strong>Cố giao dịch khi Range quá hẹp:</strong> Nếu biên độ giữa Hỗ trợ và Kháng cự quá nhỏ, lợi nhuận sẽ không đủ bù đắp chi phí spread và rủi ro.</li>
    <li><strong>Bắt dao rơi (Catching falling knife):</strong> Vào lệnh ngay khi giá chạm biên mà không chờ nến tín hiệu xác nhận. Giá có thể phá biên và chạy luôn!</li>
    <li><strong>Không thoát lệnh khi Range bị phá vỡ:</strong> Nếu giá đóng cửa dứt khoát bên ngoài vùng Range, kịch bản Sideway đã kết thúc. Đừng gồng lỗ hy vọng giá quay lại.</li>
  </ol>
  
  <h3>Khi nào KHÔNG nên dùng Range Trading?</h3>
  <ul>
    <li>Khi giá vừa Breakout mạnh khỏi vùng tích lũy với nến thân dài (Marubozu).</li>
    <li>Khi sắp có tin tức mạnh (High Impact News) vì biên độ có thể bị phá vỡ dễ dàng.</li>
  </ul>
  
  <p><strong>Kết luận:</strong> Range Trading là phương pháp giao dịch đơn giản, ít stress và hiệu quả cao nếu bạn tuân thủ kỷ luật: <em>"Mua đáy, Bán đỉnh, Ngồi im ở giữa"</em>.</p>
        `,
        level: "BASIC",
        tags: JSON.stringify(["Cơ bản", "Sideway"]),
        related: JSON.stringify(["Support Resistance", "Bollinger Bands"]),
        created_at: now,
        updated_at: now,
      },
      {
        id: "breakout-trading",
        topic: "METHODS",
        title: "Breakout Trading (Giao dịch Phá vỡ)",
        summary: "Bắt trọn con sóng lớn ngay khi giá phá vỡ vùng tích lũy.",
        content: `
  <h2>Breakout Trading là gì?</h2>
  <p>
    <strong>Breakout Trading (Giao dịch phá vỡ)</strong> là phương pháp vào lệnh ngay khi giá phá vỡ (break) một vùng quan trọng
    (Hỗ trợ, Kháng cự, Trendline, hoặc Mô hình giá) để bắt đầu một xu hướng mới mạnh mẽ.
    Đây là chiến lược yêu thích của các Trader theo đà tăng trưởng (Momentum Traders).
  </p>
  <img src="https://res.cloudinary.com/dq4basktt/image/upload/v1770106281/ChatGPT_Image_15_10_59_3_thg_2_2026_s6jl2p.png" alt="Mô hình Breakout phá vỡ" />

  <h3>1. Các loại vùng Breakout cần tập trung</h3>
  <p>👉 <em>Không phải vùng nào break cũng đáng trade. Hãy tập trung vào:</em></p>
  <ul>
      <li>
        <strong>Breakout Hỗ trợ / Kháng cự:</strong> Vùng được test nhiều lần (càng nhiều lần test → phá càng mạnh). Ưu tiên vùng nằm theo xu hướng lớn.
      </li>
      <li>
        <strong>Breakout Trendline:</strong> Trendline càng có nhiều điểm chạm → độ tin cậy càng cao. Phá trendline thường báo hiệu kết thúc pha hiện tại.
      </li>
      <li>
        <strong>Breakout khỏi Range (Sideway):</strong> Range hẹp + tích lũy lâu → Break ra khỏi range thường đi rất nhanh.
      </li>
  </ul>

  <h3>2. Điều kiện thị trường lý tưởng để trade Breakout</h3>
  <p>⚠️ <em>Không phải lúc nào cũng nên đánh Breakout.</em></p>
  <ul>
    <li>
        <strong>✅ NÊN trade khi:</strong> Thị trường có xu hướng rõ ràng, biến động tăng dần, hoặc vào các phiên sôi động (London/New York).
    </li>
    <li>
        <strong>❌ TRÁNH trade khi:</strong> Thị trường Sideway rộng biên độ lớn, bị nhiễu, trước tin tức lớn (Non-Farm, CPI...), hoặc thanh khoản thấp (phiên Á).
    </li>
  </ul>

  <h3>3. False Breakout (Phá vỡ giả) – Kẻ thù số 1</h3>
  <p>🔥 <em>Phần này cực kỳ quan trọng để bảo vệ tài khoản.</em></p>
  <p><strong>Dấu hiệu False Breakout:</strong></p>
  <ul>
    <li>Nến rút chân mạnh (tạo râu nến dài).</li>
    <li>Break nhưng <strong>Volume thấp</strong>.</li>
    <li>Break ngược xu hướng lớn.</li>
    <li>Giá phá xong quay lại range cũ rất nhanh.</li>
  </ul>
  <p><strong>Cách lọc False Breakout:</strong> Chờ nến đóng cửa, kết hợp Volume, trade thuận xu hướng chính, và ưu tiên <em>Retest Entry</em>.</p>

  <h3>4. Hai cách vào lệnh kinh điển</h3>
  <ul>
      <li>
        <strong>Cách 1 (Aggressive - Rủi ro cao):</strong> Vào lệnh ngay khi nến đóng cửa vượt qua vùng cản.
        <br><em>Ưu điểm:</em> Không lỡ tàu. <em>Nhược điểm:</em> Dễ dính False Breakout.
      </li>
      <li>
        <strong>Cách 2 (Conservative - An toàn):</strong> Chờ giá quay lại kiểm tra (Retest) vùng vừa phá vỡ rồi mới vào lệnh.
        <br><em>Ưu điểm:</em> Tỷ lệ thắng cao hơn, SL ngắn hơn. <em>Nhược điểm:</em> Đôi khi giá chạy luôn không quay lại.
      </li>
  </ul>
  <img src="https://res.cloudinary.com/dq4basktt/image/upload/v1770105961/ChatGPT_Image_15_04_41_3_thg_2_2026_bta7mr.png" alt="So sánh Aggressive Entry và Retest Entry" />

  <h3>5. Quản lý rủi ro khi trade Breakout</h3>
  <p>💰 <em>Không quản lý rủi ro = sớm cháy tài khoản.</em></p>
  <ul>
    <li>
        <strong>Đặt Stop Loss (SL):</strong> Dưới vùng kháng cự cũ (nếu Buy), trên vùng hỗ trợ cũ (nếu Sell), hoặc dưới đáy/đỉnh gần nhất.
    </li>
    <li>
        <strong>Take Profit (TP):</strong> Theo tỷ lệ R:R tối thiểu 1:2 hoặc 1:3. Hoặc đo chiều cao của vùng Range/Mô hình giá rồi chiếu lên.
    </li>
  </ul>

  <h3>6. Breakout + Price Action & Volume (Combo nâng cao)</h3>
  <ul>
    <li>
        <strong>Mô hình nến xác nhận:</strong> Marubozu, Strong Engulfing, Inside Bar Breakout.
    </li>
    <li>
        <strong>Cấu trúc thị trường:</strong> Break + tạo Higher High (với Buy) / Lower Low (với Sell) hoặc Break Structure (BOS).
    </li>
    <li>
        <strong>Volume (Máy nói dối của thị trường):</strong> Break mạnh thì Volume PHẢI tăng. Break mà Volume yếu → Cảnh giác cao. Volume cực đại (Climax) có thể là dấu hiệu cuối sóng.
    </li>
  </ul>

  <h3>7. Khung thời gian phù hợp</h3>
  <ul>
    <li><strong>Scalping:</strong> M5 – M15</li>
    <li><strong>Intraday:</strong> M15 – H1</li>
    <li><strong>Swing:</strong> H4 – D1</li>
  </ul>
  <p>👉 <em>Mẹo:</em> Ưu tiên xác định vùng Breakout ở khung lớn, tìm điểm vào lệnh ở khung nhỏ.</p>

  <h3>8. Tâm lý khi trade Breakout</h3>
  <ul>
    <li>Chấp nhận lỡ kèo nếu không đủ điều kiện.</li>
    <li>Không FOMO đuổi giá khi đã chạy quá xa.</li>
    <li>Kỷ luật chờ setup đúng kế hoạch (đóng nến mới vào).</li>
  </ul>

  <h3>9. Checklist nhanh trước khi vào lệnh</h3>
  <p>✅ Có vùng cản rõ ràng? <br>
     ✅ Nến đóng cửa mạnh (thân dài)? <br>
     ✅ Volume tăng đột biến? <br>
     ✅ Thuận theo xu hướng lớn? <br>
     ✅ Tỷ lệ R:R ≥ 1:2? <br>
     → <em>Đủ 5 điều kiện mới bóp cò!</em>
  </p>
        `,
        level: "ADVANCED",
        tags: JSON.stringify(["Nâng cao", "Breakout"]),
        related: JSON.stringify(["Mô hình nến", "Volume"]),
        created_at: now,
        updated_at: now,
      },
      {
        id: "pullback-trading",
        topic: "METHODS",
        title: "Pullback Trading (Giao dịch Hồi quy)",
        summary:
          "Chiến lược vào lệnh an toàn: Mua thấp trong xu hướng tăng, Bán cao trong xu hướng giảm.",
        content: `
<h2>Pullback Trading là gì?</h2>
<p>
  <strong>Pullback Trading (Giao dịch hồi quy)</strong> là chiến lược giao dịch theo xu hướng,
  trong đó trader không mua đuổi khi giá đang tăng mạnh hoặc bán đuổi khi giá đang giảm sâu,
  mà kiên nhẫn chờ giá điều chỉnh (pullback) về các vùng giá quan trọng để vào lệnh.
</p>
<p>
  Bản chất của Pullback Trading là giao dịch cùng xu hướng chính nhưng tại mức giá có lợi thế hơn,
  giúp tối ưu hóa tỷ lệ lợi nhuận/rủi ro (Risk/Reward).
</p>

<img src="https://isg.com.vn/wp-content/uploads/2022/11/15_1.png" alt="Chiến lược Pullback Trading" />

<h2>Bản chất thị trường đằng sau Pullback</h2>
<p>
  Trong một xu hướng mạnh, giá không di chuyển theo đường thẳng mà luôn có những nhịp tăng – giảm xen kẽ.
  Các nhịp pullback xuất hiện do hoạt động chốt lời ngắn hạn hoặc sự cân bằng tạm thời giữa bên mua và bên bán.
</p>
<p>
  Pullback chính là cơ hội để các trader lớn và tổ chức tham gia thêm vị thế theo xu hướng chính.
</p>

<h3>Tại sao nên giao dịch Pullback?</h3>
<ul>
  <li><strong>Điểm vào lệnh đẹp (Sniper Entry):</strong> Vào lệnh tại vùng giá tốt hơn so với mua đuổi.</li>
  <li><strong>Rủi ro thấp:</strong> Stop Loss đặt ngắn và rõ ràng bên dưới đáy pullback.</li>
  <li><strong>Tỷ lệ RR cao:</strong> Dễ đạt RR 1:2, 1:3 hoặc cao hơn.</li>
  <li><strong>Tâm lý ổn định:</strong> Không bị cuốn theo FOMO.</li>
</ul>

<h2>Điều kiện thị trường phù hợp để đánh Pullback</h2>
<ul>
  <li>Thị trường đang có <strong>xu hướng rõ ràng</strong> (Uptrend hoặc Downtrend).</li>
  <li>Cấu trúc thị trường còn nguyên vẹn (Higher High – Higher Low với xu hướng tăng).</li>
  <li>Không phù hợp trong thị trường sideway hẹp hoặc biến động tin tức mạnh.</li>
</ul>

<h2>Các vùng Pullback tiềm năng</h2>
<ul>
  <li>
    <strong>Hỗ trợ – Kháng cự đảo vai (S/R Flip):</strong>
    Vùng kháng cự cũ sau khi bị phá vỡ sẽ trở thành hỗ trợ mới.
  </li>
  <li>
    <strong>Trendline:</strong>
    Giá hồi về trendline và xuất hiện phản ứng mạnh.
  </li>
  <li>
    <strong>Đường trung bình động (MA):</strong>
    EMA 20, EMA 50 thường đóng vai trò là hỗ trợ/kháng cự động trong xu hướng mạnh.
  </li>
  <li>
    <strong>Fibonacci Retracement:</strong>
    Các mức quan trọng như 0.382, 0.5 và 0.618.
  </li>
</ul>

<img src="https://res.cloudinary.com/dq4basktt/image/upload/v1770108008/ChatGPT_Image_15_39_45_3_thg_2_2026_dxoiop.png" alt="Pullback về Trendline và MA" />

<h2>Cách xác nhận Pullback hợp lệ</h2>
<ul>
  <li>Giá hồi lại với lực yếu hơn so với sóng chính.</li>
  <li>Không phá vỡ đáy/đỉnh quan trọng của xu hướng.</li>
  <li>Xuất hiện tín hiệu Price Action tại vùng pullback (Pin Bar, Engulfing, Inside Bar).</li>
</ul>

<h2>Chiến lược vào lệnh Pullback cơ bản</h2>
<ol>
  <li>Xác định xu hướng trên khung thời gian lớn (H4, D1).</li>
  <li>Vẽ hỗ trợ – kháng cự và trendline.</li>
  <li>Chờ giá hồi về vùng pullback tiềm năng.</li>
  <li>Chờ tín hiệu xác nhận từ nến.</li>
  <li>Vào lệnh theo xu hướng chính.</li>
</ol>

<h2>Đặt Stop Loss và Take Profit</h2>
<ul>
  <li><strong>Stop Loss:</strong> Dưới đáy pullback (Buy) hoặc trên đỉnh pullback (Sell).</li>
  <li><strong>Take Profit:</strong> Đỉnh cũ, vùng kháng cự tiếp theo hoặc theo RR cố định.</li>
</ul>

<h2>Những sai lầm thường gặp khi đánh Pullback</h2>
<ul>
  <li>Vào lệnh khi thị trường chưa có xu hướng rõ ràng.</li>
  <li>Nhầm pullback với đảo chiều.</li>
  <li>Không chờ tín hiệu xác nhận.</li>
  <li>Đặt Stop Loss quá rộng hoặc quá hẹp.</li>
</ul>

<h2>Pullback Trading phù hợp với ai?</h2>
<ul>
  <li>Trader theo trường phái Price Action.</li>
  <li>Trader thích giao dịch ít lệnh nhưng chất lượng cao.</li>
  <li>Trader Swing hoặc Day Trading.</li>
</ul>

<h2>Kết luận</h2>
<p>
  Pullback Trading là một trong những chiến lược an toàn và hiệu quả nhất khi giao dịch theo xu hướng.
  Khi kết hợp Pullback với Price Action, quản lý vốn chặt chẽ và kỷ luật giao dịch,
  trader có thể xây dựng một hệ thống giao dịch bền vững trong dài hạn.
</p>
`,

        level: "BASIC",
        tags: JSON.stringify(["An toàn", "Trend"]),
        related: JSON.stringify(["Trend Following", "Fibonacci"]),
        created_at: now,
        updated_at: now,
      },
      {
        id: "reversal-trading",
        topic: "METHODS",
        title: "Reversal Trading (Giao dịch Đảo chiều)",
        summary: "Bắt đỉnh/đáy thị trường. Rủi ro cao nhưng lợi nhuận cực lớn.",
        content: `
  <h2>Reversal Trading là gì?</h2>
  <p>
    <strong>Reversal Trading (Giao dịch đảo chiều)</strong> là phương pháp giao dịch nhằm tìm kiếm các điểm "quay xe" của thị trường để vào lệnh ngược với xu hướng hiện tại.
    Mục tiêu của Reversal Trader là <strong>"Mua ở đáy, Bán ở đỉnh"</strong> để ăn trọn con sóng mới ngay từ khi nó vừa hình thành, thay vì chỉ ăn phần thân cá như Trend Following.
  </p>
  <p>
    Đây là phương pháp mang lại lợi nhuận tiềm năng cực lớn (Risk:Reward cao), nhưng cũng đi kèm rủi ro không nhỏ nếu bạn cố gắng "bắt dao rơi".
  </p>
  <img src="https://res.cloudinary.com/dq4basktt/image/upload/v1770262723/Gemini_Generated_Image_wq06pdwq06pdwq06_pbtfex.png" alt="Mô hình đảo chiều Reversal tăng giá" />
  
  <hr/>

  <h3>Tại sao Reversal Trading lại hấp dẫn?</h3>
  <ul>
    <li><strong>Vị thế đẹp nhất:</strong> Bạn vào lệnh ngay tại điểm khởi đầu của xu hướng mới, giúp tối ưu hóa lợi nhuận.</li>
    <li><strong>Stop Loss ngắn:</strong> Điểm cắt lỗ thường được đặt ngay sau đỉnh/đáy vừa tạo, rất gần điểm vào lệnh.</li>
    <li><strong>Cơ hội cao khi thị trường quá mua/quá bán:</strong> Tận dụng sự hưng phấn hoặc hoảng loạn quá mức của đám đông.</li>
  </ul>

  <hr/>

  <h3>3 Dấu hiệu "Vàng" báo hiệu đảo chiều</h3>
  <p>Đừng bao giờ chặn đầu xe tải. Hãy chờ ít nhất một trong các tín hiệu sau xuất hiện:</p>

  <h4>1. Phân kỳ (Divergence)</h4>
  <p>
    Đây là tín hiệu sớm nhất. Giá tạo đỉnh cao hơn (Higher High) nhưng chỉ báo động lượng (RSI, MACD) lại tạo đỉnh thấp hơn (Lower High).
    Điều này cho thấy phe mua đang kiệt sức dù giá vẫn rướn lên.
  </p>
  <img src="https://api-master.masvn.com/files/media/base/aa6d952a3b971419ee83e05008c49d16bc944dc5/bai20hinh4a.jpg" alt="Phân kỳ RSI báo hiệu đảo chiều giảm" />

  <h4>2. Mô hình giá đảo chiều (Reversal Patterns)</h4>
  <p>Các mô hình kinh điển cho thấy sự thay đổi trong tâm lý thị trường:</p>
  <ul>
    <li><strong>Vai Đầu Vai (Head & Shoulders):</strong> Báo hiệu kết thúc xu hướng tăng.</li>
    <li><strong>Hai Đỉnh (Double Top) / Hai Đáy (Double Bottom):</strong> Giá thất bại trong việc phá vỡ vùng cản lần thứ 2.</li>
    <li><strong>Nêm tăng (Rising Wedge) ở đỉnh:</strong> Giá bị nén lại trong biên độ hẹp dần trước khi sập mạnh.</li>
  </ul>
 
  <h4>3. Cấu trúc thị trường bị phá vỡ (Break of Structure - BOS)</h4>
  <p>
    Trong xu hướng tăng, giá liên tục tạo Đáy sau cao hơn Đáy trước (Higher Low).
    Nếu giá phá vỡ đáy dẫn sóng gần nhất (Lower Low), cấu trúc tăng đã bị gãy → <em>Xác nhận đảo chiều sang giảm.</em>
  </p>

  <hr/>

  <h3>Chiến lược giao dịch Reversal chuẩn chỉnh</h3>
  
  <h4>Bước 1: Xác định vùng cản mạnh (Key Level)</h4>
  <p>Chỉ tìm kiếm cơ hội đảo chiều tại các vùng Kháng cự/Hỗ trợ khung ngày (D1) hoặc tuần (W1). Đừng bắt đảo chiều "giữa đường".</p>

  <h4>Bước 2: Chờ tín hiệu suy yếu & Xác nhận</h4>
  <ul>
    <li>Quan sát nến: Có xuất hiện nến rút chân dài (Pin Bar), Doji hay Engulfing không?</li>
    <li>Kiểm tra Phân kỳ RSI/MACD.</li>
    <li>Chờ giá đóng cửa xác nhận (Đừng vào lệnh khi nến đang chạy).</li>
  </ul>

  <h4>Bước 3: Vào lệnh (Entry)</h4>
  <ul>
    <li><strong>Aggressive (Rủi ro):</strong> Vào ngay khi đóng nến đảo chiều.</li>
    <li><strong>Conservative (An toàn):</strong> Chờ giá hồi lại (Retest) vùng vừa phá vỡ hoặc mô hình Vai phải.</li>
  </ul>

  <h4>Bước 4: Thoát lệnh</h4>
  <ul>
    <li><strong>Stop Loss:</strong> Đặt sau râu nến đảo chiều hoặc sau vùng cản một chút.</li>
    <li><strong>Take Profit:</strong> Tại vùng cản đối diện gần nhất hoặc theo tỷ lệ R:R 1:3 trở lên.</li>
  </ul>

  <hr/>

  <h3>Cảnh báo: Phân biệt "Đảo chiều" và "Điều chỉnh" (Pullback)</h3>
  <p>Rất nhiều Trader "chết" vì nhầm lẫn hai khái niệm này:</p>
  <ul>
    <li><strong>Điều chỉnh (Pullback):</strong> Giá đi ngược xu hướng chính <em>tạm thời</em> rồi tiếp tục chạy theo xu hướng cũ. → <em>Nên đánh thuận xu hướng.</em></li>
    <li><strong>Đảo chiều (Reversal):</strong> Giá thay đổi xu hướng <em>vĩnh viễn</em> (từ Tăng sang Giảm hoặc ngược lại). → <em>Đánh ngược xu hướng cũ.</em></li>
  </ul>
  <p><em>Mẹo:</em> Đừng đoán đỉnh đáy. Hãy để thị trường tạo đỉnh đáy xong rồi mới vào lệnh.</p>

  <p><strong>Kết luận:</strong> Reversal Trading dành cho những Trader kiên nhẫn, có khả năng chịu đựng rủi ro và am hiểu sâu sắc về Price Action. Phần thưởng là rất lớn, nhưng cái giá phải trả cho sự vội vàng cũng không hề rẻ.</p>
        `,
        level: "ADVANCED",
        tags: JSON.stringify(["Rủi ro cao", "Đảo chiều"]),
        related: JSON.stringify(["Divergence", "RSI"]),
        created_at: now,
        updated_at: now,
      },
      {
        id: "trading-psychology",
        topic: "PSYCHOLOGY",
        title: "FOMO - Nỗi Sợ Bỏ Lỡ Cơ Hội",
        summary: "Kẻ thù số 1 của Trader: Mua đỉnh, bán đáy vì sợ lỡ tàu.",
        content: `<h2>FOMO (Fear Of Missing Out) là gì?</h2>
<p>
  <strong>FOMO</strong> là trạng thái tâm lý <strong>sợ bỏ lỡ cơ hội</strong>, khiến Trader vào lệnh một cách bốc đồng khi thấy giá tăng mạnh hoặc giảm mạnh, bỏ qua mọi nguyên tắc giao dịch và quản lý rủi ro.
</p>
<p>
  Đây là nguyên nhân chính khiến Trader <strong>mua đúng đỉnh</strong> và <strong>bán đúng đáy</strong>. Khi đám đông hưng phấn nhất cũng là lúc cá mập chốt lời.
</p>

<img src="https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/164303/Originals/fomo-la-gi-5.jpg" alt="Tâm lý FOMO trong Trading" />

<hr/>

<h3>Biểu hiện của FOMO</h3>
<ul>
  <li>
    <strong>Vào lệnh đuổi giá:</strong><br/>
    Thấy nến xanh dài là nhảy vào Buy ngay lập tức vì sợ giá chạy mất, không chờ đóng nến hay hồi về.
  </li>
  <li>
    <strong>Tiếc nuối quá mức:</strong><br/>
    Dằn vặt bản thân khi bỏ lỡ một con sóng, sau đó cố gắng tìm mọi cách vào lệnh để "gỡ gạc" hoặc "ăn phần còn lại".
  </li>
  <li>
    <strong>Vào lệnh khối lượng lớn:</strong><br/>
    Muốn kiếm nhanh để bù đắp cho cơ hội đã lỡ, dẫn đến All-in hoặc đánh volume lớn.
  </li>
  <li>
    <strong>Không có Stop Loss:</strong><br/>
    Vì vào lệnh vội vàng nên không kịp tính toán điểm cắt lỗ, hoặc cố tình không đặt vì tin rằng giá sẽ còn chạy tiếp.
  </li>
</ul>

<img src="https://cdn.hdbank.com.vn/hdbank-file/news/editor/p97JuMb4k5mMhHAYSOC620250117103118/fomolagi1_1737084784525.jpg" alt="Vòng lặp FOMO Trading" />

<hr/>

<h3>Case Study: Đu đỉnh kinh điển</h3>
<p>
  Giá Bitcoin tăng từ 40k lên 50k. Trader A đứng ngoài quan sát.
  Giá lên 60k, Trader A bắt đầu sốt ruột nhưng vẫn nghi ngờ.
  Giá lên 69k, tin tức tốt tràn ngập, ai cũng khoe lãi. Trader A không chịu nổi nữa, nghĩ rằng "nó sẽ lên 100k".
  A quyết định All-in Buy tại 69k.
  Ngay sau đó, giá quay đầu giảm mạnh. A hoảng loạn cắt lỗ tại 50k.
</p>
<p><em>📌 Bài học: Khi tin tức tốt ra nhiều nhất và đám đông hưng phấn nhất, đó thường là vùng đỉnh.</em></p>

<hr/>

<h3>Checklist "Cai nghiện" FOMO</h3>
<ul>
  <li>Lệnh này có nằm trong Kế hoạch giao dịch (Trading Plan) không?</li>
  <li>Có setup (tín hiệu) rõ ràng không hay chỉ là cảm giác?</li>
  <li>Nếu vào lệnh ở đây, Stop Loss đặt ở đâu? (Nếu SL quá xa → Bỏ qua).</li>
  <li>Mình đang vào lệnh vì tín hiệu hay vì sợ lỡ tàu?</li>
</ul>

<p>
  <em>
  📌 <strong>Ghi nhớ:</strong><br/>
  Thị trường giống như xe buýt, chuyến này đi qua sẽ có chuyến khác tới.<br/>
  Thà nuốt nước miếng (tiếc) còn hơn nuốt nước mắt (lỗ).
  </em>
</p>
`,
        level: "ADVANCED",
        tags: JSON.stringify(["Tâm lý", "FOMO", "Cảm xúc"]),
        related: JSON.stringify(["Kỷ luật", "Checklist"]),
        created_at: now,
        updated_at: now,
      },
      {
        id: "fud",
        topic: "PSYCHOLOGY",
        title: "FUD - Sợ Hãi, Nghi Ngờ, Bất An",
        summary:
          "Trạng thái tâm lý khiến bạn luôn nghi ngờ và lo sợ về thị trường.",
        content: `<h2>FUD là gì trong Trading?</h2>

<p>
<strong>FUD (Fear – Uncertainty – Doubt)</strong> là trạng thái tâm lý gồm 
<strong>Sợ hãi – Bất định – Nghi ngờ</strong>, khiến Trader đưa ra quyết định
vội vàng, thiếu logic và đi ngược lại kế hoạch giao dịch ban đầu.
</p>

<p>
Trong thị trường tài chính, FUD hiếm khi xuất hiện một cách ngẫu nhiên.
Nó thường được <strong>khuếch đại bởi tin tức, mạng xã hội, tiêu đề giật gân,
KOL, group chat</strong> nhằm tạo ra sự hoảng loạn trong đám đông.
</p>

<p>
📌 <em>FUD không đánh vào biểu đồ – nó đánh thẳng vào cảm xúc con người.</em>
</p>

<img src="https://simg.zalopay.com.vn/zlp-website/assets/fud_la_gi_1_756e927995.jpg"
alt="FUD trong đầu tư tài chính">

<hr/>

<h3>Ba thành phần cấu thành FUD</h3>

<img src="https://hoclamtrader.com/wp-content/uploads/2025/03/image-14.png"
alt="Fear Uncertainty Doubt trong trading">

<ul>
  <li>
    <strong>Fear (Sợ hãi):</strong><br/>
    Sợ mất tiền, sợ thị trường sập, sợ tài khoản cháy,
    sợ sai thêm sau chuỗi thua lỗ.
  </li>
  <li>
    <strong>Uncertainty (Bất định):</strong><br/>
    Không chắc xu hướng còn tiếp diễn hay không,
    không biết nên giữ hay thoát lệnh.
  </li>
  <li>
    <strong>Doubt (Nghi ngờ):</strong><br/>
    Nghi ngờ hệ thống giao dịch, nghi ngờ phân tích,
    nghi ngờ chính bản thân mình.
  </li>
</ul>

<hr/>

<h3>Biểu hiện phổ biến của FUD</h3>

<img src="https://colombia.unir.net/wp-content/uploads/sites/4/2024/11/Trading-que-es-y-como-funciona2.jpg"
alt="Trader lo lắng vì FUD">

<ul>
  <li>
    <strong>Vừa vào lệnh đã bất an:</strong><br/>
    Setup đúng plan nhưng tâm trí luôn nghĩ đến kịch bản xấu nhất.
  </li>
  <li>
    <strong>Phản ứng quá mức với tin tức:</strong><br/>
    Chỉ cần thấy một tin xấu trên Facebook, Telegram là thoát lệnh ngay,
    dù cấu trúc thị trường chưa hề bị phá.
  </li>
  <li>
    <strong>Kiểm tra giá liên tục:</strong><br/>
    Mỗi vài phút lại mở chart, khiến cảm xúc dao động theo từng cây nến nhỏ.
  </li>
  <li>
    <strong>Mất niềm tin vào hệ thống:</strong><br/>
    Một vài lệnh thua khiến bạn nghi ngờ cả hệ thống đã backtest hàng trăm lần.
  </li>
</ul>

<hr/>

<h3>Hậu quả của FUD trong Trading</h3>

<img src="https://gldt.mql5.vn/content/images/2024/10/z5885456239491_df18e8664bdbd027d9430a5ba72d6ef7.jpg"
alt="Panic sell vì FUD">

<ul>
  <li>
    <strong>Chốt non liên tục:</strong><br/>
    Thoát lệnh ngay trước khi giá chạy mạnh theo đúng hướng dự đoán.
  </li>
  <li>
    <strong>Panic Sell – Bán đúng đáy:</strong><br/>
    Hoảng loạn bán tháo khi giá giảm mạnh,
    đúng lúc dòng tiền lớn bắt đầu mua vào.
  </li>
  <li>
    <strong>Lãi nhỏ – Lỗ lớn:</strong><br/>
    Lãi thì sợ mất nên chốt sớm, lỗ thì gồng vì hy vọng → tài khoản teo dần.
  </li>
  <li>
    <strong>Mất kỷ luật giao dịch:</strong><br/>
    Mỗi lệnh một kiểu, không còn tuân thủ Trading Plan.
  </li>
</ul>

<hr/>

<h3>Cách vượt qua FUD hiệu quả</h3>

<img src="https://fxscouts.com/wp-content/uploads/sites/20/2019/09/trade-types-trade-open_zec8wf.jpg"
alt="Tin vào kế hoạch giao dịch">

<ol>
  <li>
    <strong>Kiểm chứng thông tin:</strong><br/>
    Đừng tin ngay vào tiêu đề giật gân.
    Hãy hỏi: <em>“Tin này có thực sự ảnh hưởng đến cung – cầu hay chỉ là nhiễu tâm lý?”</em>
  </li>
  <li>
    <strong>Tin vào Trading Plan:</strong><br/>
    Nếu lý do vào lệnh vẫn còn hiệu lực và giá chưa chạm SL,
    thì không có lý do gì để thoát lệnh chỉ vì sợ.
  </li>
  <li>
    <strong>Giảm khối lượng giao dịch:</strong><br/>
    FUD xuất hiện khi rủi ro vượt quá sức chịu đựng tâm lý.
    Hãy giảm volume xuống mức bạn có thể ngủ ngon.
  </li>
  <li>
    <strong>Hạn chế tiêu thụ tin tức nhiễu:</strong><br/>
    Trong ngắn hạn, <strong>Price Action phản ánh tất cả</strong>.
    Biểu đồ luôn trung thực hơn cảm xúc đám đông.
  </li>
  <li>
    <strong>Tư duy xác suất:</strong><br/>
    Một lệnh thua không nói lên điều gì.
    Kết quả chỉ có ý nghĩa trên chuỗi dài hạn.
  </li>
</ol>

<hr/>

<h3>Case study: Bán vì tin xấu</h3>

<img src="https://cdn-images.vtv.vn/zoom/700_438/2022/4/1/phan-biet-tin-that-tin-gia-1648775736640532384164.jpg"
alt="Thoát lệnh vì tin xấu">

<p>
Bạn đang giữ lệnh Buy theo xu hướng tăng.
Một tin xấu xuất hiện trên mạng xã hội với tiêu đề tiêu cực,
bạn hoảng loạn đóng lệnh.
</p>

<ol>
  <li>Sau đó giá chỉ điều chỉnh nhẹ rồi tiếp tục tăng mạnh.</li>
  <li>Nhận ra: Tin tức không phá cấu trúc, chỉ phá tâm lý.</li>
  <li>Bài học: Không thoát lệnh nếu cấu trúc và kế hoạch chưa bị phá vỡ.</li>
</ol>

<hr/>

<h3>Checklist chống FUD (Áp dụng ngay)</h3>

<ul>
  <li>Tin này đã được kiểm chứng chưa?</li>
  <li>Cấu trúc thị trường có thực sự bị phá không?</li>
  <li>Lý do vào lệnh ban đầu còn hiệu lực không?</li>
  <li>Volume hiện tại có quá lớn với tâm lý không?</li>
  <li>Mình đang phản ứng theo cảm xúc hay theo kế hoạch?</li>
</ul>

<p>
<em>
📌 <strong>Ghi nhớ:</strong><br/>
FUD và FOMO là hai mặt của cùng một đồng xu cảm xúc.<br/>
Trader tồn tại lâu dài là người <strong>lọc nhiễu, giữ kỷ luật
và tin vào kế hoạch</strong>.
</em>
</p>
`,
        level: "BASIC",
        tags: JSON.stringify(["Tâm lý", "Tin tức", "Quản lý cảm xúc"]),
        related: JSON.stringify(["FOMO", "Kế hoạch giao dịch"]),
        created_at: now,
        updated_at: now,
      },
      {
        id: "overtrading",
        topic: "PSYCHOLOGY",
        title: "Overtrading - Giao Dịch Quá Nhiều",
        summary:
          "Vào lệnh liên tục không chọn lọc, dẫn đến thua lỗ và mất kiểm soát.",
        content: `
<h2>Overtrading là gì?</h2>
<p>Là tình trạng giao dịch quá nhiều, vượt quá mức cần thiết và không tuân thủ kế hoạch. Đây là "kẻ giết người thầm lặng" tài khoản của Trader mới.</p>
<img src="https://substack-post-media.s3.amazonaws.com/public/images/3a294a77-24e4-4675-9197-042a9f6f093f_1103x788.jpeg" alt="Overtrading - Giao dịch quá nhiều">

<h3>Biểu hiện</h3>
<ul>
  <li>Trade mọi lúc, mọi nơi, mọi kèo. Mở chart lên là phải tìm điểm vào lệnh bằng được.</li>
  <li>Không có tín hiệu rõ ràng (Setup) vẫn cố tình vào lệnh.</li>
  <li>Ngày trade 10–20 lệnh, thậm chí hàng trăm lệnh Scalping không kiểm soát.</li>
  <li>Trade để “giết thời gian” hoặc tìm cảm giác mạnh (như đánh bạc).</li>
  <li>Muốn gỡ lại lệnh thua trước đó thật nhanh.</li>
</ul>

<h3>Hậu quả</h3>
<ul>
  <li><strong>Phí giao dịch (Commission/Spread) bào mòn tài khoản:</strong> Bạn làm giàu cho sàn chứ không phải cho mình.</li>
  <li><strong>Mệt mỏi, mất tỉnh táo:</strong> Dẫn đến những quyết định sai lầm liên tiếp.</li>
  <li><strong>Thua lỗ lớn:</strong> Thường kết thúc bằng một chuỗi thua lỗ không thể kiểm soát.</li>
</ul>

<h3>Cách khắc phục Overtrading</h3>
<ol>
  <li><strong>Quy định số lệnh tối đa:</strong> Ví dụ: Chỉ trade tối đa 3 lệnh/ngày. Thắng hay thua cũng nghỉ.</li>
  <li><strong>Chỉ trade tại các vùng quan trọng (Key Level):</strong> Kiên nhẫn chờ giá đến cản cứng mới hành động.</li>
  <li><strong>Ghi nhật ký giao dịch:</strong> Review lại các lệnh cuối tuần. Bạn sẽ thấy 80% lệnh thua đến từ những lệnh "vào đại".</li>
  <li><strong>Rời màn hình:</strong> Nếu không có setup đẹp, hãy tắt máy và làm việc khác.</li>
</ol>
<h3>Case study: Ngày vào 15 lệnh</h3>
<p>Bạn vào 15 lệnh trong một ngày sideway, kết quả âm phí + âm tâm lý.</p>
<ol>
  <li>Đếm lại số lệnh có setup hợp lệ: thường &lt; 3.</li>
  <li>Xác định khung giờ hiệu quả nhất của bạn (ví dụ phiên Âu/Mỹ).</li>
  <li>Viết quy tắc: Không vào lệnh khi giá ở giữa vùng, chỉ chờ chạm biên.</li>
</ol>

<h3>Checklist áp dụng ngay</h3>
<ul>
  <li>Hôm nay tối đa bao nhiêu lệnh?</li>
  <li>Chỉ vào lệnh tại Key Level?</li>
  <li>Setup có đủ điều kiện xác nhận?</li>
  <li>Có lý do nghỉ sau chuỗi thua?</li>
</ul>

<h3>Bài tập rèn luyện</h3>
<ul>
  <li>Tuần tới: Mỗi ngày tối đa 2 lệnh; nếu vi phạm, nghỉ 24h.</li>
  <li>Thêm cột “setup hợp lệ?” trong nhật ký giao dịch.</li>
</ul>
<p><em>📌 <strong>Ghi nhớ:</strong> Market không trả tiền cho sự chăm chỉ (số lượng lệnh), chỉ trả tiền cho sự kiên nhẫn (chất lượng lệnh).</em></p>
`,
        level: "BASIC",
        tags: JSON.stringify(["Kỷ luật", "Quản lý vốn", "Nhật ký giao dịch"]),
        related: JSON.stringify(["Kế hoạch giao dịch", "Kiên nhẫn"]),
        created_at: now,
        updated_at: now,
      },
      {
        id: "revenge-trading",
        topic: "PSYCHOLOGY",
        title: "Revenge Trading - Giao Dịch Trả Thù",
        summary:
          "Cay cú sau khi thua lỗ và muốn gỡ lại ngay lập tức, dẫn đến cháy tài khoản.",
        content: `
<h2>Revenge Trading là gì?</h2>
<p>Là hành động giao dịch với mục đích <strong>trả thù thị trường</strong> sau khi vừa bị thua lỗ. Trader cảm thấy bị thị trường "lấy mất tiền" và muốn đòi lại ngay lập tức.</p>
<img src="https://i.ytimg.com/vi/hZJy_cm-fZs/maxresdefault.jpg" alt="Revenge Trading - Tức giận">

<h3>Biểu hiện</h3>
<ul>
  <li>Muốn gỡ lỗ ngay lập tức sau khi lệnh vừa bị Stop Loss (SL).</li>
  <li>Thua 1 lệnh → vào lệnh lớn hơn (gấp thếp - Martingale) để gỡ nhanh.</li>
  <li>Bỏ qua chiến lược, vào lệnh theo cảm xúc cay cú.</li>
  <li>Đẩy rủi ro cao bất thường (All-in).</li>
  <li>Tâm lý: "Tao không tin mày tăng mãi/giảm mãi được".</li>
</ul>

<h3>Hậu quả</h3>
<ul>
  <li>Cháy tài khoản trong tích tắc.</li>
  <li>Mất niềm tin vào bản thân và phương pháp giao dịch.</li>
  <li>Gây ra những tổn thương tâm lý lâu dài.</li>
</ul>

<h3>Làm gì khi bị Stop Loss?</h3>
<ol>
  <li><strong>Chấp nhận sự thật:</strong> Thua lỗ là một phần của cuộc chơi (như chi phí kinh doanh).</li>
  <li><strong>Ngừng giao dịch ngay lập tức:</strong> Đứng dậy, đi dạo, uống nước, hoặc tắt máy nghỉ ngơi ít nhất 1-2 tiếng.</li>
  <li><strong>Không tăng volume:</strong> Tuyệt đối không gấp thếp để gỡ.</li>
  <li><strong>Review lại lệnh thua:</strong> Khi bình tĩnh lại, hãy xem tại sao mình thua (do thị trường hay do mình sai).</li>
</ol>
<h3>Case study: Chuỗi thua 3 lệnh</h3>
<p>Sau 3 lệnh SL liên tiếp, bạn muốn gấp thếp để lấy lại. Đây là lúc rủi ro cao nhất.</p>
<ol>
  <li>Khóa tài khoản giao dịch 12 giờ.</li>
  <li>Viết lại lý do từng lệnh thua: setup thiếu gì, tâm lý ra sao.</li>
  <li>Lập quy tắc: Sau 2 SL liên tiếp, giảm 50% volume và chỉ đánh thuận xu hướng.</li>
</ol>

<h3>Checklist áp dụng ngay</h3>
<ul>
  <li>Đã nghỉ đủ thời gian để bình tĩnh?</li>
  <li>Lệnh kế tiếp có phải để gỡ lỗ?</li>
  <li>Volume có vượt quá quy tắc quản trị vốn?</li>
  <li>Lý do vào lệnh có độc lập với cảm xúc?</li>
</ul>
<p><em>📌 <strong>Ghi nhớ:</strong> 1 lệnh thua + cảm xúc cay cú = chuỗi thua liên tiếp (Cháy tài khoản). Hãy biết dừng đúng lúc.</em></p>
`,
        level: "ADVANCED",
        tags: JSON.stringify(["Cảm xúc", "Rủi ro", "Quản lý vốn"]),
        related: JSON.stringify(["Quản lý vốn", "Nhật ký giao dịch"]),
        created_at: now,
        updated_at: now,
      },
      {
        id: "greed",
        topic: "PSYCHOLOGY",
        title: "Greed - Lòng Tham",
        summary:
          "Không chịu chốt lời, muốn ăn trọn con sóng, dẫn đến mất lãi hoặc thua ngược.",
        content: `<h2>Lòng tham (Greed) trong Trading là gì?</h2>

<p>
<strong>Lòng tham (Greed)</strong> là trạng thái tâm lý khiến Trader
muốn kiếm <strong>nhiều tiền hơn, nhanh hơn</strong> so với kế hoạch ban đầu.
Nó thường xuất hiện khi lệnh đang có lợi nhuận và cảm xúc bắt đầu chi phối lý trí.
</p>

<p>
Khác với FOMO (tham gia muộn vì sợ bỏ lỡ),
<strong>Greed xuất hiện khi bạn đã đúng</strong> – và chính điều đó làm nó nguy hiểm hơn.
</p>

<p>
📌 <em>Lòng tham không khiến bạn vào lệnh sai, mà khiến bạn phá vỡ cách thoát lệnh.</em>
</p>

<img src="https://vietjack.me/storage/uploads/images/80/83-1742277719.jpg"
alt="Greed - Lòng tham tiền bạc">

<hr/>

<h3>Bản chất của lòng tham trong Trading</h3>

<img src="https://t.cmx-cdn.com/songdep.com.vn/files/dieunguyen/2022/05/12/dung-tham-tien-nay-neu-khong-muon-than-bai-danh-liet-3-215256.jpg"
alt="Lòng tham và tiền bạc">

<p>
Lòng tham thường bắt nguồn từ suy nghĩ:
</p>

<ul>
  <li>“Giá đã đi đúng rồi, chắc còn đi xa nữa.”</li>
  <li>“Nếu chốt bây giờ, nhỡ nó chạy thêm thì sao?”</li>
  <li>“Lệnh này mà gồng được là ăn đậm.”</li>
</ul>

<p>
Những suy nghĩ này khiến Trader:
<strong>tự ý thay đổi kế hoạch giao dịch</strong>,
mở rộng TP, bỏ SL hoặc tăng khối lượng không kiểm soát.
</p>

<hr/>

<h3>Biểu hiện phổ biến của Greed</h3>

<img src="https://gldt.mql5.vn/content/images/2023/08/kiem-soat-tam-ly-giao-dich-750x375.png"
alt="Trader tham lam khi đang có lãi">

<ul>
  <li>
    <strong>Không chịu chốt lời (Take Profit):</strong><br/>
    Giá đã đạt TP theo kế hoạch nhưng vẫn dời TP ra xa hơn
    vì nghĩ thị trường “còn cho thêm”.
  </li>

  <li>
    <strong>Nhồi lệnh (Pyramiding) sai cách:</strong><br/>
    Thấy lệnh đang lãi liền vào thêm lệnh mới với volume lớn,
    không dựa trên cấu trúc hay điểm vào hợp lý.
  </li>

  <li>
    <strong>Dời Stop Loss vô tội vạ:</strong><br/>
    Dời SL về hòa quá sớm hoặc thậm chí bỏ luôn SL
    vì sợ bị quét rồi giá chạy tiếp.
  </li>

  <li>
    <strong>Lãi lớn → hòa vốn → lỗ:</strong><br/>
    Một lệnh đang lãi đẹp nhưng vì tiếc không chốt,
    cuối cùng quay về hòa vốn hoặc âm ngược.
  </li>
</ul>

<hr/>

<h3>Hậu quả của lòng tham</h3>

<img src="https://cafefcdn.com/zoom/700_438/203337114487263232/2025/10/2/avatar1759424095028-1759424095313369080280.jpg"
alt="Thua lỗ vì không chốt lời">

<ul>
  <li>
    <strong>Mất lợi nhuận đã có:</strong><br/>
    Thị trường không lấy tiền của bạn,
    chính bạn trao nó lại vì không chịu chốt.
  </li>

  <li>
    <strong>Rối loạn tâm lý giao dịch:</strong><br/>
    Sau vài lần “lãi hóa lỗ”, bạn bắt đầu nghi ngờ chính mình
    và sợ không dám gồng những lệnh sau.
  </li>

  <li>
    <strong>Tạo thói quen xấu:</strong><br/>
    Luôn mong “ăn dày”, dẫn đến overtrade và tăng rủi ro tài khoản.
  </li>
</ul>

<hr/>

<h3>Cách kiểm soát lòng tham hiệu quả</h3>

<img src="https://mtr-cdn.com/images/longterm_trading_mtrading.2e16d0ba.fill-1200x630.jpg"
alt="Kế hoạch giao dịch rõ ràng">

<ol>
  <li>
    <strong>Có kế hoạch chốt lời rõ ràng:</strong><br/>
    Đặt Take Profit ngay khi vào lệnh và coi nó là một phần bắt buộc của plan,
    không phải tùy hứng.
  </li>

  <li>
    <strong>Chốt lời từng phần:</strong><br/>
    Khi giá đạt R:R 1:1 hoặc 1:2,
    hãy chốt 30–50% lợi nhuận để “đút túi”.
    Phần còn lại để thị trường quyết định.
  </li>

  <li>
    <strong>Dùng Trailing Stop đúng cách:</strong><br/>
    Dời SL theo cấu trúc (higher low / lower high),
    không dời theo cảm xúc.
  </li>

  <li>
    <strong>Chấp nhận bỏ lỡ phần cuối:</strong><br/>
    Không ai bắt trọn 100% con sóng.
    Trader sống lâu là Trader ăn phần giữa ổn định.
  </li>

  <li>
    <strong>Tư duy thực tế:</strong><br/>
    Đừng tìm cách làm giàu nhanh.
    <strong>Lợi nhuận đều đặn</strong> quan trọng hơn một vài cú thắng lớn.
  </li>
</ol>

<hr/>

<h3>Case study: Lãi thành lỗ vì Greed</h3>

<img src="https://3gang.vn/wp-content/uploads/2022/09/chot-loi-chung-khoan-1.png"
alt="Không chốt lời vì tham lam">

<p>
Bạn vào lệnh Buy đúng xu hướng.
Giá đi mạnh, đạt TP theo kế hoạch,
nhưng bạn dời TP xa hơn vì nghĩ “sắp breakout”.
</p>

<ol>
  <li>Giá quay đầu điều chỉnh mạnh.</li>
  <li>Lệnh từ lãi lớn → hòa vốn → âm nhẹ.</li>
  <li>Bài học: Thị trường không quan tâm bạn tiếc bao nhiêu.</li>
</ol>

<hr/>

<h3>Checklist chống Greed (tự hỏi trước khi dời TP)</h3>

<ul>
  <li>Mình dời TP vì tín hiệu mới hay vì cảm xúc?</li>
  <li>Kế hoạch ban đầu có thay đổi không?</li>
  <li>Đã chốt được phần lợi nhuận nào chưa?</li>
  <li>Nếu lệnh quay đầu, mình có chấp nhận mất phần lãi này không?</li>
</ul>

<p>
<em>
📌 <strong>Ghi nhớ:</strong><br/>
Thị trường không nợ bạn thêm lợi nhuận.<br/>
<strong>Chốt lời không bao giờ là sai.</strong><br/>
Kỷ luật đánh bại lòng tham – và giữ bạn tồn tại lâu dài.
</em>
</p>
`,
        level: "BASIC",
        tags: JSON.stringify(["Tâm lý", "Chốt lời", "Gồng lãi"]),
        related: JSON.stringify(["Take Profit", "Trailing Stop"]),
        created_at: now,
        updated_at: now,
      },
      {
        id: "fear",
        topic: "PSYCHOLOGY",
        title: "Fear - Nỗi Sợ Hãi",
        summary: "Sợ hãi khiến bạn bỏ lỡ cơ hội hoặc thoát lệnh quá sớm.",
        content: `<h2>Nỗi sợ hãi (Fear) trong Trading là gì?</h2>

<p>
<strong>Fear (Nỗi sợ hãi)</strong> là trạng thái tâm lý khiến Trader tê liệt, không dám hành động dù nhìn thấy cơ hội rõ ràng, hoặc hành động sai lầm để trốn tránh rủi ro.
Trong Trading, nỗi sợ thường xuất phát từ việc <strong>sợ mất tiền</strong> hoặc <strong>sợ sai</strong>.
</p>

<img src="https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=900" alt="Fear in trading">

<hr/>

<h3>Biểu hiện của Nỗi sợ hãi</h3>
<ul>
  <li>
    <strong>Không dám vào lệnh (Analysis Paralysis):</strong><br/>
    Phân tích rất kỹ, thấy setup đẹp, nhưng ngập ngừng không dám click chuột vì sợ thua.
    Sau đó giá chạy đúng ý thì tiếc nuối.
  </li>
  <li>
    <strong>Thoát lệnh quá sớm:</strong><br/>
    Vừa thấy xanh một chút là chốt ngay vì sợ giá quay đầu, bỏ lỡ phần lợi nhuận lớn phía sau.
  </li>
  <li>
    <strong>Dời Stop Loss về hòa quá sớm:</strong><br/>
    Vì sợ lỗ nên vội vàng dời SL, kết quả là bị quét hòa vốn trước khi giá chạy đúng hướng.
  </li>
  <li>
    <strong>Không dám nhìn biểu đồ khi đang có lệnh:</strong><br/>
    Vào lệnh xong là tắt máy hoặc tim đập chân run, không chịu được áp lực.
  </li>
</ul>

<img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900" alt="Trader stress">

<hr/>

<h3>Vòng lặp: Fear → FOMO → Loss</h3>
<p>
Nỗi sợ hãi thường dẫn đến FOMO.
</p>
<ol>
  <li>Sợ thua → Không vào lệnh đẹp.</li>
  <li>Thấy giá chạy mạnh → Tiếc nuối (bắt đầu nóng lòng).</li>
  <li>Giá chạy quá xa → Sợ bỏ lỡ (FOMO) → Nhảy vào đu đỉnh.</li>
  <li>Giá đảo chiều → Cắt lỗ → Lại sợ hãi.</li>
</ol>

<hr/>

<h3>Case Study: Nỗi ám ảnh từ quá khứ</h3>
<p>
Trader A vừa thua liên tiếp 3 lệnh.
Lệnh thứ 4 xuất hiện setup rất đẹp đúng hệ thống.
Nhưng vì ám ảnh 3 lệnh thua trước, A chần chừ không vào.
Kết quả: Lệnh thứ 4 thắng lớn (đủ bù đắp 3 lệnh thua kia + có lãi).
A tiếc nuối và tâm lý càng tệ hơn.
</p>
<p><em>📌 Bài học: Mỗi lệnh là một xác suất độc lập. Lệnh thua trước không ảnh hưởng đến xác suất của lệnh sau.</em></p>

<hr/>

<h3>Cách vượt qua nỗi sợ hãi</h3>
<ul>
  <li><strong>Giảm khối lượng (Volume):</strong> Hãy trade với số tiền nhỏ đến mức bạn không cảm thấy gì nếu mất nó.</li>
  <li><strong>Chấp nhận rủi ro trước:</strong> Xác định số tiền mất tối đa (Stop Loss) và chấp nhận nó như "chi phí kinh doanh".</li>
  <li><strong>Tin tưởng hệ thống:</strong> Nếu hệ thống đã được kiểm chứng (backtest), hãy cứ tuân thủ.</li>
  <li><strong>Tư duy xác suất:</strong> Thua một lệnh không có nghĩa là bạn sai, chỉ là xác suất không rơi vào bạn lúc đó.</li>
</ul>

<p>
<em>
📌 <strong>Ghi nhớ:</strong><br/>
Sợ hãi quá mức cũng nguy hiểm như tham lam.<br/>
Nếu không dám chấp nhận rủi ro, bạn không thể có lợi nhuận.
</em>
</p>
`,
        level: "ADVANCED",
        tags: JSON.stringify(["Tâm lý", "Sợ hãi", "Kỷ luật"]),
        related: JSON.stringify(["Quản lý vốn", "Backtest"]),
        created_at: now,
        updated_at: now,
      },
      {
        id: "confirmation-bias",
        topic: "PSYCHOLOGY",
        title: "Confirmation Bias - Thiên Kiến Xác Nhận",
        summary:
          "Chỉ tin những gì mình muốn tin, bỏ qua các dấu hiệu cảnh báo rủi ro.",
        content: `<h2>Confirmation Bias là gì?</h2>

<p>
  <strong>Confirmation Bias (Thiên kiến xác nhận)</strong> là một sai lệch tâm lý
  khiến Trader chỉ tìm kiếm, diễn giải và ghi nhớ
  những thông tin <strong>ủng hộ cho quan điểm sẵn có của mình</strong>,
  trong khi vô thức <strong>bỏ qua, xem nhẹ hoặc phủ nhận</strong>
  các tín hiệu trái chiều.
</p>

<p>
  Khi đã có bias (thiên kiến) Buy hoặc Sell,
  Trader không còn đọc thị trường một cách khách quan,
  mà bắt đầu <strong>tìm bằng chứng để chứng minh mình đúng</strong>,
  thay vì đánh giá xem thị trường đang thực sự làm gì.
</p>

<img 
  src="https://vietnambusinessinsider.vn/uploads/images/2023/06/13/thien-kien-xac-nhan-confirmation-bias-trong-tam-ly-hoc-4-1686634811.jpeg"
  alt="Confirmation Bias - Mê cung tư duy"
  loading="lazy"
/>

<hr/>

<h3>Confirmation Bias hình thành như thế nào?</h3>

<p>
  Bộ não con người ghét cảm giác <strong>bị sai</strong>.
  Khi bạn đã đưa ra một quyết định (Buy/Sell),
  não bộ sẽ cố gắng bảo vệ cái tôi bằng cách:
</p>

<ul>
  <li>Tìm thông tin củng cố quyết định đó</li>
  <li>Phớt lờ tín hiệu phủ nhận quyết định đó</li>
  <li>Giải thích mọi thứ theo hướng có lợi cho mình</li>
</ul>

<p>
  Trong Trading, điều này cực kỳ nguy hiểm,
  vì thị trường <strong>không quan tâm bạn nghĩ gì</strong>.
  Giá chỉ phản ánh cung – cầu hiện tại,
  không có nghĩa vụ phải đi theo nhận định của bất kỳ ai.
</p>

<hr/>

<h3>Biểu hiện phổ biến của Confirmation Bias</h3>

<ul>
  <li>
    <strong>1. “Bẻ chart” để hợp nhận định:</strong><br/>
    Bạn muốn Buy nên cố vẽ trendline, hỗ trợ – kháng cự,
    hoặc mô hình giá sao cho <em>trông giống tín hiệu Buy</em>,
    dù cấu trúc thị trường thực tế không ủng hộ.
    <br/><br/>
    <img 
      src="https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/Head%20and%20shoulders.png/jcr:content/renditions/original-size.webp"
      alt="Bẻ chart theo nhận định chủ quan"
      loading="lazy"
    />
  </li>

  <li>
    <strong>2. Lọc tin tức theo cảm xúc:</strong><br/>
    Khi đang giữ lệnh Buy,
    bạn chỉ đọc tin tốt, bài phân tích bullish,
    bỏ qua hoặc xem nhẹ tin xấu.
    Ngược lại, khi Sell thì chỉ tìm tin tiêu cực.
  </li>

  <li>
    <strong>3. Hỏi ý kiến chọn lọc:</strong><br/>
    Bạn chỉ hỏi hoặc nghe ý kiến từ những người
    có cùng quan điểm Buy/Sell với mình,
    nhằm củng cố niềm tin rằng mình đang đúng.
  </li>

  <li>
    <strong>4. Phớt lờ tín hiệu đảo chiều rõ ràng:</strong><br/>
    Mặc dù thị trường đã phá cấu trúc,
    xuất hiện nến đảo chiều mạnh,
    bạn vẫn cố giữ lệnh vì “chắc chỉ là cú quét SL”.
  </li>
</ul>

<hr/>

<h3>Vì sao Confirmation Bias cực kỳ nguy hiểm?</h3>

<ul>
  <li>Làm Trader mất khả năng đọc thị trường khách quan</li>
  <li>Biến phân tích kỹ thuật thành sự ngụy biện cảm xúc</li>
  <li>Khiến việc cắt lỗ trở nên rất khó khăn</li>
  <li>Dẫn đến gồng lỗ, overconfidence và cháy tài khoản</li>
</ul>

<p>
  Một sự thật quan trọng:
  <strong>Trader thua lỗ không phải vì thiếu kiến thức,
  mà vì họ chỉ sử dụng kiến thức để chứng minh mình đúng</strong>.
</p>

<hr/>

<h3>Cách khắc phục Confirmation Bias hiệu quả</h3>

<h4>1. Áp dụng tư duy phản biện (Devil’s Advocate)</h4>
<p>
  Trước mỗi lệnh, hãy bắt buộc bản thân trả lời:
</p>
<ul>
  <li>“Có lý do nào để KHÔNG vào lệnh này không?”</li>
  <li>“Nếu mình sai, thị trường sẽ trông như thế nào?”</li>
  <li>“Phe đối lập (Buy/Sell ngược lại) đang nhìn thấy điều gì?”</li>
</ul>

<h4>2. Để biểu đồ nói, đừng nói thay biểu đồ</h4>
<p>
  Đừng bắt ép biểu đồ phải khớp với suy nghĩ của bạn.
  Hãy đọc những gì giá đang thể hiện:
</p>

<ul>
  <li>Cấu trúc: HH/HL hay LH/LL?</li>
  <li>Xu hướng chính là gì?</li>
  <li>Giá đang ở vùng giá trị hay vùng rủi ro?</li>
</ul>

<img 
  src="https://i0.wp.com/daututudau.net/wp-content/uploads/2025/08/bc662-image-442.png?resize=792%2C354&ssl=1"
  alt="Đọc biểu đồ khách quan"
  loading="lazy"
/>

<h4>3. Lập kịch bản đa chiều trước khi vào lệnh</h4>
<p>
  Trader chuyên nghiệp luôn có <strong>ít nhất 2 kịch bản</strong>:
</p>

<ul>
  <li>Nếu giá đi đúng hướng → quản lý lệnh thế nào?</li>
  <li>Nếu giá đi ngược → thoát lệnh ở đâu?</li>
</ul>

<p>
  Điều này giúp bạn <strong>chấp nhận sai lầm nhanh hơn</strong>
  khi thị trường không đi theo kỳ vọng.
</p>

<h4>4. Chấp nhận sai là một phần của Trading</h4>
<p>
  Bị hit Stop Loss không có nghĩa bạn kém.
  Nó chỉ có nghĩa là:
  <strong>xác suất không đứng về phía bạn ở lệnh đó</strong>.
</p>

<hr/>

<h3>Case Study: Bẻ chart để hợp nhận định</h3>

<img 
  src="https://trangtamly.blog/wp-content/uploads/2020/10/confirmation-bias.png"
  alt="Confirmation Bias - Bẻ chart"
  loading="lazy"
/>

<p>
  Bạn muốn Buy nên cố vẽ trendline ngược xu hướng,
  hoặc phóng to/thu nhỏ chart
  để tìm một góc nhìn ủng hộ lệnh Buy.
</p>

<ul>
  <li><strong>Giải pháp 1:</strong> Xóa toàn bộ vẽ vời, chỉ giữ Market Structure.</li>
  <li><strong>Giải pháp 2:</strong> Chuyển sang khung thời gian lớn hơn.</li>
  <li><strong>Giải pháp 3:</strong> Yêu cầu tối thiểu 2–3 confluence độc lập.</li>
</ul>

<hr/>

<h3>Checklist chống Confirmation Bias (Áp dụng ngay)</h3>

<ul>
  <li>Mình có đang chỉ đọc tin thuận chiều không?</li>
  <li>Có tín hiệu ngược chiều rõ ràng nào bị bỏ qua?</li>
  <li>Cấu trúc thị trường hiện tại nói gì?</li>
  <li>Nếu mình sai, Stop Loss ở đâu?</li>
  <li>Quyết định này dựa trên chart hay cái tôi?</li>
</ul>

<img 
  src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/khiem_ton_la_gi_1_7a474c3fd6.png"
  alt="Sự khiêm tốn trong trading"
  loading="lazy"
/>

<p>
  📌 <strong>Ghi nhớ:</strong><br/>
  Trader giỏi không phải là người luôn đúng.<br/>
  Trader giỏi là người <strong>sai nhanh, sửa nhanh và bảo toàn vốn</strong>.
</p>
`,
        level: "ADVANCED",
        tags: JSON.stringify(["Tư duy", "Phân tích", "Khách quan"]),
        related: JSON.stringify([
          "Phân tích đa khung thời gian",
          "Tư duy phản biện",
        ]),
        created_at: now,
        updated_at: now,
      },
      {
        id: "loss-aversion",
        topic: "PSYCHOLOGY",
        title: "Loss Aversion - Sợ Thua Lỗ",
        summary:
          "Giữ lệnh lỗ quá lâu vì không muốn chấp nhận sai lầm, biến lỗ nhỏ thành lỗ lớn.",
        content: `
<h2>Loss Aversion (Ác cảm mất mát)</h2>
<p>Trong tâm lý học hành vi, nỗi đau khi mất tiền thường lớn gấp đôi niềm vui khi kiếm được cùng một số tiền. Do đó, Trader có xu hướng né tránh hiện thực hóa khoản lỗ.</p>
<img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800" alt="Loss Aversion - Sợ thua lỗ" >

<h3>Biểu hiện</h3>
<ul>
  <li><strong>Gồng lỗ (Hold to die):</strong> Giữ lệnh lỗ quá lâu với hy vọng giá sẽ quay đầu "về bờ".</li>
  <li><strong>Không đặt Stop Loss:</strong> Hoặc dời Stop Loss ra xa khi giá tiến lại gần.</li>
  <li><strong>Tự lừa dối:</strong> "Chưa bán là chưa lỗ" (thực tế Equity đã giảm).</li>
  <li>Biến lệnh Scalping ngắn hạn thành lệnh Swing dài hạn bất đắc dĩ.</li>
</ul>

<h3>Hậu quả</h3>
<ul>
  <li>Chôn vốn: Không còn tiền để vào các cơ hội đẹp khác.</li>
  <li>Tâm lý nặng nề, căng thẳng kéo dài.</li>
  <li>Rủi ro cháy tài khoản nếu thị trường đi một mạch không hồi.</li>
</ul>

<h3>Cách khắc phục</h3>
<ol>
  <li><strong>Luôn đặt Stop Loss (Hard SL):</strong> Đặt ngay khi vào lệnh và TUYỆT ĐỐI KHÔNG DỜI SL KHI LỆNH ĐANG LỖ.</li>
  <li><strong>Coi cắt lỗ là chi phí:</strong> Giống như chi phí nhập hàng, tiền điện, tiền nước trong kinh doanh truyền thống.</li>
  <li><strong>Quy tắc 2%:</strong> Không bao giờ rủi ro quá 2% tài khoản cho một lệnh. Mất 2% rất dễ gỡ lại.</li>
</ol>
<h3>Case study: Gồng lỗ về hòa</h3>
<p>Bạn Buy ở 100, giá về 95. Bạn dời SL ra xa, hy vọng hồi về hòa vốn.</p>
<ol>
  <li>Đánh giá lại cấu trúc: Nếu phá HL → xu hướng giảm, không hy vọng.</li>
  <li>Chọn phương án cắt lỗ theo plan, giữ vốn cho cơ hội tốt hơn.</li>
  <li>Ghi lại nguyên nhân: Không đặt SL/vi phạm quy tắc.</li>
</ol>

<h3>Checklist áp dụng ngay</h3>
<ul>
  <li>Đã có SL cố định chưa?</li>
  <li>RR có hợp lý (≥ 1:2)?</li>
  <li>Cấu trúc hiện tại ủng hộ lệnh không?</li>
  <li>Mình có đang trì hoãn thừa nhận sai lầm?</li>
</ul>
<p><em>📌 <strong>Ghi nhớ:</strong> Cắt lỗ là cách duy nhất để bảo vệ vốn. Còn vốn là còn cơ hội.</em></p>
`,
        level: "ADVANCED",
        tags: JSON.stringify(["Cắt lỗ", "Quản lý rủi ro", "Tâm lý"]),
        related: JSON.stringify(["Stop Loss", "Quản lý vốn"]),
        created_at: now,
        updated_at: now,
      },
      {
        id: "overconfidence",
        topic: "PSYCHOLOGY",
        title: "Overconfidence - Quá Tự Tin",
        summary:
          "Ảo tưởng sức mạnh sau chuỗi thắng, dẫn đến chủ quan và thua lỗ lớn.",
        content: `
<h2>Overconfidence (Quá tự tin)</h2>
<p>Thường xuất hiện sau một chuỗi lệnh thắng liên tiếp (Winning Streak). Trader bắt đầu nghĩ mình là "thiên tài", đã "giải mã" được thị trường.</p>
<img src="https://i0.wp.com/bloganchoi.com/wp-content/uploads/2024/08/overconfidence-effect-la-gi-1.jpg" alt="Overconfidence - Quá tự tin" >

<h3>Biểu hiện</h3>
<ul>
  <li><strong>Coi thường thị trường:</strong> Nghĩ rằng thị trường dễ kiếm tiền.</li>
  <li><strong>Tăng khối lượng (Volume) vô tội vạ:</strong> "Kèo này chắc chắn thắng, All-in thôi".</li>
  <li><strong>Bỏ qua quy tắc:</strong> Không cần chờ tín hiệu xác nhận, vào lệnh sớm.</li>
  <li>Không đặt Stop Loss vì nghĩ "mình đọc được thị trường".</li>
</ul>

<h3>Hậu quả</h3>
<ul>
  <li>"Market luôn trừng phạt sự tự mãn". Thường thì lệnh thua lớn nhất sẽ đến ngay sau chuỗi thắng lớn nhất.</li>
  <li>Mất sạch lợi nhuận kiếm được trước đó, thậm chí âm vào vốn gốc.</li>
</ul>

<h3>Cách giữ đôi chân trên mặt đất</h3>
<ol>
  <li><strong>Luôn khiêm tốn:</strong> Nhớ rằng thị trường luôn đúng, bạn chỉ là người đi theo dòng tiền.</li>
  <li><strong>Giữ nguyên kỷ luật:</strong> Dù thắng 10 lệnh liên tiếp, lệnh thứ 11 vẫn phải tuân thủ đúng volume và setup như lệnh đầu tiên.</li>
  <li><strong>Rút lãi:</strong> Khi có lãi lớn, hãy rút một phần tiền ra để tiêu xài hoặc đầu tư vào tài sản khác. Tiền trong tài khoản Trading chỉ là con số.</li>
</ol>
<h3>Case study: Sau chuỗi thắng</h3>
<p>Bạn thắng liên tục 6 lệnh, lệnh thứ 7 tăng volume gấp đôi và vào sớm.</p>
<ol>
  <li>Giữ nguyên volume chuẩn theo quy tắc.</li>
  <li>Chờ xác nhận đủ confluence.</li>
  <li>Chốt một phần lợi nhuận để giảm tâm lý “phải thắng tiếp”.</li>
</ol>

<h3>Checklist áp dụng ngay</h3>
<ul>
  <li>Volume có vượt mức cho phép?</li>
  <li>Có tối thiểu 2-3 điều kiện xác nhận độc lập?</li>
  <li>Nếu lệnh thua, tổng drawdown vẫn trong ngưỡng?</li>
  <li>Mình có đang tự mãn?</li>
</ul>
<p><em>📌 <strong>Ghi nhớ:</strong> Tự tin là tốt, nhưng tự tin thái quá là thuốc độc. Hãy luôn tôn trọng rủi ro.</em></p>
`,
        level: "ADVANCED",
        tags: JSON.stringify(["Tâm lý", "Quản lý vốn", "Khiêm tốn"]),
        related: JSON.stringify(["Kỷ luật", "Tư duy xác suất"]),
        created_at: now,
        updated_at: now,
      },
      {
        id: "hindsight-bias",
        topic: "PSYCHOLOGY",
        title: "Hindsight Bias - Thiên Kiến Nhận Thức Muộn",
        summary:
          "Ảo tưởng rằng mình đã biết trước kết quả, gây ra sự tiếc nuối và ảo tưởng năng lực.",
        content: `<h2>Hindsight Bias ("Biết trước mà")</h2>

<p>
<strong>Hindsight Bias</strong> là hiện tượng tâm lý khi sự việc đã xảy ra rồi,
ta mới nhìn lại và tin rằng mình đã dự đoán đúng ngay từ đầu
(dù thực tế tại thời điểm đó ta rất phân vân, thiếu chắc chắn).
</p>

<p>
Trong trading, Hindsight Bias cực kỳ nguy hiểm vì nó tạo ra
<strong>ảo tưởng năng lực phân tích</strong>, khiến Trader nghĩ rằng mình "rất giỏi",
chỉ là "chưa kịp vào lệnh".
</p>

<img 
  src="https://bloganchoi.com/wp-content/uploads/2024/07/hindsight-bias-la-gi-1.jpg" 
  alt="Hindsight Bias - Nhìn lại quá khứ trong trading"
>

<p>
Sau khi giá đã chạy, biểu đồ trông cực kỳ rõ ràng:
xu hướng đẹp, entry quá dễ, SL quá nhỏ.
Nhưng đó là <strong>biểu đồ của quá khứ</strong>, không phải biểu đồ lúc bạn đứng trước quyết định.
</p>

<img 
  src="https://tintucforex.com/images/C%C3%A1ch_giao_d%E1%BB%8Bch_Forex_%C4%91%E1%BB%83_b%E1%BA%A1n.jpg" 
  alt="Trader tiếc nuối vì bỏ lỡ cơ hội"
>

<h3>Biểu hiện của Hindsight Bias</h3>
<ul>
  <li>
    <strong>Câu cửa miệng quen thuộc:</strong>
    <em>"Biết ngay mà!", "Đã bảo rồi mà!", "Lúc nãy định vào Buy rồi..."</em>
  </li>
  <li>
    <strong>Tiếc nuối quá mức:</strong>
    Cảm giác như vừa bỏ lỡ một cơ hội "ăn chắc",
    dù lúc đó setup chưa đủ điều kiện.
  </li>
  <li>
    <strong>Ảo tưởng kỹ năng:</strong>
    Tin rằng mình đọc thị trường rất chuẩn, chỉ là "thiếu hành động".
  </li>
  <li>
    <strong>Hành vi nguy hiểm tiếp theo:</strong>
    Lần sau dễ vào lệnh vội vàng để "không bỏ lỡ nữa".
  </li>
</ul>

<img 
  src="https://tamlynhc.vn/wp-content/uploads/2024/05/cam-xuc-chi-phoi-1.jpg" 
  alt="Trader bị cảm xúc chi phối"
>

<h3>Vì sao Hindsight Bias đặc biệt nguy hiểm?</h3>
<p>
Hindsight Bias không làm bạn thua tiền ngay lập tức,
nhưng nó <strong>làm hỏng tư duy giao dịch dài hạn</strong>.
</p>

<ul>
  <li>Bạn đánh giá thấp rủi ro vì nghĩ kết quả là "hiển nhiên"</li>
  <li>Bạn không tôn trọng quy trình, chỉ tôn trọng kết quả</li>
  <li>Bạn bỏ qua việc cải thiện hệ thống vì nghĩ mình đã đủ giỏi</li>
</ul>

<img 
  src="https://images.unsplash.com/photo-1600267165477-6d4cc741b379?auto=format&fit=crop&w=800" 
  alt="So sánh biểu đồ quá khứ và hiện tại"
>

<h3>Cách khắc phục Hindsight Bias</h3>

<ol>
  <li>
    <strong>Ghi nhật ký giao dịch chi tiết:</strong><br>
    Ghi lại <strong>trước khi vào lệnh</strong>:
    lý do Buy/Sell, SL, TP, cảm xúc.
    <br>
    👉 Nếu không có ghi chú trước đó, đừng tự nhận là "đã biết".
  </li>

  <li>
    <strong>Tách biệt kết quả và quyết định:</strong><br>
    Một quyết định đúng quy trình nhưng thua lỗ
    vẫn là quyết định tốt.
  </li>

  <li>
    <strong>Chụp lại biểu đồ tại thời điểm ra quyết định:</strong><br>
    Để sau này nhìn lại và so sánh:
    <em>"Lúc đó mình thực sự thấy gì?"</em>
  </li>

  <li>
    <strong>Nhắc bản thân:</strong><br>
    Thị trường chỉ rõ ràng <strong>sau khi nó đã đi xong</strong>.
  </li>
</ol>

<img 
  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800" 
  alt="Ghi chép nhật ký giao dịch"
>

<h3>Ví dụ thực tế</h3>
<p>
Bạn thấy giá breakout mạnh sau khi đã chạy 200 pip.
Bạn thốt lên: <em>"Biết thế vào từ đầu!"</em>
</p>

<ul>
  <li>Nhưng tại thời điểm đó: tin tức xấu, nến giật mạnh, cấu trúc chưa rõ</li>
  <li>Bạn đứng ngoài là <strong>quyết định hợp lý</strong></li>
  <li>Chỉ có hindsight khiến bạn nghĩ mình đã sai</li>
</ul>

<h3>Checklist tự kiểm tra</h3>
<ul>
  <li>Mình có ghi plan trước khi giá chạy không?</li>
  <li>Lúc đó setup có đủ điều kiện không?</li>
  <li>Hay mình chỉ đang nhìn chart của quá khứ?</li>
  <li>Mình đang học từ quy trình hay từ kết quả?</li>
</ul>

<p>
<em>
📌 <strong>Ghi nhớ:</strong><br>
Trade là trò chơi của <strong>xác suất và kỷ luật</strong>, không phải "giá mà".
Nếu không có lệnh, thì bạn không đúng – chỉ là người đứng ngoài.
</em>
</p>
`,
        level: "ADVANCED",
        tags: JSON.stringify(["Tư duy", "Nhật ký giao dịch"]),
        related: JSON.stringify(["Nhật ký giao dịch", "Thực tế"]),
        created_at: now,
        updated_at: now,
      },
      {
        id: "boredom-trading",
        topic: "PSYCHOLOGY",
        title: "Boredom Trading - Trade Vì Chán",
        summary: "Giao dịch để giết thời gian khi thị trường không có sóng.",
        content: `<h2>Boredom Trading là gì?</h2>

<p>
  <strong>Boredom Trading (Giao dịch vì chán)</strong> là trạng thái Trader vào lệnh
  không dựa trên tín hiệu kỹ thuật, kế hoạch giao dịch hay xác suất,
  mà đơn giản chỉ vì <strong>cảm thấy chán, rảnh, buồn tay</strong>
  hoặc muốn tìm lại cảm giác “được trade”.
</p>

<p>
  Đây là một dạng <strong>sai lệch tâm lý cực kỳ phổ biến</strong>,
  đặc biệt với những Trader:
</p>

<ul>
  <li>Ngồi trước màn hình quá lâu</li>
  <li>Không có nhiều setup trong ngày</li>
  <li>Chưa quen với việc chờ đợi</li>
</ul>

<p>
  Điều nguy hiểm của Boredom Trading nằm ở chỗ:
  nó không gây ra thua lỗ lớn ngay lập tức,
  mà <strong>âm thầm bào mòn tài khoản, kỷ luật và sự tự tin</strong>
  của Trader theo thời gian.
</p>

<img 
  src="https://bpcdn.co/images/2018/01/17123548/bored-trader.jpg"
  alt="Boredom Trading - Trader chán nản ngồi nhìn chart"
  loading="lazy"
/>

<hr/>

<h3>Boredom Trading hình thành như thế nào?</h3>

<p>
  Nhiều người nghĩ Trading là công việc kịch tính,
  lúc nào cũng có sóng, có lệnh, có tiền.
  Nhưng thực tế hoàn toàn ngược lại.
</p>

<p>
  <strong>Trading chuyên nghiệp là một công việc rất nhàm chán.</strong>
  Phần lớn thời gian, thị trường:
</p>

<ul>
  <li>Đi ngang (Sideway)</li>
  <li>Không ở vùng giá đẹp</li>
  <li>Không cho tín hiệu rõ ràng</li>
</ul>

<p>
  Khi ngồi nhìn chart quá lâu mà không có gì xảy ra,
  não bộ con người sẽ bắt đầu tìm kiếm <strong>sự kích thích</strong>.
  Lúc này, Trader dễ tự biện minh:
</p>

<ul>
  <li>“Vào lệnh nhỏ thôi, test thử cũng được”</li>
  <li>“Thấy nó sắp chạy rồi”</li>
  <li>“Không lẽ ngồi nhìn hoài”</li>
</ul>

<p>
  Và chính những suy nghĩ đó là mầm mống của Boredom Trading.
</p>

<hr/>

<h3>Biểu hiện phổ biến của Boredom Trading</h3>

<ul>
  <li>
    <strong>1. Vào lệnh để giết thời gian:</strong><br/>
    Chart đi ngang hàng giờ, bạn bắt đầu thấy bứt rứt,
    khó chịu và vào lệnh chỉ để “có cảm giác đang trade”.
  </li>

  <li>
    <strong>2. Lạm dụng khung thời gian nhỏ:</strong><br/>
    Khi khung lớn không cho tín hiệu,
    bạn chuyển xuống M15, M5, thậm chí M1
    để cố tìm cho ra một điểm vào lệnh.
    <br/><br/>
    <img 
      src="https://s3.remitano.com/uploads/markdown_image/attachment/5319/4-2.png"
      alt="Nhiễu khung thời gian nhỏ"
      loading="lazy"
    />
  </li>

  <li>
    <strong>3. Ép thị trường phải có sóng:</strong><br/>
    Thay vì chờ thị trường cho cơ hội,
    bạn lại cố diễn giải mọi chuyển động nhỏ
    thành tín hiệu Buy hoặc Sell.
  </li>

  <li>
    <strong>4. Overtrading:</strong><br/>
    Nhiều lệnh nhỏ, xác suất thấp,
    thua lỗ lặt vặt cộng dồn thành khoản lỗ lớn.
  </li>
</ul>

<hr/>

<h3>Vì sao Boredom Trading cực kỳ nguy hiểm?</h3>

<p>
  Boredom Trading không phá tài khoản ngay,
  nhưng nó phá <strong>nền tảng của Trader</strong>.
</p>

<ul>
  <li>Làm bạn quen với việc trade không có lý do</li>
  <li>Phá vỡ kỷ luật giao dịch đã xây dựng</li>
  <li>Tăng phí giao dịch không cần thiết</li>
  <li>Dẫn đến Revenge Trading sau đó</li>
</ul>

<p>
  Rất nhiều Trader thất bại không phải vì
  một quyết định sai lầm lớn,
  mà vì <strong>hàng chục quyết định nhỏ, vô nghĩa</strong>
  lặp đi lặp lại mỗi ngày.
</p>

<hr/>

<h3>Cách khắc phục Boredom Trading một cách triệt để</h3>

<h4>1. Chấp nhận sự nhàm chán của Trading</h4>
<p>
  Hãy hiểu rằng:
  <strong>Trading = chờ đợi</strong>.
  Trader chuyên nghiệp không tìm cảm giác mạnh từ thị trường,
  họ chỉ tìm <strong>xác suất tốt</strong>.
</p>

<h4>2. Sử dụng Price Alert thay vì nhìn chart</h4>
<p>
  Xác định sẵn vùng giá quan trọng,
  đặt cảnh báo và rời khỏi màn hình.
  Điều này giúp bạn chỉ hành động
  khi thị trường thực sự cho cơ hội.
</p>

<img 
  src="https://mtr-cdn.com/images/learning_how_to_use_indicators_forex_mtrading-.width-648.jpg"
  alt="Đặt cảnh báo giá khi trading"
  loading="lazy"
/>

<h4>3. Giới hạn số lệnh mỗi phiên</h4>
<p>
  Ví dụ:
</p>
<ul>
  <li>Sideway: tối đa 1 lệnh / phiên</li>
  <li>Trend rõ ràng: tối đa 2–3 lệnh chất lượng</li>
</ul>

<p>
  Không có setup → không có lệnh.
</p>

<h4>4. Tách Trading ra khỏi giải trí</h4>
<p>
  Nếu bạn trade để giải trí,
  bạn đang chơi <strong>game rủi ro cao</strong>.
  Trading chỉ nên là công việc ra quyết định,
  không phải nguồn cảm xúc.
</p>

<hr/>

<h3>Case Study: Sideway cả ngày</h3>

<img 
  src="https://gldt.mql5.vn/2025/05/Figure-3-Sideways-Trend1.png"
  alt="Thị trường sideway"
  loading="lazy"
/>

<p>
  Thị trường đi ngang suốt phiên.
  Vì chán, bạn vào 5 lệnh nhỏ.
  Mỗi lệnh chỉ lỗ một ít,
  nhưng cộng phí + spread,
  tài khoản âm đáng kể.
</p>

<ul>
  <li><strong>Giải pháp đúng:</strong> Chờ breakout hoặc pullback rõ ràng.</li>
  <li><strong>Kỷ luật:</strong> Đặt alert, tắt chart.</li>
  <li><strong>Tư duy:</strong> Không trade cũng là một quyết định.</li>
</ul>

<hr/>

<h3>Checklist chống Boredom Trading (Áp dụng ngay)</h3>

<ul>
  <li>Setup này có đúng Trading Plan không?</li>
  <li>Có tín hiệu kỹ thuật rõ ràng chưa?</li>
  <li>Risk/Reward có hợp lý không?</li>
  <li>Mình vào lệnh vì chiến lược hay vì cảm xúc?</li>
  <li>Nếu bỏ lỡ lệnh này, có vấn đề gì không?</li>
</ul>

<img 
  src="https://gldt.mql5.vn/content/images/2024/09/trader-thanh-cong-cover.png"
  alt="Kiên nhẫn trong trading"
  loading="lazy"
/>

<p>
  📌 <strong>Ghi nhớ:</strong><br/>
  <strong>Không trade</strong> cũng là một vị thế.<br/>
  <strong>Tiền mặt</strong> cũng là một vị thế.<br/>
  Trader thành công là người biết <strong>khi nào KHÔNG nên hành động</strong>.
</p>
`,
        level: "BASIC",
        tags: JSON.stringify(["Kiên nhẫn", "Kỷ luật", "Tâm lý"]),
        related: JSON.stringify(["Overtrading", "Kiên nhẫn"]),
        created_at: now,
        updated_at: now,
      },
      {
        id: "anchoring-bias",
        topic: "PSYCHOLOGY",
        title: "Anchoring Bias - Hiệu Ứng Mỏ Neo",
        summary:
          "Bám vào một mức giá quá khứ, dẫn đến nhận định sai lầm về xu hướng hiện tại.",
        content: `<h2>Anchoring Bias (Hiệu ứng Mỏ Neo) là gì?</h2>

<p>
  <strong>Anchoring Bias (Hiệu ứng mỏ neo)</strong> là một sai lệch tâm lý phổ biến,
  xảy ra khi Trader bị “neo” tư duy vào một mức giá tham chiếu trong quá khứ
  (đỉnh cũ, đáy cũ, giá vốn, vùng giá từng phản ứng mạnh),
  từ đó <strong>đánh giá sai tình hình thị trường hiện tại</strong>.
</p>

<p>
  Khi đã bị neo tư duy, Trader không còn nhìn biểu đồ một cách khách quan,
  mà vô thức so sánh mọi diễn biến giá với mức giá cũ,
  dù cho <strong>cấu trúc thị trường và dòng tiền đã hoàn toàn thay đổi</strong>.
</p>

<img src="https://www.rosysoft.vn/fileman/Uploads/screenshot_1664427919.png" alt="Anchoring Bias - Mỏ neo tư duy" ">

<hr/>

<h3>Anchoring Bias – Mỏ neo tư duy hình thành như thế nào?</h3>

<p>
  Bộ não con người có xu hướng bám vào thông tin đầu tiên mà nó ghi nhận
  để làm điểm tham chiếu.
  Trong Trading, mức giá này thường là:
</p>

<ul>
  <li>Giá mua / giá bán ban đầu (Entry Price)</li>
  <li>Đỉnh cũ / đáy cũ trên biểu đồ</li>
  <li>Mức giá từng tạo lợi nhuận lớn trong quá khứ</li>
</ul>

<p>
  Vấn đề nằm ở chỗ: <strong>thị trường không có trí nhớ</strong>.
  Mỗi cây nến mới hình thành là kết quả của cung – cầu tại thời điểm hiện tại,
  hoàn toàn không liên quan đến việc bạn đã mua hay bán ở đâu trước đó.
</p>

<hr/>

<h3>Biểu hiện phổ biến của Anchoring Bias</h3>

<ul>
  <li>
    <strong>1. Bắt dao rơi (Catching a Falling Knife):</strong><br/>
    Giá giảm từ 100 xuống 80, bạn cho rằng “rẻ rồi” vì đang neo vào giá 100.
    Trong khi thực tế, xu hướng giảm vẫn còn rất mạnh
    và giá hoàn toàn có thể tiếp tục rơi về 60 hoặc 50.
    <br/><br/>
    <img 
      src="https://gldt.mql5.vn/content/images/2024/08/image-306.png"
      alt="Bắt dao rơi do Anchoring Bias"
      loading="lazy"
    />
  </li>

  <li>
    <strong>2. Gồng lỗ về hòa:</strong><br/>
    “Chờ nó hồi về giá entry rồi mình cắt”.
    Nhưng giá không hồi, cấu trúc thị trường tiếp tục xấu đi,
    và khoản lỗ nhỏ ban đầu dần biến thành lỗ lớn.
    <br/><br/>
    <img 
      src="https://i.ex-cdn.com/nhadautu.vn/files/content/2019/11/10/lo-1573293130257-0835.jpg"
      alt="Gồng lỗ vì ám ảnh giá vốn"
      loading="lazy"
    />
  </li>

  <li>
    <strong>3. Ám ảnh đỉnh / đáy cũ:</strong><br/>
    “Giá này từng lên 200, kiểu gì cũng quay lại”.
    Trader bỏ qua thực tế rằng xu hướng đã đảo chiều,
    khối lượng suy yếu và dòng tiền đã rút khỏi thị trường.
  </li>

  <li>
    <strong>4. Không chịu nhìn Market Structure hiện tại:</strong><br/>
    Giá đã tạo Lower High – Lower Low rõ ràng,
    nhưng trader vẫn tìm mọi lý do để Buy
    chỉ vì cảm thấy “giá thấp hơn trước rất nhiều”.
    <br/><br/>
    <img 
      src="https://banktraps.com/wp-content/uploads/2025/09/cau-truc-market-di-ngang.png"
      alt="Market Structure đảo chiều nhưng trader vẫn Buy"
      loading="lazy"
    />
  </li>
</ul>

<hr/>

<h3>Vì sao Anchoring Bias cực kỳ nguy hiểm?</h3>

<ul>
  <li>Làm Trader <strong>chống lại xu hướng</strong></li>
  <li>Khiến việc cắt lỗ trở nên cực kỳ khó khăn</li>
  <li>Làm sai lệch toàn bộ kế hoạch giao dịch ban đầu</li>
  <li>Biến phân tích kỹ thuật thành cảm xúc cá nhân</li>
</ul>

<p>
  Thực tế đau lòng là:
  <strong>đa số tài khoản cháy không phải vì vào sai lệnh,
  mà vì không chịu thoát lệnh khi đã sai</strong>.
</p>

<hr/>

<h3>Cách khắc phục Anchoring Bias hiệu quả</h3>

<h4>1. Quên giá vốn đi</h4>
<p>
  Giá vốn chỉ là thông tin nội bộ của bạn.
  Thị trường không biết, không quan tâm
  và cũng không có nghĩa vụ quay về mức giá đó.
  Hãy nhìn giá hiện tại như thể bạn <strong>chưa từng vào lệnh</strong>.
</p>

<h4>2. Đánh giá lại vị thế mỗi ngày</h4>
<p>
  Tự hỏi bản thân:
  <em>“Nếu hôm nay mình chưa có lệnh này,
  mình có vào Buy/Sell ở mức giá hiện tại không?”</em><br/>
  Nếu câu trả lời là <strong>KHÔNG</strong> →
  lệnh đó không còn hợp lý → nên thoát.
</p>

<h4>3. Follow the Trend</h4>
<p>
  <strong>"Trend is your friend"</strong>.
  Đừng chống lại xu hướng chỉ vì cảm thấy giá đã “quá cao” hoặc “quá thấp”.
  Trong xu hướng mạnh, giá luôn có thể đi xa hơn bạn nghĩ.
</p>

<h4>4. Ra quyết định dựa trên cấu trúc, không phải cảm xúc</h4>
<p>
  Hãy để Market Structure, vùng hỗ trợ – kháng cự
  và tín hiệu Price Action hiện tại quyết định hành động,
  thay vì ký ức về một mức giá trong quá khứ.
</p>

<hr/>

<h3>Case Study: Ám ảnh giá vốn</h3>

<img 
  src="https://cdn.tienphong.vn/images/a6bf4f60924201126af6849ca45a398000817fa5dd6fb0c23f843852a5fadf4dba60b95337cde4f15f471a34d3ddffb5714ef85a15986e12ec866c53661a093d/1-2594.jpg"
  alt="Case study Anchoring Bias - Giá không quay về giá vốn"
  loading="lazy"
/>

<p>
  Bạn Buy tại 200. Giá hiện tại giảm về 140.
  Bạn hy vọng giá quay về 200 để “hòa vốn”.
</p>

<ul>
  <li><strong>Đánh giá xu hướng:</strong> Nếu cấu trúc giảm rõ ràng → xu hướng đã sai.</li>
  <li><strong>Ra quyết định theo hiện tại:</strong> Cắt lỗ theo kế hoạch, bảo toàn vốn.</li>
  <li><strong>Tối ưu lại cơ hội:</strong> Chuyển vốn sang setup thuận xu hướng hơn.</li>
  <li><strong>Ghi lại bài học:</strong> Giá vốn không phải là cơ sở để giao dịch.</li>
</ul>

<hr/>

<h3>Checklist chống Anchoring Bias (Áp dụng ngay)</h3>

<ul>
  <li>Mình đang nhìn vào <strong>hiện tại</strong> hay <strong>quá khứ</strong>?</li>
  <li>Cấu trúc xu hướng hiện tại đang nói điều gì?</li>
  <li>Nếu chưa có lệnh, mình có vào tại giá này không?</li>
  <li>Quyết định này dựa trên chart hay cảm xúc?</li>
  <li>Giá vốn có liên quan không? → <strong>KHÔNG</strong></li>
</ul>

<img 
  src="https://www.lat.london/wp-content/uploads/2025/06/price-action.png?w=1024"
  alt="Trade what you see not what you think"
  loading="lazy"
/>

<p>
  📌 <strong>Ghi nhớ:</strong><br/>
  Hãy giao dịch với những gì bạn <strong>THẤY</strong> trên biểu đồ,
  không phải những gì bạn <strong>NGHĨ</strong>,
  <strong>NHỚ</strong> hoặc <strong>MONG MUỐN</strong>.
</p>
`,
        level: "ADVANCED",
        tags: JSON.stringify(["Tư duy", "Cấu trúc thị trường", "Price Action"]),
        related: JSON.stringify(["Price Action", "Xu hướng"]),
        created_at: now,
        updated_at: now,
      },
      {
        id: "risk-fixed-percent",
        topic: "RISK",
        title: "Rủi ro cố định theo % tài khoản (BẮT BUỘC PHẢI CÓ)",
        summary:
          "Quy tắc sống còn: Chỉ rủi ro 1-2% tài khoản cho mỗi lệnh giao dịch.",
        content: `
<h2>Rủi ro cố định theo % tài khoản (BẮT BUỘC PHẢI CÓ)</h2>
 
<p>
<strong>Rủi ro cố định theo % tài khoản</strong> là phương pháp quản lý vốn trong đó 
mỗi lệnh giao dịch chỉ được phép rủi ro một <strong>tỷ lệ cố định</strong> trên tổng tài khoản,
thường là <strong>0.5% – 2%</strong>.
</p>
 
<p>
Đây không phải là lựa chọn, mà là <strong>luật sinh tồn</strong> của Trader chuyên nghiệp.  
Không áp dụng quy tắc này, dù chiến lược có winrate cao đến đâu, tài khoản vẫn có thể 
<strong>cháy chỉ sau vài lệnh cảm xúc</strong>.
</p>
 
<img src="https://gldt.mql5.vn/2024/12/34991.jpeg" 
alt="Quản lý rủi ro theo phần trăm tài khoản">
 
<h3>Vì sao phương pháp này quan trọng?</h3>
<ul>
  <li>
    <strong>Bảo vệ tài khoản khỏi chuỗi thua:</strong> 
    Thua 10 lệnh liên tiếp với rủi ro 1% vẫn còn ~90% tài khoản để tiếp tục.
  </li>
  <li>
    <strong>Ổn định tâm lý:</strong> 
    Khi biết trước mức lỗ tối đa, Trader không còn sợ hãi hay hoảng loạn.
  </li>
  <li>
    <strong>Cho phép tư duy xác suất:</strong> 
    Trade không còn là “được ăn cả – ngã về không” mà là trò chơi dài hạn.
  </li>
</ul>
 
<h3>Nguyên tắc cốt lõi</h3>
<p>
<strong>Tiền rủi ro là cố định – Khối lượng giao dịch thay đổi.</strong>
</p>
 
<p>
Khoảng cách Stop Loss có thể xa hoặc gần, nhưng số tiền sẵn sàng mất 
<strong>luôn phải giữ nguyên</strong>.
</p>
 
<img src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=900" 
alt="Risk management trong trading">
 
<h3>Ví dụ minh họa thực tế</h3>
<p>
Giả sử:
</p>
<ul>
  <li>Tài khoản: <strong>10.000 USD</strong></li>
  <li>Rủi ro mỗi lệnh: <strong>1%</strong></li>
  <li>Số tiền rủi ro: <strong>100 USD</strong></li>
</ul>
 
<p>
<strong>Trường hợp 1:</strong> SL = 20 pip  
→ Bạn có thể vào volume lớn hơn.
</p>
 
<p>
<strong>Trường hợp 2:</strong> SL = 50 pip  
→ Bạn buộc phải giảm volume xuống.
</p>
 
<p>
👉 Dù SL là bao nhiêu, nếu lệnh thua, bạn chỉ mất <strong>100 USD</strong>, 
không hơn, không kém.
</p>
 
<h3>Những sai lầm phổ biến</h3>
<ul>
  <li>
    <strong>Vào volume cố định:</strong> 
    Lúc SL ngắn thì rủi ro nhỏ, SL dài thì rủi ro phình to → mất kiểm soát.
  </li>
  <li>
    <strong>Tăng rủi ro sau khi thua:</strong> 
    Gỡ gạc bằng cách tăng lot → phá vỡ toàn bộ hệ thống.
  </li>
  <li>
    <strong>Nhầm lẫn giữa tự tin và liều lĩnh:</strong> 
    Setup đẹp không có nghĩa là được phép rủi ro lớn hơn.
  </li>
</ul>
 
<img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900" 
alt="Trader kiểm soát rủi ro">
 
<h3>Nên chọn bao nhiêu % là hợp lý?</h3>
<ul>
  <li><strong>Người mới:</strong> 0.5% – 1%</li>
  <li><strong>Trader có kinh nghiệm:</strong> 1% – 2%</li>
  <li><strong>Scalping / tâm lý yếu:</strong> ≤ 0.5%</li>
</ul>
 
<p>
🚫 <strong>Không khuyến nghị</strong> rủi ro trên 2% cho bất kỳ ai trade dài hạn.
</p>
 
<h3>Checklist trước khi vào lệnh</h3>
<ul>
  <li>Mình đang rủi ro bao nhiêu % tài khoản?</li>
  <li>SL đặt theo cấu trúc hay theo cảm xúc?</li>
  <li>Volume đã tính đúng theo % rủi ro chưa?</li>
  <li>Nếu lệnh này thua, mình có chấp nhận được không?</li>
</ul>
 
<p>
<em>
📌 <strong>Ghi nhớ:</strong>  
Trader không chết vì một lệnh thua,  
Trader chết vì <strong>một lệnh thua quá lớn</strong>.  
Giữ rủi ro nhỏ, bạn sẽ luôn còn cơ hội.
</em>
</p>
`,
        level: "ADVANCED",
        tags: JSON.stringify(["Quản lý vốn", "Rủi ro", "Bắt buộc"]),
        related: JSON.stringify(["Stop Loss", "Tâm lý giao dịch"]),
        created_at: now,
        updated_at: now,
      },
      {
        id: "risk-stop-loss",
        topic: "RISK",
        title: "Luôn đặt Stop Loss (SL) – Không có ngoại lệ",
        summary:
          "Stop Loss là dây an toàn bảo vệ bạn khỏi những cú crash của thị trường.",
        content: `
<h2>Luôn đặt Stop Loss (SL) – Không có ngoại lệ</h2>

<p>
<strong>Stop Loss (Cắt lỗ)</strong> là lệnh chờ được đặt sẵn để tự động đóng vị thế khi giá đi ngược lại dự đoán của bạn một khoảng xác định.
Đây là <strong>công cụ bảo hiểm duy nhất</strong> giúp bạn không bị mất trắng tài khoản trong một nốt nhạc.
</p>

<img src="https://eu-images.contentstack.com/v3/assets/blt73dfd92ee49f59a6/bltb9add0c90e5f407d/680b6edddacf364ff7bec634/MDP-8425_1_cover_1200x675_EN.png" alt="Stop Loss trading">

<h3>Tại sao phải có Stop Loss?</h3>
<ul>
  <li><strong>Bảo vệ vốn:</strong> Ngăn chặn một lệnh thua nhỏ biến thành thảm họa.</li>
  <li><strong>Giữ tâm lý ổn định:</strong> Bạn biết chính xác mình sẽ mất bao nhiêu nếu sai, nên không lo lắng.</li>
  <li><strong>Chống lại thiên nga đen:</strong> Những sự kiện tin tức bất ngờ có thể khiến giá chạy hàng trăm pip trong vài giây. Không có SL, bạn có thể cháy tài khoản ngay lập tức.</li>
</ul>

<h3>Nguyên tắc đặt Stop Loss đúng cách</h3>
<ul>
  <li>Đặt SL dựa trên <strong>cấu trúc thị trường</strong> (trên đỉnh cũ / dưới đáy cũ), không đặt theo số tiền hay số pip cảm tính.</li>
  <li>Đặt SL ở nơi mà nếu giá chạm vào, nhận định của bạn <strong>chắc chắn sai</strong>.</li>
  <li>Không bao giờ dời SL ra xa (nới SL) khi lệnh đang lỗ.</li>
</ul>

<img src="https://cdn.dnse.com.vn/dnse-news/2023/02/morningstar4.jpg" alt="Stop Loss strategy">

<h3>Checklist Stop Loss</h3>
<ul>
  <li>Lệnh này đã có SL chưa?</li>
  <li>SL này có được bảo vệ bởi cản kỹ thuật không?</li>
  <li>Mình có cam kết không dời SL không?</li>
</ul>

<p><em>📌 <strong>Ghi nhớ:</strong> Vào lệnh không có Stop Loss giống như lái xe không phanh. Sớm muộn gì cũng tai nạn.</em></p>
`,
        level: "ADVANCED",
        tags: JSON.stringify(["Stop Loss", "Quản lý rủi ro"]),
        related: JSON.stringify(["Rủi ro cố định", "Cấu trúc thị trường"]),
        created_at: now,
        updated_at: now,
      },
      {
        id: "risk-reward-ratio",
        topic: "RISK",
        title: "Tỷ lệ Risk : Reward (R:R) tối thiểu 1:2",
        summary: "Bí mật để có lợi nhuận ngay cả khi bạn thua nhiều hơn thắng.",
        content: `
<h2>Tỷ lệ Risk : Reward (R:R) tối thiểu 1:2</h2>

<p>
<strong>Risk:Reward (R:R)</strong> là tỷ lệ giữa số tiền bạn chấp nhận mất (Risk) và số tiền bạn kỳ vọng kiếm được (Reward) trong một lệnh.
Tỷ lệ R:R 1:2 nghĩa là bạn chấp nhận mất 1 đồng để kiếm 2 đồng.
</p>

<img src="https://gldt.mql5.vn/content/images/2024/07/Ty-le-loi_lo-ty-le-R_R-scaled.jpg" alt="Risk Reward Ratio">

<h3>Sức mạnh của R:R 1:2</h3>
<p>
Nếu bạn duy trì tỷ lệ R:R 1:2, bạn chỉ cần <strong>thắng 35-40% số lệnh</strong> là đã có lãi.
Bạn không cần phải đúng mọi lúc, bạn chỉ cần thắng lớn hơn khi đúng và thua nhỏ hơn khi sai.
</p>

<h3>Bảng toán học chứng minh</h3>
<ul>
  <li>10 lệnh, Thắng 4, Thua 6 (Winrate 40%).</li>
  <li>Mỗi lệnh thua mất $100. Tổng thua: 6 x $100 = $600.</li>
  <li>Mỗi lệnh thắng được $200. Tổng thắng: 4 x $200 = $800.</li>
  <li><strong>Kết quả: Lãi ròng $200.</strong></li>
</ul>

<h3>Lưu ý khi áp dụng</h3>
<ul>
  <li>Đừng cố ép R:R lên cao vô lý (ví dụ 1:10) nếu thị trường không cho phép.</li>
  <li>Nếu setup không đạt tối thiểu 1:1.5 hoặc 1:2, hãy bỏ qua.</li>
  <li>Hãy thực tế với điểm TP (Take Profit).</li>
</ul>

<p><em>📌 <strong>Ghi nhớ:</strong> Đừng tìm kiếm chén thánh dự đoán đúng 100%. Hãy tìm kiếm hệ thống có R:R tốt.</em></p>
`,
        level: "ADVANCED",
        tags: JSON.stringify(["R:R", "Lợi nhuận", "Toán học"]),
        related: JSON.stringify(["Quản lý vốn", "Tâm lý"]),
        created_at: now,
        updated_at: now,
      },
      {
        id: "risk-reduce-volume",
        topic: "RISK",
        title: "Giảm khối lượng khi tâm lý không ổn",
        summary:
          "Khi bạn không ổn, tài khoản của bạn cũng sẽ không ổn. Hãy giảm ga.",
        content: `
<h2>Giảm khối lượng khi tâm lý không ổn</h2>

<p>
Trading là trò chơi của tâm lý. Khi bạn đang tức giận, buồn chán, hưng phấn quá độ hoặc đang chịu áp lực tài chính,
khả năng ra quyết định của bạn sẽ bị suy giảm nghiêm trọng. Đây là lúc dễ mắc sai lầm nhất.
</p>

<img src="https://hellodoctors.vn/img/uploads/nguyen-nhan-gay-ra-cang-thang-stress-va-cach-chua-tri2_3156.png" alt="Psychology in trading">

<h3>Khi nào cần giảm volume?</h3>
<ul>
  <li>Sau một chuỗi thua liên tiếp (để lấy lại tự tin).</li>
  <li>Khi đang có chuyện buồn phiền cá nhân.</li>
  <li>Khi thị trường biến động quá mạnh và khó lường.</li>
  <li>Khi bạn đang thử nghiệm một chiến lược mới.</li>
</ul>

<h3>Chiến thuật "Hạ cánh mềm"</h3>
<p>
Thay vì nghỉ hẳn (điều rất khó với trader nghiện trade), hãy giảm volume xuống còn <strong>1/2 hoặc 1/4</strong> so với bình thường.
Điều này giúp bạn vẫn giữ nhịp với thị trường nhưng rủi ro được giảm thiểu tối đa.
</p>

<p><em>📌 <strong>Ghi nhớ:</strong> Bảo vệ tâm lý cũng quan trọng như bảo vệ vốn. Nếu thấy không ổn, hãy đi chậm lại.</em></p>
`,
        level: "ADVANCED",
        tags: JSON.stringify(["Tâm lý", "Volume", "Kiểm soát"]),
        related: JSON.stringify(["Tâm lý giao dịch", "Overtrading"]),
        created_at: now,
        updated_at: now,
      },
      {
        id: "risk-daily-limit",
        topic: "RISK",
        title: "Giới hạn thua lỗ trong ngày / tuần",
        summary:
          "Biết điểm dừng trước khi mọi thứ đi quá xa (Daily Loss Limit).",
        content: `
<h2>Giới hạn thua lỗ trong ngày / tuần</h2>

<p>
<strong>Daily Loss Limit</strong> là mức lỗ tối đa bạn cho phép bản thân chịu đựng trong một ngày.
Khi chạm mức này, bạn <strong>buộc phải ngừng giao dịch</strong> hoàn toàn trong ngày hôm đó, không ngoại lệ.
</p>

<img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=900" alt="Stop trading sign">

<h3>Tại sao cần giới hạn này?</h3>
<ul>
  <li>Ngăn chặn <strong>Revenge Trading</strong> (giao dịch trả thù) khi nóng máu.</li>
  <li>Bảo toàn vốn để ngày mai còn cơ hội làm lại.</li>
  <li>Giúp ngắt mạch tâm lý tiêu cực.</li>
</ul>

<h3>Con số gợi ý</h3>
<ul>
  <li>Giới hạn ngày: Tối đa 3% - 5% tài khoản.</li>
  <li>Giới hạn tuần: Tối đa 10% tài khoản.</li>
  <li>Giới hạn lệnh thua liên tiếp: 3 lệnh thua liên tiếp → Nghỉ.</li>
</ul>

<p><em>📌 <strong>Ghi nhớ:</strong> Thị trường ngày mai vẫn còn đó. Nếu hôm nay "đen", hãy tắt máy đi ngủ. Đừng cố gỡ.</em></p>
`,
        level: "ADVANCED",
        tags: JSON.stringify(["Kỷ luật", "Dừng lỗ", "Quy tắc"]),
        related: JSON.stringify(["Revenge Trading", "Quản lý vốn"]),
        created_at: now,
        updated_at: now,
      },
      {
        id: "risk-no-over-stacking",
        topic: "RISK",
        title: "Không nhồi lệnh bừa bãi (No Over-stacking)",
        summary:
          "Nhồi lệnh sai cách là con đường nhanh nhất dẫn đến cháy tài khoản.",
        content: `
<h2>Không nhồi lệnh bừa bãi</h2>

<p>
<strong>Nhồi lệnh (Stacking)</strong> là việc mở thêm vị thế khi lệnh cũ đang chạy.
Có hai loại nhồi lệnh: nhồi khi đang lời (Pyramiding - Tốt) và nhồi khi đang lỗ (DCA/Gồng lỗ - Xấu).
Ở đây chúng ta nói về việc <strong>nhồi lệnh vô tội vạ</strong>.
</p>

<img src="https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?auto=format&fit=crop&w=900" alt="Stacking orders">

<h3>Nguy hiểm của nhồi lệnh sai</h3>
<ul>
  <li>Tăng rủi ro lên cấp số nhân.</li>
  <li>Khi giá đảo chiều nhẹ, toàn bộ lãi biến thành lỗ hoặc lỗ chồng lỗ.</li>
  <li>Dễ bị margin call (quá mức ký quỹ).</li>
</ul>

<h3>Quy tắc nhồi lệnh an toàn</h3>
<ul>
  <li>Chỉ nhồi thêm lệnh khi lệnh trước đó <strong>đã có lãi</strong> và đã dời SL về hòa vốn.</li>
  <li>Không bao giờ nhồi thêm lệnh khi lệnh cũ đang lỗ (trừ khi có kế hoạch DCA bài bản và volume nhỏ).</li>
  <li>Tổng rủi ro của tất cả các lệnh cộng lại không được vượt quá giới hạn cho phép (ví dụ 2%).</li>
</ul>

<p><em>📌 <strong>Ghi nhớ:</strong> Đừng tham lam muốn ăn trọn con sóng bằng cách nhồi full margin. Một cú sập nhẹ sẽ quét sạch tất cả.</em></p>
`,
        level: "ADVANCED",
        tags: JSON.stringify(["Nhồi lệnh", "DCA", "Rủi ro"]),
        related: JSON.stringify(["Pyramiding", "Gồng lỗ"]),
        created_at: now,
        updated_at: now,
      },
      {
        id: "risk-partial-profit",
        topic: "RISK",
        title: "Chốt lời từng phần (Scaling Out)",
        summary:
          "Đừng để lệnh thắng biến thành lệnh thua. Hãy bỏ túi một phần lợi nhuận.",
        content: `
<h2>Chốt lời từng phần</h2>

<p>
<strong>Chốt lời từng phần</strong> là việc đóng một phần khối lượng lệnh khi giá đạt các mốc mục tiêu, và giữ phần còn lại để chạy tiếp theo xu hướng.
Ví dụ: Buy 1 Lot, giá lên R:R 1:1 thì chốt 0.5 Lot, dời SL về hòa vốn.
</p>

<img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=900" alt="Taking profit">

<h3>Lợi ích tuyệt vời</h3>
<ul>
  <li><strong>Tâm lý thoải mái:</strong> Bạn đã có tiền đút túi, phần còn lại là "lãi chạy", tâm lý cực kỳ nhẹ nhàng.</li>
  <li><strong>Tránh tiếc nuối:</strong> Nếu giá quay đầu, bạn vẫn có lãi. Nếu giá đi tiếp, bạn vẫn còn lệnh.</li>
  <li><strong>Tăng Winrate thực tế:</strong> Biến nhiều lệnh có thể hòa/thua thành lệnh thắng nhỏ.</li>
</ul>

<h3>Cách thực hiện</h3>
<ul>
  <li>TP1 (R:R 1:1 hoặc 1:1.5): Chốt 50% volume + Dời SL về Entry.</li>
  <li>TP2 (R:R 1:2 hoặc kháng cự tiếp theo): Chốt tiếp 30%.</li>
  <li>TP3 (Moon bag): Giữ 20% còn lại đến hết xu hướng.</li>
</ul>

<p><em>📌 <strong>Ghi nhớ:</strong> Không ai phá sản vì chốt lời. Hãy học cách hài lòng với lợi nhuận thị trường cho.</em></p>
`,
        level: "ADVANCED",
        tags: JSON.stringify(["Chốt lời", "Chiến lược", "Tối ưu"]),
        related: JSON.stringify(["Trailing Stop", "Tâm lý"]),
        created_at: now,
        updated_at: now,
      },
      {
        id: "risk-streak-management",
        topic: "RISK",
        title: "Quản lý rủi ro theo chuỗi lệnh",
        summary: "Điều chỉnh volume dựa trên hiệu suất giao dịch gần nhất.",
        content: `
<h2>Quản lý rủi ro theo chuỗi lệnh</h2>

<p>
Hiệu suất giao dịch thường có tính chu kỳ (lúc thắng liên tục, lúc thua liên tục).
Trader thông minh biết cách <strong>đạp ga khi thắng</strong> và <strong>đạp thắng khi thua</strong>.
</p>

<img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900" alt="Trading performance">

<h3>Quy tắc Anti-Martingale (Thuận thiên)</h3>
<ul>
  <li><strong>Khi đang thắng (Winning Streak):</strong> Giữ nguyên rủi ro hoặc tăng nhẹ (nếu tự tin và có lãi đệm).</li>
  <li><strong>Khi đang thua (Losing Streak):</strong> GIẢM rủi ro xuống một nửa sau mỗi lệnh thua hoặc sau một mốc sụt giảm nhất định (Drawdown).</li>
</ul>

<h3>Tại sao không nên gấp thếp (Martingale)?</h3>
<p>
Gấp thếp (thua đánh gấp đôi để gỡ) là con đường nhanh nhất ra đê. Thị trường có thể vô lý lâu hơn khả năng chịu đựng của tài khoản bạn.
</p>

<h3>Ví dụ áp dụng</h3>
<ul>
  <li>Lệnh 1: Thua (Rủi ro 1%).</li>
  <li>Lệnh 2: Thua (Rủi ro 1%).</li>
  <li>Lệnh 3: Giảm rủi ro xuống 0.5%.</li>
  <li>Khi nào thắng lại 2 lệnh liên tiếp mới quay về 1%.</li>
</ul>

<p><em>📌 <strong>Ghi nhớ:</strong> Bảo toàn vốn trong chuỗi thua quan trọng hơn việc cố kiếm tiền nhanh.</em></p>
`,
        level: "ADVANCED",
        tags: JSON.stringify(["Chuỗi lệnh", "Quản lý vốn", "Chiến thuật"]),
        related: JSON.stringify(["Martingale", "Drawdown"]),
        created_at: now,
        updated_at: now,
      },
      {
        id: "risk-correlation",
        topic: "RISK",
        title: "Không rủi ro quá nhiều lệnh cùng chiều (Correlation)",
        summary:
          "Đừng bỏ tất cả trứng vào một giỏ, hoặc các giỏ có liên quan chặt chẽ với nhau.",
        content: `
<h2>Không rủi ro quá nhiều lệnh cùng chiều</h2>

<p>
Nhiều cặp tiền hoặc tài sản có tính <strong>tương quan (Correlation)</strong> rất cao.
Ví dụ: EURUSD và GBPUSD thường chạy cùng chiều. Vàng (XAUUSD) và USD thường ngược chiều.
</p>

<img src="https://res.cloudinary.com/dq4basktt/image/upload/v1770384578/Quan-tri-rui-ro-la-gi-1-copy-7-1024x692_qfwpw6.jpg" alt="Currency correlation">

<h3>Cạm bẫy thường gặp</h3>
<p>
Bạn Buy EURUSD (rủi ro 1%), Buy GBPUSD (rủi ro 1%), Buy AUDUSD (rủi ro 1%).
Bạn nghĩ mình đang đa dạng hóa danh mục? <strong>Sai lầm!</strong>
Thực tế bạn đang "Short USD" với rủi ro 3%. Nếu USD tăng mạnh, bạn sẽ thua cả 3 lệnh cùng lúc.
</p>

<h3>Cách khắc phục</h3>
<ul>
  <li>Kiểm tra bảng tương quan các cặp tiền trước khi vào lệnh.</li>
  <li>Nếu muốn vào nhiều cặp cùng chiều, hãy <strong>chia nhỏ rủi ro</strong>. Ví dụ thay vì mỗi lệnh 1%, hãy đánh mỗi lệnh 0.3%.</li>
  <li>Chọn các cặp ít liên quan nhau để phân tán rủi ro thực sự.</li>
</ul>

<p><em>📌 <strong>Ghi nhớ:</strong> Đa dạng hóa sai cách = Tự sát tập thể. Hãy chú ý đến sự tương quan.</em></p>
`,
        level: "ADVANCED",
        tags: JSON.stringify(["Tương quan", "Đa dạng hóa", "Rủi ro"]),
        related: JSON.stringify(["Currency Correlation", "Quản lý danh mục"]),
        created_at: now,
        updated_at: now,
      },
      {
        id: "risk-journal",
        topic: "RISK",
        title: "Nhật ký giao dịch (Risk Journal)",
        summary:
          "Công cụ mạnh mẽ nhất để cải thiện kỹ năng quản lý rủi ro của bạn.",
        content: `
<h2>Nhật ký giao dịch (Risk Journal)</h2>

<p>
Bạn không thể cải thiện những gì bạn không đo lường.
Nhật ký giao dịch là nơi ghi lại chi tiết mọi quyết định của bạn, giúp bạn nhìn ra điểm yếu và sai lầm lặp lại.
</p>

<img src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=900" alt="Writing journal">

<h3>Cần ghi gì trong nhật ký rủi ro?</h3>
<ul>
  <li><strong>Setup:</strong> Tại sao vào lệnh? (Có đúng plan không?)</li>
  <li><strong>Rủi ro:</strong> Lệnh này rủi ro bao nhiêu %? SL bao nhiêu pip?</li>
  <li><strong>Cảm xúc:</strong> Lúc vào lệnh cảm thấy thế nào? (Tự tin, lo lắng, cay cú?)</li>
  <li><strong>Kết quả:</strong> Thắng hay thua? Có tuân thủ kỷ luật cắt lỗ/chốt lời không?</li>
  <li><strong>Bài học:</strong> Làm gì để tốt hơn lần sau?</li>
</ul>

<h3>Lợi ích</h3>
<ul>
  <li>Nhận ra các "lỗ hổng" rủi ro (ví dụ: thường xuyên dời SL, thường xuyên FOMO).</li>
  <li>Xây dựng sự tự tin dựa trên số liệu thực tế.</li>
  <li>Giúp bạn chịu trách nhiệm với từng quyết định của mình.</li>
</ul>

<p><em>📌 <strong>Ghi nhớ:</strong> Một trí nhớ tốt không bằng một nét mực mờ. Hãy viết nhật ký mỗi ngày.</em></p>
`,
        level: "ADVANCED",
        tags: JSON.stringify(["Nhật ký", "Học tập", "Kỷ luật"]),
        related: JSON.stringify(["Backtest", "Review"]),
        created_at: now,
        updated_at: now,
      },
      
      {
        id: "candle-reversal",
        topic: "CANDLESTICKS",
        title: "Hình nến ĐẢO CHIỀU (Reversal Patterns)",
        summary:
          "Các mô hình nến báo hiệu xu hướng có thể thay đổi, thường xuất hiện tại đỉnh hoặc đáy quan trọng.",
        content: `
<h2>Nhóm mô hình nến ĐẢO CHIỀU (Reversal Patterns)</h2>
<p>👉 <strong>Mục đích:</strong> Dùng để bắt điểm đảo chiều tại các vùng đỉnh/đáy quan trọng (Key Levels).</p>
<img src="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&w=900" alt="Candlestick Reversal Patterns">

<hr/>

<h3>1. Pin Bar (Hammer / Shooting Star)</h3>
<p>Pin Bar là mẫu nến đơn có đuôi dài, thể hiện sự từ chối giá quyết liệt.</p>

<h4>Hammer (Bullish Pin Bar)</h4>
<ul>
  <li><strong>Đặc điểm:</strong> Bóng dưới dài, thân nhỏ nằm ở trên.</li>
  <li><strong>Ý nghĩa:</strong> Từ chối giá thấp. Phe bán cố đẩy giá xuống nhưng thất bại, phe mua đẩy ngược lên.</li>
  <li><strong>Vị trí:</strong> Xuất hiện tại đáy → Khả năng đảo chiều TĂNG.</li>
</ul>

<h4>Shooting Star (Bearish Pin Bar)</h4>
<ul>
  <li><strong>Đặc điểm:</strong> Bóng trên dài, thân nhỏ nằm ở dưới.</li>
  <li><strong>Ý nghĩa:</strong> Từ chối giá cao. Phe mua cố đẩy giá lên nhưng thất bại, phe bán đạp xuống.</li>
  <li><strong>Vị trí:</strong> Xuất hiện tại đỉnh → Khả năng đảo chiều GIẢM.</li>
</ul>

<p><em>📌 <strong>Lưu ý quan trọng:</strong> Pin Bar chỉ mạnh khi xuất hiện ở Key Level (Hỗ trợ/Kháng cự), thuận xu hướng lớn (HTF) và có volume hoặc phản ứng giá rõ ràng.</em></p>

<hr/>

<h3>2. Engulfing (Nến Nhấn Chìm)</h3>

<h4>Bullish Engulfing (Nhấn chìm tăng)</h4>
<ul>
  <li><strong>Đặc điểm:</strong> Nến xanh sau bao trọn toàn bộ thân nến đỏ trước đó.</li>
  <li><strong>Ý nghĩa:</strong> Phe mua hoàn toàn áp đảo phe bán.</li>
</ul>

<h4>Bearish Engulfing (Nhấn chìm giảm)</h4>
<ul>
  <li><strong>Đặc điểm:</strong> Nến đỏ sau bao trọn toàn bộ thân nến xanh trước đó.</li>
  <li><strong>Ý nghĩa:</strong> Phe bán hoàn toàn áp đảo phe mua.</li>
</ul>

<p><em>📌 <strong>Hiệu quả nhất tại:</strong> Đỉnh/đáy hoặc sau một pha hồi (pullback) trong xu hướng chính.</em></p>

<hr/>

<h3>3. Morning Star & Evening Star (Sao Mai / Sao Hôm)</h3>
<p>Đây là bộ 3 nến đảo chiều mạnh mẽ.</p>

<h4>Morning Star (Đảo chiều TĂNG)</h4>
<ol>
  <li>Nến giảm mạnh (theo xu hướng cũ).</li>
  <li>Nến do dự (thân nhỏ/Doji) thể hiện sự lưỡng lự.</li>
  <li>Nến tăng mạnh xác nhận đảo chiều.</li>
</ol>

<h4>Evening Star (Đảo chiều GIẢM)</h4>
<ol>
  <li>Nến tăng mạnh.</li>
  <li>Nến do dự.</li>
  <li>Nến giảm mạnh xác nhận.</li>
</ol>

<p>👉 Thể hiện sự chuyển giao quyền lực: Suy yếu của phe cũ → Cân bằng → Sự áp đảo của phe mới.</p>

<hr/>

<h3>4. Tweezer Top / Tweezer Bottom (Đỉnh nhíp / Đáy nhíp)</h3>
<ul>
  <li><strong>Đặc điểm:</strong> Hai nến liên tiếp có đỉnh (Top) hoặc đáy (Bottom) gần bằng nhau.</li>
  <li><strong>Ý nghĩa:</strong> Thể hiện phe còn lại không thể phá vỡ mức giá đó (tạo thành Hỗ trợ/Kháng cự cứng ngay tại khung thời gian đó).</li>
</ul>
`,
        level: "BASIC",
        tags: JSON.stringify(["Nến Nhật", "Đảo chiều", "Price Action"]),
        related: JSON.stringify(["Hỗ trợ Kháng cự", "Xu hướng"]),
        created_at: now,
        updated_at: now,
      },
      {
        id: "candle-continuation",
        topic: "CANDLESTICKS",
        title:"Hình nến TIẾP DIỄN (Continuation Patterns)",
        summary:
          "Các mô hình báo hiệu xu hướng hiện tại vẫn còn mạnh và sẽ tiếp tục.",
        content: `
<h2>Nhóm mô hình nến TIẾP DIỄN (Continuation Patterns)</h2>
<p>👉 <strong>Mục đích:</strong> Dùng để đi theo xu hướng (Trend Following), không phải để bắt đỉnh đáy.</p>
<img src="https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&w=900" alt="Candlestick Continuation Patterns">

<hr/>

<h3>1. Inside Bar (Nến nằm trong)</h3>
<ul>
  <li><strong>Đặc điểm:</strong> Nến sau (Mother Bar) nằm hoàn toàn trong phạm vi High-Low của nến trước.</li>
  <li><strong>Ý nghĩa:</strong> Thể hiện sự tích lũy, nén giá của thị trường sau một đợt chạy mạnh. Lò xo đang được nén lại để chuẩn bị bung ra.</li>
</ul>

<p>📌 <strong>Cách trade phổ biến:</strong></p>
<ul>
  <li>Đặt lệnh chờ (Stop Order) khi giá phá vỡ (Breakout) khỏi High hoặc Low của Mother Bar.</li>
  <li>Chỉ trade theo hướng của xu hướng chính (Trend).</li>
</ul>

<hr/>

<h3>2. Fakey (Inside Bar False Break)</h3>
<ul>
  <li><strong>Đặc điểm:</strong> Giá phá vỡ Inside Bar nhưng ngay lập tức quay đầu ngược lại mạnh mẽ.</li>
  <li><strong>Ý nghĩa:</strong> Bẫy giá (Trap). Cá mập quét Stop Loss của những người đánh Breakout sớm rồi đẩy giá đi theo hướng ngược lại.</li>
  <li><strong>Ứng dụng:</strong> Rất hay dùng trong Price Action nâng cao để bắt các cú False Break.</li>
</ul>

<hr/>

<h3>3. Marubozu (Nến trọc)</h3>
<ul>
  <li><strong>Đặc điểm:</strong> Nến thân dài, gần như không có bóng trên và bóng dưới.</li>
  <li><strong>Ý nghĩa:</strong> Thể hiện sức mạnh tuyệt đối và sự quyết liệt của phe Mua (nếu nến xanh) hoặc phe Bán (nếu nến đỏ).</li>
</ul>

<p>📌 <strong>Dùng để:</strong></p>
<ul>
  <li>Xác nhận Breakout (phá vỡ cản) uy tín.</li>
  <li>Giữ lệnh (Hold) tự tin khi thấy nến này xuất hiện trong xu hướng.</li>
</ul>
`,
        level: "ADVANCED",
        tags: JSON.stringify(["Tiếp diễn", "Inside Bar", "Fakey"]),
        related: JSON.stringify(["Trend Following", "Breakout"]),
        created_at: now,
        updated_at: now,
      },
      {
        id: "candle-indecision",
        topic: "CANDLESTICKS",
        title: "Hình nến DO DỰ (Indecision Patterns)",
        summary:
          "Thị trường đang nghỉ ngơi hoặc phân vân. Không nên vào lệnh ngay lúc này.",
        content: `
<h2>Nhóm mô hình nến DO DỰ (Indecision Patterns)</h2>
<p>👉 <strong>Mục đích:</strong> Không vào lệnh ngay – dùng để đánh giá tâm lý thị trường.</p>
<img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900" alt="Indecision Candlesticks">

<hr/>

<h3>1. Doji</h3>
<ul>
  <li><strong>Đặc điểm:</strong> Giá mở cửa và giá đóng cửa xấp xỉ bằng nhau (nhìn như dấu cộng).</li>
  <li><strong>Ý nghĩa:</strong> Sự cân bằng giữa phe Mua và phe Bán. Không ai thắng thế.</li>
</ul>

<p>📌 <strong>Cách hiểu đúng:</strong></p>
<ul>
  <li>Nếu xuất hiện sau một xu hướng tăng/giảm mạnh → <strong>Cảnh báo đảo chiều</strong> (phe tấn công đã mệt mỏi).</li>
  <li>Nếu xuất hiện trong vùng Sideway → <strong>Nhiễu</strong> (không có ý nghĩa nhiều).</li>
</ul>

<hr/>

<h3>2. Spinning Top (Con xoay)</h3>
<ul>
  <li><strong>Đặc điểm:</strong> Thân nến nhỏ, bóng trên và bóng dưới dài tương đương nhau.</li>
  <li><strong>Ý nghĩa:</strong> Thị trường đang phân vân, giằng co mạnh nhưng chưa có kết quả.</li>
</ul>
`,
        level: "BASIC",
        tags: JSON.stringify(["Doji", "Tâm lý", "Sideway"]),
        related: JSON.stringify(["Price Action", "Hỗ trợ Kháng cự"]),
        created_at: now,
        updated_at: now,
      },
      {
        id: "candle-context",
        topic: "CANDLESTICKS",
        title: "Giao dịch mô hình nến theo NGỮ CẢNH (Context Trading)",
        summary:
          "Mô hình nến chỉ là chữ cái. Ngữ cảnh mới là câu chuyện. Đọc hiểu câu chuyện đằng sau nến.",
        content: `
<h2>Giao dịch mô hình nến theo NGỮ CẢNH (Context Trading)</h2>
<p>🚨 <strong>Quan trọng nhất – hơn cả việc nhớ tên nến.</strong></p>
<p>Một sai lầm kinh điển của Newbie là cứ thấy Pin Bar là Buy, thấy Engulfing là Sell. Đây là lý do bạn thua lỗ.</p>
<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900" alt="Context Trading">

<hr/>

<h3>Mô hình nến chỉ có giá trị khi đặt đúng BỐI CẢNH:</h3>

<h4>1. Xu hướng (Trend)</h4>
<p>Bạn đang trade thuận xu hướng hay ngược xu hướng? Một Pin Bar tăng giá trong Downtrend mạnh thường sẽ bị fail (thất bại).</p>

<h4>2. Key Level (Vùng quan trọng)</h4>
<p>Mô hình nến có xuất hiện tại Hỗ trợ/Kháng cự, Supply/Demand hay Trendline không? Nếu nó xuất hiện "giữa hư không" (middle of nowhere), hãy bỏ qua.</p>

<h4>3. Cấu trúc thị trường</h4>
<p>Giá đang tạo HH-HL (Tăng) hay LH-LL (Giảm)? Cấu trúc luôn quan trọng hơn một, hai cây nến đơn lẻ.</p>

<h4>4. Thời điểm (Timing)</h4>
<p>Nến hình thành vào phiên nào (Á, Âu, Mỹ)? Có tin tức (News) quan trọng sắp ra không?</p>

<hr/>

<h3>Ví dụ thực tế</h3>
<ul>
  <li><strong>Bối cảnh Tốt:</strong> Pin Bar tăng giá xuất hiện tại vùng Hỗ trợ cứng, trong một xu hướng Tăng chủ đạo (Pullback). 👉 <strong>Xác suất thắng cao.</strong></li>
  <li><strong>Bối cảnh Xấu:</strong> Pin Bar tăng giá xuất hiện lơ lửng, ngay dưới vùng Kháng cự mạnh, trong xu hướng Giảm. 👉 <strong>Xác suất thua cao.</strong></li>
</ul>

<p><em>📌 <strong>Nguyên tắc vàng:</strong> Không trade mô hình nến – hãy trade CÂU CHUYỆN ĐẰNG SAU NẾN.</em></p>
`,
        level: "ADVANCED",
        tags: JSON.stringify(["Tư duy", "Context", "Price Action"]),
        related: JSON.stringify(["Cấu trúc thị trường", "Xu hướng"]),
        created_at: now,
        updated_at: now,
      },
    ]);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete("knowledge_articles", {});
  },
};
