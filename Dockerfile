# Use the official Node.js image with the latest LTS version
FROM node:lts

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the application port (if your app runs on a specific port, specify it here)
# EXPOSE 3000

# Command to run the application (replace with your start command)
CMD ["npm", "src/index.js"]