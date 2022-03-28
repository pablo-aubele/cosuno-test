# Cosuno Test
## How to get the project up and running

First, copy the `.env.example` file into `.env`, and replace the values if necessary. Then, run the following command (the reason is explained under the "notes" section):
```sh
cd api && npm i && cd ..
```
Then, simply run

```sh
docker-compose up --build
```

on the root folder

## Notes

- The boilerplate code generator "Create React App" was used for the frontend, together with React Bootstrap.
- The backend uses a simple Express App. For some reason, the Docker setup is not running `npm install` internally, so, instead of spending the time trying to debug it, I decided to add the `cd api && npm i && cd ..` workaround above.
- To save time, I cloned the docker-compose.yml file from an old project, so, my apologies if it becomes too apparent.

## Potential for improvement:
Part of the task is to make a list of ideas on how I would improve this application if I had more time
to work on it.

Omitting the obvious (writing tests, improving error messages, using Nodemon for the Express API, using an actual database, etc), I could add:

- The application as of now is not scalable, especially if the number of companies grows. So, it would be necessary to load the companies "on demand" (meaning, basing on the selection criteria), using pagination.
- The current way of gathering all the specialities is not good. A spelling error would cause two specialities. And also, if we use pagination, only a small subset would be loaded. A good way to improve it (if we are using relational database) would be to have a different table for them, and just link them via foreign keys. In that case, the list of specialities should be loaded before the companies.
- The user selected criteria could be managed via the URL, using React Router. In other words, the parameters could be retrieved from the URL, and each time the user changes the criteria, it updates the URL. Advantages are: URL is shareable, and a refresh is possible without losing the user selection
- If we use pagination, it would be good to add infinite scrolling.
- The loading message ("Loading companies...") could be replaced by a loading skeleton like the following:
- ![](https://miro.medium.com/max/678/1*ZPvzUShTe448VPDukHiskw.png)