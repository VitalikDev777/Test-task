# Step 1: Use a compatible Node.js version (18 or above)
FROM node:18-alpine

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of your project files
COPY . .

# Step 6: Build the Next.js app for production
RUN npm run build

# Step 7: Expose port for the application
EXPOSE 3000

# Step 8: Start the Next.js application
CMD ["npm", "start"]
