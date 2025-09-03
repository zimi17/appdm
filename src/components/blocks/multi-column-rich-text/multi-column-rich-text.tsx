import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity-client'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

interface MultiColumnRichTextProps {
  content: any[]
  alignment?: 'wide' | 'full'
}

export function MultiColumnRichText({ content, alignment = 'wide' }: MultiColumnRichTextProps) {
  const alignmentClasses = {
    wide: 'max-w-6xl mx-auto',
    full: 'w-full',
  }

  return (
    <section className="py-16">
      <div className={`px-6 ${alignmentClasses[alignment]}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="prose prose-lg max-w-none">
            <PortableText
              value={content}
              components={{
                block: {
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{children}</h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{children}</h4>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700 my-4">
                      {children}
                    </blockquote>
                  ),
                  normal: ({ children }) => (
                    <p className="text-gray-700 leading-relaxed mb-3">{children}</p>
                  ),
                },
                marks: {
                  strong: ({ children }) => (
                    <strong className="font-bold text-gray-900">{children}</strong>
                  ),
                  em: ({ children }) => (
                    <em className="italic">{children}</em>
                  ),
                  code: ({ children }) => (
                    <code className="bg-gray-100 px-2 py-1 rounded font-mono text-sm">
                      {children}
                    </code>
                  ),
                  link: ({ children, value }) => (
                    <a
                      href={value?.href}
                      target={value?.href?.startsWith('http') ? '_blank' : '_self'}
                      rel={value?.href?.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="text-primary hover:text-primary/80 underline"
                    >
                      {children}
                    </a>
                  ),
                },
                list: {
                  bullet: ({ children }) => (
                    <ul className="list-disc list-inside space-y-1 mb-3">{children}</ul>
                  ),
                  number: ({ children }) => (
                    <ol className="list-decimal list-inside space-y-1 mb-3">{children}</ol>
                  ),
                },
                listItem: {
                  bullet: ({ children }) => (
                    <li className="text-gray-700">{children}</li>
                  ),
                  number: ({ children }) => (
                    <li className="text-gray-700">{children}</li>
                  ),
                },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
