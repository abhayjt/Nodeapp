FROM node:20

WORKDIR /Myapp

COPY package*.json ./

# Configure npm retry strategy

# Install dependencies
RUN npm set fetch-retries=5 \
    && npm set fetch-retry-mintimeout=20000 \
    && npm set fetch-retry-maxtimeout=120000 && npm install

# Copy the rest of the application files
COPY . .

# Expose port
EXPOSE 3000

# Run the application
#CMD ["node", "index.js"]
CMD ["sh", "-c", "node index.js"]

