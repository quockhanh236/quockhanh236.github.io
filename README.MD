# [MLove](https://dacsang97.github.io/mlove/#/) Project

> A Valentine project for my love

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Custom your message

1. Music
   Change iframe of your music at line 3 in `src/App.vue`

```
<iframe width="0" height="0" src="https://www.youtube.com/embed/taNXwSP7Zqs?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=true" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
```

> Recommend set width & height of the iframe to 0.

2. Envelope message
   Change at line 39 in `src/components/Envelope.vue`

```
msg: "I love Mun",
```

3. Valentine card title, message
   Change at line 37, 38 in `src/components/ValentineCard.vue`

```
title: "M ❤ M",
msg: "Happy Valentines Day"
```

## Contact

> SangND - [Facebook](https://www.facebook.com/dacsang97) - [Gmail](mailto:dacsang97@gmail.com)
