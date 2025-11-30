'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

// ============================================
// 📸 INSTAGRAM CONFIGURATION
// ============================================
// Option 1: Use Instagram Basic Display API (recommended for auto-fetching)
//   - Get your access token from Meta Developer Portal
//   - Set NEXT_PUBLIC_INSTAGRAM_TOKEN in .env.local
//
// Option 2: Manual photos array (fallback)
//   - Add your photo URLs directly to the manualPhotos array below
// ============================================

const INSTAGRAM_USERNAME = 'sou_rey';

// Manual photos fallback - replace with your own photos
// You can upload to /public/photos/ or use Cloudinary URLs
const manualPhotos = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    alt: 'Mountain landscape',
    span: 'tall',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
    alt: 'Nature photography',
    span: 'normal',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800',
    alt: 'Forest path',
    span: 'wide',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800',
    alt: 'Waterfall',
    span: 'normal',
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
    alt: 'Lake view',
    span: 'tall',
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
    alt: 'Foggy mountains',
    span: 'normal',
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800',
    alt: 'Valley view',
    span: 'wide',
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800',
    alt: 'Green hills',
    span: 'normal',
  },
];

export default function InstagramGallery() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Visibility animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    async function fetchInstagramPhotos() {
      const token = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;
      
      if (!token) {
        // No token - use manual photos
        console.log('No Instagram token found, using manual photos');
        setPhotos(manualPhotos);
        setLoading(false);
        return;
      }

      try {
        // Fetch from Instagram Basic Display API
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${token}&limit=12`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram photos');
        }

        const data = await response.json();
        
        // Transform Instagram data to our format
        const instagramPhotos = data.data
          .filter(item => item.media_type === 'IMAGE' || item.media_type === 'CAROUSEL_ALBUM')
          .map((item, index) => ({
            id: item.id,
            src: item.media_url || item.thumbnail_url,
            alt: item.caption || 'Instagram photo',
            permalink: item.permalink,
            // Assign spans for masonry effect
            span: index % 5 === 0 ? 'tall' : index % 4 === 0 ? 'wide' : 'normal',
          }));

        setPhotos(instagramPhotos);
      } catch (err) {
        console.error('Instagram fetch error:', err);
        setError('Could not load Instagram photos');
        // Fallback to manual photos
        setPhotos(manualPhotos);
      } finally {
        setLoading(false);
      }
    }

    fetchInstagramPhotos();
  }, []);

  return (
    <section className="py-16 md:py-24 relative">
      {/* Section background */}
      <div className="absolute inset-0 bg-neo-dark/5" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="neo-tag bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white mb-4 inline-block border-white">
              📸 Photography
            </span>
            <h2 className="neo-title text-4xl md:text-5xl lg:text-6xl uppercase">
              Instagram<br />
              <span className="text-neo-orange">Gallery</span>
            </h2>
          </div>
          
          <a 
            href={`https://www.instagram.com/${INSTAGRAM_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="neo-button bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white self-start md:self-end"
          >
            @{INSTAGRAM_USERNAME} ↗
          </a>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i} 
                className={`neo-box bg-gray-200 animate-pulse ${
                  i === 0 || i === 4 ? 'row-span-2 h-[400px] md:h-[440px]' : 'h-[200px] md:h-[220px]'
                }`}
              />
            ))}
          </div>
        )}

        {/* Error Message */}
        {error && !loading && (
          <div className="neo-box p-6 bg-neo-primary/10 text-center mb-8">
            <p className="text-neo-dark font-bold">{error}</p>
            <p className="text-sm text-gray-600 mt-2">Showing curated photos instead</p>
          </div>
        )}

        {/* Photo Grid */}
        {!loading && photos.length > 0 && (
          <div className="masonry-grid">
            {photos.map((photo, idx) => (
              <div
                key={photo.id}
                className={`masonry-item ${photo.span} neo-box p-0 overflow-hidden cursor-pointer group transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neo-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <p className="font-bold text-sm line-clamp-2">{photo.alt}</p>
                      {photo.permalink && (
                        <span className="text-xs text-neo-accent">View on Instagram →</span>
                      )}
                    </div>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute top-2 right-2 w-8 h-8 bg-white/90 border-2 border-neo-dark flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm">↗</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && photos.length === 0 && (
          <div className="neo-box p-12 text-center">
            <span className="text-6xl mb-4 block">📷</span>
            <h3 className="text-2xl font-black uppercase mb-2">No Photos Yet</h3>
            <p className="text-gray-600">Photos will appear here once configured.</p>
          </div>
        )}

        {/* Instagram Setup Note */}
        {!process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN && (
          <div className="mt-8 neo-box p-4 bg-neo-accent/20 border-neo-accent">
            <p className="text-sm font-mono">
              💡 <strong>Tip:</strong> To auto-fetch from Instagram, add your Instagram Basic Display API token to <code className="bg-white px-2 py-1">.env.local</code> as <code className="bg-white px-2 py-1">NEXT_PUBLIC_INSTAGRAM_TOKEN</code>
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-neo-dark/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full" onClick={e => e.stopPropagation()}>
            {/* Close button */}
            <button 
              className="absolute -top-12 right-0 text-white font-black text-xl hover:text-neo-accent transition-colors flex items-center gap-2"
              onClick={() => setSelectedPhoto(null)}
            >
              <span>Close</span>
              <span className="text-2xl">✕</span>
            </button>
            
            <div className="neo-box p-2 bg-white">
              <div className="relative aspect-square md:aspect-video">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
              </div>
              
              <div className="p-4 flex items-center justify-between">
                <p className="font-bold uppercase tracking-wider">{selectedPhoto.alt}</p>
                {selectedPhoto.permalink && (
                  <a 
                    href={selectedPhoto.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-button bg-neo-orange text-white text-sm py-2"
                  >
                    View on IG ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

