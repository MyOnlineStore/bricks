# This is the Dockerfile required to automatically deploy a static version of bricks to now.sh on every push to the Github repo 

FROM mhart/alpine-node:10

# Set the default working directory
WORKDIR /usr/src

# Install dependencies
COPY package.json ./
RUN npm install

# Copy the relevant files to the working directory
COPY . .

# Build and export the app
RUN npm run build-now