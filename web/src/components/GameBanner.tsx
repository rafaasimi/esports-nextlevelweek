interface GameBannerProps {
    title: string;
    adsCount: number;
    bannerUrl: string;
}

export function GameBanner(props: GameBannerProps) {
    return (
        <a href="" className="group relative rounded-lg overflow-hidden">
          <img src={props.bannerUrl} className="group-hover:scale-110 transition delay-[300]"/>

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              {props.title}
            </strong>
            <span className="font-bold text-zinc-300 text-sm block">
              {props.adsCount <= 1 ? props.adsCount + ' anúncio' : props.adsCount + ' anúncios'} 
            </span>
          </div>
        </a>
    )
}