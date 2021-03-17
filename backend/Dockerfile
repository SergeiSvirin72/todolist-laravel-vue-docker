FROM composer:latest as vendor
COPY database/ database/
COPY composer.json composer.json
COPY composer.lock composer.lock
RUN composer install \
        --ignore-platform-reqs \
        --no-interaction \
        --no-plugins \
        --no-scripts \
        --prefer-dist

FROM php:fpm
RUN apt-get update -y \
    && apt-get install -y nginx \
    && apt-get install -y libpq-dev \
    && docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
    && docker-php-ext-install pdo pdo_pgsql \
    && docker-php-ext-enable pdo pdo_pgsql

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY entrypoint.sh /etc/entrypoint.sh

WORKDIR /backend
COPY --from=vendor /app/vendor/ /backend/vendor/
COPY --chown=www-data:www-data . /backend

ENTRYPOINT ["sh", "/etc/entrypoint.sh"]