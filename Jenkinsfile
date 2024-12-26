pipeline {
    agent any
    stages {
        stage('Start Minikube') {
            steps {
                script {
                    // Ensure Minikube is started
                    sh '''
                    minikube start --driver=docker
                    eval $(minikube -p minikube docker-env)
                    kubectl get nodes  // Test kubectl access
                    '''
                }
            }
        }
        stage('Deploy to Minikube') {
            steps {
                script {
                    // Apply Kubernetes manifests
                    sh 'kubectl apply -f springboot-backend/my-spring-boot-app.k8s.deployment.yaml'
                }
            }
        }
    }
}

