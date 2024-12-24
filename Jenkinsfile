pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm  // Ensure that the code is checked out
            }
        }
        stage('Build') {
            steps {
                dir('springboot-backend') { // Navigate to the directory containing pom.xml
                    sh './mvnw -B -DskipTests clean package' // Run Maven wrapper or 'mvn' command
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}

