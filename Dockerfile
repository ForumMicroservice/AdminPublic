FROM node:20-alpine
WORKDIR /usr/src/app/admin
COPY . ./
#EXPOSE 3000
RUN ["yarn","install"]
EXPOSE 5173