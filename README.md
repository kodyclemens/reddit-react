# Reddit Browser

Reddit Browser is a web application that allows users to search Reddit and return images based on specific keywords.

## Live Site

Live version of this application is available at https://www.redditbrowser.com

## Requirements

- Ruby 2.6.2 (see [rvm](https://rvm.io/))
- Postgres installed
  - database created and named `reddit-react_development`
  - login/group role created for this database

## Local Development

#### Postgres must be installed and running! Local dev. environment uses Postgresql, not SQLite.

1. Fork and clone this repo
2. Run `rake db:create && bundle install && rake db:migrate` in the root directory of the project
3. cd into the `client` folder and run `yarn install`
4. Run `rails -s -p 3001` in the root directory of the project
5. cd into the `client` folder and run `yarn start`
6. Optionally you can start both servers by running `bin/rake start` in the root directory. Start each individually if you wish to debug with `binding.pry` in a Rails controller.

The node server will be running on port 3000 and the Rails server will be on port 3001. A proxy is setup in `client/package.json` to proxy our API calls to the Rails server. When the project is deployed to Heroku a Rails server will manage the front end and back end (Rails serves a Webpack bundle).

Futher reading about the development environment setup: [A Rock Solid, Modern Web Stack—Rails 5 API + ActiveAdmin + Create React App on Heroku](https://blog.heroku.com/a-rock-solid-modern-web-stack)

## Built With

- [React](https://reactjs.org/)
- [Ruby on Rails](https://rubyonrails.org/)
- [Bootstrap](https://getbootstrap.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Heroku](https://heroku.com/)
- [Reddit API](https://www.reddit.com/dev/api)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## Authors

- **Kody Clemens** - [Connect on LinkedIn](https://www.linkedin.com/in/kody-clemens/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
