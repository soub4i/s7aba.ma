<p align="center">
  <a href="https://www.s7aba.ma">
    <img alt="S7aba" src="https://raw.githubusercontent.com/AbderrahimSoubaiElidrissi/s7aba.ma/main/public/images/logo.png" width="200" />
  </a>
</p>
<h1 align="center">
  S7aba podcast Website
</h1>

S7aba is a Moroccan podact about cloud computing powered by Darjira and Tea.

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
