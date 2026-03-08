FROM node:18
WORKDIR /usr/src/app
COPY functions/package*.json ./
RUN npm install
COPY functions/ ./
EXPOSE 5001
CMD ["npx", "firebase", "emulators:start", "--only", "functions,firestore"
