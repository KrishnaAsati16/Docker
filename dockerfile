FROM node:latest
RUN npm install -g nodemon
Workdir /app
COPY . .
RUN npm install 
EXPOSE 1000
CMD ["npm","run","dev"]