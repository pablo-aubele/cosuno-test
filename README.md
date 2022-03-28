# How to get project running

After cloning the project, run:

    docker-compose up

Since no .env files are in .gitignore, no extra steps are necessary

URLs:

- App: http://localhost:7000
- API: http://localhost:7100
- Auth Service (previously API): http://localhost:7101
- Email Service: http://localhost:7102
- phpMyAdmin: http://localhost:7200

Note: The folder "template" contains all the template files. They need to be opened directly with Chrome (they are not in Docker).

Also, the Bootstrap "primary" classes show up purple in the template, but orange in the actual app