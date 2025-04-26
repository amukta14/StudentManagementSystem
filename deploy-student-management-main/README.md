# Student Management System

A MERN stack application for managing student information.

## Local Development

1. Clone the repository
2. Install dependencies:
   ```
   yarn install-all
   ```
3. Create a `.env` file in the server directory with:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the development server:
   ```
   yarn dev
   ```

## Deploying to Render

### Automated Deployment with Blueprint

1. Fork this repository to your GitHub account
2. Create a new Web Service in Render
3. Connect your GitHub repository
4. Render will use the `render.yaml` file for configuration

### Manual Deployment

1. Create a new Web Service in Render
2. Connect your GitHub repository
3. Configure the following settings:
   - Build Command: `yarn install-all && yarn build`
   - Start Command: `yarn start`
4. Add the following environment variables:
   - `NODE_ENV`: `production`
   - `PORT`: `10000` (or let Render assign one)
   - `MONGO_URI`: Your MongoDB connection string

## Technologies Used

- MongoDB
- Express.js
- React
- Node.js
- Bootstrap for styling