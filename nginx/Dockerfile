FROM nginx:latest

COPY ./nginx/conf.d/wordpress.conf /etc/nginx/conf.d

#RUN mkdir -p /var/www/html/wp-content

COPY --chown=www-data:www-data ./src/ /var/www/html
