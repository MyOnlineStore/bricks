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

RUN cd /public && ls -la