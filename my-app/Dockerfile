FROM node


WORKDIR /app


COPY package.json yarn.lock ./


RUN yarn install --frozen-lockfile

COPY . .



EXPOSE 5173

CMD ["yarn", "run", "dev"]