<template>
  <div class="post-list">
    <h1>{{ year }}</h1>
    <PostItem
      :key="post.node.id"
      v-for="post in this.postsByYear"
      :post="post.node"
    />
  </div>
</template>

<script>
import PostItem from "./PostItem";

export default {
  props: ["year"],
  components: {
    PostItem,
  },
  computed: {
    postsByYear() {
      const posts = this.$page.allPost.edges;
      return posts.filter((post) => {
        return post.node.date.includes(this.year);
      });
    },
  },
};
</script>

<style scoped="true">
h1 {
  font-size: 1.8rem;
  margin: 2rem 0;
  position: sticky;
}

.post-list {
  margin-bottom: 1.5rem;
}
</style>
