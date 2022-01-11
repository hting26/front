<template lang="pug">
b-card.card-product.mt-1(img-top :img-src='product.image')
  b-card-body
    b-card-title
      router-link(:to='"/product/" + product._id') {{ product.name }}
    b-card-sub-title {{ product.category }} - {{ '$' + product.price }}
    b-card-text {{ product.description }}
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
