# Logical Operators

## Có 3 kiểu dạng Toán tử Logic mà ta phải quan tâm
1. Toán tử HOẶC ( || )
2. Toán tử VÀ ( && )
3. Toán tử PHỦ ĐỊNH ( ! )

### Toán tử HOẶC (OR ||)
Toán tử "HOẶC" được kí hiệu bằng ||.

Trong lập trình cũ, toán tử HOẶC dùng để thao tác các giá trị Boolean. Nếu bất kì đối số nào của nó trả về True thì nó sẽ trả về True, nếu không thì sẽ trả về False.

Trong Javascript toán tử sẽ phức tạp hơn 1 chút.

Có 4 sự kết logic có thể có.
1. True || False -> True
2. True || True -> True
3. False || True -> True
4. False || False -> False
=> Chúng ta có thể thấy ở trong 3 trường hợp trên kết quả luôn luôn trả về True, ngoại trừ trường hợp cuối cùng cả hai toán hạng đều là False.

Trong bất kì trường hợp, OR || được sử dụng với câu lệnh điều kiện If để kiểm tra bất kì điều kiện nào được đưa ra có đúng hay không.

Ví dụ: 
` let hour = 9;`

`if (hour < 10 || hour > 18) {`
`  alert( 'The office is closed.' );`
`}`

Hiện giờ thuật toán đã được mở rộng như sau: 
- Đánh giá các toán hạng từ trái sang phải
- Đối với mỗi toán hạng, chuyển đổi thành Boolean. Nếu kết quả là True, dừng lại và trả về giá trị ban đầu của toán hạng đó.
- Nếu tất cả toán hạng đã được đánh giá (tất cả đều False) sẽ trả về toán hạng cuối cùng.

=> Toán tử HOẶC sẽ trả về giá trị thật đầu tiên hoặc giá trị thật cuối cùng nếu không tìm thấy giá trị thật nào.

### Toán tử VÀ (&&)
Toán tử VÀ được biểu diễn bằng hai dấu &&.

Trong lập trình cũ, AND sẽ trả về True nếu cả hai toán hạng đều đúng và ngược lại:
1. True && True -> True
2. True && False -> False
3. False && True -> False
4. False && False -> False

VÀ "&&" tìm giá trị sai đầu tiên.
Toán tử VÀ thực hiện các chức năng sau:
- Đánh giá các toán hạng từ trái sang phải
- Đối với mỗi toán hạng, chuyển đổi nó thành boolean. Nếu kết quả là False, chương trình sẽ dừng lại ngay và trả về giá trị ban đầu của nó.
- Nếu tất cả toán hạng đều đúng sẽ trả về toán hạng cuối cùng.

=> AND sẽ trả về giá trị sai đầu tiên hoặc giá trị cuối cùng nếu không tìm thấy giá trị nào.

### Toán tử phủ định (!)
Toán tử chấp nhận một đối số duy nhất và thực hiện các thao tác sau:

1. Chuyển đổi toán hạng thành kiểu boolean: true/false
2. Trả về giá trị nghịch đảo

Ví dụ: !true = false;
        !0 = true;

Thứ tự ưu tiên của NOT !là cao nhất trong tất cả các toán tử logic, do đó nó luôn được thực thi đầu tiên, trước &&hoặc ||.

