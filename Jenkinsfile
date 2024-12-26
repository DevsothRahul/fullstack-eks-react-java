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
        stage('Login to Docker Hub') {
            steps {
                script {
                    // Docker login using credentials
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_CREDS_USR', passwordVariable: 'DOCKER_CREDS_PSWD')]) {
                        // The actual command to login using Docker credentials
                        sh "echo $DOCKER_CREDS_PSWD | docker login -u $DOCKER_CREDS_USR --password-stdin"
                    }
                }
            }
        }
        stage('Docker-Build') {
            steps {
                echo 'Docker Building.......'
                sh '''
                  docker build -t rahul1138/full-stack-springboot-eks:latest ./springboot-backend
                  '''
                sh "docker push rahul1138/full-stack-springboot-eks:latest"
                echo 'Docker image pushed into Hub'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
		//sh 'kubectl apply -f springboot-backend/my-spring-boot-app.k8s.deployment.yaml'
		sh '''#!/bin/bash
                    kubectl apply -f springboot-backend/my-spring-boot-app.k8s.deployment.yaml --validate=false
                    '''
            }
        }
    }
}

