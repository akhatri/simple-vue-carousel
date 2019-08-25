<template>
    <header class="site-header">
			<h2 class="site-title">Simple Carousel</h2>
			<nav class="site-nav">
				<ul>
					<li>
						<a href="#">Home</a>
						<a href="#">About</a>
						<a href="#">Contact</a>
					</li>
				</ul>
			</nav>
    </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Header,
  },
})

export default class Header extends Vue {

}

</script>

<style lang="scss" scoped>
    .site-header {
			padding: 20px;
			height: 75px;
			background-color: #f8f9fa;
			display: flex;
			justify-content: space-between;
			align-items: center;
    }

		.site-nav {
			ul {
				list-style-type: none;
				li > a {
					margin-right: 5px;
					color: #000;
				}
			}
		}
</style>
