# Sử dụng image gốc là Node.js để xây dựng ứng dụng React
FROM node:16-alpine

RUN mkdir -p /usr/app/client
WORKDIR /usr/app/client
COPY package*.json /usr/app/client/
RUN npm install
RUN npm install -g serve
COPY . /usr/app/client
EXPOSE 80
RUN npm run build
CMD ["serve", "-s", "build", "-l", "80" ]
