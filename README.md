*Quickstart Wordpress setup with Docker*

The only dependencies you need to get going are `docker` and `docker-compose`.

Run `docker-compose up -d` from the root directory to start the application.

Access the site through https://localhost or to use BrowserSync https://localhost:3000

I've included the Timber starter theme in there enhanced with webpack to build js and sass files. The build chain dependencies are all wrapped in the buildchain service so no need to install npm/yarn etc.

To install a new node module use `docker container run wordpress-timber-starter_buildchain_1 yarn add <package-name>` which will run the command inside the buildchain container.
