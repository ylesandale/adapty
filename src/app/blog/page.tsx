'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { client, urlFor } from '@/lib/sanity'

interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

interface BlogPost {
  _id: string
  title: string
  excerpt?: string
  category: {
    name: string
    slug: { current: string }
  }
  publishedAt: string
  readTime: number
  coverImage: SanityImage
  slug: { current: string }
  author: {
    name: string
    avatar?: SanityImage
    bio?: string
  }
  isFeatured?: boolean
}

interface Category {
  _id: string
  name: string
  slug: { current: string }
  _count?: number
}

/**
 * Blog page component with Sanity CMS
 * @component
 */
export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
    fetchCategories()
  }, [])

  const fetchPosts = async () => {
    try {
      const query = `*[_type == "blogPost"] | order(publishedAt desc) {
        _id,
        title,
        excerpt,
        "slug": slug,
        coverImage,
        publishedAt,
        readTime,
        isFeatured,
        "category": category->{name, slug},
        "author": author->{name, avatar, bio}
      }`
      const data = await client.fetch(query)
      setPosts(data)
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchCategories = async () => {
    try {
      const query = `*[_type == "category"] | order(name asc) {
        _id,
        name,
        slug,
        "count": count(*[_type == "blogPost" && references(^._id)])
      }`
      const data = await client.fetch(query)
      setCategories(data)
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  const clearSearch = () => {
    setSearchQuery('')
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const featuredPost = posts.find((post) => post.isFeatured)
  const regularPosts = posts.filter((post) => !post.isFeatured)

  const filteredPosts =
    selectedCategory === 'all'
      ? regularPosts
      : regularPosts.filter(
          (post) => post.category?.slug?.current === selectedCategory
        )

  const searchedPosts = searchQuery
    ? filteredPosts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredPosts

  if (loading) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
          <p className="mt-4 text-muted-foreground">Loading posts...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-16 md:py-24 bg-secondary border-b border-border">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Latest news and insights from{' '}
            <span className="text-gradient">Adapty</span>
          </motion.h1>

          {/* Search Panel */}
          <motion.div
            className="max-w-2xl mx-auto relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search by blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-secondary transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.article
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 vercel-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <a
                href={`https://adapty.io/blog/${featuredPost.slug.current}/`}
                className="relative group"
              >
                <div className="relative rounded-xl overflow-hidden">
                  {featuredPost.coverImage && (
                    <img
                      src={urlFor(featuredPost.coverImage).width(800).url()}
                      alt={featuredPost.title}
                      className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black text-white text-sm font-medium rounded-md">
                    {featuredPost.category?.name}
                  </div>
                </div>
              </a>

              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <time>{formatDate(featuredPost.publishedAt)}</time>
                    <span>•</span>
                    <span>{featuredPost.readTime} min read</span>
                  </div>

                  <a
                    href={`https://adapty.io/blog/${featuredPost.slug.current}/`}
                  >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-gray-700 transition-colors">
                      {featuredPost.title}
                    </h2>
                  </a>

                  {featuredPost.excerpt && (
                    <p className="text-muted-foreground mb-6">
                      {featuredPost.excerpt}
                    </p>
                  )}
                </div>

                {featuredPost.author && (
                  <div className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    {featuredPost.author.avatar && (
                      <img
                        src={urlFor(featuredPost.author.avatar)
                          .width(100)
                          .url()}
                        alt={featuredPost.author.name}
                        className="w-12 h-12 rounded-full"
                      />
                    )}
                    <div>
                      <div className="font-semibold">
                        {featuredPost.author.name}
                      </div>
                      {featuredPost.author.bio && (
                        <div className="text-sm text-muted-foreground">
                          {featuredPost.author.bio}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-8 border-y border-border bg-secondary">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <button
              onClick={() => setSelectedCategory('all')}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all',
                selectedCategory === 'all'
                  ? 'bg-black text-white'
                  : 'bg-white border border-border hover:border-black'
              )}
            >
              All categories
            </button>
            {categories.map((category) => (
              <button
                key={category._id}
                onClick={() => setSelectedCategory(category.slug.current)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2',
                  selectedCategory === category.slug.current
                    ? 'bg-black text-white'
                    : 'bg-white border border-border hover:border-black'
                )}
              >
                {category.name}
                {category._count !== undefined && (
                  <span className="text-xs opacity-70">{category._count}</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {searchedPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No posts found</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchedPosts.map((post, index) => (
                  <motion.article
                    key={post._id}
                    className="group vercel-card overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <a href={`https://adapty.io/blog/${post.slug.current}/`}>
                      <div className="relative overflow-hidden">
                        {post.coverImage && (
                          <img
                            src={urlFor(post.coverImage).width(600).url()}
                            alt={post.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        )}
                        <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 text-white text-xs rounded">
                          {post.readTime} min read
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="text-sm text-muted-foreground mb-2">
                          {post.category?.name}
                        </div>
                        <h3 className="text-xl font-semibold mb-4 group-hover:text-gray-700 transition-colors">
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <time>{formatDate(post.publishedAt)}</time>
                          <span>•</span>
                          <span>{post.readTime} min read</span>
                        </div>
                      </div>
                    </a>
                  </motion.article>
                ))}
              </div>

              {/* Pagination */}
              <motion.div
                className="flex justify-center items-center gap-2 mt-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <button className="px-4 py-2 bg-black text-white rounded-lg font-medium">
                  1
                </button>
              </motion.div>
            </>
          )}
        </div>
      </section>

      {/* Categories Sections */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-7xl space-y-16">
          {categories.slice(0, 4).map((category) => {
            const categoryPosts = posts
              .filter(
                (post) => post.category?.slug?.current === category.slug.current
              )
              .slice(0, 4)

            if (categoryPosts.length === 0) return null

            return (
              <div key={category._id} className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {category.name}
                  </h3>
                  <a
                    href={`https://adapty.io/blog/category/${category.slug.current}/`}
                    className="flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
                  >
                    More posts
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {categoryPosts.map((post) => (
                    <a
                      key={post._id}
                      href={`https://adapty.io/blog/${post.slug.current}/`}
                      className="group vercel-card overflow-hidden hover:border-black transition-colors"
                    >
                      <div className="relative overflow-hidden">
                        {post.coverImage && (
                          <img
                            src={urlFor(post.coverImage).width(400).url()}
                            alt={post.title}
                            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        )}
                        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-xs rounded">
                          {post.readTime} min read
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold group-hover:text-gray-700 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}
