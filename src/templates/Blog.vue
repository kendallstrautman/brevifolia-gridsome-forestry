<template>
    <Layout>
         <article class="blog">
            <figure class="blog__hero">
                <g-image :src="$page.post.hero_image" :alt="$page.post.title"></g-image>
            </figure>
            <div class="blog__info" >
            <h1>{{ $page.post.title }}</h1>
            <h3>{{ $page.post.date }}</h3>
            </div>
            <div class="blog__body" v-html="$page.post.content"></div>
            <h2 class="blog__footer">Written By: {{ $page.post.author }}</h2>
        </article>
    </Layout>
</template>

<script>
    export default {
        metaInfo: {
            title: "blog post title"
        }
    }
</script>

<page-query>
query getPostData ($path: String!) {
    post: blog(path: $path) { 
        title
        date (format: "MMMM DD YYYY")
        author
        content
        hero_image (quality: 80)
    }
}
</page-query>

<style lang="scss" scoped>
    .blog {
        h1 {
            margin-bottom: 0.7rem;
        }
    }

    .blog__hero {
    min-height: 300px;
    height: 60vh;
    width: 100%;
    margin: 0;
        img {
            margin-bottom: 0;
            object-fit: cover;
        }
    }

    .blog__info {
    padding: 1.5rem 1.25rem;
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
        h1 {
            margin-bottom: 0.66rem;
        }
        h3 {
            margin-bottom: 0;
        }
    }

    .blog__body {
    width: 100%;
    padding: 0 1.25rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
        a {
            padding-bottom: 1.5rem;
        }
        :last-child {
            margin-bottom: 0;
        }
        h1, h2, h3, h4, h5, h6, p {
            font-weight: normal;
        }
        p {
            color: inherit;
        }
        ul {
            list-style: initial;
        }
        ul, ol {
            margin-left: 1.25rem;
            margin-bottom: 1.25rem;
            padding-left: 1.45rem;
        }
    }

    .blog__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 1.25rem;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
        h2 {
            margin-bottom: 0;
        }
        a {
            display: flex;
            justify-content: space-between;
            align-items: center;
            svg {
            width: 20px;
            }
        }
    }

    @media (min-width: 768px) {
        .blog {
            display: flex;
            flex-direction: column;
        }
        .blog__body {
            max-width: 800px;
            padding: 0 2rem;
            span {
            width: 100%;
            margin: 1.5rem auto;
            }
            ul, ol {
            margin-left: 1.5rem;
            margin-bottom: 1.5rem;
            }
        }
        .blog__hero {
            min-height: 600px;
            height: 75vh;
            img {
            min-width: 100%;
            }
        }
        .blog__info {
            text-align: center;
            padding: 2rem 0;
            h1 {
            max-width: 500px;
            margin: 0 auto 0.66rem auto;
            }
        }
        .blog__footer {
            padding: 2.25rem;
        }
    }

    @media (min-width: 1440px) {
        .blog__hero {
            height: 70vh;
        }
        .blog__info {
            padding: 3rem 0;
        }
        .blog__footer {
            padding: 2rem 2rem 3rem 2rem;
        }
    }

</style>