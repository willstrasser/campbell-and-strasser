import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import SwiperCore, {Autoplay, EffectFade} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

SwiperCore.use([Autoplay, EffectFade]);

import {Images, Intro, Section, Subnav} from './Layout';

export default function PageWithSubsections({images, intro, subsections}) {
  return (
    <>
      <Subnav>
        {subsections.map((subsection) => (
          <a key={subsection.fields.slug} href={`#${subsection.fields.slug}`}>
            {subsection.fields.title}
          </a>
        ))}
      </Subnav>
      <Images>
        <Swiper centeredSlides loop autoplay={{delay: 4000}} speed={2000} effect="fade">
          {images &&
            images.map((image) => (
              <SwiperSlide key={image.sys.id}>
                <img
                  alt={image.image_description}
                  src={`${image.fields.file.url}?w=1000&h=300&fit=fill`}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </Images>
      <Intro>{documentToReactComponents(intro)}</Intro>
      {subsections.map((subsection) => (
        <Section key={subsection.fields.slug}>
          <div id={subsection.fields.slug}>
            <h2>{subsection.fields.title}</h2>
            {documentToReactComponents(subsection.fields.intro)}
          </div>
        </Section>
      ))}
    </>
  );
}
