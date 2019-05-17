FROM nginx:latest

COPY ./nginx/conf.d/wordpress.conf /etc/nginx/conf.d
COPY ./nginx/ssl /etc/nginx/ssl

COPY --chown=www-data:www-data ./src/ /var/www/html
