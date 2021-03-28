# ✨ New Function ✨ 

[![Build](https://github.com/eduardoboucas/new-function/workflows/Build/badge.svg)](https://github.com/eduardoboucas/new-function/actions)
[![Node](https://img.shields.io/node/v/new-function.svg?logo=node.js)](https://www.npmjs.com/package/new-function)

A tiny utility for creating a new [Netlify Function](https://docs.netlify.com/functions/overview/).

From the root directory of your project, run:

```sh
npx new-function
```

That's it! You'll get a new function created from [a template](https://github.com/eduardoboucas/new-function/blob/master/src/templates/javascript_function.js).

![Screenshot](https://user-images.githubusercontent.com/4162329/112762116-098e9c80-8ff6-11eb-9b10-ca823f3ec9d9.png)

> 💡 If you're looking for a more advanced starting point and different customization options, consider using the
> [Netlify CLI](https://cli.netlify.com/commands/functions#functionscreate).

To develop the function locally, install the [Netlify CLI](https://cli.netlify.com) and run `netlify dev`.

Once you're ready to deploy, push the file to your repository. If you don't have continuous integration set up, you can use the CLI and run `netlify deploy`.
