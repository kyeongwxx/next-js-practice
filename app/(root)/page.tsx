import PagePadding from '@/components/PagePadding';
import Category from './components/Category';
import PlayListCarousel from '@/components/PlayListCarousel';
import { dummyPlaylistArray } from '@/lib/dummyData';
import UserIcon from '@/components/UserIcon';

const page = () => {
  const dummyPlaylistArray1 = [...dummyPlaylistArray];

  return (
    <PagePadding>
      <div className='min-h-[600px]'>
        <div className='mt-9' />
        <Category />

        <div className='mt-12' />
        <PlayListCarousel
          title='다시 듣기'
          subTitle='도도'
          Thumbnail={
            <div className='w-[56px] h-[56px]'>
              <UserIcon size='lg' />
            </div>
          }
          playlistArray={[...dummyPlaylistArray1]}
        />
      </div>
    </PagePadding>
  );
};

export default page;
