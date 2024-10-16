
minikube status

minikube start


Reactjs-front-end
#############

npm run build

sudo docker build -t rahul1138/demo-reactjs:latest .

sudo docker push rahul1138/demo-reactjs:latest

kubectl apply -f reactjs-app.k8s.deployment.yaml

kubectl get all

kubectl port-forward svc/react-app 3000:80

http://localhost:3000


SpringBoot-Backend
##################

mvn clean install

sudo docker build -t rahul1138/my-spring-boot-app:latest .

sudo docker push rahul1138/my-spring-boot-app:latest

kubectl apply -f my-spring-boot-app.k8s.deployment.yaml

kubectl port-forward svc/spring-boot-service 8080:8080

