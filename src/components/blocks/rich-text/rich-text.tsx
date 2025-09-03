import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity-client'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

interface RichTextProps {
  content: any[]
  alignment?: 'center'
}

export function RichText({ content, alignment = 'center' }: RichTextProps) {
  const alignmentClasses = {
    center: 'max-w-4xl mx-auto',
  }

  return (
    <section className="py-16">
      <div className={`px-6 ${alignmentClasses[alignment]}`}>
        <div className="prose prose-lg max-w-none">
          <PortableText
            value={content}
            components={{
              types: {
                image: ({ value }: { value: any }) => {
                  if (!value?.asset) return null
                  return (
                    <div className="my-8 text-center">
                      <img
                        src={urlFor(value as SanityImageSource).width(800).url()}
                        alt={value.alt || ''}
                        className="mx-auto rounded-lg shadow-lg"
                      />
                      {value.caption && (
                        <p className="text-sm text-muted-foreground mt-2">
                          {value.caption}
                        </p>
                      )}
                    </div>
                  )
                },
              },
              block: {
                h1: ({ children }) => (
                  <h1 className="text-4xl font-bold text-gray-900 mb-6">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{children}</h3>
                ),
                h4: ({ children }) => (
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{children}</h4>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-gray-700 my-6">
                    {children}
                  </blockquote>
                ),
                normal: ({ children }) => (
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">{children}</p>
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
                  <ul className="list-disc list-inside space-y-2 mb-4">{children}</ul>
                ),
                number: ({ children }) => (
                  <ol className="list-decimal list-inside space-y-2 mb-4">{children}</ol>
                ),
              },
              listItem: {
                bullet: ({ children }) => (
                  <li className="text-lg text-gray-700">{children}</li>
                ),
                number: ({ children }) => (
                  <li className="text-lg text-gray-700">{children}</li>
                ),
              },
            }}
          />
        </div>
      </div>
    </section>
  )
}
