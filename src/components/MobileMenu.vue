<script setup>
import Icon from '@/components/UI/Icon.vue'
</script>

<template>
  <div class="menu">
    <div>
      <Icon name="home" width="24px" height="24px" class="text-brand-primary" />
      <h6 class="text-[14px] leading-[21px] text-brand-primary font-semibold">Home</h6>
    </div>
    <div>
      <Icon name="messages" width="24px" height="24px" />
      <h6 class="text-[14px] leading-[21px] text-brand-general-body-primary">Messages</h6>
    </div>
    <div>
      <Icon name="help" width="24px" height="24px" class="text-brand-primary" />
      <h6 class="text-[14px] leading-[21px] text-brand-general-body-primary">Help</h6>
    </div>
  </div>
</template>

<style scoped>
.menu {
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.05);
  @apply flex justify-around items-center bg-brand-general-black rounded-[8px] border border-brand-general-border;
}

.menu > div {
  @apply flex flex-col gap-y-2 justify-center items-center py-[15px] px-0.5;
}
</style>
