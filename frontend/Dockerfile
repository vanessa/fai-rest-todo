FROM node:12-slim

RUN mkdir /app/
WORKDIR /app/
ADD . /app/
RUN npm install

CMD ["npm", "run", "start"]
