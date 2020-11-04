FROM maven:3-openjdk-8

COPY . .

RUN mvn clean install

ARG DB_URL
ARG DB_USER
ARG DB_PASSWORD
ENV DB_URL = $DB_URL
ENV DB_USER = $DB_USER
ENV DB_PASSWORD = $DB_PASSWORD

RUN mvn package

CMD DB_URL=$DB_URL DB_USER=$DB_USER DB_PASSWORD=$DB_PASSWORD java -jar ./target/crispy-chat-ca-0.0.1-SNAPSHOT.war --spring.config.location=classpath:/application-prod.properties

EXPOSE 8080
