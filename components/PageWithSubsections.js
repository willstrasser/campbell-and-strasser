import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Slider from 'react-slick';

import {Intro, Section, Subnav} from './Layout';

export default function PageWithSubsections({images, intro, subsections}) {
  const settings = {
    arrows: false,
    autoplay: true,
    fade: true,
    pauseOnHover: false,
    speed: 1500,
  };
  return (
    <>
      <Subnav>
        {subsections.map((subsection) => (
          <a href={`#${subsection.fields.slug}`}>{subsection.fields.title}</a>
        ))}
      </Subnav>
      <div style={{marginTop: 25, width: 506}}>
        <Slider {...settings}>
          {images &&
            images.map((image) => (
              <img
                alt={image.image_description}
                key={image.sys.id}
                src={`${image.fields.file.url}?w=506&h=150&fit=fill`}
              />
            ))}
        </Slider>
      </div>
      <Intro>{documentToReactComponents(intro)}</Intro>
      {subsections.map((subsection) => (
        <Section>
          <div id={subsection.fields.slug}>
            <h2>{subsection.fields.title}</h2>
            {documentToReactComponents(subsection.fields.intro)}
          </div>
        </Section>
      ))}
    </>
  );
}
