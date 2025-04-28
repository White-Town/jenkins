pipeline {
    agent any     
    environment {
        // Environment variables that will be available throughout the pipeline
        APP_NAME = 'nodejs-app'                   // Name of your application
        DOCKER_IMAGE = 'naresh3333/nodejs-app:${BUILD_NUMBER}' 
        // Docker image name with your DockerHub username and build number as tag
        DOCKER_REGISTRY = 'dockerhub'             // Using DockerHub as registry
        PROD_SERVER = 'local'                     // Indicates local deployment
    }

    stages {
        
        stage('Initialize') {
            steps {
                script {
                    // Verify Node.js and npm are available
                    sh 'node --version'  // Checks installed Node.js version
                    sh 'npm --version'   // Checks installed npm version
                }
            }
        }

        stage('Build') {
            steps {
                echo 'Building the Node.js application...'
                sh 'npm install'         // Installs all Node.js dependencies
                sh 'npm run build'      // Runs build script if defined in package.json
            }
        }

        stage('Unit Test') {
            steps {
                echo 'Running unit tests...'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo 'Building Docker image...'
                    sh 'docker build -t ${DOCKER_IMAGE} .'
                    sh 'docker push ${DOCKER_IMAGE}'
                }
            }
        }

        stage('Deploy to Prod Env') {
            steps {
                echo 'Deploying to production environment...'
                script {
                    sh 'docker run -d -p 80:3000 --name ${APP_NAME}-prod ${DOCKER_IMAGE}'
                }
            }
        }
    }
}