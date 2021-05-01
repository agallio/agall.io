import Link from 'next/link'
import Image from 'next/image'

const CustomLink = (props) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href}>
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a {...props} />
      </Link>
    )
  }

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a target="_blank" rel="noopener noreferrer" {...props} />
    </>
  )
}

const MDXComponents = {
  Image,
  a: CustomLink,
}

export default MDXComponents