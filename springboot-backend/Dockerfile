# Use a base image with JDK
FROM openjdk:17

# Set the working directory
WORKDIR /app

# Copy the Maven or Gradle build files
COPY pom.xml ./
COPY src ./src

# Package the application
RUN ./mvnw package -DskipTests

# Use a lightweight image for the final deployment
FROM openjdk:17

# Set the working directory
WORKDIR /app

# Copy the jar file from the build stage
COPY target/springboot-backend-0.0.1-SNAPSHOT.jar app.jar


# Expose the application port
EXPOSE 8080

# Command to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
