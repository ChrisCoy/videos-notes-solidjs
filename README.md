# Motivations

I tried to create an extension with react, but all the templates i found had a lot of bugs and was hard to modify, virtual dom make things even more hard. So as the Solid-Js do not use virtual dom, i found was a good idea to try it out, and i liked it a lot. Without a virtual dom, inject content into any page is so easier than in react. And the last thing is that all templates i found uses webpack, which takes SO LOOOOOONG to build something, most of the time you will wait until the build finish to see any change, i mean, we are in 2023, we want blazing fast tools, right?
## First of all, theres two way to run this project

**🛈 delete pnpm.lock.yaml file if you want to use yarn or something else**

- 1º: by running `pnpm start`, it will open the browser in dev mode, like any other reactjs/solidjs project
- 2º: by running `pnpm dev`, this command will build and generates the dist folder, then you could load into your chrome extensions, it runs in watch mode, in other words, any change to your source files will rebuild, so the next time you open the extension popup, the changes will be there.

### Pls, notice that in dev mode (`pnpm dev`) changes on static folder will not be applied.

#

## Dependencies this project use: 

- Solid-Js
- Typescript
- @types/chrome (chrome extension api types, help a lot in development)
- @types/node
- path (used in vite.config.ts to set up the project.)


If it helped you pls give me a star :D, thanks 💜. Feel free to contribute to the project.
