<template>
  <Layout>
    <div class="article">
      <h1 class="article-title">{{ $page.post.title }}</h1>
      <p class="article-date">
        {{ $page.post.date }} · <i>{{ $page.post.timeToRead }} min read</i>
      </p>
      <p v-html="$page.post.content" />
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>

<page-query>
query Post ($path: String!) {
  metadata {
    siteName
    siteDescription
  }
   post: post (path: $path) {
    id
    title
    content
    date (format: "D MMMM YYYY")
    timeToRead
  }
}
</page-query>

<style>
.article {
  margin: 4rem auto;
  max-width: 700px;
}

.article-title {
  margin-bottom: 0;
}

.article-date {
  color: rgba(0, 0, 0, 0.54);
  margin-top: 0.8rem;
  font-size: 0.9rem;
}

.article blockquote {
  padding: 10px 20px;
  margin: 0 0 20px;
  font-size: 17.5px;
  border-left: 5px solid #00835c;
}

.article table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
}

.article th {
  vertical-align: bottom;
  border-bottom: 2px solid #00835c;
}

.article td {
  border-top: 1px solid #00835c;
  padding: 8px;
  line-height: 1.42857143;
  vertical-align: top;
}

.article tr:nth-child(odd) td {
  background-color: #f9f9f9;
}

.article img {
  margin: auto;
  width: 80%;
  display: block;
  margin: 10px auto;
  border: 1px solid #222;
}

.article pre {
  background: #111;
  border-radius: 10px;
  color: #fafafa;
}

.article code {
  background: #111;
  border-radius: 10px;
  text-shadow: none;
  color: #fafafa;
}
:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: #111;
}

.token.atrule,
.token.attr-value,
.token.keyword,
.token.number,
.token.property,
.token.atrule,
.token.attr-value,
.token.keyword {
  color: #eeeeee;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted,
.token.attr-equals {
  color: #f6ff77;
}

.token.tag,
.token.boolean,
.token.constant,
.token.symbol,
.token.punctuation,
.token.deleted {
  color: #ff9100;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  color: #9a6e3a;
  background: none;
}
</style>
