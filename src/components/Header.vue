<script setup>
import Icon from '@/components/UI/Icon.vue'
const profiles = [
  {
    name: 'John Doe',
    image: 'https://s3-alpha-sig.figma.com/img/b449/79e1/c98ecb3ec92ac86805fe55581fbeaa60?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VUPp7l8d9pFNJr4ROGP9ot3jNidn21MQs1rqO8u2XeMLRoVKvTNOzz0DBhYiC9UOQl1lwmEnojzrYwFsDHYNvTtUQaR2ZnoehjRZHGXSyk9mzT78Ije7XTDHe1ydXoUgQy8Maztbm-CJSDOzm-FFisuLC2DshRncqCQtvcjFBtAu1x2YH3deDIxLm~5zhDFCvKXPeEzXTJkpuT46OrvcmTCkBFsjRUWpcDuIeX-lDZMxfrpHtXFi4sldBZe-ggslq~iFFaAhNQJZJjIczAOBeKA2y9UF68aUG~V6zLe4KKbU86w6w2RBMjYXqpWCFd81QPZiMT19KTjqb1nB5YWIdg__',
  },
  {
    name: 'Jack Frost',
    image: 'https://s3-alpha-sig.figma.com/img/728c/3b1d/33fe647a46f9bf668322f8c1d94ed937?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N0RzDg35NQQRjiAaoLv9jS4RLxX4R2dyZ5YVL4-mR8REKBJGnZlyHUd3Dwa3CD6DCepxz1oSyWUzIFerdIn0NKl9aDC0xHSgs-jhq8vlVXvRA-p3DjyfDty5QqLfxMa~ausqxFlmc7njKWMVsI~Gj67XASUY2-4-WTk1HtEFrtw8iGm25TwBSpGvBfk3aCShYmgF5yvMMU0Z5P5imYx0budildR4EO7gUt4ypfHuKwCiX1F9XAnnfBlEy1HiyoPjIk-~DCaqveXqM-KwcaoebpEcu6z5lQyF5bIWJH3YFiXQB6L2IJ5PeQNTeBtqvGKM0NSBtCVD0arTMoceWUIK4g__',
  },
  {
    name: 'Mark Gambit',
    image: 'https://s3-alpha-sig.figma.com/img/efb6/f620/56dfdd8faea9ed52a81fbdcd844baa28?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lavqc4OX15k7r-2fhu0oIDr~EaMiULTlvmmd0XseCEEhxTdlXcpgf8EN~PaC6c6X4GJy1u428TWIeel3JQafog8bZbCMyt3tUnPzCtBDmnCy2HVRFBm0xEKUcy92Hco1w6dNb0T4jpY~LvsT4NZbLJKoJwj~E1n-rHuPn7rIlayum-5wyhvRB95lKI7AzXo7~NTZ1Ty8Ff6wlXSOjPDlmGh1rmi7Fk2eOyDZRA6MyJOeVKUwNLDa~daIpTtHSXxVwrMI08VP~Epm2sj-xbdpX8DVvleTCP5qNg-M8CPfoN0Fevmw4xet8v0-D5DF28Vu6McMYiuz9JFM4SsR3gTJIw__',
  },
]
</script>

<template>
  <header class="flex justify-between h-10">
    <Icon name="logo" width="111px" height="32px" class="text-brand-primary self-end" />
    <div class="flex">
      <div v-for="profile in profiles" :key="profile.name" class="relative -ml-1.5 first:z-[1] last:-z-[1]">
        <img :src="profile.image" :alt="profile.name" class="w-10 h-10 rounded-full border-2 border-brand-general-black" />
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>