<template>
    <header :class="$options._componentTag" class="component organism">
        <div class="container c-header">
            <ul>
                <li>
                    <nuxt-link to="/">
                        <span>Relate</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/rd-figma">
                        <span>RD-Figma</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/rd-virtualScroll">
                        <span>RD-VirtualScroll</span>
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.o-header {}
</style>