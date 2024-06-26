import React from 'react'
import { BlocksRenderer } from "@strapi/blocks-react-renderer";


const Formatting = ({content}) => {
  return (
    <BlocksRenderer
              content={content}
              blocks={{
                image: ({ image }) => <img src={image.url} alt={image.alternativeText} className='shadow-md mt-3'/>,
                paragraph: ({ children }) => <p>{children}</p>,
                code:({children}) => <pre className="bg-[#eee] px-[3px] rounded-sm">{children}</pre>,
                heading: ({ children, level }) => {
                  switch (level) {
                    case 1:
                      return <p variant="h1" className="text-[2rem] font-bold leading-[1] my-3">{children}</p>
                    case 2:
                      return <p variant="h2" className="text-[1.5rem] font-bold leading-[1] my-3">{children}</p>
                    case 3:
                      return <p variant="h3" className="text-[1.17rem] font-bold leading-[1] my-3">{children}</p>
                    case 4:
                      return <p variant="h4" className="text-[15px] font-bold leading-[1] my-3">{children}</p>
                    case 5:
                      return <p variant="h5" className="text-[.83rem] font-bold leading-[1] my-3">{children}</p>
                    case 6:
                      return <p variant="h6" className="text-[.75rem] font-bold leading-[1] my-3">{children}</p>
                    default:
                      return <p variant="h1">{children}</p>
                  }
                },
                list: ({ children, format }) => {
                  if (format === "unordered") {
                    return <ul className="list-disc pl-5">{children}</ul>;
                  } else {
                    return <ol className="list-decimal pl-5">{children}</ol>;
                  }
                },
                link: ({ children, url }) => <Link to={url}>{children}</Link>,
              }}
              modifiers={{
                bold: ({ children }) => (
                  <strong>{children}</strong>
                ),
                italic: ({ children }) => (
                  <span className="italic">{children}</span>
                ),
              }}
            />
  )
}

export default Formatting
