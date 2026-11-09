import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import type { PortfolioProject } from '../data/projects';

interface Props {
  project: PortfolioProject;
}

export function UGCPerformanceCard({ project }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasVideoError, setHasVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || hasVideoError) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
          video.muted = true;
          setIsMuted(true);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [hasVideoError]);

  const handleToggleAudio = () => {
    const video = videoRef.current;
    if (!video || hasVideoError) return;

    if (video.muted) {
      video.muted = false;
      video.currentTime = 0;
      video.play().catch(() => {});
      setIsMuted(false);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <article
      onClick={handleToggleAudio}
      onContextMenu={(e) => e.preventDefault()}
      className="ugc-card"
      style={{
        aspectRatio: project.aspectRatio === '9:16' ? '9 / 16' : '16 / 9',
      }}
    >
      {!hasVideoError ? (
        <video
          ref={videoRef}
          src={project.videoUrl}
          poster={project.posterUrl}
          muted
          loop
          playsInline
          preload="metadata"
          controlsList="nodownload"
          onError={() => setHasVideoError(true)}
          className="ugc-card__video"
        />
      ) : (
        <div className="ugc-card__placeholder">
          <div className="ugc-card__placeholder-badge">Ready for Local Video Upload</div>
          <code className="ugc-card__placeholder-path">{project.videoUrl}</code>
          <p className="ugc-card__placeholder-folder">Drive Folder: {project.folderOrigin}</p>
        </div>
      )}

      {/* Top Floating Metric Pills */}
      <div className="ugc-card__top-bar">
        <div className="ugc-card__metric-pill">
          <span className="ugc-card__metric-value">{project.primaryMetric.value}</span>{' '}
          {project.primaryMetric.label}
        </div>

        <div className="ugc-card__audio-pill">
          {hasVideoError ? '📁 Awaiting MP4' : isMuted ? '🔇 Tap for Sound' : '🔊 Playing Audio'}
        </div>
      </div>

      {/* Bottom Case Study & Stack Overlay */}
      <div className="ugc-card__bottom-overlay">
        <div className="ugc-card__meta-row">
          <span className="ugc-card__brand">{project.brand}</span>
          <span className="ugc-card__secondary-metric">
            {project.secondaryMetric.value} • {project.secondaryMetric.label}
          </span>
        </div>

        <h3 className="ugc-card__title">{project.title}</h3>
        <p className="ugc-card__hook">
          <strong>Hook:</strong> {project.hookStrategy}
        </p>
        <p className="ugc-card__desc">{project.description}</p>

        <div className="ugc-card__tags">
          {project.stackTags.map((tag) => (
            <span key={tag} className="ugc-card__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
