# Javascript 

## Biến (Variable) là gì ?
### Khái niệm
- Biến là “nơi lưu trữ được đặt tên” cho dữ liệu.
- Các giá trị, dữ liệu có thể thay đổi (nếu có tác động).

### Đặc điểm
#### 1. Lưu trữ dữ liệu
Biến được sử dụng để lưu trữ dữ liệu, bao gồm các số, chuỗi, ký tự và nhiều kiểu dữ liệu khác.
#### 2. Xử lý dữ liệu
Biến có thể thực hiện các phép tính và xử lý dữ liệu trong chương trình.
#### 3. Tính linh hoạt
Biến cho phép thay đổi giá trị của chúng trong quá trình chạy chương trình. Các biến là cần thiết để đảm bảo chương trình luôn phù hợp dù các giá trị
dữ liệu thay đổi.
#### 4. Quản lý dữ liệu
Thay vì lưu trữ dữ liệu vào các vùng nhớ khác nhau thì có thể sử dụng để lưu trữ tất cả giá trị tại một nơi.
Khi nào cần đến bất kỳ dữ liệu nào thì chỉ cần dùng cú pháp để lấy dữ liệu từ biến ra.
#### 5. Tiết kiệm tài nguyên
Biến được sử dụng để lưu trữ và xử lý dữ liệu. Nhờ vậy mà giảm thiểu sự lãng phí tài nguyên của máy tính và tăng tốc độ xử lý của chương trình.

### Cách hoạt động
- Để tạo ra một biến trong Javascript, hãy sử dụng từ khóa let.
`let message`
- Bây giờ để đưa một dữ liệu vào bằng cách sử dụng toán tử gán =:
``` let message; message = 'Hello'; //lưu trữ giá trị string 'Hello' trong biến tên message ```
- Chúng ta có thể khai báo nhiều biến trên cùng một dòng:
` let user = 'Kien', age = 25, message = 'Hello' `
- Khuyến khích không sử dụng điều đó. Để dễ đọc hơn hãy khai báo 1 dòng cho mỗi biến.
` let user = 'Kien';
    let age = 25;
    let message = 'Hello' `

- Chúng ta có thể thay đổi giá trị nhiều lần tùy ý
` let user = 'Kien'
`user = 'Cuong' //giá trị thay đổi
`user = 'Long' //giá trị tiếp tục thay đổi
console.log(user) //giá trị hiện tại đang là Long `

- Mỗi biến khai báo chỉ được một lần.
`let message = "This";
let message = "That" //lỗi ngay và luôn`

- Cách đặt tên biến
1. Tên chỉ được chứa chữ cái, chữ số hoặc các ký hiệu $ và _.
2. Ký tự đầu tiên không được là chữ số.

Khi tên chứa nhiều từ, camelCase thường được sử dụng.
Nghĩa là ngoại trừ từ đầu tiên, các từ sau được viết hoa chữ cái đầu tiên
VD: myLastName

- Để khai báo một biến giá trị không bao giờ thay đổi, hãy sử dụng const thay vì let
- Biến const khi được khai báo chúng không thể được gán lại. Nếu cố gắng làm vậy sẽ gây ra lỗi
- Các hằng số được đặt tên bằng chữ hoa chỉ được sử dụng làm bí danh cho các giá trị được “mã hóa cứng”.
VD: const COLOR_GREEN = "#0F0";

### Một số lưu ý
- Khi đặt tên biến thì phải có ý nghĩa rõ ràng, dễ hiểu, mô tả được dữ liệu được lưu trữ.
- Một số quy tắc cần tuân thủ: 
1. Sử dụng tên dễ đọc như userName hoặc shoppingCart
2. Không sử dụng chữ viết tắt hoặc các kiểu chữ như a, b ,c trừ khi biết bản thân đang làm gì.
3. Hãy đặt tên có tính mô tả và súc tích. Ví dụ về tên không tốt là data và value. Những tên như vậy không nói lên điều gì. Chỉ được sử dụng chúng nếu ngữ cảnh của mã làm cho dữ liệu hoặc giá trị nào mà biến đang tham chiếu trở nên rõ ràng.
4. Đồng ý về các điều khoản trong nhóm của bạn và trong suy nghĩ của bạn. Nếu khách truy cập trang web được gọi là "người dùng" thì chúng ta nên đặt tên các biến liên quan currentUser hoặc newUser thay vì currentVisitor hoặc newManInTown.

## Các kiểu dữ liệu trong Javascript
Có 8 kiểu dữ liệu cơ bản trong Javascript
- 7 kiểu dữ liệu nguyên thủy gồm: 
-  Kiểu dữ liệu number gồm số nguyên hoặc số dấu phẩy.
-  Kiểu dữ liệu string (chuỗi). Một chuỗi có thể có không hoặc nhiều kí tự, không có kí tự nào riêng biệt.
-  bigInt đối với số nguyên có độ dài tùy ý
-  Boolean kiểu True/ False
-  Null đối với các giá trị không xác định - kiểu giá trị độc lập duy nhất
-  undefined đối với giá trị chưa được gán
-  symbol để có mã định danh duy nhất

- Kiểu cuối cùng: object đối với các dữ liệu phức tạp hơn


