#!/bin/bash

# NOTE: this should be run inside the app docker container!
# Use docker-compose up --build to setup local development.

if [ "$APP_ENV" = "local" ]; then
    php composer.phar install

    if [ ! -f .env ]; then
        cp .env.example .env
        echo "GRANT ALL PRIVILEGES ON *.* TO igoline@'%'; FLUSH PRIVILEGES" | mysql -u root -psecret
        php artisan key:generate
        php artisan migrate
        php artisan db:seed
    fi
fi

php artisan route:clear
php composer.phar dump-autoload
php artisan migrate --force
php artisan lang:js

#php artisan doctrine:migrations:migrate

php artisan serve --host=0.0.0.0 --port=12001

#php-fpm