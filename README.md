<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

<p align="center">
  <a href="https://www.s7aba.ma">
    <img alt="S7aba" src="https://raw.githubusercontent.com/AbderrahimSoubaiElidrissi/s7aba.ma/main/public/images/logo.png" width="200" />
  </a>
</p>
<h1 align="center">
  S7aba podcast Website
</h1>

S7aba is a Moroccan podcast about cloud computing powered by Darjira and Tea.

The website is built using [Next.js](http://nextjs.org)

## 🚀 Quick start

1.  **Fork and clone the project**

    ```sh
    git clone git@github.com:your-username/s7aba.ma.git
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd s7aba.ma/
    npm install
    npm run dev
    ```

## How to contribute ?

**Add Episode Notes**

#### Notes :

Add new file to `content/notes/[id].md` with the `[id]` is the episode ID (You can find the id int the url on the episode details page `https://s7aba.ma/episodes/[id]` )

In the Notes section, you need to collect the most important idea and try to find the right title for it using this format : `min:sec - title`.

in the `metadata` section add your github handler (username) and if you still statue of the note (draft: true| false)

```
---
authorGithub: AbderrahimSoubaiElidrissi
draft: true
---

00:00 - Introduction : Welcoming

00:20 - Introduction : Who Am I

```

4.**Open the source code and start editing!**

You can add more features to the website or fix some issue. Make sure to check the issues tab first

## Licensing

The code in this project is licensed under MIT license.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://soubai.me"><img src="https://avatars.githubusercontent.com/u/11523791?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Abderrahim SOUBAI-ELIDRISI</b></sub></a><br /><a href="#audio-AbderrahimSoubaiElidrissi" title="Audio">🔊</a> <a href="https://github.com/AbderrahimSoubaiElidrissi/s7aba.ma/commits?author=AbderrahimSoubaiElidrissi" title="Code">💻</a> <a href="https://github.com/AbderrahimSoubaiElidrissi/s7aba.ma/pulls?q=is%3Apr+reviewed-by%3AAbderrahimSoubaiElidrissi" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/SihamBen"><img src="https://avatars.githubusercontent.com/u/58236622?v=4?s=100" width="100px;" alt=""/><br /><sub><b>SihamBen</b></sub></a><br /><a href="#design-SihamBen" title="Design">🎨</a> <a href="https://github.com/AbderrahimSoubaiElidrissi/s7aba.ma/commits?author=SihamBen" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
