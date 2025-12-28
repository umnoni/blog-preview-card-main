import thumbnail from './assets/images/illustration-article.svg'
import user from './assets/images/image-avatar.webp'

export default function App()
{
  return(
    <div className="bg-[#F4D04E] min-h-screen flex items-center justify-center">
      <div className="bg-white border border-[#111111] w-[384px] p-6 rounded-[20px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <img src={thumbnail} className='rounded-[10px] w-full'></img>
        <div className='mt-6'>
          <button className='bg-[#F4D04E] pt-1 pb-1 pl-3 pr-3 rounded-sm font-[Figtree-ExtraBold]'>
            Learning
          </button>
          <p className='mt-3 text-[14px] text-[#111111] font-[Figtree-Medium]'>
            Published 21 Dec 2023
          </p>
          <h1 className='mt-3 text-[24px] text-[#111111] font-[Figtree-ExtraBold] hover:text-[#F4D04E] cursor-pointer transition-colors'>
            HTML & CSS foundations
          </h1>
          <p className='mt-3 text-[16px] text-[#6B6B6B] font-[Figtree-Medium]'>
            These languages are the backbone of every website, defining structure, content, and presentation.
          </p>
        </div>
        <div className='mt-6 flex items-center'>
          <img src={user} className='w-8 h-8'></img>
          <h1 className='text-[14px] text-[#111111] ml-3 font-[Figtree-ExtraBold]'>
            Greg Hooper
          </h1>
        </div>
      </div>
    </div>
  );
}