FROM php:7.0-fpm-alpine

RUN apk update && \
    apk add nodejs libmcrypt-dev mysql-client zlib-dev && \
    docker-php-ext-install mcrypt pdo_mysql zip

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin --filename=composer

COPY docker/php.ini /usr/local/etc/php/conf.d/
COPY composer.json composer.phar composer.lock package.json /tmp/
COPY database /tmp/database

WORKDIR /tmp
ENV COMPOSER_ALLOW_SUPERUSER=1
RUN php composer.phar install
RUN npm install

COPY . /var/www/
RUN cp -r /tmp/node_modules /tmp/vendor /var/www
WORKDIR /var/www

RUN rm -r /tmp/node_modules /tmp/vendor
RUN npm run prod

CMD sh app.sh
