
# Trang web quản lý phòng khám đa khoa Tâm An  - Tam An Clinic Management Web 

## Giới thiệu - Introduction

Trong bối cảnh xã hội ngày càng phát triển, môi trường sống ô nhiễm đã và đang đe dọa nghiêm trọng sức khỏe con người, thể hiện rõ qua các đại dịch gần đây như COVID-19 hay đậu mùa khỉ. Nhu cầu khám chữa bệnh vì thế tăng vọt, trong khi hệ thống bệnh viện công lập không thể đáp ứng đủ. Đây chính là lý do các phòng khám tư nhân xuất hiện ngày càng nhiều, kéo theo đó là nhu cầu cấp thiết về một ứng dụng web để quản lý hiệu quả.

## Local installation - Cài đặt để chạy local
Đầu tiên tải project về:
```bash
git clone https://github.com/tutranxuan/KTPM-21-Clinic-management-web.git
```
Tiếp theo mở project bằng Visual Studio Code, có thể download tại: https://code.visualstudio.com/download
Sau đó cài đặt Extension Live Server cho Visual Studio Code

Mở terminal và cài đặt node modules bằng lệnh 
```bash
npm install 
```
Sau đó chạy server bằng lệnh
```bash
npm start
```
Cuối cùng mở trình duyệt và nhập đường dẫn
```bash
http://localhost:3000
```
để truy cập vào trang web

## Current status
Tính năng chung cho cả bác sĩ và bệnh nhân
- Truy cập trang chủ, xem thông tin giới thiệu phòng khám
- Tra cứu danh sách bác sĩ
- Tra cứu thuốc
- Tra cứu dịch vụ
- Tải bảng dữ liệu thành file Excel, PDF
- Ẩn/hiện các cột của bảng 
- Copy bảng vào clipboard

Đối với riêng bệnh nhân
- Tạo tài khoản, chỉnh sửa thông tin cá nhân
- Đăng nhập, đăng xuất
- Đặt lịch hẹn khám bệnh
- Xem lịch sử khám bệnh

Đối với riêng bác sĩ
- Đăng nhập, đăng xuất tài khoản bác sĩ
- Chỉnh sửa lịch làm việc
- Tra cứu bệnh nhân
- Tra cứu hồ sơ bệnh án
- Chỉnh sửa thuốc, dịch vụ
- Xóa thuốc/dịch vụ
- Chỉnh sửa số bệnh nhân tối đa trong ngày
- Báo cáo doanh thu
- Báo cáo sử dụng thuốc
- Xem các báo cáo trước đây
- Lập và in phiếu khám bệnh
- Chỉnh sửa danh sách khám bệnh
- Chấp nhận/hủy phiếu hẹn khám bệnh



## Future works
Đối với cả bác sĩ và bệnh nhân:
- Đăng ký tài khoản bằng tài khoản Facebook, Google, Twitter, ...
- Nâng cao bảo mật của trang web

Đối với bệnh nhân
- Xóa tài khoản
- Đánh giá bác sĩ/dịch vụ/phòng khám (1-5 sao)
- Đăng ký những dịch vụ chăm sóc sức khỏe thường niên

Đối với bác sĩ
- Đăng bài viết chia sẻ về sức khỏe, kiến thức, ...
## Video demo

https://youtu.be/2jsDt6EmWVo