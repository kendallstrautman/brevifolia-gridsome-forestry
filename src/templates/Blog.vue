<template>
    <Layout page="blog">
         <article class="blog">
            <figure class="blog__hero">
                <g-image :src="$page.post.hero_image" :alt="$page.post.title"></g-image>
            </figure>
            <div class="blog__info" >
            <h1>{{ $page.post.title }}</h1>
            <h3>{{ $page.post.date }}</h3>
            </div>
            <div class="blog__body" v-html="$page.post.content"></div>
            <div class="blog__footer">
                <h2>Written By: {{ $page.post.author }}</h2>
                <g-link :to="nextBlogPath">
                    <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" x="0px" y="0px" viewBox="0 0 26 26" enableBackground="new 0 0 26 26" >
                        <path d="M23.021,12.294l-8.714-8.715l-1.414,1.414l7.007,7.008H2.687v2h17.213l-7.007,7.006l1.414,1.414l8.714-8.713  C23.411,13.317,23.411,12.685,23.021,12.294z"/>
                    </svg>
                </g-link>
            </div>
        </article>
    </Layout>
</template>

<script>
    export default {
        metaInfo() {
            return {
                title: this.$page.post.title
            }
        }, 
        computed: {
            nextBlogPath: function() {
                const allBlogs = this.$page.all.edges
                const firstBlogPath = allBlogs[0].node.path
                const currentBlog = allBlogs.filter(node => node.node.title === this.$page.post.title)
                function isNull(item) {
                    return item == null || item == undefined
                }
                return isNull(currentBlog[0].next) ? firstBlogPath : currentBlog[0].next.path
            }
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
    all: allBlog {
        edges {
            node {
                path
                title
            }
            next {
                path
            }
        }
    }
}

</page-query>

<style lang="scss" >
    .blog {
        h1 {
            margin-bottom: 0.7rem;
        }
    }

    .blog__hero {
        overflow: hidden;
        min-height: 300px;
        height: 60vh;
        width: 100%;
        margin: 0;
        img {
            min-width: 100%;
            min-height: 100%;
            margin-bottom: 0;
            object-fit: cover;
        }
    }

    .blog__info {
        text-align: center;
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
            padding-bottom: 1.45rem;
        }
        :last-child {
            margin-bottom: 0;
        }
        h1, h2, h3, h4, h5, h6 {
            font-weight: normal;
            padding: 1.5rem;
            line-height: 1.2;
            margin-bottom: 1.5rem;
        }
        p {
            color: #464646;
            font-weight: normal;
            img {
                margin: 1rem 0;
            }
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