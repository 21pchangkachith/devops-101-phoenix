# syntax=docker/dockerfile:1

FROM node:12.18.1
ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY . .
RUN npm install --production

EXPOSE 3000
#CMD ["ls"]
CMD ["node", "index.js"]
