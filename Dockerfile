FROM php:7.4-apache

COPY ./app/web /var/www/html/
EXPOSE 8080