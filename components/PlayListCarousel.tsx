import { Playlist } from '@/types';
import React, { ReactNode } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type PlayListCarouselProps = {
  title: string;
  subTitle?: string;
  Thumbnail?: ReactNode;
  playlistArray: Playlist[];
};

const PlayListCarousel: React.FC<PlayListCarouselProps> = ({
  title,
  subTitle,
  Thumbnail,
  playlistArray,
}) => {
  return (
    <div>
      <Carousel className='w-full max-w-xs'>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className='p-1'>Card</div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default PlayListCarousel;
