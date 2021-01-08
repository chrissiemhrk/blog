<template>
  <div class="post-item">
    <g-link :to="post.path" class="read">{{ post.title }}</g-link>
    <div class="date-time">
      <span class="date">{{ date }}</span>

      <span class="time-to-read"
        ><i>{{ post.timeToRead }} min read</i></span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
  computed: {
    date() {
      return this.post.date.substring(0, this.post.date.length - 4);
    },
  },
};
</script>

<style>
.post-item {
  margin-left: 5rem;
  margin-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
}

.date-time {
  margin-top: 0.5rem;
  font-size: 0.8rem;
}

.date {
  margin-right: 10px;
  min-width: 60px;
  display: inline-block;
}
.time-to-read {
  margin-left: 1px;
  color: gray;
  font-size: 0.8rem;
}
</style>
