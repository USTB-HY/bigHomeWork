var mixin = {
    methods: {
        mixinAddCart(skuId,skuNum) {
            this.$router.push(`/AddCart/${skuId}/${skuNum}`)
            this.$store.dispatch('Cart/addCartList',{skuId,skuNum})
        },
        mixinModiCart(skuId,skuNum) {
            this.$store.dispatch('Cart/addCartList',{skuId,skuNum})
        }
    },
}

export default mixin