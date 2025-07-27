This project contains a ReactJS frontend and a Spring Boot backend, both containerized and deployed on Minikube Kubernetes cluster. It can be easily adapted for EKS as well.

📦 Prerequisites
    Minikube
    Docker
    Node.js & npm
    Maven
    Jenkins (installed as Docker container or server)
    kubectl
    Docker Hub account (or private registry)



🟢 Minikube Setup
 
 minikube status           # Check current Minikube status
 minikube start            # Start the Minikube cluster
 

🔁 Jenkins CI/CD Integration
📌 Jenkins Job Tasks
    Clone the Git Repository
    Build React & Spring Boot Apps
    Build Docker Images
    Push to Docker Hub
    Deploy to Kubernetes via kubectl


✅ Access the App
Component	      URL
React Frontend	http://localhost:3000
Spring Boot API	http://localhost:8080





Manual Running:
================

Reactjs-front-end:

npm run build

sudo docker build -t rahul1138/demo-reactjs:latest .

sudo docker push rahul1138/demo-reactjs:latest

kubectl apply -f reactjs-app.k8s.deployment.yaml

kubectl get all

kubectl port-forward svc/react-app 3000:80

http://localhost:3000


SpringBoot-Backend


mvn clean install

sudo docker build -t rahul1138/my-spring-boot-app:latest .

sudo docker push rahul1138/my-spring-boot-app:latest

kubectl apply -f my-spring-boot-app.k8s.deployment.yaml

kubectl port-forward svc/spring-boot-service 8080:8080


http://localhost:8080
