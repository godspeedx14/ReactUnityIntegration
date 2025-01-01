# ReactUnityIntegration

React Project integration with UnityWebgl Build

## Prerequisites

Make sure you have the following installed on your system before running this project:

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- npm (comes with Node.js)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/godspeedx14/ReactUnityIntegration.git

   ```

2. Navigate to the main project folder:

   ```bash
   cd ReactUnityIntegration

   ```

3. Install the required dependencies:

   ```bash
   npm install react-scripts
   npm install react-unity-webgl
   ```

## Configure

1. Create the Unity Webgl build if it doesn't exist.

2. Copy the Build folder from created Webgl folder to "ReactUnityIntegration/public/" (replace the already existing Build there)

3. Update the "ReactUnityIntegration/src/App.js" - Correct the name of files in this code with the files you copied in Build folder if needed.

   ```bash
   loaderUrl: "Build/temp_build.loader.js",
   dataUrl: "Build/temp_build.data",
   frameworkUrl: "Build/temp_build.framework.js",
   codeUrl: "Build/temp_build.wasm",
   ```

## Running the Project

1. To start the development server, use the following command:

   ```bash
   npm start
   ```

This will start the React application, and you can view it in your browser at http://localhost:3000.
