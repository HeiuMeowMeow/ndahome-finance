# NDAHOME Finance — Giao diện quản lý thu chi

Dự án demo Next.js (App Router, TypeScript, CSS thuần), sử dụng Recharts và Lucide React. Giao diện đen–vàng NDAHOME, responsive desktop/mobile.

## Chạy trên máy

Yêu cầu: Node.js 20.9+ (khuyến nghị Node.js 22 LTS).

```bash
npm install
npm run dev
```

Mở http://localhost:3000.

## Kiểm thử

```bash
npm run typecheck
npm run lint
npm run build
```

## Chức năng

- Dashboard: 4 KPI, biểu đồ thu chi 6 tháng, tỷ trọng thu chi, 5 giao dịch gần nhất.
- Khoản thu / Khoản chi: danh sách, tổng tiền toàn kỳ mẫu, thêm/sửa/xóa.
- Giao dịch: tìm kiếm, lọc tháng/ngày/danh mục, xuất CSV, khôi phục dữ liệu mẫu.
- Báo cáo: chọn ngày, tháng hoặc toàn kỳ; tổng thu, chi, chênh lệch; biểu đồ, phân tích danh mục.
- Các giao dịch được lưu tại `localStorage` của trình duyệt: refresh không mất thay đổi trên cùng trình duyệt.

## Giới hạn hiện tại

**Đây là demo frontend**. Chưa có xác thực, phân quyền thực, Next.js API, PostgreSQL, Prisma, đồng bộ đa thiết bị, nhật ký kiểm toán, hay xử lý kế toán chính thức. Không dùng dữ liệu tài chính thật hoặc triển khai công khai như hệ thống nội bộ bảo mật ở trạng thái này. Dữ liệu mẫu nằm tại `src/lib/finance.ts`, cố định kỳ ví dụ 11/2026. Đối với sử dụng thực tế cần bổ sung backend, database, xác thực/ủy quyền và validation phía server.

## Đẩy lên GitHub

Tạo repository trống trên GitHub, sau đó trong thư mục dự án:

```bash
git init
git add .
git commit -m "Initial NDAHOME finance dashboard demo"
git branch -M main
git remote add origin https://github.com/USERNAME/ndahome-finance.git
git push -u origin main
```

Đổi `USERNAME` thành tên GitHub của bạn. Không commit `.env` hoặc thông tin mật.
