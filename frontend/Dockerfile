FROM node:13-slim

RUN mkdir /app/
WORKDIR /app/
ADD . /app/
RUN npm install

CMD ["npm", "run", "start"]
