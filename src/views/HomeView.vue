<script setup>
import Header from '@/components/Header.vue'
import Icon from '@/components/UI/Icon.vue'
import MobileMenu from '@/components/MobileMenu.vue'
</script>

<template>
  <main class="relative flex flex-col gap-y-3 z-[1] font-inter">
    <div class="flex flex-col gap-y-[100px] pt-5 px-5">
      <Header />
      <div class="text-[32px] leading-[38px] font-sf-pro-display font-bold">
        <h1 class="text-white/70">Hello there</h1>
        <h1 class="text-white">How can we help?</h1>
      </div>
    </div>

    <div class="py-[15px] px-5 bg-brand-secondary border border-brand-primary rounded-[10px] box-shadow">
      <div class="flex justify-between items-center">
        <div class="text-[14px] leading-[21px] flex flex-col">
          <h6 class="text-brand-general-body-primary font-semibold">Send us a message</h6>
          <h6 class="text-[#83838D]">We typically reply within a day</h6>
        </div>

        <Icon name="send" width="13px" height="14px" class="text-brand-primary" />
      </div>
    </div>

    <div class="flex flex-col gap-y-2 py-[7px] px-2 bg-brand-general-black border border-brand-general-border rounded-[10px] box-shadow">
      <div class="flex justify-between items-center bg-brand-secondary py-[10px] px-3 rounded-[8px]">
        <h6 class="text-[14px] leading-[21px] text-brand-general-body-primary font-semibold">Search for help</h6>
        <Icon name="search" width="16px" height="16px" class="text-brand-primary" />
      </div>
      <div class="flex flex-col">
        <div class="faq">
          <p>In-game bonuses and free spins</p>
          <Icon name="chevron-right" width="5.2px" height="8.7px" />
        </div>
        <div class="faq">
          <p>Crypto deposit still not credited?</p>
          <Icon name="chevron-right" width="5.2px" height="8.7px" />
        </div>
        <div class="faq">
          <p>EigerX VIP program overview</p>
          <Icon name="chevron-right" width="5.2px" height="8.7px" />
        </div>
        <div class="faq">
          <p>Achievements and awards</p>
          <Icon name="chevron-right" width="5.2px" height="8.7px" />
        </div>
      </div>
    </div>

    <MobileMenu />
  </main>
</template>

<style scoped>
.box-shadow {
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.08);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
}

.faq {
  @apply flex justify-between items-center py-[10px] px-3;
}

.faq p {
  @apply text-[14px] leading-[21px] text-brand-general-body-primary;
}

.faq div {
  @apply text-brand-primary w-[16px] h-[16px] justify-center items-center;
}
</style>
