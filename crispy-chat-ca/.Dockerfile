FROM maven:3-openjdk-8

COPY . .

RUN mvn clean install

ARG DB_URL
ENV DB_URL = $DB_URL

CMD mvn spring-boot:run

EXPOSE 8080
