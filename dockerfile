FROM node:latest
COPY . .
RUN npm install 
EXPOSE 1000
CMD ["node","index.js"]