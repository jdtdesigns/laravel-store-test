<template>
	<div>
		<h3>Component Store Title: {{ store.title }}</h3>
		<button
		@click="getPosts">Get Posts</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				store
			}
		},

		methods: {
			getPosts() {
				axios.get('/api/posts')
				.then(res => {
					this.store.posts = res.data.posts;
				})
			}
		}
	}
</script>

<style lang="scss">
	
</style>