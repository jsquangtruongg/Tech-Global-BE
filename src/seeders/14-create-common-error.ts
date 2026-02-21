import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert("common_errors", [
      {
        id: "fomo-trading",
        name: "FOMO (Fear Of Missing Out)",
        category: "PSYCHOLOGY",
        severity: "high",
        content: `
         <h3>Định nghĩa</h3>
<p>
<strong>FOMO (Fear Of Missing Out)</strong> là trạng thái tâm lý <strong>sợ bỏ lỡ cơ hội</strong>,
khiến Trader vào lệnh vội vàng khi giá đã chạy mạnh,
thay vì tuân thủ kế hoạch giao dịch.
</p>

<img src="https://cdn.dnse.com.vn/dnse-news/2022/08/hieu-ung-fomo-trong-chung-khoan.jpg"
     alt="FOMO trong giao dịch - cảm xúc chi phối quyết định">

<p>
FOMO thường xuất hiện khi Trader đứng ngoài,
nhìn giá chạy mạnh và cảm thấy mình đang “bị bỏ lại phía sau”.
</p>

<hr/>

<h3>Dấu hiệu nhận biết FOMO</h3>
<ul>
  <li>
    <strong>Bồn chồn, lo lắng:</strong>
    Thấy giá tăng/giảm mạnh là tim đập nhanh, khó tập trung.
  </li>
  <li>
    <strong>Đuổi giá (Chase Price):</strong>
    Vào lệnh Market khi giá đã chạy xa vùng đẹp.
  </li>
  <li>
    <strong>Bỏ qua tín hiệu xác nhận:</strong>
    Không chờ nến, không chờ pullback.
  </li>
  <li>
    <strong>Liên tục kiểm tra biểu đồ:</strong>
    Mỗi vài phút lại mở chart, cảm xúc dao động theo từng cây nến.
  </li>
</ul>

<hr/>

<h3>Vì sao FOMO cực kỳ nguy hiểm?</h3>

<img src="https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=900"
     alt="Thua lỗ trong giao dịch vì cảm xúc">

<ul>
  <li>
    <strong>R:R rất xấu:</strong>
    Lợi nhuận tiềm năng ít nhưng Stop Loss phải đặt xa.
  </li>
  <li>
    <strong>Dễ dính đảo chiều:</strong>
    FOMO thường xảy ra gần cuối sóng.
  </li>
  <li>
    <strong>Chuỗi thua lỗ liên tiếp:</strong>
    Thua vì FOMO → cay cú → FOMO tiếp.
  </li>
  <li>
    <strong>Phá vỡ kỷ luật giao dịch:</strong>
    Một lần phá plan sẽ kéo theo nhiều lần sau.
  </li>
</ul>

<hr/>

<h3>Cách khắc phục FOMO</h3>

<h4>1. Chấp nhận bỏ lỡ</h4>
<p>
Thị trường luôn có cơ hội mới.
Bỏ lỡ một lệnh không đồng nghĩa với bỏ lỡ lợi nhuận cả đời.
</p>

<h4>2. Chỉ giao dịch khi có kế hoạch</h4>
<p>
Không có Entry – SL – TP rõ ràng → không vào lệnh.
</p>

<img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900"
     alt="Trading plan và quản lý rủi ro">

<h4>3. Ưu tiên chờ Pullback / Retest</h4>
<p>
Trader chuyên nghiệp không đuổi giá.
Họ chờ giá quay về vùng có lợi thế.
</p>

<h4>4. Giảm khối lượng giao dịch</h4>
<p>
Volume càng lớn → cảm xúc càng mạnh → FOMO càng nặng.
</p>

<h4>5. Ghi nhật ký giao dịch</h4>
<p>
Viết lại lý do vào lệnh giúp bạn nhận diện FOMO rất nhanh.
</p>

<hr/>

<h3>Checklist nhanh trước khi vào lệnh</h3>

<img src="https://cdn.vietnambiz.vn/2019/12/18/124487dark-blue-powerpoint-backgrounds-invitation-templates1600x1200h-1571196843793144127289-1576635715664744654601.jpg"
     alt="Kiểm soát quyết định trước khi vào lệnh">

<ul>
  <li>Mình vào lệnh vì kế hoạch hay vì cảm xúc?</li>
  <li>Giá đã chạy quá xa chưa?</li>
  <li>Có điểm vào tốt hơn nếu chờ không?</li>
  <li>R:R có đạt tối thiểu 1:2 không?</li>
</ul>

<p>
<em>
📌 <strong>Ghi nhớ:</strong><br/>
FOMO không phải là bỏ lỡ cơ hội,<br/>
mà là <strong>tự đẩy mình vào những lệnh rủi ro nhất</strong>.
</em>
</p>
        `,
        tags: JSON.stringify(["Tâm lý", "Cảm xúc", "Kỷ luật"]),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "revenge-trading",
        name: "Giao dịch trả thù (Revenge Trading)",
        category: "PSYCHOLOGY",
        severity: "high",
        content: `
         <h2>Revenge Trading (Giao dịch trả thù)</h2>

<h3>Định nghĩa</h3>
<p>
<strong>Revenge Trading</strong> là hành động cố gắng vào lệnh ngay lập tức sau khi thua lỗ
với mục tiêu <em>gỡ lại số tiền đã mất</em>, thường đi kèm với việc 
<strong>tăng khối lượng giao dịch</strong> và bỏ qua hoàn toàn kế hoạch ban đầu.
</p>
<p>
Đây là một trong những hành vi nguy hiểm nhất trong trading vì nó xuất phát
từ <strong>cảm xúc tức giận, cay cú và không chấp nhận thua lỗ</strong>.
</p>

<img 
  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800" 
  alt="Revenge Trading - Giao dịch trả thù"
>

<h3>Dấu hiệu nhận biết</h3>
<ul>
  <li>
    <strong>Vào lệnh ngay sau khi vừa thua:</strong> 
    Không phân tích lại thị trường, không chờ setup rõ ràng.
  </li>
  <li>
    <strong>Tăng volume bất thường:</strong> 
    Vào khối lượng lớn hơn bình thường với suy nghĩ “gỡ một lệnh là về bờ”.
  </li>
  <li>
    <strong>Giao dịch liên tục:</strong> 
    Mở nhiều lệnh trong thời gian ngắn, không nghỉ giữa các lệnh.
  </li>
  <li>
    <strong>Mất bình tĩnh:</strong> 
    Cảm xúc chi phối hoàn toàn quyết định, dễ bấm lệnh theo cảm giác.
  </li>
</ul>

<img 
  src="https://vananh-psy.com/wp-content/uploads/2022/06/5.png" 
  alt="Cảm xúc tiêu cực khi giao dịch thua lỗ"
>

<h3>Hậu quả của Revenge Trading</h3>
<ul>
  <li>
    <strong>Thua lỗ chồng thua lỗ:</strong> 
    Lệnh thua ban đầu nhỏ nhưng chuỗi revenge trade khiến tài khoản bốc hơi nhanh.
  </li>
  <li>
    <strong>Mất kiểm soát tài khoản:</strong> 
    Không tuân thủ quản lý vốn, rủi ro vượt xa mức cho phép.
  </li>
  <li>
    <strong>Tâm lý suy sụp:</strong> 
    Stress, tức giận, mất niềm tin vào bản thân và hệ thống giao dịch.
  </li>
  <li>
    <strong>Dễ cháy tài khoản:</strong> 
    Chỉ cần một biến động ngược chiều mạnh là tài khoản có thể về 0.
  </li>
</ul>

<h3>Giải pháp kiểm soát Revenge Trading</h3>
<ol>
  <li>
    <strong>Ngừng giao dịch ngay sau lệnh thua lớn:</strong> 
    Đóng nền tảng giao dịch, rời khỏi màn hình ít nhất 30 phút – 1 giờ.
  </li>
  <li>
    <strong>Đặt giới hạn thua lỗ trong ngày:</strong> 
    Ví dụ: thua 2 lệnh liên tiếp hoặc mất 2% tài khoản → dừng trade trong ngày.
  </li>
  <li>
    <strong>Không tăng volume để gỡ:</strong> 
    Mỗi lệnh là độc lập. Thị trường không biết và không quan tâm bạn vừa thua.
  </li>
  <li>
    <strong>Ghi nhật ký cảm xúc:</strong> 
    Sau mỗi lệnh thua, ghi lại cảm xúc của bạn để nhận diện sớm revenge trade.
  </li>
  <li>
    <strong>Quay lại Trading Plan:</strong> 
    Chỉ vào lệnh khi setup hội đủ điều kiện như đã định trước.
  </li>
</ol>

<h3>Checklist tự hỏi trước khi vào lệnh tiếp theo</h3>
<ul>
  <li>Mình vào lệnh vì setup hay vì đang cay cú?</li>
  <li>Lệnh này có đúng plan không?</li>
  <li>Volume có giống các lệnh trước không?</li>
  <li>Nếu thua tiếp, mình có chấp nhận được không?</li>
</ul>

<p>
<em>
📌 <strong>Ghi nhớ:</strong> 
Trader thua không phải vì một lệnh thua, mà vì <strong>không dừng lại sau lệnh thua đó</strong>.
Kiểm soát được Revenge Trading là bước quan trọng để sống sót lâu dài trên thị trường.
</em>
</p>

        `,
        tags: JSON.stringify(["Tâm lý", "Quản lý vốn", "Nguy hiểm"]),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "no-stop-loss",
        name: "Không đặt Stop Loss (Cắt lỗ)",
        category: "RISK",
        severity: "high",
        content: `
          <h2>Không đặt Stop Loss / Dời Stop Loss vô kỷ luật</h2>

<p>
Đây là một trong những sai lầm nguy hiểm nhất trong trading. Trader vào lệnh nhưng không xác định trước mức thua lỗ tối đa có thể chấp nhận,
hoặc khi giá đi ngược thì liên tục dời Stop Loss xa hơn với hy vọng thị trường sẽ quay đầu.
</p>

<img 
  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800" 
  alt="Không đặt Stop Loss trong trading"
>

<h3>Dấu hiệu nhận biết</h3>
<ul>
  <li>Vào lệnh mà không đặt Stop Loss ngay từ đầu.</li>
  <li>Liên tục tự nhủ: <em>"Chắc giá chỉ quét nhẹ rồi quay đầu"</em>.</li>
  <li>Dời Stop Loss xa hơn khi giá đi ngược để tránh bị cắt lỗ.</li>
  <li>Lệnh lỗ nhỏ ban đầu biến thành lỗ lớn.</li>
  <li>Tài khoản giảm mạnh chỉ vì một hoặc hai lệnh.</li>
</ul>

<h3>Rủi ro</h3>
<ul>
  <li><strong>Cháy tài khoản:</strong> Một cú biến động mạnh có thể xóa sạch vốn.</li>
  <li><strong>Mất kiểm soát cảm xúc:</strong> Càng lỗ càng sợ cắt, càng gồng.</li>
  <li><strong>Phá vỡ hệ thống giao dịch:</strong> Không còn tuân theo Risk/Reward đã tính toán.</li>
  <li><strong>Tâm lý hoảng loạn:</strong> Dễ dẫn đến revenge trading (gỡ gạc).</li>
</ul>

<img 
  src="https://vietcap.com.vn/api/cms-api/uploads/froala/images/1678984105831.png" 
  alt="Gồng lỗ và cháy tài khoản"
>

<h3>Cách khắc phục</h3>
<ol>
  <li>
    <strong>Stop Loss là bắt buộc:</strong> 
    Không có Stop Loss thì không có giao dịch.
  </li>
  <li>
    <strong>Đặt Stop Loss trước khi vào lệnh:</strong> 
    Xác định rõ điểm sai của nhận định (invalid point).
  </li>
  <li>
    <strong>Chấp nhận thua lỗ nhỏ:</strong> 
    Mỗi lệnh chỉ rủi ro 1–2% tài khoản.
  </li>
  <li>
    <strong>Không dời SL khi chưa có lý do kỹ thuật:</strong> 
    Chỉ dời SL khi giá đi đúng hướng (Trailing Stop).
  </li>
  <li>
    <strong>Tư duy bảo toàn vốn:</strong> 
    Sống sót lâu dài quan trọng hơn thắng một lệnh.
  </li>
</ol>

<p>
<em>📌 <strong>Ghi nhớ:</strong> 
Không đặt Stop Loss không phải là tự tin, đó là liều lĩnh. 
Trader giỏi không phải người luôn đúng, mà là người thua lỗ có kiểm soát.
</em>
</p>

        `,
        tags: JSON.stringify(["Quản lý vốn", "Cơ bản", "Bắt buộc"]),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "over-leveraging",
        name: "Sử dụng đòn bẩy quá cao (Over-leveraging)",
        category: "RISK",
        severity: "high",
        content: `
          <h2>Lạm dụng đòn bẩy (Overleveraging)</h2>

<p>
Lạm dụng đòn bẩy là việc sử dụng mức leverage quá cao so với quy mô tài khoản và khả năng chịu đựng rủi ro.
Điều này khiến chỉ một biến động nhỏ của thị trường cũng có thể gây thiệt hại nghiêm trọng, thậm chí cháy tài khoản.
</p>

<img 
  src="https://images.unsplash.com/photo-1604594849809-dfedbc827105?auto=format&fit=crop&w=800" 
  alt="Lạm dụng đòn bẩy trong trading"
>

<h3>Dấu hiệu nhận biết</h3>
<ul>
  <li>Sử dụng đòn bẩy tối đa mà sàn cho phép (x50, x100, x200…).</li>
  <li>Vào lệnh với khối lượng lớn dù tài khoản nhỏ.</li>
  <li>Chỉ cần giá đi ngược vài pip đã bị áp lực tâm lý nặng nề.</li>
  <li>Thường xuyên bị quét Stop Loss hoặc bị thanh lý.</li>
  <li>Thắng vài lệnh nhỏ nhưng chỉ cần một lệnh thua là mất phần lớn tài khoản.</li>
</ul>

<h3>Rủi ro</h3>
<ul>
  <li><strong>Cháy tài khoản nhanh:</strong> Biến động nhỏ cũng đủ thổi bay vốn.</li>
  <li><strong>Áp lực tâm lý lớn:</strong> Không thể giữ lệnh đúng kế hoạch.</li>
  <li><strong>Mất kiểm soát giao dịch:</strong> Dễ FOMO, gồng lỗ hoặc revenge trade.</li>
  <li><strong>Hiệu suất không ổn định:</strong> Tài khoản lên xuống mạnh như đánh bạc.</li>
</ul>

<img 
  src="https://laodongvaphapluat.laodongthudo.vn/stores/news_dataimages/2023/042023/16/12/c533156798e3c5307f3ca80d19b8843a.jpg?rt=20231108151109" 
  alt="Biến động nhỏ gây thiệt hại lớn"
>

<h3>Cách khắc phục</h3>
<ol>
  <li>
    <strong>Ưu tiên quản lý rủi ro thay vì leverage cao:</strong> 
    Đòn bẩy chỉ là công cụ, không phải vũ khí làm giàu nhanh.
  </li>
  <li>
    <strong>Giới hạn rủi ro mỗi lệnh:</strong> 
    Chỉ rủi ro 1–2% tài khoản cho mỗi giao dịch.
  </li>
  <li>
    <strong>Giảm khối lượng giao dịch:</strong> 
    Tài khoản nhỏ thì trade nhỏ, không “đánh to cho nhanh giàu”.
  </li>
  <li>
    <strong>Chọn leverage vừa đủ:</strong> 
    Leverage thấp giúp bạn chịu được biến động và giữ tâm lý ổn định.
  </li>
  <li>
    <strong>Tư duy dài hạn:</strong> 
    Mục tiêu của trader là tồn tại và tăng trưởng đều, không phải thắng lớn trong vài ngày.
  </li>
</ol>

<p>
<em>📌 <strong>Ghi nhớ:</strong> 
Đòn bẩy cao không làm bạn giỏi hơn, nó chỉ phóng đại sai lầm nhanh hơn.
Trader chuyên nghiệp luôn kiểm soát rủi ro trước khi nghĩ đến lợi nhuận.
</em>
</p>

        `,
        tags: JSON.stringify(["Đòn bẩy", "Rủi ro cao"]),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "analysis-paralysis",
        name: "Tê liệt phân tích (Analysis Paralysis)",
        category: "PROCESS",
        severity: "medium",
        content: `
          <h2>Tê liệt phân tích (Analysis Paralysis) trong Trading</h2>

<p>
<strong>Tê liệt phân tích (Analysis Paralysis)</strong> là trạng thái tâm lý khi Trader
phân tích <strong>quá nhiều</strong> nhưng lại <strong>không thể đưa ra quyết định</strong>.
Càng thêm chỉ báo, càng đọc nhiều góc nhìn, Trader càng rối,
dẫn đến bỏ lỡ cơ hội hoặc vào lệnh rất muộn.
</p>

<p>
Đây là một dạng <strong>ngụy trang của nỗi sợ hãi</strong>:
sợ sai, sợ thua, sợ chịu trách nhiệm cho quyết định của mình,
nên bộ não tìm cách trì hoãn hành động bằng… phân tích thêm.
</p>

<img 
  src="https://www.scotthyoung.com/blog/wp-content/uploads/2019/01/paralysis-001.png"
  alt="Analysis Paralysis - Quá tải phân tích">

<hr/>

<h3>Nguyên nhân phổ biến gây tê liệt phân tích</h3>
<ul>
  <li>
    <strong>Quá nhiều chỉ báo kỹ thuật:</strong>
    RSI báo quá mua, MACD vẫn tăng, EMA cho tín hiệu Buy,
    nhưng Stochastic lại cho Sell → mâu thuẫn liên tục.
  </li>
  <li>
    <strong>Theo dõi quá nhiều timeframe:</strong>
    M5 Buy, M15 Sideway, H1 Sell, H4 Trend tăng →
    không biết nên tin khung nào.
  </li>
  <li>
    <strong>Tiêu thụ quá nhiều ý kiến:</strong>
    Telegram nói Buy, YouTube nói Sell, Twitter bảo sắp sập →
    mất hoàn toàn góc nhìn cá nhân.
  </li>
  <li>
    <strong>Không có quy trình giao dịch rõ ràng:</strong>
    Không biết khi nào thì “đủ điều kiện” để vào lệnh,
    nên cứ phân tích mãi không dừng.
  </li>
</ul>

<hr/>

<h3>Biểu hiện của Analysis Paralysis</h3>
<ul>
  <li>Ngồi nhìn chart rất lâu nhưng không click được chuột.</li>
  <li>Liên tục thêm bớt indicator để “xác nhận thêm”.</li>
  <li>Giá chạy đúng hướng sau khi bỏ lỡ → nói “lúc nãy suýt vào”.</li>
  <li>Vào lệnh rất muộn khi giá đã đi xa (chuyển sang FOMO).</li>
</ul>

<hr/>

<h3>Hậu quả trong Trading</h3>
<ul>
  <li>
    <strong>Bỏ lỡ các setup đẹp:</strong>
    Không phải vì không thấy, mà vì không dám quyết.
  </li>
  <li>
    <strong>Mất lợi thế R:R:</strong>
    Vào muộn → Stop Loss xa, Take Profit ngắn.
  </li>
  <li>
    <strong>Rối loạn tâm lý:</strong>
    Thấy thị trường lúc nào cũng “khó trade”.
  </li>
  <li>
    <strong>Chuyển sang Overtrading:</strong>
    Sau thời gian đứng ngoài, vào lệnh bù đắp cảm xúc.
  </li>
</ul>

<hr/>

<h3>Cách khắc phục tê liệt phân tích</h3>

<h4>1. Đơn giản hóa hệ thống giao dịch</h4>
<p>
Một hệ thống hiệu quả <strong>không cần nhiều chỉ báo</strong>.
Ví dụ:
</p>
<ul>
  <li>Xu hướng (Market Structure hoặc EMA)</li>
  <li>Key Level (Support / Resistance)</li>
  <li>1 tín hiệu Price Action xác nhận</li>
</ul>
<p>
Nếu đủ 3 yếu tố → vào lệnh. Không đủ → đứng ngoài.
</p>

<h4>2. Cố định timeframe chính</h4>
<p>
Chọn <strong>1 khung chính để vào lệnh</strong> (ví dụ M15 hoặc H1),
khung lớn chỉ dùng để xác định xu hướng.
Đừng để mỗi timeframe kéo bạn về một hướng khác nhau.
</p>

<h4>3. Dùng checklist thay cho cảm xúc</h4>
<ul>
  <li>Xu hướng rõ ràng chưa?</li>
  <li>Giá ở vùng quan trọng chưa?</li>
  <li>Có tín hiệu nến xác nhận không?</li>
  <li>R:R tối thiểu 1:2 chưa?</li>
</ul>
<p>
Checklist đạt → vào. Không đạt → bỏ.
Không tranh luận với checklist.
</p>

<h4>4. Chấp nhận rằng không có lệnh hoàn hảo</h4>
<p>
Không có setup nào chắc thắng 100%.
Trader chuyên nghiệp <strong>không đợi sự chắc chắn</strong>,
họ chỉ cần <strong>xác suất + kỷ luật</strong>.
</p>

<h4>5. Giới hạn thời gian phân tích</h4>
<p>
Quy định rõ: 
<strong>tối đa 5–10 phút cho một quyết định</strong>.
Hết thời gian mà chưa đủ điều kiện → bỏ qua.
</p>

<hr/>

<h3>Case study: Quá nhiều chỉ báo</h3>
<p>
Một Trader dùng cùng lúc RSI, MACD, EMA, Bollinger Bands, Fibonacci.
Mỗi chỉ báo cho một tín hiệu khác nhau → không vào lệnh.
</p>
<ol>
  <li>Xóa toàn bộ indicator.</li>
  <li>Giữ lại cấu trúc xu hướng + 1 EMA.</li>
  <li>Chờ tín hiệu nến tại Key Level.</li>
  <li>Kết quả: Ít lệnh hơn, nhưng rõ ràng và tự tin hơn.</li>
</ol>

<hr/>

<h3>Checklist chống Analysis Paralysis</h3>
<ul>
  <li>Mình đang phân tích để quyết định hay để trì hoãn?</li>
  <li>Hệ thống có quy định rõ “khi nào vào lệnh” không?</li>
  <li>Có quá nhiều tín hiệu mâu thuẫn không cần thiết?</li>
  <li>Nếu bỏ lỡ lệnh này, mình có chấp nhận được không?</li>
</ul>

<p>
<em>
📌 <strong>Ghi nhớ:</strong><br/>
Phân tích giỏi không phải là phân tích nhiều,<br/>
mà là <strong>biết khi nào nên dừng lại và hành động</strong>.
</em>
</p>

        `,
        tags: JSON.stringify(["Phân tích kỹ thuật", "Quy trình"]),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "poor-connection",
        name: "Sự cố kết nối mạng/thiết bị",
        category: "TECHNICAL",
        severity: "low",
        content: `
          <h2>Rủi ro kỹ thuật (Technical Risk)</h2>

<p>
Rủi ro kỹ thuật xảy ra khi trader gặp sự cố về hạ tầng như mất kết nối internet, mất điện, thiết bị hỏng hóc
trong lúc đang giao dịch, đặc biệt nguy hiểm khi đang có lệnh mở trên thị trường.
</p>

<img 
  src="https://s3.remitano.com/uploads/markdown_image/attachment/78082/image.png" 
  alt="Rủi ro kỹ thuật trong trading"
>

<h3>Dấu hiệu thường gặp</h3>
<ul>
  <li>Mất mạng đột ngột khi thị trường đang biến động mạnh.</li>
  <li>Máy tính treo, sập nguồn hoặc lỗi phần mềm giao dịch.</li>
  <li>Không thể đăng nhập tài khoản để đóng lệnh kịp thời.</li>
  <li>Đặt lệnh nhưng không khớp, hoặc không dời được Stop Loss.</li>
</ul>

<h3>Rủi ro</h3>
<ul>
  <li><strong>Không thể quản lý lệnh:</strong> Giá chạy mạnh nhưng không thể đóng lệnh.</li>
  <li><strong>Thua lỗ ngoài kiểm soát:</strong> SL không được dời hoặc không hoạt động đúng lúc.</li>
  <li><strong>Áp lực tâm lý cao:</strong> Hoảng loạn vì bất lực trước thị trường.</li>
  <li><strong>Mất kỷ luật giao dịch:</strong> Dễ dẫn đến revenge trade sau khi kết nối lại.</li>
</ul>

<h3>Cách phòng tránh</h3>
<ol>
  <li>
    <strong>Luôn có phương án dự phòng:</strong> 
    Chuẩn bị sẵn 4G/5G, điện thoại hoặc thiết bị khác để đăng nhập tài khoản.
  </li>
  <li>
    <strong>Đặt Stop Loss ngay khi vào lệnh:</strong> 
    Không bao giờ giữ lệnh mà không có SL bảo vệ.
  </li>
  <li>
    <strong>Hạn chế giữ lệnh khi biết hạ tầng không ổn định:</strong> 
    Nếu mạng yếu hoặc sắp mất điện, tốt nhất không vào lệnh mới.
  </li>
  <li>
    <strong>Sử dụng VPS (nếu cần):</strong> 
    Đặc biệt với trader giữ lệnh dài hoặc giao dịch tin tức.
  </li>
</ol>

<p>
<em>📌 <strong>Ghi nhớ:</strong> 
Kế hoạch giao dịch tốt đến đâu cũng vô nghĩa nếu bạn không thể kiểm soát lệnh.
Quản lý rủi ro kỹ thuật là một phần bắt buộc của trader chuyên nghiệp.
</em>
</p>

        `,
        tags: JSON.stringify(["Kỹ thuật", "Thiết bị"]),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete("common_errors", {});
  },
};
