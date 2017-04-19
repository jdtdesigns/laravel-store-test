<template>
	<div>
		<h1>{{ store.title }}</h1>
		<test></test>
		<h3 v-if="store.posts" style="text-decoration: underline">All Posts</h3>
		<div
			v-if="store.posts"
			v-for="post in store.posts">
			<h4>{{ post.title }}</h4>
			<p>{{ post.body }}</p>
		</div>
	</div>
</template>

<script>
	import Test from './TestComponent.vue';

	export default {
		data() {
			return {
				store
			}
		},

		components: {
			Test
		},

		created() {
			this.store.title = 'Blah';
		}
	}
</script>

<style lang="scss">
	
</style>