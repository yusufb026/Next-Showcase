import Image from 'next/image';
import React from 'react';
import { Bitter } from 'next/font/google';
import ReactMarkdown from 'react-markdown';
import Container from '../ui/Container';

const bitter = Bitter({
  weight: '200',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

let content = `
Incididunt aute elit voluptate irure do culpa aliquip occaecat commodo incididunt minim officia eiusmod. Eiusmod fugiat sunt consectetur officia fugiat qui exercitation. Magna laboris fugiat consequat elit sunt. Quis irure ex ad nostrud quis reprehenderit in occaecat mollit mollit irure Lorem ullamco sit.

Adipisicing veniam adipisicing eu ea non id. Et in amet qui ea cillum duis elit. Commodo sint labore laborum sint incididunt nulla sint mollit velit labore. Esse laboris est minim elit Lorem duis.

## 10 Reasons

1. Aliqua laborum minim sunt veniam.
2. Lorem pariatur id labore ipsum.
3. Culpa cillum quis aliquip cillum.
4. irure proident ipsum qui est deserunt est eu.
5. Labore esse esse sit qui eu qui id enim.
6. Ex ex aute proident cupidatat.
7. Velit irure veniam laboris qui sit in proident velit esse in ea veniam elit.
8. Pariatur id anim officia.
9. ad nostrud cillum sint.
10. do fugiat consequat laborum.

Ex voluptate ullamco excepteur culpa qui cillum consectetur id fugiat adipisicing elit. Ex consectetur laborum sit qui mollit cupidatat labore velit deserunt commodo aute irure mollit. Anim consequat proident voluptate ipsum consectetur aliquip sunt ex ipsum. Nisi deserunt commodo in officia sunt ut aute sit ullamco.

## Conclusion

Excepteur et aliquip voluptate est labore proident adipisicing deserunt commodo elit esse. Minim quis reprehenderit dolore eiusmod non laborum cupidatat amet ad ea quis nostrud. Lorem exercitation minim Lorem quis mollit tempor exercitation. In Lorem in est mollit.

`;

const Article = () => {
  return (
    <Container>
      <div className=" flex w-full flex-col">
        <div className="mb-2 mt-12 text-center text-6xl font-normal"> Title </div>
        <div className=" mb-2 text-center text-base font-normal "> Subtitle </div>
        <div className={`${bitter.className} mb-12 text-center text-xs `}> 01-01-2024 </div>
        <Image src="/ateliers/atelier3.jpeg" height={1000} width={1000} className="w-full" alt="Alt Image" />

        <article className="prose dark:prose-light mx-auto my-12 w-full max-w-7xl text-foreground">
          <ReactMarkdown
            components={{
              img: ({ src, alt }) => <Image src={src as string} alt={alt as string} width={1200} height={200} />,
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
      </div>
    </Container>
  );
};

export default Article;
