FROM node:20-alpine
LABEL MAINTAINER="shivam-sharma7 <meshivam81@gmail.com>"
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
## EXPOSE [Port you mentioned in the vite.config file]
EXPOSE 3000
CMD ["npm", "run", "dev"]