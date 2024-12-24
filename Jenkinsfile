pipeline {
    agent any
	environment {
        	DOCKER_CREDS = credentials('docker-hub-credentials') // Reference your credentials ID here
   	   }
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
                    sh "echo $DOCKER_CREDS_PSWD | docker login -u $DOCKER_CREDS_USR --password-stdin"
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
            }
        }
    }
}

