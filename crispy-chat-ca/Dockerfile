FROM openjdk:8-jdk-alpine
RUN apk update && apk upgrade && apk add maven

COPY ./pom.xml .
RUN mvn clean install

COPY . .
ENTRYPOINT mvn spring-boot:run
EXPOSE 8080