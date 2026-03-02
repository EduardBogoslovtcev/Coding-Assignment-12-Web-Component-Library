# Stage 1: Build Storybook
FROM node:20-alpine AS build

WORKDIR /Bogoslovtcev_Eduard_ui_garden

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build-storybook


# Stage 2: Serve Storybook
FROM nginx:alpine

WORKDIR /Bogoslovtcev_Eduard_ui_garden

COPY --from=build /Bogoslovtcev_Eduard_ui_garden/storybook-static /usr/share/nginx/html

EXPOSE 8083

CMD ["nginx", "-g", "daemon off;"]