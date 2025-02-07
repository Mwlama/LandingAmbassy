import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  videoFile: string;
  link: string;
}

const videos: Video[] = [
  {
    id: '1',
    title: 'Tips',
    videoFile: '/videos/UGC1.mp4',
    link: 'https://www.getyourguide.fr/dubai-l173/dubai-billet-d-entree-au-jardin-des-miracles-avec-transfert-a-l-hotel-t521706/?partner_id=V9D1ECK&currency=EUR&travel_agent=1&cmp=share_to_earn',
  },
  {
    id: '2',
    title: 'AI',
    videoFile: '/videos/UGC6.mp4',
    link: 'https://www.getyourguide.fr/dubai-l173/dubai-safari-dans-le-desert-des-dunes-rouges-avec-diner-barbecue-t74766/?partner_id=V9D1ECK&currency=EUR&travel_agent=1&cmp=share_to_earn',
  },
  {
    id: '3',
    title: 'Procedure',
    videoFile: '/videos/UGC7.mp4',
    link: 'https://www.getyourguide.fr/dubai-l173/dubai-marina-ziplining-experience-avec-photos-et-videos-t301193/?partner_id=V9D1ECK&currency=EUR&travel_agent=1&cmp=share_to_earn',
  },
  {
    id: '4',
    title: 'Imagination',
    videoFile: '/videos/UGC8.mp4',
    link: 'https://www.getyourguide.fr/skydive-dubai-l92336/dubai-sauter-en-parachute-au-dessus-du-palm-ou-du-desert-t298845/?partner_id=V9D1ECK&currency=EUR&travel_agent=1&cmp=share_to_earn',
  },
  {
    id: '5',
    title: 'Winning Products',
    videoFile: '/videos/UGC4.mp4',
    link: 'https://www.getyourguide.fr/dubai-l173/billet-pour-burj-khalifa-t49019/?partner_id=V9D1ECK&currency=EUR&travel_agent=1&cmp=share_to_earn',
  },
  {
    id: '6',
    title: 'AI Avatar',
    videoFile: '/videos/UGC2.mp4',
    link: 'https://www.getyourguide.fr/dubai-islands-l167429/dubai-the-view-at-the-palm-observatory-billet-d-entree-t409529/?partner_id=V9D1ECK&currency=EUR&travel_agent=1&cmp=share_to_earn',
  },
  {
    id: '7',
    title: 'Support',
    videoFile: '/videos/UGC3.mp4',
    link: 'https://www.getyourguide.fr/dubai-l173/dubai-excursion-en-yacht-de-luxe-au-coucher-du-soleil-avec-collations-et-boissons-t463107/?partner_id=V9D1ECK&currency=EUR&travel_agent=1&cmp=share_to_earn',
  },
  {
    id: '8',
    title: 'Knowledge',
    videoFile: '/videos/UGC5.mp4',
    link: 'https://www.getyourguide.fr/dubai-l173/dubai-billet-d-entree-au-global-village-t553170/?partner_id=V9D1ECK&currency=EUR&travel_agent=1&cmp=share_to_earn',
  },
];

const VideoBanner: React.FC = () => {
    return (
      <div className="w-full overflow-hidden">
        <div className="video-banner-scroll">
          <div className="flex gap-4">
            {videos.concat(videos).map((video, index) => (
              <a
                key={`${video.id}-${index}`}
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-none w-[250px] group"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg bg-transparent transition-transform group-hover:scale-105">
                  <div className="aspect-[9/16]">
                    <video
                      src={video.videoFile}
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                      muted
                      loop
                      playsInline
                      autoPlay
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors rounded-2xl" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-bold text-lg mb-1">{video.title}</h3>
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default VideoBanner;
