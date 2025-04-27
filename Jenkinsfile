pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the code..'
            }
        }
        stage('UNIT TEST') {
            steps {
                echo 'Running the unit test...'
            }
        }
        stage('Deploytodevenv') {
            steps {
                echo 'Deploy to dev env...'
            }
        }
        stage('Deployprodenv') {
            steps {
                echo 'Deploying to production env...'
            }
        }
    }
}
