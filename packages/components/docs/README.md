# Docs

This website is auto generated from mdx files in this repo. The website currently supports the following features:

- [x] Pulling and rendering readme's as react.
- [ ] Auto generating pages based on mdx files.

## Running the website

Start by running `yarn` in this folder, this make sure all your dependencies are installed and symlinks the your `../../dist` folder to this website's node_modules.

Currently there are 3 scripts that you can run to get te website up and running. 

- `update-bricks`: builds bricks and copies readme to `../../dist` (accessable by importing from `@myonlinestore/bricks`).
- `update-docs`: just copies the readme's over to the dist.
- `start`: start the next server. The website is then accessable on [http:localhost:3000](http:localhost:3000)

> Note: The general workflow for this site is very much a work in progress. Feel free to submit a PR improving this experience or leave an issue ✌️.
