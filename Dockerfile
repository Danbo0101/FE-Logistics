# Sử dụng image gốc là Node.js để xây dựng ứng dụng React
FROM node:14-alpine

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép các tệp package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn ứng dụng vào thư mục làm việc
COPY . .

# Xây dựng ứng dụng React
RUN npm run build

# Thiết lập môi trường biến cho ứng dụng React
ENV NODE_ENV=production

# Cung cấp cổng mà ứng dụng sẽ lắng nghe
EXPOSE 80
EXPOSE 3000

# Chạy ứng dụng React khi container được khởi chạy
CMD [ "npm", "start" ]